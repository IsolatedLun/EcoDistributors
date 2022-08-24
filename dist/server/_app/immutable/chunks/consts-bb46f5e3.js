import { n as noop, d as safe_not_equal, c as create_ssr_component, b as add_attribute, i as is_void } from "./index-0b2312f2.js";
import { c as createDefaultCubeClass, a as createCubeCSSClass } from "./Card-90c09661.js";
const subscriber_queue = [];
function writable(value, start = noop) {
  let stop;
  const subscribers = /* @__PURE__ */ new Set();
  function set(new_value) {
    if (safe_not_equal(value, new_value)) {
      value = new_value;
      if (stop) {
        const run_queue = !subscriber_queue.length;
        for (const subscriber of subscribers) {
          subscriber[1]();
          subscriber_queue.push(subscriber, value);
        }
        if (run_queue) {
          for (let i = 0; i < subscriber_queue.length; i += 2) {
            subscriber_queue[i][0](subscriber_queue[i + 1]);
          }
          subscriber_queue.length = 0;
        }
      }
    }
  }
  function update(fn) {
    set(fn(value));
  }
  function subscribe(run, invalidate = noop) {
    const subscriber = [run, invalidate];
    subscribers.add(subscriber);
    if (subscribers.size === 1) {
      stop = start(set) || noop;
    }
    run(value);
    return () => {
      subscribers.delete(subscriber);
      if (subscribers.size === 0) {
        stop();
        stop = null;
      }
    };
  }
  return { set, update, subscribe };
}
const mq = writable({
  state: 0
});
const Button = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { cubeClass = createDefaultCubeClass() } = $$props;
  let { variant = "default" } = $$props;
  let { secondaryVariant = "default" } = $$props;
  let { dataSelected = false } = $$props;
  let { workCondition = true } = $$props;
  let { ariaLabel = "Button" } = $$props;
  let { use = (e) => null } = $$props;
  const _class = createCubeCSSClass(cubeClass, { compostClass: "button" });
  let _this;
  if ($$props.cubeClass === void 0 && $$bindings.cubeClass && cubeClass !== void 0)
    $$bindings.cubeClass(cubeClass);
  if ($$props.variant === void 0 && $$bindings.variant && variant !== void 0)
    $$bindings.variant(variant);
  if ($$props.secondaryVariant === void 0 && $$bindings.secondaryVariant && secondaryVariant !== void 0)
    $$bindings.secondaryVariant(secondaryVariant);
  if ($$props.dataSelected === void 0 && $$bindings.dataSelected && dataSelected !== void 0)
    $$bindings.dataSelected(dataSelected);
  if ($$props.workCondition === void 0 && $$bindings.workCondition && workCondition !== void 0)
    $$bindings.workCondition(workCondition);
  if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0)
    $$bindings.ariaLabel(ariaLabel);
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  return `<button${add_attribute("class", _class, 0)}${add_attribute("data-variant", variant, 0)}${add_attribute("data-selected", dataSelected, 0)}${add_attribute("data-secondary-variant", secondaryVariant, 0)}${add_attribute("data-work-condition", workCondition, 0)}${add_attribute("aria-label", ariaLabel, 0)}${add_attribute("this", _this, 0)}>${slots.default ? slots.default({}) : ``}</button>`;
});
const Icon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { tag = "span" } = $$props;
  let { cubeClass = createDefaultCubeClass() } = $$props;
  let { ariaLabel = "An icon" } = $$props;
  const _class = createCubeCSSClass(cubeClass, { compostClass: "icon" });
  if ($$props.tag === void 0 && $$bindings.tag && tag !== void 0)
    $$bindings.tag(tag);
  if ($$props.cubeClass === void 0 && $$bindings.cubeClass && cubeClass !== void 0)
    $$bindings.cubeClass(cubeClass);
  if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0)
    $$bindings.ariaLabel(ariaLabel);
  return `${((tag$1) => {
    return tag$1 ? `<${tag}${add_attribute("class", _class, 0)}${add_attribute("aria-label", ariaLabel, 0)} aria-hidden="${"true"}">${is_void(tag$1) ? "" : `${slots.default ? slots.default({}) : ``}`}${is_void(tag$1) ? "" : `</${tag$1}>`}` : "";
  })(tag)}`;
});
const TOP_ICON = "\uF201";
const HOT_ICON = "\uF7E4";
const LATEST_ICON = "\uF01E";
const UPCOMING_ICON = "\uF017";
const TRUCK_ICON = "\uF0D1";
const BARS_ICON = "\uF0C9";
const TIMES_ICON = "\uF00D";
const FRUIT_ICON = "\uF5D1";
const VEGETABLE_ICON = "\uF787";
const MEAT_ICON = "\uF6D7";
const STAR_ICON = "\uF005";
const PLUS_ICON = "\uF067";
const MINUS_ICON = "\uF068";
const GRID_ICON = "\uF00A";
const CUBE_ICON = "\uF1B2";
const SEARCH_ICON = "\uF002";
const DAIRY_ICON = "\uF6C8";
const CONDIMENT_ICON = "\uF816";
const FOOD_ICON = "\uF0F5";
const FISH_ICON = "\uF578";
const INFO_ICON = "\uF05A";
const TRASH_ICON = "\uF1F8";
const iconDict = {
  dairy: DAIRY_ICON,
  fruits: FRUIT_ICON,
  condiments: CONDIMENT_ICON,
  vegetables: VEGETABLE_ICON,
  meat: MEAT_ICON,
  fish: FISH_ICON,
  food: FOOD_ICON
};
const API_URL = "http://localhost:8000/api";
const GET_PRODUCTS_URL = "/products/";
const YOUTUBE_URL = "";
const FACEBOOK_URL = "";
const INSTAGRAM_URL = "";
export {
  API_URL as A,
  Button as B,
  CUBE_ICON as C,
  FACEBOOK_URL as F,
  GRID_ICON as G,
  HOT_ICON as H,
  Icon as I,
  LATEST_ICON as L,
  MINUS_ICON as M,
  PLUS_ICON as P,
  STAR_ICON as S,
  TRUCK_ICON as T,
  UPCOMING_ICON as U,
  YOUTUBE_URL as Y,
  BARS_ICON as a,
  INSTAGRAM_URL as b,
  TRASH_ICON as c,
  INFO_ICON as d,
  GET_PRODUCTS_URL as e,
  TIMES_ICON as f,
  TOP_ICON as g,
  SEARCH_ICON as h,
  iconDict as i,
  mq as m,
  writable as w
};
