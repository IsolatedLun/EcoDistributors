<script lang="ts">
	import { CUBE_ICON, GRID_ICON } from '../../../../consts';
	import FlexyCustom from '../../../../components/Alignment/FlexyCustom.svelte';
	import Button from '../../../../components/Interactibles/Buttons/Button.svelte';
	import Icon from '../../../../components/Modules/Icon/Icon.svelte';
	import type { Props_GridLayouts } from '../types';
	import { mq } from '../../../../stores/media-queries/mqStore';

	export let layout: Props_GridLayouts = 'column';

	mq.subscribe((_mq) => {
		if (_mq.state === 2) layout = 'mobile';
	});
</script>

<div data-desktop aria-hidden="true">
	<FlexyCustom>
		<Button
			on:click={() => (layout = 'mobile')}
			variant="hoverable"
			dataSelected={layout === 'mobile'}
		>
			<Icon ariaLabel="Grid icon">{GRID_ICON}</Icon>
		</Button>
		<Button
			on:click={() => (layout = 'column')}
			variant="hoverable"
			dataSelected={layout === 'column'}
		>
			<Icon ariaLabel="Cube icon">{CUBE_ICON}</Icon>
		</Button>
	</FlexyCustom>
</div>
