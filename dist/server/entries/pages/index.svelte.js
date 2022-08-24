import { c as create_ssr_component, h as createEventDispatcher, b as add_attribute, f as each, v as validate_component, e as escape, a as subscribe, j as is_promise, n as noop } from "../../_app/immutable/chunks/index-0b2312f2.js";
import { B as Button, I as Icon, i as iconDict, w as writable, m as mq, G as GRID_ICON, C as CUBE_ICON, A as API_URL, e as GET_PRODUCTS_URL, P as PLUS_ICON, f as TIMES_ICON, g as TOP_ICON, L as LATEST_ICON, H as HOT_ICON, U as UPCOMING_ICON, h as SEARCH_ICON } from "../../_app/immutable/chunks/consts-bb46f5e3.js";
import { c as createDefaultCubeClass, a as createCubeCSSClass, F as FlexyCustom, T as TypoHeader, C as Card } from "../../_app/immutable/chunks/Card-90c09661.js";
import { C as ComponentMap, P as Product } from "../../_app/immutable/chunks/ComponentMap-683aba7d.js";
import axios from "axios";
import { L as Loader } from "../../_app/immutable/chunks/Loader-8cd08749.js";
const BoxSelect = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { options = [] } = $$props;
  let { cubeClass = createDefaultCubeClass() } = $$props;
  let { canDeselect = false } = $$props;
  let _class = createCubeCSSClass(cubeClass, {
    compostClass: "select",
    utilClass: "flex align-items-center"
  });
  let _thisList;
  createEventDispatcher();
  if ($$props.options === void 0 && $$bindings.options && options !== void 0)
    $$bindings.options(options);
  if ($$props.cubeClass === void 0 && $$bindings.cubeClass && cubeClass !== void 0)
    $$bindings.cubeClass(cubeClass);
  if ($$props.canDeselect === void 0 && $$bindings.canDeselect && canDeselect !== void 0)
    $$bindings.canDeselect(canDeselect);
  return `
<ul role="${"list"}"${add_attribute("class", _class, 0)} data-variant="${"box-select"}"${add_attribute("this", _thisList, 0)}>${each(options, (option) => {
    return `<li>${validate_component(Button, "Button").$$render(
      $$result,
      {
        variant: "none",
        cubeClass: {
          blockClass: "box-select-button",
          utilClass: "fw-bold cursor-pointer ignore-children flex gap-2 align-items-center"
        }
      },
      {},
      {
        default: () => {
          return `${option.icon ? `${validate_component(Icon, "Icon").$$render($$result, { ariaLabel: `${option.text} Icon` }, {}, {
            default: () => {
              return `${escape(option.icon)}`;
            }
          })}` : ``}
				<p data-desktop>${escape(option.text)}</p>
			`;
        }
      }
    )}
		</li>`;
  })}</ul>`;
});
const TextInput = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { cubeClass = createDefaultCubeClass({
    blockClass: "input-container",
    utilClass: "width-100"
  }) } = $$props;
  let { variant = "default" } = $$props;
  let { secondaryVariant = "default" } = $$props;
  let { placeholder = "Enter text" } = $$props;
  let { label } = $$props;
  let { value = "" } = $$props;
  let { id = "window.crypto.randomUUID()" } = $$props;
  let { type = "text" } = $$props;
  const _class = createCubeCSSClass(cubeClass, { compostClass: "input" });
  if ($$props.cubeClass === void 0 && $$bindings.cubeClass && cubeClass !== void 0)
    $$bindings.cubeClass(cubeClass);
  if ($$props.variant === void 0 && $$bindings.variant && variant !== void 0)
    $$bindings.variant(variant);
  if ($$props.secondaryVariant === void 0 && $$bindings.secondaryVariant && secondaryVariant !== void 0)
    $$bindings.secondaryVariant(secondaryVariant);
  if ($$props.placeholder === void 0 && $$bindings.placeholder && placeholder !== void 0)
    $$bindings.placeholder(placeholder);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  return `<div${add_attribute("class", _class, 0)}><label${add_attribute("for", id, 0)} class="${"[ sr-only ]"}">${escape(label)}</label>
	<input${add_attribute("id", id, 0)} class="${"[ input ] [ width-100 ]"}"${add_attribute("data-variant", variant, 0)}${add_attribute("data-secondary-variant", secondaryVariant, 0)}${add_attribute("placeholder", placeholder, 0)}${add_attribute("value", value, 0)}>
	${slots.default ? slots.default({}) : ``}</div>`;
});
const SecondaryContainer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section class="${"[ secondary-container ] [ margin-block-start-4 ]"}">${slots.default ? slots.default({}) : ``}</section>`;
});
const ListSelect = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $selected, $$unsubscribe_selected;
  let { selected } = $$props;
  $$unsubscribe_selected = subscribe(selected, (value) => $selected = value);
  let searchCategory = "";
  let { items = [] } = $$props;
  if ($$props.selected === void 0 && $$bindings.selected && selected !== void 0)
    $$bindings.selected(selected);
  if ($$props.items === void 0 && $$bindings.items && items !== void 0)
    $$bindings.items(items);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${validate_component(TextInput, "TextInput").$$render(
      $$result,
      {
        placeholder: "Search category",
        label: "Search categories",
        cubeClass: { utilClass: "margin-block-end-1" },
        value: searchCategory
      },
      {
        value: ($$value) => {
          searchCategory = $$value;
          $$settled = false;
        }
      },
      {}
    )}


<ul class="${"[ select ] [ flex-direction-column gap-1 ]"}" role="${"list"}" data-variant="${"list"}">${each(items, (item) => {
      return `<li${add_attribute("id", item.category + "-select", 0)} class="${"[ pos-relative ]"}"${add_attribute("data-explicit-hide", !(item.category.toLowerCase().indexOf(searchCategory.toLowerCase()) > -1), 0)}>${validate_component(Button, "Button").$$render(
        $$result,
        {
          use: (e) => e.setAttribute("data-value", item.category),
          dataSelected: $selected.includes(item.category),
          variant: "hoverable",
          secondaryVariant: "select-list-item",
          cubeClass: {
            utilClass: "flex justify-content-space-between width-100 ignore-children"
          }
        },
        {},
        {
          default: () => {
            return `${validate_component(FlexyCustom, "FlexyCustom").$$render($$result, {}, {}, {
              default: () => {
                return `${validate_component(Icon, "Icon").$$render($$result, { ariaLabel: `${item.category} Icon` }, {}, {
                  default: () => {
                    return `${iconDict[item.category.toLowerCase()] ? `${escape(iconDict[item.category.toLowerCase()])}` : `${escape(iconDict["food"])}`}
					`;
                  }
                })}

					<p>${escape(item.category)}</p>
				`;
              }
            })}
				<p>${escape(item.count)}</p>

				<input tabindex="${"-1"}" type="${"checkbox"}" class="${"[ item__checkbox ] [ pos-absolute ignore-self ]"}" ${$selected.includes(item.category) ? "checked" : ""}>
			`;
          }
        }
      )}
		</li>`;
    })}</ul>`;
  } while (!$$settled);
  $$unsubscribe_selected();
  return $$rendered;
});
function useSelected(arr = []) {
  const { subscribe: subscribe2, set, update } = writable(arr);
  return {
    subscribe: subscribe2,
    add: (name) => update((arr2) => arr2 = [...arr2, name]),
    remove: (name) => update((arr2) => arr2 = arr2.filter((x) => x !== name))
  };
}
const GridButtons = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { layout = "column" } = $$props;
  mq.subscribe((_mq) => {
    if (_mq.state === 2)
      layout = "mobile";
  });
  if ($$props.layout === void 0 && $$bindings.layout && layout !== void 0)
    $$bindings.layout(layout);
  return `<div data-desktop aria-hidden="${"true"}">${validate_component(FlexyCustom, "FlexyCustom").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Button, "Button").$$render(
        $$result,
        {
          variant: "hoverable",
          dataSelected: layout === "mobile"
        },
        {},
        {
          default: () => {
            return `${validate_component(Icon, "Icon").$$render($$result, { ariaLabel: "Grid icon" }, {}, {
              default: () => {
                return `${escape(GRID_ICON)}`;
              }
            })}`;
          }
        }
      )}
		${validate_component(Button, "Button").$$render(
        $$result,
        {
          variant: "hoverable",
          dataSelected: layout === "column"
        },
        {},
        {
          default: () => {
            return `${validate_component(Icon, "Icon").$$render($$result, { ariaLabel: "Cube icon" }, {}, {
              default: () => {
                return `${escape(CUBE_ICON)}`;
              }
            })}`;
          }
        }
      )}`;
    }
  })}</div>`;
});
var HTTPMethods = /* @__PURE__ */ ((HTTPMethods2) => {
  HTTPMethods2[HTTPMethods2["GET"] = 0] = "GET";
  HTTPMethods2[HTTPMethods2["POST"] = 1] = "POST";
  HTTPMethods2[HTTPMethods2["DELETE"] = 2] = "DELETE";
  return HTTPMethods2;
})(HTTPMethods || {});
async function createEndpoint(url, data, method, headers = {}) {
  let res = new Promise(() => void 0);
  url = API_URL + url;
  if (method === HTTPMethods.GET) {
    const req = await axios.get(url, data);
    res = await req.data;
  } else if (method === HTTPMethods.POST) {
    const req = await axios.post(url, data, {
      headers: { ...headers }
    });
    res = await req.data;
  } else if (method === HTTPMethods.DELETE) {
    const req = await axios.delete(url, data);
    res = await req.data;
  }
  return res;
}
function getProducts(data) {
  return createEndpoint(GET_PRODUCTS_URL, data, HTTPMethods.POST);
}
const TagPart = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $tagHook, $$unsubscribe_tagHook;
  let { tagHook } = $$props;
  $$unsubscribe_tagHook = subscribe(tagHook, (value) => $tagHook = value);
  let newTag = "";
  if ($$props.tagHook === void 0 && $$bindings.tagHook && tagHook !== void 0)
    $$bindings.tagHook(tagHook);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<div class="${"[ margin-block-2 padding-inline-1 ]"}">${validate_component(FlexyCustom, "FlexyCustom").$$render(
      $$result,
      {
        cubeClass: { utilClass: "margin-block-1" }
      },
      {},
      {
        default: () => {
          return `${validate_component(TextInput, "TextInput").$$render(
            $$result,
            {
              label: "Add tag",
              cubeClass: { utilClass: "width-100" },
              placeholder: "Add a tag",
              value: newTag
            },
            {
              value: ($$value) => {
                newTag = $$value;
                $$settled = false;
              }
            },
            {}
          )}
		${validate_component(Button, "Button").$$render(
            $$result,
            {
              secondaryVariant: "cube",
              cubeClass: { utilClass: "fs-350" }
            },
            {},
            {
              default: () => {
                return `${validate_component(FlexyCustom, "FlexyCustom").$$render($$result, { gap: 1 }, {}, {
                  default: () => {
                    return `<p>Add</p>
				${validate_component(Icon, "Icon").$$render($$result, { cubeClass: { utilClass: "fs-350" } }, {}, {
                      default: () => {
                        return `${escape(PLUS_ICON)}`;
                      }
                    })}`;
                  }
                })}`;
              }
            }
          )}`;
        }
      }
    )}
	${validate_component(TypoHeader, "TypoHeader").$$render($$result, { h: 2 }, {}, {
      default: () => {
        return `Tags`;
      }
    })}
	${validate_component(FlexyCustom, "FlexyCustom").$$render(
      $$result,
      {
        gap: 1,
        cubeClass: { utilClass: "margin-block-1 flex-wrap" }
      },
      {},
      {
        default: () => {
          return `${$tagHook.length > 0 ? `${each($tagHook, (tag) => {
            return `${validate_component(Button, "Button").$$render($$result, { variant: "filter" }, {}, {
              default: () => {
                return `${validate_component(FlexyCustom, "FlexyCustom").$$render($$result, {}, {}, {
                  default: () => {
                    return `<p>${escape(tag)}</p>
						${validate_component(Icon, "Icon").$$render($$result, { cubeClass: { utilClass: "fs-350" } }, {}, {
                      default: () => {
                        return `${escape(TIMES_ICON)}`;
                      }
                    })}
					`;
                  }
                })}
				`;
              }
            })}`;
          })}` : `${validate_component(Button, "Button").$$render($$result, { variant: "filter" }, {}, {
            default: () => {
              return `No tags`;
            }
          })}`}`;
        }
      }
    )}</div>`;
  } while (!$$settled);
  $$unsubscribe_tagHook();
  return $$rendered;
});
const Home = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $selectedFilterHook, $$unsubscribe_selectedFilterHook = noop, $$subscribe_selectedFilterHook = () => ($$unsubscribe_selectedFilterHook(), $$unsubscribe_selectedFilterHook = subscribe(selectedFilterHook, ($$value) => $selectedFilterHook = $$value), selectedFilterHook);
  let $selectedTagsHook, $$unsubscribe_selectedTagsHook;
  let $mq, $$unsubscribe_mq;
  $$unsubscribe_mq = subscribe(mq, (value) => $mq = value);
  async function handleGetProducts() {
    productsData = await getProducts({
      tags: $selectedTagsHook,
      filters: $selectedFilterHook,
      title: title.trim(),
      sort_by: sortBy,
      show_upcoming: showUpcoming
    });
  }
  let gridLayout = "column";
  let selectedFilterHook = useSelected();
  $$subscribe_selectedFilterHook();
  let selectedTagsHook = useSelected();
  $$unsubscribe_selectedTagsHook = subscribe(selectedTagsHook, (value) => $selectedTagsHook = value);
  let productsData;
  let productCount = 0;
  let title = "";
  let sortBy = "none";
  let showUpcoming = false;
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${$$result.head += `${$$result.title = `<title>Eco | Home</title>`, ""}`, ""}

