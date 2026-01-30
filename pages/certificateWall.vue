<template>
    <div style="margin-bottom: 80px;">
        <headerVue></headerVue>
    </div>
    <div class="honors-page">

        <section class="honors-section">
            <div class="container">
                <!-- 替代Banner的极简标题栏 -->
                <div class="page-header">
                    <h1 class="page-title">荣誉资质</h1>
                </div>

                <div class="section-header">
                    <h2 class="section-title">企业荣誉证书墙</h2>
                    <div class="section-divider"></div>
                    <p class="section-subtitle">每一份荣誉，都是市场与行业的认可</p>
                </div>

                <div class="honors-grid">
                    <!-- 证书1 -->
                    <div class="honor-card">
                        <img src="../static/certificate1.jpg" alt="上合组织成员单位证书" class="honor-img" loading="lazy">
                        <div class="honor-info">
                            <h3 class="honor-name">上合组织经贸平台成员单位</h3>
                            <p class="honor-desc">上海合作组织国家多功能经贸平台（上合家园）自由贸易发展工作委员</p>
                        </div>
                    </div>

                    <!-- 证书2 -->
                    <div class="honor-card">
                        <img src="../static/certificate2.jpg" alt="上合组织项目顾问聘书" class="honor-img" loading="lazy">
                        <div class="honor-info">
                            <h3 class="honor-name">上合组织经贸平台项目顾问</h3>
                            <p class="honor-desc">获聘上合组织国家多功能经贸平台工作委员会顾问</p>
                        </div>
                    </div>

                    <div class="honor-card">
                        <img src="../static/certificate3.jpg" alt="营业执照" class="honor-img" loading="lazy">
                        <div class="honor-info">
                            <h3 class="honor-name">营业执照</h3>
                            <p class="honor-desc">海南积分宝电子商务有限公司营业执照认证</p>
                        </div>
                    </div>

                    <div class="honor-card">
                        <img src="" alt="软件著作权证书申请中" class="honor-img" loading="lazy">
                        <div class="honor-info">
                            <h3 class="honor-name">智慧农贸平台软件著作权</h3>
                            <p class="honor-desc">农链天下智慧农贸数字化转型平台著作权认证</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>

        <footerVue></footerVue>
    </div>
</template>

<script setup>
import headerVue from '../components/headers.vue'
import footerVue from '../components/footers.vue'
</script>

<style scoped>
/* 全局基础样式 - 极简 */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.honors-page {
    min-height: 100vh;
    font-family: "Microsoft Yahei", PingFang SC, sans-serif;
    background-color: #fafafa;
}

/* 替代Banner的极简标题栏 */
.page-header {
    text-align: center;
    padding: 40px 0 20px;
    margin-bottom: 20px;
}

.page-title {
    font-size: 30px;
    color: #333;
    font-weight: 600;
    margin-bottom: 8px;
}

.page-desc {
    font-size: 16px;
    color: #666;
}

/* 荣誉板块 */
.honors-section {
    padding: 20px 0 60px;
}

.container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

/* 板块标题：极简 */
.section-header {
    text-align: center;
    margin-bottom: 40px;
    padding-bottom: 15px;
    border-bottom: 1px solid #eee;
    /* 细分隔线增强层次 */
}

.section-title {
    font-size: 22px;
    color: #444;
    margin-bottom: 10px;
    font-weight: 500;
}

.section-divider {
    width: 50px;
    height: 2px;
    background-color: #165DFF;
    margin: 0 auto 10px;
}

.section-subtitle {
    font-size: 14px;
    color: #777;
}

/* 证书网格：极简响应式 */
.honors-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 25px;
}

/* 证书卡片：极简样式 */
.honor-card {
    position: relative;
    background: white;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
    overflow: hidden;
    transition: all 0.2s ease;
}

/* 简单hover效果 */
.honor-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.08);
}

.honor-img {
    width: 100%;
    height: auto;
    display: block;
}

.honor-info {
    width: 100%;
    opacity: .5;
    position: absolute;
    bottom: 0;
    padding: 20px;
}

.honor-info:hover {
    opacity: 1;
    background: rgba(240, 234, 234, 0.9);
    transition: opacity 0.3s ease;
}

.honor-name {
    font-size: 18px;
    color: #333;
    margin-bottom: 10px;
    font-weight: 600;
}

.honor-desc {
    font-size: 14px;
    color: #666;
    line-height: 1.5;
}

/* 移动端适配 - 极简 */
@media (max-width: 768px) {
    .page-title {
        font-size: 26px;
    }

    .honors-grid {
        grid-template-columns: 1fr;
        gap: 20px;
    }
}

@media (max-width: 480px) {
    .page-title {
        font-size: 22px;
    }

    .page-header {
        padding: 30px 0 15px;
    }

    .honor-info {
        padding: 15px;
    }
}
</style>