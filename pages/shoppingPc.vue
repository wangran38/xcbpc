<template>

    <div class="shops-page">
        <headerVue></headerVue>
        <section class="page-title-section">
            <div class="container">
                <h2>合作店铺展示</h2>
                <p>精选优质农产品商户，源头直供，品质保障</p>
            </div>
        </section>


        <section class="filter-section">
            <div class="container">
                <div class="filter-content">


                    <div class="filter-options">
                        <div class="filter-group">
                            <label>省:</label>
                            <select v-model="selecteEconomize" @change="filterShops(1)">
                                <option v-for="item in economize" :value="item.id" :key="item.id">{{ item.name }}
                                </option>
                            </select>
                        </div>
                        <div class="filter-group">
                            <label>市:</label>
                            <select v-model="selecteMarket" @change="filterShops(2)">
                                <option v-for="item in market" :value="item.id" :key="item.id">{{ item.name }}
                                </option>
                            </select>
                        </div>
                        <div class="filter-group">
                            <label>县/区:</label>
                            <select v-model="selectCounty" @change="filterShops(3)">
                                <option v-for="item in county" :value="item.id" :key="item.id">{{ item.name }}
                                </option>
                            </select>
                        </div>
                        <div class="filter-group">
                            <label>菜市场:</label>
                            <select v-model="selectFoodMarket" @change="filterShops(4, true);">
                                <option v-for="item in foodMarket" :value="item.id" :key="item.id">{{ item.marketname }}
                                </option>
                            </select>
                        </div>

                        <!-- <div class="filter-group">
                            <label>排序方式:</label>
                            <select v-model="sortBy" @change="filterShops">
                                <option value="default">默认排序</option>
                                <option value="rating">评分最高</option>
                                <option value="distance">距离最近</option>
                                <option value="newest">最新入驻</option>
                            </select>
                        </div> -->
                    </div>

                    <div class="search-box">
                        <input type="text" v-model="query.title" placeholder="搜索店铺" @input="inputTitle">
                        <button class="search-btn">🔍</button>
                    </div>
                </div>
            </div>
        </section>
        <section class="shops-list-section">
            <div class="container">
                <div class="shops-grid">
                    <div class="shop-card" v-for="shop in shops" :key="shop.id">
                        <div class="shop-image">
                            <img :src="shop.logo" :alt="shop.name">
                            <div class="shop-badge" :class="shop.type">
                                {{ shop.category_name }}
                            </div>
                            <div class="shop-rating">
                                <span class="star">★</span>
                                <span class="score">{{ 111 }}</span>
                            </div>
                        </div>

                        <div class="shop-info">
                            <h3 class="shop-name">{{ shop.title }}</h3>

                            <div class="shop-location">
                                <i class="location-icon"></i>
                                <span>{{ shop.market_address }}</span>
                                <span class="distance">{{ shop.distance }}</span>
                            </div>

                            <div class="shop-tags">
                                <span class="tag" v-for="(tag, index) in shop.tags" :key="index">
                                    {{ tag }}
                                </span>
                            </div>

                            <div class="shop-features">
                                <div class="feature-item" v-if="true">
                                    <i class="online-icon"></i>
                                    <span>支持线上下单</span>
                                </div>
                                <div class="feature-item" v-if="true">
                                    <i class="delivery-icon"></i>
                                    <span>满额免配送费</span>
                                </div>
                                <div class="feature-item" v-if="true">
                                    <i class="promo-icon"></i>
                                    <span>有优惠活动</span>
                                </div>
                            </div>
                        </div>

                        <div class="shop-actions">
                            <button class="enter-btn" @click="viewDetails(shop)">查看店铺</button>

                        </div>
                    </div>
                </div>

                <!-- 无结果提示 -->
                <div class="no-result" v-if="shops.length === 0">
                    <p>没有找到符合条件的店铺，请尝试其他筛选条件</p>
                </div>

                <!-- 分页 -->
                <paginationVue :currentPage="query.page" :pageSize="query.limit" :totalItems="totalnum"
                    @page-change="getPageData">
                </paginationVue>

            </div>
        </section>
        <footerVue></footerVue>
    </div>
</template>

