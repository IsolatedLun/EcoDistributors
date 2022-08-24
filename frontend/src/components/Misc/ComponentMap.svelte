<script lang="ts">
	import { INFO_ICON } from '../../consts';
	import { createEventDispatcher } from 'svelte';
	import FlexyCustom from '../Alignment/FlexyCustom.svelte';
	import Card from '../Modules/Card/Card.svelte';
	import Icon from '../Modules/Icon/Icon.svelte';

	function handleEvent(data: any) {
		dispatch('event', {
			...data
		});
	}

	export let items: any[] = [];
	export let ignoreByIds: number[] = [];
	export let otherProps = {};
	export let _this: any;
	export let fontSize = 400;
	export let fallbackText = 'No items found.';

	const dispatch = createEventDispatcher();
</script>

{#if items.length - ignoreByIds.length > 0}
	{#each items as props}
		<!-- If there is no id in the props | OR | there is an id and it's not in the ignore list -->
		{#if !props.id || !(props.id && ignoreByIds.includes(props.id))}
			<svelte:component
				this={_this}
				props={{ ...props, ...otherProps }}
				on:event={(e) => handleEvent(e.detail)}
			/>
		{/if}
	{/each}
{:else}
	<div class="[ grid place-items-center ]">
		<Card variant="primary" cubeClass={{ utilClass: 'padding-block-1 padding-inline-2' }}>
			<FlexyCustom>
				<Icon ariaLabel="Info icon" cubeClass={{ utilClass: 'clr-primary-400' }}>{INFO_ICON}</Icon>
				<p class={`[ fs-${fontSize} ]`}>{fallbackText}</p>
			</FlexyCustom>
		</Card>
	</div>
{/if}
