<script lang="ts">
	import Icon from '../../../../components/Modules/Icon/Icon.svelte';

	import type { Props_StoreSelected } from 'src/stores/types';

	import FlexyCustom from '../../../../components/Alignment/FlexyCustom.svelte';
	import Button from '../../../../components/Interactibles/Buttons/Button.svelte';
	import TypoHeader from '../../../../components/Modules/Typography/TypoHeader.svelte';
	import { TIMES_ICON } from '../../../../consts';

	export let tagHook: Props_StoreSelected;
</script>

<div class="[ margin-block-2 padding-inline-1 ]">
	<TypoHeader h={2}>Tags</TypoHeader>
	<FlexyCustom gap={1} cubeClass={{ utilClass: 'margin-block-1 flex-wrap' }}>
		{#if $tagHook.length > 0}
			{#each $tagHook as tag}
				<Button variant="filter" on:click={() => tagHook.remove(tag)}>
					<FlexyCustom>
						<p>{tag}</p>
						<Icon cubeClass={{ utilClass: 'fs-350' }}>{TIMES_ICON}</Icon>
					</FlexyCustom>
				</Button>
			{/each}
		{:else}
			<Button variant="filter">No tags</Button>
		{/if}
	</FlexyCustom>
</div>
