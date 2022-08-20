<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	import Icon from '../../../components/Modules/Icon/Icon.svelte';
	import { createCubeCSSClass, createDefaultCubeClass } from '../../../utils/cubeCssUtils';
	import Button from '../Buttons/Button.svelte';
	import type { Props_Select } from './types';

	function handleSelect(e: Event, type: string) {
		const target = e.target as HTMLElement;
		const attr = target.getAttribute('data-selected')! as 'true' | 'false';

		_thisList
			.querySelectorAll('.button')
			.forEach((el) => el.setAttribute('data-selected', 'false'));

		if (attr === 'true' && canDeselect) {
			dispatch('select', {
				type: 'none'
			});
			target.setAttribute('data-selected', 'false');
		} else {
			dispatch('select', {
				type
			});
			target.setAttribute('data-selected', 'true');
		}
	}

	export let options: Props_Select[] = [];
	export let cubeClass = createDefaultCubeClass();
	export let canDeselect = false;

	let _class = createCubeCSSClass(cubeClass, {
		compostClass: 'select',
		utilClass: 'flex align-items-center'
	});

	let _thisList: HTMLElement;

	const dispatch = createEventDispatcher();
</script>

<!-- svelte-ignore a11y-no-redundant-roles -->
<ul bind:this={_thisList} role="list" class={_class} data-variant="box-select">
	{#each options as option}
		<li>
			<Button
				on:click={(e) => handleSelect(e, option.text)}
				variant="none"
				cubeClass={{
					blockClass: 'box-select-button',
					utilClass: 'fw-bold cursor-pointer ignore-children flex gap-2 align-items-center'
				}}
			>
				{#if option.icon}
					<Icon ariaLabel={`${option.text} Icon`}>{option.icon}</Icon>
				{/if}
				<p data-desktop>{option.text}</p>
			</Button>
		</li>
	{/each}
</ul>
