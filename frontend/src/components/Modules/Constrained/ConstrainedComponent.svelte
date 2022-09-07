<script lang="ts">
	import { INFO_ICON } from '../../../consts';

	import { createCubeCSSClass, createDefaultCubeClass } from '../../../utils/cubeCssUtils';
	import FlexyCustom from '../../Alignment/FlexyCustom.svelte';
	import Card from '../Card/Card.svelte';
	import Icon from '../Icon/Icon.svelte';
	import type { Props_Constraint } from './types';

	export let cubeClass = createDefaultCubeClass();
	// Must be in order to make sense eg. Logged constrained first, then the other one's...
	export let constraints: Props_Constraint[] = [];

	let _class = createCubeCSSClass(cubeClass, {
		blockClass: 'constraint-container',
		utilClass: 'pos-relative'
	});
</script>

<div class={_class} data-has-constraints={constraints.length > 0 && !constraints[0].bool}>
	{#if constraints.length > 0 && !constraints[0].bool}
		<Card
			variant="primary"
			cubeClass={{
				blockClass: 'constraint__card',
				utilClass: 'pos-absolute padding-block-1 padding-inline-2'
			}}
		>
			<FlexyCustom useColumn={true}>
				<Icon cubeClass={{ utilClass: 'fs-500 clr-primary-500' }}>{INFO_ICON}</Icon>
				<p class="[ text-center ]">{constraints[0].text}</p>
			</FlexyCustom>
		</Card>
	{/if}
	<div class="[ constraint__content ] [ width-100 ]">
		<slot />
	</div>
</div>
