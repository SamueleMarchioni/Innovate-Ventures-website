import { b as buildAssetsURL } from '../../renderer.mjs';
import { a as useRoute, b as useRuntimeConfig, u as useHead, d as _export_sfc, _ as __nuxt_component_0$1 } from '../server.mjs';
import { withAsyncContext, unref, useSSRContext, mergeProps, withCtx, createVNode } from 'file:///Users/samuele.marchioni/Desktop/u/progetto/frontend/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderComponent } from 'file:///Users/samuele.marchioni/Desktop/u/progetto/frontend/node_modules/vue/server-renderer/index.mjs';
import { _ as __nuxt_component_1 } from './SmallCard-567dbcdc.mjs';
import { u as useFetch } from './fetch-1d2059a0.mjs';
import 'file:///Users/samuele.marchioni/Desktop/u/progetto/frontend/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file:///Users/samuele.marchioni/Desktop/u/progetto/frontend/node_modules/h3/dist/index.mjs';
import 'file:///Users/samuele.marchioni/Desktop/u/progetto/frontend/node_modules/devalue/index.js';
import 'file:///Users/samuele.marchioni/Desktop/u/progetto/frontend/node_modules/ufo/dist/index.mjs';
import '../../nitro/nitro-prerenderer.mjs';
import 'file:///Users/samuele.marchioni/Desktop/u/progetto/frontend/node_modules/node-fetch-native/dist/polyfill.mjs';
import 'file:///Users/samuele.marchioni/Desktop/u/progetto/frontend/node_modules/ofetch/dist/node.mjs';
import 'file:///Users/samuele.marchioni/Desktop/u/progetto/frontend/node_modules/destr/dist/index.mjs';
import 'file:///Users/samuele.marchioni/Desktop/u/progetto/frontend/node_modules/unenv/runtime/fetch/index.mjs';
import 'file:///Users/samuele.marchioni/Desktop/u/progetto/frontend/node_modules/hookable/dist/index.mjs';
import 'file:///Users/samuele.marchioni/Desktop/u/progetto/frontend/node_modules/scule/dist/index.mjs';
import 'file:///Users/samuele.marchioni/Desktop/u/progetto/frontend/node_modules/klona/dist/index.mjs';
import 'file:///Users/samuele.marchioni/Desktop/u/progetto/frontend/node_modules/defu/dist/defu.mjs';
import 'file:///Users/samuele.marchioni/Desktop/u/progetto/frontend/node_modules/ohash/dist/index.mjs';
import 'file:///Users/samuele.marchioni/Desktop/u/progetto/frontend/node_modules/unstorage/dist/index.mjs';
import 'file:///Users/samuele.marchioni/Desktop/u/progetto/frontend/node_modules/unstorage/drivers/fs.mjs';
import 'file:///Users/samuele.marchioni/Desktop/u/progetto/frontend/node_modules/radix3/dist/index.mjs';
import 'file:///Users/samuele.marchioni/Desktop/u/progetto/frontend/node_modules/unctx/dist/index.mjs';
import 'file:///Users/samuele.marchioni/Desktop/u/progetto/frontend/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file:///Users/samuele.marchioni/Desktop/u/progetto/frontend/node_modules/@unhead/ssr/dist/index.mjs';
import 'file:///Users/samuele.marchioni/Desktop/u/progetto/frontend/node_modules/unhead/dist/index.mjs';
import 'file:///Users/samuele.marchioni/Desktop/u/progetto/frontend/node_modules/@unhead/shared/dist/index.mjs';

