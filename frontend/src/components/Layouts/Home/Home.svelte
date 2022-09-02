<script lang="ts">
	import BoxSelect from '../../../components/Interactibles/Selects/BoxSelect.svelte';
	import TextInput from '../../../components/Interactibles/Inputs/TextInput.svelte';
	import {
		HOT_ICON,
		INFO_ICON,
		LATEST_ICON,
		SEARCH_ICON,
		TIMES_ICON,
		TOP_ICON,
		UPCOMING_ICON
	} from '../../../consts';
	import Product from '../../../components/Modules/Product/Product.svelte';
	import SecondaryContainer from '../../../components/Containers/SecondaryContainer.svelte';
	import ListSelect from '../../../components/Interactibles/Selects/ListSelect.svelte';
	import ComponentMap from '../../../components/Misc/ComponentMap.svelte';
	import Button from '../../../components/Interactibles/Buttons/Button.svelte';
	import { useSelected } from '../../../stores/main-search/mainSearch';
	import FlexyCustom from '../../../components/Alignment/FlexyCustom.svelte';
	import Icon from '../../../components/Modules/Icon/Icon.svelte';
	import Card from '../../../components/Modules/Card/Card.svelte';
	import TypoHeader from '../../../components/Modules/Typography/TypoHeader.svelte';
	import type { Props_GridLayouts } from './types';
	import GridButtons from './_sections/GridButtons.svelte';
	import { getProductCount, getProducts } from '../../../services/productService';
	import type { Props_StoreSelected } from '../../../stores/types';
	import TagPart from './_sections/TagPart.svelte';
	import { mq } from '../../../stores/media-queries/mqStore';
	import type { Return__POST_Get_Products } from '../../../services/types';
	import Loader from '../../../components/Misc/Loader/Loader.svelte';
	import { onMount } from 'svelte';

	onMount(async () => {
		productCount = (await getProductCount()).count;
	});

	async function handleGetProducts() {
		isFetching = true;
		productsData = await getProducts({
			tags: $selectedTagsHook,
			filters: $selectedFilterHook,
			title: title.trim(),
			sort_by: sortBy,
			show_upcoming: showUpcoming
		}).finally(() => (isFetching = false));
	}

	let gridLayout: Props_GridLayouts = 'column';
	let showFilters = false;
	let isFetching = false;

	let selectedFilterHook: Props_StoreSelected = useSelected();
	let selectedTagsHook: Props_StoreSelected = useSelected();

	let productsData: Return__POST_Get_Products;
	let productCount = 0;
	let title = '';
	let sortBy = 'none';
	let showUpcoming = false;
</script>

<svelte:head>
	<title>Eco | Home</title>
</svelte:head>

<SecondaryContainer>
	<FlexyCustom collapseOnMobile={true} justify="space-between">
		<TextInput
			bind:value={title}
			label={'Search products'}
			secondaryVariant="use-shadow"
			variant="mega"
			cubeClass={{ utilClass: 'width-100' }}
			placeholder={`Search ${productCount} products`}
		/>

		<Button
			on:click={handleGetProducts}
			{isFetching}
			cubeClass={{ utilClass: 'margin-inline-auto' }}
			ariaLabel="Search"><Icon>{SEARCH_ICON}</Icon></Button
		>
	</FlexyCustom>

	<div class="[ grid ] [ place-items-center ]">
		<FlexyCustom>
			<BoxSelect
				cubeClass={{ utilClass: 'margin-block-3' }}
				canDeselect={true}
				on:select={(e) => (sortBy = e.detail.type)}
				options={[
					{ text: 'Top', icon: TOP_ICON },
					{ text: 'Latest', icon: LATEST_ICON },
					{ text: 'Hot', icon: HOT_ICON }
				]}
			/>
			<BoxSelect
				options={[{ text: 'Upcoming', icon: UPCOMING_ICON }]}
				on:select={(e) => (showUpcoming = e.detail.type === 'Upcoming')}
				canDeselect={true}
			/>
		</FlexyCustom>
	</div>

	<div class="[ margin-block-end-3 ]" data-mobile>
		<Button on:click={() => (showFilters = !showFilters)}>
			{#if showFilters}
				Hide filters
			{:else}
				Show filters
			{/if}
		</Button>
	</div>
</SecondaryContainer>

{#await handleGetProducts()}
	<Loader />
{:then _}
	<div class="[ home-grid ] [ border-radius-cubed  gap-2 ]" data-grid-collapse>
		{#if showFilters || $mq.state !== 2}
			<Card
				cubeClass={{
					blockClass: 'products__filters',
					utilClass: 'padding-1 height-fit-content'
				}}
			>
				<Button
					on:click={handleGetProducts}
					{isFetching}
					cubeClass={{
						utilClass: 'flex gap-1 margin-block-end-1 width-100 justify-content-center'
					}}
				>
					<p>Search</p>
					<Icon ariaLabel="Search icon">{SEARCH_ICON}</Icon>
				</Button>
				<TagPart tagHook={selectedTagsHook} />
				<ListSelect bind:selected={selectedFilterHook} items={productsData.categories} />
			</Card>
		{/if}

		<div class="[ product__results ]">
			<FlexyCustom justify="space-between">
				<FlexyCustom tag="section" align="center">
					<TypoHeader h={2} cubeClass={{ utilClass: 'whitespace-nowrap ' }}>Categories:</TypoHeader>
					<!-- svelte-ignore a11y-no-redundant-roles -->
					<ul role="list" class="[ flex gap-1 flex-wrap ]">
						{#if $selectedFilterHook.length > 0}
							{#each $selectedFilterHook as item}
								<li>
									<Button variant="filter" on:click={() => selectedFilterHook.remove(item)}>
										<FlexyCustom>
											<p>{item}</p>
											<Icon cubeClass={{ utilClass: 'fs-350' }}>{TIMES_ICON}</Icon>
										</FlexyCustom>
									</Button>
								</li>
							{/each}
						{:else}
							<li>
								<Button variant="filter" cubeClass={{ utilClass: 'ignore-self' }}
									>No categories</Button
								>
							</li>
						{/if}
					</ul>
				</FlexyCustom>

				<GridButtons bind:layout={gridLayout} />
			</FlexyCustom>

			<section class="[ margin-block-start-1 ]">
				<TypoHeader h={2}
					>{productsData.products.length}
					<span class="[ sr-only ]"> product</span>
					{productsData.products.length > 1 ? 'Results' : 'Result'}
				</TypoHeader>
				<div class="[ products ] [ grid gap-2 margin-block-start-2 ]" data-mode={gridLayout}>
					<ComponentMap
						items={productsData.products}
						_this={Product}
						on:event={(e) => {
							const name = e.detail.name;
							if (!$selectedTagsHook.includes(name)) selectedTagsHook.add(name);
						}}
					/>
				</div>
			</section>
		</div>
	</div>
{:catch}
	<div class="[ grid place-items-center ]">
		<Card variant="primary" cubeClass={{ utilClass: 'padding-block-1 padding-inline-2' }}>
			<FlexyCustom>
				<Icon ariaLabel="Info icon" cubeClass={{ utilClass: 'clr-primary-400' }}>{INFO_ICON}</Icon>
				<p class={`[ fs-500 ]`}>Something went wrong.</p>
			</FlexyCustom>
		</Card>
	</div>
{/await}
