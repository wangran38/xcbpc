import axios from 'file://E:/%E6%B5%B7%E5%8D%97%E7%A7%AF%E5%88%86%E5%AE%9D%E5%85%AC%E5%8F%B8%E5%AE%98%E7%BD%91%E5%BB%BA%E8%AE%BE/CompanyOfficialWebsite/node_modules/axios/index.js';

const instance = axios.create(
  {
    baseURL: "https://api.xcbdsc.com",
    timeout: 5e3
  }
);
instance.interceptors.request.use(async (config) => {
  return config;
});
instance.interceptors.response.use(({ data }) => {
  return data;
});
const request = (url, method, data) => {
  return new Promise((res, rej) => {
    try {
      res(instance.request({ url, method, data }));
    } catch {
      rej("\u8BF7\u6C42\u5F02\u5E38");
    }
  });
};
const citylist = (data) => {
  return request("/api/citylist", "POST", data);
};
const citytree = (data) => {
  return request("/api/citytree", "POST", data);
};
const marketlist = (data) => {
  return request("/api/marketlist", "POST", data);
};
const shopList = (data) => {
  return request("/api/shop/list", "POST", data);
};
const getShopGoods = (data) => {
  return request("/api/market/commodity/list", "POST", data);
};
const getShopComments = (data) => {
  return request("api/shop/list", "POST", data);
};

export { citytree as a, getShopGoods as b, citylist as c, getShopComments as g, marketlist as m, shopList as s };
//# sourceMappingURL=shopping-DrFpzd-f.mjs.map
