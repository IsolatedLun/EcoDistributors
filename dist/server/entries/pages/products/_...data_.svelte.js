import { c as create_ssr_component, a as subscribe, v as validate_component, b as add_attribute, f as each, e as escape, j as is_promise, n as noop } from "../../../_app/immutable/chunks/index-0b2312f2.js";
import { p as page } from "../../../_app/immutable/chunks/stores-f7dfc8d7.js";
import { m as mq, B as Button, A as API_URL, I as Icon, P as PLUS_ICON, M as MINUS_ICON } from "../../../_app/immutable/chunks/consts-bb46f5e3.js";
import { F as FlexyCustom, T as TypoHeader, b as Typography } from "../../../_app/immutable/chunks/Card-90c09661.js";
import { I as Image, c as createDefaultProduct, S as StarRater, C as ComponentMap, P as Product } from "../../../_app/immutable/chunks/ComponentMap-683aba7d.js";
import "axios";
import { L as Loader } from "../../../_app/immutable/chunks/Loader-8cd08749.js";
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
const ProductImageViewer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $mq, $$unsubscribe_mq;
  $$unsubscribe_mq = subscribe(mq, (value) => $mq = value);
  let { images = [] } = $$props;
  let { productName = "" } = $$props;
  let idx = 0;
  if ($$props.images === void 0 && $$bindings.images && images !== void 0)
    $$bindings.images(images);
  if ($$props.productName === void 0 && $$bindings.productName && productName !== void 0)
    $$bindings.productName(productName);
  $$unsubscribe_mq();
  return `${validate_component(FlexyCustom, "FlexyCustom").$$render(
    $$result,
    {
      cubeClass: {
        blockClass: "image-viewer",
        utilClass: "place-self-start margin-inline-auto width-100"
      },
      align: "start"
    },
    {},
    {
      default: () => {
        return `<div${add_attribute(
          "class",
          `[ viewer__images ] [ ${$mq.state === 2 ? "media-scroller " : "flex-direction-column"} ] [ gap-2 padding-2 ]`,
          0
        )}>${each(images, (image, i) => {
          return `${validate_component(Button, "Button").$$render(
            $$result,
            {
              use: (e) => e.setAttribute("data-target", "true"),
              variant: "none",
              cubeClass: {
                compostClass: "image__view",
                utilClass: "ignore-children border-radius-cubed cursor-pointer"
              }
            },
            {},
            {
              default: () => {
                return `${validate_component(Image, "Image").$$render(
                  $$result,
                  {
                    use: (e) => e.id = `image-${i}`,
                    props: {
                      src: API_URL + image,
                      alt: productName + "image"
                    }
                  },
                  {},
                  {}
                )}
			`;
              }
            }
          )}`;
        })}</div>
	<div class="${"[ viewer__main-image ] [ place-self-center border-radius-cubed ]"}" data-image-type="${"default"}">${validate_component(Image, "Image").$$render(
          $$result,
          {
            cubeClass: { utilClass: "object-fit-contain" },
            props: {
              src: API_URL + images[idx],
              alt: productName + "image"
            }
          },
          {},
          {}
        )}</div>`;
      }
    }
  )}`;
});
const QuantityInput = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { label } = $$props;
  let { value = 1 } = $$props;
  let { id = "window.crypto.randomUUID()" } = $$props;
  let _this;
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  return `${validate_component(FlexyCustom, "FlexyCustom").$$render(
    $$result,
    {
      cubeClass: { utilClass: "fs-350" },
      gap: 1
    },
    {},
    {
      default: () => {
        return `<label${add_attribute("for", id, 0)} class="${"[ sr-only ]"}">${escape(label)}</label>

	${validate_component(Button, "Button").$$render($$result, { variant: "hoverable" }, {}, {
          default: () => {
            return `${validate_component(Icon, "Icon").$$render(
              $$result,
              {
                cubeClass: { utilClass: "fs-300" },
                ariaLabel: "Increment icon"
              },
              {},
              {
                default: () => {
                  return `${escape(PLUS_ICON)}`;
                }
              }
            )}`;
          }
        })}
	<input${add_attribute("id", id, 0)} min="${"1"}" class="${"[ input ]"}" type="${"number"}" data-variant="${"default"}" data-secondary-variant="${"quantity"}"${add_attribute("this", _this, 0)}${add_attribute("value", value, 0)}>
	${validate_component(Button, "Button").$$render($$result, { variant: "hoverable" }, {}, {
          default: () => {
            return `${validate_component(Icon, "Icon").$$render(
              $$result,
              {
                cubeClass: { utilClass: "fs-300" },
                ariaLabel: "Decrement icon"
              },
              {},
              {
                default: () => {
                  return `${escape(MINUS_ICON)}`;
                }
              }
            )}`;
          }
        })}`;
      }
    }
  )}`;
});
const ProductTable = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data = [] } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<table class="${"[ product__table ]"}"><tbody>${each(Object.entries(data), ([key, val]) => {
    return `${key === "weight" ? `<tr><td>${escape(capitalize(key))}</td>
					<td>${escape(val)} pounds</td>
				</tr>` : `<tr><td>${escape(capitalize(key))}</td>
					<td>${escape(val)}</td>
				</tr>`}`;
  })}</tbody></table>`;
});
const MoreSection = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { details = [] } = $$props;
  let { tableDetails } = $$props;
  if ($$props.details === void 0 && $$bindings.details && details !== void 0)
    $$bindings.details(details);
  if ($$props.tableDetails === void 0 && $$bindings.tableDetails && tableDetails !== void 0)
    $$bindings.tableDetails(tableDetails);
  return `<section class="${"[ margin-block-2 ] [ under-border ]"}">${validate_component(TypoHeader, "TypoHeader").$$render($$result, { h: 2 }, {}, {
    default: () => {
      return `More about this product`;
    }
  })}
	<div class="${"[ grid-repeater-2 ] [ place-items-start gap-2 ]"}" data-grid-collapse>${validate_component(ProductTable, "ProductTable").$$render($$result, { data: tableDetails }, {}, {})}
		${validate_component(FlexyCustom, "FlexyCustom").$$render(
    $$result,
    {
      tag: "ul",
      gap: 1,
      useColumn: true,
      centerOnMobile: true,
      align: "start",
      cubeClass: { utilClass: "margin-inline-start-2" }
    },
    {},
    {
      default: () => {
        return `${details.length > 0 ? `${each(details, (detail) => {
          return `<li>${validate_component(Typography, "Typography").$$render($$result, { centerOnMobile: true }, {}, {
            default: () => {
              return `${escape(detail)}`;
            }
          })}</li>`;
        })}` : `<li>No key details found!</li>`}`;
      }
    }
  )}</div></section>`;
});
const ProductView = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $mq, $$unsubscribe_mq;
  $$unsubscribe_mq = subscribe(mq, (value) => $mq = value);
  let { id = -1 } = $$props;
  let { name = "" } = $$props;
  let product = new Promise(() => createDefaultProduct());
  let isProductInCart = false;
  let quantity = 1;
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${function(__value) {
      if (is_promise(__value)) {
        __value.then(null, noop);
        return `
	${validate_component(Loader, "Loader").$$render($$result, { text: name }, {}, {})}
