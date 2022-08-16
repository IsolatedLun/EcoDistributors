<script lang="ts">
	import { combineCubeClasses, createDefaultCubeClass } from '../../../utils/cubeCssUtils';
	import Typography from './Typography.svelte';

	export let h: number;
	export let cubeClass = createDefaultCubeClass();
	export let spacing = 1;

	let combinedCubeClass = combineCubeClasses(cubeClass, {
		utilClass: `margin-block-end-${spacing}`
	});
</script>

<Typography tag={`h${h}`} cubeClass={{ ...combinedCubeClass }} fontWeight="heading">
	<slot />
</Typography>
