import { c as create_ssr_component, a as subscribe, v as validate_component, e as escape, b as add_attribute, f as each } from "../../_app/immutable/chunks/index-0b2312f2.js";
import { P as Product, C as ComponentMap } from "../../_app/immutable/chunks/ComponentMap-01c713c8.js";
import { F as FlexyCustom, T as TypoHeader, C as Card, b as Typography } from "../../_app/immutable/chunks/Card-ee646d8b.js";
import { w as writable, m as mq, B as Button, I as Icon, c as TRASH_ICON } from "../../_app/immutable/chunks/consts-2c29ed58.js";
import { L as LinkButton } from "../../_app/immutable/chunks/LinkButton-8e446d67.js";
const cart = writable({
  items: []
});
function _get_store(store) {
  let $val;
  store.subscribe(($) => $val = $)();
  return $val;
}
function calculateTotalCosts() {
  let total = 0;
  _get_store(cart).items.forEach(
    (item) => total += item.product.price * item.quantity
  );
  return total;
}
function calculateTotalItems() {
  let total = 0;
  _get_store(cart).items.forEach((item) => total += item.quantity);
  return total;
}
const Cart = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $cart, $$unsubscribe_cart;
  let $mq, $$unsubscribe_mq;
  $$unsubscribe_cart = subscribe(cart, (value) => $cart = value);
  $$unsubscribe_mq = subscribe(mq, (value) => $mq = value);
  $$unsubscribe_cart();
  $$unsubscribe_mq();
  return `${validate_component(FlexyCustom, "FlexyCustom").$$render(
    $$result,
    {
      useColumn: true,
      cubeClass: { utilClass: "width-100" }
    },
    {},
    {
      default: () => {
        return `${validate_component(TypoHeader, "TypoHeader").$$render(
          $$result,
          {
            h: 2,
            cubeClass: {
              compostClass: "under-border",
              utilClass: " width-100"
            }
          },
          {},
          {
            default: () => {
              return `Your items (${escape(calculateTotalItems())})
		`;
            }
          }
        )}

		<div class="${"[ products cart__products ] [ grid gap-2 margin-block-end-2 width-100 ]"}"${add_attribute("data-mode", $mq.state === 2 ? "mobile" : "desktop", 0)}>${$cart.items.length > 0 ? `${each($cart.items, (productData) => {
          return `${validate_component(FlexyCustom, "FlexyCustom").$$render($$result, { collapseOnMobile: true, align: "start" }, {}, {
            default: () => {
              return `${validate_component(Product, "Product").$$render(
                $$result,
                {
                  props: { ...productData.product },
                  cubeClass: { utilClass: "width-100" }
                },
                {},
                {}
              )}
						${validate_component(FlexyCustom, "FlexyCustom").$$render(
                $$result,
                {
                  useColumn: true,
                  justify: "space-between",
                  cubeClass: {
                    blockClass: "product__cart-controls",
                    utilClass: "height-100"
                  }
                },
                {},
                {
                  default: () => {
                    return `${validate_component(Card, "Card").$$render(
                      $$result,
                      {
                        variant: "primary",
                        cubeClass: { utilClass: "padding-1 whitespace-nowrap" }
                      },
                      {},
                      {
                        default: () => {
                          return `x ${escape(productData.quantity)}`;
                        }
                      }
                    )}
							${validate_component(Button, "Button").$$render($$result, { variant: "red" }, {}, {
                      default: () => {
                        return `<p class="${"[ sr-only ]"}">Delete product ${escape(productData.product.title)}</p>
								${validate_component(Icon, "Icon").$$render($$result, {}, {}, {
                          default: () => {
                            return `${escape(TRASH_ICON)}`;
                          }
                        })}
							`;
                      }
                    })}
						`;
                  }
                }
              )}
					`;
            }
          })}`;
        })}` : `<div class="${"[ margin-block-end-3 ]"}">${validate_component(ComponentMap, "ComponentMap").$$render($$result, { _this: Product, items: [] }, {}, {})}
					${validate_component(LinkButton, "LinkButton").$$render(
          $$result,
          {
            to: "/",
            cubeClass: {
              utilClass: "margin-block-start-3 text-center"
            }
          },
          {},
          {
            default: () => {
              return `Go Explore`;
            }
          }
        )}</div>`}</div>

		${validate_component(FlexyCustom, "FlexyCustom").$$render($$result, { useColumn: true }, {}, {
          default: () => {
            return `${validate_component(Typography, "Typography").$$render($$result, { fontSize: 500 }, {}, {
              default: () => {
                return `Total cost: $${escape(calculateTotalCosts())}`;
              }
            })}
			${validate_component(Button, "Button").$$render(
              $$result,
              {
                workCondition: false,
                cubeClass: {
                  utilClass: "margin-block-start-1 text-center"
                }
              },
              {},
              {
                default: () => {
                  return `Check out`;
                }
              }
            )}`;
          }
        })}`;
      }
    }
  )}`;
});
export {
  Cart as default
};
