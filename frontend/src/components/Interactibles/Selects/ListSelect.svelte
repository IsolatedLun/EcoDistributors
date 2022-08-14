<script lang="ts">
	import type { Props_StoreSelected } from '../../../stores/types';
	import FlexyCustom from '../../../components/Alignment/FlexyCustom.svelte';
	import Icon from '../../../components/Modules/Icon/Icon.svelte';
	import Button from '../Buttons/Button.svelte';
	import TextInput from '../Inputs/TextInput.svelte';
	import type { Props_ListSelect } from './types';

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
	cubeClass={{ utilClass: 'margin-block-end-1' }}
	bind:value={searchCategory}
/>

<!-- svelte-ignore a11y-no-redundant-roles -->
<ul class="[ select ] [ flex-direction-column gap-1 ]" role="list" data-variant="list">
	{#each items as item}
		<li
			id={item.name + '-select'}
			class="[ pos-relative ]"
			data-explicit-hide={!(item.name.toLowerCase().indexOf(searchCategory.toLowerCase()) > -1)}
		>
			<Button
				use={(e) => e.setAttribute('data-value', item.name)}
				on:click={handleSelect}
				dataSelected={$selected.includes(item.name)}
				variant="hoverable"
				secondaryVariant="select-list-item"
				cubeClass={{
					utilClass: 'flex justify-content-space-between width-100 ignore-children'
				}}
			>
				<FlexyCustom>
					<Icon ariaLabel={`${item.name} Icon`}>{item.icon}</Icon>
					<p>{item.name}</p>
				</FlexyCustom>
				<p>{item.amount}</p>

				<input
					tabindex="-1"
					type="checkbox"
					class="[ item__checkbox ] [ pos-absolute ignore-self ]"
					checked={$selected.includes(item.name)}
				/>
			</Button>
		</li>
	{/each}
</ul>
