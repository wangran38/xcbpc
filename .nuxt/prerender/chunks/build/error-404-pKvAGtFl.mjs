import { mergeProps, withCtx, createTextVNode, toDisplayString, defineComponent, ref, h, resolveComponent, computed, useSSRContext } from 'file://E:/%E6%B5%B7%E5%8D%97%E7%A7%AF%E5%88%86%E5%AE%9D%E5%85%AC%E5%8F%B8%E5%AE%98%E7%BD%91%E5%BB%BA%E8%AE%BE/CompanyOfficialWebsite/node_modules/vue/index.mjs';
import { parseQuery, hasProtocol, joinURL, withTrailingSlash, withoutTrailingSlash } from 'file://E:/%E6%B5%B7%E5%8D%97%E7%A7%AF%E5%88%86%E5%AE%9D%E5%85%AC%E5%8F%B8%E5%AE%98%E7%BD%91%E5%BB%BA%E8%AE%BE/CompanyOfficialWebsite/node_modules/ufo/dist/index.mjs';
import { _ as _export_sfc, u as useRouter, a as useNuxtApp, r as resolveRouteObject, b as useRuntimeConfig, n as navigateTo, c as nuxtLinkDefaults } from './server.mjs';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent } from 'file://E:/%E6%B5%B7%E5%8D%97%E7%A7%AF%E5%88%86%E5%AE%9D%E5%85%AC%E5%8F%B8%E5%AE%98%E7%BD%91%E5%BB%BA%E8%AE%BE/CompanyOfficialWebsite/node_modules/vue/server-renderer/index.mjs';
import { u as useHead } from './v3-C_f8WPIy.mjs';
import 'file://E:/%E6%B5%B7%E5%8D%97%E7%A7%AF%E5%88%86%E5%AE%9D%E5%85%AC%E5%8F%B8%E5%AE%98%E7%BD%91%E5%BB%BA%E8%AE%BE/CompanyOfficialWebsite/node_modules/ofetch/dist/node.mjs';
import '../_/renderer.mjs';
import 'file://E:/%E6%B5%B7%E5%8D%97%E7%A7%AF%E5%88%86%E5%AE%9D%E5%85%AC%E5%8F%B8%E5%AE%98%E7%BD%91%E5%BB%BA%E8%AE%BE/CompanyOfficialWebsite/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file://E:/%E6%B5%B7%E5%8D%97%E7%A7%AF%E5%88%86%E5%AE%9D%E5%85%AC%E5%8F%B8%E5%AE%98%E7%BD%91%E5%BB%BA%E8%AE%BE/CompanyOfficialWebsite/node_modules/h3/dist/index.mjs';
import '../_/nitro.mjs';
import 'file://E:/%E6%B5%B7%E5%8D%97%E7%A7%AF%E5%88%86%E5%AE%9D%E5%85%AC%E5%8F%B8%E5%AE%98%E7%BD%91%E5%BB%BA%E8%AE%BE/CompanyOfficialWebsite/node_modules/destr/dist/index.mjs';
import 'file://E:/%E6%B5%B7%E5%8D%97%E7%A7%AF%E5%88%86%E5%AE%9D%E5%85%AC%E5%8F%B8%E5%AE%98%E7%BD%91%E5%BB%BA%E8%AE%BE/CompanyOfficialWebsite/node_modules/hookable/dist/index.mjs';
import 'file://E:/%E6%B5%B7%E5%8D%97%E7%A7%AF%E5%88%86%E5%AE%9D%E5%85%AC%E5%8F%B8%E5%AE%98%E7%BD%91%E5%BB%BA%E8%AE%BE/CompanyOfficialWebsite/node_modules/node-mock-http/dist/index.mjs';
import 'file://E:/%E6%B5%B7%E5%8D%97%E7%A7%AF%E5%88%86%E5%AE%9D%E5%85%AC%E5%8F%B8%E5%AE%98%E7%BD%91%E5%BB%BA%E8%AE%BE/CompanyOfficialWebsite/node_modules/unstorage/dist/index.mjs';
import 'file://E:/%E6%B5%B7%E5%8D%97%E7%A7%AF%E5%88%86%E5%AE%9D%E5%85%AC%E5%8F%B8%E5%AE%98%E7%BD%91%E5%BB%BA%E8%AE%BE/CompanyOfficialWebsite/node_modules/unstorage/drivers/fs.mjs';
import 'file:///E:/%E6%B5%B7%E5%8D%97%E7%A7%AF%E5%88%86%E5%AE%9D%E5%85%AC%E5%8F%B8%E5%AE%98%E7%BD%91%E5%BB%BA%E8%AE%BE/CompanyOfficialWebsite/node_modules/nuxt/dist/core/runtime/nitro/utils/cache-driver.js';
import 'file://E:/%E6%B5%B7%E5%8D%97%E7%A7%AF%E5%88%86%E5%AE%9D%E5%85%AC%E5%8F%B8%E5%AE%98%E7%BD%91%E5%BB%BA%E8%AE%BE/CompanyOfficialWebsite/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file://E:/%E6%B5%B7%E5%8D%97%E7%A7%AF%E5%88%86%E5%AE%9D%E5%85%AC%E5%8F%B8%E5%AE%98%E7%BD%91%E5%BB%BA%E8%AE%BE/CompanyOfficialWebsite/node_modules/ohash/dist/index.mjs';
import 'file://E:/%E6%B5%B7%E5%8D%97%E7%A7%AF%E5%88%86%E5%AE%9D%E5%85%AC%E5%8F%B8%E5%AE%98%E7%BD%91%E5%BB%BA%E8%AE%BE/CompanyOfficialWebsite/node_modules/klona/dist/index.mjs';
import 'file://E:/%E6%B5%B7%E5%8D%97%E7%A7%AF%E5%88%86%E5%AE%9D%E5%85%AC%E5%8F%B8%E5%AE%98%E7%BD%91%E5%BB%BA%E8%AE%BE/CompanyOfficialWebsite/node_modules/defu/dist/defu.mjs';
import 'file://E:/%E6%B5%B7%E5%8D%97%E7%A7%AF%E5%88%86%E5%AE%9D%E5%85%AC%E5%8F%B8%E5%AE%98%E7%BD%91%E5%BB%BA%E8%AE%BE/CompanyOfficialWebsite/node_modules/scule/dist/index.mjs';
import 'file://E:/%E6%B5%B7%E5%8D%97%E7%A7%AF%E5%88%86%E5%AE%9D%E5%85%AC%E5%8F%B8%E5%AE%98%E7%BD%91%E5%BB%BA%E8%AE%BE/CompanyOfficialWebsite/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file://E:/%E6%B5%B7%E5%8D%97%E7%A7%AF%E5%88%86%E5%AE%9D%E5%85%AC%E5%8F%B8%E5%AE%98%E7%BD%91%E5%BB%BA%E8%AE%BE/CompanyOfficialWebsite/node_modules/pathe/dist/index.mjs';
import 'file://E:/%E6%B5%B7%E5%8D%97%E7%A7%AF%E5%88%86%E5%AE%9D%E5%85%AC%E5%8F%B8%E5%AE%98%E7%BD%91%E5%BB%BA%E8%AE%BE/CompanyOfficialWebsite/node_modules/unhead/dist/server.mjs';
import 'file://E:/%E6%B5%B7%E5%8D%97%E7%A7%AF%E5%88%86%E5%AE%9D%E5%85%AC%E5%8F%B8%E5%AE%98%E7%BD%91%E5%BB%BA%E8%AE%BE/CompanyOfficialWebsite/node_modules/devalue/index.js';
import 'file://E:/%E6%B5%B7%E5%8D%97%E7%A7%AF%E5%88%86%E5%AE%9D%E5%85%AC%E5%8F%B8%E5%AE%98%E7%BD%91%E5%BB%BA%E8%AE%BE/CompanyOfficialWebsite/node_modules/unhead/dist/utils.mjs';
import 'file://E:/%E6%B5%B7%E5%8D%97%E7%A7%AF%E5%88%86%E5%AE%9D%E5%85%AC%E5%8F%B8%E5%AE%98%E7%BD%91%E5%BB%BA%E8%AE%BE/CompanyOfficialWebsite/node_modules/unhead/dist/plugins.mjs';
import 'file://E:/%E6%B5%B7%E5%8D%97%E7%A7%AF%E5%88%86%E5%AE%9D%E5%85%AC%E5%8F%B8%E5%AE%98%E7%BD%91%E5%BB%BA%E8%AE%BE/CompanyOfficialWebsite/node_modules/unctx/dist/index.mjs';
import 'file://E:/%E6%B5%B7%E5%8D%97%E7%A7%AF%E5%88%86%E5%AE%9D%E5%85%AC%E5%8F%B8%E5%AE%98%E7%BD%91%E5%BB%BA%E8%AE%BE/CompanyOfficialWebsite/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file://E:/%E6%B5%B7%E5%8D%97%E7%A7%AF%E5%88%86%E5%AE%9D%E5%85%AC%E5%8F%B8%E5%AE%98%E7%BD%91%E5%BB%BA%E8%AE%BE/CompanyOfficialWebsite/node_modules/tslib/modules/index.js';
import 'file://E:/%E6%B5%B7%E5%8D%97%E7%A7%AF%E5%88%86%E5%AE%9D%E5%85%AC%E5%8F%B8%E5%AE%98%E7%BD%91%E5%BB%BA%E8%AE%BE/CompanyOfficialWebsite/node_modules/zrender/lib/zrender.js';
import 'file://E:/%E6%B5%B7%E5%8D%97%E7%A7%AF%E5%88%86%E5%AE%9D%E5%85%AC%E5%8F%B8%E5%AE%98%E7%BD%91%E5%BB%BA%E8%AE%BE/CompanyOfficialWebsite/node_modules/zrender/lib/core/util.js';
import 'file://E:/%E6%B5%B7%E5%8D%97%E7%A7%AF%E5%88%86%E5%AE%9D%E5%85%AC%E5%8F%B8%E5%AE%98%E7%BD%91%E5%BB%BA%E8%AE%BE/CompanyOfficialWebsite/node_modules/zrender/lib/core/env.js';
import 'file://E:/%E6%B5%B7%E5%8D%97%E7%A7%AF%E5%88%86%E5%AE%9D%E5%85%AC%E5%8F%B8%E5%AE%98%E7%BD%91%E5%BB%BA%E8%AE%BE/CompanyOfficialWebsite/node_modules/zrender/lib/core/timsort.js';
import 'file://E:/%E6%B5%B7%E5%8D%97%E7%A7%AF%E5%88%86%E5%AE%9D%E5%85%AC%E5%8F%B8%E5%AE%98%E7%BD%91%E5%BB%BA%E8%AE%BE/CompanyOfficialWebsite/node_modules/zrender/lib/core/Eventful.js';
import 'file://E:/%E6%B5%B7%E5%8D%97%E7%A7%AF%E5%88%86%E5%AE%9D%E5%85%AC%E5%8F%B8%E5%AE%98%E7%BD%91%E5%BB%BA%E8%AE%BE/CompanyOfficialWebsite/node_modules/zrender/lib/graphic/Text.js';
import 'file://E:/%E6%B5%B7%E5%8D%97%E7%A7%AF%E5%88%86%E5%AE%9D%E5%85%AC%E5%8F%B8%E5%AE%98%E7%BD%91%E5%BB%BA%E8%AE%BE/CompanyOfficialWebsite/node_modules/zrender/lib/tool/color.js';
import 'file://E:/%E6%B5%B7%E5%8D%97%E7%A7%AF%E5%88%86%E5%AE%9D%E5%85%AC%E5%8F%B8%E5%AE%98%E7%BD%91%E5%BB%BA%E8%AE%BE/CompanyOfficialWebsite/node_modules/zrender/lib/graphic/Path.js';
import 'file://E:/%E6%B5%B7%E5%8D%97%E7%A7%AF%E5%88%86%E5%AE%9D%E5%85%AC%E5%8F%B8%E5%AE%98%E7%BD%91%E5%BB%BA%E8%AE%BE/CompanyOfficialWebsite/node_modules/zrender/lib/tool/path.js';
import 'file://E:/%E6%B5%B7%E5%8D%97%E7%A7%AF%E5%88%86%E5%AE%9D%E5%85%AC%E5%8F%B8%E5%AE%98%E7%BD%91%E5%BB%BA%E8%AE%BE/CompanyOfficialWebsite/node_modules/zrender/lib/core/matrix.js';
import 'file://E:/%E6%B5%B7%E5%8D%97%E7%A7%AF%E5%88%86%E5%AE%9D%E5%85%AC%E5%8F%B8%E5%AE%98%E7%BD%91%E5%BB%BA%E8%AE%BE/CompanyOfficialWebsite/node_modules/zrender/lib/core/vector.js';
import 'file://E:/%E6%B5%B7%E5%8D%97%E7%A7%AF%E5%88%86%E5%AE%9D%E5%85%AC%E5%8F%B8%E5%AE%98%E7%BD%91%E5%BB%BA%E8%AE%BE/CompanyOfficialWebsite/node_modules/zrender/lib/core/Transformable.js';
import 'file://E:/%E6%B5%B7%E5%8D%97%E7%A7%AF%E5%88%86%E5%AE%9D%E5%85%AC%E5%8F%B8%E5%AE%98%E7%BD%91%E5%BB%BA%E8%AE%BE/CompanyOfficialWebsite/node_modules/zrender/lib/graphic/Image.js';
import 'file://E:/%E6%B5%B7%E5%8D%97%E7%A7%AF%E5%88%86%E5%AE%9D%E5%85%AC%E5%8F%B8%E5%AE%98%E7%BD%91%E5%BB%BA%E8%AE%BE/CompanyOfficialWebsite/node_modules/zrender/lib/graphic/Group.js';
import 'file://E:/%E6%B5%B7%E5%8D%97%E7%A7%AF%E5%88%86%E5%AE%9D%E5%85%AC%E5%8F%B8%E5%AE%98%E7%BD%91%E5%BB%BA%E8%AE%BE/CompanyOfficialWebsite/node_modules/zrender/lib/graphic/shape/Circle.js';
import 'file://E:/%E6%B5%B7%E5%8D%97%E7%A7%AF%E5%88%86%E5%AE%9D%E5%85%AC%E5%8F%B8%E5%AE%98%E7%BD%91%E5%BB%BA%E8%AE%BE/CompanyOfficialWebsite/node_modules/zrender/lib/graphic/shape/Ellipse.js';
import 'file://E:/%E6%B5%B7%E5%8D%97%E7%A7%AF%E5%88%86%E5%AE%9D%E5%85%AC%E5%8F%B8%E5%AE%98%E7%BD%91%E5%BB%BA%E8%AE%BE/CompanyOfficialWebsite/node_modules/zrender/lib/graphic/shape/Sector.js';
import 'file://E:/%E6%B5%B7%E5%8D%97%E7%A7%AF%E5%88%86%E5%AE%9D%E5%85%AC%E5%8F%B8%E5%AE%98%E7%BD%91%E5%BB%BA%E8%AE%BE/CompanyOfficialWebsite/node_modules/zrender/lib/graphic/shape/Ring.js';
import 'file://E:/%E6%B5%B7%E5%8D%97%E7%A7%AF%E5%88%86%E5%AE%9D%E5%85%AC%E5%8F%B8%E5%AE%98%E7%BD%91%E5%BB%BA%E8%AE%BE/CompanyOfficialWebsite/node_modules/zrender/lib/graphic/shape/Polygon.js';
import 'file://E:/%E6%B5%B7%E5%8D%97%E7%A7%AF%E5%88%86%E5%AE%9D%E5%85%AC%E5%8F%B8%E5%AE%98%E7%BD%91%E5%BB%BA%E8%AE%BE/CompanyOfficialWebsite/node_modules/zrender/lib/graphic/shape/Polyline.js';
import 'file://E:/%E6%B5%B7%E5%8D%97%E7%A7%AF%E5%88%86%E5%AE%9D%E5%85%AC%E5%8F%B8%E5%AE%98%E7%BD%91%E5%BB%BA%E8%AE%BE/CompanyOfficialWebsite/node_modules/zrender/lib/graphic/shape/Rect.js';
import 'file://E:/%E6%B5%B7%E5%8D%97%E7%A7%AF%E5%88%86%E5%AE%9D%E5%85%AC%E5%8F%B8%E5%AE%98%E7%BD%91%E5%BB%BA%E8%AE%BE/CompanyOfficialWebsite/node_modules/zrender/lib/graphic/shape/Line.js';
import 'file://E:/%E6%B5%B7%E5%8D%97%E7%A7%AF%E5%88%86%E5%AE%9D%E5%85%AC%E5%8F%B8%E5%AE%98%E7%BD%91%E5%BB%BA%E8%AE%BE/CompanyOfficialWebsite/node_modules/zrender/lib/graphic/shape/BezierCurve.js';
import 'file://E:/%E6%B5%B7%E5%8D%97%E7%A7%AF%E5%88%86%E5%AE%9D%E5%85%AC%E5%8F%B8%E5%AE%98%E7%BD%91%E5%BB%BA%E8%AE%BE/CompanyOfficialWebsite/node_modules/zrender/lib/graphic/shape/Arc.js';
import 'file://E:/%E6%B5%B7%E5%8D%97%E7%A7%AF%E5%88%86%E5%AE%9D%E5%85%AC%E5%8F%B8%E5%AE%98%E7%BD%91%E5%BB%BA%E8%AE%BE/CompanyOfficialWebsite/node_modules/zrender/lib/graphic/CompoundPath.js';
import 'file://E:/%E6%B5%B7%E5%8D%97%E7%A7%AF%E5%88%86%E5%AE%9D%E5%85%AC%E5%8F%B8%E5%AE%98%E7%BD%91%E5%BB%BA%E8%AE%BE/CompanyOfficialWebsite/node_modules/zrender/lib/graphic/LinearGradient.js';
import 'file://E:/%E6%B5%B7%E5%8D%97%E7%A7%AF%E5%88%86%E5%AE%9D%E5%85%AC%E5%8F%B8%E5%AE%98%E7%BD%91%E5%BB%BA%E8%AE%BE/CompanyOfficialWebsite/node_modules/zrender/lib/graphic/RadialGradient.js';
import 'file://E:/%E6%B5%B7%E5%8D%97%E7%A7%AF%E5%88%86%E5%AE%9D%E5%85%AC%E5%8F%B8%E5%AE%98%E7%BD%91%E5%BB%BA%E8%AE%BE/CompanyOfficialWebsite/node_modules/zrender/lib/core/BoundingRect.js';
import 'file://E:/%E6%B5%B7%E5%8D%97%E7%A7%AF%E5%88%86%E5%AE%9D%E5%85%AC%E5%8F%B8%E5%AE%98%E7%BD%91%E5%BB%BA%E8%AE%BE/CompanyOfficialWebsite/node_modules/zrender/lib/core/OrientedBoundingRect.js';
import 'file://E:/%E6%B5%B7%E5%8D%97%E7%A7%AF%E5%88%86%E5%AE%9D%E5%85%AC%E5%8F%B8%E5%AE%98%E7%BD%91%E5%BB%BA%E8%AE%BE/CompanyOfficialWebsite/node_modules/zrender/lib/core/Point.js';
import 'file://E:/%E6%B5%B7%E5%8D%97%E7%A7%AF%E5%88%86%E5%AE%9D%E5%85%AC%E5%8F%B8%E5%AE%98%E7%BD%91%E5%BB%BA%E8%AE%BE/CompanyOfficialWebsite/node_modules/zrender/lib/graphic/IncrementalDisplayable.js';
import 'file://E:/%E6%B5%B7%E5%8D%97%E7%A7%AF%E5%88%86%E5%AE%9D%E5%85%AC%E5%8F%B8%E5%AE%98%E7%BD%91%E5%BB%BA%E8%AE%BE/CompanyOfficialWebsite/node_modules/zrender/lib/graphic/helper/subPixelOptimize.js';
import 'file://E:/%E6%B5%B7%E5%8D%97%E7%A7%AF%E5%88%86%E5%AE%9D%E5%85%AC%E5%8F%B8%E5%AE%98%E7%BD%91%E5%BB%BA%E8%AE%BE/CompanyOfficialWebsite/node_modules/zrender/lib/core/dom.js';
import 'file://E:/%E6%B5%B7%E5%8D%97%E7%A7%AF%E5%88%86%E5%AE%9D%E5%85%AC%E5%8F%B8%E5%AE%98%E7%BD%91%E5%BB%BA%E8%AE%BE/CompanyOfficialWebsite/node_modules/zrender/lib/core/WeakMap.js';
import 'file://E:/%E6%B5%B7%E5%8D%97%E7%A7%AF%E5%88%86%E5%AE%9D%E5%85%AC%E5%8F%B8%E5%AE%98%E7%BD%91%E5%BB%BA%E8%AE%BE/CompanyOfficialWebsite/node_modules/zrender/lib/core/LRU.js';
import 'file://E:/%E6%B5%B7%E5%8D%97%E7%A7%AF%E5%88%86%E5%AE%9D%E5%85%AC%E5%8F%B8%E5%AE%98%E7%BD%91%E5%BB%BA%E8%AE%BE/CompanyOfficialWebsite/node_modules/zrender/lib/contain/text.js';
import 'file://E:/%E6%B5%B7%E5%8D%97%E7%A7%AF%E5%88%86%E5%AE%9D%E5%85%AC%E5%8F%B8%E5%AE%98%E7%BD%91%E5%BB%BA%E8%AE%BE/CompanyOfficialWebsite/node_modules/zrender/lib/canvas/graphic.js';
import 'file://E:/%E6%B5%B7%E5%8D%97%E7%A7%AF%E5%88%86%E5%AE%9D%E5%85%AC%E5%8F%B8%E5%AE%98%E7%BD%91%E5%BB%BA%E8%AE%BE/CompanyOfficialWebsite/node_modules/zrender/lib/core/platform.js';
import 'file://E:/%E6%B5%B7%E5%8D%97%E7%A7%AF%E5%88%86%E5%AE%9D%E5%85%AC%E5%8F%B8%E5%AE%98%E7%BD%91%E5%BB%BA%E8%AE%BE/CompanyOfficialWebsite/node_modules/zrender/lib/canvas/Painter.js';
import 'file://E:/%E6%B5%B7%E5%8D%97%E7%A7%AF%E5%88%86%E5%AE%9D%E5%85%AC%E5%8F%B8%E5%AE%98%E7%BD%91%E5%BB%BA%E8%AE%BE/CompanyOfficialWebsite/node_modules/zrender/lib/core/event.js';

