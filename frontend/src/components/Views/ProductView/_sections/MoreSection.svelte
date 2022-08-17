<script lang="ts">
	import FlexyCustom from '../../../../components/Alignment/FlexyCustom.svelte';
	import Typography from '../../../../components/Modules/Typography/Typography.svelte';
	import TypoHeader from '../../../../components/Modules/Typography/TypoHeader.svelte';
	import ProductTable from './ProductTable.svelte';

	export let details: string[] = [];
</script>

<section class="[ margin-block-2 ] [ under-border ]">
	<TypoHeader h={2}>More about this product</TypoHeader>
	<div class="[ grid-repeater-2 ] [ place-items-start gap-2 ]" data-grid-collapse>
		<ProductTable />
		<FlexyCustom
			tag={'ul'}
			gap={1}
			useColumn={true}
			centerOnMobile={true}
			cubeClass={{ utilClass: 'margin-inline-start-2' }}
		>
			{#if details.length > 0}
				{#each details as detail}
					<li><Typography centerOnMobile={true}>{detail}</Typography></li>
				{/each}
			{:else}
				<li>No key details found!</li>
			{/if}
		</FlexyCustom>
	</div>
</section>
