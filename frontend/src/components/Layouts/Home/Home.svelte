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

	let showFilters = false;
	let selectedHook = useSelected();
</script>

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

	<div class="[ margin-block-end-1 ]" data-mobile>
		<Button on:click={() => (showFilters = !showFilters)}>
			{#if showFilters}
				Hide filters
			{:else}
				Show filters
			{/if}
		</Button>
	</div>
</SecondaryContainer>

<div class="[ home-grid ] [ border-radius-cubed padding-1 gap-2 ]" data-grid-collapse>
	<section class="[ products__filters ]" data-desktop>
		<ListSelect bind:selected={selectedHook} items={MOCK_FILTERS} />
	</section>

	{#if showFilters}
		<section class="[ products__filters ]" data-mobile>
			<ListSelect bind:selected={selectedHook} items={MOCK_FILTERS} />
		</section>
	{/if}

	<section class="[ product__results ] [ padding-1 ]" data-mode="column">
		<FlexyCustom>
			<h2 class="[ fw-500 whitespace-nowrap ]">{MOCK_PRODUCTS.length} Results</h2>
			<!-- svelte-ignore a11y-no-redundant-roles -->
			<ul role="list" class="[ flex gap-1 flex-wrap ]">
				{#if $selectedHook.length > 0}
					{#each $selectedHook as item}
						<li>
							<Button variant="filter">
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

		<div class="[ products ] [ margin-block-start-2 ]">
			<ComponentMap items={MOCK_PRODUCTS} _this={Product} />
		</div>
	</section>
</div>
