<script lang="ts">
	import { attrSetter } from '../../../utils/misc';
	import FlexyCustom from '../../../components/Alignment/FlexyCustom.svelte';
	import { createDefaultProductPreview } from '../../../utils/defaultCreates';
	import Card from '../Card/Card.svelte';
	import StarRater from '../StarRater/StarRater.svelte';

	export let props = createDefaultProductPreview();
</script>

<Card
	cubeClass={{
		blockClass: 'product',
		utilClass: 'flex overflow-hidden'
	}}
>
	<!-- Clamp image size for mobile -->
	<div class="[ product__image ]">
		<img src={props.thumbnail} alt={`${props.title}'s profile`} />
	</div>
	<FlexyCustom
		cubeClass={{ blockClass: 'product__content', utilClass: 'padding-1 margin-block-1' }}
		useColumn={true}
		align="start"
		justify="space-between"
	>
		<FlexyCustom useColumn={true} align="start" gap={1}>
			<!-- Clamp line -->
			<a href={`/products/${props.id}/${props.title}`} class="[ text-ellipsis-2 ] [ fs-500 ]"
				>{props.title}</a
			>
			<StarRater />
		</FlexyCustom>
		<p class="[ product__price ]">${props.price}</p>
		<!-- Add related category tags -->
	</FlexyCustom>
</Card>
