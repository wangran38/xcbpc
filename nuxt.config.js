
// export default {
//   css: ['assets/main.css'],
//   plugins: [
//     {src:'./plugins/chart.js',mode:'client'}
//   ],
// }

export default defineNuxtConfig({
  devServer: {
    host:'0.0.0.0'
  },
  build: {
    transpile: [/echarts/],
     extractCSS: true
  },
  ssr: true,
  app: {
    head: {
      viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
      title: '海南积分宝电子商务有限公司',
      meta: [
        { name: 'description', content: `集积分运营、电子商务、应用软件技术于一体的复合型公司海南积分宝电子商务有限公司, 于2011年3月30日在海口成立,注册资金1000万人民币,是一家集积分运营、电子商务、应用软件技术于一体的复合型公司，致力于消费养老、企业咨询管理、文化传播推广与运营等。` },
        { name: 'keywords', content: `乡愁宝,积分宝,全国批发,电商,海南积分宝,全国农村电商平台,乡愁宝大市场,全国招商,买鱼,买肉、线上卖菜、线上买菜` },
    ],
    },
  }
})

