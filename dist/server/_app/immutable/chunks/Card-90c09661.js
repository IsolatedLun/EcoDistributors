import { c as create_ssr_component, b as add_attribute, i as is_void, v as validate_component } from "./index-0b2312f2.js";
function propOrDefault(x, def) {
  return x ? x : def;
}
function createCubeCSSClass(vars, extra) {
  return `
        [ ${propOrDefault(vars.blockClass, "")} ${propOrDefault(extra.blockClass, "")} ] 
        [ ${propOrDefault(vars.compostClass, "")} ${propOrDefault(extra.compostClass, "")} ] 
        [ ${propOrDefault(vars.utilClass, "")} ${propOrDefault(extra.utilClass, "")} ]`;
}
function createDefaultCubeClass(pre = {}) {
  return {
    blockClass: "" + propOrDefault(pre.blockClass, ""),
    compostClass: "" + propOrDefault(pre.blockClass, ""),
    utilClass: "" + propOrDefault(pre.blockClass, "")
  };
}
function combineCubeClasses(self, other) {
  return {
    blockClass: propOrDefault(self.blockClass, " ") + propOrDefault(other.blockClass, " "),
    compostClass: propOrDefault(self.compostClass, " ") + propOrDefault(other.compostClass, " "),
    utilClass: propOrDefault(self.utilClass, " ") + propOrDefault(other.utilClass, " ")
  };
}
const FlexyCustom = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { gap = 2 } = $$props;
  let { cubeClass = createDefaultCubeClass() } = $$props;
  let { useColumn = false } = $$props;
  let { centerOnMobile = false } = $$props;
  let { justifyOnMobile = false } = $$props;
  let { collapseOnMobile = false } = $$props;
  let { align = "center" } = $$props;
  let { justify = "" } = $$props;
  let { tag = "div" } = $$props;
  let _this;
  let { use = () => null } = $$props;
  const _class = createCubeCSSClass(cubeClass, {
    compostClass: `${useColumn ? "flex-direction-column" : "flex"} 
		gap-${gap} 
		align-items-${align} 
		justify-content-${justify}`
  });
  if ($$props.gap === void 0 && $$bindings.gap && gap !== void 0)
    $$bindings.gap(gap);
  if ($$props.cubeClass === void 0 && $$bindings.cubeClass && cubeClass !== void 0)
    $$bindings.cubeClass(cubeClass);
  if ($$props.useColumn === void 0 && $$bindings.useColumn && useColumn !== void 0)
    $$bindings.useColumn(useColumn);
  if ($$props.centerOnMobile === void 0 && $$bindings.centerOnMobile && centerOnMobile !== void 0)
    $$bindings.centerOnMobile(centerOnMobile);
  if ($$props.justifyOnMobile === void 0 && $$bindings.justifyOnMobile && justifyOnMobile !== void 0)
    $$bindings.justifyOnMobile(justifyOnMobile);
  if ($$props.collapseOnMobile === void 0 && $$bindings.collapseOnMobile && collapseOnMobile !== void 0)
    $$bindings.collapseOnMobile(collapseOnMobile);
  if ($$props.align === void 0 && $$bindings.align && align !== void 0)
    $$bindings.align(align);
  if ($$props.justify === void 0 && $$bindings.justify && justify !== void 0)
    $$bindings.justify(justify);
  if ($$props.tag === void 0 && $$bindings.tag && tag !== void 0)
    $$bindings.tag(tag);
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  return `${((tag$1) => {
    return tag$1 ? `<${tag}${add_attribute("class", _class, 0)}${add_attribute("data-align-mobile", centerOnMobile, 0)}${add_attribute("data-justify-mobile", justifyOnMobile, 0)}${add_attribute("data-explicit-flex-collapse", collapseOnMobile, 0)}${add_attribute("this", _this, 0)}>${is_void(tag$1) ? "" : `${slots.default ? slots.default({}) : ``}`}${is_void(tag$1) ? "" : `</${tag$1}>`}` : "";
  })(tag)}`;
});
const Typography = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { centerOnMobile = false } = $$props;
  let { fontSize = "default" } = $$props;
  let { fontWeight = "default" } = $$props;
  let { tag = "p" } = $$props;
  let { cubeClass = createDefaultCubeClass() } = $$props;
  let _class = createCubeCSSClass(cubeClass, {
    utilClass: `fw-${fontWeight} fs-${fontSize}`
  });
  if ($$props.centerOnMobile === void 0 && $$bindings.centerOnMobile && centerOnMobile !== void 0)
    $$bindings.centerOnMobile(centerOnMobile);
  if ($$props.fontSize === void 0 && $$bindings.fontSize && fontSize !== void 0)
    $$bindings.fontSize(fontSize);
  if ($$props.fontWeight === void 0 && $$bindings.fontWeight && fontWeight !== void 0)
    $$bindings.fontWeight(fontWeight);
  if ($$props.tag === void 0 && $$bindings.tag && tag !== void 0)
    $$bindings.tag(tag);
  if ($$props.cubeClass === void 0 && $$bindings.cubeClass && cubeClass !== void 0)
    $$bindings.cubeClass(cubeClass);
  return `${((tag$1) => {
    return tag$1 ? `<${tag}${add_attribute("class", _class, 0)}${add_attribute("data-text-center-mobile", centerOnMobile, 0)}>${is_void(tag$1) ? "" : `${slots.default ? slots.default({}) : ``}`}${is_void(tag$1) ? "" : `</${tag$1}>`}` : "";
  })(tag)}`;
});
const TypoHeader = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { h = 2 } = $$props;
  let { tag = "" } = $$props;
  let { cubeClass = createDefaultCubeClass() } = $$props;
  let { spacing = 1 } = $$props;
  let combinedCubeClass = combineCubeClasses(cubeClass, {
    utilClass: ` margin-block-end-${spacing} `
  });
  if ($$props.h === void 0 && $$bindings.h && h !== void 0)
    $$bindings.h(h);
  if ($$props.tag === void 0 && $$bindings.tag && tag !== void 0)
    $$bindings.tag(tag);
  if ($$props.cubeClass === void 0 && $$bindings.cubeClass && cubeClass !== void 0)
    $$bindings.cubeClass(cubeClass);
  if ($$props.spacing === void 0 && $$bindings.spacing && spacing !== void 0)
    $$bindings.spacing(spacing);
  return `${validate_component(Typography, "Typography").$$render(
    $$result,
    {
      tag: tag ? tag : `h${h}`,
      cubeClass: { ...combinedCubeClass },
      fontWeight: "heading"
    },
    {},
    {
      default: () => {
        return `${slots.default ? slots.default({}) : ``}`;
      }
    }
  )}`;
});
const Card = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { cubeClass = createDefaultCubeClass() } = $$props;
  let { tag = "div" } = $$props;
  let { variant = "default" } = $$props;
  let { use = (e) => null } = $$props;
  const _class = createCubeCSSClass(cubeClass, { compostClass: "card" });
  let _this;
  if ($$props.cubeClass === void 0 && $$bindings.cubeClass && cubeClass !== void 0)
    $$bindings.cubeClass(cubeClass);
  if ($$props.tag === void 0 && $$bindings.tag && tag !== void 0)
    $$bindings.tag(tag);
  if ($$props.variant === void 0 && $$bindings.variant && variant !== void 0)
    $$bindings.variant(variant);
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  return `${((tag$1) => {
    return tag$1 ? `<${tag}${add_attribute("class", _class, 0)}${add_attribute("data-card-variant", variant, 0)}${add_attribute("this", _this, 0)}>${is_void(tag$1) ? "" : `${slots.default ? slots.default({}) : ``}`}${is_void(tag$1) ? "" : `</${tag$1}>`}` : "";
  })(tag)}`;
});
export {
  Card as C,
  FlexyCustom as F,
  TypoHeader as T,
  createCubeCSSClass as a,
  Typography as b,
  createDefaultCubeClass as c
};
