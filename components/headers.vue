<template>
    <header class="site-header">
        <div class="header-container">
            <div class="header-logo">
                <img src="./../static/logo.png" style="width: 50px; height: 50px; margin-right: 10px;"></img>
                <a href="/" class="logo-link">
                    <span class="logo-text">海南积分宝电子商务有限公司</span>
                </a>
            </div>

            <nav class="desktop-nav">
                <ul class="nav-list">
                    <li class="nav-item" v-for="item in navItems" :key="item.id">
                        <a :href="item.url" class="nav-link" :target="item.target" @click="handleNavClick(item)">
                            {{ item.label }}
                        </a>
                    </li>
                </ul>
            </nav>

            <!-- 移动端菜单按钮 -->
            <button class="mobile-menu-btn" @click="toggleMobileMenu" aria-label="切换菜单">
                <img src="../static/展开菜单.png" alt="菜单图标" class="menu-icon">
            </button>
        </div>

        <div class="mobile-nav" :class="{ 'mobile-nav--open': isMenuOpen }" :style="{ opacity: menuOpacity }">
            <ul class="mobile-nav-list">
                <li class="mobile-nav-item" v-for="item in navItems" :key="item.id">
                    <a :href="item.url" class="mobile-nav-link" :target="item.target"
                        @click="handleMobileNavClick(item)">
                        {{ item.label }}
                    </a>
                </li>
            </ul>
        </div>
    </header>
</template>

<script setup>
import { ref, watch, onMounted, onUnmounted } from 'vue';

// 导航菜单数据
const navItems = [
    { id: 1, label: '荣誉资质', url: '/certificateWall', target: '_self' },
    { id: 2, label: '核心功能', url: '/#services', target: '_self' },
    { id: 3, label: '投资优势', url: '/#advantage', target: '_self' },
    { id: 4, label: '应用场景', url: '/#scene', target: '_self' },
    { id: 5, label: '合作流程', url: '/#process', target: '_self' },
    { id: 6, label: '提供服务', url: '/#service', target: '_self' },
    // { id: 7, label: '商家信息', url: '/shoppingPc', target: '_blank' }
    { id: 7, label: '商家信息', url: '/shoppingPc', target: '_self' }
];

// 状态管理
const isMenuOpen = ref(false);
const menuOpacity = ref(0);
const menuIcon = ref('/展开菜单.png'); // 建议放在static目录
const closeIcon = ref('/关闭菜单.png'); // 建议补充关闭图标

// 切换移动端菜单
const toggleMobileMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
    menuOpacity.value = isMenuOpen.value ? 1 : 0;
};

// 处理桌面端导航点击
const handleNavClick = (item) => {
    // 锚点链接点击后无需额外操作，浏览器会自动滚动
    if (item.target === '_self' && item.url.startsWith('#')) {
        // 可添加平滑滚动逻辑（如需兼容旧浏览器）
    }
};

// 处理移动端导航点击
const handleMobileNavClick = (item) => {
    // 点击后关闭菜单
    isMenuOpen.value = false;
    menuOpacity.value = 0;

    // 执行导航跳转
    handleNavClick(item);
};

// 监听窗口尺寸变化
const handleResize = () => {
    if (window.innerWidth >= 840) {
        isMenuOpen.value = false;
        menuOpacity.value = 0;
    }
};

// 生命周期钩子
onMounted(() => {
    window.addEventListener('resize', handleResize);
});

onUnmounted(() => {
    window.removeEventListener('resize', handleResize);
});

// 监听菜单状态变化
watch(isMenuOpen, (newVal) => {
    // 菜单打开时禁止页面滚动
    document.body.style.overflow = newVal ? 'hidden' : '';
});
</script>

<style scoped>
.site-header {
    /* padding: 10px; */
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    background-color: #ffffff;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
    z-index: 100;
}

.header-container {
    display: flex;
    align-items: center;
    /* background-color: red; */
    justify-content: space-between;
    /* max-width: 1300px; */
    width: 100%;
    padding: 10px;
    height: 60px;
}

/* Logo样式 */
.header-logo {
    align-items: center;
    display: flex;
    flex: 0 0 auto;
}

.logo-link {
    display: inline-block;
    height: 100%;
    text-decoration: none;
}

.logo-text {
    color: #2274df;
    font-size: 30px;
    font-weight: 600;
    white-space: nowrap;
}

/* 桌面端导航 */
.desktop-nav {
    display: none;
    /* flex: 1 1 auto; */
    margin-right: 40px;
}

.nav-list {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
    gap: 10px;
}

.nav-item {
    flex: 0 0 auto;
}

.nav-link {
    display: block;
    padding: 10px 15px;
    color: #666666;
    font-size: 15px;
    text-decoration: none;
    border-radius: 4px;
    transition: all 0.3s ease;
}

.nav-link:hover,
.nav-link.active {
    color: #4CAF50;
    background-color: #f5f9f0;
}

/* 移动端菜单按钮 */
.mobile-menu-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 45px;
    height: 45px;
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;
    margin-right: 30px;
}

.menu-icon {
    width: 24px;
    height: 24px;
    object-fit: contain;
}

/* 移动端导航菜单 */
.mobile-nav {
    position: fixed;
    top: 70px;
    left: 0;
    right: 0;
    background-color: #ffffff;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    transform: translateY(-10px);
    opacity: 0;
    pointer-events: none;
    transition: all 0.3s ease;
    z-index: 99;
}

.mobile-nav--open {
    transform: translateY(0);
    opacity: 1;
    pointer-events: auto;
}

.mobile-nav-list {
    list-style: none;
    margin: 0;
    padding: 15px 0;
}

.mobile-nav-item {
    border-bottom: 1px solid #f5f5f5;
}

.mobile-nav-link {
    display: block;
    padding: 14px 20px;
    color: #666666;
    font-size: 16px;
    text-decoration: none;
    transition: background-color 0.3s ease;
}

.mobile-nav-link:hover {
    background-color: #f5f9f0;
    color: #4CAF50;
}

/* 响应式适配 */
@media (min-width: 840px) {
    .desktop-nav {
        display: block;
    }

    .mobile-menu-btn {
        display: none;
    }

    .mobile-nav {
        display: none;
    }
}

@media (max-width: 839px) {
    .logo-text {
        font-size: 20px;
    }
}

@media (max-width: 480px) {
    .header-container {
        height: 60px;
    }

    .logo-text {
        font-size: 14px;
    }

    .mobile-nav {
        top: 60px;
    }
}
</style>