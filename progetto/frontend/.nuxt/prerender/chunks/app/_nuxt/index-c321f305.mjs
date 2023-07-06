import { b as useRuntimeConfig, u as useHead, _ as __nuxt_component_0$1 } from '../server.mjs';
import { withAsyncContext, unref, useSSRContext, mergeProps, withCtx, createTextVNode } from 'file:///Users/samuele.marchioni/Desktop/u/progetto/frontend/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderList, ssrRenderComponent, ssrInterpolate } from 'file:///Users/samuele.marchioni/Desktop/u/progetto/frontend/node_modules/vue/server-renderer/index.mjs';
import { u as useFetch } from './fetch-1d2059a0.mjs';
import { _ as _imports_0 } from './team-cf370b7e.mjs';
import 'file:///Users/samuele.marchioni/Desktop/u/progetto/frontend/node_modules/ofetch/dist/node.mjs';
import 'file:///Users/samuele.marchioni/Desktop/u/progetto/frontend/node_modules/hookable/dist/index.mjs';
import 'file:///Users/samuele.marchioni/Desktop/u/progetto/frontend/node_modules/unctx/dist/index.mjs';
import 'file:///Users/samuele.marchioni/Desktop/u/progetto/frontend/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file:///Users/samuele.marchioni/Desktop/u/progetto/frontend/node_modules/h3/dist/index.mjs';
import 'file:///Users/samuele.marchioni/Desktop/u/progetto/frontend/node_modules/ufo/dist/index.mjs';
import 'file:///Users/samuele.marchioni/Desktop/u/progetto/frontend/node_modules/@unhead/ssr/dist/index.mjs';
import 'file:///Users/samuele.marchioni/Desktop/u/progetto/frontend/node_modules/unhead/dist/index.mjs';
import 'file:///Users/samuele.marchioni/Desktop/u/progetto/frontend/node_modules/@unhead/shared/dist/index.mjs';
import 'file:///Users/samuele.marchioni/Desktop/u/progetto/frontend/node_modules/defu/dist/defu.mjs';
import '../../nitro/nitro-prerenderer.mjs';
import 'file:///Users/samuele.marchioni/Desktop/u/progetto/frontend/node_modules/node-fetch-native/dist/polyfill.mjs';
import 'file:///Users/samuele.marchioni/Desktop/u/progetto/frontend/node_modules/destr/dist/index.mjs';
import 'file:///Users/samuele.marchioni/Desktop/u/progetto/frontend/node_modules/unenv/runtime/fetch/index.mjs';
import 'file:///Users/samuele.marchioni/Desktop/u/progetto/frontend/node_modules/scule/dist/index.mjs';
import 'file:///Users/samuele.marchioni/Desktop/u/progetto/frontend/node_modules/klona/dist/index.mjs';
import 'file:///Users/samuele.marchioni/Desktop/u/progetto/frontend/node_modules/ohash/dist/index.mjs';
import 'file:///Users/samuele.marchioni/Desktop/u/progetto/frontend/node_modules/unstorage/dist/index.mjs';
import 'file:///Users/samuele.marchioni/Desktop/u/progetto/frontend/node_modules/unstorage/drivers/fs.mjs';
import 'file:///Users/samuele.marchioni/Desktop/u/progetto/frontend/node_modules/radix3/dist/index.mjs';
import '../../renderer.mjs';
import 'file:///Users/samuele.marchioni/Desktop/u/progetto/frontend/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file:///Users/samuele.marchioni/Desktop/u/progetto/frontend/node_modules/devalue/index.js';

const _sfc_main$1 = {
  __name: "Card",
  __ssrInlineRender: true,
  props: ["title", "subtitle", "link", "img_link"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "card" }, _attrs))}><div class="image-container"><img class="img"${ssrRenderAttr("src", __props.img_link)} alt=""></div><span class="title">${ssrInterpolate(__props.title)}</span><span class="subtitle">${ssrInterpolate(__props.subtitle)}</span>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: __props.link,
        class: "linkstyle6"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` see more information`);
          } else {
            return [
              createTextVNode(" see more information")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="buttons"><button class="primary"> Message </button></div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Card.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = _sfc_main$1;
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { data: people } = ([__temp, __restore] = withAsyncContext(() => useFetch(useRuntimeConfig().public.serverURL + "/people", "$86ry0ThwyT")), __temp = await __temp, __restore(), __temp);
    useHead({
      title: "All people - Innovate Ventures",
      meta: [
        {
          name: "description",
          content: "All people page, the team that currently work in our firm"
        },
        {
          name: "keywords",
          content: "person, team, people"
        }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Card = __nuxt_component_0;
      _push(`<main${ssrRenderAttrs(_attrs)}><div class="cont-peo1"><div class="peop1"><h1>Our team</h1><h3>At Innovate Ventures, our success is driven by the collective brilliance and diverse expertise of our exceptional team</h3></div><div class="image2"><img id="pe1"${ssrRenderAttr("src", _imports_0)} alt=""></div></div><div class="sottot-peo"><h2> Each member brings a unique set of skills, experiences, and perspectives, contributing to a dynamic and forward-thinking environment that fuels our ability to identify and support groundbreaking startups. Our team is led by visionary leaders who have a proven track record of success in entrepreneurship, investment, and strategic guidance. With their wealth of experience, they provide invaluable insights and strategic direction, ensuring that our investment decisions align with our long-term objectives and deliver exceptional returns. </h2></div><div id="card-container"><!--[-->`);
      ssrRenderList(unref(people), (person) => {
        _push(ssrRenderComponent(_component_Card, {
          title: person.name,
          subtitle: person.role,
          link: "/people/" + person.id,
          img_link: `_nuxt/assets/img/people/${person.name}.jpeg`
        }, null, _parent));
      });
      _push(`<!--]--></div></main>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/people/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-c321f305.mjs.map