<script>
import { citylist, citytree, marketlist, shopList } from '../apis/shopping'
import headerVue from '../components/headers.vue'
import footerVue from '../components/footers.vue'
import paginationVue from '../components/pagination.vue'
export default {
    data() {
        return {
            needLink: true,   // 控制是否多级联动
            selectFoodMarket: null,
            selectCounty: null,
            selecteEconomize: null, // 省
            selecteMarket: 2306,  // 市
            foodMarket: [], // 菜市场 
            county: [], // 市县
            market: [], // 市
            economize: [], // 省级城市
            query: { page: 1, limit: 9, isshow: 1, title: null },
            totalnum: null,
            // 店铺数据
            shops: [],
            timer: null,
            isShow: false,
            elementTagOpacity: 0,
            isInit: true,
            keyValue: 500,
        };
    },
    components: {
        headerVue,
        footerVue,
        paginationVue
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

        /**
         * @param type  用于检测是几级发起的请求，
         * @param  isChange  菜市场是否发生改变是否需要重置页面
        */
        filterShops(type, isChange = false, needLink = true) {
            return new Promise(async (resolve, reject) => {
                try {
                    switch (type) {
                        case 1: // 省级变更
                            const data1 = await citytree({ pid: this.selecteEconomize });
                            if (data1.code === 200) {
                                this.market = data1.data || [];
                                this.selecteMarket = this.market.length > 0 ? this.market[0].id : null;

                                // 用户手动选择时自动触发下一级，初始化时由initSelect控制
                                if (needLink && this.market.length > 0) {
                                    resolve(); // 先标记当前步骤完成
                                    await this.filterShops(2, false, true); // 继续联动
                                } else {
                                    resolve();
                                }
                            } else {
                                reject(new Error("获取市级数据失败"));
                            }
                            break;

                        case 2: // 市级变更
                            const data2 = await citytree({ pid: this.selecteMarket });
                            if (data2.code === 200) {
                                this.county = data2.data || [];
                                this.selectCounty = this.county.length > 0 ? this.county[0].id : null;

                                if (needLink && this.county.length > 0) {
                                    resolve();
                                    await this.filterShops(3, false, true);
                                } else {
                                    resolve();
                                }
                            } else {
                                reject(new Error("获取县级数据失败"));
                            }
                            break;

                        case 3: // 县级变更
                            const data3 = await marketlist({ area_id: this.selectCounty, limit: 100 });
                            if (data3.code === 200) {
                                this.foodMarket = data3.data?.listdata || [];
                                this.selectFoodMarket = this.foodMarket.length > 0 ? this.foodMarket[0].id : null;

                                if (needLink && this.foodMarket.length > 0) {
                                    resolve();
                                    await this.filterShops(4, false, true);
                                } else {
                                    resolve();
                                }
                            } else {
                                reject(new Error("获取菜市场数据失败"));
                            }
                            break;

                        case 4: // 菜市场变更
                            if (isChange) {
                                this.query.page = 1;
                            }
                            this.query.market_id = this.selectFoodMarket;
                            const data4 = await shopList(this.query);
                            this.shops = data4.data?.listdata || [];
                            this.totalnum = data4.data.totalnum
                            // window.scrollTo(0, 100);
                            resolve();
                            break;

                        default:
                            resolve();
                    }
                } catch (error) {
                    reject(error);
                }
            });
        },

        // 初始化选择（关闭自动联动，手动控制流程）
        async initSelect() {
            try {
                this.selecteEconomize = 2291;
                await this.filterShops(1, false, false); // 最后一个参数关闭联动

                this.selecteMarket = 2306;
                await this.filterShops(2, false, false);

                this.selectCounty = 2313;
                await this.filterShops(3, false, false);

                this.selectFoodMarket = 23801;
                await this.filterShops(4);
            } catch (error) {
                console.error("初始化筛选失败：", error);
            }
        },
        viewDetails(item) {
            location.assign(`/storeDetails?id=${item.id}`)
        },
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
            this.query.page = value
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
                this.initSelect()
            }

        },



        // filterShops(type, isChange = false) {
        //     return new Promise(async (resolve, reject) => {
        //         try {
        //             switch (type) {
        //                 case 1:
        //                     console.log("更新市级数据");
        //                     const data1 = await citytree({ pid: this.selecteEconomize });
        //                     if (data1.code === 200) {
        //                         this.market = data1.data || []; // 确保有默认空数组
        //                         // 只在有数据时设置，避免报错
        //                         this.selecteMarket = this.market.length > 0 ? this.market[0].id : null;
        //                         resolve(); // 只负责当前级别的完成，不主动调用下一级
        //                     } else {
        //                         reject(new Error("获取市级数据失败"));
        //                     }
        //                     break;

        //                 case 2:
        //                     console.log("更新县级数据");
        //                     const data2 = await citytree({ pid: this.selecteMarket });
        //                     if (data2.code === 200) {
        //                         this.county = data2.data || [];
        //                         this.selectCounty = this.county.length > 0 ? this.county[0].id : null;
        //                         resolve();
        //                     } else {
        //                         reject(new Error("获取县级数据失败"));
        //                     }
        //                     break;

        //                 case 3:
        //                     console.log("更新菜市场数据");
        //                     const data3 = await marketlist({ area_id: this.selectCounty, limit: 100 });
        //                     if (data3.code === 200) {
        //                         this.foodMarket = data3.data?.listdata || []; // 可选链处理data可能为null的情况
        //                         this.selectFoodMarket = this.foodMarket.length > 0 ? this.foodMarket[0].id : null;
        //                         resolve();
        //                     } else {
        //                         reject(new Error("获取菜市场数据失败"));
        //                     }
        //                     break;

        //                 case 4:
        //                     console.log("更新摊主数据");
        //                     if (isChange) {
        //                         this.query.page = 1;
        //                     }
        //                     this.query.market_id = this.selectFoodMarket;
        //                     // 等待shopList请求完成后再resolve
        //                     const data4 = await shopList(this.query);
        //                     this.shops = data4.data?.listdata || [];
        //                     window.scrollTo(0, 100);
        //                     resolve();
        //                     break;

        //                 default:
        //                     resolve();
        //             }
        //         } catch (error) {
        //             reject(error); // 捕获所有异步错误并reject
        //         }
        //     });
        // },


        // 前往店铺详情
        goToShopDetail(shopId) {
            this.$router.push(`/shops/${shopId}`);
        }
    }
};
</script>


