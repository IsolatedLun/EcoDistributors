<script lang="ts">
	import type { Props_CubeCSS } from '../../utils/types';
	import { createCubeCSSClass, createDefaultCubeClass } from '../../utils/cubeCssUtils';

	export let gap = 2;
	export let cubeClass: Props_CubeCSS = createDefaultCubeClass();
	export let useColumn = false;
	export let align = 'center';
	export let justify = '';
	export let tag = 'div';

	const _class = createCubeCSSClass(cubeClass, {
		compostClass: `${
			useColumn ? 'flex-direction-column' : 'flex'
		} gap-${gap} align-items-${align} justify-content-${justify}`
	});
</script>

<svelte:element this={tag} class={_class}>
	<slot />
</svelte:element>
