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
	export let label: string;
	export let value = '';
	export let id = 'window.crypto.randomUUID()';
	export let type: 'text' | 'email' | 'password' = 'text';

	const _class = createCubeCSSClass(cubeClass, {
		compostClass: 'input'
	});

	let _this: HTMLInputElement;
	let errors: string[] = [];
</script>

<div class={_class}>
	<label for={id} class="[ sr-only ]">{label}</label>
	<input
		use:setType
		bind:value
		{id}
		class="[ input ] [  width-100 ]"
		data-variant={variant}
		data-secondary-variant={secondaryVariant}
		{placeholder}
	/>
	<slot />
</div>
