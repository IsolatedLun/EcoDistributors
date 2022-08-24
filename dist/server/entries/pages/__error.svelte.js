import { c as create_ssr_component, a as subscribe, v as validate_component, e as escape } from "../../_app/immutable/chunks/index-0b2312f2.js";
import { L as LinkButton } from "../../_app/immutable/chunks/LinkButton-143d0697.js";
import { F as FlexyCustom, T as TypoHeader, C as Card } from "../../_app/immutable/chunks/Card-90c09661.js";
import { p as page } from "../../_app/immutable/chunks/stores-f7dfc8d7.js";
const _error = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  const detail = String($page.url.searchParams.get("detail"));
  $$unsubscribe_page();
  return `<div class="${"[ grid place-items-center ]"}">${validate_component(FlexyCustom, "FlexyCustom").$$render($$result, { useColumn: true, gap: 1 }, {}, {
    default: () => {
      return `<p class="${"[ clr-primary-400 fs-800 margiin-block-end-1 ]"}" aria-hidden="${"true"}">:(</p>
		${validate_component(TypoHeader, "TypoHeader").$$render($$result, { h: 1 }, {}, {
        default: () => {
          return `Page not found.`;
        }
      })}
		${validate_component(Card, "Card").$$render(
        $$result,
        {
          variant: "red",
          cubeClass: { utilClass: "padding-1 padding-inline-2" }
        },
        {},
        {
          default: () => {
            return `${escape(detail)}.
		`;
          }
        }
      )}`;
    }
  })}

	${validate_component(LinkButton, "LinkButton").$$render(
    $$result,
    {
      cubeClass: { utilClass: "margin-block-start-2" }
    },
    {},
    {
      default: () => {
        return `Back to home`;
      }
    }
  )}</div>`;
});
export {
  _error as default
};