<style lang="scss">
.shops-page {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: #333;
    background-color: #f9f9f9;
}

// 页面标题区域
.page-title-section {
    margin-left: -10px;
    margin-right: -10px;

    opacity: .8;
    position: relative;
    height: 300px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #2274df;

    .container {
        text-align: center;
        color: white;
        padding: 20px;

        h2 {
            font-size: 2.5rem;
            margin-bottom: 15px;
            text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
        }

        p {
            font-size: 1.2rem;
            max-width: 600px;
            margin: 0 auto;
            opacity: 0.9;
        }
    }
}

// 筛选区域
.filter-section {
    background-color: white;
    padding: 20px 0;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);

    .container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 20px;
    }


    .filter-options {
        margin: 10px;
        display: flex;
        flex-wrap: wrap;
        gap: 15px;
        flex: 1;
        min-width: 300px;
    }

    .filter-group {
        display: flex;
        align-items: center;
        gap: 8px;

        label {
            font-weight: 500;
            color: #666;
        }

        select {
            padding: 8px 12px;
            border: 1px solid #ddd;
            border-radius: 4px;
            background-color: white;
            cursor: pointer;
            transition: border-color 0.3s;

            &:focus {
                outline: none;
                border-color: #4CAF50;
            }
        }
    }

    .search-box {
        display: flex;
        min-width: 250px;

        input {
            flex: 1;
            padding: 10px 15px;
            border: 1px solid #ddd;
            border-right: none;
            border-radius: 4px 0 0 4px;
            font-size: 14px;

            &:focus {
                outline: none;
                border-color: #4CAF50;
            }
        }

        .search-btn {
            background-color: #4CAF50;
            color: white;
            border: none;
            padding: 0 15px;
            border-radius: 0 4px 4px 0;
            cursor: pointer;
            transition: background-color 0.3s;

            &:hover {
                background-color: #45a049;
            }
        }
    }
}

