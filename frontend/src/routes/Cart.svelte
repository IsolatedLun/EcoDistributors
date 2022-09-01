<script lang="ts">
  import Product from "../components/Modules/Product/Product.svelte";
  import FlexyCustom from "../components/Alignment/FlexyCustom.svelte";
  import TypoHeader from "../components/Modules/Typography/TypoHeader.svelte";
  import {
    calculateTotalCosts,
    calculateTotalItems,
    cart,
    removeFromCart,
  } from "../stores/cart/cart";
  import { mq } from "../stores/media-queries/mqStore";
  import Typography from "../components/Modules/Typography/Typography.svelte";
  import Card from "../components/Modules/Card/Card.svelte";
  import Button from "../components/Interactibles/Buttons/Button.svelte";
  import { TRASH_ICON } from "../consts";
  import Icon from "../components/Modules/Icon/Icon.svelte";
  import ComponentMap from "../components/Misc/ComponentMap.svelte";
  import LinkButton from "../components/Interactibles/Buttons/LinkButton.svelte";
</script>

{#key $cart}
  <FlexyCustom useColumn={true} cubeClass={{ utilClass: "width-100" }}>
    <TypoHeader
      h={2}
      cubeClass={{ compostClass: "under-border", utilClass: " width-100" }}
    >
      Your items ({calculateTotalItems()})
    </TypoHeader>

    <div
      class="[ products cart__products ] [ grid gap-2 margin-block-end-2 width-100  ]"
      data-mode={$mq.state === 2 ? "mobile" : "desktop"}
    >
      {#if $cart.items.length > 0}
        {#each $cart.items as productData}
          <FlexyCustom collapseOnMobile={true} align="start">
            <Product
              props={{ ...productData.product }}
              cubeClass={{ utilClass: "width-100" }}
            />
            <FlexyCustom
              useColumn={true}
              justify="space-between"
              cubeClass={{
                blockClass: "product__cart-controls",
                utilClass: "height-100",
              }}
            >
              <Card
                variant="primary"
                cubeClass={{ utilClass: "padding-1 whitespace-nowrap" }}
                >x {productData.quantity}</Card
              >
              <Button
                on:click={() => removeFromCart(productData.product.id)}
                variant="red"
              >
                <p class="[ sr-only ]">
                  Delete product {productData.product.title}
                </p>
                <Icon>{TRASH_ICON}</Icon>
              </Button>
            </FlexyCustom>
          </FlexyCustom>
        {/each}
      {:else}
        <div class="[ margin-block-end-3 ]">
          <ComponentMap _this={Product} items={[]} />
          <LinkButton
            to="/"
            cubeClass={{ utilClass: "margin-block-start-3 text-center" }}
            >Go Explore</LinkButton
          >
        </div>
      {/if}
    </div>

    <FlexyCustom useColumn={true}>
      <Typography fontSize={500}
        >Total cost: ${calculateTotalCosts()}</Typography
      >
      <Button
        workCondition={false}
        cubeClass={{ utilClass: "margin-block-start-1 text-center" }}
        >Check out</Button
      >
    </FlexyCustom>
  </FlexyCustom>
{/key}
