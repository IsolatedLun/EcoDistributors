<script lang="ts">
	import type { Props_CubeCSS } from '../../../utils/types';
	import { createCubeCSSClass, createDefaultCubeClass } from '../../../utils/cubeCssUtils';

	export let cubeClass: Props_CubeCSS = createDefaultCubeClass();
	export let variant = 'default';
	export let secondaryVariant = 'default';
	export let ariaLabel = 'Button';

	const _class = createCubeCSSClass(cubeClass, {
		compostClass: 'button'
	});
</script>

<button
	on:click
	class={_class}
	data-variant={variant}
	data-secondary-variant={secondaryVariant}
	aria-label={ariaLabel}
>
	<slot />
</button>
