<template>
    <div class="shop-detail-page">
        <section class="shop-header">

            <div class="shop-base-info">
                <div class="container">
                    <div class="shop-logo">
                        <img :data-src="shopInfo.logo" :src="shopInfo.logo" :alt="shopInfo.title" loading="lazy">
                    </div>
                    <div class="shop-main-info">
                        <h1 class="shop-title">{{ shopInfo.title }}</h1>
                        <div class="shop-rating">
                            <div class="rating-stars">
                                <span class="star active" v-for="i in 5" :key="i">★</span>
                            </div>
                            <span class="rating-score">{{ 5 }}★</span>
                            <span class="rating-count">({{ 1111 }}条评价)</span>
                        </div>

                    </div>
                    <div class="shop-actions">
                        <!-- <button class="collect-btn" :class="{ collected: isCollected }" @click="toggleCollect">
                            {{ isCollected ? '已收藏' : '收藏店铺' }}
                        </button> -->
                        <button class="contact-btn">联系商家</button>
                    </div>
                </div>
            </div>
        </section>

        <!-- 店铺详情导航 -->
        <section class="shop-nav">
            <div class="container">
                <div class="nav-tabs">
                    <div class="tab-item" :class="{ active: activeTab === 'goods' }" @click="activeTab = 'goods'">
                        商品列表
                    </div>
                    <div class="tab-item" :class="{ active: activeTab === 'info' }" @click="activeTab = 'info'">
                        店铺信息
                    </div>
                    <div class="tab-item" :class="{ active: activeTab === 'comments' }" @click="activeTab = 'comments'">
                        顾客评价
                    </div>
                </div>
            </div>
        </section>

        <!-- 商品列表 -->
        <section class="goods-list" v-if="activeTab === 'goods'">
            <div class="container">
                <!-- 商品分类筛选 -->
                <div class="goods-filter">
                    <div class="filter-scroll">
                        <div class="filter-item" :class="{ active: selectedCategory === 0 }"
                            @click="selectedCategory = 0">
                            全部商品
                        </div>
                        <!-- <div class="filter-item" v-for="category in goodsCategories" :key="category.id"
                            :class="{ active: selectedCategory === category.id }"
                            @click="selectedCategory = category.id">
                            {{ category.name }}
                        </div> -->
                    </div>
                    <div class="search-box">
                        <input type="text" v-model="goodsSearch" placeholder="搜索商品">
                        <button class="search-btn">🔍</button>
                    </div>
                </div>

                <!-- 商品列表 -->
                <div class="goods-grid">
                    <div class="goods-card" v-for="goods in filteredGoods" :key="goods.id">
                        <div class="goods-image">
                            <img :src="goods.imglogo" :data-src="goods.imglogo" :alt="goods.commodity_name"
                                loading="lazy">
                            <div class="goods-tag" v-if="goods.promotion">{{ goods.promotion }}</div>
                        </div>
                        <div class="goods-info">
                            <h3 class="goods-name">{{ goods.commodity_name }}</h3>
                            <p class="goods-desc">{{ goods.weight_name }}</p>
                            <div class="goods-price">
                                <span class="price">¥{{ goods.price }}</span>
                                <span class="original-price" v-if="goods.price">¥{{ goods.price * 2 }}</span>
                            </div>
                        </div>
                        <!-- <div class="add-to-cart" @click="addToCart(goods)">
                            +
                        </div> -->
                    </div>
                </div>

                <!-- 无商品提示 -->
                <div class="no-goods" v-if="filteredGoods.length === 0">
                    <p>暂无相关商品</p>
                </div>
            </div>
        </section>

        <!-- 店铺信息 -->
        <section class="shop-details" v-if="activeTab === 'info'">
            <div class="container">
                <div class="detail-section">
                    <h2 class="section-title">店铺介绍</h2>
                    <div class="shop-description">
                        {{ shopInfo.description }}
                    </div>
                </div>

                <div class="detail-section">
                    <h2 class="section-title">营业时间</h2>
                    <div class="business-hours">
                        <p>{{ shopInfo.businessHours }}</p>
                    </div>
                </div>

                <div class="detail-section">
                    <h2 class="section-title">联系方式</h2>
                    <div class="contact-info">
                        <p><i class="phone-icon"></i> {{ shopInfo.phone }}</p>
                        <p><i class="location-icon"></i> {{ shopInfo.market_address }}</p>
                    </div>
                </div>

                <div class="detail-section">
                    <h2 class="section-title">配送信息</h2>
                    <div class="delivery-info">
                        <p>配送范围：{{ shopInfo.deliveryRange }}</p>
                        <p>配送费：{{ shopInfo.deliveryFee === 0 ? '免费' : '¥' + shopInfo.deliveryFee }}</p>
                        <p>起送价：¥{{ shopInfo.minOrderAmount }}</p>
                    </div>
                </div>

                <div class="detail-section">
                    <h2 class="section-title">店铺资质</h2>
                    <div class="qualifications">
                        <div class="qualification-item" v-for="(qual, index) in shopInfo.qualifications" :key="index">
                            <img :src="qual" alt="资质证明">
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- 顾客评价 -->
        <section class="shop-comments" v-if="activeTab === 'comments'">
            <div class="container">
                <div class="comments-stats">
                    <div class="stat-item">
                        <div class="stat-value">{{ 5 }}</div>
                        <div class="stat-label">综合评分</div>
                    </div>
                    <div class="stat-item">
                        <div class="stat-value">{{ shopInfo.goodCommentRate }}%</div>
                        <div class="stat-label">好评率</div>
                    </div>
                    <div class="stat-item">
                        <div class="stat-value">{{ shopInfo.commentCount }}</div>
                        <div class="stat-label">评价数量</div>
                    </div>
                </div>

                <div class="comments-filter">
                    <select v-model="commentFilter" @change="filterComments">
                        <option value="all">全部评价</option>
                        <option value="good">好评</option>
                        <option value="medium">中评</option>
                        <option value="bad">差评</option>
                    </select>
                </div>

                <div class="comments-list">
                    <div class="comment-item" v-for="comment in filteredComments" :key="comment.id">
                        <div class="comment-header">
                            <div class="user-avatar">
                                <img :src="comment.userAvatar" alt="用户头像">
                            </div>
                            <div class="user-info">
                                <div class="user-name">{{ comment.userName }}</div>
                                <div class="comment-time">{{ formatDate(comment.createTime) }}</div>
                            </div>
                            <div class="comment-rating">
                                <span class="star" v-for="i in 5" :key="i" :class="{ active }">★</span>
                            </div>
                        </div>
                        <div class="comment-content">
                            {{ comment.content }}
                        </div>
                        <div class="comment-images" v-if="comment.images.length > 0">
                            <img :src="img" :alt="评论图片" v-for="(img, index) in comment.images" :key="index">
                        </div>
                        <div class="comment-reply" v-if="comment.reply">
                            <div class="reply-label">商家回复：</div>
                            <div class="reply-content">{{ comment.reply }}</div>
                        </div>
                    </div>
                </div>

                <!-- 无评价提示 -->
                <div class="no-comments" v-if="filteredComments.length === 0">
                    <p>暂无评价</p>
                </div>

                <!-- 评价分页 -->
                <div class="pagination" v-if="filteredComments.length > 0">
                    <button class="page-btn prev" @click="changeCommentPage(-1)" :disabled="currentCommentPage === 1">
                        上一页
                    </button>
                    <button class="page-btn next" @click="changeCommentPage(1)"
                        :disabled="currentCommentPage >= totalCommentPages">
                        下一页
                    </button>
                </div>
            </div>
        </section>

        <!-- 购物车悬浮框 -->
        <div class="cart-float" v-if="cartItems.length > 0">
            <div class="cart-count">{{ cartTotalCount }}</div>
            <div class="cart-info">
                <div class="cart-total">
                    合计：<span class="total-price">¥{{ 111 }}</span>
                </div>
                <div class="cart-desc">已含配送费</div>
            </div>
            <button class="checkout-btn" @click="goToCheckout">去结算</button>
        </div>

        <!-- 底部 -->
        <footerVue></footerVue>
    </div>
