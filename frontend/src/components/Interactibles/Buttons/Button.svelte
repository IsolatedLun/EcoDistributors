<script lang="ts">
	import type { Props_CubeCSS } from '../../../utils/types';
	import { createCubeCSSClass, createDefaultCubeClass } from '../../../utils/cubeCssUtils';
	import { onMount } from 'svelte';

	onMount(() => {
		use(_this);
	});

	export let cubeClass: Props_CubeCSS = createDefaultCubeClass();
	export let variant = 'default';
	export let secondaryVariant = 'default';
	export let ariaLabel = 'Button';
	export let use: Function = () => null;

	const _class = createCubeCSSClass(cubeClass, {
		compostClass: 'button'
	});

	let _this: HTMLButtonElement;
</script>

<button
	on:click
	bind:this={_this}
	class={_class}
	data-variant={variant}
	data-secondary-variant={secondaryVariant}
	aria-label={ariaLabel}
>
	<slot />
</button>
