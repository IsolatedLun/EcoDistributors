<script lang="ts">
	import type { Props_CubeCSS } from '../../../utils/types';
	import { createCubeCSSClass, createDefaultCubeClass } from '../../../utils/cubeCssUtils';

	export let tag = 'span';
	export let cubeClass: Props_CubeCSS = createDefaultCubeClass();
	export let ariaLabel = 'An icon';

	const _class = createCubeCSSClass(cubeClass, {
		compostClass: 'icon'
	});
</script>

<svelte:element this={tag} class={_class} aria-label={ariaLabel} aria-hidden="true">
	<slot />
</svelte:element>
