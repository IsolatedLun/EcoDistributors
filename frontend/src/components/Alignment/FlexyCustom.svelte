<script lang="ts">
	import type { Props_CubeCSS } from '../../utils/types';
	import { createCubeCSSClass, createDefaultCubeClass } from '../../utils/cubeCssUtils';
	import { onMount } from 'svelte';
	import type { EventFunction } from '../../types';

	onMount(() => {
		use(_this);
	});

	export let gap = 2;
	export let cubeClass: Props_CubeCSS = createDefaultCubeClass();
	export let useColumn = false;
	export let centerOnMobile = false;
	export let justifyOnMobile = false;
	export let collapseOnMobile = false;
	export let align = 'center';
	export let justify = '';
	export let tag = 'div';

	let _this: HTMLElement;
	export let use: EventFunction<HTMLElement> = () => null;

	const _class = createCubeCSSClass(cubeClass, {
		compostClass: `${useColumn ? 'flex-direction-column' : 'flex'} 
		gap-${gap} 
		align-items-${align} 
		justify-content-${justify}`
	});
</script>

<svelte:element
	this={tag}
	bind:this={_this}
	class={_class}
	data-align-mobile={centerOnMobile}
	data-justify-mobile={justifyOnMobile}
	data-explicit-flex-collapse={collapseOnMobile}
>
	<slot />
</svelte:element>
