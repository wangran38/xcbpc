import { a as buildAssetsURL } from '../_/renderer.mjs';
import { mergeProps, ref, watch, useSSRContext } from 'file://E:/%E6%B5%B7%E5%8D%97%E7%A7%AF%E5%88%86%E5%AE%9D%E5%85%AC%E5%8F%B8%E5%AE%98%E7%BD%91%E5%BB%BA%E8%AE%BE/CompanyOfficialWebsite/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderAttr, ssrRenderList, ssrInterpolate, ssrRenderClass } from 'file://E:/%E6%B5%B7%E5%8D%97%E7%A7%AF%E5%88%86%E5%AE%9D%E5%85%AC%E5%8F%B8%E5%AE%98%E7%BD%91%E5%BB%BA%E8%AE%BE/CompanyOfficialWebsite/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc } from './server.mjs';

const _imports_0 = "" + buildAssetsURL("logo.C_IHF1GT.png");
const _imports_1 = "data:image/png;base64,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";
const _sfc_main$1 = {
  __name: "headers",
  __ssrInlineRender: true,
  setup(__props) {
    const navItems = [
      { id: 1, label: "\u8363\u8A89\u8D44\u8D28", url: "/certificateWall", target: "_self" },
      { id: 2, label: "\u6838\u5FC3\u529F\u80FD", url: "/#services", target: "_self" },
      { id: 3, label: "\u6295\u8D44\u4F18\u52BF", url: "/#advantage", target: "_self" },
      { id: 4, label: "\u5E94\u7528\u573A\u666F", url: "/#scene", target: "_self" },
      { id: 5, label: "\u5408\u4F5C\u6D41\u7A0B", url: "/#process", target: "_self" },
      { id: 6, label: "\u63D0\u4F9B\u670D\u52A1", url: "/#service", target: "_self" },
      // { id: 7, label: '商家信息', url: '/shoppingPc', target: '_blank' }
      { id: 7, label: "\u5546\u5BB6\u4FE1\u606F", url: "/shoppingPc", target: "_self" }
    ];
    const isMenuOpen = ref(false);
    const menuOpacity = ref(0);
    ref("/\u5C55\u5F00\u83DC\u5355.png");
    ref("/\u5173\u95ED\u83DC\u5355.png");
    watch(isMenuOpen, (newVal) => {
      (void 0).body.style.overflow = newVal ? "hidden" : "";
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<header${ssrRenderAttrs(mergeProps({ class: "site-header" }, _attrs))} data-v-224f9644><div class="header-container" data-v-224f9644><div class="header-logo" data-v-224f9644><img${ssrRenderAttr("src", _imports_0)} style="${ssrRenderStyle({ "width": "50px", "height": "50px", "margin-right": "10px" })}" data-v-224f9644><a href="/" class="logo-link" data-v-224f9644><span class="logo-text" data-v-224f9644>\u6D77\u5357\u79EF\u5206\u5B9D\u7535\u5B50\u5546\u52A1\u6709\u9650\u516C\u53F8</span></a></div><nav class="desktop-nav" data-v-224f9644><ul class="nav-list" data-v-224f9644><!--[-->`);
      ssrRenderList(navItems, (item) => {
        _push(`<li class="nav-item" data-v-224f9644><a${ssrRenderAttr("href", item.url)} class="nav-link"${ssrRenderAttr("target", item.target)} data-v-224f9644>${ssrInterpolate(item.label)}</a></li>`);
      });
      _push(`<!--]--></ul></nav><button class="mobile-menu-btn" aria-label="\u5207\u6362\u83DC\u5355" data-v-224f9644><img${ssrRenderAttr("src", _imports_1)} alt="\u83DC\u5355\u56FE\u6807" class="menu-icon" data-v-224f9644></button></div><div class="${ssrRenderClass([{ "mobile-nav--open": isMenuOpen.value }, "mobile-nav"])}" style="${ssrRenderStyle({ opacity: menuOpacity.value })}" data-v-224f9644><ul class="mobile-nav-list" data-v-224f9644><!--[-->`);
      ssrRenderList(navItems, (item) => {
        _push(`<li class="mobile-nav-item" data-v-224f9644><a${ssrRenderAttr("href", item.url)} class="mobile-nav-link"${ssrRenderAttr("target", item.target)} data-v-224f9644>${ssrInterpolate(item.label)}</a></li>`);
      });
      _push(`<!--]--></ul></div></header>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/headers.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const headerVue = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-224f9644"]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<footer${ssrRenderAttrs(mergeProps({ class: "footer" }, _attrs))} data-v-4ac4a1b1><div class="container" data-v-4ac4a1b1><div class="footer-grid" data-v-4ac4a1b1><div class="footer-col" data-v-4ac4a1b1><h3 class="footer-title" data-v-4ac4a1b1>\u6D77\u5357\u79EF\u5206\u5B9D\u7535\u5B50\u5546\u52A1\u6709\u9650\u516C\u53F8</h3><p class="footer-text" data-v-4ac4a1b1>\u519C\u8D38\u5E02\u573A\u6570\u5B57\u5316\u8F6C\u578B\u5E73\u53F0\uFF0C\u8FDE\u63A5\u519C\u6237\u4E0E\u5E02\u573A\uFF0C\u52A9\u529B\u4E61\u6751\u632F\u5174\uFF0C\u4FDD\u969C\u98DF\u54C1\u5B89\u5168\u3002</p></div><div class="footer-col" data-v-4ac4a1b1><button style="${ssrRenderStyle({ "color": "black", "padding": "20px", "font-size": "20px" })}" data-v-4ac4a1b1><a href="/cooperate" target="_blank" data-v-4ac4a1b1>\u6210\u4E3A\u4EE3\u7406</a></button></div><div class="footer-col" data-v-4ac4a1b1><h3 class="footer-title" data-v-4ac4a1b1>\u8054\u7CFB\u65B9\u5F0F</h3><ul class="footer-contacts" data-v-4ac4a1b1><li class="footer-contact" data-v-4ac4a1b1><span data-v-4ac4a1b1>\u6D77\u5357\u7701\u6D77\u53E3\u5E02\u79C0\u82F1\u533A\u6D77\u76DB\u8DEF35\u53F7</span></li><li class="footer-contact" data-v-4ac4a1b1><span data-v-4ac4a1b1>+86 68552337</span></li><li class="footer-contact" data-v-4ac4a1b1><span data-v-4ac4a1b1>wangrantian@qq.com</span></li><li class="footer-contact" data-v-4ac4a1b1><span data-v-4ac4a1b1>\u5468\u4E00\u81F3\u5468\u4E94: 8:00 - 18:00</span></li></ul></div></div><div class="footer-bottom" data-v-4ac4a1b1><p hr class="footer-copyright" data-v-4ac4a1b1>\u5DE5\u4FE1\u90E8ICP\u5907\u6848\u53F7:<a href="https://beian.miit.gov.cn/" target="_blank" data-v-4ac4a1b1>\u743CICP\u59072024041928\u53F7</a></p><p class="footer-copyright" data-v-4ac4a1b1>\xA9 2025 \u6D77\u5357\u79EF\u5206\u5B9D\u7535\u5B50\u5546\u52A1\u6709\u9650\u516C\u53F8. \u4FDD\u7559\u6240\u6709\u6743\u5229\u3002</p></div></div></footer>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/footers.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const footerVue = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-4ac4a1b1"]]);

export { footerVue as f, headerVue as h };
//# sourceMappingURL=footers-CKEG946_.mjs.map
