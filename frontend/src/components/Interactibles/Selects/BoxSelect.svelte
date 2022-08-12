<script lang="ts">
	import Icon from '../../../components/Modules/Icon/Icon.svelte';
	import { HOT_ICON } from '../../../consts';
	import { createCubeCSSClass, createDefaultCubeClass } from '../../../utils/cubeCssUtils';
	import type { Props_Select } from './types';

	function handleSelect(e: Event) {
		const target = e.target as HTMLElement;

		_thisList.querySelectorAll('li').forEach((el) => el.setAttribute('data-selected', 'false'));
		target.setAttribute('data-selected', 'true');
	}

	export let options: Props_Select[] = [];
	export let cubeClass = createDefaultCubeClass();

	let _class = createCubeCSSClass(cubeClass, {
		compostClass: 'select',
		utilClass: 'flex align-items-center'
	});

	let _thisList: HTMLElement;
</script>

<!-- svelte-ignore a11y-no-redundant-roles -->
<ul bind:this={_thisList} role="list" class={_class} data-variant="box-select">
	{#each options as option}
		<li
			class="[ fw-bold cursor-pointer ignore-children flex gap-2 align-items-center ]"
			on:click={handleSelect}
			tabindex="-1"
		>
			{#if option.icon}
				<Icon ariaLabel={`${option.text} Icon`}>{option.icon}</Icon>
			{/if}
			<p data-desktop>{option.text}</p>
		</li>
	{/each}
</ul>
