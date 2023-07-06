import { b as useRuntimeConfig, u as useHead, _ as __nuxt_component_0 } from "../server.mjs";
import { _ as __nuxt_component_1 } from "./CardLoc-5e0ec9a2.js";
import "./index-e12b288f.js";
import { withAsyncContext, ref, computed, withCtx, createVNode, unref, useSSRContext } from "vue";
import { u as useFetch } from "./fetch-1d2059a0.js";
import "destr";
import "devalue";
import "klona";
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderComponent, ssrRenderAttr, ssrRenderList } from "vue/server-renderer";
import "ofetch";
import "#internal/nitro";
import "hookable";
import "unctx";
import "vue-router";
import "h3";
import "ufo";
import "@unhead/ssr";
import "unhead";
import "@unhead/shared";
import "defu";
import "ohash";
const _imports_0 = "" + __buildAssetsURL("p1.3723d182.png");
const index_vue_vue_type_style_index_0_lang = "";
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { data: projects } = ([__temp, __restore] = withAsyncContext(() => useFetch(useRuntimeConfig().public.serverURL + "/projects", "$olQ4jpDRvq")), __temp = await __temp, __restore(), __temp);
    const area = ref(0);
    const filtered = computed(() => {
      if (area.value == 0)
        return projects.value;
      const arr = [];
      for (let loc of projects.value) {
        if (loc.area_selection == area.value)
          arr.push(loc);
      }
      return arr;
    });
    useHead({
      title: "All projects - Innovate Ventures",
      meta: [
        {
          name: "description",
          content: "All projects page, see all the projects available in our firm or filter them by area"
        },
        {
          name: "keywords",
          content: "projects, economy, tourism, healthcare, area"
        }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_CardLoc = __nuxt_component_1;
      _push(`<main${ssrRenderAttrs(_attrs)}><div class="cont-pr1"><div class="proj1"><h1>Our projects</h1><h3 style="${ssrRenderStyle({ "margin-top": "-15px" })}">We want to support and nurture innovative ideas, drive market disruption, and contribute to the growth and development of impactful businesses</h3>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/mostrelevant",
        class: "lin"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div id="most_stpr"${_scopeId}><h1${_scopeId}> Top ranked </h1></div>`);
          } else {
            return [
              createVNode("div", { id: "most_stpr" }, [
                createVNode("h1", null, " Top ranked ")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="image2"><img id="p1"${ssrRenderAttr("src", _imports_0)} alt=""></div></div><div class="cont-pr2"><div class="image2"><img id="p2"${ssrRenderAttr("src", _imports_0)} alt=""></div><div class="sectors"><h1> Requirements: </h1><h2> Market Potential. </h2><h2> Disruption and Innovation. </h2><h2> Addressing Key Challenges. </h2><h2> Sustainability and Social Impact. </h2><h2> Passionate Team Workers. </h2></div></div><div class="carte"><div id="form-container-proj"><label class="proj-filt" for="projects-filter"><h1>By area of interest</h1></label><select><option value="0"> All projects</option><option value="1"> Economy</option><option value="2"> Tourism</option><option value="3"> Health</option></select></div><div id="card-container"><!--[-->`);
      ssrRenderList(unref(filtered), (project) => {
        _push(ssrRenderComponent(_component_CardLoc, {
          title: project.name,
          subtitle: project.field,
          link: "/projects/" + project.id,
          img_link: `_nuxt/assets/img/projects/${project.name}.jpeg`,
          button: false
        }, null, _parent));
      });
      _push(`<!--]--></div></div></main>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/projects/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-9eaa8c47.js.map
