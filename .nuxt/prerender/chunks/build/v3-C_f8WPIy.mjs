import { hasInjectionContext, inject } from 'file://E:/%E6%B5%B7%E5%8D%97%E7%A7%AF%E5%88%86%E5%AE%9D%E5%85%AC%E5%8F%B8%E5%AE%98%E7%BD%91%E5%BB%BA%E8%AE%BE/CompanyOfficialWebsite/node_modules/vue/index.mjs';
import { t as tryUseNuxtApp } from './server.mjs';
import { u as useHead$1, h as headSymbol } from '../_/renderer.mjs';

function injectHead(nuxtApp) {
  var _a;
  const nuxt = nuxtApp || tryUseNuxtApp();
  return ((_a = nuxt == null ? void 0 : nuxt.ssrContext) == null ? void 0 : _a.head) || (nuxt == null ? void 0 : nuxt.runWithContext(() => {
    if (hasInjectionContext()) {
      return inject(headSymbol);
    }
  }));
}
function useHead(input, options = {}) {
  const head = injectHead(options.nuxt);
  if (head) {
    return useHead$1(input, { head, ...options });
  }
}

export { useHead as u };
//# sourceMappingURL=v3-C_f8WPIy.mjs.map