</template>

<script>
import { shopList, getShopGoods, getShopComments } from '../apis/shopping'
import headerVue from '../components/headers.vue'
import footerVue from '../components/footers.vue'

export default {
    components: {
        headerVue,
        footerVue
    },
    data() {
        return {
            // 店铺ID，从路由参数获取
            shopId: null,

            // 店铺信息
            shopInfo: {
                id: '',
                title: '',
                businesslogo: '',
                banner: '',
                rating: 4.5,
                commentCount: 126,
                goodCommentRate: 96,
                tags: [],
                description: '',
                businessHours: '08:00-21:00',
                phone: '',
                market_address: '',
                deliveryRange: '3公里内',
                deliveryFee: 5,
                minOrderAmount: 20,
                qualifications: []
            },
            query: { page: 1, limit: 10, isshow: 1 },
            loadLock: false,
            scrollLock: true,

            // 收藏状态
            isCollected: false,

            // 激活的标签页
            activeTab: 'goods',

            // 商品相关
            goodsCategories: [],  // 菜品分类
            allGoods: [],
            selectedCategory: 0,
            goodsSearch: '',

            // 评价相关
            allComments: [],
            commentFilter: 'all',
            currentCommentPage: 1,
            commentsPerPage: 10,

            // 购物车
            cartItems: []
        }
    },
    computed: {
        // 筛选后的商品
        filteredGoods() {
            return this.allGoods.filter(goods => {
                const categoryMatch = this.selectedCategory === 0 || goods.categoryId === this.selectedCategory
                const searchMatch = !this.goodsSearch ||
                    goods.name.toLowerCase().includes(this.goodsSearch.toLowerCase()) ||
                    goods.description.toLowerCase().includes(this.goodsSearch.toLowerCase())
                return categoryMatch && searchMatch
            })
        },

        // 筛选后的评论
        filteredComments() {
            let filtered = [...this.allComments]

            // 根据评价类型筛选
            if (this.commentFilter === 'good') {
                filtered = filtered.filter(comment => comment.rating >= 4)
            } else if (this.commentFilter === 'medium') {
                filtered = filtered.filter(comment => comment.rating === 3)
            } else if (this.commentFilter === 'bad') {
                filtered = filtered.filter(comment => comment.rating <= 2)
            }

            // 分页处理
            const startIndex = (this.currentCommentPage - 1) * this.commentsPerPage
            return filtered.slice(startIndex, startIndex + this.commentsPerPage)
        },

        // 总评论页数
        totalCommentPages() {
            let filteredCount = this.allComments.length

            // 计算筛选后的评论总数
            if (this.commentFilter === 'good') {
                filteredCount = this.allComments.filter(comment => comment.rating >= 4).length
            } else if (this.commentFilter === 'medium') {
                filteredCount = this.allComments.filter(comment => comment.rating === 3).length
            } else if (this.commentFilter === 'bad') {
                filteredCount = this.allComments.filter(comment => comment.rating <= 2).length
            }

            return Math.ceil(filteredCount / this.commentsPerPage)
        },

        // 购物车商品总数
        cartTotalCount() {
            return this.cartItems.reduce((total, item) => total + item.quantity, 0)
        },

        // 购物车商品总价
        cartTotalPrice() {
            const goodsTotal = this.cartItems.reduce((total, item) => total + (item.price * item.quantity), 0)
            // 加上配送费
            return goodsTotal + (goodsTotal >= this.shopInfo.minOrderAmount ? 0 : this.shopInfo.deliveryFee)
        }
    },
    async mounted() {
        this.shopId = parseInt(this.$route.query.id)
        // 获取店铺详情
        await this.loadShopDetail()
        // 获取商品列表
        await this.loadShopGoods()
        // 获取评价列表
        // await this.loadShopComments()


        window.addEventListener('scroll', async () => {
            const scrollEnd = (window.innerHeight + window.pageYOffset) >= document.body.offsetHeight - 200;
            if (scrollEnd && this.scrollLock) {
                this.scrollLock = false
                this.query.page++
                await this.loadShopGoods()
                this.scrollLock = true
            }
        })
    },
    methods: {
        // 加载店铺详情
        async loadShopDetail() {

            try {
                const response = await shopList({ id: this.shopId })
                if (response.code === 200) {
                    this.shopInfo = response.data.listdata[0]
                }
            } catch (error) {
                console.error('Failed to load shop detail:', error)
            }
        },

        // 加载商品列表
        async loadShopGoods() {
            if (this.loadLock) {
                return
            }
            try {
                this.query.shop_id = this.shopId
                const response = await getShopGoods(this.query)
                if (response.code === 200) {
                    this.goodsCategories = response.data.categories || [] // 分类
                    this.allGoods = [...this.allGoods, ...response.data.listdata]
                    this.loadLock = response.data.listdata.length <= 0
                }
            } catch (error) {
                console.error('Failed to load shop goods:', error)
            }
        },

        // 加载评价列表
        async loadShopComments() {
            try {
                const response = await getShopComments(this.shopId)
                if (response.code === 200) {
                    this.allComments = response.data || []
                }
            } catch (error) {
                console.error('Failed to load shop comments:', error)
            }
        },

        // 切换收藏状态
        toggleCollect() {
            this.isCollected = !this.isCollected
            // 实际项目中这里应该调用收藏/取消收藏的API
        },

        // 筛选评论
        filterComments() {
            this.currentCommentPage = 1 // 重置到第一页
        },

        // 切换评论页
        changeCommentPage(direction) {
            this.currentCommentPage += direction
        },

        // 格式化日期
        formatDate(timestamp) {
            const date = new Date(timestamp)
            return `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`
        },

        // 添加到购物车
        addToCart(goods) {
            const existingItem = this.cartItems.find(item => item.id === goods.id)
            if (existingItem) {
                existingItem.quantity++
            } else {
                this.cartItems.push({ ...goods, quantity: 1 })
            }
        },

        // 去结算
        goToCheckout() {
            // 实际项目中这里应该跳转到结算页面
            this.$router.push({
                path: '/checkout',
                query: { shopId: this.shopId },
                state: { cartItems: this.cartItems }
            })
        }
    },
    watch: {

    }
}
</script>

