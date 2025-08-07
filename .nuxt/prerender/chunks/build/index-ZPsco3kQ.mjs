import { a as buildAssetsURL } from '../_/renderer.mjs';
import { ref, defineComponent, provide, createElementBlock, useSSRContext } from 'file://E:/%E6%B5%B7%E5%8D%97%E7%A7%AF%E5%88%86%E5%AE%9D%E5%85%AC%E5%8F%B8%E5%AE%98%E7%BD%91%E5%BB%BA%E8%AE%BE/CompanyOfficialWebsite/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderStyle } from 'file://E:/%E6%B5%B7%E5%8D%97%E7%A7%AF%E5%88%86%E5%AE%9D%E5%85%AC%E5%8F%B8%E5%AE%98%E7%BD%91%E5%BB%BA%E8%AE%BE/CompanyOfficialWebsite/node_modules/vue/server-renderer/index.mjs';
import { h as headerVue } from './headers-1TclwoUg.mjs';
import { f as footerVue } from './footers-Meyi8Bn5.mjs';
import { _ as _export_sfc, al as use, am as install$5$1, an as install$6, a5 as createLegacyDataSelectAction, m as makeInner, W as dataSample, Z as removeElementWithFadeOut, N as ChartView, a2 as makeSeriesEncodeForNameBased, a3 as getPercentSeats, a4 as defaultEmphasis, v as SeriesModel, X as linearMap, a7 as ComponentModel, a8 as createTextStyle, a9 as windowOpen, g as getECData, Y as getLayoutRect, aa as ComponentView, K as convertToColorString, f as initProps, L as setStatesStylesFromModel, C as toggleHoverEmphasis, M as queryDataIndex, O as setStatesFlag, B as setLabelStyle, U as getDefaultInterpolatedLabel, G as getDefaultLabel, z as getLabelStatesModels, P as interpolateRawValues, l as labelInner, j as updateProps$1, o as createSeriesData, q as createSymbol, V as createRenderPlanner, I as isDimensionStacked, J as createFloat32Array, p as parsePercent, $ as getSectorCornerRadius, y as saveOldStyle, a0 as prepareSeriesDataSchema, a1 as SeriesData, ab as isNameSpecified, ac as Model, ad as enableHoverEmphasis, ae as setTooltipConfig, af as box, ah as getLayoutParams, ai as inheritDefaultOption, ak as createIcon, Q as isCoordinateSystemType, R as createGridClipPath, T as createPolarClipPath, w as enterEmphasis, x as leaveEmphasis, A as normalizeSymbolOffset, E as removeElement, F as normalizeSymbolSize, S as SPECIAL_STATES, D as DISPLAY_STATES, a6 as normalizeCssArray, ag as createOrUpdatePatternFromDecal, aj as mergeLayoutParam, e as shiftLayoutOnY, d as prepareLayoutList, s as shiftLayoutOnX, h as hideOverlap, i as isElementRemoved, k as animateLabelValue, H as traverseElements } from './server.mjs';
import * as zrUtil from 'file://E:/%E6%B5%B7%E5%8D%97%E7%A7%AF%E5%88%86%E5%AE%9D%E5%85%AC%E5%8F%B8%E5%AE%98%E7%BD%91%E5%BB%BA%E8%AE%BE/CompanyOfficialWebsite/node_modules/zrender/lib/core/util.js';
import { curry as curry$1, extend, isNumber, map, retrieve3, each as each$1, isArray, retrieve2, defaults, hasOwn, isFunction, keys, filter, indexOf, isObject } from 'file://E:/%E6%B5%B7%E5%8D%97%E7%A7%AF%E5%88%86%E5%AE%9D%E5%85%AC%E5%8F%B8%E5%AE%98%E7%BD%91%E5%BB%BA%E8%AE%BE/CompanyOfficialWebsite/node_modules/zrender/lib/core/util.js';
import PathProxy, { normalizeArcAngles } from 'file://E:/%E6%B5%B7%E5%8D%97%E7%A7%AF%E5%88%86%E5%AE%9D%E5%85%AC%E5%8F%B8%E5%AE%98%E7%BD%91%E5%BB%BA%E8%AE%BE/CompanyOfficialWebsite/node_modules/zrender/lib/core/PathProxy.js';
import { __extends } from 'file://E:/%E6%B5%B7%E5%8D%97%E7%A7%AF%E5%88%86%E5%AE%9D%E5%85%AC%E5%8F%B8%E5%AE%98%E7%BD%91%E5%BB%BA%E8%AE%BE/CompanyOfficialWebsite/node_modules/tslib/modules/index.js';
import { normalizeRadian } from 'file://E:/%E6%B5%B7%E5%8D%97%E7%A7%AF%E5%88%86%E5%AE%9D%E5%85%AC%E5%8F%B8%E5%AE%98%E7%BD%91%E5%BB%BA%E8%AE%BE/CompanyOfficialWebsite/node_modules/zrender/lib/contain/util.js';
import { cubicRootAt, cubicAt, quadraticProjectPoint, cubicProjectPoint } from 'file://E:/%E6%B5%B7%E5%8D%97%E7%A7%AF%E5%88%86%E5%AE%9D%E5%85%AC%E5%8F%B8%E5%AE%98%E7%BD%91%E5%BB%BA%E8%AE%BE/CompanyOfficialWebsite/node_modules/zrender/lib/core/curve.js';
import { invert } from 'file://E:/%E6%B5%B7%E5%8D%97%E7%A7%AF%E5%88%86%E5%AE%9D%E5%85%AC%E5%8F%B8%E5%AE%98%E7%BD%91%E5%BB%BA%E8%AE%BE/CompanyOfficialWebsite/node_modules/zrender/lib/core/matrix.js';
import * as vec2 from 'file://E:/%E6%B5%B7%E5%8D%97%E7%A7%AF%E5%88%86%E5%AE%9D%E5%85%AC%E5%8F%B8%E5%AE%98%E7%BD%91%E5%BB%BA%E8%AE%BE/CompanyOfficialWebsite/node_modules/zrender/lib/core/vector.js';
import Point from 'file://E:/%E6%B5%B7%E5%8D%97%E7%A7%AF%E5%88%86%E5%AE%9D%E5%85%AC%E5%8F%B8%E5%AE%98%E7%BD%91%E5%BB%BA%E8%AE%BE/CompanyOfficialWebsite/node_modules/zrender/lib/core/Point.js';
import Polyline from 'file://E:/%E6%B5%B7%E5%8D%97%E7%A7%AF%E5%88%86%E5%AE%9D%E5%85%AC%E5%8F%B8%E5%AE%98%E7%BD%91%E5%BB%BA%E8%AE%BE/CompanyOfficialWebsite/node_modules/zrender/lib/graphic/shape/Polyline.js';
import Path from 'file://E:/%E6%B5%B7%E5%8D%97%E7%A7%AF%E5%88%86%E5%AE%9D%E5%85%AC%E5%8F%B8%E5%AE%98%E7%BD%91%E5%BB%BA%E8%AE%BE/CompanyOfficialWebsite/node_modules/zrender/lib/graphic/Path.js';
import Sector from 'file://E:/%E6%B5%B7%E5%8D%97%E7%A7%AF%E5%88%86%E5%AE%9D%E5%85%AC%E5%8F%B8%E5%AE%98%E7%BD%91%E5%BB%BA%E8%AE%BE/CompanyOfficialWebsite/node_modules/zrender/lib/graphic/shape/Sector.js';
import ZRText from 'file://E:/%E6%B5%B7%E5%8D%97%E7%A7%AF%E5%88%86%E5%AE%9D%E5%85%AC%E5%8F%B8%E5%AE%98%E7%BD%91%E5%BB%BA%E8%AE%BE/CompanyOfficialWebsite/node_modules/zrender/lib/graphic/Text.js';
import Rect from 'file://E:/%E6%B5%B7%E5%8D%97%E7%A7%AF%E5%88%86%E5%AE%9D%E5%85%AC%E5%8F%B8%E5%AE%98%E7%BD%91%E5%BB%BA%E8%AE%BE/CompanyOfficialWebsite/node_modules/zrender/lib/graphic/shape/Rect.js';
import { parse, stringify, lerp } from 'file://E:/%E6%B5%B7%E5%8D%97%E7%A7%AF%E5%88%86%E5%AE%9D%E5%85%AC%E5%8F%B8%E5%AE%98%E7%BD%91%E5%BB%BA%E8%AE%BE/CompanyOfficialWebsite/node_modules/zrender/lib/tool/color.js';
import Group$2 from 'file://E:/%E6%B5%B7%E5%8D%97%E7%A7%AF%E5%88%86%E5%AE%9D%E5%85%AC%E5%8F%B8%E5%AE%98%E7%BD%91%E5%BB%BA%E8%AE%BE/CompanyOfficialWebsite/node_modules/zrender/lib/graphic/Group.js';
import Transformable from 'file://E:/%E6%B5%B7%E5%8D%97%E7%A7%AF%E5%88%86%E5%AE%9D%E5%85%AC%E5%8F%B8%E5%AE%98%E7%BD%91%E5%BB%BA%E8%AE%BE/CompanyOfficialWebsite/node_modules/zrender/lib/core/Transformable.js';
import BoundingRect from 'file://E:/%E6%B5%B7%E5%8D%97%E7%A7%AF%E5%88%86%E5%AE%9D%E5%85%AC%E5%8F%B8%E5%AE%98%E7%BD%91%E5%BB%BA%E8%AE%BE/CompanyOfficialWebsite/node_modules/zrender/lib/core/BoundingRect.js';
import ZRImage from 'file://E:/%E6%B5%B7%E5%8D%97%E7%A7%AF%E5%88%86%E5%AE%9D%E5%85%AC%E5%8F%B8%E5%AE%98%E7%BD%91%E5%BB%BA%E8%AE%BE/CompanyOfficialWebsite/node_modules/zrender/lib/graphic/Image.js';
import LinearGradient from 'file://E:/%E6%B5%B7%E5%8D%97%E7%A7%AF%E5%88%86%E5%AE%9D%E5%85%AC%E5%8F%B8%E5%AE%98%E7%BD%91%E5%BB%BA%E8%AE%BE/CompanyOfficialWebsite/node_modules/zrender/lib/graphic/LinearGradient.js';
import 'file://E:/%E6%B5%B7%E5%8D%97%E7%A7%AF%E5%88%86%E5%AE%9D%E5%85%AC%E5%8F%B8%E5%AE%98%E7%BD%91%E5%BB%BA%E8%AE%BE/CompanyOfficialWebsite/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file://E:/%E6%B5%B7%E5%8D%97%E7%A7%AF%E5%88%86%E5%AE%9D%E5%85%AC%E5%8F%B8%E5%AE%98%E7%BD%91%E5%BB%BA%E8%AE%BE/CompanyOfficialWebsite/node_modules/h3/dist/index.mjs';
import 'file://E:/%E6%B5%B7%E5%8D%97%E7%A7%AF%E5%88%86%E5%AE%9D%E5%85%AC%E5%8F%B8%E5%AE%98%E7%BD%91%E5%BB%BA%E8%AE%BE/CompanyOfficialWebsite/node_modules/ufo/dist/index.mjs';
import '../_/nitro.mjs';
import 'file://E:/%E6%B5%B7%E5%8D%97%E7%A7%AF%E5%88%86%E5%AE%9D%E5%85%AC%E5%8F%B8%E5%AE%98%E7%BD%91%E5%BB%BA%E8%AE%BE/CompanyOfficialWebsite/node_modules/destr/dist/index.mjs';
import 'file://E:/%E6%B5%B7%E5%8D%97%E7%A7%AF%E5%88%86%E5%AE%9D%E5%85%AC%E5%8F%B8%E5%AE%98%E7%BD%91%E5%BB%BA%E8%AE%BE/CompanyOfficialWebsite/node_modules/hookable/dist/index.mjs';
import 'file://E:/%E6%B5%B7%E5%8D%97%E7%A7%AF%E5%88%86%E5%AE%9D%E5%85%AC%E5%8F%B8%E5%AE%98%E7%BD%91%E5%BB%BA%E8%AE%BE/CompanyOfficialWebsite/node_modules/ofetch/dist/node.mjs';
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
import 'file://E:/%E6%B5%B7%E5%8D%97%E7%A7%AF%E5%88%86%E5%AE%9D%E5%85%AC%E5%8F%B8%E5%AE%98%E7%BD%91%E5%BB%BA%E8%AE%BE/CompanyOfficialWebsite/node_modules/zrender/lib/zrender.js';
import 'file://E:/%E6%B5%B7%E5%8D%97%E7%A7%AF%E5%88%86%E5%AE%9D%E5%85%AC%E5%8F%B8%E5%AE%98%E7%BD%91%E5%BB%BA%E8%AE%BE/CompanyOfficialWebsite/node_modules/zrender/lib/core/env.js';
import 'file://E:/%E6%B5%B7%E5%8D%97%E7%A7%AF%E5%88%86%E5%AE%9D%E5%85%AC%E5%8F%B8%E5%AE%98%E7%BD%91%E5%BB%BA%E8%AE%BE/CompanyOfficialWebsite/node_modules/zrender/lib/core/timsort.js';
import 'file://E:/%E6%B5%B7%E5%8D%97%E7%A7%AF%E5%88%86%E5%AE%9D%E5%85%AC%E5%8F%B8%E5%AE%98%E7%BD%91%E5%BB%BA%E8%AE%BE/CompanyOfficialWebsite/node_modules/zrender/lib/core/Eventful.js';
import 'file://E:/%E6%B5%B7%E5%8D%97%E7%A7%AF%E5%88%86%E5%AE%9D%E5%85%AC%E5%8F%B8%E5%AE%98%E7%BD%91%E5%BB%BA%E8%AE%BE/CompanyOfficialWebsite/node_modules/zrender/lib/tool/path.js';
import 'file://E:/%E6%B5%B7%E5%8D%97%E7%A7%AF%E5%88%86%E5%AE%9D%E5%85%AC%E5%8F%B8%E5%AE%98%E7%BD%91%E5%BB%BA%E8%AE%BE/CompanyOfficialWebsite/node_modules/zrender/lib/graphic/shape/Circle.js';
import 'file://E:/%E6%B5%B7%E5%8D%97%E7%A7%AF%E5%88%86%E5%AE%9D%E5%85%AC%E5%8F%B8%E5%AE%98%E7%BD%91%E5%BB%BA%E8%AE%BE/CompanyOfficialWebsite/node_modules/zrender/lib/graphic/shape/Ellipse.js';
import 'file://E:/%E6%B5%B7%E5%8D%97%E7%A7%AF%E5%88%86%E5%AE%9D%E5%85%AC%E5%8F%B8%E5%AE%98%E7%BD%91%E5%BB%BA%E8%AE%BE/CompanyOfficialWebsite/node_modules/zrender/lib/graphic/shape/Ring.js';
import 'file://E:/%E6%B5%B7%E5%8D%97%E7%A7%AF%E5%88%86%E5%AE%9D%E5%85%AC%E5%8F%B8%E5%AE%98%E7%BD%91%E5%BB%BA%E8%AE%BE/CompanyOfficialWebsite/node_modules/zrender/lib/graphic/shape/Polygon.js';
import 'file://E:/%E6%B5%B7%E5%8D%97%E7%A7%AF%E5%88%86%E5%AE%9D%E5%85%AC%E5%8F%B8%E5%AE%98%E7%BD%91%E5%BB%BA%E8%AE%BE/CompanyOfficialWebsite/node_modules/zrender/lib/graphic/shape/Line.js';
import 'file://E:/%E6%B5%B7%E5%8D%97%E7%A7%AF%E5%88%86%E5%AE%9D%E5%85%AC%E5%8F%B8%E5%AE%98%E7%BD%91%E5%BB%BA%E8%AE%BE/CompanyOfficialWebsite/node_modules/zrender/lib/graphic/shape/BezierCurve.js';
import 'file://E:/%E6%B5%B7%E5%8D%97%E7%A7%AF%E5%88%86%E5%AE%9D%E5%85%AC%E5%8F%B8%E5%AE%98%E7%BD%91%E5%BB%BA%E8%AE%BE/CompanyOfficialWebsite/node_modules/zrender/lib/graphic/shape/Arc.js';
import 'file://E:/%E6%B5%B7%E5%8D%97%E7%A7%AF%E5%88%86%E5%AE%9D%E5%85%AC%E5%8F%B8%E5%AE%98%E7%BD%91%E5%BB%BA%E8%AE%BE/CompanyOfficialWebsite/node_modules/zrender/lib/graphic/CompoundPath.js';
import 'file://E:/%E6%B5%B7%E5%8D%97%E7%A7%AF%E5%88%86%E5%AE%9D%E5%85%AC%E5%8F%B8%E5%AE%98%E7%BD%91%E5%BB%BA%E8%AE%BE/CompanyOfficialWebsite/node_modules/zrender/lib/graphic/RadialGradient.js';
import 'file://E:/%E6%B5%B7%E5%8D%97%E7%A7%AF%E5%88%86%E5%AE%9D%E5%85%AC%E5%8F%B8%E5%AE%98%E7%BD%91%E5%BB%BA%E8%AE%BE/CompanyOfficialWebsite/node_modules/zrender/lib/core/OrientedBoundingRect.js';
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

