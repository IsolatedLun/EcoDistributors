<script lang="ts">
	import { createCubeCSSClass, createDefaultCubeClass } from '../../../utils/cubeCssUtils';
	import type { Props_CubeCSS } from '../../../utils/types';

	function setType(node: HTMLInputElement) {
		node.type = type;
	}

	export let cubeClass: Props_CubeCSS = createDefaultCubeClass({
		blockClass: 'input-container',
		utilClass: 'width-100'
	});

	export let variant = 'default';
	export let secondaryVariant = 'default';
	export let placeholder = 'Enter text';
	export let value = '';
	export let type: 'text' | 'email' | 'password' = 'text';

	const _class = createCubeCSSClass(cubeClass, {
		compostClass: 'input'
	});

	let _this: HTMLInputElement;
	let errors: string[] = [];
</script>

<div class={_class}>
	<input
		use:setType
		bind:value
		class="[ input ] [  width-100 ]"
		data-variant={variant}
		data-secondary-variant={secondaryVariant}
		{placeholder}
	/>
	<slot />
</div>