<style lang="scss">
.shop-detail-page {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: #333;
    background-color: #f9f9f9;
}

// 店铺头部
.shop-header {
    margin-top: 100px;

    .shop-banner {
        position: relative;
        height: 300px;
        overflow: hidden;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        .back-btn {
            position: absolute;
            top: 20px;
            left: 20px;
            background-color: rgba(0, 0, 0, 0.5);
            color: white;
            padding: 8px 15px;
            border-radius: 20px;
            cursor: pointer;
            transition: background-color 0.3s;

            &:hover {
                background-color: rgba(0, 0, 0, 0.7);
            }
        }
    }

    .shop-base-info {
        background-color: white;
        padding: 20px 0;
        margin-top: -60px;

        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 20px;
            display: flex;
            align-items: center;
            gap: 20px;
        }

        .shop-logo {
            width: 120px;
            height: 120px;
            border-radius: 8px;
            overflow: hidden;
            border: 4px solid white;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }

        .shop-main-info {
            flex: 1;

            .shop-title {
                font-size: 24px;
                margin-bottom: 10px;
                font-weight: 600;
            }

            .shop-rating {
                display: flex;
                align-items: center;
                margin-bottom: 10px;

                .rating-stars {
                    margin-right: 10px;

                    .star {
                        color: #ddd;
                        font-size: 18px;

                        &.active {
                            color: #FFD700;
                        }
                    }
                }

                .rating-score {
                    font-size: 18px;
                    font-weight: 600;
                    color: #ff6700;
                    margin-right: 10px;
                }

                .rating-count {
                    color: #666;
                    font-size: 14px;
                }
            }

            .shop-tags {
                display: flex;
                flex-wrap: wrap;
                gap: 8px;

                .tag {
                    font-size: 12px;
                    padding: 4px 10px;
                    background-color: #f5f5f5;
                    color: #666;
                    border-radius: 4px;
                }
            }
        }

        .shop-actions {
            display: flex;
            gap: 15px;
            min-width: 220px;

            .collect-btn {
                padding: 10px 20px;
                border: 1px solid #4CAF50;
                background-color: white;
                color: #4CAF50;
                border-radius: 4px;
                cursor: pointer;
                transition: all 0.3s;

                &.collected {
                    background-color: #4CAF50;
                    color: white;
                }

                &:hover {
                    background-color: #f0f7ea;
                }

                &.collected:hover {
                    background-color: #45a049;
                }
            }

            .contact-btn {
                padding: 10px 20px;
                background-color: #2196F3;
                color: white;
                border: none;
                border-radius: 4px;
                cursor: pointer;
                transition: background-color 0.3s;

                &:hover {
                    background-color: #0b7dda;
                }
            }
        }
    }
}

