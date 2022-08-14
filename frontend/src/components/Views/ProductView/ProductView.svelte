<script>
	import { mq } from '../../../stores/media-queries/mqStore';
	import FlexyCustom from '../../../components/Alignment/FlexyCustom.svelte';
	import Button from '../../../components/Interactibles/Buttons/Button.svelte';
	import ProductImageViewer from './_sections/ProductImageViewer.svelte';
	import { createDefaultProduct } from '../../../utils/defaultCreates';
	import QuantityInput from '../../../components/Interactibles/Inputs/QuantityInput.svelte';
	import StarRater from '../../../components/Modules/StarRater/StarRater.svelte';

	export let props = createDefaultProduct();

	let quantity = 1;
</script>

<div class="[ product-view ] [ width-100 ]">
	<header class="[ view__header ] [ grid gap-1 ]" data-grid-collapse>
		<ProductImageViewer />
		<FlexyCustom
			cubeClass={{
				blockClass: 'products__content',
				compostClass: 'card',
				utilClass: `padding-2 ${$mq.state === 2 ? 'margin-block-start-2' : ''} border-radius-cubed`
			}}
			align="start"
			useColumn={true}
			tag="section"
			justify="space-between"
		>
			<FlexyCustom useColumn={true} align="start" gap={1}>
				<h2>Playstation 5</h2>
				<StarRater />
			</FlexyCustom>
			<section class="[ margin-block-1 ]">
				<h3 class="[ margin-block-end-1 ]">About this item</h3>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat consectetur sequi
					laudantium aut quis sunt maxime saepe hic, suscipit accusamus incidunt, laborum expedita
					consequuntur officia eligendi iusto ea impedit. Commodi!
				</p>
			</section>
			<FlexyCustom useColumn={true} align="start" cubeClass={{ utilClass: 'width-100' }}>
				<FlexyCustom gap={1} useColumn={true}>
					<p>
						<output class="[ fs-450 fw-bold margin-inline-1 ]">
							${(props.price * quantity).toFixed(2)}
						</output>
						x {quantity}
					</p>
					<QuantityInput bind:value={quantity} />
				</FlexyCustom>
				<Button cubeClass={{ utilClass: 'width-100' }}>Add to cart</Button>
			</FlexyCustom>
		</FlexyCustom>
	</header>
</div>
