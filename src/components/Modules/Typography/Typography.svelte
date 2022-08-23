<script lang="ts">
	import { createCubeCSSClass, createDefaultCubeClass } from '../../../utils/cubeCssUtils';

	export let centerOnMobile = false;
	export let fontSize: string | number = 'default';
	export let fontWeight: string | number = 'default';
	export let tag = 'p';

	export let cubeClass = createDefaultCubeClass();

	let _class = createCubeCSSClass(cubeClass, {
		utilClass: `fw-${fontWeight} fs-${fontSize}`
	});
</script>

<svelte:element this={tag} class={_class} data-text-center-mobile={centerOnMobile}>
	<slot />
</svelte:element>