var PI2$1 = Math.PI * 2;
var CMD = PathProxy.CMD;
var DEFAULT_SEARCH_SPACE = ["top", "right", "bottom", "left"];
function getCandidateAnchor(pos, distance, rect, outPt, outDir) {
  var width = rect.width;
  var height = rect.height;
  switch (pos) {
    case "top":
      outPt.set(rect.x + width / 2, rect.y - distance);
      outDir.set(0, -1);
      break;
    case "bottom":
      outPt.set(rect.x + width / 2, rect.y + height + distance);
      outDir.set(0, 1);
      break;
    case "left":
      outPt.set(rect.x - distance, rect.y + height / 2);
      outDir.set(-1, 0);
      break;
    case "right":
      outPt.set(rect.x + width + distance, rect.y + height / 2);
      outDir.set(1, 0);
      break;
  }
}
function projectPointToArc(cx, cy, r, startAngle, endAngle, anticlockwise, x, y, out) {
  x -= cx;
  y -= cy;
  var d = Math.sqrt(x * x + y * y);
  x /= d;
  y /= d;
  var ox = x * r + cx;
  var oy = y * r + cy;
  if (Math.abs(startAngle - endAngle) % PI2$1 < 1e-4) {
    out[0] = ox;
    out[1] = oy;
    return d - r;
  }
  if (anticlockwise) {
    var tmp = startAngle;
    startAngle = normalizeRadian(endAngle);
    endAngle = normalizeRadian(tmp);
  } else {
    startAngle = normalizeRadian(startAngle);
    endAngle = normalizeRadian(endAngle);
  }
  if (startAngle > endAngle) {
    endAngle += PI2$1;
  }
  var angle = Math.atan2(y, x);
  if (angle < 0) {
    angle += PI2$1;
  }
  if (angle >= startAngle && angle <= endAngle || angle + PI2$1 >= startAngle && angle + PI2$1 <= endAngle) {
    out[0] = ox;
    out[1] = oy;
    return d - r;
  }
  var x1 = r * Math.cos(startAngle) + cx;
  var y1 = r * Math.sin(startAngle) + cy;
  var x2 = r * Math.cos(endAngle) + cx;
  var y2 = r * Math.sin(endAngle) + cy;
  var d1 = (x1 - x) * (x1 - x) + (y1 - y) * (y1 - y);
  var d2 = (x2 - x) * (x2 - x) + (y2 - y) * (y2 - y);
  if (d1 < d2) {
    out[0] = x1;
    out[1] = y1;
    return Math.sqrt(d1);
  } else {
    out[0] = x2;
    out[1] = y2;
    return Math.sqrt(d2);
  }
}
function projectPointToLine(x1, y1, x2, y2, x, y, out, limitToEnds) {
  var dx = x - x1;
  var dy = y - y1;
  var dx1 = x2 - x1;
  var dy1 = y2 - y1;
  var lineLen = Math.sqrt(dx1 * dx1 + dy1 * dy1);
  dx1 /= lineLen;
  dy1 /= lineLen;
  var projectedLen = dx * dx1 + dy * dy1;
  var t = projectedLen / lineLen;
  if (limitToEnds) {
    t = Math.min(Math.max(t, 0), 1);
  }
  t *= lineLen;
  var ox = out[0] = x1 + t * dx1;
  var oy = out[1] = y1 + t * dy1;
  return Math.sqrt((ox - x) * (ox - x) + (oy - y) * (oy - y));
}
function projectPointToRect(x1, y1, width, height, x, y, out) {
  if (width < 0) {
    x1 = x1 + width;
    width = -width;
  }
  if (height < 0) {
    y1 = y1 + height;
    height = -height;
  }
  var x2 = x1 + width;
  var y2 = y1 + height;
  var ox = out[0] = Math.min(Math.max(x, x1), x2);
  var oy = out[1] = Math.min(Math.max(y, y1), y2);
  return Math.sqrt((ox - x) * (ox - x) + (oy - y) * (oy - y));
}
var tmpPt = [];
function nearestPointOnRect(pt, rect, out) {
  var dist = projectPointToRect(rect.x, rect.y, rect.width, rect.height, pt.x, pt.y, tmpPt);
  out.set(tmpPt[0], tmpPt[1]);
  return dist;
}
function nearestPointOnPath(pt, path, out) {
  var xi = 0;
  var yi = 0;
  var x0 = 0;
  var y0 = 0;
  var x1;
  var y1;
  var minDist = Infinity;
  var data = path.data;
  var x = pt.x;
  var y = pt.y;
  for (var i = 0; i < data.length; ) {
    var cmd = data[i++];
    if (i === 1) {
      xi = data[i];
      yi = data[i + 1];
      x0 = xi;
      y0 = yi;
    }
    var d = minDist;
    switch (cmd) {
      case CMD.M:
        x0 = data[i++];
        y0 = data[i++];
        xi = x0;
        yi = y0;
        break;
      case CMD.L:
        d = projectPointToLine(xi, yi, data[i], data[i + 1], x, y, tmpPt, true);
        xi = data[i++];
        yi = data[i++];
        break;
      case CMD.C:
        d = cubicProjectPoint(xi, yi, data[i++], data[i++], data[i++], data[i++], data[i], data[i + 1], x, y, tmpPt);
        xi = data[i++];
        yi = data[i++];
        break;
      case CMD.Q:
        d = quadraticProjectPoint(xi, yi, data[i++], data[i++], data[i], data[i + 1], x, y, tmpPt);
        xi = data[i++];
        yi = data[i++];
        break;
      case CMD.A:
        var cx = data[i++];
        var cy = data[i++];
        var rx = data[i++];
        var ry = data[i++];
        var theta = data[i++];
        var dTheta = data[i++];
        i += 1;
        var anticlockwise = !!(1 - data[i++]);
        x1 = Math.cos(theta) * rx + cx;
        y1 = Math.sin(theta) * ry + cy;
        if (i <= 1) {
          x0 = x1;
          y0 = y1;
        }
        var _x = (x - cx) * ry / rx + cx;
        d = projectPointToArc(cx, cy, ry, theta, theta + dTheta, anticlockwise, _x, y, tmpPt);
        xi = Math.cos(theta + dTheta) * rx + cx;
        yi = Math.sin(theta + dTheta) * ry + cy;
        break;
      case CMD.R:
        x0 = xi = data[i++];
        y0 = yi = data[i++];
        var width = data[i++];
        var height = data[i++];
        d = projectPointToRect(x0, y0, width, height, x, y, tmpPt);
        break;
      case CMD.Z:
        d = projectPointToLine(xi, yi, x0, y0, x, y, tmpPt, true);
        xi = x0;
        yi = y0;
        break;
    }
    if (d < minDist) {
      minDist = d;
      out.set(tmpPt[0], tmpPt[1]);
    }
  }
  return minDist;
}
var pt0 = new Point();
var pt1 = new Point();
var pt2 = new Point();
var dir = new Point();
var dir2 = new Point();
function updateLabelLinePoints(target, labelLineModel) {
  if (!target) {
    return;
  }
  var labelLine = target.getTextGuideLine();
  var label = target.getTextContent();
  if (!(label && labelLine)) {
    return;
  }
  var labelGuideConfig = target.textGuideLineConfig || {};
  var points = [[0, 0], [0, 0], [0, 0]];
  var searchSpace = labelGuideConfig.candidates || DEFAULT_SEARCH_SPACE;
  var labelRect = label.getBoundingRect().clone();
  labelRect.applyTransform(label.getComputedTransform());
  var minDist = Infinity;
  var anchorPoint = labelGuideConfig.anchor;
  var targetTransform = target.getComputedTransform();
  var targetInversedTransform = targetTransform && invert([], targetTransform);
  var len = labelLineModel.get("length2") || 0;
  if (anchorPoint) {
    pt2.copy(anchorPoint);
  }
  for (var i = 0; i < searchSpace.length; i++) {
    var candidate = searchSpace[i];
    getCandidateAnchor(candidate, 0, labelRect, pt0, dir);
    Point.scaleAndAdd(pt1, pt0, dir, len);
    pt1.transform(targetInversedTransform);
    var boundingRect = target.getBoundingRect();
    var dist = anchorPoint ? anchorPoint.distance(pt1) : target instanceof Path ? nearestPointOnPath(pt1, target.path, pt2) : nearestPointOnRect(pt1, boundingRect, pt2);
    if (dist < minDist) {
      minDist = dist;
      pt1.transform(targetTransform);
      pt2.transform(targetTransform);
      pt2.toArray(points[0]);
      pt1.toArray(points[1]);
      pt0.toArray(points[2]);
    }
  }
  limitTurnAngle(points, labelLineModel.get("minTurnAngle"));
  labelLine.setShape({
    points
  });
}
var tmpArr = [];
var tmpProjPoint = new Point();
function limitTurnAngle(linePoints, minTurnAngle) {
  if (!(minTurnAngle <= 180 && minTurnAngle > 0)) {
    return;
  }
  minTurnAngle = minTurnAngle / 180 * Math.PI;
  pt0.fromArray(linePoints[0]);
  pt1.fromArray(linePoints[1]);
  pt2.fromArray(linePoints[2]);
  Point.sub(dir, pt0, pt1);
  Point.sub(dir2, pt2, pt1);
  var len1 = dir.len();
  var len2 = dir2.len();
  if (len1 < 1e-3 || len2 < 1e-3) {
    return;
  }
  dir.scale(1 / len1);
  dir2.scale(1 / len2);
  var angleCos = dir.dot(dir2);
  var minTurnAngleCos = Math.cos(minTurnAngle);
  if (minTurnAngleCos < angleCos) {
    var d = projectPointToLine(pt1.x, pt1.y, pt2.x, pt2.y, pt0.x, pt0.y, tmpArr, false);
    tmpProjPoint.fromArray(tmpArr);
    tmpProjPoint.scaleAndAdd(dir2, d / Math.tan(Math.PI - minTurnAngle));
    var t = pt2.x !== pt1.x ? (tmpProjPoint.x - pt1.x) / (pt2.x - pt1.x) : (tmpProjPoint.y - pt1.y) / (pt2.y - pt1.y);
    if (isNaN(t)) {
      return;
    }
    if (t < 0) {
      Point.copy(tmpProjPoint, pt1);
    } else if (t > 1) {
      Point.copy(tmpProjPoint, pt2);
    }
    tmpProjPoint.toArray(linePoints[1]);
  }
}
function limitSurfaceAngle(linePoints, surfaceNormal, maxSurfaceAngle) {
  if (!(maxSurfaceAngle <= 180 && maxSurfaceAngle > 0)) {
    return;
  }
  maxSurfaceAngle = maxSurfaceAngle / 180 * Math.PI;
  pt0.fromArray(linePoints[0]);
  pt1.fromArray(linePoints[1]);
  pt2.fromArray(linePoints[2]);
  Point.sub(dir, pt1, pt0);
  Point.sub(dir2, pt2, pt1);
  var len1 = dir.len();
  var len2 = dir2.len();
  if (len1 < 1e-3 || len2 < 1e-3) {
    return;
  }
  dir.scale(1 / len1);
  dir2.scale(1 / len2);
  var angleCos = dir.dot(surfaceNormal);
  var maxSurfaceAngleCos = Math.cos(maxSurfaceAngle);
  if (angleCos < maxSurfaceAngleCos) {
    var d = projectPointToLine(pt1.x, pt1.y, pt2.x, pt2.y, pt0.x, pt0.y, tmpArr, false);
    tmpProjPoint.fromArray(tmpArr);
    var HALF_PI = Math.PI / 2;
    var angle2 = Math.acos(dir2.dot(surfaceNormal));
    var newAngle = HALF_PI + angle2 - maxSurfaceAngle;
    if (newAngle >= HALF_PI) {
      Point.copy(tmpProjPoint, pt2);
    } else {
      tmpProjPoint.scaleAndAdd(dir2, d / Math.tan(Math.PI / 2 - newAngle));
      var t = pt2.x !== pt1.x ? (tmpProjPoint.x - pt1.x) / (pt2.x - pt1.x) : (tmpProjPoint.y - pt1.y) / (pt2.y - pt1.y);
      if (isNaN(t)) {
        return;
      }
      if (t < 0) {
        Point.copy(tmpProjPoint, pt1);
      } else if (t > 1) {
        Point.copy(tmpProjPoint, pt2);
      }
    }
    tmpProjPoint.toArray(linePoints[1]);
  }
}
function setLabelLineState(labelLine, ignore, stateName, stateModel) {
  var isNormal = stateName === "normal";
  var stateObj = isNormal ? labelLine : labelLine.ensureState(stateName);
  stateObj.ignore = ignore;
  var smooth = stateModel.get("smooth");
  if (smooth && smooth === true) {
    smooth = 0.3;
  }
  stateObj.shape = stateObj.shape || {};
  if (smooth > 0) {
    stateObj.shape.smooth = smooth;
  }
  var styleObj = stateModel.getModel("lineStyle").getLineStyle();
  isNormal ? labelLine.useStyle(styleObj) : stateObj.style = styleObj;
}
function buildLabelLinePath(path, shape) {
  var smooth = shape.smooth;
  var points = shape.points;
  if (!points) {
    return;
  }
  path.moveTo(points[0][0], points[0][1]);
  if (smooth > 0 && points.length >= 3) {
    var len1 = vec2.dist(points[0], points[1]);
    var len2 = vec2.dist(points[1], points[2]);
    if (!len1 || !len2) {
      path.lineTo(points[1][0], points[1][1]);
      path.lineTo(points[2][0], points[2][1]);
      return;
    }
    var moveLen = Math.min(len1, len2) * smooth;
    var midPoint0 = vec2.lerp([], points[1], points[0], moveLen / len1);
    var midPoint2 = vec2.lerp([], points[1], points[2], moveLen / len2);
    var midPoint1 = vec2.lerp([], midPoint0, midPoint2, 0.5);
    path.bezierCurveTo(midPoint0[0], midPoint0[1], midPoint0[0], midPoint0[1], midPoint1[0], midPoint1[1]);
    path.bezierCurveTo(midPoint2[0], midPoint2[1], midPoint2[0], midPoint2[1], points[2][0], points[2][1]);
  } else {
    for (var i = 1; i < points.length; i++) {
      path.lineTo(points[i][0], points[i][1]);
    }
  }
}
function setLabelLineStyle(targetEl, statesModels, defaultStyle) {
  var labelLine = targetEl.getTextGuideLine();
  var label = targetEl.getTextContent();
  if (!label) {
    if (labelLine) {
      targetEl.removeTextGuideLine();
    }
    return;
  }
  var normalModel = statesModels.normal;
  var showNormal = normalModel.get("show");
  var labelIgnoreNormal = label.ignore;
  for (var i = 0; i < DISPLAY_STATES.length; i++) {
    var stateName = DISPLAY_STATES[i];
    var stateModel = statesModels[stateName];
    var isNormal = stateName === "normal";
    if (stateModel) {
      var stateShow = stateModel.get("show");
      var isLabelIgnored = isNormal ? labelIgnoreNormal : retrieve2(label.states[stateName] && label.states[stateName].ignore, labelIgnoreNormal);
      if (isLabelIgnored || !retrieve2(stateShow, showNormal)) {
        var stateObj = isNormal ? labelLine : labelLine && labelLine.states[stateName];
        if (stateObj) {
          stateObj.ignore = true;
        }
        if (!!labelLine) {
          setLabelLineState(labelLine, true, stateName, stateModel);
        }
        continue;
      }
      if (!labelLine) {
        labelLine = new Polyline();
        targetEl.setTextGuideLine(labelLine);
        if (!isNormal && (labelIgnoreNormal || !showNormal)) {
          setLabelLineState(labelLine, true, "normal", statesModels.normal);
        }
        if (targetEl.stateProxy) {
          labelLine.stateProxy = targetEl.stateProxy;
        }
      }
      setLabelLineState(labelLine, false, stateName, stateModel);
    }
  }
  if (labelLine) {
    defaults(labelLine.style, defaultStyle);
    labelLine.style.fill = null;
    var showAbove = normalModel.get("showAbove");
    var labelLineConfig = targetEl.textGuideLineConfig = targetEl.textGuideLineConfig || {};
    labelLineConfig.showAbove = showAbove || false;
    labelLine.buildPath = buildLabelLinePath;
  }
}
function getLabelLineStatesModels(itemModel, labelLineName) {
  labelLineName = labelLineName || "labelLine";
  var statesModels = {
    normal: itemModel.getModel(labelLineName)
  };
  for (var i = 0; i < SPECIAL_STATES.length; i++) {
    var stateName = SPECIAL_STATES[i];
    statesModels[stateName] = itemModel.getModel([stateName, labelLineName]);
  }
  return statesModels;
}
function cloneArr(points) {
  if (points) {
    var newPoints = [];
    for (var i = 0; i < points.length; i++) {
      newPoints.push(points[i].slice());
    }
    return newPoints;
  }
}
function prepareLayoutCallbackParams(labelItem, hostEl) {
  var label = labelItem.label;
  var labelLine = hostEl && hostEl.getTextGuideLine();
  return {
    dataIndex: labelItem.dataIndex,
    dataType: labelItem.dataType,
    seriesIndex: labelItem.seriesModel.seriesIndex,
    text: labelItem.label.style.text,
    rect: labelItem.hostRect,
    labelRect: labelItem.rect,
    // x: labelAttr.x,
    // y: labelAttr.y,
    align: label.style.align,
    verticalAlign: label.style.verticalAlign,
    labelLinePoints: cloneArr(labelLine && labelLine.shape.points)
  };
}
var LABEL_OPTION_TO_STYLE_KEYS = ["align", "verticalAlign", "width", "height", "fontSize"];
var dummyTransformable = new Transformable();
var labelLayoutInnerStore = makeInner();
var labelLineAnimationStore = makeInner();
function extendWithKeys(target, source, keys2) {
  for (var i = 0; i < keys2.length; i++) {
    var key = keys2[i];
    if (source[key] != null) {
      target[key] = source[key];
    }
  }
}
var LABEL_LAYOUT_PROPS = ["x", "y", "rotation"];
var LabelManager = (
  /** @class */
  function() {
    function LabelManager2() {
      this._labelList = [];
      this._chartViewList = [];
    }
    LabelManager2.prototype.clearLabels = function() {
      this._labelList = [];
      this._chartViewList = [];
    };
    LabelManager2.prototype._addLabel = function(dataIndex, dataType, seriesModel, label, layoutOption) {
      var labelStyle = label.style;
      var hostEl = label.__hostTarget;
      var textConfig = hostEl.textConfig || {};
      var labelTransform = label.getComputedTransform();
      var labelRect = label.getBoundingRect().plain();
      BoundingRect.applyTransform(labelRect, labelRect, labelTransform);
      if (labelTransform) {
        dummyTransformable.setLocalTransform(labelTransform);
      } else {
        dummyTransformable.x = dummyTransformable.y = dummyTransformable.rotation = dummyTransformable.originX = dummyTransformable.originY = 0;
        dummyTransformable.scaleX = dummyTransformable.scaleY = 1;
      }
      dummyTransformable.rotation = normalizeRadian(dummyTransformable.rotation);
      var host = label.__hostTarget;
      var hostRect;
      if (host) {
        hostRect = host.getBoundingRect().plain();
        var transform = host.getComputedTransform();
        BoundingRect.applyTransform(hostRect, hostRect, transform);
      }
      var labelGuide = hostRect && host.getTextGuideLine();
      this._labelList.push({
        label,
        labelLine: labelGuide,
        seriesModel,
        dataIndex,
        dataType,
        layoutOption,
        computedLayoutOption: null,
        rect: labelRect,
        hostRect,
        // Label with lower priority will be hidden when overlapped
        // Use rect size as default priority
        priority: hostRect ? hostRect.width * hostRect.height : 0,
        // Save default label attributes.
        // For restore if developers want get back to default value in callback.
        defaultAttr: {
          ignore: label.ignore,
          labelGuideIgnore: labelGuide && labelGuide.ignore,
          x: dummyTransformable.x,
          y: dummyTransformable.y,
          scaleX: dummyTransformable.scaleX,
          scaleY: dummyTransformable.scaleY,
          rotation: dummyTransformable.rotation,
          style: {
            x: labelStyle.x,
            y: labelStyle.y,
            align: labelStyle.align,
            verticalAlign: labelStyle.verticalAlign,
            width: labelStyle.width,
            height: labelStyle.height,
            fontSize: labelStyle.fontSize
          },
          cursor: label.cursor,
          attachedPos: textConfig.position,
          attachedRot: textConfig.rotation
        }
      });
    };
    LabelManager2.prototype.addLabelsOfSeries = function(chartView) {
      var _this = this;
      this._chartViewList.push(chartView);
      var seriesModel = chartView.__model;
      var layoutOption = seriesModel.get("labelLayout");
      if (!(isFunction(layoutOption) || keys(layoutOption).length)) {
        return;
      }
      chartView.group.traverse(function(child) {
        if (child.ignore) {
          return true;
        }
        var textEl = child.getTextContent();
        var ecData = getECData(child);
        if (textEl && !textEl.disableLabelLayout) {
          _this._addLabel(ecData.dataIndex, ecData.dataType, seriesModel, textEl, layoutOption);
        }
      });
    };
    LabelManager2.prototype.updateLayoutConfig = function(api) {
      var width = api.getWidth();
      var height = api.getHeight();
      function createDragHandler(el, labelLineModel) {
        return function() {
          updateLabelLinePoints(el, labelLineModel);
        };
      }
      for (var i = 0; i < this._labelList.length; i++) {
        var labelItem = this._labelList[i];
        var label = labelItem.label;
        var hostEl = label.__hostTarget;
        var defaultLabelAttr = labelItem.defaultAttr;
        var layoutOption = void 0;
        if (isFunction(labelItem.layoutOption)) {
          layoutOption = labelItem.layoutOption(prepareLayoutCallbackParams(labelItem, hostEl));
        } else {
          layoutOption = labelItem.layoutOption;
        }
        layoutOption = layoutOption || {};
        labelItem.computedLayoutOption = layoutOption;
        var degreeToRadian = Math.PI / 180;
        if (hostEl) {
          hostEl.setTextConfig({
            // Force to set local false.
            local: false,
            // Ignore position and rotation config on the host el if x or y is changed.
            position: layoutOption.x != null || layoutOption.y != null ? null : defaultLabelAttr.attachedPos,
            // Ignore rotation config on the host el if rotation is changed.
            rotation: layoutOption.rotate != null ? layoutOption.rotate * degreeToRadian : defaultLabelAttr.attachedRot,
            offset: [layoutOption.dx || 0, layoutOption.dy || 0]
          });
        }
        var needsUpdateLabelLine = false;
        if (layoutOption.x != null) {
          label.x = parsePercent(layoutOption.x, width);
          label.setStyle("x", 0);
          needsUpdateLabelLine = true;
        } else {
          label.x = defaultLabelAttr.x;
          label.setStyle("x", defaultLabelAttr.style.x);
        }
        if (layoutOption.y != null) {
          label.y = parsePercent(layoutOption.y, height);
          label.setStyle("y", 0);
          needsUpdateLabelLine = true;
        } else {
          label.y = defaultLabelAttr.y;
          label.setStyle("y", defaultLabelAttr.style.y);
        }
        if (layoutOption.labelLinePoints) {
          var guideLine = hostEl.getTextGuideLine();
          if (guideLine) {
            guideLine.setShape({
              points: layoutOption.labelLinePoints
            });
            needsUpdateLabelLine = false;
          }
        }
        var labelLayoutStore = labelLayoutInnerStore(label);
        labelLayoutStore.needsUpdateLabelLine = needsUpdateLabelLine;
        label.rotation = layoutOption.rotate != null ? layoutOption.rotate * degreeToRadian : defaultLabelAttr.rotation;
        label.scaleX = defaultLabelAttr.scaleX;
        label.scaleY = defaultLabelAttr.scaleY;
        for (var k = 0; k < LABEL_OPTION_TO_STYLE_KEYS.length; k++) {
          var key = LABEL_OPTION_TO_STYLE_KEYS[k];
          label.setStyle(key, layoutOption[key] != null ? layoutOption[key] : defaultLabelAttr.style[key]);
        }
        if (layoutOption.draggable) {
          label.draggable = true;
          label.cursor = "move";
          if (hostEl) {
            var hostModel = labelItem.seriesModel;
            if (labelItem.dataIndex != null) {
              var data = labelItem.seriesModel.getData(labelItem.dataType);
              hostModel = data.getItemModel(labelItem.dataIndex);
            }
            label.on("drag", createDragHandler(hostEl, hostModel.getModel("labelLine")));
          }
        } else {
          label.off("drag");
          label.cursor = defaultLabelAttr.cursor;
        }
      }
    };
    LabelManager2.prototype.layout = function(api) {
      var width = api.getWidth();
      var height = api.getHeight();
      var labelList = prepareLayoutList(this._labelList);
      var labelsNeedsAdjustOnX = filter(labelList, function(item) {
        return item.layoutOption.moveOverlap === "shiftX";
      });
      var labelsNeedsAdjustOnY = filter(labelList, function(item) {
        return item.layoutOption.moveOverlap === "shiftY";
      });
      shiftLayoutOnX(labelsNeedsAdjustOnX, 0, width);
      shiftLayoutOnY(labelsNeedsAdjustOnY, 0, height);
      var labelsNeedsHideOverlap = filter(labelList, function(item) {
        return item.layoutOption.hideOverlap;
      });
      hideOverlap(labelsNeedsHideOverlap);
    };
    LabelManager2.prototype.processLabelsOverall = function() {
      var _this = this;
      each$1(this._chartViewList, function(chartView) {
        var seriesModel = chartView.__model;
        var ignoreLabelLineUpdate = chartView.ignoreLabelLineUpdate;
        var animationEnabled = seriesModel.isAnimationEnabled();
        chartView.group.traverse(function(child) {
          if (child.ignore && !child.forceLabelAnimation) {
            return true;
          }
          var needsUpdateLabelLine = !ignoreLabelLineUpdate;
          var label = child.getTextContent();
          if (!needsUpdateLabelLine && label) {
            needsUpdateLabelLine = labelLayoutInnerStore(label).needsUpdateLabelLine;
          }
          if (needsUpdateLabelLine) {
            _this._updateLabelLine(child, seriesModel);
          }
          if (animationEnabled) {
            _this._animateLabels(child, seriesModel);
          }
        });
      });
    };
    LabelManager2.prototype._updateLabelLine = function(el, seriesModel) {
      var textEl = el.getTextContent();
      var ecData = getECData(el);
      var dataIndex = ecData.dataIndex;
      if (textEl && dataIndex != null) {
        var data = seriesModel.getData(ecData.dataType);
        var itemModel = data.getItemModel(dataIndex);
        var defaultStyle = {};
        var visualStyle = data.getItemVisual(dataIndex, "style");
        if (visualStyle) {
          var visualType = data.getVisual("drawType");
          defaultStyle.stroke = visualStyle[visualType];
        }
        var labelLineModel = itemModel.getModel("labelLine");
        setLabelLineStyle(el, getLabelLineStatesModels(itemModel), defaultStyle);
        updateLabelLinePoints(el, labelLineModel);
      }
    };
    LabelManager2.prototype._animateLabels = function(el, seriesModel) {
      var textEl = el.getTextContent();
      var guideLine = el.getTextGuideLine();
      if (textEl && (el.forceLabelAnimation || !textEl.ignore && !textEl.invisible && !el.disableLabelAnimation && !isElementRemoved(el))) {
        var layoutStore = labelLayoutInnerStore(textEl);
        var oldLayout = layoutStore.oldLayout;
        var ecData = getECData(el);
        var dataIndex = ecData.dataIndex;
        var newProps = {
          x: textEl.x,
          y: textEl.y,
          rotation: textEl.rotation
        };
        var data = seriesModel.getData(ecData.dataType);
        if (!oldLayout) {
          textEl.attr(newProps);
          if (!labelInner(textEl).valueAnimation) {
            var oldOpacity = retrieve2(textEl.style.opacity, 1);
            textEl.style.opacity = 0;
            initProps(textEl, {
              style: {
                opacity: oldOpacity
              }
            }, seriesModel, dataIndex);
          }
        } else {
          textEl.attr(oldLayout);
          var prevStates = el.prevStates;
          if (prevStates) {
            if (indexOf(prevStates, "select") >= 0) {
              textEl.attr(layoutStore.oldLayoutSelect);
            }
            if (indexOf(prevStates, "emphasis") >= 0) {
              textEl.attr(layoutStore.oldLayoutEmphasis);
            }
          }
          updateProps$1(textEl, newProps, seriesModel, dataIndex);
        }
        layoutStore.oldLayout = newProps;
        if (textEl.states.select) {
          var layoutSelect = layoutStore.oldLayoutSelect = {};
          extendWithKeys(layoutSelect, newProps, LABEL_LAYOUT_PROPS);
          extendWithKeys(layoutSelect, textEl.states.select, LABEL_LAYOUT_PROPS);
        }
        if (textEl.states.emphasis) {
          var layoutEmphasis = layoutStore.oldLayoutEmphasis = {};
          extendWithKeys(layoutEmphasis, newProps, LABEL_LAYOUT_PROPS);
          extendWithKeys(layoutEmphasis, textEl.states.emphasis, LABEL_LAYOUT_PROPS);
        }
        animateLabelValue(textEl, dataIndex, data, seriesModel, seriesModel);
      }
      if (guideLine && !guideLine.ignore && !guideLine.invisible) {
        var layoutStore = labelLineAnimationStore(guideLine);
        var oldLayout = layoutStore.oldLayout;
        var newLayout = {
          points: guideLine.shape.points
        };
        if (!oldLayout) {
          guideLine.setShape(newLayout);
          guideLine.style.strokePercent = 0;
          initProps(guideLine, {
            style: {
              strokePercent: 1
            }
          }, seriesModel);
        } else {
          guideLine.attr({
            shape: oldLayout
          });
          updateProps$1(guideLine, {
            shape: newLayout
          }, seriesModel);
        }
        layoutStore.oldLayout = newLayout;
      }
    };
    return LabelManager2;
  }()
);
var getLabelManager = makeInner();
function installLabelLayout(registers) {
  registers.registerUpdateLifecycle("series:beforeupdate", function(ecModel, api, params) {
    var labelManager = getLabelManager(api).labelManager;
    if (!labelManager) {
      labelManager = getLabelManager(api).labelManager = new LabelManager();
    }
    labelManager.clearLabels();
  });
  registers.registerUpdateLifecycle("series:layoutlabels", function(ecModel, api, params) {
    var labelManager = getLabelManager(api).labelManager;
    params.updatedSeries.forEach(function(series) {
      labelManager.addLabelsOfSeries(api.getViewOfSeriesModel(series));
    });
    labelManager.updateLayoutConfig(api);
    labelManager.layout(api);
    labelManager.processLabelsOverall();
  });
}
var LineSeriesModel = (
  /** @class */
  function(_super) {
    __extends(LineSeriesModel2, _super);
    function LineSeriesModel2() {
      var _this = _super !== null && _super.apply(this, arguments) || this;
      _this.type = LineSeriesModel2.type;
      _this.hasSymbolVisual = true;
      return _this;
    }
    LineSeriesModel2.prototype.getInitialData = function(option) {
      {
        var coordSys = option.coordinateSystem;
        if (coordSys !== "polar" && coordSys !== "cartesian2d") {
          throw new Error("Line not support coordinateSystem besides cartesian and polar");
        }
      }
      return createSeriesData(null, this, {
        useEncodeDefaulter: true
      });
    };
    LineSeriesModel2.prototype.getLegendIcon = function(opt) {
      var group = new Group$2();
      var line = createSymbol("line", 0, opt.itemHeight / 2, opt.itemWidth, 0, opt.lineStyle.stroke, false);
      group.add(line);
      line.setStyle(opt.lineStyle);
      var visualType = this.getData().getVisual("symbol");
      var visualRotate = this.getData().getVisual("symbolRotate");
      var symbolType = visualType === "none" ? "circle" : visualType;
      var size = opt.itemHeight * 0.8;
      var symbol = createSymbol(symbolType, (opt.itemWidth - size) / 2, (opt.itemHeight - size) / 2, size, size, opt.itemStyle.fill);
      group.add(symbol);
      symbol.setStyle(opt.itemStyle);
      var symbolRotate = opt.iconRotate === "inherit" ? visualRotate : opt.iconRotate || 0;
      symbol.rotation = symbolRotate * Math.PI / 180;
      symbol.setOrigin([opt.itemWidth / 2, opt.itemHeight / 2]);
      if (symbolType.indexOf("empty") > -1) {
        symbol.style.stroke = symbol.style.fill;
        symbol.style.fill = "#fff";
        symbol.style.lineWidth = 2;
      }
      return group;
    };
    LineSeriesModel2.type = "series.line";
    LineSeriesModel2.dependencies = ["grid", "polar"];
    LineSeriesModel2.defaultOption = {
      // zlevel: 0,
      z: 3,
      coordinateSystem: "cartesian2d",
      legendHoverLink: true,
      clip: true,
      label: {
        position: "top"
      },
      // itemStyle: {
      // },
      endLabel: {
        show: false,
        valueAnimation: true,
        distance: 8
      },
      lineStyle: {
        width: 2,
        type: "solid"
      },
      emphasis: {
        scale: true
      },
      // areaStyle: {
      // origin of areaStyle. Valid values:
      // `'auto'/null/undefined`: from axisLine to data
      // `'start'`: from min to data
      // `'end'`: from data to max
      // origin: 'auto'
      // },
      // false, 'start', 'end', 'middle'
      step: false,
      // Disabled if step is true
      smooth: false,
      smoothMonotone: null,
      symbol: "emptyCircle",
      symbolSize: 4,
      symbolRotate: null,
      showSymbol: true,
      // `false`: follow the label interval strategy.
      // `true`: show all symbols.
      // `'auto'`: If possible, show all symbols, otherwise
      //           follow the label interval strategy.
      showAllSymbol: "auto",
      // Whether to connect break point.
      connectNulls: false,
      // Sampling for large data. Can be: 'average', 'max', 'min', 'sum', 'lttb'.
      sampling: "none",
      animationEasing: "linear",
      // Disable progressive
      progressive: 0,
      hoverLayerThreshold: Infinity,
      universalTransition: {
        divideShape: "clone"
      },
      triggerLineEvent: false
    };
    return LineSeriesModel2;
  }(SeriesModel)
);
var Symbol$1 = (
  /** @class */
  function(_super) {
    __extends(Symbol2, _super);
    function Symbol2(data, idx, seriesScope, opts) {
      var _this = _super.call(this) || this;
      _this.updateData(data, idx, seriesScope, opts);
      return _this;
    }
    Symbol2.prototype._createSymbol = function(symbolType, data, idx, symbolSize, keepAspect) {
      this.removeAll();
      var symbolPath = createSymbol(symbolType, -1, -1, 2, 2, null, keepAspect);
      symbolPath.attr({
        z2: 100,
        culling: true,
        scaleX: symbolSize[0] / 2,
        scaleY: symbolSize[1] / 2
      });
      symbolPath.drift = driftSymbol;
      this._symbolType = symbolType;
      this.add(symbolPath);
    };
    Symbol2.prototype.stopSymbolAnimation = function(toLastFrame) {
      this.childAt(0).stopAnimation(null, toLastFrame);
    };
    Symbol2.prototype.getSymbolType = function() {
      return this._symbolType;
    };
    Symbol2.prototype.getSymbolPath = function() {
      return this.childAt(0);
    };
    Symbol2.prototype.highlight = function() {
      enterEmphasis(this.childAt(0));
    };
    Symbol2.prototype.downplay = function() {
      leaveEmphasis(this.childAt(0));
    };
    Symbol2.prototype.setZ = function(zlevel, z) {
      var symbolPath = this.childAt(0);
      symbolPath.zlevel = zlevel;
      symbolPath.z = z;
    };
    Symbol2.prototype.setDraggable = function(draggable, hasCursorOption) {
      var symbolPath = this.childAt(0);
      symbolPath.draggable = draggable;
      symbolPath.cursor = !hasCursorOption && draggable ? "move" : symbolPath.cursor;
    };
    Symbol2.prototype.updateData = function(data, idx, seriesScope, opts) {
      this.silent = false;
      var symbolType = data.getItemVisual(idx, "symbol") || "circle";
      var seriesModel = data.hostModel;
      var symbolSize = Symbol2.getSymbolSize(data, idx);
      var isInit = symbolType !== this._symbolType;
      var disableAnimation = opts && opts.disableAnimation;
      if (isInit) {
        var keepAspect = data.getItemVisual(idx, "symbolKeepAspect");
        this._createSymbol(symbolType, data, idx, symbolSize, keepAspect);
      } else {
        var symbolPath = this.childAt(0);
        symbolPath.silent = false;
        var target = {
          scaleX: symbolSize[0] / 2,
          scaleY: symbolSize[1] / 2
        };
        disableAnimation ? symbolPath.attr(target) : updateProps$1(symbolPath, target, seriesModel, idx);
        saveOldStyle(symbolPath);
      }
      this._updateCommon(data, idx, symbolSize, seriesScope, opts);
      if (isInit) {
        var symbolPath = this.childAt(0);
        if (!disableAnimation) {
          var target = {
            scaleX: this._sizeX,
            scaleY: this._sizeY,
            style: {
              // Always fadeIn. Because it has fadeOut animation when symbol is removed..
              opacity: symbolPath.style.opacity
            }
          };
          symbolPath.scaleX = symbolPath.scaleY = 0;
          symbolPath.style.opacity = 0;
          initProps(symbolPath, target, seriesModel, idx);
        }
      }
      if (disableAnimation) {
        this.childAt(0).stopAnimation("leave");
      }
    };
    Symbol2.prototype._updateCommon = function(data, idx, symbolSize, seriesScope, opts) {
      var symbolPath = this.childAt(0);
      var seriesModel = data.hostModel;
      var emphasisItemStyle;
      var blurItemStyle;
      var selectItemStyle;
      var focus;
      var blurScope;
      var emphasisDisabled;
      var labelStatesModels;
      var hoverScale;
      var cursorStyle;
      if (seriesScope) {
        emphasisItemStyle = seriesScope.emphasisItemStyle;
        blurItemStyle = seriesScope.blurItemStyle;
        selectItemStyle = seriesScope.selectItemStyle;
        focus = seriesScope.focus;
        blurScope = seriesScope.blurScope;
        labelStatesModels = seriesScope.labelStatesModels;
        hoverScale = seriesScope.hoverScale;
        cursorStyle = seriesScope.cursorStyle;
        emphasisDisabled = seriesScope.emphasisDisabled;
      }
      if (!seriesScope || data.hasItemOption) {
        var itemModel = seriesScope && seriesScope.itemModel ? seriesScope.itemModel : data.getItemModel(idx);
        var emphasisModel = itemModel.getModel("emphasis");
        emphasisItemStyle = emphasisModel.getModel("itemStyle").getItemStyle();
        selectItemStyle = itemModel.getModel(["select", "itemStyle"]).getItemStyle();
        blurItemStyle = itemModel.getModel(["blur", "itemStyle"]).getItemStyle();
        focus = emphasisModel.get("focus");
        blurScope = emphasisModel.get("blurScope");
        emphasisDisabled = emphasisModel.get("disabled");
        labelStatesModels = getLabelStatesModels(itemModel);
        hoverScale = emphasisModel.getShallow("scale");
        cursorStyle = itemModel.getShallow("cursor");
      }
      var symbolRotate = data.getItemVisual(idx, "symbolRotate");
      symbolPath.attr("rotation", (symbolRotate || 0) * Math.PI / 180 || 0);
      var symbolOffset = normalizeSymbolOffset(data.getItemVisual(idx, "symbolOffset"), symbolSize);
      if (symbolOffset) {
        symbolPath.x = symbolOffset[0];
        symbolPath.y = symbolOffset[1];
      }
      cursorStyle && symbolPath.attr("cursor", cursorStyle);
      var symbolStyle = data.getItemVisual(idx, "style");
      var visualColor = symbolStyle.fill;
      if (symbolPath instanceof ZRImage) {
        var pathStyle = symbolPath.style;
        symbolPath.useStyle(extend({
          // TODO other properties like x, y ?
          image: pathStyle.image,
          x: pathStyle.x,
          y: pathStyle.y,
          width: pathStyle.width,
          height: pathStyle.height
        }, symbolStyle));
      } else {
        if (symbolPath.__isEmptyBrush) {
          symbolPath.useStyle(extend({}, symbolStyle));
        } else {
          symbolPath.useStyle(symbolStyle);
        }
        symbolPath.style.decal = null;
        symbolPath.setColor(visualColor, opts && opts.symbolInnerColor);
        symbolPath.style.strokeNoScale = true;
      }
      var liftZ = data.getItemVisual(idx, "liftZ");
      var z2Origin = this._z2;
      if (liftZ != null) {
        if (z2Origin == null) {
          this._z2 = symbolPath.z2;
          symbolPath.z2 += liftZ;
        }
      } else if (z2Origin != null) {
        symbolPath.z2 = z2Origin;
        this._z2 = null;
      }
      var useNameLabel = opts && opts.useNameLabel;
      setLabelStyle(symbolPath, labelStatesModels, {
        labelFetcher: seriesModel,
        labelDataIndex: idx,
        defaultText: getLabelDefaultText,
        inheritColor: visualColor,
        defaultOpacity: symbolStyle.opacity
      });
      function getLabelDefaultText(idx2) {
        return useNameLabel ? data.getName(idx2) : getDefaultLabel(data, idx2);
      }
      this._sizeX = symbolSize[0] / 2;
      this._sizeY = symbolSize[1] / 2;
      var emphasisState = symbolPath.ensureState("emphasis");
      emphasisState.style = emphasisItemStyle;
      symbolPath.ensureState("select").style = selectItemStyle;
      symbolPath.ensureState("blur").style = blurItemStyle;
      var scaleRatio = hoverScale == null || hoverScale === true ? Math.max(1.1, 3 / this._sizeY) : isFinite(hoverScale) && hoverScale > 0 ? +hoverScale : 1;
      emphasisState.scaleX = this._sizeX * scaleRatio;
      emphasisState.scaleY = this._sizeY * scaleRatio;
      this.setSymbolScale(1);
      toggleHoverEmphasis(this, focus, blurScope, emphasisDisabled);
    };
    Symbol2.prototype.setSymbolScale = function(scale) {
      this.scaleX = this.scaleY = scale;
    };
    Symbol2.prototype.fadeOut = function(cb, seriesModel, opt) {
      var symbolPath = this.childAt(0);
      var dataIndex = getECData(this).dataIndex;
      var animationOpt = opt && opt.animation;
      this.silent = symbolPath.silent = true;
      if (opt && opt.fadeLabel) {
        var textContent = symbolPath.getTextContent();
        if (textContent) {
          removeElement(textContent, {
            style: {
              opacity: 0
            }
          }, seriesModel, {
            dataIndex,
            removeOpt: animationOpt,
            cb: function() {
              symbolPath.removeTextContent();
            }
          });
        }
      } else {
        symbolPath.removeTextContent();
      }
      removeElement(symbolPath, {
        style: {
          opacity: 0
        },
        scaleX: 0,
        scaleY: 0
      }, seriesModel, {
        dataIndex,
        cb,
        removeOpt: animationOpt
      });
    };
    Symbol2.getSymbolSize = function(data, idx) {
      return normalizeSymbolSize(data.getItemVisual(idx, "symbolSize"));
    };
    return Symbol2;
  }(Group$2)
);
function driftSymbol(dx, dy) {
  this.parent.drift(dx, dy);
}
function symbolNeedsDraw(data, point, idx, opt) {
  return point && !isNaN(point[0]) && !isNaN(point[1]) && !(opt.isIgnore && opt.isIgnore(idx)) && !(opt.clipShape && !opt.clipShape.contain(point[0], point[1])) && data.getItemVisual(idx, "symbol") !== "none";
}
function normalizeUpdateOpt(opt) {
  if (opt != null && !isObject(opt)) {
    opt = {
      isIgnore: opt
    };
  }
  return opt || {};
}
function makeSeriesScope(data) {
  var seriesModel = data.hostModel;
  var emphasisModel = seriesModel.getModel("emphasis");
  return {
    emphasisItemStyle: emphasisModel.getModel("itemStyle").getItemStyle(),
    blurItemStyle: seriesModel.getModel(["blur", "itemStyle"]).getItemStyle(),
    selectItemStyle: seriesModel.getModel(["select", "itemStyle"]).getItemStyle(),
    focus: emphasisModel.get("focus"),
    blurScope: emphasisModel.get("blurScope"),
    emphasisDisabled: emphasisModel.get("disabled"),
    hoverScale: emphasisModel.get("scale"),
    labelStatesModels: getLabelStatesModels(seriesModel),
    cursorStyle: seriesModel.get("cursor")
  };
}
var SymbolDraw = (
  /** @class */
  function() {
    function SymbolDraw2(SymbolCtor) {
      this.group = new Group$2();
      this._SymbolCtor = SymbolCtor || Symbol$1;
    }
    SymbolDraw2.prototype.updateData = function(data, opt) {
      this._progressiveEls = null;
      opt = normalizeUpdateOpt(opt);
      var group = this.group;
      var seriesModel = data.hostModel;
      var oldData = this._data;
      var SymbolCtor = this._SymbolCtor;
      var disableAnimation = opt.disableAnimation;
      var seriesScope = makeSeriesScope(data);
      var symbolUpdateOpt = {
        disableAnimation
      };
      var getSymbolPoint = opt.getSymbolPoint || function(idx) {
        return data.getItemLayout(idx);
      };
      if (!oldData) {
        group.removeAll();
      }
      data.diff(oldData).add(function(newIdx) {
        var point = getSymbolPoint(newIdx);
        if (symbolNeedsDraw(data, point, newIdx, opt)) {
          var symbolEl = new SymbolCtor(data, newIdx, seriesScope, symbolUpdateOpt);
          symbolEl.setPosition(point);
          data.setItemGraphicEl(newIdx, symbolEl);
          group.add(symbolEl);
        }
      }).update(function(newIdx, oldIdx) {
        var symbolEl = oldData.getItemGraphicEl(oldIdx);
        var point = getSymbolPoint(newIdx);
        if (!symbolNeedsDraw(data, point, newIdx, opt)) {
          group.remove(symbolEl);
          return;
        }
        var newSymbolType = data.getItemVisual(newIdx, "symbol") || "circle";
        var oldSymbolType = symbolEl && symbolEl.getSymbolType && symbolEl.getSymbolType();
        if (!symbolEl || oldSymbolType && oldSymbolType !== newSymbolType) {
          group.remove(symbolEl);
          symbolEl = new SymbolCtor(data, newIdx, seriesScope, symbolUpdateOpt);
          symbolEl.setPosition(point);
        } else {
          symbolEl.updateData(data, newIdx, seriesScope, symbolUpdateOpt);
          var target = {
            x: point[0],
            y: point[1]
          };
          disableAnimation ? symbolEl.attr(target) : updateProps$1(symbolEl, target, seriesModel);
        }
        group.add(symbolEl);
        data.setItemGraphicEl(newIdx, symbolEl);
      }).remove(function(oldIdx) {
        var el = oldData.getItemGraphicEl(oldIdx);
        el && el.fadeOut(function() {
          group.remove(el);
        }, seriesModel);
      }).execute();
      this._getSymbolPoint = getSymbolPoint;
      this._data = data;
    };
    SymbolDraw2.prototype.updateLayout = function() {
      var _this = this;
      var data = this._data;
      if (data) {
        data.eachItemGraphicEl(function(el, idx) {
          var point = _this._getSymbolPoint(idx);
          el.setPosition(point);
          el.markRedraw();
        });
      }
    };
    SymbolDraw2.prototype.incrementalPrepareUpdate = function(data) {
      this._seriesScope = makeSeriesScope(data);
      this._data = null;
      this.group.removeAll();
    };
    SymbolDraw2.prototype.incrementalUpdate = function(taskParams, data, opt) {
      this._progressiveEls = [];
      opt = normalizeUpdateOpt(opt);
      function updateIncrementalAndHover(el2) {
        if (!el2.isGroup) {
          el2.incremental = true;
          el2.ensureState("emphasis").hoverLayer = true;
        }
      }
      for (var idx = taskParams.start; idx < taskParams.end; idx++) {
        var point = data.getItemLayout(idx);
        if (symbolNeedsDraw(data, point, idx, opt)) {
          var el = new this._SymbolCtor(data, idx, this._seriesScope);
          el.traverse(updateIncrementalAndHover);
          el.setPosition(point);
          this.group.add(el);
          data.setItemGraphicEl(idx, el);
          this._progressiveEls.push(el);
        }
      }
    };
    SymbolDraw2.prototype.eachRendered = function(cb) {
      traverseElements(this._progressiveEls || this.group, cb);
    };
    SymbolDraw2.prototype.remove = function(enableAnimation) {
      var group = this.group;
      var data = this._data;
      if (data && enableAnimation) {
        data.eachItemGraphicEl(function(el) {
          el.fadeOut(function() {
            group.remove(el);
          }, data.hostModel);
        });
      } else {
        group.removeAll();
      }
    };
    return SymbolDraw2;
  }()
);
function prepareDataCoordInfo(coordSys, data, valueOrigin) {
  var baseAxis = coordSys.getBaseAxis();
  var valueAxis = coordSys.getOtherAxis(baseAxis);
  var valueStart = getValueStart(valueAxis, valueOrigin);
  var baseAxisDim = baseAxis.dim;
  var valueAxisDim = valueAxis.dim;
  var valueDim = data.mapDimension(valueAxisDim);
  var baseDim = data.mapDimension(baseAxisDim);
  var baseDataOffset = valueAxisDim === "x" || valueAxisDim === "radius" ? 1 : 0;
  var dims = map(coordSys.dimensions, function(coordDim) {
    return data.mapDimension(coordDim);
  });
  var stacked = false;
  var stackResultDim = data.getCalculationInfo("stackResultDimension");
  if (isDimensionStacked(
    data,
    dims[0]
    /* , dims[1] */
  )) {
    stacked = true;
    dims[0] = stackResultDim;
  }
  if (isDimensionStacked(
    data,
    dims[1]
    /* , dims[0] */
  )) {
    stacked = true;
    dims[1] = stackResultDim;
  }
  return {
    dataDimsForPoint: dims,
    valueStart,
    valueAxisDim,
    baseAxisDim,
    stacked: !!stacked,
    valueDim,
    baseDim,
    baseDataOffset,
    stackedOverDimension: data.getCalculationInfo("stackedOverDimension")
  };
}
function getValueStart(valueAxis, valueOrigin) {
  var valueStart = 0;
  var extent = valueAxis.scale.getExtent();
  if (valueOrigin === "start") {
    valueStart = extent[0];
  } else if (valueOrigin === "end") {
    valueStart = extent[1];
  } else if (isNumber(valueOrigin) && !isNaN(valueOrigin)) {
    valueStart = valueOrigin;
  } else {
    if (extent[0] > 0) {
      valueStart = extent[0];
    } else if (extent[1] < 0) {
      valueStart = extent[1];
    }
  }
  return valueStart;
}
function getStackedOnPoint(dataCoordInfo, coordSys, data, idx) {
  var value = NaN;
  if (dataCoordInfo.stacked) {
    value = data.get(data.getCalculationInfo("stackedOverDimension"), idx);
  }
  if (isNaN(value)) {
    value = dataCoordInfo.valueStart;
  }
  var baseDataOffset = dataCoordInfo.baseDataOffset;
  var stackedData = [];
  stackedData[baseDataOffset] = data.get(dataCoordInfo.baseDim, idx);
  stackedData[1 - baseDataOffset] = value;
  return coordSys.dataToPoint(stackedData);
}
function diffData(oldData, newData) {
  var diffResult = [];
  newData.diff(oldData).add(function(idx) {
    diffResult.push({
      cmd: "+",
      idx
    });
  }).update(function(newIdx, oldIdx) {
    diffResult.push({
      cmd: "=",
      idx: oldIdx,
      idx1: newIdx
    });
  }).remove(function(idx) {
    diffResult.push({
      cmd: "-",
      idx
    });
  }).execute();
  return diffResult;
}
function lineAnimationDiff(oldData, newData, oldStackedOnPoints, newStackedOnPoints, oldCoordSys, newCoordSys, oldValueOrigin, newValueOrigin) {
  var diff = diffData(oldData, newData);
  var currPoints = [];
  var nextPoints = [];
  var currStackedPoints = [];
  var nextStackedPoints = [];
  var status = [];
  var sortedIndices = [];
  var rawIndices = [];
  var newDataOldCoordInfo = prepareDataCoordInfo(oldCoordSys, newData, oldValueOrigin);
  var oldPoints = oldData.getLayout("points") || [];
  var newPoints = newData.getLayout("points") || [];
  for (var i = 0; i < diff.length; i++) {
    var diffItem = diff[i];
    var pointAdded = true;
    var oldIdx2 = void 0;
    var newIdx2 = void 0;
    switch (diffItem.cmd) {
      case "=":
        oldIdx2 = diffItem.idx * 2;
        newIdx2 = diffItem.idx1 * 2;
        var currentX = oldPoints[oldIdx2];
        var currentY = oldPoints[oldIdx2 + 1];
        var nextX = newPoints[newIdx2];
        var nextY = newPoints[newIdx2 + 1];
        if (isNaN(currentX) || isNaN(currentY)) {
          currentX = nextX;
          currentY = nextY;
        }
        currPoints.push(currentX, currentY);
        nextPoints.push(nextX, nextY);
        currStackedPoints.push(oldStackedOnPoints[oldIdx2], oldStackedOnPoints[oldIdx2 + 1]);
        nextStackedPoints.push(newStackedOnPoints[newIdx2], newStackedOnPoints[newIdx2 + 1]);
        rawIndices.push(newData.getRawIndex(diffItem.idx1));
        break;
      case "+":
        var newIdx = diffItem.idx;
        var newDataDimsForPoint = newDataOldCoordInfo.dataDimsForPoint;
        var oldPt = oldCoordSys.dataToPoint([newData.get(newDataDimsForPoint[0], newIdx), newData.get(newDataDimsForPoint[1], newIdx)]);
        newIdx2 = newIdx * 2;
        currPoints.push(oldPt[0], oldPt[1]);
        nextPoints.push(newPoints[newIdx2], newPoints[newIdx2 + 1]);
        var stackedOnPoint = getStackedOnPoint(newDataOldCoordInfo, oldCoordSys, newData, newIdx);
        currStackedPoints.push(stackedOnPoint[0], stackedOnPoint[1]);
        nextStackedPoints.push(newStackedOnPoints[newIdx2], newStackedOnPoints[newIdx2 + 1]);
        rawIndices.push(newData.getRawIndex(newIdx));
        break;
      case "-":
        pointAdded = false;
    }
    if (pointAdded) {
      status.push(diffItem);
      sortedIndices.push(sortedIndices.length);
    }
  }
  sortedIndices.sort(function(a, b) {
    return rawIndices[a] - rawIndices[b];
  });
  var len = currPoints.length;
  var sortedCurrPoints = createFloat32Array(len);
  var sortedNextPoints = createFloat32Array(len);
  var sortedCurrStackedPoints = createFloat32Array(len);
  var sortedNextStackedPoints = createFloat32Array(len);
  var sortedStatus = [];
  for (var i = 0; i < sortedIndices.length; i++) {
    var idx = sortedIndices[i];
    var i2 = i * 2;
    var idx2 = idx * 2;
    sortedCurrPoints[i2] = currPoints[idx2];
    sortedCurrPoints[i2 + 1] = currPoints[idx2 + 1];
    sortedNextPoints[i2] = nextPoints[idx2];
    sortedNextPoints[i2 + 1] = nextPoints[idx2 + 1];
    sortedCurrStackedPoints[i2] = currStackedPoints[idx2];
    sortedCurrStackedPoints[i2 + 1] = currStackedPoints[idx2 + 1];
    sortedNextStackedPoints[i2] = nextStackedPoints[idx2];
    sortedNextStackedPoints[i2 + 1] = nextStackedPoints[idx2 + 1];
    sortedStatus[i] = status[idx];
  }
  return {
    current: sortedCurrPoints,
    next: sortedNextPoints,
    stackedOnCurrent: sortedCurrStackedPoints,
    stackedOnNext: sortedNextStackedPoints,
    status: sortedStatus
  };
}
var mathMin = Math.min;
var mathMax = Math.max;
function isPointNull$1(x, y) {
  return isNaN(x) || isNaN(y);
}
function drawSegment(ctx, points, start, segLen, allLen, dir3, smooth, smoothMonotone, connectNulls) {
  var prevX;
  var prevY;
  var cpx0;
  var cpy0;
  var cpx1;
  var cpy1;
  var idx = start;
  var k = 0;
  for (; k < segLen; k++) {
    var x = points[idx * 2];
    var y = points[idx * 2 + 1];
    if (idx >= allLen || idx < 0) {
      break;
    }
    if (isPointNull$1(x, y)) {
      if (connectNulls) {
        idx += dir3;
        continue;
      }
      break;
    }
    if (idx === start) {
      ctx[dir3 > 0 ? "moveTo" : "lineTo"](x, y);
      cpx0 = x;
      cpy0 = y;
    } else {
      var dx = x - prevX;
      var dy = y - prevY;
      if (dx * dx + dy * dy < 0.5) {
        idx += dir3;
        continue;
      }
      if (smooth > 0) {
        var nextIdx = idx + dir3;
        var nextX = points[nextIdx * 2];
        var nextY = points[nextIdx * 2 + 1];
        while (nextX === x && nextY === y && k < segLen) {
          k++;
          nextIdx += dir3;
          idx += dir3;
          nextX = points[nextIdx * 2];
          nextY = points[nextIdx * 2 + 1];
          x = points[idx * 2];
          y = points[idx * 2 + 1];
          dx = x - prevX;
          dy = y - prevY;
        }
        var tmpK = k + 1;
        if (connectNulls) {
          while (isPointNull$1(nextX, nextY) && tmpK < segLen) {
            tmpK++;
            nextIdx += dir3;
            nextX = points[nextIdx * 2];
            nextY = points[nextIdx * 2 + 1];
          }
        }
        var ratioNextSeg = 0.5;
        var vx = 0;
        var vy = 0;
        var nextCpx0 = void 0;
        var nextCpy0 = void 0;
        if (tmpK >= segLen || isPointNull$1(nextX, nextY)) {
          cpx1 = x;
          cpy1 = y;
        } else {
          vx = nextX - prevX;
          vy = nextY - prevY;
          var dx0 = x - prevX;
          var dx1 = nextX - x;
          var dy0 = y - prevY;
          var dy1 = nextY - y;
          var lenPrevSeg = void 0;
          var lenNextSeg = void 0;
          if (smoothMonotone === "x") {
            lenPrevSeg = Math.abs(dx0);
            lenNextSeg = Math.abs(dx1);
            var dir_1 = vx > 0 ? 1 : -1;
            cpx1 = x - dir_1 * lenPrevSeg * smooth;
            cpy1 = y;
            nextCpx0 = x + dir_1 * lenNextSeg * smooth;
            nextCpy0 = y;
          } else if (smoothMonotone === "y") {
            lenPrevSeg = Math.abs(dy0);
            lenNextSeg = Math.abs(dy1);
            var dir_2 = vy > 0 ? 1 : -1;
            cpx1 = x;
            cpy1 = y - dir_2 * lenPrevSeg * smooth;
            nextCpx0 = x;
            nextCpy0 = y + dir_2 * lenNextSeg * smooth;
          } else {
            lenPrevSeg = Math.sqrt(dx0 * dx0 + dy0 * dy0);
            lenNextSeg = Math.sqrt(dx1 * dx1 + dy1 * dy1);
            ratioNextSeg = lenNextSeg / (lenNextSeg + lenPrevSeg);
            cpx1 = x - vx * smooth * (1 - ratioNextSeg);
            cpy1 = y - vy * smooth * (1 - ratioNextSeg);
            nextCpx0 = x + vx * smooth * ratioNextSeg;
            nextCpy0 = y + vy * smooth * ratioNextSeg;
            nextCpx0 = mathMin(nextCpx0, mathMax(nextX, x));
            nextCpy0 = mathMin(nextCpy0, mathMax(nextY, y));
            nextCpx0 = mathMax(nextCpx0, mathMin(nextX, x));
            nextCpy0 = mathMax(nextCpy0, mathMin(nextY, y));
            vx = nextCpx0 - x;
            vy = nextCpy0 - y;
            cpx1 = x - vx * lenPrevSeg / lenNextSeg;
            cpy1 = y - vy * lenPrevSeg / lenNextSeg;
            cpx1 = mathMin(cpx1, mathMax(prevX, x));
            cpy1 = mathMin(cpy1, mathMax(prevY, y));
            cpx1 = mathMax(cpx1, mathMin(prevX, x));
            cpy1 = mathMax(cpy1, mathMin(prevY, y));
            vx = x - cpx1;
            vy = y - cpy1;
            nextCpx0 = x + vx * lenNextSeg / lenPrevSeg;
            nextCpy0 = y + vy * lenNextSeg / lenPrevSeg;
          }
        }
        ctx.bezierCurveTo(cpx0, cpy0, cpx1, cpy1, x, y);
        cpx0 = nextCpx0;
        cpy0 = nextCpy0;
      } else {
        ctx.lineTo(x, y);
      }
    }
    prevX = x;
    prevY = y;
    idx += dir3;
  }
  return k;
}
var ECPolylineShape = (
  /** @class */
  /* @__PURE__ */ function() {
    function ECPolylineShape2() {
      this.smooth = 0;
      this.smoothConstraint = true;
    }
    return ECPolylineShape2;
  }()
);
var ECPolyline = (
  /** @class */
  function(_super) {
    __extends(ECPolyline2, _super);
    function ECPolyline2(opts) {
      var _this = _super.call(this, opts) || this;
      _this.type = "ec-polyline";
      return _this;
    }
    ECPolyline2.prototype.getDefaultStyle = function() {
      return {
        stroke: "#000",
        fill: null
      };
    };
    ECPolyline2.prototype.getDefaultShape = function() {
      return new ECPolylineShape();
    };
    ECPolyline2.prototype.buildPath = function(ctx, shape) {
      var points = shape.points;
      var i = 0;
      var len = points.length / 2;
      if (shape.connectNulls) {
        for (; len > 0; len--) {
          if (!isPointNull$1(points[len * 2 - 2], points[len * 2 - 1])) {
            break;
          }
        }
        for (; i < len; i++) {
          if (!isPointNull$1(points[i * 2], points[i * 2 + 1])) {
            break;
          }
        }
      }
      while (i < len) {
        i += drawSegment(ctx, points, i, len, len, 1, shape.smooth, shape.smoothMonotone, shape.connectNulls) + 1;
      }
    };
    ECPolyline2.prototype.getPointOn = function(xOrY, dim) {
      if (!this.path) {
        this.createPathProxy();
        this.buildPath(this.path, this.shape);
      }
      var path = this.path;
      var data = path.data;
      var CMD2 = PathProxy.CMD;
      var x0;
      var y0;
      var isDimX = dim === "x";
      var roots = [];
      for (var i = 0; i < data.length; ) {
        var cmd = data[i++];
        var x = void 0;
        var y = void 0;
        var x2 = void 0;
        var y2 = void 0;
        var x3 = void 0;
        var y3 = void 0;
        var t = void 0;
        switch (cmd) {
          case CMD2.M:
            x0 = data[i++];
            y0 = data[i++];
            break;
          case CMD2.L:
            x = data[i++];
            y = data[i++];
            t = isDimX ? (xOrY - x0) / (x - x0) : (xOrY - y0) / (y - y0);
            if (t <= 1 && t >= 0) {
              var val = isDimX ? (y - y0) * t + y0 : (x - x0) * t + x0;
              return isDimX ? [xOrY, val] : [val, xOrY];
            }
            x0 = x;
            y0 = y;
            break;
          case CMD2.C:
            x = data[i++];
            y = data[i++];
            x2 = data[i++];
            y2 = data[i++];
            x3 = data[i++];
            y3 = data[i++];
            var nRoot = isDimX ? cubicRootAt(x0, x, x2, x3, xOrY, roots) : cubicRootAt(y0, y, y2, y3, xOrY, roots);
            if (nRoot > 0) {
              for (var i_1 = 0; i_1 < nRoot; i_1++) {
                var t_1 = roots[i_1];
                if (t_1 <= 1 && t_1 >= 0) {
                  var val = isDimX ? cubicAt(y0, y, y2, y3, t_1) : cubicAt(x0, x, x2, x3, t_1);
                  return isDimX ? [xOrY, val] : [val, xOrY];
                }
              }
            }
            x0 = x3;
            y0 = y3;
            break;
        }
      }
    };
    return ECPolyline2;
  }(Path)
);
var ECPolygonShape = (
  /** @class */
  function(_super) {
    __extends(ECPolygonShape2, _super);
    function ECPolygonShape2() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    return ECPolygonShape2;
  }(ECPolylineShape)
);
var ECPolygon = (
  /** @class */
  function(_super) {
    __extends(ECPolygon2, _super);
    function ECPolygon2(opts) {
      var _this = _super.call(this, opts) || this;
      _this.type = "ec-polygon";
      return _this;
    }
    ECPolygon2.prototype.getDefaultShape = function() {
      return new ECPolygonShape();
    };
    ECPolygon2.prototype.buildPath = function(ctx, shape) {
      var points = shape.points;
      var stackedOnPoints = shape.stackedOnPoints;
      var i = 0;
      var len = points.length / 2;
      var smoothMonotone = shape.smoothMonotone;
      if (shape.connectNulls) {
        for (; len > 0; len--) {
          if (!isPointNull$1(points[len * 2 - 2], points[len * 2 - 1])) {
            break;
          }
        }
        for (; i < len; i++) {
          if (!isPointNull$1(points[i * 2], points[i * 2 + 1])) {
            break;
          }
        }
      }
      while (i < len) {
        var k = drawSegment(ctx, points, i, len, len, 1, shape.smooth, smoothMonotone, shape.connectNulls);
        drawSegment(ctx, stackedOnPoints, i + k - 1, k, len, -1, shape.stackedOnSmooth, smoothMonotone, shape.connectNulls);
        i += k + 1;
        ctx.closePath();
      }
    };
    return ECPolygon2;
  }(Path)
);
function isPointsSame(points1, points2) {
  if (points1.length !== points2.length) {
    return;
  }
  for (var i = 0; i < points1.length; i++) {
    if (points1[i] !== points2[i]) {
      return;
    }
  }
  return true;
}
function bboxFromPoints(points) {
  var minX = Infinity;
  var minY = Infinity;
  var maxX = -Infinity;
  var maxY = -Infinity;
  for (var i = 0; i < points.length; ) {
    var x = points[i++];
    var y = points[i++];
    if (!isNaN(x)) {
      minX = Math.min(x, minX);
      maxX = Math.max(x, maxX);
    }
    if (!isNaN(y)) {
      minY = Math.min(y, minY);
      maxY = Math.max(y, maxY);
    }
  }
  return [[minX, minY], [maxX, maxY]];
}
function getBoundingDiff(points1, points2) {
  var _a = bboxFromPoints(points1), min1 = _a[0], max1 = _a[1];
  var _b = bboxFromPoints(points2), min2 = _b[0], max2 = _b[1];
  return Math.max(Math.abs(min1[0] - min2[0]), Math.abs(min1[1] - min2[1]), Math.abs(max1[0] - max2[0]), Math.abs(max1[1] - max2[1]));
}
function getSmooth(smooth) {
  return zrUtil.isNumber(smooth) ? smooth : smooth ? 0.5 : 0;
}
function getStackedOnPoints(coordSys, data, dataCoordInfo) {
  if (!dataCoordInfo.valueDim) {
    return [];
  }
  var len = data.count();
  var points = createFloat32Array(len * 2);
  for (var idx = 0; idx < len; idx++) {
    var pt = getStackedOnPoint(dataCoordInfo, coordSys, data, idx);
    points[idx * 2] = pt[0];
    points[idx * 2 + 1] = pt[1];
  }
  return points;
}
function turnPointsIntoStep(points, basePoints, coordSys, stepTurnAt, connectNulls) {
  var baseAxis = coordSys.getBaseAxis();
  var baseIndex = baseAxis.dim === "x" || baseAxis.dim === "radius" ? 0 : 1;
  var stepPoints = [];
  var i = 0;
  var stepPt = [];
  var pt = [];
  var nextPt = [];
  var filteredPoints = [];
  if (connectNulls) {
    for (i = 0; i < points.length; i += 2) {
      var reference = basePoints || points;
      if (!isNaN(reference[i]) && !isNaN(reference[i + 1])) {
        filteredPoints.push(points[i], points[i + 1]);
      }
    }
    points = filteredPoints;
  }
  for (i = 0; i < points.length - 2; i += 2) {
    nextPt[0] = points[i + 2];
    nextPt[1] = points[i + 3];
    pt[0] = points[i];
    pt[1] = points[i + 1];
    stepPoints.push(pt[0], pt[1]);
    switch (stepTurnAt) {
      case "end":
        stepPt[baseIndex] = nextPt[baseIndex];
        stepPt[1 - baseIndex] = pt[1 - baseIndex];
        stepPoints.push(stepPt[0], stepPt[1]);
        break;
      case "middle":
        var middle = (pt[baseIndex] + nextPt[baseIndex]) / 2;
        var stepPt2 = [];
        stepPt[baseIndex] = stepPt2[baseIndex] = middle;
        stepPt[1 - baseIndex] = pt[1 - baseIndex];
        stepPt2[1 - baseIndex] = nextPt[1 - baseIndex];
        stepPoints.push(stepPt[0], stepPt[1]);
        stepPoints.push(stepPt2[0], stepPt2[1]);
        break;
      default:
        stepPt[baseIndex] = pt[baseIndex];
        stepPt[1 - baseIndex] = nextPt[1 - baseIndex];
        stepPoints.push(stepPt[0], stepPt[1]);
    }
  }
  stepPoints.push(points[i++], points[i++]);
  return stepPoints;
}
function clipColorStops(colorStops, maxSize) {
  var newColorStops = [];
  var len = colorStops.length;
  var prevOutOfRangeColorStop;
  var prevInRangeColorStop;
  function lerpStop(stop0, stop1, clippedCoord) {
    var coord0 = stop0.coord;
    var p = (clippedCoord - coord0) / (stop1.coord - coord0);
    var color = lerp(p, [stop0.color, stop1.color]);
    return {
      coord: clippedCoord,
      color
    };
  }
  for (var i = 0; i < len; i++) {
    var stop_1 = colorStops[i];
    var coord = stop_1.coord;
    if (coord < 0) {
      prevOutOfRangeColorStop = stop_1;
    } else if (coord > maxSize) {
      if (prevInRangeColorStop) {
        newColorStops.push(lerpStop(prevInRangeColorStop, stop_1, maxSize));
      } else if (prevOutOfRangeColorStop) {
        newColorStops.push(lerpStop(prevOutOfRangeColorStop, stop_1, 0), lerpStop(prevOutOfRangeColorStop, stop_1, maxSize));
      }
      break;
    } else {
      if (prevOutOfRangeColorStop) {
        newColorStops.push(lerpStop(prevOutOfRangeColorStop, stop_1, 0));
        prevOutOfRangeColorStop = null;
      }
      newColorStops.push(stop_1);
      prevInRangeColorStop = stop_1;
    }
  }
  return newColorStops;
}
function getVisualGradient(data, coordSys, api) {
  var visualMetaList = data.getVisual("visualMeta");
  if (!visualMetaList || !visualMetaList.length || !data.count()) {
    return;
  }
  if (coordSys.type !== "cartesian2d") {
    {
      console.warn("Visual map on line style is only supported on cartesian2d.");
    }
    return;
  }
  var coordDim;
  var visualMeta;
  for (var i = visualMetaList.length - 1; i >= 0; i--) {
    var dimInfo = data.getDimensionInfo(visualMetaList[i].dimension);
    coordDim = dimInfo && dimInfo.coordDim;
    if (coordDim === "x" || coordDim === "y") {
      visualMeta = visualMetaList[i];
      break;
    }
  }
  if (!visualMeta) {
    {
      console.warn("Visual map on line style only support x or y dimension.");
    }
    return;
  }
  var axis = coordSys.getAxis(coordDim);
  var colorStops = zrUtil.map(visualMeta.stops, function(stop) {
    return {
      coord: axis.toGlobalCoord(axis.dataToCoord(stop.value)),
      color: stop.color
    };
  });
  var stopLen = colorStops.length;
  var outerColors = visualMeta.outerColors.slice();
  if (stopLen && colorStops[0].coord > colorStops[stopLen - 1].coord) {
    colorStops.reverse();
    outerColors.reverse();
  }
  var colorStopsInRange = clipColorStops(colorStops, coordDim === "x" ? api.getWidth() : api.getHeight());
  var inRangeStopLen = colorStopsInRange.length;
  if (!inRangeStopLen && stopLen) {
    return colorStops[0].coord < 0 ? outerColors[1] ? outerColors[1] : colorStops[stopLen - 1].color : outerColors[0] ? outerColors[0] : colorStops[0].color;
  }
  var tinyExtent = 10;
  var minCoord = colorStopsInRange[0].coord - tinyExtent;
  var maxCoord = colorStopsInRange[inRangeStopLen - 1].coord + tinyExtent;
  var coordSpan = maxCoord - minCoord;
  if (coordSpan < 1e-3) {
    return "transparent";
  }
  zrUtil.each(colorStopsInRange, function(stop) {
    stop.offset = (stop.coord - minCoord) / coordSpan;
  });
  colorStopsInRange.push({
    // NOTE: inRangeStopLen may still be 0 if stoplen is zero.
    offset: inRangeStopLen ? colorStopsInRange[inRangeStopLen - 1].offset : 0.5,
    color: outerColors[1] || "transparent"
  });
  colorStopsInRange.unshift({
    offset: inRangeStopLen ? colorStopsInRange[0].offset : 0.5,
    color: outerColors[0] || "transparent"
  });
  var gradient = new LinearGradient(0, 0, 0, 0, colorStopsInRange, true);
  gradient[coordDim] = minCoord;
  gradient[coordDim + "2"] = maxCoord;
  return gradient;
}
function getIsIgnoreFunc(seriesModel, data, coordSys) {
  var showAllSymbol = seriesModel.get("showAllSymbol");
  var isAuto = showAllSymbol === "auto";
  if (showAllSymbol && !isAuto) {
    return;
  }
  var categoryAxis = coordSys.getAxesByScale("ordinal")[0];
  if (!categoryAxis) {
    return;
  }
  if (isAuto && canShowAllSymbolForCategory(categoryAxis, data)) {
    return;
  }
  var categoryDataDim = data.mapDimension(categoryAxis.dim);
  var labelMap = {};
  zrUtil.each(categoryAxis.getViewLabels(), function(labelItem) {
    var ordinalNumber = categoryAxis.scale.getRawOrdinalNumber(labelItem.tickValue);
    labelMap[ordinalNumber] = 1;
  });
  return function(dataIndex) {
    return !labelMap.hasOwnProperty(data.get(categoryDataDim, dataIndex));
  };
}
function canShowAllSymbolForCategory(categoryAxis, data) {
  var axisExtent = categoryAxis.getExtent();
  var availSize = Math.abs(axisExtent[1] - axisExtent[0]) / categoryAxis.scale.count();
  isNaN(availSize) && (availSize = 0);
  var dataLen = data.count();
  var step = Math.max(1, Math.round(dataLen / 5));
  for (var dataIndex = 0; dataIndex < dataLen; dataIndex += step) {
    if (Symbol$1.getSymbolSize(
      data,
      dataIndex
      // Only for cartesian, where `isHorizontal` exists.
    )[categoryAxis.isHorizontal() ? 1 : 0] * 1.5 > availSize) {
      return false;
    }
  }
  return true;
}
function isPointNull(x, y) {
  return isNaN(x) || isNaN(y);
}
function getLastIndexNotNull(points) {
  var len = points.length / 2;
  for (; len > 0; len--) {
    if (!isPointNull(points[len * 2 - 2], points[len * 2 - 1])) {
      break;
    }
  }
  return len - 1;
}
function getPointAtIndex(points, idx) {
  return [points[idx * 2], points[idx * 2 + 1]];
}
function getIndexRange(points, xOrY, dim) {
  var len = points.length / 2;
  var dimIdx = dim === "x" ? 0 : 1;
  var a;
  var b;
  var prevIndex = 0;
  var nextIndex = -1;
  for (var i = 0; i < len; i++) {
    b = points[i * 2 + dimIdx];
    if (isNaN(b) || isNaN(points[i * 2 + 1 - dimIdx])) {
      continue;
    }
    if (i === 0) {
      a = b;
      continue;
    }
    if (a <= xOrY && b >= xOrY || a >= xOrY && b <= xOrY) {
      nextIndex = i;
      break;
    }
    prevIndex = i;
    a = b;
  }
  return {
    range: [prevIndex, nextIndex],
    t: (xOrY - a) / (b - a)
  };
}
function anyStateShowEndLabel(seriesModel) {
  if (seriesModel.get(["endLabel", "show"])) {
    return true;
  }
  for (var i = 0; i < SPECIAL_STATES.length; i++) {
    if (seriesModel.get([SPECIAL_STATES[i], "endLabel", "show"])) {
      return true;
    }
  }
  return false;
}
function createLineClipPath(lineView, coordSys, hasAnimation, seriesModel) {
  if (isCoordinateSystemType(coordSys, "cartesian2d")) {
    var endLabelModel_1 = seriesModel.getModel("endLabel");
    var valueAnimation_1 = endLabelModel_1.get("valueAnimation");
    var data_1 = seriesModel.getData();
    var labelAnimationRecord_1 = {
      lastFrameIndex: 0
    };
    var during = anyStateShowEndLabel(seriesModel) ? function(percent, clipRect) {
      lineView._endLabelOnDuring(percent, clipRect, data_1, labelAnimationRecord_1, valueAnimation_1, endLabelModel_1, coordSys);
    } : null;
    var isHorizontal = coordSys.getBaseAxis().isHorizontal();
    var clipPath = createGridClipPath(coordSys, hasAnimation, seriesModel, function() {
      var endLabel = lineView._endLabel;
      if (endLabel && hasAnimation) {
        if (labelAnimationRecord_1.originalX != null) {
          endLabel.attr({
            x: labelAnimationRecord_1.originalX,
            y: labelAnimationRecord_1.originalY
          });
        }
      }
    }, during);
    if (!seriesModel.get("clip", true)) {
      var rectShape = clipPath.shape;
      var expandSize = Math.max(rectShape.width, rectShape.height);
      if (isHorizontal) {
        rectShape.y -= expandSize;
        rectShape.height += expandSize * 2;
      } else {
        rectShape.x -= expandSize;
        rectShape.width += expandSize * 2;
      }
    }
    if (during) {
      during(1, clipPath);
    }
    return clipPath;
  } else {
    {
      if (seriesModel.get(["endLabel", "show"])) {
        console.warn("endLabel is not supported for lines in polar systems.");
      }
    }
    return createPolarClipPath(coordSys, hasAnimation, seriesModel);
  }
}
function getEndLabelStateSpecified(endLabelModel, coordSys) {
  var baseAxis = coordSys.getBaseAxis();
  var isHorizontal = baseAxis.isHorizontal();
  var isBaseInversed = baseAxis.inverse;
  var align = isHorizontal ? isBaseInversed ? "right" : "left" : "center";
  var verticalAlign = isHorizontal ? "middle" : isBaseInversed ? "top" : "bottom";
  return {
    normal: {
      align: endLabelModel.get("align") || align,
      verticalAlign: endLabelModel.get("verticalAlign") || verticalAlign
    }
  };
}
var LineView = (
  /** @class */
  function(_super) {
    __extends(LineView2, _super);
    function LineView2() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    LineView2.prototype.init = function() {
      var lineGroup = new Group$2();
      var symbolDraw = new SymbolDraw();
      this.group.add(symbolDraw.group);
      this._symbolDraw = symbolDraw;
      this._lineGroup = lineGroup;
      this._changePolyState = zrUtil.bind(this._changePolyState, this);
    };
    LineView2.prototype.render = function(seriesModel, ecModel, api) {
      var coordSys = seriesModel.coordinateSystem;
      var group = this.group;
      var data = seriesModel.getData();
      var lineStyleModel = seriesModel.getModel("lineStyle");
      var areaStyleModel = seriesModel.getModel("areaStyle");
      var points = data.getLayout("points") || [];
      var isCoordSysPolar = coordSys.type === "polar";
      var prevCoordSys = this._coordSys;
      var symbolDraw = this._symbolDraw;
      var polyline = this._polyline;
      var polygon = this._polygon;
      var lineGroup = this._lineGroup;
      var hasAnimation = !ecModel.ssr && seriesModel.get("animation");
      var isAreaChart = !areaStyleModel.isEmpty();
      var valueOrigin = areaStyleModel.get("origin");
      var dataCoordInfo = prepareDataCoordInfo(coordSys, data, valueOrigin);
      var stackedOnPoints = isAreaChart && getStackedOnPoints(coordSys, data, dataCoordInfo);
      var showSymbol = seriesModel.get("showSymbol");
      var connectNulls = seriesModel.get("connectNulls");
      var isIgnoreFunc = showSymbol && !isCoordSysPolar && getIsIgnoreFunc(seriesModel, data, coordSys);
      var oldData = this._data;
      oldData && oldData.eachItemGraphicEl(function(el, idx) {
        if (el.__temp) {
          group.remove(el);
          oldData.setItemGraphicEl(idx, null);
        }
      });
      if (!showSymbol) {
        symbolDraw.remove();
      }
      group.add(lineGroup);
      var step = !isCoordSysPolar ? seriesModel.get("step") : false;
      var clipShapeForSymbol;
      if (coordSys && coordSys.getArea && seriesModel.get("clip", true)) {
        clipShapeForSymbol = coordSys.getArea();
        if (clipShapeForSymbol.width != null) {
          clipShapeForSymbol.x -= 0.1;
          clipShapeForSymbol.y -= 0.1;
          clipShapeForSymbol.width += 0.2;
          clipShapeForSymbol.height += 0.2;
        } else if (clipShapeForSymbol.r0) {
          clipShapeForSymbol.r0 -= 0.5;
          clipShapeForSymbol.r += 0.5;
        }
      }
      this._clipShapeForSymbol = clipShapeForSymbol;
      var visualColor = getVisualGradient(data, coordSys, api) || data.getVisual("style")[data.getVisual("drawType")];
      if (!(polyline && prevCoordSys.type === coordSys.type && step === this._step)) {
        showSymbol && symbolDraw.updateData(data, {
          isIgnore: isIgnoreFunc,
          clipShape: clipShapeForSymbol,
          disableAnimation: true,
          getSymbolPoint: function(idx) {
            return [points[idx * 2], points[idx * 2 + 1]];
          }
        });
        hasAnimation && this._initSymbolLabelAnimation(data, coordSys, clipShapeForSymbol);
        if (step) {
          if (stackedOnPoints) {
            stackedOnPoints = turnPointsIntoStep(stackedOnPoints, points, coordSys, step, connectNulls);
          }
          points = turnPointsIntoStep(points, null, coordSys, step, connectNulls);
        }
        polyline = this._newPolyline(points);
        if (isAreaChart) {
          polygon = this._newPolygon(points, stackedOnPoints);
        } else if (polygon) {
          lineGroup.remove(polygon);
          polygon = this._polygon = null;
        }
        if (!isCoordSysPolar) {
          this._initOrUpdateEndLabel(seriesModel, coordSys, convertToColorString(visualColor));
        }
        lineGroup.setClipPath(createLineClipPath(this, coordSys, true, seriesModel));
      } else {
        if (isAreaChart && !polygon) {
          polygon = this._newPolygon(points, stackedOnPoints);
        } else if (polygon && !isAreaChart) {
          lineGroup.remove(polygon);
          polygon = this._polygon = null;
        }
        if (!isCoordSysPolar) {
          this._initOrUpdateEndLabel(seriesModel, coordSys, convertToColorString(visualColor));
        }
        var oldClipPath = lineGroup.getClipPath();
        if (oldClipPath) {
          var newClipPath = createLineClipPath(this, coordSys, false, seriesModel);
          initProps(oldClipPath, {
            shape: newClipPath.shape
          }, seriesModel);
        } else {
          lineGroup.setClipPath(createLineClipPath(this, coordSys, true, seriesModel));
        }
        showSymbol && symbolDraw.updateData(data, {
          isIgnore: isIgnoreFunc,
          clipShape: clipShapeForSymbol,
          disableAnimation: true,
          getSymbolPoint: function(idx) {
            return [points[idx * 2], points[idx * 2 + 1]];
          }
        });
        if (!isPointsSame(this._stackedOnPoints, stackedOnPoints) || !isPointsSame(this._points, points)) {
          if (hasAnimation) {
            this._doUpdateAnimation(data, stackedOnPoints, coordSys, api, step, valueOrigin, connectNulls);
          } else {
            if (step) {
              if (stackedOnPoints) {
                stackedOnPoints = turnPointsIntoStep(stackedOnPoints, points, coordSys, step, connectNulls);
              }
              points = turnPointsIntoStep(points, null, coordSys, step, connectNulls);
            }
            polyline.setShape({
              points
            });
            polygon && polygon.setShape({
              points,
              stackedOnPoints
            });
          }
        }
      }
      var emphasisModel = seriesModel.getModel("emphasis");
      var focus = emphasisModel.get("focus");
      var blurScope = emphasisModel.get("blurScope");
      var emphasisDisabled = emphasisModel.get("disabled");
      polyline.useStyle(zrUtil.defaults(
        // Use color in lineStyle first
        lineStyleModel.getLineStyle(),
        {
          fill: "none",
          stroke: visualColor,
          lineJoin: "bevel"
        }
      ));
      setStatesStylesFromModel(polyline, seriesModel, "lineStyle");
      if (polyline.style.lineWidth > 0 && seriesModel.get(["emphasis", "lineStyle", "width"]) === "bolder") {
        var emphasisLineStyle = polyline.getState("emphasis").style;
        emphasisLineStyle.lineWidth = +polyline.style.lineWidth + 1;
      }
      getECData(polyline).seriesIndex = seriesModel.seriesIndex;
      toggleHoverEmphasis(polyline, focus, blurScope, emphasisDisabled);
      var smooth = getSmooth(seriesModel.get("smooth"));
      var smoothMonotone = seriesModel.get("smoothMonotone");
      polyline.setShape({
        smooth,
        smoothMonotone,
        connectNulls
      });
      if (polygon) {
        var stackedOnSeries = data.getCalculationInfo("stackedOnSeries");
        var stackedOnSmooth = 0;
        polygon.useStyle(zrUtil.defaults(areaStyleModel.getAreaStyle(), {
          fill: visualColor,
          opacity: 0.7,
          lineJoin: "bevel",
          decal: data.getVisual("style").decal
        }));
        if (stackedOnSeries) {
          stackedOnSmooth = getSmooth(stackedOnSeries.get("smooth"));
        }
        polygon.setShape({
          smooth,
          stackedOnSmooth,
          smoothMonotone,
          connectNulls
        });
        setStatesStylesFromModel(polygon, seriesModel, "areaStyle");
        getECData(polygon).seriesIndex = seriesModel.seriesIndex;
        toggleHoverEmphasis(polygon, focus, blurScope, emphasisDisabled);
      }
      var changePolyState = this._changePolyState;
      data.eachItemGraphicEl(function(el) {
        el && (el.onHoverStateChange = changePolyState);
      });
      this._polyline.onHoverStateChange = changePolyState;
      this._data = data;
      this._coordSys = coordSys;
      this._stackedOnPoints = stackedOnPoints;
      this._points = points;
      this._step = step;
      this._valueOrigin = valueOrigin;
      if (seriesModel.get("triggerLineEvent")) {
        this.packEventData(seriesModel, polyline);
        polygon && this.packEventData(seriesModel, polygon);
      }
    };
    LineView2.prototype.packEventData = function(seriesModel, el) {
      getECData(el).eventData = {
        componentType: "series",
        componentSubType: "line",
        componentIndex: seriesModel.componentIndex,
        seriesIndex: seriesModel.seriesIndex,
        seriesName: seriesModel.name,
        seriesType: "line"
      };
    };
    LineView2.prototype.highlight = function(seriesModel, ecModel, api, payload) {
      var data = seriesModel.getData();
      var dataIndex = queryDataIndex(data, payload);
      this._changePolyState("emphasis");
      if (!(dataIndex instanceof Array) && dataIndex != null && dataIndex >= 0) {
        var points = data.getLayout("points");
        var symbol = data.getItemGraphicEl(dataIndex);
        if (!symbol) {
          var x = points[dataIndex * 2];
          var y = points[dataIndex * 2 + 1];
          if (isNaN(x) || isNaN(y)) {
            return;
          }
          if (this._clipShapeForSymbol && !this._clipShapeForSymbol.contain(x, y)) {
            return;
          }
          var zlevel = seriesModel.get("zlevel") || 0;
          var z = seriesModel.get("z") || 0;
          symbol = new Symbol$1(data, dataIndex);
          symbol.x = x;
          symbol.y = y;
          symbol.setZ(zlevel, z);
          var symbolLabel = symbol.getSymbolPath().getTextContent();
          if (symbolLabel) {
            symbolLabel.zlevel = zlevel;
            symbolLabel.z = z;
            symbolLabel.z2 = this._polyline.z2 + 1;
          }
          symbol.__temp = true;
          data.setItemGraphicEl(dataIndex, symbol);
          symbol.stopSymbolAnimation(true);
          this.group.add(symbol);
        }
        symbol.highlight();
      } else {
        ChartView.prototype.highlight.call(this, seriesModel, ecModel, api, payload);
      }
    };
    LineView2.prototype.downplay = function(seriesModel, ecModel, api, payload) {
      var data = seriesModel.getData();
      var dataIndex = queryDataIndex(data, payload);
      this._changePolyState("normal");
      if (dataIndex != null && dataIndex >= 0) {
        var symbol = data.getItemGraphicEl(dataIndex);
        if (symbol) {
          if (symbol.__temp) {
            data.setItemGraphicEl(dataIndex, null);
            this.group.remove(symbol);
          } else {
            symbol.downplay();
          }
        }
      } else {
        ChartView.prototype.downplay.call(this, seriesModel, ecModel, api, payload);
      }
    };
    LineView2.prototype._changePolyState = function(toState) {
      var polygon = this._polygon;
      setStatesFlag(this._polyline, toState);
      polygon && setStatesFlag(polygon, toState);
    };
    LineView2.prototype._newPolyline = function(points) {
      var polyline = this._polyline;
      if (polyline) {
        this._lineGroup.remove(polyline);
      }
      polyline = new ECPolyline({
        shape: {
          points
        },
        segmentIgnoreThreshold: 2,
        z2: 10
      });
      this._lineGroup.add(polyline);
      this._polyline = polyline;
      return polyline;
    };
    LineView2.prototype._newPolygon = function(points, stackedOnPoints) {
      var polygon = this._polygon;
      if (polygon) {
        this._lineGroup.remove(polygon);
      }
      polygon = new ECPolygon({
        shape: {
          points,
          stackedOnPoints
        },
        segmentIgnoreThreshold: 2
      });
      this._lineGroup.add(polygon);
      this._polygon = polygon;
      return polygon;
    };
    LineView2.prototype._initSymbolLabelAnimation = function(data, coordSys, clipShape) {
      var isHorizontalOrRadial;
      var isCoordSysPolar;
      var baseAxis = coordSys.getBaseAxis();
      var isAxisInverse = baseAxis.inverse;
      if (coordSys.type === "cartesian2d") {
        isHorizontalOrRadial = baseAxis.isHorizontal();
        isCoordSysPolar = false;
      } else if (coordSys.type === "polar") {
        isHorizontalOrRadial = baseAxis.dim === "angle";
        isCoordSysPolar = true;
      }
      var seriesModel = data.hostModel;
      var seriesDuration = seriesModel.get("animationDuration");
      if (zrUtil.isFunction(seriesDuration)) {
        seriesDuration = seriesDuration(null);
      }
      var seriesDelay = seriesModel.get("animationDelay") || 0;
      var seriesDelayValue = zrUtil.isFunction(seriesDelay) ? seriesDelay(null) : seriesDelay;
      data.eachItemGraphicEl(function(symbol, idx) {
        var el = symbol;
        if (el) {
          var point = [symbol.x, symbol.y];
          var start = void 0;
          var end = void 0;
          var current = void 0;
          if (clipShape) {
            if (isCoordSysPolar) {
              var polarClip = clipShape;
              var coord = coordSys.pointToCoord(point);
              if (isHorizontalOrRadial) {
                start = polarClip.startAngle;
                end = polarClip.endAngle;
                current = -coord[1] / 180 * Math.PI;
              } else {
                start = polarClip.r0;
                end = polarClip.r;
                current = coord[0];
              }
            } else {
              var gridClip = clipShape;
              if (isHorizontalOrRadial) {
                start = gridClip.x;
                end = gridClip.x + gridClip.width;
                current = symbol.x;
              } else {
                start = gridClip.y + gridClip.height;
                end = gridClip.y;
                current = symbol.y;
              }
            }
          }
          var ratio = end === start ? 0 : (current - start) / (end - start);
          if (isAxisInverse) {
            ratio = 1 - ratio;
          }
          var delay = zrUtil.isFunction(seriesDelay) ? seriesDelay(idx) : seriesDuration * ratio + seriesDelayValue;
          var symbolPath = el.getSymbolPath();
          var text = symbolPath.getTextContent();
          el.attr({
            scaleX: 0,
            scaleY: 0
          });
          el.animateTo({
            scaleX: 1,
            scaleY: 1
          }, {
            duration: 200,
            setToFinal: true,
            delay
          });
          if (text) {
            text.animateFrom({
              style: {
                opacity: 0
              }
            }, {
              duration: 300,
              delay
            });
          }
          symbolPath.disableLabelAnimation = true;
        }
      });
    };
    LineView2.prototype._initOrUpdateEndLabel = function(seriesModel, coordSys, inheritColor) {
      var endLabelModel = seriesModel.getModel("endLabel");
      if (anyStateShowEndLabel(seriesModel)) {
        var data_2 = seriesModel.getData();
        var polyline = this._polyline;
        var points = data_2.getLayout("points");
        if (!points) {
          polyline.removeTextContent();
          this._endLabel = null;
          return;
        }
        var endLabel = this._endLabel;
        if (!endLabel) {
          endLabel = this._endLabel = new ZRText({
            z2: 200
            // should be higher than item symbol
          });
          endLabel.ignoreClip = true;
          polyline.setTextContent(this._endLabel);
          polyline.disableLabelAnimation = true;
        }
        var dataIndex = getLastIndexNotNull(points);
        if (dataIndex >= 0) {
          setLabelStyle(polyline, getLabelStatesModels(seriesModel, "endLabel"), {
            inheritColor,
            labelFetcher: seriesModel,
            labelDataIndex: dataIndex,
            defaultText: function(dataIndex2, opt, interpolatedValue) {
              return interpolatedValue != null ? getDefaultInterpolatedLabel(data_2, interpolatedValue) : getDefaultLabel(data_2, dataIndex2);
            },
            enableTextSetter: true
          }, getEndLabelStateSpecified(endLabelModel, coordSys));
          polyline.textConfig.position = null;
        }
      } else if (this._endLabel) {
        this._polyline.removeTextContent();
        this._endLabel = null;
      }
    };
    LineView2.prototype._endLabelOnDuring = function(percent, clipRect, data, animationRecord, valueAnimation, endLabelModel, coordSys) {
      var endLabel = this._endLabel;
      var polyline = this._polyline;
      if (endLabel) {
        if (percent < 1 && animationRecord.originalX == null) {
          animationRecord.originalX = endLabel.x;
          animationRecord.originalY = endLabel.y;
        }
        var points = data.getLayout("points");
        var seriesModel = data.hostModel;
        var connectNulls = seriesModel.get("connectNulls");
        var precision = endLabelModel.get("precision");
        var distance = endLabelModel.get("distance") || 0;
        var baseAxis = coordSys.getBaseAxis();
        var isHorizontal = baseAxis.isHorizontal();
        var isBaseInversed = baseAxis.inverse;
        var clipShape = clipRect.shape;
        var xOrY = isBaseInversed ? isHorizontal ? clipShape.x : clipShape.y + clipShape.height : isHorizontal ? clipShape.x + clipShape.width : clipShape.y;
        var distanceX = (isHorizontal ? distance : 0) * (isBaseInversed ? -1 : 1);
        var distanceY = (isHorizontal ? 0 : -distance) * (isBaseInversed ? -1 : 1);
        var dim = isHorizontal ? "x" : "y";
        var dataIndexRange = getIndexRange(points, xOrY, dim);
        var indices = dataIndexRange.range;
        var diff = indices[1] - indices[0];
        var value = void 0;
        if (diff >= 1) {
          if (diff > 1 && !connectNulls) {
            var pt = getPointAtIndex(points, indices[0]);
            endLabel.attr({
              x: pt[0] + distanceX,
              y: pt[1] + distanceY
            });
            valueAnimation && (value = seriesModel.getRawValue(indices[0]));
          } else {
            var pt = polyline.getPointOn(xOrY, dim);
            pt && endLabel.attr({
              x: pt[0] + distanceX,
              y: pt[1] + distanceY
            });
            var startValue = seriesModel.getRawValue(indices[0]);
            var endValue = seriesModel.getRawValue(indices[1]);
            valueAnimation && (value = interpolateRawValues(data, precision, startValue, endValue, dataIndexRange.t));
          }
          animationRecord.lastFrameIndex = indices[0];
        } else {
          var idx = percent === 1 || animationRecord.lastFrameIndex > 0 ? indices[0] : 0;
          var pt = getPointAtIndex(points, idx);
          valueAnimation && (value = seriesModel.getRawValue(idx));
          endLabel.attr({
            x: pt[0] + distanceX,
            y: pt[1] + distanceY
          });
        }
        if (valueAnimation) {
          var inner = labelInner(endLabel);
          if (typeof inner.setLabelText === "function") {
            inner.setLabelText(value);
          }
        }
      }
    };
    LineView2.prototype._doUpdateAnimation = function(data, stackedOnPoints, coordSys, api, step, valueOrigin, connectNulls) {
      var polyline = this._polyline;
      var polygon = this._polygon;
      var seriesModel = data.hostModel;
      var diff = lineAnimationDiff(this._data, data, this._stackedOnPoints, stackedOnPoints, this._coordSys, coordSys, this._valueOrigin);
      var current = diff.current;
      var stackedOnCurrent = diff.stackedOnCurrent;
      var next = diff.next;
      var stackedOnNext = diff.stackedOnNext;
      if (step) {
        stackedOnCurrent = turnPointsIntoStep(diff.stackedOnCurrent, diff.current, coordSys, step, connectNulls);
        current = turnPointsIntoStep(diff.current, null, coordSys, step, connectNulls);
        stackedOnNext = turnPointsIntoStep(diff.stackedOnNext, diff.next, coordSys, step, connectNulls);
        next = turnPointsIntoStep(diff.next, null, coordSys, step, connectNulls);
      }
      if (getBoundingDiff(current, next) > 3e3 || polygon && getBoundingDiff(stackedOnCurrent, stackedOnNext) > 3e3) {
        polyline.stopAnimation();
        polyline.setShape({
          points: next
        });
        if (polygon) {
          polygon.stopAnimation();
          polygon.setShape({
            points: next,
            stackedOnPoints: stackedOnNext
          });
        }
        return;
      }
      polyline.shape.__points = diff.current;
      polyline.shape.points = current;
      var target = {
        shape: {
          points: next
        }
      };
      if (diff.current !== current) {
        target.shape.__points = diff.next;
      }
      polyline.stopAnimation();
      updateProps$1(polyline, target, seriesModel);
      if (polygon) {
        polygon.setShape({
          // Reuse the points with polyline.
          points: current,
          stackedOnPoints: stackedOnCurrent
        });
        polygon.stopAnimation();
        updateProps$1(polygon, {
          shape: {
            stackedOnPoints: stackedOnNext
          }
        }, seriesModel);
        if (polyline.shape.points !== polygon.shape.points) {
          polygon.shape.points = polyline.shape.points;
        }
      }
      var updatedDataInfo = [];
      var diffStatus = diff.status;
      for (var i = 0; i < diffStatus.length; i++) {
        var cmd = diffStatus[i].cmd;
        if (cmd === "=") {
          var el = data.getItemGraphicEl(diffStatus[i].idx1);
          if (el) {
            updatedDataInfo.push({
              el,
              ptIdx: i
              // Index of points
            });
          }
        }
      }
      if (polyline.animators && polyline.animators.length) {
        polyline.animators[0].during(function() {
          polygon && polygon.dirtyShape();
          var points = polyline.shape.__points;
          for (var i2 = 0; i2 < updatedDataInfo.length; i2++) {
            var el2 = updatedDataInfo[i2].el;
            var offset = updatedDataInfo[i2].ptIdx * 2;
            el2.x = points[offset];
            el2.y = points[offset + 1];
            el2.markRedraw();
          }
        });
      }
    };
    LineView2.prototype.remove = function(ecModel) {
      var group = this.group;
      var oldData = this._data;
      this._lineGroup.removeAll();
      this._symbolDraw.remove(true);
      oldData && oldData.eachItemGraphicEl(function(el, idx) {
        if (el.__temp) {
          group.remove(el);
          oldData.setItemGraphicEl(idx, null);
        }
      });
      this._polyline = this._polygon = this._coordSys = this._points = this._stackedOnPoints = this._endLabel = this._data = null;
    };
    LineView2.type = "line";
    return LineView2;
  }(ChartView)
);
function pointsLayout(seriesType, forceStoreInTypedArray) {
  return {
    seriesType,
    plan: createRenderPlanner(),
    reset: function(seriesModel) {
      var data = seriesModel.getData();
      var coordSys = seriesModel.coordinateSystem;
      seriesModel.pipelineContext;
      if (!coordSys) {
        return;
      }
      var dims = map(coordSys.dimensions, function(dim) {
        return data.mapDimension(dim);
      }).slice(0, 2);
      var dimLen = dims.length;
      var stackResultDim = data.getCalculationInfo("stackResultDimension");
      if (isDimensionStacked(data, dims[0])) {
        dims[0] = stackResultDim;
      }
      if (isDimensionStacked(data, dims[1])) {
        dims[1] = stackResultDim;
      }
      var store = data.getStore();
      var dimIdx0 = data.getDimensionIndex(dims[0]);
      var dimIdx1 = data.getDimensionIndex(dims[1]);
      return dimLen && {
        progress: function(params, data2) {
          var segCount = params.end - params.start;
          var points = createFloat32Array(segCount * dimLen);
          var tmpIn = [];
          var tmpOut = [];
          for (var i = params.start, offset = 0; i < params.end; i++) {
            var point = void 0;
            if (dimLen === 1) {
              var x = store.get(dimIdx0, i);
              point = coordSys.dataToPoint(x, null, tmpOut);
            } else {
              tmpIn[0] = store.get(dimIdx0, i);
              tmpIn[1] = store.get(dimIdx1, i);
              point = coordSys.dataToPoint(tmpIn, null, tmpOut);
            }
            {
              points[offset++] = point[0];
              points[offset++] = point[1];
            }
          }
          data2.setLayout("points", points);
        }
      };
    }
  };
}
function install$5(registers) {
  registers.registerChartView(LineView);
  registers.registerSeriesModel(LineSeriesModel);
  registers.registerLayout(pointsLayout("line"));
  registers.registerVisual({
    seriesType: "line",
    reset: function(seriesModel) {
      var data = seriesModel.getData();
      var lineStyle = seriesModel.getModel("lineStyle").getLineStyle();
      if (lineStyle && !lineStyle.stroke) {
        lineStyle.stroke = data.getVisual("style").fill;
      }
      data.setVisual("legendLineStyle", lineStyle);
    }
  });
  registers.registerProcessor(registers.PRIORITY.PROCESSOR.STATISTIC, dataSample("line"));
}
var PI2 = Math.PI * 2;
var RADIAN$1 = Math.PI / 180;
function getViewRect(seriesModel, api) {
  return getLayoutRect(seriesModel.getBoxLayoutParams(), {
    width: api.getWidth(),
    height: api.getHeight()
  });
}
function getBasicPieLayout(seriesModel, api) {
  var viewRect = getViewRect(seriesModel, api);
  var center = seriesModel.get("center");
  var radius = seriesModel.get("radius");
  if (!zrUtil.isArray(radius)) {
    radius = [0, radius];
  }
  var width = parsePercent(viewRect.width, api.getWidth());
  var height = parsePercent(viewRect.height, api.getHeight());
  var size = Math.min(width, height);
  var r0 = parsePercent(radius[0], size / 2);
  var r = parsePercent(radius[1], size / 2);
  var cx;
  var cy;
  var coordSys = seriesModel.coordinateSystem;
  if (coordSys) {
    var point = coordSys.dataToPoint(center);
    cx = point[0] || 0;
    cy = point[1] || 0;
  } else {
    if (!zrUtil.isArray(center)) {
      center = [center, center];
    }
    cx = parsePercent(center[0], width) + viewRect.x;
    cy = parsePercent(center[1], height) + viewRect.y;
  }
  return {
    cx,
    cy,
    r0,
    r
  };
}
function pieLayout(seriesType, ecModel, api) {
  ecModel.eachSeriesByType(seriesType, function(seriesModel) {
    var data = seriesModel.getData();
    var valueDim = data.mapDimension("value");
    var viewRect = getViewRect(seriesModel, api);
    var _a = getBasicPieLayout(seriesModel, api), cx = _a.cx, cy = _a.cy, r = _a.r, r0 = _a.r0;
    var startAngle = -seriesModel.get("startAngle") * RADIAN$1;
    var endAngle = seriesModel.get("endAngle");
    var padAngle = seriesModel.get("padAngle") * RADIAN$1;
    endAngle = endAngle === "auto" ? startAngle - PI2 : -endAngle * RADIAN$1;
    var minAngle = seriesModel.get("minAngle") * RADIAN$1;
    var minAndPadAngle = minAngle + padAngle;
    var validDataCount = 0;
    data.each(valueDim, function(value) {
      !isNaN(value) && validDataCount++;
    });
    var sum = data.getSum(valueDim);
    var unitRadian = Math.PI / (sum || validDataCount) * 2;
    var clockwise = seriesModel.get("clockwise");
    var roseType = seriesModel.get("roseType");
    var stillShowZeroSum = seriesModel.get("stillShowZeroSum");
    var extent = data.getDataExtent(valueDim);
    extent[0] = 0;
    var dir3 = clockwise ? 1 : -1;
    var angles = [startAngle, endAngle];
    var halfPadAngle = dir3 * padAngle / 2;
    normalizeArcAngles(angles, !clockwise);
    startAngle = angles[0], endAngle = angles[1];
    var layoutData = getSeriesLayoutData(seriesModel);
    layoutData.startAngle = startAngle;
    layoutData.endAngle = endAngle;
    layoutData.clockwise = clockwise;
    var angleRange = Math.abs(endAngle - startAngle);
    var restAngle = angleRange;
    var valueSumLargerThanMinAngle = 0;
    var currentAngle = startAngle;
    data.setLayout({
      viewRect,
      r
    });
    data.each(valueDim, function(value, idx) {
      var angle;
      if (isNaN(value)) {
        data.setItemLayout(idx, {
          angle: NaN,
          startAngle: NaN,
          endAngle: NaN,
          clockwise,
          cx,
          cy,
          r0,
          r: roseType ? NaN : r
        });
        return;
      }
      if (roseType !== "area") {
        angle = sum === 0 && stillShowZeroSum ? unitRadian : value * unitRadian;
      } else {
        angle = angleRange / validDataCount;
      }
      if (angle < minAndPadAngle) {
        angle = minAndPadAngle;
        restAngle -= minAndPadAngle;
      } else {
        valueSumLargerThanMinAngle += value;
      }
      var endAngle2 = currentAngle + dir3 * angle;
      var actualStartAngle = 0;
      var actualEndAngle = 0;
      if (padAngle > angle) {
        actualStartAngle = currentAngle + dir3 * angle / 2;
        actualEndAngle = actualStartAngle;
      } else {
        actualStartAngle = currentAngle + halfPadAngle;
        actualEndAngle = endAngle2 - halfPadAngle;
      }
      data.setItemLayout(idx, {
        angle,
        startAngle: actualStartAngle,
        endAngle: actualEndAngle,
        clockwise,
        cx,
        cy,
        r0,
        r: roseType ? linearMap(value, extent, [r0, r]) : r
      });
      currentAngle = endAngle2;
    });
    if (restAngle < PI2 && validDataCount) {
      if (restAngle <= 1e-3) {
        var angle_1 = angleRange / validDataCount;
        data.each(valueDim, function(value, idx) {
          if (!isNaN(value)) {
            var layout_1 = data.getItemLayout(idx);
            layout_1.angle = angle_1;
            var actualStartAngle = 0;
            var actualEndAngle = 0;
            if (angle_1 < padAngle) {
              actualStartAngle = startAngle + dir3 * (idx + 1 / 2) * angle_1;
              actualEndAngle = actualStartAngle;
            } else {
              actualStartAngle = startAngle + dir3 * idx * angle_1 + halfPadAngle;
              actualEndAngle = startAngle + dir3 * (idx + 1) * angle_1 - halfPadAngle;
            }
            layout_1.startAngle = actualStartAngle;
            layout_1.endAngle = actualEndAngle;
          }
        });
      } else {
        unitRadian = restAngle / valueSumLargerThanMinAngle;
        currentAngle = startAngle;
        data.each(valueDim, function(value, idx) {
          if (!isNaN(value)) {
            var layout_2 = data.getItemLayout(idx);
            var angle = layout_2.angle === minAndPadAngle ? minAndPadAngle : value * unitRadian;
            var actualStartAngle = 0;
            var actualEndAngle = 0;
            if (angle < padAngle) {
              actualStartAngle = currentAngle + dir3 * angle / 2;
              actualEndAngle = actualStartAngle;
            } else {
              actualStartAngle = currentAngle + halfPadAngle;
              actualEndAngle = currentAngle + dir3 * angle - halfPadAngle;
            }
            layout_2.startAngle = actualStartAngle;
            layout_2.endAngle = actualEndAngle;
            currentAngle += dir3 * angle;
          }
        });
      }
    }
  });
}
var getSeriesLayoutData = makeInner();
function dataFilter(seriesType) {
  return {
    seriesType,
    reset: function(seriesModel, ecModel) {
      var legendModels = ecModel.findComponents({
        mainType: "legend"
      });
      if (!legendModels || !legendModels.length) {
        return;
      }
      var data = seriesModel.getData();
      data.filterSelf(function(idx) {
        var name = data.getName(idx);
        for (var i = 0; i < legendModels.length; i++) {
          if (!legendModels[i].isSelected(name)) {
            return false;
          }
        }
        return true;
      });
    }
  };
}
var RADIAN = Math.PI / 180;
function adjustSingleSide(list, cx, cy, r, dir3, viewWidth, viewHeight, viewLeft, viewTop, farthestX) {
  if (list.length < 2) {
    return;
  }
  function recalculateXOnSemiToAlignOnEllipseCurve(semi) {
    var rB = semi.rB;
    var rB2 = rB * rB;
    for (var i2 = 0; i2 < semi.list.length; i2++) {
      var item = semi.list[i2];
      var dy = Math.abs(item.label.y - cy);
      var rA = r + item.len;
      var rA2 = rA * rA;
      var dx2 = Math.sqrt(Math.abs((1 - dy * dy / rB2) * rA2));
      var newX = cx + (dx2 + item.len2) * dir3;
      var deltaX = newX - item.label.x;
      var newTargetWidth = item.targetTextWidth - deltaX * dir3;
      constrainTextWidth(item, newTargetWidth, true);
      item.label.x = newX;
    }
  }
  function recalculateX(items) {
    var topSemi = {
      list: [],
      maxY: 0
    };
    var bottomSemi = {
      list: [],
      maxY: 0
    };
    for (var i2 = 0; i2 < items.length; i2++) {
      if (items[i2].labelAlignTo !== "none") {
        continue;
      }
      var item = items[i2];
      var semi = item.label.y > cy ? bottomSemi : topSemi;
      var dy = Math.abs(item.label.y - cy);
      if (dy >= semi.maxY) {
        var dx2 = item.label.x - cx - item.len2 * dir3;
        var rA = r + item.len;
        var rB = Math.abs(dx2) < rA ? Math.sqrt(dy * dy / (1 - dx2 * dx2 / rA / rA)) : rA;
        semi.rB = rB;
        semi.maxY = dy;
      }
      semi.list.push(item);
    }
    recalculateXOnSemiToAlignOnEllipseCurve(topSemi);
    recalculateXOnSemiToAlignOnEllipseCurve(bottomSemi);
  }
  var len = list.length;
  for (var i = 0; i < len; i++) {
    if (list[i].position === "outer" && list[i].labelAlignTo === "labelLine") {
      var dx = list[i].label.x - farthestX;
      list[i].linePoints[1][0] += dx;
      list[i].label.x = farthestX;
    }
  }
  if (shiftLayoutOnY(list, viewTop, viewTop + viewHeight)) {
    recalculateX(list);
  }
}
function avoidOverlap(labelLayoutList, cx, cy, r, viewWidth, viewHeight, viewLeft, viewTop) {
  var leftList = [];
  var rightList = [];
  var leftmostX = Number.MAX_VALUE;
  var rightmostX = -Number.MAX_VALUE;
  for (var i = 0; i < labelLayoutList.length; i++) {
    var label = labelLayoutList[i].label;
    if (isPositionCenter(labelLayoutList[i])) {
      continue;
    }
    if (label.x < cx) {
      leftmostX = Math.min(leftmostX, label.x);
      leftList.push(labelLayoutList[i]);
    } else {
      rightmostX = Math.max(rightmostX, label.x);
      rightList.push(labelLayoutList[i]);
    }
  }
  for (var i = 0; i < labelLayoutList.length; i++) {
    var layout = labelLayoutList[i];
    if (!isPositionCenter(layout) && layout.linePoints) {
      if (layout.labelStyleWidth != null) {
        continue;
      }
      var label = layout.label;
      var linePoints = layout.linePoints;
      var targetTextWidth = void 0;
      if (layout.labelAlignTo === "edge") {
        if (label.x < cx) {
          targetTextWidth = linePoints[2][0] - layout.labelDistance - viewLeft - layout.edgeDistance;
        } else {
          targetTextWidth = viewLeft + viewWidth - layout.edgeDistance - linePoints[2][0] - layout.labelDistance;
        }
      } else if (layout.labelAlignTo === "labelLine") {
        if (label.x < cx) {
          targetTextWidth = leftmostX - viewLeft - layout.bleedMargin;
        } else {
          targetTextWidth = viewLeft + viewWidth - rightmostX - layout.bleedMargin;
        }
      } else {
        if (label.x < cx) {
          targetTextWidth = label.x - viewLeft - layout.bleedMargin;
        } else {
          targetTextWidth = viewLeft + viewWidth - label.x - layout.bleedMargin;
        }
      }
      layout.targetTextWidth = targetTextWidth;
      constrainTextWidth(layout, targetTextWidth);
    }
  }
  adjustSingleSide(rightList, cx, cy, r, 1, viewWidth, viewHeight, viewLeft, viewTop, rightmostX);
  adjustSingleSide(leftList, cx, cy, r, -1, viewWidth, viewHeight, viewLeft, viewTop, leftmostX);
  for (var i = 0; i < labelLayoutList.length; i++) {
    var layout = labelLayoutList[i];
    if (!isPositionCenter(layout) && layout.linePoints) {
      var label = layout.label;
      var linePoints = layout.linePoints;
      var isAlignToEdge = layout.labelAlignTo === "edge";
      var padding = label.style.padding;
      var paddingH = padding ? padding[1] + padding[3] : 0;
      var extraPaddingH = label.style.backgroundColor ? 0 : paddingH;
      var realTextWidth = layout.rect.width + extraPaddingH;
      var dist = linePoints[1][0] - linePoints[2][0];
      if (isAlignToEdge) {
        if (label.x < cx) {
          linePoints[2][0] = viewLeft + layout.edgeDistance + realTextWidth + layout.labelDistance;
        } else {
          linePoints[2][0] = viewLeft + viewWidth - layout.edgeDistance - realTextWidth - layout.labelDistance;
        }
      } else {
        if (label.x < cx) {
          linePoints[2][0] = label.x + layout.labelDistance;
        } else {
          linePoints[2][0] = label.x - layout.labelDistance;
        }
        linePoints[1][0] = linePoints[2][0] + dist;
      }
      linePoints[1][1] = linePoints[2][1] = label.y;
    }
  }
}
function constrainTextWidth(layout, availableWidth, forceRecalculate) {
  if (forceRecalculate === void 0) {
    forceRecalculate = false;
  }
  if (layout.labelStyleWidth != null) {
    return;
  }
  var label = layout.label;
  var style = label.style;
  var textRect = layout.rect;
  var bgColor = style.backgroundColor;
  var padding = style.padding;
  var paddingH = padding ? padding[1] + padding[3] : 0;
  var overflow = style.overflow;
  var oldOuterWidth = textRect.width + (bgColor ? 0 : paddingH);
  if (availableWidth < oldOuterWidth || forceRecalculate) {
    var oldHeight = textRect.height;
    if (overflow && overflow.match("break")) {
      label.setStyle("backgroundColor", null);
      label.setStyle("width", availableWidth - paddingH);
      var innerRect = label.getBoundingRect();
      label.setStyle("width", Math.ceil(innerRect.width));
      label.setStyle("backgroundColor", bgColor);
    } else {
      var availableInnerWidth = availableWidth - paddingH;
      var newWidth = availableWidth < oldOuterWidth ? availableInnerWidth : (
        // Current available width is enough, but the text may have
        // already been wrapped with a smaller available width.
        forceRecalculate ? availableInnerWidth > layout.unconstrainedWidth ? null : availableInnerWidth : null
      );
      label.setStyle("width", newWidth);
    }
    var newRect = label.getBoundingRect();
    textRect.width = newRect.width;
    var margin = (label.style.margin || 0) + 2.1;
    textRect.height = newRect.height + margin;
    textRect.y -= (textRect.height - oldHeight) / 2;
  }
}
function isPositionCenter(sectorShape) {
  return sectorShape.position === "center";
}
function pieLabelLayout(seriesModel) {
  var data = seriesModel.getData();
  var labelLayoutList = [];
  var cx;
  var cy;
  var hasLabelRotate = false;
  var minShowLabelRadian = (seriesModel.get("minShowLabelAngle") || 0) * RADIAN;
  var viewRect = data.getLayout("viewRect");
  var r = data.getLayout("r");
  var viewWidth = viewRect.width;
  var viewLeft = viewRect.x;
  var viewTop = viewRect.y;
  var viewHeight = viewRect.height;
  function setNotShow(el) {
    el.ignore = true;
  }
  function isLabelShown(label2) {
    if (!label2.ignore) {
      return true;
    }
    for (var key in label2.states) {
      if (label2.states[key].ignore === false) {
        return true;
      }
    }
    return false;
  }
  data.each(function(idx) {
    var sector = data.getItemGraphicEl(idx);
    var sectorShape = sector.shape;
    var label2 = sector.getTextContent();
    var labelLine2 = sector.getTextGuideLine();
    var itemModel = data.getItemModel(idx);
    var labelModel = itemModel.getModel("label");
    var labelPosition = labelModel.get("position") || itemModel.get(["emphasis", "label", "position"]);
    var labelDistance = labelModel.get("distanceToLabelLine");
    var labelAlignTo = labelModel.get("alignTo");
    var edgeDistance = parsePercent(labelModel.get("edgeDistance"), viewWidth);
    var bleedMargin = labelModel.get("bleedMargin");
    var labelLineModel = itemModel.getModel("labelLine");
    var labelLineLen = labelLineModel.get("length");
    labelLineLen = parsePercent(labelLineLen, viewWidth);
    var labelLineLen2 = labelLineModel.get("length2");
    labelLineLen2 = parsePercent(labelLineLen2, viewWidth);
    if (Math.abs(sectorShape.endAngle - sectorShape.startAngle) < minShowLabelRadian) {
      each$1(label2.states, setNotShow);
      label2.ignore = true;
      if (labelLine2) {
        each$1(labelLine2.states, setNotShow);
        labelLine2.ignore = true;
      }
      return;
    }
    if (!isLabelShown(label2)) {
      return;
    }
    var midAngle = (sectorShape.startAngle + sectorShape.endAngle) / 2;
    var nx = Math.cos(midAngle);
    var ny = Math.sin(midAngle);
    var textX;
    var textY;
    var linePoints2;
    var textAlign;
    cx = sectorShape.cx;
    cy = sectorShape.cy;
    var isLabelInside = labelPosition === "inside" || labelPosition === "inner";
    if (labelPosition === "center") {
      textX = sectorShape.cx;
      textY = sectorShape.cy;
      textAlign = "center";
    } else {
      var x1 = (isLabelInside ? (sectorShape.r + sectorShape.r0) / 2 * nx : sectorShape.r * nx) + cx;
      var y1 = (isLabelInside ? (sectorShape.r + sectorShape.r0) / 2 * ny : sectorShape.r * ny) + cy;
      textX = x1 + nx * 3;
      textY = y1 + ny * 3;
      if (!isLabelInside) {
        var x2 = x1 + nx * (labelLineLen + r - sectorShape.r);
        var y2 = y1 + ny * (labelLineLen + r - sectorShape.r);
        var x3 = x2 + (nx < 0 ? -1 : 1) * labelLineLen2;
        var y3 = y2;
        if (labelAlignTo === "edge") {
          textX = nx < 0 ? viewLeft + edgeDistance : viewLeft + viewWidth - edgeDistance;
        } else {
          textX = x3 + (nx < 0 ? -labelDistance : labelDistance);
        }
        textY = y3;
        linePoints2 = [[x1, y1], [x2, y2], [x3, y3]];
      }
      textAlign = isLabelInside ? "center" : labelAlignTo === "edge" ? nx > 0 ? "right" : "left" : nx > 0 ? "left" : "right";
    }
    var PI = Math.PI;
    var labelRotate = 0;
    var rotate = labelModel.get("rotate");
    if (isNumber(rotate)) {
      labelRotate = rotate * (PI / 180);
    } else if (labelPosition === "center") {
      labelRotate = 0;
    } else if (rotate === "radial" || rotate === true) {
      var radialAngle = nx < 0 ? -midAngle + PI : -midAngle;
      labelRotate = radialAngle;
    } else if (rotate === "tangential" && labelPosition !== "outside" && labelPosition !== "outer") {
      var rad = Math.atan2(nx, ny);
      if (rad < 0) {
        rad = PI * 2 + rad;
      }
      var isDown = ny > 0;
      if (isDown) {
        rad = PI + rad;
      }
      labelRotate = rad - PI;
    }
    hasLabelRotate = !!labelRotate;
    label2.x = textX;
    label2.y = textY;
    label2.rotation = labelRotate;
    label2.setStyle({
      verticalAlign: "middle"
    });
    if (!isLabelInside) {
      var textRect = label2.getBoundingRect().clone();
      textRect.applyTransform(label2.getComputedTransform());
      var margin = (label2.style.margin || 0) + 2.1;
      textRect.y -= margin / 2;
      textRect.height += margin;
      labelLayoutList.push({
        label: label2,
        labelLine: labelLine2,
        position: labelPosition,
        len: labelLineLen,
        len2: labelLineLen2,
        minTurnAngle: labelLineModel.get("minTurnAngle"),
        maxSurfaceAngle: labelLineModel.get("maxSurfaceAngle"),
        surfaceNormal: new Point(nx, ny),
        linePoints: linePoints2,
        textAlign,
        labelDistance,
        labelAlignTo,
        edgeDistance,
        bleedMargin,
        rect: textRect,
        unconstrainedWidth: textRect.width,
        labelStyleWidth: label2.style.width
      });
    } else {
      label2.setStyle({
        align: textAlign
      });
      var selectState2 = label2.states.select;
      if (selectState2) {
        selectState2.x += label2.x;
        selectState2.y += label2.y;
      }
    }
    sector.setTextConfig({
      inside: isLabelInside
    });
  });
  if (!hasLabelRotate && seriesModel.get("avoidLabelOverlap")) {
    avoidOverlap(labelLayoutList, cx, cy, r, viewWidth, viewHeight, viewLeft, viewTop);
  }
  for (var i = 0; i < labelLayoutList.length; i++) {
    var layout = labelLayoutList[i];
    var label = layout.label;
    var labelLine = layout.labelLine;
    var notShowLabel = isNaN(label.x) || isNaN(label.y);
    if (label) {
      label.setStyle({
        align: layout.textAlign
      });
      if (notShowLabel) {
        each$1(label.states, setNotShow);
        label.ignore = true;
      }
      var selectState = label.states.select;
      if (selectState) {
        selectState.x += label.x;
        selectState.y += label.y;
      }
    }
    if (labelLine) {
      var linePoints = layout.linePoints;
      if (notShowLabel || !linePoints) {
        each$1(labelLine.states, setNotShow);
        labelLine.ignore = true;
      } else {
        limitTurnAngle(linePoints, layout.minTurnAngle);
        limitSurfaceAngle(linePoints, layout.surfaceNormal, layout.maxSurfaceAngle);
        labelLine.setShape({
          points: linePoints
        });
        label.__hostTarget.textGuideLineConfig = {
          anchor: new Point(linePoints[0][0], linePoints[0][1])
        };
      }
    }
  }
}
var PiePiece = (
  /** @class */
  function(_super) {
    __extends(PiePiece2, _super);
    function PiePiece2(data, idx, startAngle) {
      var _this = _super.call(this) || this;
      _this.z2 = 2;
      var text = new ZRText();
      _this.setTextContent(text);
      _this.updateData(data, idx, startAngle, true);
      return _this;
    }
    PiePiece2.prototype.updateData = function(data, idx, startAngle, firstCreate) {
      var sector = this;
      var seriesModel = data.hostModel;
      var itemModel = data.getItemModel(idx);
      var emphasisModel = itemModel.getModel("emphasis");
      var layout = data.getItemLayout(idx);
      var sectorShape = extend(getSectorCornerRadius(itemModel.getModel("itemStyle"), layout, true), layout);
      if (isNaN(sectorShape.startAngle)) {
        sector.setShape(sectorShape);
        return;
      }
      if (firstCreate) {
        sector.setShape(sectorShape);
        var animationType = seriesModel.getShallow("animationType");
        if (seriesModel.ecModel.ssr) {
          initProps(sector, {
            scaleX: 0,
            scaleY: 0
          }, seriesModel, {
            dataIndex: idx,
            isFrom: true
          });
          sector.originX = sectorShape.cx;
          sector.originY = sectorShape.cy;
        } else if (animationType === "scale") {
          sector.shape.r = layout.r0;
          initProps(sector, {
            shape: {
              r: layout.r
            }
          }, seriesModel, idx);
        } else {
          if (startAngle != null) {
            sector.setShape({
              startAngle,
              endAngle: startAngle
            });
            initProps(sector, {
              shape: {
                startAngle: layout.startAngle,
                endAngle: layout.endAngle
              }
            }, seriesModel, idx);
          } else {
            sector.shape.endAngle = layout.startAngle;
            updateProps$1(sector, {
              shape: {
                endAngle: layout.endAngle
              }
            }, seriesModel, idx);
          }
        }
      } else {
        saveOldStyle(sector);
        updateProps$1(sector, {
          shape: sectorShape
        }, seriesModel, idx);
      }
      sector.useStyle(data.getItemVisual(idx, "style"));
      setStatesStylesFromModel(sector, itemModel);
      var midAngle = (layout.startAngle + layout.endAngle) / 2;
      var offset = seriesModel.get("selectedOffset");
      var dx = Math.cos(midAngle) * offset;
      var dy = Math.sin(midAngle) * offset;
      var cursorStyle = itemModel.getShallow("cursor");
      cursorStyle && sector.attr("cursor", cursorStyle);
      this._updateLabel(seriesModel, data, idx);
      sector.ensureState("emphasis").shape = extend({
        r: layout.r + (emphasisModel.get("scale") ? emphasisModel.get("scaleSize") || 0 : 0)
      }, getSectorCornerRadius(emphasisModel.getModel("itemStyle"), layout));
      extend(sector.ensureState("select"), {
        x: dx,
        y: dy,
        shape: getSectorCornerRadius(itemModel.getModel(["select", "itemStyle"]), layout)
      });
      extend(sector.ensureState("blur"), {
        shape: getSectorCornerRadius(itemModel.getModel(["blur", "itemStyle"]), layout)
      });
      var labelLine = sector.getTextGuideLine();
      var labelText = sector.getTextContent();
      labelLine && extend(labelLine.ensureState("select"), {
        x: dx,
        y: dy
      });
      extend(labelText.ensureState("select"), {
        x: dx,
        y: dy
      });
      toggleHoverEmphasis(this, emphasisModel.get("focus"), emphasisModel.get("blurScope"), emphasisModel.get("disabled"));
    };
    PiePiece2.prototype._updateLabel = function(seriesModel, data, idx) {
      var sector = this;
      var itemModel = data.getItemModel(idx);
      var labelLineModel = itemModel.getModel("labelLine");
      var style = data.getItemVisual(idx, "style");
      var visualColor = style && style.fill;
      var visualOpacity = style && style.opacity;
      setLabelStyle(sector, getLabelStatesModels(itemModel), {
        labelFetcher: data.hostModel,
        labelDataIndex: idx,
        inheritColor: visualColor,
        defaultOpacity: visualOpacity,
        defaultText: seriesModel.getFormattedLabel(idx, "normal") || data.getName(idx)
      });
      var labelText = sector.getTextContent();
      sector.setTextConfig({
        // reset position, rotation
        position: null,
        rotation: null
      });
      labelText.attr({
        z2: 10
      });
      var labelPosition = seriesModel.get(["label", "position"]);
      if (labelPosition !== "outside" && labelPosition !== "outer") {
        sector.removeTextGuideLine();
      } else {
        var polyline = this.getTextGuideLine();
        if (!polyline) {
          polyline = new Polyline();
          this.setTextGuideLine(polyline);
        }
        setLabelLineStyle(this, getLabelLineStatesModels(itemModel), {
          stroke: visualColor,
          opacity: retrieve3(labelLineModel.get(["lineStyle", "opacity"]), visualOpacity, 1)
        });
      }
    };
    return PiePiece2;
  }(Sector)
);
var PieView = (
  /** @class */
  function(_super) {
    __extends(PieView2, _super);
    function PieView2() {
      var _this = _super !== null && _super.apply(this, arguments) || this;
      _this.ignoreLabelLineUpdate = true;
      return _this;
    }
    PieView2.prototype.render = function(seriesModel, ecModel, api, payload) {
      var data = seriesModel.getData();
      var oldData = this._data;
      var group = this.group;
      var startAngle;
      if (!oldData && data.count() > 0) {
        var shape = data.getItemLayout(0);
        for (var s = 1; isNaN(shape && shape.startAngle) && s < data.count(); ++s) {
          shape = data.getItemLayout(s);
        }
        if (shape) {
          startAngle = shape.startAngle;
        }
      }
      if (this._emptyCircleSector) {
        group.remove(this._emptyCircleSector);
      }
      if (data.count() === 0 && seriesModel.get("showEmptyCircle")) {
        var layoutData = getSeriesLayoutData(seriesModel);
        var sector = new Sector({
          shape: extend(getBasicPieLayout(seriesModel, api), layoutData)
        });
        sector.useStyle(seriesModel.getModel("emptyCircleStyle").getItemStyle());
        this._emptyCircleSector = sector;
        group.add(sector);
      }
      data.diff(oldData).add(function(idx) {
        var piePiece = new PiePiece(data, idx, startAngle);
        data.setItemGraphicEl(idx, piePiece);
        group.add(piePiece);
      }).update(function(newIdx, oldIdx) {
        var piePiece = oldData.getItemGraphicEl(oldIdx);
        piePiece.updateData(data, newIdx, startAngle);
        piePiece.off("click");
        group.add(piePiece);
        data.setItemGraphicEl(newIdx, piePiece);
      }).remove(function(idx) {
        var piePiece = oldData.getItemGraphicEl(idx);
        removeElementWithFadeOut(piePiece, seriesModel, idx);
      }).execute();
      pieLabelLayout(seriesModel);
      if (seriesModel.get("animationTypeUpdate") !== "expansion") {
        this._data = data;
      }
    };
    PieView2.prototype.dispose = function() {
    };
    PieView2.prototype.containPoint = function(point, seriesModel) {
      var data = seriesModel.getData();
      var itemLayout = data.getItemLayout(0);
      if (itemLayout) {
        var dx = point[0] - itemLayout.cx;
        var dy = point[1] - itemLayout.cy;
        var radius = Math.sqrt(dx * dx + dy * dy);
        return radius <= itemLayout.r && radius >= itemLayout.r0;
      }
    };
    PieView2.type = "pie";
    return PieView2;
  }(ChartView)
);
function createSeriesDataSimply(seriesModel, opt, nameList) {
  opt = isArray(opt) && {
    coordDimensions: opt
  } || extend({
    encodeDefine: seriesModel.getEncode()
  }, opt);
  var source = seriesModel.getSource();
  var dimensions = prepareSeriesDataSchema(source, opt).dimensions;
  var list = new SeriesData(dimensions, seriesModel);
  list.initData(source, nameList);
  return list;
}
var LegendVisualProvider = (
  /** @class */
  function() {
    function LegendVisualProvider2(getDataWithEncodedVisual, getRawData) {
      this._getDataWithEncodedVisual = getDataWithEncodedVisual;
      this._getRawData = getRawData;
    }
    LegendVisualProvider2.prototype.getAllNames = function() {
      var rawData = this._getRawData();
      return rawData.mapArray(rawData.getName);
    };
    LegendVisualProvider2.prototype.containName = function(name) {
      var rawData = this._getRawData();
      return rawData.indexOfName(name) >= 0;
    };
    LegendVisualProvider2.prototype.indexOfName = function(name) {
      var dataWithEncodedVisual = this._getDataWithEncodedVisual();
      return dataWithEncodedVisual.indexOfName(name);
    };
    LegendVisualProvider2.prototype.getItemVisual = function(dataIndex, key) {
      var dataWithEncodedVisual = this._getDataWithEncodedVisual();
      return dataWithEncodedVisual.getItemVisual(dataIndex, key);
    };
    return LegendVisualProvider2;
  }()
);
var innerData = makeInner();
var PieSeriesModel = (
  /** @class */
  function(_super) {
    __extends(PieSeriesModel2, _super);
    function PieSeriesModel2() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    PieSeriesModel2.prototype.init = function(option) {
      _super.prototype.init.apply(this, arguments);
      this.legendVisualProvider = new LegendVisualProvider(zrUtil.bind(this.getData, this), zrUtil.bind(this.getRawData, this));
      this._defaultLabelLine(option);
    };
    PieSeriesModel2.prototype.mergeOption = function() {
      _super.prototype.mergeOption.apply(this, arguments);
    };
    PieSeriesModel2.prototype.getInitialData = function() {
      return createSeriesDataSimply(this, {
        coordDimensions: ["value"],
        encodeDefaulter: zrUtil.curry(makeSeriesEncodeForNameBased, this)
      });
    };
    PieSeriesModel2.prototype.getDataParams = function(dataIndex) {
      var data = this.getData();
      var dataInner = innerData(data);
      var seats = dataInner.seats;
      if (!seats) {
        var valueList_1 = [];
        data.each(data.mapDimension("value"), function(value) {
          valueList_1.push(value);
        });
        seats = dataInner.seats = getPercentSeats(valueList_1, data.hostModel.get("percentPrecision"));
      }
      var params = _super.prototype.getDataParams.call(this, dataIndex);
      params.percent = seats[dataIndex] || 0;
      params.$vars.push("percent");
      return params;
    };
    PieSeriesModel2.prototype._defaultLabelLine = function(option) {
      defaultEmphasis(option, "labelLine", ["show"]);
      var labelLineNormalOpt = option.labelLine;
      var labelLineEmphasisOpt = option.emphasis.labelLine;
      labelLineNormalOpt.show = labelLineNormalOpt.show && option.label.show;
      labelLineEmphasisOpt.show = labelLineEmphasisOpt.show && option.emphasis.label.show;
    };
    PieSeriesModel2.type = "series.pie";
    PieSeriesModel2.defaultOption = {
      // zlevel: 0,
      z: 2,
      legendHoverLink: true,
      colorBy: "data",
      // 默认全局居中
      center: ["50%", "50%"],
      radius: [0, "75%"],
      // 默认顺时针
      clockwise: true,
      startAngle: 90,
      endAngle: "auto",
      padAngle: 0,
      // 最小角度改为0
      minAngle: 0,
      // If the angle of a sector less than `minShowLabelAngle`,
      // the label will not be displayed.
      minShowLabelAngle: 0,
      // 选中时扇区偏移量
      selectedOffset: 10,
      // 选择模式，默认关闭，可选single，multiple
      // selectedMode: false,
      // 南丁格尔玫瑰图模式，'radius'（半径） | 'area'（面积）
      // roseType: null,
      percentPrecision: 2,
      // If still show when all data zero.
      stillShowZeroSum: true,
      // cursor: null,
      left: 0,
      top: 0,
      right: 0,
      bottom: 0,
      width: null,
      height: null,
      label: {
        // color: 'inherit',
        // If rotate around circle
        rotate: 0,
        show: true,
        overflow: "truncate",
        // 'outer', 'inside', 'center'
        position: "outer",
        // 'none', 'labelLine', 'edge'. Works only when position is 'outer'
        alignTo: "none",
        // Closest distance between label and chart edge.
        // Works only position is 'outer' and alignTo is 'edge'.
        edgeDistance: "25%",
        // Works only position is 'outer' and alignTo is not 'edge'.
        bleedMargin: 10,
        // Distance between text and label line.
        distanceToLabelLine: 5
        // formatter: 标签文本格式器，同 tooltip.formatter，不支持异步回调
        // 默认使用全局文本样式，详见 textStyle
        // distance: 当position为inner时有效，为label位置到圆心的距离与圆半径(环状图为内外半径和)的比例系数
      },
      // Enabled when label.normal.position is 'outer'
      labelLine: {
        show: true,
        // 引导线两段中的第一段长度
        length: 15,
        // 引导线两段中的第二段长度
        length2: 15,
        smooth: false,
        minTurnAngle: 90,
        maxSurfaceAngle: 90,
        lineStyle: {
          // color: 各异,
          width: 1,
          type: "solid"
        }
      },
      itemStyle: {
        borderWidth: 1,
        borderJoin: "round"
      },
      showEmptyCircle: true,
      emptyCircleStyle: {
        color: "lightgray",
        opacity: 1
      },
      labelLayout: {
        // Hide the overlapped label.
        hideOverlap: true
      },
      emphasis: {
        scale: true,
        scaleSize: 5
      },
      // If use strategy to avoid label overlapping
      avoidLabelOverlap: true,
      // Animation type. Valid values: expansion, scale
      animationType: "expansion",
      animationDuration: 1e3,
      // Animation type when update. Valid values: transition, expansion
      animationTypeUpdate: "transition",
      animationEasingUpdate: "cubicInOut",
      animationDurationUpdate: 500,
      animationEasing: "cubicInOut"
    };
    return PieSeriesModel2;
  }(SeriesModel)
);
function negativeDataFilter(seriesType) {
  return {
    seriesType,
    reset: function(seriesModel, ecModel) {
      var data = seriesModel.getData();
      data.filterSelf(function(idx) {
        var valueDim = data.mapDimension("value");
        var curValue = data.get(valueDim, idx);
        if (isNumber(curValue) && !isNaN(curValue) && curValue < 0) {
          return false;
        }
        return true;
      });
    }
  };
}
function install$4(registers) {
  registers.registerChartView(PieView);
  registers.registerSeriesModel(PieSeriesModel);
  createLegacyDataSelectAction("pie", registers.registerAction);
  registers.registerLayout(curry$1(pieLayout, "pie"));
  registers.registerProcessor(dataFilter("pie"));
  registers.registerProcessor(negativeDataFilter("pie"));
}
function makeBackground(rect, componentModel) {
  var padding = normalizeCssArray(componentModel.get("padding"));
  var style = componentModel.getItemStyle(["color", "opacity"]);
  style.fill = componentModel.get("backgroundColor");
  rect = new Rect({
    shape: {
      x: rect.x - padding[3],
      y: rect.y - padding[0],
      width: rect.width + padding[1] + padding[3],
      height: rect.height + padding[0] + padding[2],
      r: componentModel.get("borderRadius")
    },
    style,
    silent: true,
    z2: -1
  });
  return rect;
}
var TitleModel = (
  /** @class */
  function(_super) {
    __extends(TitleModel2, _super);
    function TitleModel2() {
      var _this = _super !== null && _super.apply(this, arguments) || this;
      _this.type = TitleModel2.type;
      _this.layoutMode = {
        type: "box",
        ignoreSize: true
      };
      return _this;
    }
    TitleModel2.type = "title";
    TitleModel2.defaultOption = {
      // zlevel: 0,
      z: 6,
      show: true,
      text: "",
      target: "blank",
      subtext: "",
      subtarget: "blank",
      left: 0,
      top: 0,
      backgroundColor: "rgba(0,0,0,0)",
      borderColor: "#ccc",
      borderWidth: 0,
      padding: 5,
      itemGap: 10,
      textStyle: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#464646"
      },
      subtextStyle: {
        fontSize: 12,
        color: "#6E7079"
      }
    };
    return TitleModel2;
  }(ComponentModel)
);
var TitleView = (
  /** @class */
  function(_super) {
    __extends(TitleView2, _super);
    function TitleView2() {
      var _this = _super !== null && _super.apply(this, arguments) || this;
      _this.type = TitleView2.type;
      return _this;
    }
    TitleView2.prototype.render = function(titleModel, ecModel, api) {
      this.group.removeAll();
      if (!titleModel.get("show")) {
        return;
      }
      var group = this.group;
      var textStyleModel = titleModel.getModel("textStyle");
      var subtextStyleModel = titleModel.getModel("subtextStyle");
      var textAlign = titleModel.get("textAlign");
      var textVerticalAlign = zrUtil.retrieve2(titleModel.get("textBaseline"), titleModel.get("textVerticalAlign"));
      var textEl = new ZRText({
        style: createTextStyle(textStyleModel, {
          text: titleModel.get("text"),
          fill: textStyleModel.getTextColor()
        }, {
          disableBox: true
        }),
        z2: 10
      });
      var textRect = textEl.getBoundingRect();
      var subText = titleModel.get("subtext");
      var subTextEl = new ZRText({
        style: createTextStyle(subtextStyleModel, {
          text: subText,
          fill: subtextStyleModel.getTextColor(),
          y: textRect.height + titleModel.get("itemGap"),
          verticalAlign: "top"
        }, {
          disableBox: true
        }),
        z2: 10
      });
      var link = titleModel.get("link");
      var sublink = titleModel.get("sublink");
      var triggerEvent = titleModel.get("triggerEvent", true);
      textEl.silent = !link && !triggerEvent;
      subTextEl.silent = !sublink && !triggerEvent;
      if (link) {
        textEl.on("click", function() {
          windowOpen(link, "_" + titleModel.get("target"));
        });
      }
      if (sublink) {
        subTextEl.on("click", function() {
          windowOpen(sublink, "_" + titleModel.get("subtarget"));
        });
      }
      getECData(textEl).eventData = getECData(subTextEl).eventData = triggerEvent ? {
        componentType: "title",
        componentIndex: titleModel.componentIndex
      } : null;
      group.add(textEl);
      subText && group.add(subTextEl);
      var groupRect = group.getBoundingRect();
      var layoutOption = titleModel.getBoxLayoutParams();
      layoutOption.width = groupRect.width;
      layoutOption.height = groupRect.height;
      var layoutRect = getLayoutRect(layoutOption, {
        width: api.getWidth(),
        height: api.getHeight()
      }, titleModel.get("padding"));
      if (!textAlign) {
        textAlign = titleModel.get("left") || titleModel.get("right");
        if (textAlign === "middle") {
          textAlign = "center";
        }
        if (textAlign === "right") {
          layoutRect.x += layoutRect.width;
        } else if (textAlign === "center") {
          layoutRect.x += layoutRect.width / 2;
        }
      }
      if (!textVerticalAlign) {
        textVerticalAlign = titleModel.get("top") || titleModel.get("bottom");
        if (textVerticalAlign === "center") {
          textVerticalAlign = "middle";
        }
        if (textVerticalAlign === "bottom") {
          layoutRect.y += layoutRect.height;
        } else if (textVerticalAlign === "middle") {
          layoutRect.y += layoutRect.height / 2;
        }
        textVerticalAlign = textVerticalAlign || "top";
      }
      group.x = layoutRect.x;
      group.y = layoutRect.y;
      group.markRedraw();
      var alignStyle = {
        align: textAlign,
        verticalAlign: textVerticalAlign
      };
      textEl.setStyle(alignStyle);
      subTextEl.setStyle(alignStyle);
      groupRect = group.getBoundingRect();
      var padding = layoutRect.margin;
      var style = titleModel.getItemStyle(["color", "opacity"]);
      style.fill = titleModel.get("backgroundColor");
      var rect = new Rect({
        shape: {
          x: groupRect.x - padding[3],
          y: groupRect.y - padding[0],
          width: groupRect.width + padding[1] + padding[3],
          height: groupRect.height + padding[0] + padding[2],
          r: titleModel.get("borderRadius")
        },
        style,
        subPixelOptimize: true,
        silent: true
      });
      group.add(rect);
    };
    TitleView2.type = "title";
    return TitleView2;
  }(ComponentView)
);
function install$3(registers) {
  registers.registerComponentModel(TitleModel);
  registers.registerComponentView(TitleView);
}
var getDefaultSelectorOptions = function(ecModel, type) {
  if (type === "all") {
    return {
      type: "all",
      title: ecModel.getLocaleModel().get(["legend", "selector", "all"])
    };
  } else if (type === "inverse") {
    return {
      type: "inverse",
      title: ecModel.getLocaleModel().get(["legend", "selector", "inverse"])
    };
  }
};
var LegendModel = (
  /** @class */
  function(_super) {
    __extends(LegendModel2, _super);
    function LegendModel2() {
      var _this = _super !== null && _super.apply(this, arguments) || this;
      _this.type = LegendModel2.type;
      _this.layoutMode = {
        type: "box",
        // legend.width/height are maxWidth/maxHeight actually,
        // whereas real width/height is calculated by its content.
        // (Setting {left: 10, right: 10} does not make sense).
        // So consider the case:
        // `setOption({legend: {left: 10});`
        // then `setOption({legend: {right: 10});`
        // The previous `left` should be cleared by setting `ignoreSize`.
        ignoreSize: true
      };
      return _this;
    }
    LegendModel2.prototype.init = function(option, parentModel, ecModel) {
      this.mergeDefaultAndTheme(option, ecModel);
      option.selected = option.selected || {};
      this._updateSelector(option);
    };
    LegendModel2.prototype.mergeOption = function(option, ecModel) {
      _super.prototype.mergeOption.call(this, option, ecModel);
      this._updateSelector(option);
    };
    LegendModel2.prototype._updateSelector = function(option) {
      var selector = option.selector;
      var ecModel = this.ecModel;
      if (selector === true) {
        selector = option.selector = ["all", "inverse"];
      }
      if (zrUtil.isArray(selector)) {
        zrUtil.each(selector, function(item, index2) {
          zrUtil.isString(item) && (item = {
            type: item
          });
          selector[index2] = zrUtil.merge(item, getDefaultSelectorOptions(ecModel, item.type));
        });
      }
    };
    LegendModel2.prototype.optionUpdated = function() {
      this._updateData(this.ecModel);
      var legendData = this._data;
      if (legendData[0] && this.get("selectedMode") === "single") {
        var hasSelected = false;
        for (var i = 0; i < legendData.length; i++) {
          var name_1 = legendData[i].get("name");
          if (this.isSelected(name_1)) {
            this.select(name_1);
            hasSelected = true;
            break;
          }
        }
        !hasSelected && this.select(legendData[0].get("name"));
      }
    };
    LegendModel2.prototype._updateData = function(ecModel) {
      var potentialData = [];
      var availableNames = [];
      ecModel.eachRawSeries(function(seriesModel) {
        var seriesName = seriesModel.name;
        availableNames.push(seriesName);
        var isPotential;
        if (seriesModel.legendVisualProvider) {
          var provider = seriesModel.legendVisualProvider;
          var names = provider.getAllNames();
          if (!ecModel.isSeriesFiltered(seriesModel)) {
            availableNames = availableNames.concat(names);
          }
          if (names.length) {
            potentialData = potentialData.concat(names);
          } else {
            isPotential = true;
          }
        } else {
          isPotential = true;
        }
        if (isPotential && isNameSpecified(seriesModel)) {
          potentialData.push(seriesModel.name);
        }
      });
      this._availableNames = availableNames;
      var rawData = this.get("data") || potentialData;
      var legendNameMap = zrUtil.createHashMap();
      var legendData = zrUtil.map(rawData, function(dataItem) {
        if (zrUtil.isString(dataItem) || zrUtil.isNumber(dataItem)) {
          dataItem = {
            name: dataItem
          };
        }
        if (legendNameMap.get(dataItem.name)) {
          return null;
        }
        legendNameMap.set(dataItem.name, true);
        return new Model(dataItem, this, this.ecModel);
      }, this);
      this._data = zrUtil.filter(legendData, function(item) {
        return !!item;
      });
    };
    LegendModel2.prototype.getData = function() {
      return this._data;
    };
    LegendModel2.prototype.select = function(name) {
      var selected = this.option.selected;
      var selectedMode = this.get("selectedMode");
      if (selectedMode === "single") {
        var data = this._data;
        zrUtil.each(data, function(dataItem) {
          selected[dataItem.get("name")] = false;
        });
      }
      selected[name] = true;
    };
    LegendModel2.prototype.unSelect = function(name) {
      if (this.get("selectedMode") !== "single") {
        this.option.selected[name] = false;
      }
    };
    LegendModel2.prototype.toggleSelected = function(name) {
      var selected = this.option.selected;
      if (!selected.hasOwnProperty(name)) {
        selected[name] = true;
      }
      this[selected[name] ? "unSelect" : "select"](name);
    };
    LegendModel2.prototype.allSelect = function() {
      var data = this._data;
      var selected = this.option.selected;
      zrUtil.each(data, function(dataItem) {
        selected[dataItem.get("name", true)] = true;
      });
    };
    LegendModel2.prototype.inverseSelect = function() {
      var data = this._data;
      var selected = this.option.selected;
      zrUtil.each(data, function(dataItem) {
        var name = dataItem.get("name", true);
        if (!selected.hasOwnProperty(name)) {
          selected[name] = true;
        }
        selected[name] = !selected[name];
      });
    };
    LegendModel2.prototype.isSelected = function(name) {
      var selected = this.option.selected;
      return !(selected.hasOwnProperty(name) && !selected[name]) && zrUtil.indexOf(this._availableNames, name) >= 0;
    };
    LegendModel2.prototype.getOrient = function() {
      return this.get("orient") === "vertical" ? {
        index: 1,
        name: "vertical"
      } : {
        index: 0,
        name: "horizontal"
      };
    };
    LegendModel2.type = "legend.plain";
    LegendModel2.dependencies = ["series"];
    LegendModel2.defaultOption = {
      // zlevel: 0,
      z: 4,
      show: true,
      orient: "horizontal",
      left: "center",
      // right: 'center',
      top: 0,
      // bottom: null,
      align: "auto",
      backgroundColor: "rgba(0,0,0,0)",
      borderColor: "#ccc",
      borderRadius: 0,
      borderWidth: 0,
      padding: 5,
      itemGap: 10,
      itemWidth: 25,
      itemHeight: 14,
      symbolRotate: "inherit",
      symbolKeepAspect: true,
      inactiveColor: "#ccc",
      inactiveBorderColor: "#ccc",
      inactiveBorderWidth: "auto",
      itemStyle: {
        color: "inherit",
        opacity: "inherit",
        borderColor: "inherit",
        borderWidth: "auto",
        borderCap: "inherit",
        borderJoin: "inherit",
        borderDashOffset: "inherit",
        borderMiterLimit: "inherit"
      },
      lineStyle: {
        width: "auto",
        color: "inherit",
        inactiveColor: "#ccc",
        inactiveWidth: 2,
        opacity: "inherit",
        type: "inherit",
        cap: "inherit",
        join: "inherit",
        dashOffset: "inherit",
        miterLimit: "inherit"
      },
      textStyle: {
        color: "#333"
      },
      selectedMode: true,
      selector: false,
      selectorLabel: {
        show: true,
        borderRadius: 10,
        padding: [3, 5, 3, 5],
        fontSize: 12,
        fontFamily: "sans-serif",
        color: "#666",
        borderWidth: 1,
        borderColor: "#666"
      },
      emphasis: {
        selectorLabel: {
          show: true,
          color: "#eee",
          backgroundColor: "#666"
        }
      },
      selectorPosition: "auto",
      selectorItemGap: 7,
      selectorButtonGap: 10,
      tooltip: {
        show: false
      }
    };
    return LegendModel2;
  }(ComponentModel)
);
var curry = zrUtil.curry;
var each = zrUtil.each;
var Group$1 = Group$2;
var LegendView = (
  /** @class */
  function(_super) {
    __extends(LegendView2, _super);
    function LegendView2() {
      var _this = _super !== null && _super.apply(this, arguments) || this;
      _this.type = LegendView2.type;
      _this.newlineDisabled = false;
      return _this;
    }
    LegendView2.prototype.init = function() {
      this.group.add(this._contentGroup = new Group$1());
      this.group.add(this._selectorGroup = new Group$1());
      this._isFirstRender = true;
    };
    LegendView2.prototype.getContentGroup = function() {
      return this._contentGroup;
    };
    LegendView2.prototype.getSelectorGroup = function() {
      return this._selectorGroup;
    };
    LegendView2.prototype.render = function(legendModel, ecModel, api) {
      var isFirstRender = this._isFirstRender;
      this._isFirstRender = false;
      this.resetInner();
      if (!legendModel.get("show", true)) {
        return;
      }
      var itemAlign = legendModel.get("align");
      var orient = legendModel.get("orient");
      if (!itemAlign || itemAlign === "auto") {
        itemAlign = legendModel.get("left") === "right" && orient === "vertical" ? "right" : "left";
      }
      var selector = legendModel.get("selector", true);
      var selectorPosition = legendModel.get("selectorPosition", true);
      if (selector && (!selectorPosition || selectorPosition === "auto")) {
        selectorPosition = orient === "horizontal" ? "end" : "start";
      }
      this.renderInner(itemAlign, legendModel, ecModel, api, selector, orient, selectorPosition);
      var positionInfo = legendModel.getBoxLayoutParams();
      var viewportSize = {
        width: api.getWidth(),
        height: api.getHeight()
      };
      var padding = legendModel.get("padding");
      var maxSize = getLayoutRect(positionInfo, viewportSize, padding);
      var mainRect = this.layoutInner(legendModel, itemAlign, maxSize, isFirstRender, selector, selectorPosition);
      var layoutRect = getLayoutRect(zrUtil.defaults({
        width: mainRect.width,
        height: mainRect.height
      }, positionInfo), viewportSize, padding);
      this.group.x = layoutRect.x - mainRect.x;
      this.group.y = layoutRect.y - mainRect.y;
      this.group.markRedraw();
      this.group.add(this._backgroundEl = makeBackground(mainRect, legendModel));
    };
    LegendView2.prototype.resetInner = function() {
      this.getContentGroup().removeAll();
      this._backgroundEl && this.group.remove(this._backgroundEl);
      this.getSelectorGroup().removeAll();
    };
    LegendView2.prototype.renderInner = function(itemAlign, legendModel, ecModel, api, selector, orient, selectorPosition) {
      var contentGroup = this.getContentGroup();
      var legendDrawnMap = zrUtil.createHashMap();
      var selectMode = legendModel.get("selectedMode");
      var excludeSeriesId = [];
      ecModel.eachRawSeries(function(seriesModel) {
        !seriesModel.get("legendHoverLink") && excludeSeriesId.push(seriesModel.id);
      });
      each(legendModel.getData(), function(legendItemModel, dataIndex) {
        var name = legendItemModel.get("name");
        if (!this.newlineDisabled && (name === "" || name === "\n")) {
          var g = new Group$1();
          g.newline = true;
          contentGroup.add(g);
          return;
        }
        var seriesModel = ecModel.getSeriesByName(name)[0];
        if (legendDrawnMap.get(name)) {
          return;
        }
        if (seriesModel) {
          var data = seriesModel.getData();
          var lineVisualStyle = data.getVisual("legendLineStyle") || {};
          var legendIcon = data.getVisual("legendIcon");
          var style = data.getVisual("style");
          var itemGroup = this._createItem(seriesModel, name, dataIndex, legendItemModel, legendModel, itemAlign, lineVisualStyle, style, legendIcon, selectMode, api);
          itemGroup.on("click", curry(dispatchSelectAction, name, null, api, excludeSeriesId)).on("mouseover", curry(dispatchHighlightAction, seriesModel.name, null, api, excludeSeriesId)).on("mouseout", curry(dispatchDownplayAction, seriesModel.name, null, api, excludeSeriesId));
          if (ecModel.ssr) {
            itemGroup.eachChild(function(child) {
              var ecData = getECData(child);
              ecData.seriesIndex = seriesModel.seriesIndex;
              ecData.dataIndex = dataIndex;
              ecData.ssrType = "legend";
            });
          }
          legendDrawnMap.set(name, true);
        } else {
          ecModel.eachRawSeries(function(seriesModel2) {
            if (legendDrawnMap.get(name)) {
              return;
            }
            if (seriesModel2.legendVisualProvider) {
              var provider = seriesModel2.legendVisualProvider;
              if (!provider.containName(name)) {
                return;
              }
              var idx = provider.indexOfName(name);
              var style2 = provider.getItemVisual(idx, "style");
              var legendIcon2 = provider.getItemVisual(idx, "legendIcon");
              var colorArr = parse(style2.fill);
              if (colorArr && colorArr[3] === 0) {
                colorArr[3] = 0.2;
                style2 = zrUtil.extend(zrUtil.extend({}, style2), {
                  fill: stringify(colorArr, "rgba")
                });
              }
              var itemGroup2 = this._createItem(seriesModel2, name, dataIndex, legendItemModel, legendModel, itemAlign, {}, style2, legendIcon2, selectMode, api);
              itemGroup2.on("click", curry(dispatchSelectAction, null, name, api, excludeSeriesId)).on("mouseover", curry(dispatchHighlightAction, null, name, api, excludeSeriesId)).on("mouseout", curry(dispatchDownplayAction, null, name, api, excludeSeriesId));
              if (ecModel.ssr) {
                itemGroup2.eachChild(function(child) {
                  var ecData = getECData(child);
                  ecData.seriesIndex = seriesModel2.seriesIndex;
                  ecData.dataIndex = dataIndex;
                  ecData.ssrType = "legend";
                });
              }
              legendDrawnMap.set(name, true);
            }
          }, this);
        }
        {
          if (!legendDrawnMap.get(name)) {
            console.warn(name + " series not exists. Legend data should be same with series name or data name.");
          }
        }
      }, this);
      if (selector) {
        this._createSelector(selector, legendModel, api, orient, selectorPosition);
      }
    };
    LegendView2.prototype._createSelector = function(selector, legendModel, api, orient, selectorPosition) {
      var selectorGroup = this.getSelectorGroup();
      each(selector, function createSelectorButton(selectorItem) {
        var type = selectorItem.type;
        var labelText = new ZRText({
          style: {
            x: 0,
            y: 0,
            align: "center",
            verticalAlign: "middle"
          },
          onclick: function() {
            api.dispatchAction({
              type: type === "all" ? "legendAllSelect" : "legendInverseSelect",
              legendId: legendModel.id
            });
          }
        });
        selectorGroup.add(labelText);
        var labelModel = legendModel.getModel("selectorLabel");
        var emphasisLabelModel = legendModel.getModel(["emphasis", "selectorLabel"]);
        setLabelStyle(labelText, {
          normal: labelModel,
          emphasis: emphasisLabelModel
        }, {
          defaultText: selectorItem.title
        });
        enableHoverEmphasis(labelText);
      });
    };
    LegendView2.prototype._createItem = function(seriesModel, name, dataIndex, legendItemModel, legendModel, itemAlign, lineVisualStyle, itemVisualStyle, legendIcon, selectMode, api) {
      var drawType = seriesModel.visualDrawType;
      var itemWidth = legendModel.get("itemWidth");
      var itemHeight = legendModel.get("itemHeight");
      var isSelected = legendModel.isSelected(name);
      var iconRotate = legendItemModel.get("symbolRotate");
      var symbolKeepAspect = legendItemModel.get("symbolKeepAspect");
      var legendIconType = legendItemModel.get("icon");
      legendIcon = legendIconType || legendIcon || "roundRect";
      var style = getLegendStyle(legendIcon, legendItemModel, lineVisualStyle, itemVisualStyle, drawType, isSelected, api);
      var itemGroup = new Group$1();
      var textStyleModel = legendItemModel.getModel("textStyle");
      if (zrUtil.isFunction(seriesModel.getLegendIcon) && (!legendIconType || legendIconType === "inherit")) {
        itemGroup.add(seriesModel.getLegendIcon({
          itemWidth,
          itemHeight,
          icon: legendIcon,
          iconRotate,
          itemStyle: style.itemStyle,
          lineStyle: style.lineStyle,
          symbolKeepAspect
        }));
      } else {
        var rotate = legendIconType === "inherit" && seriesModel.getData().getVisual("symbol") ? iconRotate === "inherit" ? seriesModel.getData().getVisual("symbolRotate") : iconRotate : 0;
        itemGroup.add(getDefaultLegendIcon({
          itemWidth,
          itemHeight,
          icon: legendIcon,
          iconRotate: rotate,
          itemStyle: style.itemStyle,
          symbolKeepAspect
        }));
      }
      var textX = itemAlign === "left" ? itemWidth + 5 : -5;
      var textAlign = itemAlign;
      var formatter = legendModel.get("formatter");
      var content = name;
      if (zrUtil.isString(formatter) && formatter) {
        content = formatter.replace("{name}", name != null ? name : "");
      } else if (zrUtil.isFunction(formatter)) {
        content = formatter(name);
      }
      var textColor = isSelected ? textStyleModel.getTextColor() : legendItemModel.get("inactiveColor");
      itemGroup.add(new ZRText({
        style: createTextStyle(textStyleModel, {
          text: content,
          x: textX,
          y: itemHeight / 2,
          fill: textColor,
          align: textAlign,
          verticalAlign: "middle"
        }, {
          inheritColor: textColor
        })
      }));
      var hitRect = new Rect({
        shape: itemGroup.getBoundingRect(),
        style: {
          // Cannot use 'invisible' because SVG SSR will miss the node
          fill: "transparent"
        }
      });
      var tooltipModel = legendItemModel.getModel("tooltip");
      if (tooltipModel.get("show")) {
        setTooltipConfig({
          el: hitRect,
          componentModel: legendModel,
          itemName: name,
          itemTooltipOption: tooltipModel.option
        });
      }
      itemGroup.add(hitRect);
      itemGroup.eachChild(function(child) {
        child.silent = true;
      });
      hitRect.silent = !selectMode;
      this.getContentGroup().add(itemGroup);
      enableHoverEmphasis(itemGroup);
      itemGroup.__legendDataIndex = dataIndex;
      return itemGroup;
    };
    LegendView2.prototype.layoutInner = function(legendModel, itemAlign, maxSize, isFirstRender, selector, selectorPosition) {
      var contentGroup = this.getContentGroup();
      var selectorGroup = this.getSelectorGroup();
      box(legendModel.get("orient"), contentGroup, legendModel.get("itemGap"), maxSize.width, maxSize.height);
      var contentRect = contentGroup.getBoundingRect();
      var contentPos = [-contentRect.x, -contentRect.y];
      selectorGroup.markRedraw();
      contentGroup.markRedraw();
      if (selector) {
        box(
          // Buttons in selectorGroup always layout horizontally
          "horizontal",
          selectorGroup,
          legendModel.get("selectorItemGap", true)
        );
        var selectorRect = selectorGroup.getBoundingRect();
        var selectorPos = [-selectorRect.x, -selectorRect.y];
        var selectorButtonGap = legendModel.get("selectorButtonGap", true);
        var orientIdx = legendModel.getOrient().index;
        var wh = orientIdx === 0 ? "width" : "height";
        var hw = orientIdx === 0 ? "height" : "width";
        var yx = orientIdx === 0 ? "y" : "x";
        if (selectorPosition === "end") {
          selectorPos[orientIdx] += contentRect[wh] + selectorButtonGap;
        } else {
          contentPos[orientIdx] += selectorRect[wh] + selectorButtonGap;
        }
        selectorPos[1 - orientIdx] += contentRect[hw] / 2 - selectorRect[hw] / 2;
        selectorGroup.x = selectorPos[0];
        selectorGroup.y = selectorPos[1];
        contentGroup.x = contentPos[0];
        contentGroup.y = contentPos[1];
        var mainRect = {
          x: 0,
          y: 0
        };
        mainRect[wh] = contentRect[wh] + selectorButtonGap + selectorRect[wh];
        mainRect[hw] = Math.max(contentRect[hw], selectorRect[hw]);
        mainRect[yx] = Math.min(0, selectorRect[yx] + selectorPos[1 - orientIdx]);
        return mainRect;
      } else {
        contentGroup.x = contentPos[0];
        contentGroup.y = contentPos[1];
        return this.group.getBoundingRect();
      }
    };
    LegendView2.prototype.remove = function() {
      this.getContentGroup().removeAll();
      this._isFirstRender = true;
    };
    LegendView2.type = "legend.plain";
    return LegendView2;
  }(ComponentView)
);
function getLegendStyle(iconType, legendItemModel, lineVisualStyle, itemVisualStyle, drawType, isSelected, api) {
  function handleCommonProps(style, visualStyle) {
    if (style.lineWidth === "auto") {
      style.lineWidth = visualStyle.lineWidth > 0 ? 2 : 0;
    }
    each(style, function(propVal, propName) {
      style[propName] === "inherit" && (style[propName] = visualStyle[propName]);
    });
  }
  var itemStyleModel = legendItemModel.getModel("itemStyle");
  var itemStyle = itemStyleModel.getItemStyle();
  var iconBrushType = iconType.lastIndexOf("empty", 0) === 0 ? "fill" : "stroke";
  var decalStyle = itemStyleModel.getShallow("decal");
  itemStyle.decal = !decalStyle || decalStyle === "inherit" ? itemVisualStyle.decal : createOrUpdatePatternFromDecal(decalStyle, api);
  if (itemStyle.fill === "inherit") {
    itemStyle.fill = itemVisualStyle[drawType];
  }
  if (itemStyle.stroke === "inherit") {
    itemStyle.stroke = itemVisualStyle[iconBrushType];
  }
  if (itemStyle.opacity === "inherit") {
    itemStyle.opacity = (drawType === "fill" ? itemVisualStyle : lineVisualStyle).opacity;
  }
  handleCommonProps(itemStyle, itemVisualStyle);
  var legendLineModel = legendItemModel.getModel("lineStyle");
  var lineStyle = legendLineModel.getLineStyle();
  handleCommonProps(lineStyle, lineVisualStyle);
  itemStyle.fill === "auto" && (itemStyle.fill = itemVisualStyle.fill);
  itemStyle.stroke === "auto" && (itemStyle.stroke = itemVisualStyle.fill);
  lineStyle.stroke === "auto" && (lineStyle.stroke = itemVisualStyle.fill);
  if (!isSelected) {
    var borderWidth = legendItemModel.get("inactiveBorderWidth");
    var visualHasBorder = itemStyle[iconBrushType];
    itemStyle.lineWidth = borderWidth === "auto" ? itemVisualStyle.lineWidth > 0 && visualHasBorder ? 2 : 0 : itemStyle.lineWidth;
    itemStyle.fill = legendItemModel.get("inactiveColor");
    itemStyle.stroke = legendItemModel.get("inactiveBorderColor");
    lineStyle.stroke = legendLineModel.get("inactiveColor");
    lineStyle.lineWidth = legendLineModel.get("inactiveWidth");
  }
  return {
    itemStyle,
    lineStyle
  };
}
function getDefaultLegendIcon(opt) {
  var symboType = opt.icon || "roundRect";
  var icon = createSymbol(symboType, 0, 0, opt.itemWidth, opt.itemHeight, opt.itemStyle.fill, opt.symbolKeepAspect);
  icon.setStyle(opt.itemStyle);
  icon.rotation = (opt.iconRotate || 0) * Math.PI / 180;
  icon.setOrigin([opt.itemWidth / 2, opt.itemHeight / 2]);
  if (symboType.indexOf("empty") > -1) {
    icon.style.stroke = icon.style.fill;
    icon.style.fill = "#fff";
    icon.style.lineWidth = 2;
  }
  return icon;
}
function dispatchSelectAction(seriesName, dataName, api, excludeSeriesId) {
  dispatchDownplayAction(seriesName, dataName, api, excludeSeriesId);
  api.dispatchAction({
    type: "legendToggleSelect",
    name: seriesName != null ? seriesName : dataName
  });
  dispatchHighlightAction(seriesName, dataName, api, excludeSeriesId);
}
function isUseHoverLayer(api) {
  var list = api.getZr().storage.getDisplayList();
  var emphasisState;
  var i = 0;
  var len = list.length;
  while (i < len && !(emphasisState = list[i].states.emphasis)) {
    i++;
  }
  return emphasisState && emphasisState.hoverLayer;
}
function dispatchHighlightAction(seriesName, dataName, api, excludeSeriesId) {
  if (!isUseHoverLayer(api)) {
    api.dispatchAction({
      type: "highlight",
      seriesName,
      name: dataName,
      excludeSeriesId
    });
  }
}
function dispatchDownplayAction(seriesName, dataName, api, excludeSeriesId) {
  if (!isUseHoverLayer(api)) {
    api.dispatchAction({
      type: "downplay",
      seriesName,
      name: dataName,
      excludeSeriesId
    });
  }
}
function legendFilter(ecModel) {
  var legendModels = ecModel.findComponents({
    mainType: "legend"
  });
  if (legendModels && legendModels.length) {
    ecModel.filterSeries(function(series) {
      for (var i = 0; i < legendModels.length; i++) {
        if (!legendModels[i].isSelected(series.name)) {
          return false;
        }
      }
      return true;
    });
  }
}
function legendSelectActionHandler(methodName, payload, ecModel) {
  var isAllSelect = methodName === "allSelect" || methodName === "inverseSelect";
  var selectedMap = {};
  var actionLegendIndices = [];
  ecModel.eachComponent({
    mainType: "legend",
    query: payload
  }, function(legendModel) {
    if (isAllSelect) {
      legendModel[methodName]();
    } else {
      legendModel[methodName](payload.name);
    }
    makeSelectedMap(legendModel, selectedMap);
    actionLegendIndices.push(legendModel.componentIndex);
  });
  var allSelectedMap = {};
  ecModel.eachComponent("legend", function(legendModel) {
    each$1(selectedMap, function(isSelected, name) {
      legendModel[isSelected ? "select" : "unSelect"](name);
    });
    makeSelectedMap(legendModel, allSelectedMap);
  });
  return isAllSelect ? {
    selected: allSelectedMap,
    // return legendIndex array to tell the developers which legends are allSelect / inverseSelect
    legendIndex: actionLegendIndices
  } : {
    name: payload.name,
    selected: allSelectedMap
  };
}
function makeSelectedMap(legendModel, out) {
  var selectedMap = out || {};
  each$1(legendModel.getData(), function(model) {
    var name = model.get("name");
    if (name === "\n" || name === "") {
      return;
    }
    var isItemSelected = legendModel.isSelected(name);
    if (hasOwn(selectedMap, name)) {
      selectedMap[name] = selectedMap[name] && isItemSelected;
    } else {
      selectedMap[name] = isItemSelected;
    }
  });
  return selectedMap;
}
function installLegendAction(registers) {
  registers.registerAction("legendToggleSelect", "legendselectchanged", curry$1(legendSelectActionHandler, "toggleSelected"));
  registers.registerAction("legendAllSelect", "legendselectall", curry$1(legendSelectActionHandler, "allSelect"));
  registers.registerAction("legendInverseSelect", "legendinverseselect", curry$1(legendSelectActionHandler, "inverseSelect"));
  registers.registerAction("legendSelect", "legendselected", curry$1(legendSelectActionHandler, "select"));
  registers.registerAction("legendUnSelect", "legendunselected", curry$1(legendSelectActionHandler, "unSelect"));
}
function install$2(registers) {
  registers.registerComponentModel(LegendModel);
  registers.registerComponentView(LegendView);
  registers.registerProcessor(registers.PRIORITY.PROCESSOR.SERIES_FILTER, legendFilter);
  registers.registerSubTypeDefaulter("legend", function() {
    return "plain";
  });
  installLegendAction(registers);
}
var ScrollableLegendModel = (
  /** @class */
  function(_super) {
    __extends(ScrollableLegendModel2, _super);
    function ScrollableLegendModel2() {
      var _this = _super !== null && _super.apply(this, arguments) || this;
      _this.type = ScrollableLegendModel2.type;
      return _this;
    }
    ScrollableLegendModel2.prototype.setScrollDataIndex = function(scrollDataIndex) {
      this.option.scrollDataIndex = scrollDataIndex;
    };
    ScrollableLegendModel2.prototype.init = function(option, parentModel, ecModel) {
      var inputPositionParams = getLayoutParams(option);
      _super.prototype.init.call(this, option, parentModel, ecModel);
      mergeAndNormalizeLayoutParams(this, option, inputPositionParams);
    };
    ScrollableLegendModel2.prototype.mergeOption = function(option, ecModel) {
      _super.prototype.mergeOption.call(this, option, ecModel);
      mergeAndNormalizeLayoutParams(this, this.option, option);
    };
    ScrollableLegendModel2.type = "legend.scroll";
    ScrollableLegendModel2.defaultOption = inheritDefaultOption(LegendModel.defaultOption, {
      scrollDataIndex: 0,
      pageButtonItemGap: 5,
      pageButtonGap: null,
      pageButtonPosition: "end",
      pageFormatter: "{current}/{total}",
      pageIcons: {
        horizontal: ["M0,0L12,-10L12,10z", "M0,0L-12,-10L-12,10z"],
        vertical: ["M0,0L20,0L10,-20z", "M0,0L20,0L10,20z"]
      },
      pageIconColor: "#2f4554",
      pageIconInactiveColor: "#aaa",
      pageIconSize: 15,
      pageTextStyle: {
        color: "#333"
      },
      animationDurationUpdate: 800
    });
    return ScrollableLegendModel2;
  }(LegendModel)
);
function mergeAndNormalizeLayoutParams(legendModel, target, raw) {
  var orient = legendModel.getOrient();
  var ignoreSize = [1, 1];
  ignoreSize[orient.index] = 0;
  mergeLayoutParam(target, raw, {
    type: "box",
    ignoreSize: !!ignoreSize
  });
}
var Group = Group$2;
var WH = ["width", "height"];
var XY = ["x", "y"];
var ScrollableLegendView = (
  /** @class */
  function(_super) {
    __extends(ScrollableLegendView2, _super);
    function ScrollableLegendView2() {
      var _this = _super !== null && _super.apply(this, arguments) || this;
      _this.type = ScrollableLegendView2.type;
      _this.newlineDisabled = true;
      _this._currentIndex = 0;
      return _this;
    }
    ScrollableLegendView2.prototype.init = function() {
      _super.prototype.init.call(this);
      this.group.add(this._containerGroup = new Group());
      this._containerGroup.add(this.getContentGroup());
      this.group.add(this._controllerGroup = new Group());
    };
    ScrollableLegendView2.prototype.resetInner = function() {
      _super.prototype.resetInner.call(this);
      this._controllerGroup.removeAll();
      this._containerGroup.removeClipPath();
      this._containerGroup.__rectSize = null;
    };
    ScrollableLegendView2.prototype.renderInner = function(itemAlign, legendModel, ecModel, api, selector, orient, selectorPosition) {
      var self = this;
      _super.prototype.renderInner.call(this, itemAlign, legendModel, ecModel, api, selector, orient, selectorPosition);
      var controllerGroup = this._controllerGroup;
      var pageIconSize = legendModel.get("pageIconSize", true);
      var pageIconSizeArr = zrUtil.isArray(pageIconSize) ? pageIconSize : [pageIconSize, pageIconSize];
      createPageButton("pagePrev", 0);
      var pageTextStyleModel = legendModel.getModel("pageTextStyle");
      controllerGroup.add(new ZRText({
        name: "pageText",
        style: {
          // Placeholder to calculate a proper layout.
          text: "xx/xx",
          fill: pageTextStyleModel.getTextColor(),
          font: pageTextStyleModel.getFont(),
          verticalAlign: "middle",
          align: "center"
        },
        silent: true
      }));
      createPageButton("pageNext", 1);
      function createPageButton(name, iconIdx) {
        var pageDataIndexName = name + "DataIndex";
        var icon = createIcon(legendModel.get("pageIcons", true)[legendModel.getOrient().name][iconIdx], {
          // Buttons will be created in each render, so we do not need
          // to worry about avoiding using legendModel kept in scope.
          onclick: zrUtil.bind(self._pageGo, self, pageDataIndexName, legendModel, api)
        }, {
          x: -pageIconSizeArr[0] / 2,
          y: -pageIconSizeArr[1] / 2,
          width: pageIconSizeArr[0],
          height: pageIconSizeArr[1]
        });
        icon.name = name;
        controllerGroup.add(icon);
      }
    };
    ScrollableLegendView2.prototype.layoutInner = function(legendModel, itemAlign, maxSize, isFirstRender, selector, selectorPosition) {
      var selectorGroup = this.getSelectorGroup();
      var orientIdx = legendModel.getOrient().index;
      var wh = WH[orientIdx];
      var xy = XY[orientIdx];
      var hw = WH[1 - orientIdx];
      var yx = XY[1 - orientIdx];
      selector && box(
        // Buttons in selectorGroup always layout horizontally
        "horizontal",
        selectorGroup,
        legendModel.get("selectorItemGap", true)
      );
      var selectorButtonGap = legendModel.get("selectorButtonGap", true);
      var selectorRect = selectorGroup.getBoundingRect();
      var selectorPos = [-selectorRect.x, -selectorRect.y];
      var processMaxSize = zrUtil.clone(maxSize);
      selector && (processMaxSize[wh] = maxSize[wh] - selectorRect[wh] - selectorButtonGap);
      var mainRect = this._layoutContentAndController(legendModel, isFirstRender, processMaxSize, orientIdx, wh, hw, yx, xy);
      if (selector) {
        if (selectorPosition === "end") {
          selectorPos[orientIdx] += mainRect[wh] + selectorButtonGap;
        } else {
          var offset = selectorRect[wh] + selectorButtonGap;
          selectorPos[orientIdx] -= offset;
          mainRect[xy] -= offset;
        }
        mainRect[wh] += selectorRect[wh] + selectorButtonGap;
        selectorPos[1 - orientIdx] += mainRect[yx] + mainRect[hw] / 2 - selectorRect[hw] / 2;
        mainRect[hw] = Math.max(mainRect[hw], selectorRect[hw]);
        mainRect[yx] = Math.min(mainRect[yx], selectorRect[yx] + selectorPos[1 - orientIdx]);
        selectorGroup.x = selectorPos[0];
        selectorGroup.y = selectorPos[1];
        selectorGroup.markRedraw();
      }
      return mainRect;
    };
    ScrollableLegendView2.prototype._layoutContentAndController = function(legendModel, isFirstRender, maxSize, orientIdx, wh, hw, yx, xy) {
      var contentGroup = this.getContentGroup();
      var containerGroup = this._containerGroup;
      var controllerGroup = this._controllerGroup;
      box(legendModel.get("orient"), contentGroup, legendModel.get("itemGap"), !orientIdx ? null : maxSize.width, orientIdx ? null : maxSize.height);
      box(
        // Buttons in controller are layout always horizontally.
        "horizontal",
        controllerGroup,
        legendModel.get("pageButtonItemGap", true)
      );
      var contentRect = contentGroup.getBoundingRect();
      var controllerRect = controllerGroup.getBoundingRect();
      var showController = this._showController = contentRect[wh] > maxSize[wh];
      var contentPos = [-contentRect.x, -contentRect.y];
      if (!isFirstRender) {
        contentPos[orientIdx] = contentGroup[xy];
      }
      var containerPos = [0, 0];
      var controllerPos = [-controllerRect.x, -controllerRect.y];
      var pageButtonGap = zrUtil.retrieve2(legendModel.get("pageButtonGap", true), legendModel.get("itemGap", true));
      if (showController) {
        var pageButtonPosition = legendModel.get("pageButtonPosition", true);
        if (pageButtonPosition === "end") {
          controllerPos[orientIdx] += maxSize[wh] - controllerRect[wh];
        } else {
          containerPos[orientIdx] += controllerRect[wh] + pageButtonGap;
        }
      }
      controllerPos[1 - orientIdx] += contentRect[hw] / 2 - controllerRect[hw] / 2;
      contentGroup.setPosition(contentPos);
      containerGroup.setPosition(containerPos);
      controllerGroup.setPosition(controllerPos);
      var mainRect = {
        x: 0,
        y: 0
      };
      mainRect[wh] = showController ? maxSize[wh] : contentRect[wh];
      mainRect[hw] = Math.max(contentRect[hw], controllerRect[hw]);
      mainRect[yx] = Math.min(0, controllerRect[yx] + controllerPos[1 - orientIdx]);
      containerGroup.__rectSize = maxSize[wh];
      if (showController) {
        var clipShape = {
          x: 0,
          y: 0
        };
        clipShape[wh] = Math.max(maxSize[wh] - controllerRect[wh] - pageButtonGap, 0);
        clipShape[hw] = mainRect[hw];
        containerGroup.setClipPath(new Rect({
          shape: clipShape
        }));
        containerGroup.__rectSize = clipShape[wh];
      } else {
        controllerGroup.eachChild(function(child) {
          child.attr({
            invisible: true,
            silent: true
          });
        });
      }
      var pageInfo = this._getPageInfo(legendModel);
      pageInfo.pageIndex != null && updateProps$1(
        contentGroup,
        {
          x: pageInfo.contentPosition[0],
          y: pageInfo.contentPosition[1]
        },
        // When switch from "show controller" to "not show controller", view should be
        // updated immediately without animation, otherwise causes weird effect.
        showController ? legendModel : null
      );
      this._updatePageInfoView(legendModel, pageInfo);
      return mainRect;
    };
    ScrollableLegendView2.prototype._pageGo = function(to, legendModel, api) {
      var scrollDataIndex = this._getPageInfo(legendModel)[to];
      scrollDataIndex != null && api.dispatchAction({
        type: "legendScroll",
        scrollDataIndex,
        legendId: legendModel.id
      });
    };
    ScrollableLegendView2.prototype._updatePageInfoView = function(legendModel, pageInfo) {
      var controllerGroup = this._controllerGroup;
      zrUtil.each(["pagePrev", "pageNext"], function(name) {
        var key = name + "DataIndex";
        var canJump = pageInfo[key] != null;
        var icon = controllerGroup.childOfName(name);
        if (icon) {
          icon.setStyle("fill", canJump ? legendModel.get("pageIconColor", true) : legendModel.get("pageIconInactiveColor", true));
          icon.cursor = canJump ? "pointer" : "default";
        }
      });
      var pageText = controllerGroup.childOfName("pageText");
      var pageFormatter = legendModel.get("pageFormatter");
      var pageIndex = pageInfo.pageIndex;
      var current = pageIndex != null ? pageIndex + 1 : 0;
      var total = pageInfo.pageCount;
      pageText && pageFormatter && pageText.setStyle("text", zrUtil.isString(pageFormatter) ? pageFormatter.replace("{current}", current == null ? "" : current + "").replace("{total}", total == null ? "" : total + "") : pageFormatter({
        current,
        total
      }));
    };
    ScrollableLegendView2.prototype._getPageInfo = function(legendModel) {
      var scrollDataIndex = legendModel.get("scrollDataIndex", true);
      var contentGroup = this.getContentGroup();
      var containerRectSize = this._containerGroup.__rectSize;
      var orientIdx = legendModel.getOrient().index;
      var wh = WH[orientIdx];
      var xy = XY[orientIdx];
      var targetItemIndex = this._findTargetItemIndex(scrollDataIndex);
      var children = contentGroup.children();
      var targetItem = children[targetItemIndex];
      var itemCount = children.length;
      var pCount = !itemCount ? 0 : 1;
      var result = {
        contentPosition: [contentGroup.x, contentGroup.y],
        pageCount: pCount,
        pageIndex: pCount - 1,
        pagePrevDataIndex: null,
        pageNextDataIndex: null
      };
      if (!targetItem) {
        return result;
      }
      var targetItemInfo = getItemInfo(targetItem);
      result.contentPosition[orientIdx] = -targetItemInfo.s;
      for (var i = targetItemIndex + 1, winStartItemInfo = targetItemInfo, winEndItemInfo = targetItemInfo, currItemInfo = null; i <= itemCount; ++i) {
        currItemInfo = getItemInfo(children[i]);
        if (
          // Half of the last item is out of the window.
          !currItemInfo && winEndItemInfo.e > winStartItemInfo.s + containerRectSize || currItemInfo && !intersect(currItemInfo, winStartItemInfo.s)
        ) {
          if (winEndItemInfo.i > winStartItemInfo.i) {
            winStartItemInfo = winEndItemInfo;
          } else {
            winStartItemInfo = currItemInfo;
          }
          if (winStartItemInfo) {
            if (result.pageNextDataIndex == null) {
              result.pageNextDataIndex = winStartItemInfo.i;
            }
            ++result.pageCount;
          }
        }
        winEndItemInfo = currItemInfo;
      }
      for (var i = targetItemIndex - 1, winStartItemInfo = targetItemInfo, winEndItemInfo = targetItemInfo, currItemInfo = null; i >= -1; --i) {
        currItemInfo = getItemInfo(children[i]);
        if (
          // If the the end item does not intersect with the window started
          // from the current item, a page can be settled.
          (!currItemInfo || !intersect(winEndItemInfo, currItemInfo.s)) && winStartItemInfo.i < winEndItemInfo.i
        ) {
          winEndItemInfo = winStartItemInfo;
          if (result.pagePrevDataIndex == null) {
            result.pagePrevDataIndex = winStartItemInfo.i;
          }
          ++result.pageCount;
          ++result.pageIndex;
        }
        winStartItemInfo = currItemInfo;
      }
      return result;
      function getItemInfo(el) {
        if (el) {
          var itemRect = el.getBoundingRect();
          var start = itemRect[xy] + el[xy];
          return {
            s: start,
            e: start + itemRect[wh],
            i: el.__legendDataIndex
          };
        }
      }
      function intersect(itemInfo, winStart) {
        return itemInfo.e >= winStart && itemInfo.s <= winStart + containerRectSize;
      }
    };
    ScrollableLegendView2.prototype._findTargetItemIndex = function(targetDataIndex) {
      if (!this._showController) {
        return 0;
      }
      var index2;
      var contentGroup = this.getContentGroup();
      var defaultIndex;
      contentGroup.eachChild(function(child, idx) {
        var legendDataIdx = child.__legendDataIndex;
        if (defaultIndex == null && legendDataIdx != null) {
          defaultIndex = idx;
        }
        if (legendDataIdx === targetDataIndex) {
          index2 = idx;
        }
      });
      return index2 != null ? index2 : defaultIndex;
    };
    ScrollableLegendView2.type = "legend.scroll";
    return ScrollableLegendView2;
  }(LegendView)
);
function installScrollableLegendAction(registers) {
  registers.registerAction("legendScroll", "legendscroll", function(payload, ecModel) {
    var scrollDataIndex = payload.scrollDataIndex;
    scrollDataIndex != null && ecModel.eachComponent({
      mainType: "legend",
      subType: "scroll",
      query: payload
    }, function(legendModel) {
      legendModel.setScrollDataIndex(scrollDataIndex);
    });
  });
}
function install$1(registers) {
  use(install$2);
  registers.registerComponentModel(ScrollableLegendModel);
  registers.registerComponentView(ScrollableLegendView);
  installScrollableLegendAction(registers);
}
function install(registers) {
  use(install$2);
  use(install$1);
}
defineComponent({
  name: "ServerPlaceholder",
  render() {
    return createElementBlock("div");
  }
});
const clientOnlySymbol = Symbol.for("nuxt:client-only");
const __nuxt_component_0 = defineComponent({
  name: "ClientOnly",
  inheritAttrs: false,
  props: ["fallback", "placeholder", "placeholderTag", "fallbackTag"],
  setup(_, { slots, attrs }) {
    const mounted = ref(false);
    provide(clientOnlySymbol, true);
    return (props) => {
      var _a;
      if (mounted.value) {
        return (_a = slots.default) == null ? void 0 : _a.call(slots);
      }
      const slot = slots.fallback || slots.placeholder;
      if (slot) {
        return slot();
      }
      const fallbackStr = props.fallback || props.placeholder || "";
      const fallbackTag = props.fallbackTag || props.placeholderTag || "span";
      return createElementBlock(fallbackTag, attrs, fallbackStr);
    };
  }
});
const _imports_0 = "" + buildAssetsURL("background.CFCqv-xq.jpg");
const _imports_1 = "" + buildAssetsURL("one.D83YXHE8.png");
const _imports_2 = "" + buildAssetsURL("two.J1Akgiqh.png");
const _imports_3 = "" + buildAssetsURL("three.Cd9pvFUJ.png");
const _imports_4 = "" + buildAssetsURL("four.Bq-hA6pl.png");
const _imports_5 = "" + buildAssetsURL("five.j50N-8o8.png");
const _imports_6 = "" + buildAssetsURL("six.BSw29Xr8.png");
const _imports_7 = "" + buildAssetsURL("zhengce.BUxQjxss.png");
const _imports_8 = "data:image/png;base64,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";
const _imports_9 = "data:image/png;base64,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";
const _imports_10 = "data:image/png;base64,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";
const _imports_11 = "data:image/png;base64,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";
const _imports_12 = "" + buildAssetsURL("zhichi.HP4JG1zp.png");
const _imports_13 = "" + buildAssetsURL("daili.Cq6jSbFa.png");
const _imports_14 = "" + buildAssetsURL("zhichi2.DHxmnCL4.png");
const _imports_15 = "" + buildAssetsURL("zengzhi.ChF9e4GV.png");
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    use([
      install$5$1,
      install$4,
      install$3,
      install$6,
      install,
      installLabelLayout,
      install$5
    ]);
    ref(null);
    ref({
      title: {
        show: true,
        text: "\u5E02\u573A\u6F5C\u529B\u6570\u636E"
      },
      xAxis: {
        type: "category",
        data: ["2025", "2026", "2027", "2028", "2029", "2030", "2031"]
      },
      yAxis: {
        type: "value"
      },
      tooltip: {
        trigger: "axis",
        formatter: "{c}\u4EBF\u5143"
      },
      series: [
        {
          data: [0.1, 0.6, 7, 10, 13, 17, 30],
          type: "line",
          label: {
            show: true,
            position: "top",
            formatter: "{c}\u4EBF\u5143"
          }
        },
        {
          data: [0.1, 5, 7, 10, 13, 17, 30],
          type: "bar",
          color: "#a2b0db"
        }
      ]
    });
    ref({
      title: {
        show: true,
        text: "\u7528\u6237\u589E\u957F\u9884\u6D4B"
      },
      xAxis: {
        type: "category",
        data: ["2024", "2025", "2026", "2027", "2028", "2029", "2030"]
      },
      yAxis: {
        type: "value"
      },
      series: [
        {
          data: [150, 230, 224, 218, 135, 147, 260],
          type: "line"
        }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-b5c5e3e3>`);
      _push(ssrRenderComponent(headerVue, null, null, _parent));
      _push(`<section class="hero-section" data-v-b5c5e3e3><div class="hero-bg" data-v-b5c5e3e3><img${ssrRenderAttr("src", _imports_0)} alt="\u667A\u6167\u519C\u8D38\u5E73\u53F0\u5C55\u793A" class="hero-image" data-v-b5c5e3e3></div><div class="hero-content" data-v-b5c5e3e3><h1 class="hero-title" data-v-b5c5e3e3>\u667A\u6167\u519C\u8D38<br data-v-b5c5e3e3>\u4E61\u6751\u632F\u5174</h1><p class="hero-subtitle" data-v-b5c5e3e3>\u6D77\u5357\u79EF\u5206\u5B9D\u519C\u8D38\u5E02\u573A\u6570\u5B57\u5316\u8F6C\u578B\u5E73\u53F0\uFF0C\u8FDE\u63A5\u519C\u6237\u4E0E\u5E02\u573A\uFF0C\u6784\u5EFA\u5168\u56FD\u7EDF\u4E00\u5927\u5E02\u573A</p><div class="hero-actions" data-v-b5c5e3e3><a class="btn-primary" href="/cooperate" target="_blank" data-v-b5c5e3e3>\u6210\u4E3A\u4EE3\u7406</a><a href="#services" class="btn-secondary" data-v-b5c5e3e3>\u4E86\u89E3\u529F\u80FD</a></div></div><div class="scroll-indicator" data-v-b5c5e3e3><i class="fa fa-angle-down" data-v-b5c5e3e3></i></div></section><section id="about" class="about-section" data-v-b5c5e3e3><div class="container" data-v-b5c5e3e3><div class="section-header" data-v-b5c5e3e3><h2 class="section-title" data-v-b5c5e3e3>\u4F01\u4E1A\u7B80\u4ECB</h2><div class="section-divider" data-v-b5c5e3e3></div></div><div data-v-b5c5e3e3><div class="introduceItem" style="${ssrRenderStyle({ "margin": "10px" })}" data-v-b5c5e3e3><div style="${ssrRenderStyle({ "font-weight": "bold", "font-size": "20px" })}" data-v-b5c5e3e3>\u516C\u53F8\u7B80\u4ECB:</div><div data-v-b5c5e3e3><p style="${ssrRenderStyle({ "text-indent": "20px" })}" data-v-b5c5e3e3>\u96C6\u79EF\u5206\u8FD0\u8425\u3001\u7535\u5B50\u5546\u52A1\u3001\u5E94\u7528\u8F6F\u4EF6\u6280\u672F\u4E8E\u4E00\u4F53\u7684\u590D\u5408\u578B\u516C\u53F8 \u6D77\u5357\u79EF\u5206\u5B9D\u7535\u5B50\u5546\u52A1\u6709\u9650\u516C\u53F8, \u4E8E2011\u5E743\u670830\u65E5\u5728\u6D77\u53E3\u6210\u7ACB\uFF0C\u6CE8\u518C\u8D44\u91D11000\u4E07\u4EBA\u6C11\u5E01\uFF0C\u662F\u4E00\u5BB6\u96C6\u79EF\u5206\u8FD0\u8425\u3001\u7535\u5B50\u5546\u52A1\u3001\u5E94\u7528\u8F6F\u4EF6\u6280\u672F\u4E8E\u4E00\u4F53\u7684\u590D\u5408\u578B\u516C\u53F8\uFF0C\u81F4\u529B\u4E8E<a href="#" data-v-b5c5e3e3>\u6D88\u8D39\u517B\u8001</a>\u3001<a href="#" data-v-b5c5e3e3>\u4F01\u4E1A\u54A8\u8BE2\u7BA1\u7406</a>\u3001<a href="#" data-v-b5c5e3e3>\u6587\u5316\u4F20\u64AD\u63A8\u5E7F\u4E0E\u8FD0\u8425</a>\u7B49\u3002 </p></div></div><div class="introduceItem" data-v-b5c5e3e3><div style="${ssrRenderStyle({ "font-weight": "bold", "font-size": "20px" })}" data-v-b5c5e3e3>\u4F01\u4E1A\u4EF7\u503C\u89C2:</div><div data-v-b5c5e3e3><p style="${ssrRenderStyle({ "text-indent": "20px" })}" data-v-b5c5e3e3> 1\u5BA2\u6237\u7B2C\u4E00 \u5BA2\u6237\u662F\u8863\u98DF\u7236\u6BCD \xB7\u5C0A\u91CD\u4ED6\u4EBA\uFF0C\u968F\u65F6\u968F\u5730\u7EF4\u62A4\u79EF\u5206\u5B9D\u5F62\u8C61 \xB7\u59CB\u7EC8\u5FAE\u7B11\u9762\u5BF9\u6295\u8BC9\u548C\u59D4\u5C48\uFF0C\u79EF\u6781\u4E3B\u52A8\u5730\u4E3A\u5BA2\u6237\u89E3\u51B3\u95EE\u9898 \xB7\u4E0E\u5BA2\u6237\u4EA4\u6D41\u8FC7\u7A0B\u4E2D\uFF0C\u5373\u4F7F\u4E0D\u662F\u81EA\u5DF1\u7684\u8D23\u4EFB\uFF0C\u4E5F\u4E0D\u63A8\u8BFF \xB7\u4E0D\u65AD\u6FC0\u53D1\u4E0E\u6EE1\u8DB3\u5BA2\u6237\u7684\u9700\u6C42\uFF0C\u63D0\u4F9B\u5EFA\u8BAE\u548C\u8D44\u8BAF\u63D0\u5347\u5BA2\u6237\u7684\u5FE0\u8BDA\u5EA6 \xB7\u5E73\u8861\u597D\u5BA2\u6237\u9700\u6C42\u548C\u516C\u53F8\u5229\u76CA\uFF0C\u5BFB\u6C42\u5E76\u53D6\u5F97\u53CC\u8D62 \xB7\u5EFA\u7ACB\u8D85\u524D\u670D\u52A1\u610F\u8BC6\uFF0C\u9632\u60A3\u4E8E\u672A\u7136 2 \u5B66\u4E60\u6210\u957F \u7EC8\u751F\u5B66\u4E60\uFF0C\u7EC8\u751F\u6210\u957F\uFF0C\u5B66\u4E60\u662F\u6210\u957F\u7684\u9636\u68AF \u79EF\u6781\u53C2\u4E0E\u516C\u53F8\u57F9\u8BAD\uFF0C\u8BA4\u771F\u5B66\u4E60\uFF0C\u901A\u8FC7\u5404\u9879\u8003\u8BC4\uFF1B\u719F\u7EC3\u638C\u63E1\u4E13\u4E1A\u77E5\u8BC6\u4E0E\u6280\u80FD\uFF0C\u5E76\u4E0D\u65AD\u63D0\u5347\u884C\u4E1A\u77E5\u8BC6\uFF1B\u4E3B\u52A8\u5B66\u4E60\uFF0C\u4E3B\u52A8\u5206\u4EAB\uFF1B\u4E0D\u65AD\u63D0\u5347\u804C\u4E1A\u7D20\u517B\uFF0C\u5E26\u52A8\u4F19\u4F34\u5171\u540C\u6210\u957F\uFF1B\u660E\u786E\u6807\u6746\uFF0C\u52C7\u4E8E\u8D85\u8D8A\uFF1B 3 \u6FC0\u60C5\u5FEB\u4E50 \u6FC0\u60C5\u5C31\u662F\u4EE5\u538B\u5012\u4E00\u5207\u56F0\u96BE\u7684\u51B3\u5FC3\u548C\u52C7\u6C14\uFF0C\u6FC0\u60C5\u5C31\u662F\u5DE5\u4F5C\u751F\u6D3B\u5FEB\u4E50\u7684\u6E90\u6CC9 \u559C\u6B22\u81EA\u5DF1\u7684\u5DE5\u4F5C\uFF0C\u8BA4\u540C\u79EF\u5206\u5B9D\u4F01\u4E1A\u6587\u5316\u70ED\u7231\u76D8\u77F3\uFF0C\u987E\u5168\u5927\u5C40\uFF0C\u4E0D\u8BA1\u8F83\u4E2A\u4EBA\u5F97\u5931\u4EE5\u79EF\u6781\u4E50\u89C2\u7684\u5FC3\u6001\u9762\u5BF9\u65E5\u5E38\u5DE5\u4F5C\uFF0C\u78B0\u5230\u56F0\u96BE\u548C\u632B\u6298\u7684\u65F6\u5019\u6C38\u4E0D\u653E\u5F03\uFF0C\u4E0D\u65AD\u81EA\u6211\u6FC0\u52B1\uFF0C\u52AA\u529B\u63D0\u5347\u4E1A\u7EE9\u59CB\u7EC8\u4EE5\u4E50\u89C2\u4E3B\u4E49\u7684\u7CBE\u795E\u548C\u5FC5\u80DC\u7684\u4FE1\u5FF5\uFF0C\u5F71\u54CD\u5E76\u5E26\u52A8\u540C\u4E8B\u548C\u56E2\u961F\u4E0D\u65AD\u8BBE\u5B9A\u66F4\u9AD8\u7684\u76EE\u6807\uFF0C\u4ECA\u5929\u7684\u6700\u597D\u8868\u73B0\u662F\u660E\u5929\u7684\u6700\u4F4E\u8981\u6C42 4 \u56E2\u961F\u534F\u4F5C \u96C6\u4F53\u8363\u8A89\u611F\u662F\u56E2\u961F\u7684\u7075\u9B42\uFF0C\u5171\u4EAB\u5171\u62C5\uFF0C\u5E73\u51E1\u4EBA\u505A\u975E\u51E1\u4E8B \u79EF\u6781\u878D\u5165\u56E2\u961F\uFF0C\u4E50\u4E8E\u63A5\u53D7\u540C\u4E8B\u7684\u5E2E\u52A9\uFF0C\u914D\u5408\u56E2\u961F\u5B8C\u6210\u5DE5\u4F5C\u51B3\u7B56\u524D\u79EF\u6781\u53D1\u8868\u5EFA\u8BBE\u6027\u610F\u89C1\uFF0C\u5145\u5206\u53C2\u4E0E\u56E2\u961F\u8BA8\u8BBA\uFF1B\u51B3\u7B56\u540E\uFF0C\u65E0\u8BBA\u4E2A\u4EBA\u662F\u5426\u6709\u5F02\u8BAE\uFF0C\u5FC5\u987B\u4ECE\u8A00\u884C\u4E0A\u5B8C\u5168\u4E88\u4EE5\u652F\u6301\u79EF\u6781\u4E3B\u52A8\u5206\u4EAB\u4E1A\u52A1\u77E5\u8BC6\u548C\u7ECF\u9A8C\uFF1B\u4E3B\u52A8\u7ED9\u4E88\u540C\u4E8B\u5FC5\u8981\u7684\u5E2E\u52A9\uFF1B\u5584\u4E8E\u5229\u7528\u56E2\u961F\u7684\u529B\u91CF\u89E3\u51B3\u95EE\u9898\u548C\u56F0\u96BE\u5584\u4E8E\u548C\u4E0D\u540C\u7C7B\u578B\u7684\u540C\u4E8B\u5408\u4F5C\uFF0C\u4E0D\u5C06\u4E2A\u4EBA\u559C\u597D\u5E26\u5165\u5DE5\u4F5C\uFF0C\u5145\u5206\u4F53\u73B0\u201C\u5BF9\u4E8B\u4E0D\u5BF9\u4EBA\u201D\u7684\u539F\u5219\u6709\u4E3B\u4EBA\u7FC1\u610F\u8BC6\uFF0C\u79EF\u6781\u6B63\u9762\u5730\u5F71\u54CD\u56E2\u961F\uFF0C\u6539\u5584\u56E2\u961F\u58EB\u6C14\u548C\u6C1B\u56F4 5 \u8FCE\u63A5\u53D8\u5316 \u552F\u4E00\u4E0D\u53D8\u7684\u5C31\u662F\u53D8\u5316\uFF0C\u62E5\u62B1\u53D8\u5316\uFF0C\u52C7\u4E8E\u521B\u65B0 \u9002\u5E94\u516C\u53F8\u7684\u65E5\u5E38\u53D8\u5316\uFF0C\u4E0D\u62B1\u6028\u9762\u5BF9\u53D8\u5316\uFF0C\u7406\u6027\u5BF9\u5F85\uFF0C\u5145\u5206\u6C9F\u901A\uFF0C\u8BDA\u610F\u914D\u5408\u5BF9\u53D8\u5316\u4EA7\u751F\u7684\u56F0\u96BE\u548C\u632B\u6298\uFF0C\u80FD\u81EA\u6211\u8C03\u6574\uFF0C\u5E76\u6B63\u9762\u5F71\u54CD\u548C\u5E26\u52A8\u540C\u4E8B\u5728\u5DE5\u4F5C\u4E2D\u6709\u524D\u77BB\u610F\u8BC6\uFF0C\u5EFA\u7ACB\u65B0\u65B9\u6CD5\u3001\u65B0\u601D\u8DEF\u521B\u9020\u53D8\u5316\uFF0C\u5E76\u5E26\u6765\u7EE9\u6548\u7A81\u7834\u6027\u5730\u63D0\u9AD8 6 \u6267\u7740\u656C\u4E1A \u5BF9\u5F85\u5DE5\u4F5C\u4E13\u4E1A\u6267\u7740\uFF0C\u7CBE\u76CA\u6C42\u7CBE \u5BF9\u4E8E\u672C\u884C\u4E1A\u7684\u7279\u70B9\u6709\u6DF1\u523B\u7684\u8BA4\u8BC6\uFF0C\u79EF\u6781\u4E3B\u52A8\u7684\u4E3A\u516C\u53F8\u601D\u8003\uFF1B\u629B\u5F03\u72ED\u9698\u7684\u4E2A\u4EBA\u7ECF\u9A8C\u4E3B\u4E49\uFF0C\u4E0D\u65AD\u5F00\u62D3\u8FDB\u53D6\uFF1B\u4EE5\u5C0F\u6211\u5B8C\u6210\u5927\u6211\uFF0C\u575A\u4FE1\u516C\u53F8\u7406\u5FF5\uFF0C\u4EE5\u516C\u53F8\u5229\u76CA\u4E3A\u91CD\uFF1B\u6559\u5B66\u76F8\u957F\uFF1A\u4EBA\u4EBA\u5FC5\u987B\u65E2\u80FD\u5F53\u8001\u5E08\u6559\u522B\u4EBA\uFF0C\u4E5F\u80FD\u505A\u5B66\u751F\u4E0D\u65AD\u7684\u6C42\u6559\u4ED6\u4EBA\uFF1B\u6811\u7ACB\u6807\u6746\uFF1A\u65F6\u523B\u8FCE\u63A5\u6311\u6218\uFF0C\u5B9A\u671F\u5BFB\u627E\u5B66\u4E60\u6807\u6746\uFF0C\u4E0D\u65AD\u4E89\u53D6\u8D85\u8D8A\u5BF9\u65B9\uFF1B 7 \u6B63\u76F4\u8BDA\u4FE1 \u6C38\u8FDC\u4FDD\u6301\u6B63\u76F4\u8BDA\u4FE1\uFF0C\u8A00\u51FA\u5FC5\u8DF5 \u4E0D\u4F20\u64AD\u672A\u7ECF\u8BC1\u5B9E\u7684\u6D88\u606F\uFF0C\u4E0D\u80CC\u540E\u4E0D\u8D1F\u8D23\u4EFB\u5730\u8BAE\u8BBA\u4E8B\u548C\u4EBA\uFF1B\u8BDA\u5B9E\u6B63\u76F4\uFF0C\u8868\u91CC\u5982\u4E00\u901A\u8FC7\u6B63\u786E\u7684\u6E20\u9053\u548C\u6D41\u7A0B\uFF0C\u51C6\u786E\u8868\u8FBE\u81EA\u5DF1\u7684\u89C2\u70B9\uFF1B\u8868\u8FBE\u6279\u8BC4\u610F\u89C1\u7684\u540C\u65F6\u80FD\u63D0\u51FA\u76F8\u5E94\u5EFA\u8BAE\uFF0C\u76F4\u8A00\u6709\u8BB3\u52C7\u4E8E\u627F\u8BA4\u9519\u8BEF\uFF0C\u6562\u4E8E\u627F\u62C5\u8D23\u4EFB\uFF0C\u5E76\u53CA\u65F6\u6539\u6B63\u5BF9\u635F\u5BB3\u516C\u53F8\u5229\u76CA\u7684\u4E0D\u8BDA\u4FE1\u884C\u4E3A\u6B63\u786E\u6709\u6548\u5730\u5236\u6B62\uFF0C\u5E76\u80FD\u6B63\u9762\u5F15\u5BFC\uFF1B 8 \u52C7\u62C5\u8D23\u4EFB \u627F\u62C5\u793E\u4F1A\u548C\u516C\u53F8\u6240\u8D4B\u4E88\u7684\u8D23\u4EFB\uFF0C\u4E3A\u81EA\u5DF1\u548C\u5BB6\u4EBA\u7684\u5E78\u798F\u800C\u4E0D\u61C8\u52AA\u529B\u3002 \u4ECA\u5929\u7684\u4E8B\u4E0D\u63A8\u5230\u660E\u5929\uFF0C\u4E0A\u73ED\u65F6\u95F4\u53EA\u505A\u4E0E\u5DE5\u4F5C\u6709\u5173\u7684\u4E8B\u60C5\u9075\u5FAA\u5FC5\u8981\u7684\u5DE5\u4F5C\u6D41\u7A0B\uFF0C\u6CA1\u6709\u56E0\u5DE5\u4F5C\u5931\u804C\u800C\u9020\u6210\u7684\u91CD\u590D\u9519\u8BEF\u5148\u627F\u62C5\u81EA\u5DF1\u7684\u8D23\u4EFB\uFF0C\u518D\u8FFD\u7A76\u5176\u4ED6\u4EBA\u7684\u8D23\u4EFB\u5C06\u8D23\u4EFB\u7EC6\u5316\u5230\u6BCF\u4E00\u4E2A\u5DE5\u4F5C\u73AF\u8282\u4E2D\uFF0C\u4E0D\u65AD\u8D28\u7591\u548C\u6539\u8FDB\u5DE5\u4F5C\uFF0C\u5E76\u5BF9\u81EA\u5DF1\u5DE5\u4F5C\u7684\u7ED3\u679C\u8D1F\u8D23\u5B8C\u6210\u4E2A\u4EBA\u548C\u56E2\u961F\u8D23\u4EFB\u76EE\u6807 </p></div></div></div></div></section><section id="about" class="about-section" data-v-b5c5e3e3><div class="container" data-v-b5c5e3e3><div class="section-header" data-v-b5c5e3e3><h2 class="section-title" data-v-b5c5e3e3>\u9879\u76EE\u80CC\u666F</h2><div class="section-divider" data-v-b5c5e3e3></div><p class="section-subtitle" data-v-b5c5e3e3>\u54CD\u5E94\u56FD\u5BB6\u653F\u7B56\u53F7\u53EC\uFF0C\u89E3\u51B3\u4F20\u7EDF\u519C\u8D38\u75DB\u70B9\uFF0C\u52A9\u529B\u4E61\u6751\u632F\u5174</p></div><div class="about-content" data-v-b5c5e3e3><div class="about-text" data-v-b5c5e3e3><h3 class="about-title" data-v-b5c5e3e3>\u653F\u7B56\u9A71\u52A8</h3><p class="about-paragraph" data-v-b5c5e3e3> \u56FD\u5BB6\u5927\u529B\u63A8\u52A8\u519C\u4EA7\u54C1\u6D41\u901A\u4F53\u7CFB\u73B0\u4EE3\u5316\uFF0C\u5EFA\u8BBE\u5168\u56FD\u7EDF\u4E00\u5927\u5E02\u573A\uFF0C\u5B9E\u65BD&quot;\u6570\u5546\u5174\u519C&quot;\u5DE5\u7A0B\uFF0C\u5F3A\u8C03\u98DF\u54C1\u5B89\u5168\u6EAF\u6E90\u3002\u6D77\u5357\u7701\u4E5F\u51FA\u53F0\u4E86\u667A\u6167\u519C\u8D38\u5E02\u573A\u5EFA\u8BBE\u6307\u5F15\uFF0C\u8981\u6C42\u63D0\u5347\u5E02\u573A\u4FE1\u606F\u5316\u3001\u667A\u80FD\u5316\u3001\u6570\u5B57\u5316\u6C34\u5E73\u3002 </p><h3 class="about-title" data-v-b5c5e3e3>\u884C\u4E1A\u75DB\u70B9</h3><p class="about-paragraph" data-v-b5c5e3e3> \u4F20\u7EDF\u519C\u8D38\u5E02\u573A\u5B58\u5728\u4FE1\u606F\u4E0D\u5BF9\u79F0\uFF08\u4E2D\u95F4\u5546\u5DEE\u4EF7\u5360\u6BD430%\uFF09\u3001\u4F9B\u5E94\u94FE\u5197\u957F\uFF08\u6D41\u901A\u635F\u8017\u738725%\uFF09\u3001\u6EAF\u6E90\u56F0\u96BE\uFF08\u98DF\u54C1\u5B89\u5168\u6295\u8BC9\u5E74\u589E25%\uFF09\u7B49\u95EE\u9898\u3002\u5168\u56FD1.2\u4E07\u4E2A\u519C\u8D38\u5E02\u573A\u4E2D90%\u5F85\u6570\u5B57\u5316\u6539\u9020\uFF0C\u5C0F\u519C\u6237\u9762\u4E34&quot;\u5356\u8D27\u96BE&quot;\uFF0C\u6D88\u8D39\u8005\u7F3A\u4E4F\u4FE1\u4EFB\uFF0C\u5E02\u573A\u7BA1\u7406\u6548\u7387\u4F4E\u4E0B\u3002 </p><h3 class="about-title" data-v-b5c5e3e3>\u9879\u76EE\u5FC5\u8981\u6027</h3><p class="about-paragraph" data-v-b5c5e3e3> \u672C\u9879\u76EE<a href="#" data-v-b5c5e3e3>&quot;\u519C\u94FE\u5929\u4E0B&quot;</a>\u76F4\u63A5\u5951\u5408\u56FD\u5BB6\u53CA\u6D77\u5357\u7701\u5173\u4E8E\u667A\u6167\u519C\u8D38\u3001\u6570\u5B57\u4E61\u6751\u3001\u7EDF\u4E00\u5927\u5E02\u573A\u5EFA\u8BBE\u7684\u6218\u7565\u65B9\u5411\uFF0C\u80FD\u591F\u89E3\u51B3\u884C\u4E1A\u75DB\u70B9\uFF0C\u4FDD\u969C\u98DF\u54C1\u5B89\u5168\uFF0C\u8D4B\u80FD\u4E61\u6751\u632F\u5174\uFF0C\u63A2\u7D22\u521B\u65B0\u6A21\u5F0F\u3002 </p><h3 class="about-title" data-v-b5c5e3e3>\u5E02\u573A\u673A\u9047</h3><p class="about-paragraph" data-v-b5c5e3e3> \u5168\u56FD\u519C\u4EA7\u54C1\u5E74\u4EA4\u6613\u989D\u8D8510\u4E07\u4EBF\u5143\uFF0C\u6570\u5B57\u5316\u6E17\u900F\u7387\u4E0D\u8DB315%\uFF0C\u653F\u7B56\u7EA2\u5229\u4E0E\u5E02\u573A\u7A7A\u767D\u5F62\u6210\u53CC\u91CD\u673A\u9047\u3002\u5E73\u53F0\u5DF2\u9A8C\u8BC1\u5355\u5E02\u573A\u5E74\u5747\u6536\u76CA\u53EF\u8FBE80-120\u4E07\u5143\uFF0C\u6D77\u5357\u7701\u8BD5\u70B9\u9879\u76EE\u5E26\u52A8\u519C\u6237\u6536\u5165\u589E\u957F200%\uFF0C\u5C55\u73B0\u5F3A\u52B2\u76C8\u5229\u80FD\u529B\u3002 </p></div><div class="market-potential" data-v-b5c5e3e3><div class="potential-chart" data-v-b5c5e3e3>`);
      _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
      _push(`</div><div class="potential-stats" data-v-b5c5e3e3><div class="stat-item" data-v-b5c5e3e3><div class="stat-value" data-v-b5c5e3e3>10\u4E07\u4EBF+</div><div class="stat-label" data-v-b5c5e3e3>\u5E74\u4EA4\u6613\u989D</div></div><div class="stat-item" data-v-b5c5e3e3><div class="stat-value" data-v-b5c5e3e3>1.2\u4E07+</div><div class="stat-label" data-v-b5c5e3e3>\u5F85\u6539\u9020\u5E02\u573A</div></div><div class="stat-item" data-v-b5c5e3e3><div class="stat-value" data-v-b5c5e3e3>80-120\u4E07</div><div class="stat-label" data-v-b5c5e3e3>\u5355\u5E02\u573A\u5E74\u5747\u6536\u76CA</div></div></div></div></div></div></section><section id="services" class="services-section" data-v-b5c5e3e3><div class="container" data-v-b5c5e3e3><div class="section-header" data-v-b5c5e3e3><h2 class="section-title" data-v-b5c5e3e3>\u6838\u5FC3\u529F\u80FD</h2><div class="section-divider" data-v-b5c5e3e3></div><p class="section-subtitle" data-v-b5c5e3e3>\u6253\u9020\u96C6\u7EBF\u4E0A\u4EA4\u6613\u3001\u4F9B\u5E94\u94FE\u5BF9\u63A5\u3001\u7CBE\u51C6\u6EAF\u6E90\u4E8E\u4E00\u4F53\u7684\u667A\u6167\u519C\u8D38\u5E73\u53F0</p></div><div class="services-grid" data-v-b5c5e3e3><div class="service-card" data-v-b5c5e3e3><img${ssrRenderAttr("src", _imports_1)} alt="" data-v-b5c5e3e3><h3 class="service-title" data-v-b5c5e3e3>\u7EBF\u4E0A\u644A\u4F4D</h3><p class="service-description" data-v-b5c5e3e3>\u4E3A\u5B9E\u4F53\u644A\u4E3B\u5F00\u8BBE\u7EBF\u4E0A\u865A\u62DF\u644A\u4F4D\uFF0C\u5B9E\u73B0\u7EBF\u4E0A\u7EBF\u4E0B\u878D\u5408\u7ECF\u8425\uFF0C\u7A81\u7834\u5730\u57DF\u9650\u5236\uFF0C\u63A5\u53D7\u5168\u56FD\u8BA2\u5355\u3002</p></div><div class="service-card" data-v-b5c5e3e3><img${ssrRenderAttr("src", _imports_2)} alt="" data-v-b5c5e3e3><h3 class="service-title" data-v-b5c5e3e3>\u6E90\u5934\u76F4\u91C7</h3><p class="service-description" data-v-b5c5e3e3>\u8FDE\u63A5\u519C\u8D38\u5E02\u573A\u9644\u8FD1\u83DC\u519C\u3001\u5C0F\u519C\u573A\u3001\u519C\u4E1A\u57FA\u5730\uFF0C\u4E3A\u644A\u4E3B/\u6D88\u8D39\u8005\u63D0\u4F9B\u4E00\u624B\u8D27\u6E90\u4FE1\u606F\uFF0C\u964D\u4F4E\u91C7\u8D2D\u6210\u672C\u3002</p></div><div class="service-card" data-v-b5c5e3e3><img${ssrRenderAttr("src", _imports_3)} alt="" data-v-b5c5e3e3><h3 class="service-title" data-v-b5c5e3e3>\u519C\u6237\u76F4\u9500</h3><p class="service-description" data-v-b5c5e3e3>\u4E3A\u519C\u6237\u63D0\u4F9B\u53D1\u5E03\u519C\u4EA7\u54C1\u4F9B\u7ED9\u4FE1\u606F\u3001\u5728\u7EBF\u63A5\u5355\u7684\u6E20\u9053\uFF0C\u652F\u6301\u9001\u81F3\u9644\u8FD1\u519C\u8D38\u5E02\u573A\u4EE3\u6536\u70B9\u6216\u7269\u6D41\u5230\u5BB6\u3002</p></div><div class="service-card" data-v-b5c5e3e3><img${ssrRenderAttr("src", _imports_4)} alt="" data-v-b5c5e3e3><h3 class="service-title" data-v-b5c5e3e3>\u5168\u94FE\u6EAF\u6E90</h3><p class="service-description" data-v-b5c5e3e3>\u8981\u6C42\u6240\u6709\u7ECF\u8425\u4E3B\u4F53\u8FDB\u884C\u771F\u5B9E\u8EAB\u4EFD\u8BA4\u8BC1\uFF0C\u8BB0\u5F55\u519C\u4EA7\u54C1\u79CD\u517B\u3001\u4EA4\u6613\u4FE1\u606F\uFF0C\u5B9E\u73B0&quot;\u4ECE\u7530\u95F4\u5230\u9910\u684C&quot;\u7684\u5168\u7A0B\u53EF\u8FFD\u6EAF\u3002</p></div><div class="service-card" data-v-b5c5e3e3><img${ssrRenderAttr("src", _imports_5)} alt="" data-v-b5c5e3e3><h3 class="service-title" data-v-b5c5e3e3>\u5927\u6570\u636E\u5206\u6790</h3><p class="service-description" data-v-b5c5e3e3>\u63D0\u4F9B\u7528\u6237\u884C\u4E3A\u5206\u6790\u3001\u4F9B\u9700\u9884\u6D4B\u3001\u7CBE\u51C6\u8425\u9500\u7B49\u529F\u80FD\uFF0C\u5E2E\u52A9\u644A\u4E3B\u548C\u519C\u6237\u505A\u51FA\u66F4\u660E\u667A\u7684\u7ECF\u8425\u51B3\u7B56\u3002</p></div><div class="service-card" data-v-b5c5e3e3><img${ssrRenderAttr("src", _imports_6)} alt="" data-v-b5c5e3e3><h3 class="service-title" data-v-b5c5e3e3>\u652F\u4ED8\u5B89\u5168</h3><p class="service-description" data-v-b5c5e3e3>\u96C6\u6210\u591A\u79CD\u652F\u4ED8\u65B9\u5F0F\uFF0C\u4FDD\u969C\u4EA4\u6613\u5B89\u5168\uFF0C\u63D0\u4F9B\u4FBF\u6377\u7684\u7ED3\u7B97\u670D\u52A1\uFF0C\u652F\u6301\u5B9E\u65F6\u5230\u8D26\u3002</p></div></div></div></section><section class="application-section" id="advantage" data-v-b5c5e3e3><div class="container" data-v-b5c5e3e3><div class="section-header" data-v-b5c5e3e3><h2 class="section-title" data-v-b5c5e3e3>\u6838\u5FC3\u6295\u8D44\u4F18\u52BF</h2><div class="section-divider" data-v-b5c5e3e3></div><p class="section-subtitle" data-v-b5c5e3e3>\u653F\u7B56\u7EA2\u5229+\u6280\u672F\u58C1\u5792+\u6210\u719F\u6A21\u5F0F\uFF0C\u4E09\u5927\u6838\u5FC3\u7ADE\u4E89\u529B</p></div><div class="advantages-grid" data-v-b5c5e3e3><div class="advantage-card" data-v-b5c5e3e3><div class="advantage-icon" data-v-b5c5e3e3><img${ssrRenderAttr("src", _imports_7)} alt="" data-v-b5c5e3e3></div><h3 class="advantage-title" data-v-b5c5e3e3>\u653F\u7B56\u7EA2\u5229</h3><p class="advantage-desc" data-v-b5c5e3e3> \u4EAB\u53D7\u56FD\u5BB6\u53CA\u5730\u65B9\u653F\u5E9C\u53CC\u91CD\u8865\u8D34\uFF0C\u5408\u4F5C\u9879\u76EE\u53EF\u7533\u62A5\u4E13\u9879\u6276\u6301\u8D44\u91D1\uFF0C\u653F\u7B56\u652F\u6301\u529B\u5EA6\u5927\uFF0C\u9879\u76EE\u5408\u89C4\u6027\u9AD8 </p></div><div class="advantage-card" data-v-b5c5e3e3><div class="advantage-icon" data-v-b5c5e3e3><img${ssrRenderAttr("src", _imports_8)} alt="" data-v-b5c5e3e3></div><h3 class="advantage-title" data-v-b5c5e3e3>\u6280\u672F\u58C1\u5792</h3><p class="advantage-desc" data-v-b5c5e3e3> 8\u9879\u8F6F\u4EF6\u8457\u4F5C\u6743\uFF0C\u533A\u5757\u94FE\u6EAF\u6E90+AI\u5B9A\u4EF7+\u5927\u6570\u636E\u5206\u6790\u6280\u672F\uFF0C\u6784\u5EFA\u9AD8\u58C1\u5792\u6280\u672F\u4F53\u7CFB </p></div><div class="advantage-card" data-v-b5c5e3e3><div class="advantage-icon" data-v-b5c5e3e3><img${ssrRenderAttr("src", _imports_9)} alt="" data-v-b5c5e3e3></div><h3 class="advantage-title" data-v-b5c5e3e3>\u6210\u719F\u6A21\u5F0F</h3><p class="advantage-desc" data-v-b5c5e3e3> \u8BD5\u70B9\u9A8C\u8BC1\u7684&quot;1+3&quot;\u76C8\u5229\u6A21\u578B\uFF0C\u5355\u5E02\u573A\u5E73\u57476-12\u4E2A\u6708\u6536\u56DE\u6210\u672C\uFF0C\u73B0\u91D1\u6D41\u7A33\u5B9A </p></div><div class="advantage-card" data-v-b5c5e3e3><div class="advantage-icon" data-v-b5c5e3e3><img${ssrRenderAttr("src", _imports_10)} alt="" data-v-b5c5e3e3></div><h3 class="advantage-title" data-v-b5c5e3e3>\u56E2\u961F\u4F18\u52BF</h3><p class="advantage-desc" data-v-b5c5e3e3> \u6838\u5FC3\u56E2\u961F\u62E5\u670910\u5E74+\u519C\u8D38\u884C\u4E1A\u7ECF\u9A8C\u4E0E\u4E92\u8054\u7F51\u6280\u672F\u80CC\u666F\uFF0C\u5B9E\u6218\u7ECF\u9A8C\u4E30\u5BCC </p></div></div></div></section><section class="application-section" id="scene" data-v-b5c5e3e3><div class="container" data-v-b5c5e3e3><div class="section-header" data-v-b5c5e3e3><h2 class="section-title" data-v-b5c5e3e3>\u5E94\u7528\u573A\u666F</h2><div class="section-divider" data-v-b5c5e3e3></div><p class="section-subtitle" data-v-b5c5e3e3>\u8986\u76D6\u519C\u4EA7\u54C1\u6D41\u901A\u5168\u94FE\u6761\uFF0C\u670D\u52A1\u591A\u65B9\u4E3B\u4F53</p></div><div class="scenes-grid" data-v-b5c5e3e3><div class="scene-card" data-v-b5c5e3e3><h3 class="scene-title" data-v-b5c5e3e3>\u519C\u8D38\u5E02\u573A\u644A\u4E3B</h3><ul class="scene-list" data-v-b5c5e3e3><li data-v-b5c5e3e3>\u7EBF\u4E0A\u7EBF\u4E0B\u4E00\u4F53\u5316\u7ECF\u8425\uFF0C\u8BA2\u5355\u91CF\u589E\u957F40%</li><li data-v-b5c5e3e3>\u6E90\u5934\u76F4\u91C7\u964D\u4F4E\u91C7\u8D2D\u6210\u672C\uFF0C\u5229\u6DA6\u7387\u63D0\u534725%</li><li data-v-b5c5e3e3>\u6570\u636E\u9A71\u52A8\u7ECF\u8425\uFF0C\u7CBE\u51C6\u628A\u63E1\u5E02\u573A\u9700\u6C42</li></ul></div><div class="scene-card" data-v-b5c5e3e3><h3 class="scene-title" data-v-b5c5e3e3>\u519C\u6237\u4E0E\u5408\u4F5C\u793E</h3><ul class="scene-list" data-v-b5c5e3e3><li data-v-b5c5e3e3>\u76F4\u63A5\u5BF9\u63A5\u5E02\u573A\uFF0C\u53BB\u9664\u4E2D\u95F4\u5546\uFF0C\u6536\u5165\u589E\u957F50%</li><li data-v-b5c5e3e3>\u6309\u9700\u79CD\u690D\uFF0C\u51CF\u5C11\u519C\u4EA7\u54C1\u6EDE\u9500\u98CE\u9669</li><li data-v-b5c5e3e3>\u83B7\u53D6\u5E02\u573A\u6570\u636E\uFF0C\u4F18\u5316\u79CD\u690D\u7ED3\u6784</li></ul></div><div class="scene-card" data-v-b5c5e3e3><h3 class="scene-title" data-v-b5c5e3e3>\u6D88\u8D39\u8005</h3><ul class="scene-list" data-v-b5c5e3e3><li data-v-b5c5e3e3>\u968F\u65F6\u968F\u5730\u8D2D\u4E70\u65B0\u9C9C\u519C\u4EA7\u54C1\uFF0C\u914D\u9001\u4E0A\u95E8</li><li data-v-b5c5e3e3>\u67E5\u770B\u4EA7\u54C1\u6EAF\u6E90\u4FE1\u606F\uFF0C\u653E\u5FC3\u6D88\u8D39</li><li data-v-b5c5e3e3>\u4EF7\u683C\u900F\u660E\uFF0C\u4EAB\u53D7\u66F4\u591A\u5B9E\u60E0</li></ul></div><div class="scene-card" data-v-b5c5e3e3><h3 class="scene-title" data-v-b5c5e3e3>\u5E02\u573A\u7BA1\u7406\u65B9\u53CA\u653F\u5E9C\u90E8\u95E8</h3><ul class="scene-list" data-v-b5c5e3e3><li data-v-b5c5e3e3>\u5E02\u573A\u4FE1\u606F\u5316\u5347\u7EA7\uFF0C\u63D0\u5347\u6574\u4F53\u5F62\u8C61</li><li data-v-b5c5e3e3>\u667A\u80FD\u5316\u7BA1\u7406\uFF0C\u6548\u7387\u63D0\u534760%</li><li data-v-b5c5e3e3>\u6570\u636E\u5316\u8FD0\u8425\uFF0C\u7BA1\u7406\u8D39\u6536\u5165\u589E\u957F80%</li></ul></div></div></div></section><section class="application-section" id="process" data-v-b5c5e3e3><div class="container" data-v-b5c5e3e3><div class="section-header" data-v-b5c5e3e3><h2 class="section-title" data-v-b5c5e3e3>\u5408\u4F5C\u6D41\u7A0B</h2><div class="section-divider" data-v-b5c5e3e3></div><p class="section-subtitle" data-v-b5c5e3e3>\u516D\u6B65\u8F7B\u677E\u5408\u4F5C\uFF0C\u5F00\u542F\u8D22\u5BCC\u4E4B\u65C5</p></div><div class="process-steps" data-v-b5c5e3e3><div class="step-item" data-v-b5c5e3e3><div class="step-number" data-v-b5c5e3e3>1</div><div class="step-content" data-v-b5c5e3e3><h3 class="step-title" data-v-b5c5e3e3>\u521D\u6B65\u6D3D\u8C08</h3><p class="step-desc" data-v-b5c5e3e3> \u901A\u8FC7\u7535\u8BDD\u3001\u90AE\u4EF6\u6216\u9762\u8C08\uFF0C\u521D\u6B65\u4E86\u89E3\u9879\u76EE\u60C5\u51B5\u4E0E\u5408\u4F5C\u610F\u5411 </p></div></div><div class="step-item" data-v-b5c5e3e3><div class="step-number" data-v-b5c5e3e3>2</div><div class="step-content" data-v-b5c5e3e3><h3 class="step-title" data-v-b5c5e3e3>\u8D44\u8D28\u5BA1\u6838</h3><p class="step-desc" data-v-b5c5e3e3> \u63D0\u4EA4\u516C\u53F8\u8D44\u8D28\u3001\u8D44\u91D1\u8BC1\u660E\u7B49\u6750\u6599\uFF0C\u8BC4\u4F30\u5408\u4F5C\u8D44\u683C </p></div></div><div class="step-item" data-v-b5c5e3e3><div class="step-number" data-v-b5c5e3e3>3</div><div class="step-content" data-v-b5c5e3e3><h3 class="step-title" data-v-b5c5e3e3>\u5B9E\u5730\u8003\u5BDF</h3><p class="step-desc" data-v-b5c5e3e3> \u524D\u5F80\u603B\u90E8\u6216\u6210\u719F\u8BD5\u70B9\u5E02\u573A\u8003\u5BDF\uFF0C\u6DF1\u5165\u4E86\u89E3\u8FD0\u8425\u6A21\u5F0F </p></div></div><div class="step-item" data-v-b5c5e3e3><div class="step-number" data-v-b5c5e3e3>4</div><div class="step-content" data-v-b5c5e3e3><h3 class="step-title" data-v-b5c5e3e3>\u65B9\u6848\u5B9A\u5236</h3><p class="step-desc" data-v-b5c5e3e3> \u6839\u636E\u5408\u4F5C\u9700\u6C42\uFF0C\u5B9A\u5236\u4E13\u5C5E\u5408\u4F5C\u65B9\u6848\u4E0E\u6295\u8D44\u8BA1\u5212 </p></div></div><div class="step-item" data-v-b5c5e3e3><div class="step-number" data-v-b5c5e3e3>5</div><div class="step-content" data-v-b5c5e3e3><h3 class="step-title" data-v-b5c5e3e3>\u7B7E\u7EA6\u57F9\u8BAD</h3><p class="step-desc" data-v-b5c5e3e3> \u7B7E\u8BA2\u5408\u4F5C\u534F\u8BAE\uFF0C\u53C2\u52A0\u7CFB\u7EDF\u57F9\u8BAD\uFF0C\u638C\u63E1\u8FD0\u8425\u6280\u80FD </p></div></div><div class="step-item" data-v-b5c5e3e3><div class="step-number" data-v-b5c5e3e3>6</div><div class="step-content" data-v-b5c5e3e3><h3 class="step-title" data-v-b5c5e3e3>\u843D\u5730\u8FD0\u8425</h3><p class="step-desc" data-v-b5c5e3e3> \u603B\u90E8\u534F\u52A9\u843D\u5730\uFF0C\u63D0\u4F9B\u5168\u7A0B\u8FD0\u8425\u652F\u6301\uFF0C\u786E\u4FDD\u9879\u76EE\u987A\u5229\u542F\u52A8 </p></div></div></div></div></section><section class="application-section" id="service" data-v-b5c5e3e3><div class="container" data-v-b5c5e3e3><div class="section-header" data-v-b5c5e3e3><h2 class="section-title" data-v-b5c5e3e3>\u63D0\u4F9B\u7684\u670D\u52A1</h2><div class="section-divider" data-v-b5c5e3e3></div><p class="section-subtitle" data-v-b5c5e3e3>\u5168\u65B9\u4F4D\u8D4B\u80FD\uFF0C\u4FDD\u969C\u5408\u4F5C\u65B9\u5229\u76CA</p></div><div class="benefits-grid" data-v-b5c5e3e3><div class="benefit-card" data-v-b5c5e3e3><div class="benefit-icon" data-v-b5c5e3e3><img${ssrRenderAttr("src", _imports_11)} alt="" data-v-b5c5e3e3></div><h3 class="benefit-title" data-v-b5c5e3e3>\u9AD8\u989D\u6536\u76CA\u56DE\u62A5</h3><p class="benefit-desc" data-v-b5c5e3e3> \u53BF\u7EA7\u4EE3\u7406\u5E74\u5747\u6536\u76CA80-120\u4E07\u5143\uFF0C6-12\u4E2A\u6708\u6536\u56DE\u6295\u8D44\u6210\u672C\uFF0C\u6536\u76CA\u7A33\u5B9A\u589E\u957F </p></div><div class="benefit-card" data-v-b5c5e3e3><div class="benefit-icon" data-v-b5c5e3e3><img${ssrRenderAttr("src", _imports_12)} alt="" data-v-b5c5e3e3></div><h3 class="benefit-title" data-v-b5c5e3e3>\u5168\u7A0B\u8FD0\u8425\u652F\u6301</h3><p class="benefit-desc" data-v-b5c5e3e3> \u5E02\u573A\u8C03\u7814\u3001\u7CFB\u7EDF\u90E8\u7F72\u3001\u5546\u6237\u57F9\u8BAD\u5168\u6D41\u7A0B\u670D\u52A1\uFF0C\u4E13\u5C5E\u987E\u95EE7\xD712\u5C0F\u65F6\u54CD\u5E94 </p></div><div class="benefit-card" data-v-b5c5e3e3><div class="benefit-icon" data-v-b5c5e3e3><img${ssrRenderAttr("src", _imports_13)} alt="" data-v-b5c5e3e3></div><h3 class="benefit-title" data-v-b5c5e3e3>\u533A\u57DF\u72EC\u5BB6\u4EE3\u7406</h3><p class="benefit-desc" data-v-b5c5e3e3> \u53BF\u7EA7\u884C\u653F\u5355\u4F4D\u4EC5\u8BBE1\u5BB6\u4EE3\u7406\u5546\uFF0C\u72EC\u4EAB\u533A\u57DF\u5F00\u53D1\u6743\uFF0C\u907F\u514D\u540C\u4E1A\u6076\u6027\u7ADE\u4E89 </p></div><div class="benefit-card" data-v-b5c5e3e3><div class="benefit-icon" data-v-b5c5e3e3><img${ssrRenderAttr("src", _imports_14)} alt="" data-v-b5c5e3e3></div><h3 class="benefit-title" data-v-b5c5e3e3>\u6280\u672F\u7CFB\u7EDF\u652F\u6301</h3><p class="benefit-desc" data-v-b5c5e3e3> \u6301\u7EED\u7684\u7CFB\u7EDF\u5347\u7EA7\u4E0E\u7EF4\u62A4\uFF0C\u786E\u4FDD\u6280\u672F\u9886\u5148\uFF0C\u529F\u80FD\u4E0D\u65AD\u4F18\u5316 </p></div><div class="benefit-card" data-v-b5c5e3e3><div class="benefit-icon" data-v-b5c5e3e3><img${ssrRenderAttr("src", _imports_7)} alt="" data-v-b5c5e3e3></div><h3 class="benefit-title" data-v-b5c5e3e3>\u653F\u7B56\u7533\u62A5\u652F\u6301</h3><p class="benefit-desc" data-v-b5c5e3e3> \u534F\u52A9\u7533\u62A5\u653F\u5E9C\u6276\u6301\u9879\u76EE\uFF0C\u83B7\u53D6\u653F\u7B56\u8865\u8D34\u548C\u8D44\u91D1\u652F\u6301 </p></div><div class="benefit-card" data-v-b5c5e3e3><div class="benefit-icon" data-v-b5c5e3e3><img${ssrRenderAttr("src", _imports_15)} alt="" data-v-b5c5e3e3></div><h3 class="benefit-title" data-v-b5c5e3e3>\u6570\u636E\u589E\u503C\u670D\u52A1</h3><p class="benefit-desc" data-v-b5c5e3e3> \u63D0\u4F9B\u5E02\u573A\u6570\u636E\u5206\u6790\u62A5\u544A\uFF0C\u5E2E\u52A9\u5408\u4F5C\u65B9\u53D1\u73B0\u65B0\u7684\u5546\u4E1A\u673A\u4F1A </p></div></div></div></section>`);
      _push(ssrRenderComponent(footerVue, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-b5c5e3e3"]]);

export { index as default };
//# sourceMappingURL=index-ZPsco3kQ.mjs.map