${validate_component(SecondaryContainer, "SecondaryContainer").$$render($$result, {}, {}, {
      default: () => {
        return `${validate_component(TextInput, "TextInput").$$render(
          $$result,
          {
            label: "Search products",
            secondaryVariant: "use-shadow",
            variant: "mega",
            placeholder: `Search ${productCount} products`,
            value: title
          },
          {
            value: ($$value) => {
              title = $$value;
              $$settled = false;
            }
          },
          {}
        )}

	<div class="${"[ grid ] [ place-items-center ]"}">${validate_component(FlexyCustom, "FlexyCustom").$$render($$result, {}, {}, {
          default: () => {
            return `${validate_component(BoxSelect, "BoxSelect").$$render(
              $$result,
              {
                cubeClass: { utilClass: "margin-block-3" },
                canDeselect: true,
                options: [
                  { text: "Top", icon: TOP_ICON },
                  { text: "Latest", icon: LATEST_ICON },
                  { text: "Hot", icon: HOT_ICON }
                ]
              },
              {},
              {}
            )}
			${validate_component(BoxSelect, "BoxSelect").$$render(
              $$result,
              {
                options: [{ text: "Upcoming", icon: UPCOMING_ICON }],
                canDeselect: true
              },
              {},
              {}
            )}`;
          }
        })}</div>

	<div class="${"[ margin-block-end-3 ]"}" data-mobile>${validate_component(Button, "Button").$$render($$result, {}, {}, {
          default: () => {
            return `${`Show filters`}`;
          }
        })}</div>`;
      }
    })}