// 店铺列表区域
.shops-list-section {
    padding: 40px 0;

    .container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 20px;
    }

    .shops-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
        gap: 30px;
        margin-bottom: 40px;
    }

    .shop-card {
        background-color: white;
        border-radius: 8px;
        overflow: hidden;
        box-shadow: 0 3px 15px rgba(0, 0, 0, 0.05);
        transition: transform 0.3s, box-shadow 0.3s;

        &:hover {
            transform: translateY(-5px);
            box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
        }

        .shop-image {
            position: relative;
            height: 180px;
            overflow: hidden;

            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
                transition: transform 0.5s;

                &:hover {
                    transform: scale(1.05);
                }
            }

            .shop-badge {
                position: absolute;
                top: 10px;
                left: 10px;
                padding: 4px 8px;
                border-radius: 4px;
                font-size: 12px;
                color: white;
                background-color: #4CAF50;
            }

            .shop-rating {
                position: absolute;
                bottom: 10px;
                right: 10px;
                background-color: rgba(0, 0, 0, 0.7);
                color: white;
                padding: 3px 8px;
                border-radius: 12px;
                font-size: 12px;

                .star {
                    color: #FFD700;
                    margin-right: 3px;
                }
            }
        }

        .shop-info {
            padding: 15px;

            .shop-name {
                font-size: 18px;
                margin-bottom: 10px;
                color: #333;
                font-weight: 600;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }

            .shop-location {
                display: flex;
                align-items: center;
                font-size: 13px;
                color: #666;
                margin-bottom: 10px;

                .location-icon {
                    color: #f44336;
                    margin-right: 5px;
                    font-size: 14px;
                }

                .distance {
                    margin-left: auto;
                    color: #999;
                }
            }

            .shop-tags {
                display: flex;
                flex-wrap: wrap;
                gap: 5px;
                margin-bottom: 12px;

                .tag {
                    font-size: 12px;
                    padding: 3px 8px;
                    background-color: #f0f7ea;
                    color: #4CAF50;
                    border-radius: 4px;
                }
            }

            .shop-features {
                display: flex;
                flex-wrap: wrap;
                gap: 8px;

                .feature-item {
                    display: flex;
                    align-items: center;
                    font-size: 12px;
                    color: #666;

                    i {
                        margin-right: 3px;
                        font-size: 14px;
                    }

                    .online-icon {
                        color: #2196F3;
                    }

                    .delivery-icon {
                        color: #FF9800;
                    }

                    .promo-icon {
                        color: #f44336;
                    }
                }
            }
        }

        .shop-actions {
            padding: 10px 15px;
            border-top: 1px solid #f5f5f5;

            .enter-btn {
                width: 100%;
                padding: 10px;
                background-color: #4CAF50;
                color: white;
                border: none;
                border-radius: 4px;
                cursor: pointer;
                font-size: 14px;
                transition: background-color 0.3s;

                &:hover {
                    background-color: #45a049;
                }
            }
        }
    }

    // 无结果提示
    .no-result {
        text-align: center;
        padding: 60px 20px;
        color: #666;
        font-size: 16px;
    }

    // 分页
    .pagination {
        display: flex;
        justify-content: center;
        gap: 10px;
        margin-top: 20px;

        .page-btn {
            padding: 8px 16px;
            border: 1px solid #ddd;
            background-color: white;
            border-radius: 4px;
            cursor: pointer;
            transition: all 0.3s;

            &:hover {
                border-color: #4CAF50;
                color: #4CAF50;
            }

            &:disabled {
                opacity: 0.5;
                cursor: not-allowed;

                &:hover {
                    border-color: #ddd;
                    color: #333;
                }
            }
        }
    }
}



// 响应式调整
@media (max-width: 768px) {
    .page-title-section {
        height: 220px;

        .container h2 {
            font-size: 2rem;
        }
    }

    .filter-content {
        flex-direction: column;
        align-items: stretch;
    }

    .filter-options {
        gap: 10px;
    }

    .filter-group {
        flex: 1;
        min-width: calc(50% - 10px);
    }

    .shops-grid {
        grid-template-columns: repeat(auto-fill, minmax(100%, 1fr));
    }

    .footer-grid {
        gap: 30px;
    }
}

@media (max-width: 480px) {
    .filter-group {
        min-width: 100%;
    }

    .page-title-section {
        height: 180px;

        .container h2 {
            font-size: 1.5rem;
        }

        .container p {
            font-size: 1rem;
        }
    }
}
</style>