// 店铺导航
.shop-nav {
    background-color: white;
    border-bottom: 1px solid #eee;

    .container {
        max-width: 1200px;
        margin: 0 auto;
    }

    .nav-tabs {
        display: flex;

        .tab-item {
            padding: 15px 0;
            flex: 1;
            text-align: center;
            font-size: 16px;
            cursor: pointer;
            position: relative;
            transition: color 0.3s;

            &:hover {
                color: #4CAF50;
            }

            &.active {
                color: #4CAF50;
                font-weight: 500;

                &::after {
                    content: '';
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 100%;
                    height: 3px;
                    background-color: #4CAF50;
                }
            }
        }
    }
}

// 商品列表样式
.goods-list {
    padding: 30px 0;

    .container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 20px;
    }

    .goods-filter {
        background-color: white;
        border-radius: 8px;
        padding: 15px;
        margin-bottom: 20px;
        display: flex;
        flex-wrap: wrap;
        gap: 15px;

        .filter-scroll {
            flex: 1;
            min-width: 300px;
            display: flex;
            gap: 5px;
            overflow-x: auto;
            padding-bottom: 5px;

            &::-webkit-scrollbar {
                height: 6px;
            }

            &::-webkit-scrollbar-thumb {
                background-color: #ddd;
                border-radius: 3px;
            }

            .filter-item {
                white-space: nowrap;
                padding: 8px 15px;
                background-color: #f5f5f5;
                border-radius: 20px;
                font-size: 14px;
                cursor: pointer;
                transition: all 0.3s;

                &:hover {
                    background-color: #e8f5e9;
                    color: #4CAF50;
                }

                &.active {
                    background-color: #4CAF50;
                    color: white;
                }
            }
        }

        .search-box {
            display: flex;
            min-width: 250px;
            width: 300px;

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

    .goods-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
        gap: 20px;
    }

    .goods-card {
        background-color: white;
        border-radius: 8px;
        overflow: hidden;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
        transition: transform 0.3s;
        display: flex;
        flex-direction: column;

        &:hover {
            transform: translateY(-3px);
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        }

        .goods-image {
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

            .goods-tag {
                position: absolute;
                top: 10px;
                left: 10px;
                padding: 3px 8px;
                background-color: #ff6700;
                color: white;
                font-size: 12px;
                border-radius: 4px;
            }
        }

        .goods-info {
            padding: 15px;
            flex: 1;
            display: flex;
            flex-direction: column;

            .goods-name {
                font-size: 16px;
                margin-bottom: 5px;
                font-weight: 500;
                color: #333;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
                overflow: hidden;
            }

            .goods-desc {
                font-size: 12px;
                color: #999;
                margin-bottom: 10px;
                flex: 1;
            }

            .goods-price {
                display: flex;
                align-items: center;

                .price {
                    font-size: 18px;
                    color: #ff6700;
                    font-weight: 600;
                }

                .original-price {
                    font-size: 14px;
                    color: #999;
                    text-decoration: line-through;
                    margin-left: 8px;
                }
            }
        }

        .add-to-cart {
            width: 36px;
            height: 36px;
            background-color: #4CAF50;
            color: white;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 20px;
            cursor: pointer;
            margin: 0 15px 15px auto;
            box-shadow: 0 2px 5px rgba(76, 175, 80, 0.3);
            transition: background-color 0.3s;

            &:hover {
                background-color: #45a049;
            }
        }
    }

    .no-goods {
        text-align: center;
        padding: 80px 0;
        color: #666;
        font-size: 16px;
    }
}

