<script lang="ts">
	import BoxSelect from '../../../components/Interactibles/Selects/BoxSelect.svelte';
	import TextInput from '../../../components/Interactibles/Inputs/TextInput.svelte';
	import {
		HOT_ICON,
		LATEST_ICON,
		MOCK_FILTERS,
		MOCK_PRODUCTS,
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
	import { attrSetter } from '../../../utils/misc';
	import TypoHeader from '../../../components/Modules/Typography/TypoHeader.svelte';
	import type { Props_GridLayouts } from './types';
	import GridButtons from './_sections/GridButtons.svelte';

	let gridLayout: Props_GridLayouts = 'column';
	let showFilters = false;
	let selectedHook = useSelected();
</script>

<svelte:head>
	<title>Eco | Home</title>
</svelte:head>

<SecondaryContainer>
	<TextInput
		secondaryVariant="use-shadow"
		variant="mega"
		placeholder="Search 24,563,123 products"
	/>

	<div class="[ grid ] [ place-items-center ]">
		<BoxSelect
			cubeClass={{ utilClass: 'margin-block-3' }}
			options={[
				{ text: 'Top', icon: TOP_ICON },
				{ text: 'Latest', icon: LATEST_ICON },
				{ text: 'Hot', icon: HOT_ICON },
				{ text: 'Upcoming', icon: UPCOMING_ICON }
			]}
		/>
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

<div class="[ home-grid ] [ border-radius-cubed  gap-2 ]" data-grid-collapse>
	<Card
		cubeClass={{ blockClass: 'products__filters', utilClass: 'padding-1 height-fit-content' }}
		use={(e) => attrSetter(e, [{ name: 'data-desktop', value: '' }])}
	>
		<ListSelect bind:selected={selectedHook} items={MOCK_FILTERS} />
	</Card>

	{#if showFilters}
		<Card
			cubeClass={{ blockClass: 'products__filters', utilClass: 'padding-1' }}
			use={(e) => attrSetter(e, [{ name: 'data-mobile', value: '' }])}
		>
			<ListSelect bind:selected={selectedHook} items={MOCK_FILTERS} />
		</Card>
	{/if}

	<div class="[ product__results ]">
		<FlexyCustom justify="space-between">
			<FlexyCustom tag="section" align="start">
				<TypoHeader h={2} cubeClass={{ utilClass: 'whitespace-nowrap ' }}>
					{MOCK_PRODUCTS.length} <span class="[ sr-only ]">product</span> Results
				</TypoHeader>
				<!-- svelte-ignore a11y-no-redundant-roles -->
				<ul role="list" class="[ flex gap-1 flex-wrap ]">
					{#if $selectedHook.length > 0}
						{#each $selectedHook as item}
							<li>
								<Button variant="filter" on:click={() => selectedHook.remove(item)}>
									<FlexyCustom>
										<p>{item}</p>
										<Icon cubeClass={{ utilClass: 'fs-350' }}>{TIMES_ICON}</Icon>
									</FlexyCustom>
								</Button>
							</li>
						{/each}
					{:else}
						<li>
							<Button variant="filter" cubeClass={{ utilClass: 'ignore-self' }}>No filters</Button>
						</li>
					{/if}
				</ul>
			</FlexyCustom>

			<GridButtons bind:layout={gridLayout} />
		</FlexyCustom>

		<div class="[ products ] [ grid gap-2 margin-block-start-2 ]" data-mode={gridLayout}>
			<ComponentMap items={MOCK_PRODUCTS} _this={Product} />
		</div>
	</div>
</div>
