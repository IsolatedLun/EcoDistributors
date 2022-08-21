<script lang="ts">
	import type { Props_StoreSelected } from '../../../stores/types';
	import FlexyCustom from '../../../components/Alignment/FlexyCustom.svelte';
	import Icon from '../../../components/Modules/Icon/Icon.svelte';
	import Button from '../Buttons/Button.svelte';
	import TextInput from '../Inputs/TextInput.svelte';
	import type { Props_ListSelect } from './types';
	import { iconDict } from '../../../consts';

	function handleSelect(e: Event) {
		const target = e.target as HTMLButtonElement;
		const value = target.getAttribute('data-value') as string;

		if ($selected.includes(value)) {
			selected.remove(value);
		} else {
			selected.add(value);
		}
	}

	export let selected: Props_StoreSelected;
	let searchCategory = '';

	export let items: Props_ListSelect[] = [];
</script>

<TextInput
	placeholder="Search category"
	label="Search categories"
	cubeClass={{ utilClass: 'margin-block-end-1' }}
	bind:value={searchCategory}
/>

<!-- svelte-ignore a11y-no-redundant-roles -->
<ul class="[ select ] [ flex-direction-column gap-1 ]" role="list" data-variant="list">
	{#each items as item}
		<li
			id={item.category + '-select'}
			class="[ pos-relative ]"
			data-explicit-hide={!(item.category.toLowerCase().indexOf(searchCategory.toLowerCase()) > -1)}
		>
			<Button
				use={(e) => e.setAttribute('data-value', item.category)}
				on:click={handleSelect}
				dataSelected={$selected.includes(item.category)}
				variant="hoverable"
				secondaryVariant="select-list-item"
				cubeClass={{
					utilClass: 'flex justify-content-space-between width-100 ignore-children'
				}}
			>
				<FlexyCustom>
					<Icon ariaLabel={`${item.category} Icon`}>
						{#if iconDict[item.category.toLowerCase()]}
							{iconDict[item.category.toLowerCase()]}
						{:else}
							{iconDict['food']}
						{/if}
					</Icon>

					<p>{item.category}</p>
				</FlexyCustom>
				<p>{item.count}</p>

				<input
					tabindex="-1"
					type="checkbox"
					class="[ item__checkbox ] [ pos-absolute ignore-self ]"
					checked={$selected.includes(item.category)}
				/>
			</Button>
		</li>
	{/each}
</ul>
