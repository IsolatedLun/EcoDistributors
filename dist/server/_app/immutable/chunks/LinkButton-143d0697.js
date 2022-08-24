import { c as create_ssr_component, b as add_attribute } from "./index-0b2312f2.js";
import { c as createDefaultCubeClass, a as createCubeCSSClass } from "./Card-90c09661.js";
const LinkButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { cubeClass = createDefaultCubeClass() } = $$props;
  let { variant = "default" } = $$props;
  let { secondaryVariant = "default" } = $$props;
  let { ariaLabel = "Link button" } = $$props;
  let { to = "/" } = $$props;
  let { target = "_self" } = $$props;
  const _class = createCubeCSSClass(cubeClass, { compostClass: "button" });
  if ($$props.cubeClass === void 0 && $$bindings.cubeClass && cubeClass !== void 0)
    $$bindings.cubeClass(cubeClass);
  if ($$props.variant === void 0 && $$bindings.variant && variant !== void 0)
    $$bindings.variant(variant);
  if ($$props.secondaryVariant === void 0 && $$bindings.secondaryVariant && secondaryVariant !== void 0)
    $$bindings.secondaryVariant(secondaryVariant);
  if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0)
    $$bindings.ariaLabel(ariaLabel);
  if ($$props.to === void 0 && $$bindings.to && to !== void 0)
    $$bindings.to(to);
  if ($$props.target === void 0 && $$bindings.target && target !== void 0)
    $$bindings.target(target);
  return `${target === "_blank" ? `<a${add_attribute("href", to, 0)} target="${"_blank"}"${add_attribute("class", _class, 0)}${add_attribute("data-variant", variant, 0)}${add_attribute("data-secondary-variant", secondaryVariant, 0)}${add_attribute("aria-label", ariaLabel, 0)}>${slots.default ? slots.default({}) : ``}</a>` : `<a${add_attribute("href", to, 0)}${add_attribute("class", _class, 0)}${add_attribute("data-variant", variant, 0)}${add_attribute("data-secondary-variant", secondaryVariant, 0)}${add_attribute("aria-label", ariaLabel, 0)}>${slots.default ? slots.default({}) : ``}</a>`}`;
});
export {
  LinkButton as L
};
