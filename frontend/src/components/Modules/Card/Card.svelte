<script lang="ts">
	import type { EventFunction } from '../../../types';
	import { createCubeCSSClass, createDefaultCubeClass } from '../../../utils/cubeCssUtils';
	import type { Props_CubeCSS } from '../../../utils/types';
	import { onMount } from 'svelte';

	onMount(() => {
		use(_this);
	});

	export let cubeClass: Props_CubeCSS = createDefaultCubeClass();
	export let tag = 'div';
	export let variant = 'default';
	export let use: EventFunction<HTMLElement> = (e) => null;

	const _class = createCubeCSSClass(cubeClass, {
		compostClass: 'card'
	});

	let _this: HTMLElement;
</script>

<svelte:element this={tag} class={_class} bind:this={_this} data-card-variant={variant}>
	<slot />
</svelte:element>
