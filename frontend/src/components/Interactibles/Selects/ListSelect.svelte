<script lang="ts">
	import FlexyCustom from '../../../components/Alignment/FlexyCustom.svelte';
	import Icon from '../../../components/Modules/Icon/Icon.svelte';
	import Button from '../Buttons/Button.svelte';
	import TextInput from '../Inputs/TextInput.svelte';
	import type { Props_ListSelect } from './types';

	function handleSelect(e: Event) {
		const target = e.target as HTMLButtonElement;
		const checkbox = target.querySelector('input[type="checkbox"]') as HTMLInputElement;
		const value = target.getAttribute('data-value') as string;

		if (selected.includes(value)) {
			target.setAttribute('data-selected', 'false');

			selected = selected.filter((x) => x !== value);
			checkbox.checked = false;
		} else {
			target.setAttribute('data-selected', 'true');

			selected = [...selected, value];
			checkbox.checked = true;
		}
	}

	let selected: string[] = [];
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
			class="[ pos-relative ]"
			data-explicit-hide={!(item.name.toLowerCase().indexOf(searchCategory.toLowerCase()) > -1)}
		>
			<Button
				use={(e) => e.setAttribute('data-value', item.name)}
				on:click={handleSelect}
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

				<input type="checkbox" class="[ item__checkbox ] [ ignore-self ]" />
			</Button>
		</li>
	{/each}
</ul>
