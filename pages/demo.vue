<template>
    <div class="shops-page">
        <headerVue></headerVue>
    </div>
</template>
<script>
import { citylist, citytree, marketlist, shopList } from '../apis/shopping'
import headerVue from '../components/headers.vue'
export default {
    data() {
        return {
            selectFoodMarket: null,
            selectCounty: null,
            selecteEconomize: 1,
            selecteMarket: 0,
            foodMarket: [], // 菜市场 
            county: [], // 市县
            market: [], // 市
            economize: [], // 省级城市
            query: { page: 1, limit: 9, isshow: 1, title: null },
            // 店铺数据
            shops: [],
            timer: null,
            isShow: false,
            elementTagOpacity: 0
        };
    },
    components: {
        headerVue
    },
    async mounted() {
        window.addEventListener('resize', () => {
            if (window.innerWidth > 840) {
                this.isShow = false
                this.elementTagOpacity = 0
            }
        })
        this.initsSelectArea()
    },
    methods: {
        switchIsshow() {
            this.isShow = !this.isShow
            this.elementTagOpacity = this.isShow ? 1 : 0
        },
        inputTitle() {
            this.query.page = 1
            clearTimeout(this.timer)
            this.timer = setTimeout(() => {
                this.filterShops(4)
            }, 300)
        },
        getPageData(value) {
            this.query.page += value
            this.filterShops(4)
        },
        // 初始化地区
        async initsSelectArea() {
            let data = await citylist({
                level: 1,
                limit: 100
            })
            if (data.code == 200) {
                this.economize = data.data.listdata
                this.filterShops(1)
            }
        },


        /**
         * @param type  用于检测是几级发起的请求，
         * @param  isChange  菜市场是否发生改变是否需要重置页面
        */
        filterShops(type, isChange = false) {
            switch (type) {
                case 1:
                    citytree({ pid: this.selecteEconomize }).then((data) => {
                        if (data.code == 200) {
                            this.market = data.data
                            this.selecteMarket = data.data[0].id
                            this.filterShops(2)
                        }
                    })
                    break
                case 2:
                    citytree({ pid: this.selecteMarket }).then((data) => {
                        if (data.code == 200) {
                            this.county = data.data
                            this.selectCounty = data.data[0].id
                            this.filterShops(3)
                        }
                    })
                    break;
                case 3:
                    marketlist({ area_id: this.selectCounty, limit: 100 }).then((data) => {
                        if (data.code == 200) {
                            this.foodMarket = data.data.listdata
                            this.selectFoodMarket = data.data.listdata[0].id
                        }
                        this.filterShops(4)
                    })
                case 4:
                    if (isChange) {
                        this.query.page = 1
                    }
                    this.query.market_id = this.selectFoodMarket
                    shopList(this.query).then((data) => {
                        this.shops = data.data.listdata
                        window.scrollTo(0, 100);
                    })
                    break
            }
        },


        // 前往店铺详情
        goToShopDetail(shopId) {
            this.$router.push(`/shops/${shopId}`);
        }
    }
};
</script>
