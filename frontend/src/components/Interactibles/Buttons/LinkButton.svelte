<script lang="ts">
	import type { Props_CubeCSS } from '../../../utils/types';
	import { createCubeCSSClass, createDefaultCubeClass } from '../../../utils/cubeCssUtils';

	export let cubeClass: Props_CubeCSS = createDefaultCubeClass();
	export let variant = 'default';
	export let secondaryVariant = 'default';
	export let ariaLabel = 'Link button';
	export let to = '/';

	const _class = createCubeCSSClass(cubeClass, {
		compostClass: 'button'
	});
</script>

<a
	href={to}
	on:click
	class={_class}
	data-variant={variant}
	data-secondary-variant={secondaryVariant}
	aria-label={ariaLabel}
>
	<slot />
</a>
