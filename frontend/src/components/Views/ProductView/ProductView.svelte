<script lang="ts">
	import { mq } from '../../../stores/media-queries/mqStore';
	import FlexyCustom from '../../../components/Alignment/FlexyCustom.svelte';
	import Button from '../../../components/Interactibles/Buttons/Button.svelte';
	import ProductImageViewer from './_sections/ProductImageViewer.svelte';
	import QuantityInput from '../../../components/Interactibles/Inputs/QuantityInput.svelte';
	import StarRater from '../../../components/Modules/StarRater/StarRater.svelte';
	import ComponentMap from '../../../components/Misc/ComponentMap.svelte';
	import TypoHeader from '../../../components/Modules/Typography/TypoHeader.svelte';
	import MoreSection from './_sections/MoreSection.svelte';
	import Product from '../../../components/Modules/Product/Product.svelte';
	import { getProduct } from '../../../services/productService';
	import Loader from '../../../components/Misc/Loader/Loader.svelte';
	import { onMount } from 'svelte';
	import { createDefaultProduct } from '../../../utils/defaultCreates';
	import { handleError } from '../../../services/utils';
	import { push } from 'svelte-spa-router';
	import { addToCart, cart, isInCart, removeFromCart } from '../../../stores/cart/cart';
	import ConstrainedComponent from '../../Modules/Constrained/ConstrainedComponent.svelte';
	import TextInput from '../../Interactibles/Inputs/TextInput.svelte';
	import ReviewForm from './_sections/ReviewForm.svelte';

	onMount(() => {
		getProduct(id)
			.then((data) => {
				product = data;
				console.log(data);
				isProductInCart = isInCart(product.id);
			})
			.catch((detail) => {
				push('/error?detail=' + handleError(detail).detail);
			});
	});

	function handleProductCart(product: any) {
		if (!isInCart(product.id)) {
			addToCart(product, quantity);
			isProductInCart = true;
		} else {
			removeFromCart(product.id);
			isProductInCart = false;
		}
	}

	export let id = -1;
	export let name = '';

	let product: any = new Promise(() => createDefaultProduct());
	let isProductInCart = false;
	let quantity = 1;
</script>

{#await product}
	<Loader text={name} />
{:then props}
	<div class="[ product-view ] [ width-100 ]">
		<header class="[ view__header ] [ grid gap-1 ]" data-grid-collapse>
			<ProductImageViewer images={[props.thumbnail, ...props.images]} productName={props.title} />
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
					cubeClass={{
						compostClass: 'under-border',
						utilClass: 'width-100 height-fit-content'
					}}
				>
					<TypoHeader h={2} spacing={0}>{props.title}</TypoHeader>
					<StarRater />
				</FlexyCustom>
				<section
					class={`margin-block-1 margin-block-end-auto ${
						$mq.state === 2 ? 'text-center margin-block-end-1' : 'margin-block-end-auto'
					} width-100 ]`}
				>
					<TypoHeader h={2}>About this product</TypoHeader>
					<article class="[ fw-normal ]">
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
						<QuantityInput bind:value={quantity} label={'Quantity'} />
					</FlexyCustom>
					<Button
						on:click={() => handleProductCart(props)}
						workCondition={!(props.is_out_of_stock || props.is_upcoming)}
						variant={isProductInCart ? 'red' : 'default'}
						secondaryVariant={'block'}
						cubeClass={{ utilClass: 'width-100 border-radius-cubed' }}
					>
						{#if !(props.is_out_of_stock || props.is_upcoming || isProductInCart)}
							Add to cart
						{:else if isProductInCart}
							Remove from cart
						{:else}
							Out of stock
						{/if}
					</Button>
				</FlexyCustom>
			</FlexyCustom>
		</header>

		<MoreSection tableDetails={props.details} details={props.key_points} />

		<div class="[ grid-repeater-2 gap-3 ]" data-grid-collapse-center>
			<section>
				<TypoHeader h={2}>Related products</TypoHeader>
				<div class="[ products ] [ grid gap-2 ]" data-mode="mobile">
					<ComponentMap
						_this={Product}
						items={props.related_products}
						ignoreByIds={[id]}
						fallbackText={'No products found!'}
					/>
				</div>
			</section>
			<section>
				<TypoHeader h={2}>Reviews</TypoHeader>
				<ReviewForm />
				<div class="[ reviews ] [ grid gap-2 ]">
					<ComponentMap
						_this={Product}
						items={props.related_products}
						ignoreByIds={[id]}
						fallbackText={'No reviews found!'}
					/>
				</div>
			</section>
		</div>
	</div>
{/await}
