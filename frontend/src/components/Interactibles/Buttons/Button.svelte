<script lang="ts">
	import type { Props_CubeCSS } from '../../../utils/types';
	import { createCubeCSSClass, createDefaultCubeClass } from '../../../utils/cubeCssUtils';
	import { onMount } from 'svelte';
	import type { EventFunction } from '../../../types';

	onMount(() => {
		use(_this);
	});

	export let cubeClass: Props_CubeCSS = createDefaultCubeClass();
	export let variant = 'default';
	export let secondaryVariant = 'default';
	export let dataSelected = false;
	export let ariaLabel = 'Button';
	export let use: EventFunction<HTMLButtonElement> = (e) => null;

	const _class = createCubeCSSClass(cubeClass, {
		compostClass: 'button'
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
	aria-label={ariaLabel}
>
	<slot />
</button>
