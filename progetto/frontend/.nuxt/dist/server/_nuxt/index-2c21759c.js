import { _ as __nuxt_component_1 } from "./CardLoc-5e0ec9a2.js";
import { b as useRuntimeConfig, u as useHead } from "../server.mjs";
import "./index-e12b288f.js";
import { withAsyncContext, computed, unref, useSSRContext } from "vue";
import { u as useFetch } from "./fetch-1d2059a0.js";
import "destr";
import "devalue";
import "klona";
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent } from "vue/server-renderer";
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
const index_vue_vue_type_style_index_0_lang = "";
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { data: projects } = ([__temp, __restore] = withAsyncContext(() => useFetch(useRuntimeConfig().public.serverURL + "/projects", "$gUMxFkRIxZ")), __temp = await __temp, __restore(), __temp);
    const filtered = computed(() => {
      const arr = [];
      for (let loc of projects.value) {
        if (loc.most == 1)
          arr.push(loc);
      }
      return arr;
    });
    useHead({
      title: "Most relevant projects - Innovate Ventures",
      meta: [
        {
          name: "description",
          content: "most relevant projects, our top 5 ranked projects"
        },
        {
          name: "keywords",
          content: "most, relevant, projects, top"
        }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CardLoc = __nuxt_component_1;
      _push(`<main${ssrRenderAttrs(_attrs)}><div class="rank"><h1> Top ranked projects</h1><h6> At Innovate Ventures, we are committed to identifying and supporting innovative projects that have the potential to make a significant impact in the economy, health, and tourism sectors. Our team of experts has meticulously evaluated numerous ventures and handpicked a selection of top-ranked projects that exemplify groundbreaking ideas and promising growth potential.</h6></div><div id="card-container"><!--[-->`);
      ssrRenderList(unref(filtered), (project) => {
        _push(ssrRenderComponent(_component_CardLoc, {
          title: project.name,
          subtitle: project.field,
          link: "/projects/" + project.id,
          img_link: `_nuxt/assets/img/projects/${project.name}.jpeg`
        }, null, _parent));
      });
      _push(`<!--]--></div></main>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/mostrelevant/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-2c21759c.js.map
