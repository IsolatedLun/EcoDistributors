import { c as create_ssr_component, b as add_attribute, v as validate_component, f as each, e as escape, h as createEventDispatcher, m as missing_component } from "./index-0b2312f2.js";
import { c as createDefaultCubeClass, a as createCubeCSSClass, F as FlexyCustom, C as Card, b as Typography } from "./Card-90c09661.js";
import { B as Button, I as Icon, S as STAR_ICON, A as API_URL, d as INFO_ICON } from "./consts-bb46f5e3.js";
function createDefaultProductPreview() {
  return {
    title: "",
    thumbnail: "",
    date_created: "",
    tags: [],
    price: 499.99,
    rating: 0,
    reviews: 0,
    id: 0
  };
}
function createDefaultProduct() {
  return {
    ...createDefaultProductPreview(),
    description: "",
    details: [],
    images: [],
    key_points: [],
    reviews: [],
    related_products: [],
    is_out_of_stock: false,
    is_upcoming: false
  };
}
function createDefaultStarRater() {
  return {
    rating: 0,
    reviews: 0,
    stars_1: 0,
    stars_2: 0,
    stars_3: 0,
    stars_4: 0,
    stars_5: 0
  };
}
const Image = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { props = { src: "", alt: "" } } = $$props;
  let { cubeClass = createDefaultCubeClass() } = $$props;
  let { useRandFilter = false } = $$props;
  let { isProfile = false } = $$props;
  let { use = () => null } = $$props;
  const _class = createCubeCSSClass(cubeClass, {});
  let _this;
  if ($$props.props === void 0 && $$bindings.props && props !== void 0)
    $$bindings.props(props);
  if ($$props.cubeClass === void 0 && $$bindings.cubeClass && cubeClass !== void 0)
    $$bindings.cubeClass(cubeClass);
  if ($$props.useRandFilter === void 0 && $$bindings.useRandFilter && useRandFilter !== void 0)
    $$bindings.useRandFilter(useRandFilter);
  if ($$props.isProfile === void 0 && $$bindings.isProfile && isProfile !== void 0)
    $$bindings.isProfile(isProfile);
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  return `<img loading="${"lazy"}"${add_attribute("class", _class, 0)}${add_attribute("src", props.src, 0)}${add_attribute("alt", props.alt, 0)} data-media-error="${"false"}"${add_attribute("data-profile", isProfile, 0)}${add_attribute("data-small", false, 0)}${add_attribute("this", _this, 0)}>`;
});
const StarRater = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { props = createDefaultStarRater() } = $$props;
  let { canRate = false } = $$props;
  let { isReview = false } = $$props;
  let { size = "big" } = $$props;
  if ($$props.props === void 0 && $$bindings.props && props !== void 0)
    $$bindings.props(props);
  if ($$props.canRate === void 0 && $$bindings.canRate && canRate !== void 0)
    $$bindings.canRate(canRate);
  if ($$props.isReview === void 0 && $$bindings.isReview && isReview !== void 0)
    $$bindings.isReview(isReview);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  return `<div class="${"[ star-rater-container ]"}"${add_attribute("data-star-hoverable", canRate, 0)}>${validate_component(FlexyCustom, "FlexyCustom").$$render(
    $$result,
    {
      cubeClass: { blockClass: "container__wrapper" },
      gap: 1
    },
    {},
    {
      default: () => {
        return `${validate_component(FlexyCustom, "FlexyCustom").$$render(
          $$result,
          {
            cubeClass: {
              blockClass: "star-rater",
              utilClass: "flex-row-reverse"
            },
            gap: 0
          },
          {},
          {
            default: () => {
              return `${each({ length: 5 }, (_, i) => {
                return `${validate_component(Button, "Button").$$render(
                  $$result,
                  {
                    use: (e) => e.setAttribute("data-star", String(5 - i)),
                    cubeClass: {
                      blockClass: "star",
                      utilClass: "ignore-children cursor-pointer padding-1"
                    },
                    variant: "none"
                  },
                  {},
                  {
                    default: () => {
                      return `${validate_component(Icon, "Icon").$$render(
                        $$result,
                        {
                          cubeClass: {
                            utilClass: size === "big" ? "fs-350" : "fs-300"
                          },
                          ariaLabel: "Star Icon"
                        },
                        {},
                        {
                          default: () => {
                            return `${escape(STAR_ICON)}`;
                          }
                        }
                      )}
				`;
                    }
                  }
                )}`;
              })}`;
            }
          }
        )}
		<div class="${"[ rater__stats ] [ fs-350 ]"}"><p>${escape(props.rating)} / 5
				${!isReview ? `<span class="${"[ fs-300 margin-inline-start-1 ]"}">(${escape(props.reviews)} reviews)</span>` : ``}</p></div>`;
      }
    }
  )}</div>`;
});
const Tag = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { name } = $$props;
  createEventDispatcher();
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  return `${validate_component(Button, "Button").$$render($$result, { variant: "filter" }, {}, {
    default: () => {
      return `<p class="${"[ fs-350 ]"}">${escape(name)}</p>`;
    }
  })}`;
});
const Product = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { props = createDefaultProductPreview() } = $$props;
  createEventDispatcher();
  if ($$props.props === void 0 && $$bindings.props && props !== void 0)
    $$bindings.props(props);
  return `${validate_component(Card, "Card").$$render(
    $$result,
    {
      cubeClass: {
        blockClass: "product",
        utilClass: "flex overflow-hidden"
      }
    },
    {},
    {
      default: () => {
        return `<div class="${"[ product__image ]"}">${validate_component(Image, "Image").$$render(
          $$result,
          {
            props: {
              src: API_URL + props.thumbnail,
              alt: `${props.title}'s profile`
            }
          },
          {},
          {}
        )}</div>
	${validate_component(FlexyCustom, "FlexyCustom").$$render(
          $$result,
          {
            cubeClass: {
              blockClass: "product__content",
              utilClass: "padding-2 width-100 height-100"
            },
            useColumn: true,
            align: "start",
            justify: "space-between"
          },
          {},
          {
            default: () => {
              return `${validate_component(FlexyCustom, "FlexyCustom").$$render(
                $$result,
                {
                  useColumn: true,
                  align: "start",
                  gap: 1,
                  cubeClass: {
                    blockClass: "content__wrapper",
                    utilClass: "width-100"
                  }
                },
                {},
                {
                  default: () => {
                    return `<a rel="${"external"}"${add_attribute("href", `/products/${props.id}/${props.title}`, 0)} class="${"[ text-ellipsis-2 ] [ fs-500 ]"}">${escape(props.title)}</a>
			${validate_component(StarRater, "StarRater").$$render($$result, {}, {}, {})}

			
			<ul role="${"list"}" class="${"[ tags ] [ flex gap-1 flex-wrap margin-block-start-1 ]"}">${each(props.tags, (tag) => {
                      return `<li>${validate_component(Tag, "Tag").$$render($$result, { name: tag }, {}, {})}
					</li>`;
                    })}</ul>`;
                  }
                }
              )}
		${validate_component(Typography, "Typography").$$render(
                $$result,
                {
                  fontSize: 450,
                  fontWeight: "500",
                  cubeClass: { utilClass: "margin-block-start-auto" }
                },
                {},
                {
                  default: () => {
                    return `$${escape(props.price)}`;
                  }
                }
              )}`;
            }
          }
        )}`;
      }
    }
  )}`;
});
const ComponentMap = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { items = [] } = $$props;
  let { ignoreByIds = [] } = $$props;
  let { otherProps = {} } = $$props;
  let { _this } = $$props;
  let { fontSize = 400 } = $$props;
  let { fallbackText = "No items found." } = $$props;
  createEventDispatcher();
  if ($$props.items === void 0 && $$bindings.items && items !== void 0)
    $$bindings.items(items);
  if ($$props.ignoreByIds === void 0 && $$bindings.ignoreByIds && ignoreByIds !== void 0)
    $$bindings.ignoreByIds(ignoreByIds);
  if ($$props.otherProps === void 0 && $$bindings.otherProps && otherProps !== void 0)
    $$bindings.otherProps(otherProps);
  if ($$props._this === void 0 && $$bindings._this && _this !== void 0)
    $$bindings._this(_this);
  if ($$props.fontSize === void 0 && $$bindings.fontSize && fontSize !== void 0)
    $$bindings.fontSize(fontSize);
  if ($$props.fallbackText === void 0 && $$bindings.fallbackText && fallbackText !== void 0)
    $$bindings.fallbackText(fallbackText);
  return `${items.length - ignoreByIds.length > 0 ? `${each(items, (props) => {
    return `
		${!props.id || !(props.id && ignoreByIds.includes(props.id)) ? `${validate_component(_this || missing_component, "svelte:component").$$render($$result, { props: { ...props, ...otherProps } }, {}, {})}` : ``}`;
  })}` : `<div class="${"[ grid place-items-center ]"}">${validate_component(Card, "Card").$$render(
    $$result,
    {
      variant: "primary",
      cubeClass: {
        utilClass: "padding-block-1 padding-inline-2"
      }
    },
    {},
    {
      default: () => {
        return `${validate_component(FlexyCustom, "FlexyCustom").$$render($$result, {}, {}, {
          default: () => {
            return `${validate_component(Icon, "Icon").$$render(
              $$result,
              {
                ariaLabel: "Info icon",
                cubeClass: { utilClass: "clr-primary-400" }
              },
              {},
              {
                default: () => {
                  return `${escape(INFO_ICON)}`;
                }
              }
            )}
				<p${add_attribute("class", `[ fs-${fontSize} ]`, 0)}>${escape(fallbackText)}</p>`;
          }
        })}`;
      }
    }
  )}</div>`}`;
});
export {
  ComponentMap as C,
  Image as I,
  Product as P,
  StarRater as S,
  createDefaultProduct as c
};
