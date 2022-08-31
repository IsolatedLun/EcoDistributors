<script lang="ts">
	import Icon from '../../../../components/Modules/Icon/Icon.svelte';
	import type { Props_StoreSelected } from '../../../../stores/types';
	import FlexyCustom from '../../../../components/Alignment/FlexyCustom.svelte';
	import Button from '../../../../components/Interactibles/Buttons/Button.svelte';
	import TypoHeader from '../../../../components/Modules/Typography/TypoHeader.svelte';
	import { PLUS_ICON, TIMES_ICON } from '../../../../consts';
	import TextInput from '../../../../components/Interactibles/Inputs/TextInput.svelte';

	function handleAddNewTag() {
		if (newTag) {
			tagHook.add(newTag);
			newTag = '';
		}
	}

	export let tagHook: Props_StoreSelected;

	let newTag: string = '';
</script>

<div class="[ margin-block-2 padding-inline-1 ]">
	<FlexyCustom cubeClass={{ utilClass: 'margin-block-1' }}>
		<TextInput
			label="Add tag"
			cubeClass={{ utilClass: 'width-100' }}
			bind:value={newTag}
			placeholder="Add a tag"
		/>
		<Button on:click={handleAddNewTag} secondaryVariant="cube" cubeClass={{ utilClass: 'fs-350' }}>
			<FlexyCustom gap={1}>
				<p>Add</p>
				<Icon cubeClass={{ utilClass: 'fs-350' }}>{PLUS_ICON}</Icon>
			</FlexyCustom>
		</Button>
	</FlexyCustom>
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
