<script>
	import { mq } from '../../../stores/media-queries/mqStore';
	import FlexyCustom from '../../../components/Alignment/FlexyCustom.svelte';
	import Button from '../../../components/Interactibles/Buttons/Button.svelte';
	import ProductImageViewer from './_sections/ProductImageViewer.svelte';
	import QuantityInput from '../../../components/Interactibles/Inputs/QuantityInput.svelte';
	import StarRater from '../../../components/Modules/StarRater/StarRater.svelte';
	import Review from '../../../components/Modules/Review/Review.svelte';
	import ComponentMap from '../../../components/Misc/ComponentMap.svelte';
	import TypoHeader from '../../../components/Modules/Typography/TypoHeader.svelte';
	import MoreSection from './_sections/MoreSection.svelte';
	import Product from '../../../components/Modules/Product/Product.svelte';
	import { getProduct } from '../../../services/productService';

	export let id = 1;
	let quantity = 1;
</script>

{#await getProduct(id)}
	<p>LOADING</p>
{:then props}
	<div class="[ product-view ] [ width-100 ]">
		<header class="[ view__header ] [ grid gap-1 ]" data-grid-collapse>
			<ProductImageViewer images={[props.thumbnail]} />
			<FlexyCustom
				cubeClass={{
					blockClass: 'products__content',
					compostClass: 'card',
					utilClass: `padding-2 ${$mq.state === 2 ? 'margin-block-start-2' : ''} 
					border-radius-cubed`
				}}
				align="start"
				useColumn={true}
				tag="section"
				justify="space-between"
			>
				<FlexyCustom
					useColumn={true}
					centerOnMobile={true}
					align="start"
					gap={1}
					cubeClass={{ compostClass: 'under-border', utilClass: 'width-100 height-fit-content' }}
				>
					<TypoHeader h={2} spacing={0}>{props.title}</TypoHeader>
					<StarRater />
				</FlexyCustom>
				<section
					class={`margin-block-1 margin-block-end-auto ${
						$mq.state === 2 && 'text-center'
					} width-100 ]`}
				>
					<TypoHeader h={3}>About this product</TypoHeader>
					<article>
						{props.description}
					</article>
				</section>
				<FlexyCustom
					centerOnMobile={true}
					useColumn={true}
					align="start"
					cubeClass={{ utilClass: 'width-100' }}
				>
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

		<MoreSection details={props.key_details} />

		<div class="[ grid-repeater-2 gap-3 ]" data-grid-collapse-center>
			<section>
				<TypoHeader h={2}>Customer reviews</TypoHeader>
				<ComponentMap _this={Review} items={props.reviews} fallbackText={'No reviews found!'} />
			</section>
			<section>
				<TypoHeader h={2}>Related products</TypoHeader>
				<ComponentMap
					_this={Product}
					items={props.related_products}
					fallbackText={'No products found!'}
				/>
			</section>
		</div>
	</div>
{/await}