// 店铺信息样式
.shop-details {
    padding: 30px 0;

    .container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 20px;
    }

    .detail-section {
        background-color: white;
        border-radius: 8px;
        padding: 20px;
        margin-bottom: 20px;

        .section-title {
            font-size: 18px;
            margin-bottom: 15px;
            color: #333;
            padding-bottom: 10px;
            border-bottom: 1px solid #f5f5f5;
        }

        .shop-description {
            line-height: 1.8;
            color: #666;
            white-space: pre-line;
        }

        .business-hours,
        .contact-info,
        .delivery-info {
            color: #666;
            line-height: 1.6;

            p {
                margin: 8px 0;
                display: flex;
                align-items: center;
            }

            .phone-icon,
            .location-icon {
                color: #4CAF50;
                margin-right: 10px;
                font-size: 16px;
            }
        }

        .qualifications {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
            gap: 15px;

            .qualification-item {
                border-radius: 4px;
                overflow: hidden;
                height: 140px;

                img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    transition: transform 0.3s;

                    &:hover {
                        transform: scale(1.05);
                    }
                }
            }
        }
    }
}

// 顾客评价样式
.shop-comments {
    padding: 30px 0;

    .container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 20px;
    }

    .comments-stats {
        background-color: white;
        border-radius: 8px;
        padding: 20px;
        margin-bottom: 20px;
        display: flex;
        justify-content: space-around;
        text-align: center;

        .stat-item {
            flex: 1;

            .stat-value {
                font-size: 28px;
                font-weight: 600;
                color: #ff6700;
                margin-bottom: 5px;
            }

            .stat-label {
                color: #666;
                font-size: 14px;
            }
        }
    }

    .comments-filter {
        background-color: white;
        border-radius: 8px;
        padding: 15px 20px;
        margin-bottom: 20px;

        select {
            padding: 8px 12px;
            border: 1px solid #ddd;
            border-radius: 4px;
            background-color: white;
            cursor: pointer;

            &:focus {
                outline: none;
                border-color: #4CAF50;
            }
        }
    }

    .comments-list {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    .comment-item {
        background-color: white;
        border-radius: 8px;
        padding: 20px;

        .comment-header {
            display: flex;
            align-items: center;
            margin-bottom: 10px;

            .user-avatar {
                width: 40px;
                height: 40px;
                border-radius: 50%;
                overflow: hidden;
                margin-right: 15px;

                img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
            }

            .user-info {
                flex: 1;

                .user-name {
                    font-weight: 500;
                    margin-bottom: 3px;
                }

                .comment-time {
                    font-size: 12px;
                    color: #999;
                }
            }

            .comment-rating {
                .star {
                    color: #ddd;
                    font-size: 16px;

                    &.active {
                        color: #FFD700;
                    }
                }
            }
        }

        .comment-content {
            color: #333;
            line-height: 1.6;
            margin-bottom: 15px;
        }

        .comment-images {
            display: flex;
            gap: 10px;
            margin-bottom: 15px;

            img {
                width: 80px;
                height: 80px;
                object-fit: cover;
                border-radius: 4px;
                cursor: pointer;
                transition: transform 0.3s;

                &:hover {
                    transform: scale(1.05);
                }
            }
        }

        .comment-reply {
            padding: 10px 15px;
            background-color: #f9f9f9;
            border-radius: 4px;

            .reply-label {
                font-weight: 500;
                color: #666;
                margin-bottom: 5px;
                display: inline-block;
            }

            .reply-content {
                color: #333;
            }
        }
    }

    .no-comments {
        text-align: center;
        padding: 80px 0;
        color: #666;
        font-size: 16px;
        background-color: white;
        border-radius: 8px;
    }

    .pagination {
        display: flex;
        justify-content: center;
        gap: 10px;
        margin-top: 30px;

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

// 购物车悬浮框
.cart-float {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: white;
    box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
    padding: 15px 20px;
    display: flex;
    align-items: center;
    z-index: 100;

    .cart-count {
        position: absolute;
        top: -8px;
        left: 20px;
        width: 20px;
        height: 20px;
        background-color: #ff6700;
        color: white;
        border-radius: 50%;
        font-size: 12px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .cart-info {
        flex: 1;
        margin-left: 40px;

        .cart-total {
            font-size: 16px;
            font-weight: 600;

            .total-price {
                color: #ff6700;
                font-size: 18px;
            }
        }

        .cart-desc {
            font-size: 12px;
            color: #999;
        }
    }

    .checkout-btn {
        background-color: #4CAF50;
        color: white;
        border: none;
        padding: 12px 30px;
        border-radius: 4px;
        font-size: 16px;
        cursor: pointer;
        transition: background-color 0.3s;

        &:hover {
            background-color: #45a049;
        }
    }
}

// 响应式调整
@media (max-width: 768px) {
    .shop-header {
        .shop-banner {
            height: 200px;
        }

        .shop-base-info {
            .container {
                flex-direction: column;
                align-items: flex-start;
            }

            .shop-actions {
                width: 100%;
                justify-content: space-between;
            }
        }
    }

    .goods-list {
        .goods-filter {
            flex-direction: column;

            .search-box {
                width: 100%;
            }
        }

        .goods-grid {
            grid-template-columns: repeat(auto-fill, minmax(50%, 1fr));
        }
    }

    .shop-comments {
        .comments-stats {
            flex-wrap: wrap;

            .stat-item {
                width: 50%;
                margin-bottom: 15px;
            }
        }
    }
}

@media (max-width: 480px) {
    .shop-header {
        .shop-banner {
            height: 150px;
        }

        .shop-base-info {
            .shop-logo {
                width: 100px;
                height: 100px;
            }

            .shop-title {
                font-size: 20px;
            }
        }
    }

    .goods-list {
        .goods-grid {
            grid-template-columns: 1fr;
        }
    }

    .cart-float {
        padding: 10px 15px;

        .checkout-btn {
            padding: 10px 20px;
            font-size: 14px;
        }
    }
}
</style>