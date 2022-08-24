import { c as create_ssr_component, v as validate_component, e as escape } from "./index-0b2312f2.js";
import { T as TypoHeader } from "./Card-90c09661.js";
const Loader = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { text = "" } = $$props;
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  return `<div class="${"[ loader ] [ grid place-items-center width-max-content margin-inline-auto margin-block-5 width-100 pos-relative ]"}">${validate_component(TypoHeader, "TypoHeader").$$render($$result, { h: 2 }, {}, {
    default: () => {
      return `Loading...`;
    }
  })}
	<p class="${"[ fs-500 ]"}">${escape(text)}</p>
	<div class="${"[ loader__bar ]"}"></div></div>`;
});
export {
  Loader as L
};
