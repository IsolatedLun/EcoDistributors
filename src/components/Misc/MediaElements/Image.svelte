<script lang="ts">
	import type { Props_CubeCSS } from '../../../utils/types';
	import { createCubeCSSClass, createDefaultCubeClass } from '../../../utils/cubeCssUtils';
	import type { Props_Profile } from './types';
	import type { EventFunction } from '../../../types';
	import { onMount } from 'svelte';

	onMount(() => {
		use(_this);
	});

	export let props: Props_Profile = {
		src: '',
		alt: ''
	};
	export let cubeClass: Props_CubeCSS = createDefaultCubeClass();
	export let useRandFilter = false;
	export let isProfile = false;
	export let use: EventFunction<HTMLImageElement> = () => null;

	const _class = createCubeCSSClass(cubeClass, {});

	let _this: HTMLImageElement;
	let isTooSmall = false;
</script>

<img
	bind:this={_this}
	loading="lazy"
	class={_class}
	src={props.src}
	alt={props.alt}
	data-media-error="false"
	data-profile={isProfile}
	data-small={false}
/>