`;
      }
      return function(props) {
        return `
	<div class="${"[ product-view ] [ width-100 ]"}"><header class="${"[ view__header ] [ grid gap-1 ]"}" data-grid-collapse>${validate_component(ProductImageViewer, "ProductImageViewer").$$render(
          $$result,
          {
            images: [props.thumbnail, ...props.images]
          },
          {},
          {}
        )}
			${validate_component(FlexyCustom, "FlexyCustom").$$render(
          $$result,
          {
            cubeClass: {
              blockClass: "products__content",
              compostClass: "card",
              utilClass: `padding-2 ${$mq.state === 2 ? "margin-block-start-2" : ""} 
					border-radius-cubed`
            },
            align: "start",
            useColumn: true,
            tag: "section",
            justify: "space-between"
          },
          {},
          {
            default: () => {
              return `${validate_component(FlexyCustom, "FlexyCustom").$$render(
                $$result,
                {
                  useColumn: true,
                  centerOnMobile: true,
                  align: "start",
                  gap: 1,
                  cubeClass: {
                    compostClass: "under-border",
                    utilClass: "width-100 height-fit-content"
                  }
                },
                {},
                {
                  default: () => {
                    return `${validate_component(TypoHeader, "TypoHeader").$$render($$result, { h: 2, spacing: 0 }, {}, {
                      default: () => {
                        return `${escape(props.title)}`;
                      }
                    })}
					${validate_component(StarRater, "StarRater").$$render($$result, {}, {}, {})}`;
                  }
                }
              )}
				<section${add_attribute(
                "class",
                `margin-block-1 margin-block-end-auto ${$mq.state === 2 ? "text-center margin-block-end-1" : "margin-block-end-auto"} width-100 ]`,
                0
              )}>${validate_component(TypoHeader, "TypoHeader").$$render($$result, { h: 2 }, {}, {
                default: () => {
                  return `About this product`;
                }
              })}
					<article class="${"[ fw-normal ]"}">${escape(props.description)}</article></section>
				${validate_component(FlexyCustom, "FlexyCustom").$$render(
                $$result,
                {
                  centerOnMobile: true,
                  useColumn: true,
                  align: "start",
                  cubeClass: { utilClass: "width-100" }
                },
                {},
                {
                  default: () => {
                    return `${validate_component(FlexyCustom, "FlexyCustom").$$render($$result, { gap: 1, useColumn: true }, {}, {
                      default: () => {
                        return `<p><output class="${"[ fs-450 fw-bold margin-inline-1 ]"}">$${escape((props.price * quantity).toFixed(2))}</output>
							x ${escape(quantity)}</p>
						${validate_component(QuantityInput, "QuantityInput").$$render(
                          $$result,
                          { label: "Quantity", value: quantity },
                          {
                            value: ($$value) => {
                              quantity = $$value;
                              $$settled = false;
                            }
                          },
                          {}
                        )}`;
                      }
                    })}
					${validate_component(Button, "Button").$$render(
                      $$result,
                      {
                        workCondition: !(props.is_out_of_stock || props.is_upcoming),
                        variant: "default",
                        cubeClass: { utilClass: "width-100" }
                      },
                      {},
                      {
                        default: () => {
                          return `${!(props.is_out_of_stock || props.is_upcoming || isProductInCart) ? `Add to cart` : `${`Out of stock`}`}`;
                        }
                      }
                    )}`;
                  }
                }
              )}`;
            }
          }
        )}</header>

		${validate_component(MoreSection, "MoreSection").$$render(
          $$result,
          {
            tableDetails: props.details,
            details: props.key_points
          },
          {},
          {}
        )}

		<div class="${"[ grid-repeater-1 gap-3 ]"}" data-grid-collapse-center><section>${validate_component(TypoHeader, "TypoHeader").$$render($$result, { h: 2 }, {}, {
          default: () => {
            return `Related products`;
          }
        })}
				<div class="${"[ products ] [ grid gap-2 ]"}" data-mode="${"mobile"}">${validate_component(ComponentMap, "ComponentMap").$$render(
          $$result,
          {
            _this: Product,
            items: props.related_products,
            ignoreByIds: [id],
            fallbackText: "No products found!"
          },
          {},
          {}
        )}</div></section></div></div>
`;
      }(__value);
    }(product)}`;
  } while (!$$settled);
  $$unsubscribe_mq();
  return $$rendered;
});
const U5B_datau5D = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let [id, name] = $page.params.data.split("/");
  $$unsubscribe_page();
  return `${$$result.head += `${$$result.title = `<title>Eco | ${escape(name)}</title>`, ""}`, ""}

${validate_component(ProductView, "ProductView").$$render($$result, { id: Number(id), name }, {}, {})}`;
});
export {
  U5B_datau5D as default
};
