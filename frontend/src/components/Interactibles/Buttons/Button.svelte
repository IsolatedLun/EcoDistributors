<script lang="ts">
	import type { Props_CubeCSS } from '../../../utils/types';
	import { createCubeCSSClass, createDefaultCubeClass } from '../../../utils/cubeCssUtils';
	import { onMount } from 'svelte';
	import type { EventFunction } from '../../../types';
	import Icon from '../../Modules/Icon/Icon.svelte';
	import { SPINNER_ICON } from '../../../consts';

	onMount(() => {
		use(_this);
	});

	export let cubeClass: Props_CubeCSS = createDefaultCubeClass();
	export let variant = 'default';
	export let secondaryVariant = 'default';
	export let dataSelected = false;
	export let workCondition = true;
	export let ariaLabel = 'Button';
	export let isFetching = false;
	export let use: EventFunction<HTMLButtonElement> = (e) => null;

	const _class = createCubeCSSClass(cubeClass, {
		compostClass: 'button',
		utilClass: 'pos-relative'
	});

	let _this: HTMLButtonElement;
</script>

<button
	on:click
	on:mousedown
	on:mouseup
	bind:this={_this}
	class={_class}
	data-variant={variant}
	data-selected={dataSelected}
	data-secondary-variant={secondaryVariant}
	data-work-condition={workCondition && !isFetching}
	data-async-loading={isFetching}
	aria-label={ariaLabel}
>
	{#if isFetching}
		<Icon cubeClass={{ blockClass: 'button__loader', utilClass: 'pos-absolute fs-600' }}
			>{SPINNER_ICON}</Icon
		>
	{/if}
	<slot />
</button>