${function(__value) {
      if (is_promise(__value)) {
        __value.then(null, noop);
        return `
	${validate_component(Loader, "Loader").$$render($$result, {}, {}, {})}
`;
      }
      return function(_) {
        return `
	<div class="${"[ home-grid ] [ border-radius-cubed gap-2 ]"}" data-grid-collapse>${$mq.state !== 2 ? `${validate_component(Card, "Card").$$render(
          $$result,
          {
            cubeClass: {
              blockClass: "products__filters",
              utilClass: "padding-1 height-fit-content"
            }
          },
          {},
          {
            default: () => {
              return `${validate_component(Button, "Button").$$render(
                $$result,
                {
                  cubeClass: {
                    utilClass: "flex gap-1 margin-block-end-1 width-100 justify-content-center"
                  }
                },
                {},
                {
                  default: () => {
                    return `<p>Search</p>
					${validate_component(Icon, "Icon").$$render($$result, { ariaLabel: "Search icon" }, {}, {
                      default: () => {
                        return `${escape(SEARCH_ICON)}`;
                      }
                    })}`;
                  }
                }
              )}
				${validate_component(TagPart, "TagPart").$$render($$result, { tagHook: selectedTagsHook }, {}, {})}
				${validate_component(ListSelect, "ListSelect").$$render(
                $$result,
                {
                  items: productsData.categories,
                  selected: selectedFilterHook
                },
                {
                  selected: ($$value) => {
                    selectedFilterHook = $$value;
                    $$settled = false;
                  }
                },
                {}
              )}`;
            }
          }
        )}` : ``}

		<div class="${"[ product__results ]"}">${validate_component(FlexyCustom, "FlexyCustom").$$render($$result, { justify: "space-between" }, {}, {
          default: () => {
            return `${validate_component(FlexyCustom, "FlexyCustom").$$render($$result, { tag: "section", align: "center" }, {}, {
              default: () => {
                return `${validate_component(TypoHeader, "TypoHeader").$$render(
                  $$result,
                  {
                    h: 2,
                    cubeClass: { utilClass: "whitespace-nowrap " }
                  },
                  {},
                  {
                    default: () => {
                      return `Categories:`;
                    }
                  }
                )}
					
					<ul role="${"list"}" class="${"[ flex gap-1 flex-wrap ]"}">${$selectedFilterHook.length > 0 ? `${each($selectedFilterHook, (item) => {
                  return `<li>${validate_component(Button, "Button").$$render($$result, { variant: "filter" }, {}, {
                    default: () => {
                      return `${validate_component(FlexyCustom, "FlexyCustom").$$render($$result, {}, {}, {
                        default: () => {
                          return `<p>${escape(item)}</p>
											${validate_component(Icon, "Icon").$$render($$result, { cubeClass: { utilClass: "fs-350" } }, {}, {
                            default: () => {
                              return `${escape(TIMES_ICON)}`;
                            }
                          })}
										`;
                        }
                      })}
									`;
                    }
                  })}
								</li>`;
                })}` : `<li>${validate_component(Button, "Button").$$render(
                  $$result,
                  {
                    variant: "filter",
                    cubeClass: { utilClass: "ignore-self" }
                  },
                  {},
                  {
                    default: () => {
                      return `No categories`;
                    }
                  }
                )}</li>`}</ul>`;
              }
            })}

				${validate_component(GridButtons, "GridButtons").$$render(
              $$result,
              { layout: gridLayout },
              {
                layout: ($$value) => {
                  gridLayout = $$value;
                  $$settled = false;
                }
              },
              {}
            )}`;
          }
        })}

			<section class="${"[ margin-block-start-1 ]"}">${validate_component(TypoHeader, "TypoHeader").$$render($$result, { h: 2 }, {}, {
          default: () => {
            return `${escape(productsData.products.length)} <span class="${"[ sr-only ]"}">product</span> Results`;
          }
        })}
				<div class="${"[ products ] [ grid gap-2 margin-block-start-2 ]"}"${add_attribute("data-mode", gridLayout, 0)}>${validate_component(ComponentMap, "ComponentMap").$$render(
          $$result,
          {
            items: productsData.products,
            _this: Product
          },
          {},
          {}
        )}</div></section></div></div>
`;
      }();
    }(handleGetProducts())}`;
  } while (!$$settled);
  $$unsubscribe_selectedFilterHook();
  $$unsubscribe_selectedTagsHook();
  $$unsubscribe_mq();
  return $$rendered;
});
const Routes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Home, "Home").$$render($$result, {}, {}, {})}`;
});
export {
  Routes as default
};
