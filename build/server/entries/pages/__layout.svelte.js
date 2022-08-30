import { c as create_ssr_component, v as validate_component, e as escape, a as subscribe } from "../../_app/immutable/chunks/index-0b2312f2.js";
import { L as LinkButton } from "../../_app/immutable/chunks/LinkButton-8e446d67.js";
import { F as FlexyCustom, T as TypoHeader, C as Card } from "../../_app/immutable/chunks/Card-ee646d8b.js";
import { I as Icon, T as TRUCK_ICON, B as Button, a as BARS_ICON, m as mq, F as FACEBOOK_URL, b as INSTAGRAM_URL, Y as YOUTUBE_URL } from "../../_app/immutable/chunks/consts-2c29ed58.js";
import "axios";
const Navbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(FlexyCustom, "FlexyCustom").$$render(
    $$result,
    {
      tag: "navbar",
      justify: "space-between",
      cubeClass: {
        blockClass: "primary-navbar",
        utilClass: "padding-1 padding-inline-5"
      }
    },
    {},
    {
      default: () => {
        return `<div data-desktop>${validate_component(TypoHeader, "TypoHeader").$$render($$result, { h: 2 }, {}, {
          default: () => {
            return `<a href="${"/"}">Eco | Distributors</a>`;
          }
        })}</div>

	<div data-mobile>${validate_component(TypoHeader, "TypoHeader").$$render($$result, { h: 2 }, {}, {
          default: () => {
            return `<a href="${"/"}">${validate_component(Icon, "Icon").$$render(
              $$result,
              {
                cubeClass: { utilClass: "fs-800" },
                ariaLabel: "Truck icon"
              },
              {},
              {
                default: () => {
                  return `${escape(TRUCK_ICON)}`;
                }
              }
            )}</a>`;
          }
        })}</div>

	<div data-mobile><div class="${"[ flex align-items-center gap-2 ]"}">${validate_component(Button, "Button").$$render($$result, { variant: "hoverable" }, {}, {
          default: () => {
            return `${validate_component(Icon, "Icon").$$render($$result, { cubeClass: { utilClass: "fs-700" } }, {}, {
              default: () => {
                return `${`${escape(BARS_ICON)}`}`;
              }
            })}`;
          }
        })}</div></div>

	
	<ul class="${"[ navigation__list ] [ flex align-items-center gap-3 fs-450 ]"}" role="${"list"}" data-desktop><li><a href="${"/"}">Our store</a></li>
		<li><a href="${"/"}">Contact</a></li>
		<li class="${"[ margin-inline-start-3 ]"}">${validate_component(LinkButton, "LinkButton").$$render(
          $$result,
          {
            to: "/cart",
            cubeClass: { blockClass: "navbar__cart-link" }
          },
          {},
          {
            default: () => {
              return `My cart`;
            }
          }
        )}</li></ul>`;
      }
    }
  )}

${``}`;
});
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $mq, $$unsubscribe_mq;
  $$unsubscribe_mq = subscribe(mq, (value) => $mq = value);
  $$unsubscribe_mq();
  return `${validate_component(Card, "Card").$$render(
    $$result,
    {
      variant: "dark",
      cubeClass: {
        blockClass: "primary-footer",
        utilClass: "margin-block-start-1 padding-block-3 padding-inline-4"
      }
    },
    {},
    {
      default: () => {
        return `${validate_component(FlexyCustom, "FlexyCustom").$$render(
          $$result,
          {
            align: "start",
            justify: "space-between",
            justifyOnMobile: true,
            centerOnMobile: true,
            gap: 3,
            collapseOnMobile: $mq.state === 2
          },
          {},
          {
            default: () => {
              return `<div class="${"[ text-center ]"}"><div data-desktop>${validate_component(TypoHeader, "TypoHeader").$$render($$result, { h: 2 }, {}, {
                default: () => {
                  return `<a href="${"/"}">Eco | Distributors</a>`;
                }
              })}</div>

			<div data-mobile>${validate_component(TypoHeader, "TypoHeader").$$render($$result, { h: 2 }, {}, {
                default: () => {
                  return `<a href="${"/"}">${validate_component(Icon, "Icon").$$render(
                    $$result,
                    {
                      cubeClass: { utilClass: "fs-800" },
                      ariaLabel: "Truck icon"
                    },
                    {},
                    {
                      default: () => {
                        return `${escape(TRUCK_ICON)}`;
                      }
                    }
                  )}</a>`;
                }
              })}</div>

			${validate_component(FlexyCustom, "FlexyCustom").$$render($$result, {}, {}, {
                default: () => {
                  return `
				<ul class="${"[ flex align-items-center flex-wrap ]"}" role="${"list"}"><li>${validate_component(LinkButton, "LinkButton").$$render(
                    $$result,
                    {
                      target: "_blank",
                      to: FACEBOOK_URL,
                      variant: "hoverable"
                    },
                    {},
                    {
                      default: () => {
                        return `<i class="${"[ fa-brands fa-facebook ] [ fs-500 ]"}" aria-hidden="${"true"}"></i>
							<p class="${"[ sr-only ]"}">Facebook link</p>`;
                      }
                    }
                  )}</li>
					<li>${validate_component(LinkButton, "LinkButton").$$render(
                    $$result,
                    {
                      target: "_blank",
                      to: INSTAGRAM_URL,
                      variant: "hoverable"
                    },
                    {},
                    {
                      default: () => {
                        return `<i class="${"[ fa-brands fa-instagram ] [ fs-500 ]"}" aria-hidden="${"true"}"></i>
							<p class="${"[ sr-only ]"}">Instagram link</p>`;
                      }
                    }
                  )}</li>
					<li>${validate_component(LinkButton, "LinkButton").$$render(
                    $$result,
                    {
                      target: "_blank",
                      to: YOUTUBE_URL,
                      variant: "hoverable"
                    },
                    {},
                    {
                      default: () => {
                        return `<i class="${"[ fa-brands fa-youtube ] [ fs-500 ]"}" aria-hidden="${"true"}"></i>
							<p class="${"[ sr-only ]"}">Youtube link</p>`;
                      }
                    }
                  )}</li></ul>

				<address class="${"[ fs-300 ]"}">Eco Distrubters \xA9 2022</address>`;
                }
              })}</div>

		<div>${validate_component(TypoHeader, "TypoHeader").$$render($$result, { h: 3 }, {}, {
                default: () => {
                  return `Miscellaneous`;
                }
              })}
			
			<ul class="${"[ flex-direction-column align-items-center gap-1 ]"}" role="${"list"}"><li><a class="${""}" href="${"/"}">Our store</a></li>
				<li><a href="${"/"}">Contact</a></li></ul></div>
		<div>${validate_component(TypoHeader, "TypoHeader").$$render($$result, { h: 3 }, {}, {
                default: () => {
                  return `Categories`;
                }
              })}
			
			<ul class="${"[ flex-direction-column align-items-center gap-1 ]"}" role="${"list"}"><li aria-hidden="${"true"}">...</li></ul></div>`;
            }
          }
        )}`;
      }
    }
  )}`;
});
const __layout_svelte_svelte_type_style_lang = "";
const css = {
  code: "@import url('../../static/posty.css');",
  map: null
};
const _layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="${"[ body-wrapper ]"}">${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})}

	<main class="${"[ main-container ] [ gap-2 padding-1 border-radius-cubed margin-block-end-auto ]"}">${slots.default ? slots.default({}) : ``}</main>

	${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}
</div>`;
});
export {
  _layout as default
};