const firstNonUndefined = (...args) => args.find((arg) => arg !== void 0);
// @__NO_SIDE_EFFECTS__
function defineNuxtLink(options) {
  const componentName = options.componentName || "NuxtLink";
  function isHashLinkWithoutHashMode(link) {
    return typeof link === "string" && link.startsWith("#");
  }
  function resolveTrailingSlashBehavior(to, resolve, trailingSlash) {
    const effectiveTrailingSlash = trailingSlash != null ? trailingSlash : options.trailingSlash;
    if (!to || effectiveTrailingSlash !== "append" && effectiveTrailingSlash !== "remove") {
      return to;
    }
    if (typeof to === "string") {
      return applyTrailingSlashBehavior(to, effectiveTrailingSlash);
    }
    const path = "path" in to && to.path !== void 0 ? to.path : resolve(to).path;
    const resolvedPath = {
      ...to,
      name: void 0,
      // named routes would otherwise always override trailing slash behavior
      path: applyTrailingSlashBehavior(path, effectiveTrailingSlash)
    };
    return resolvedPath;
  }
  function useNuxtLink(props) {
    var _a, _b, _c;
    const router = useRouter();
    const config = useRuntimeConfig();
    const hasTarget = computed(() => !!props.target && props.target !== "_self");
    const isAbsoluteUrl = computed(() => {
      const path = props.to || props.href || "";
      return typeof path === "string" && hasProtocol(path, { acceptRelative: true });
    });
    const builtinRouterLink = resolveComponent("RouterLink");
    const useBuiltinLink = builtinRouterLink && typeof builtinRouterLink !== "string" ? builtinRouterLink.useLink : void 0;
    const isExternal = computed(() => {
      if (props.external) {
        return true;
      }
      const path = props.to || props.href || "";
      if (typeof path === "object") {
        return false;
      }
      return path === "" || isAbsoluteUrl.value;
    });
    const to = computed(() => {
      const path = props.to || props.href || "";
      if (isExternal.value) {
        return path;
      }
      return resolveTrailingSlashBehavior(path, router.resolve, props.trailingSlash);
    });
    const link = isExternal.value ? void 0 : useBuiltinLink == null ? void 0 : useBuiltinLink({ ...props, to });
    const href = computed(() => {
      var _a3, _b2;
      var _a2;
      const effectiveTrailingSlash = (_a3 = props.trailingSlash) != null ? _a3 : options.trailingSlash;
      if (!to.value || isAbsoluteUrl.value || isHashLinkWithoutHashMode(to.value)) {
        return to.value;
      }
      if (isExternal.value) {
        const path = typeof to.value === "object" && "path" in to.value ? resolveRouteObject(to.value) : to.value;
        const href2 = typeof path === "object" ? router.resolve(path).href : path;
        return applyTrailingSlashBehavior(href2, effectiveTrailingSlash);
      }
      if (typeof to.value === "object") {
        return (_b2 = (_a2 = router.resolve(to.value)) == null ? void 0 : _a2.href) != null ? _b2 : null;
      }
      return applyTrailingSlashBehavior(joinURL(config.app.baseURL, to.value), effectiveTrailingSlash);
    });
    return {
      to,
      hasTarget,
      isAbsoluteUrl,
      isExternal,
      //
      href,
      isActive: (_a = link == null ? void 0 : link.isActive) != null ? _a : computed(() => to.value === router.currentRoute.value.path),
      isExactActive: (_b = link == null ? void 0 : link.isExactActive) != null ? _b : computed(() => to.value === router.currentRoute.value.path),
      route: (_c = link == null ? void 0 : link.route) != null ? _c : computed(() => router.resolve(to.value)),
      async navigate(_e) {
        await navigateTo(href.value, { replace: props.replace, external: isExternal.value || hasTarget.value });
      }
    };
  }
  return defineComponent({
    name: componentName,
    props: {
      // Routing
      to: {
        type: [String, Object],
        default: void 0,
        required: false
      },
      href: {
        type: [String, Object],
        default: void 0,
        required: false
      },
      // Attributes
      target: {
        type: String,
        default: void 0,
        required: false
      },
      rel: {
        type: String,
        default: void 0,
        required: false
      },
      noRel: {
        type: Boolean,
        default: void 0,
        required: false
      },
      // Prefetching
      prefetch: {
        type: Boolean,
        default: void 0,
        required: false
      },
      prefetchOn: {
        type: [String, Object],
        default: void 0,
        required: false
      },
      noPrefetch: {
        type: Boolean,
        default: void 0,
        required: false
      },
      // Styling
      activeClass: {
        type: String,
        default: void 0,
        required: false
      },
      exactActiveClass: {
        type: String,
        default: void 0,
        required: false
      },
      prefetchedClass: {
        type: String,
        default: void 0,
        required: false
      },
      // Vue Router's `<RouterLink>` additional props
      replace: {
        type: Boolean,
        default: void 0,
        required: false
      },
      ariaCurrentValue: {
        type: String,
        default: void 0,
        required: false
      },
      // Edge cases handling
      external: {
        type: Boolean,
        default: void 0,
        required: false
      },
      // Slot API
      custom: {
        type: Boolean,
        default: void 0,
        required: false
      },
      // Behavior
      trailingSlash: {
        type: String,
        default: void 0,
        required: false
      }
    },
    useLink: useNuxtLink,
    setup(props, { slots }) {
      useRouter();
      const { to, href, navigate, isExternal, hasTarget, isAbsoluteUrl } = useNuxtLink(props);
      ref(false);
      const el = void 0;
      const elRef = void 0;
      async function prefetch(nuxtApp = useNuxtApp()) {
        {
          return;
        }
      }
      return () => {
        var _a;
        if (!isExternal.value && !hasTarget.value && !isHashLinkWithoutHashMode(to.value)) {
          const routerLinkProps = {
            ref: elRef,
            to: to.value,
            activeClass: props.activeClass || options.activeClass,
            exactActiveClass: props.exactActiveClass || options.exactActiveClass,
            replace: props.replace,
            ariaCurrentValue: props.ariaCurrentValue,
            custom: props.custom
          };
          if (!props.custom) {
            routerLinkProps.rel = props.rel || void 0;
          }
          return h(
            resolveComponent("RouterLink"),
            routerLinkProps,
            slots.default
          );
        }
        const target = props.target || null;
        const rel = firstNonUndefined(
          // converts `""` to `null` to prevent the attribute from being added as empty (`rel=""`)
          props.noRel ? "" : props.rel,
          options.externalRelAttribute,
          /*
          * A fallback rel of `noopener noreferrer` is applied for external links or links that open in a new tab.
          * This solves a reverse tabnapping security flaw in browsers pre-2021 as well as improving privacy.
          */
          isAbsoluteUrl.value || hasTarget.value ? "noopener noreferrer" : ""
        ) || null;
        if (props.custom) {
          if (!slots.default) {
            return null;
          }
          return slots.default({
            href: href.value,
            navigate,
            prefetch,
            get route() {
              if (!href.value) {
                return void 0;
              }
              const url = new URL(href.value, "http://localhost");
              return {
                path: url.pathname,
                fullPath: url.pathname,
                get query() {
                  return parseQuery(url.search);
                },
                hash: url.hash,
                params: {},
                name: void 0,
                matched: [],
                redirectedFrom: void 0,
                meta: {},
                href: href.value
              };
            },
            rel,
            target,
            isExternal: isExternal.value || hasTarget.value,
            isActive: false,
            isExactActive: false
          });
        }
        return h("a", { ref: el, href: href.value || null, rel, target }, (_a = slots.default) == null ? void 0 : _a.call(slots));
      };
    }
    // }) as unknown as DefineComponent<NuxtLinkProps, object, object, ComputedOptions, MethodOptions, object, object, EmitsOptions, string, object, NuxtLinkProps, object, SlotsType<NuxtLinkSlots>>
  });
}
const __nuxt_component_0 = /* @__PURE__ */ defineNuxtLink(nuxtLinkDefaults);
function applyTrailingSlashBehavior(to, trailingSlash) {
  const normalizeFn = trailingSlash === "append" ? withTrailingSlash : withoutTrailingSlash;
  const hasProtocolDifferentFromHttp = hasProtocol(to) && !to.startsWith("http");
  if (hasProtocolDifferentFromHttp) {
    return to;
  }
  return normalizeFn(to, true);
}
const _sfc_main = {
  __name: "error-404",
  __ssrInlineRender: true,
  props: {
    appName: {
      type: String,
      default: "Nuxt"
    },
    version: {
      type: String,
      default: ""
    },
    statusCode: {
      type: Number,
      default: 404
    },
    statusMessage: {
      type: String,
      default: "Not Found"
    },
    description: {
      type: String,
      default: "Sorry, the page you are looking for could not be found."
    },
    backHome: {
      type: String,
      default: "Go back home"
    }
  },
  setup(__props) {
    const props = __props;
    useHead({
      title: `${props.statusCode} - ${props.statusMessage} | ${props.appName}`,
      script: [
        {
          innerHTML: `!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver((e=>{for(const o of e)if("childList"===o.type)for(const e of o.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&r(e)})).observe(document,{childList:!0,subtree:!0})}function r(e){if(e.ep)return;e.ep=!0;const r=function(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),"use-credentials"===e.crossOrigin?r.credentials="include":"anonymous"===e.crossOrigin?r.credentials="omit":r.credentials="same-origin",r}(e);fetch(e.href,r)}}();`
        }
      ],
      style: [
        {
          innerHTML: `*,:after,:before{border-color:var(--un-default-border-color,#e5e7eb);border-style:solid;border-width:0;box-sizing:border-box}:after,:before{--un-content:""}html{line-height:1.5;-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;font-feature-settings:normal;font-variation-settings:normal;-moz-tab-size:4;tab-size:4;-webkit-tap-highlight-color:transparent}body{line-height:inherit;margin:0}h1{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}h1,p{margin:0}*,:after,:before{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 transparent;--un-ring-shadow:0 0 transparent;--un-shadow-inset: ;--un-shadow:0 0 transparent;--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgba(147,197,253,.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: }`
        }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "antialiased bg-white dark:bg-black dark:text-white font-sans grid min-h-screen overflow-hidden place-content-center text-black" }, _attrs))} data-v-06403dcb><div class="fixed left-0 right-0 spotlight z-10" data-v-06403dcb></div><div class="max-w-520px text-center z-20" data-v-06403dcb><h1 class="font-medium mb-8 sm:text-10xl text-8xl" data-v-06403dcb>${ssrInterpolate(__props.statusCode)}</h1><p class="font-light leading-tight mb-16 px-8 sm:px-0 sm:text-4xl text-xl" data-v-06403dcb>${ssrInterpolate(__props.description)}</p><div class="flex items-center justify-center w-full" data-v-06403dcb>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "cursor-pointer gradient-border px-4 py-2 sm:px-6 sm:py-3 sm:text-xl text-md"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(__props.backHome)}`);
          } else {
            return [
              createTextVNode(toDisplayString(__props.backHome), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/nuxt/dist/app/components/error-404.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const error404 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-06403dcb"]]);

export { error404 as default };
//# sourceMappingURL=error-404-pKvAGtFl.mjs.map