const _sfc_main$1 = {
  props: [
    "title",
    "link"
  ]
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLink = __nuxt_component_0$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "cardella" }, _attrs))}><span class="title">${ssrInterpolate($props.title)}</span>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: $props.link }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<button class="small-butt"${_scopeId}> Go to the page</button>`);
      } else {
        return [
          createVNode("button", { class: "small-butt" }, " Go to the page")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SmallCardArea.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const AIDriven_Drug_Discovery = "" + buildAssetsURL("AI-Driven Drug Discovery.122f0591.jpeg");
const __vite_glob_0_0 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: AIDriven_Drug_Discovery
});
const Adventure_Tourism_Tech = "" + buildAssetsURL("Adventure Tourism Tech.f3ed73bc.jpeg");
const __vite_glob_0_1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: Adventure_Tourism_Tech
});
const Clean_Energy_Innovators = "" + buildAssetsURL("Clean Energy Innovators.028addab.jpeg");
const __vite_glob_0_2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: Clean_Energy_Innovators
});
const Destination_Management_Platform = "" + buildAssetsURL("Destination Management Platform.1290a68d.jpeg");
const __vite_glob_0_3 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: Destination_Management_Platform
});
const Digital_Mental_Health = "" + buildAssetsURL("Digital Mental Health.5386be27.jpeg");
const __vite_glob_0_4 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: Digital_Mental_Health
});
const ECommerce_Disruptor = "" + buildAssetsURL("E-commerce Disruptor.496b4915.jpeg");
const __vite_glob_0_5 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: ECommerce_Disruptor
});
const FinTech_Revolution = "" + buildAssetsURL("FinTech Revolution.9e253e81.jpeg");
const __vite_glob_0_6 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: FinTech_Revolution
});
const Personalized_Medicine_Diagnostics = "" + buildAssetsURL("Personalized Medicine Diagnostics.c6d4983e.jpeg");
const __vite_glob_0_7 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: Personalized_Medicine_Diagnostics
});
const Smart_Manufacturing = "" + buildAssetsURL("Smart Manufacturing.274ce37e.jpeg");
const __vite_glob_0_8 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: Smart_Manufacturing
});
const Supply_Chain_Optimization = "" + buildAssetsURL("Supply Chain Optimization.cf3c3620.jpeg");
const __vite_glob_0_9 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: Supply_Chain_Optimization
});
const Sustainable_Accommodation = "" + buildAssetsURL("Sustainable Accommodation.73cbb7c6.jpeg");
const __vite_glob_0_10 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: Sustainable_Accommodation
});
const Telemedicine_Platform = "" + buildAssetsURL("Telemedicine Platform.3b0bfe55.jpeg");
const __vite_glob_0_11 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: Telemedicine_Platform
});
const Travel_Experience_Aggregator = "" + buildAssetsURL("Travel Experience Aggregator.d14f0694.jpeg");
const __vite_glob_0_12 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: Travel_Experience_Aggregator
});
const Virtual_Travel_Experiences = "" + buildAssetsURL("Virtual Travel Experiences.946844e6.jpeg");
const __vite_glob_0_13 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: Virtual_Travel_Experiences
});
const Wearable_Health_Monitoring = "" + buildAssetsURL("Wearable Health Monitoring.eba16142.jpeg");
const __vite_glob_0_14 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: Wearable_Health_Monitoring
});
const _sfc_main = {
  __name: "[id]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute();
    const id = route.params.id;
    const { data: project } = ([__temp, __restore] = withAsyncContext(() => useFetch(useRuntimeConfig().public.serverURL + "/projects/" + id, "$NLv8nVzATR")), __temp = await __temp, __restore(), __temp);
    const getSrc = (name) => {
      const path = `/assets/img/projects/${name}.jpeg`;
      const modules = /* @__PURE__ */ Object.assign({ "/assets/img/projects/AI-Driven Drug Discovery.jpeg": __vite_glob_0_0, "/assets/img/projects/Adventure Tourism Tech.jpeg": __vite_glob_0_1, "/assets/img/projects/Clean Energy Innovators.jpeg": __vite_glob_0_2, "/assets/img/projects/Destination Management Platform.jpeg": __vite_glob_0_3, "/assets/img/projects/Digital Mental Health.jpeg": __vite_glob_0_4, "/assets/img/projects/E-commerce Disruptor.jpeg": __vite_glob_0_5, "/assets/img/projects/FinTech Revolution.jpeg": __vite_glob_0_6, "/assets/img/projects/Personalized Medicine Diagnostics.jpeg": __vite_glob_0_7, "/assets/img/projects/Smart Manufacturing.jpeg": __vite_glob_0_8, "/assets/img/projects/Supply Chain Optimization.jpeg": __vite_glob_0_9, "/assets/img/projects/Sustainable Accommodation.jpeg": __vite_glob_0_10, "/assets/img/projects/Telemedicine Platform.jpeg": __vite_glob_0_11, "/assets/img/projects/Travel Experience Aggregator.jpeg": __vite_glob_0_12, "/assets/img/projects/Virtual Travel Experiences.jpeg": __vite_glob_0_13, "/assets/img/projects/Wearable Health Monitoring.jpeg": __vite_glob_0_14 });
      return modules[path].default;
    };
    useHead({
      title: "Project - Innovate Ventures ",
      meta: [
        {
          name: "description",
          content: "single project page, information about a specific project"
        },
        {
          name: "keywords",
          content: "project, supervisor, area"
        }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SmallCardArea = __nuxt_component_0;
      const _component_SmallCard = __nuxt_component_1;
      _push(`<main${ssrRenderAttrs(_attrs)}><div class="info-group-project"><div><img id="proj-imm"${ssrRenderAttr("src", getSrc(unref(project).name))} alt=""></div><div id="data-container"><p class="data-project"><b>Name:</b> <span>${ssrInterpolate(unref(project).name)}</span></p><p class="data-project"><b>Area:</b> <span>${ssrInterpolate(unref(project).field)}</span></p></div></div><p id="description-project">${unref(project).description}</p><div class="small-cards-pair"><div class="carta-1"><h1 id="proj">Area:</h1><div id="project-card-container">`);
      _push(ssrRenderComponent(_component_SmallCardArea, {
        title: unref(project).area.name,
        link: "/areas/" + unref(project).area.id
      }, null, _parent));
      _push(`</div></div><div class="carta-2"><h1 id="proj">Supervisor:</h1><div id="project-card-container">`);
      _push(ssrRenderComponent(_component_SmallCard, {
        title: unref(project).person.name,
        subtitle: unref(project).person.role,
        link: "/people/" + unref(project).person.id
      }, null, _parent));
      _push(`</div></div></div></main>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/projects/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_id_-513c47a0.mjs.map
