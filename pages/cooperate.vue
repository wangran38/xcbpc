<template>
    <div class="min-h-screen bg-gray-50">
        <headerVue></headerVue>
        <section id="agent-form" class="section py-16 md:py-24 bg-white">
            <div class="container mx-auto px-4">
                <div class="grid md:grid-cols-12 gap-8">
                    <div class="md:col-span-5 order-2 md:order-1">
                        <div
                            class="bg-white rounded-2xl shadow-card p-8 md:p-10 transform transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1">
                            <h2 class="section-title text-clamp-1.8rem-3vw-2.5rem font-bold mb-6 text-gray-800">代理商申请
                            </h2>

                            <div class="mb-10">
                                <h3 class="text-xl font-bold mb-4 text-gray-800 flex items-center">
                                    <i class="fa fa-star text-primary-500 mr-3 text-lg"></i>
                                    为什么选择我们？
                                </h3>
                                <ul class="space-y-4">
                                    <li class="flex items-start">
                                        <div class="flex-shrink-0 mt-1">
                                            <i class="fa fa-check-circle text-primary-500 text-lg"></i>
                                        </div>
                                        <div class="ml-3">
                                            <p class="font-medium text-gray-800">领先的智慧农贸解决方案，市场需求旺盛</p>
                                        </div>
                                    </li>
                                    <li class="flex items-start">
                                        <div class="flex-shrink-0 mt-1">
                                            <i class="fa fa-check-circle text-primary-500 text-lg"></i>
                                        </div>
                                        <div class="ml-3">
                                            <p class="font-medium text-gray-800">全方位的技术和运营支持，降低创业风险</p>
                                        </div>
                                    </li>
                                    <li class="flex items-start">
                                        <div class="flex-shrink-0 mt-1">
                                            <i class="fa fa-check-circle text-primary-500 text-lg"></i>
                                        </div>
                                        <div class="ml-3">
                                            <p class="font-medium text-gray-800">合理的利润分配机制，确保合作伙伴高收益</p>
                                        </div>
                                    </li>
                                    <li class="flex items-start">
                                        <div class="flex-shrink-0 mt-1">
                                            <i class="fa fa-check-circle text-primary-500 text-lg"></i>
                                        </div>
                                        <div class="ml-3">
                                            <p class="font-medium text-gray-800">强大的品牌影响力，助力市场快速拓展</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h3 class="text-xl font-bold mb-4 text-gray-800 flex items-center">
                                    <i class="fa fa-handshake-o text-primary-500 mr-3 text-lg"></i>
                                    合作要求
                                </h3>
                                <ul class="space-y-4">
                                    <li class="flex items-start">
                                        <div class="flex-shrink-0 mt-1">
                                            <i class="fa fa-dot-circle-o text-primary-500 text-lg"></i>
                                        </div>
                                        <div class="ml-3">
                                            <p class="text-gray-700">具备一定的资金实力和市场资源</p>
                                        </div>
                                    </li>
                                    <li class="flex items-start">
                                        <div class="flex-shrink-0 mt-1">
                                            <i class="fa fa-dot-circle-o text-primary-500 text-lg"></i>
                                        </div>
                                        <div class="ml-3">
                                            <p class="text-gray-700">对智慧农贸行业有一定的了解和热情</p>
                                        </div>
                                    </li>
                                    <li class="flex items-start">
                                        <div class="flex-shrink-0 mt-1">
                                            <i class="fa fa-dot-circle-o text-primary-500 text-lg"></i>
                                        </div>
                                        <div class="ml-3">
                                            <p class="text-gray-700">拥有良好的商业信誉和团队管理能力</p>
                                        </div>
                                    </li>
                                    <li class="flex items-start">
                                        <div class="flex-shrink-0 mt-1">
                                            <i class="fa fa-dot-circle-o text-primary-500 text-lg"></i>
                                        </div>
                                        <div class="ml-3">
                                            <p class="text-gray-700">认同公司的商业模式和价值观</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <!-- 右侧表单区域 -->
                    <div class="md:col-span-7 order-1 md:order-2">
                        <div
                            class="bg-white rounded-2xl shadow-card p-8 md:p-10 transform transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1">
                            <form>
                                <h3 class="text-2xl font-bold mb-6 text-gray-800">填写申请信息</h3>

                                <div class="grid md:grid-cols-2 gap-6">
                                    <!-- <div class="form-group">
                                        <label for="company-name" class="block text-sm font-medium text-gray-700 mb-1">
                                            公司名称 <span class="text-red-500">*</span>
                                        </label>
                                        <div class="relative">
                                            <input type="text" id="company-name" v-model="formData.companyName"
                                                class="form-control pl-0 focus:pl-10 transition-all"
                                                placeholder="请输入公司名称" required>
                                        </div>
                                    </div> -->

                                    <div class="form-group">
                                        <label for="contact-person"
                                            class="block text-sm font-medium text-gray-700 mb-1">
                                            联系人姓名 <span class="text-red-500">*</span>
                                        </label>
                                        <div class="relative">
                                            <input type="text" id="contact-person" v-model="formData.nickname"
                                                class="form-control pl-0 focus:pl-10 transition-all"
                                                placeholder="请输入联系人姓名" required>
                                        </div>
                                    </div>

                                    <div class="form-group">
                                        <label for="phone" class="block text-sm font-medium text-gray-700 mb-1">
                                            联系电话 <span class="text-red-500">*</span>
                                        </label>
                                        <div class="relative">
                                            <input type="tel" id="phone" v-model="formData.phone"
                                                class="form-control pl-0 focus:pl-10 transition-all"
                                                placeholder="请输入联系电话" required>
                                        </div>
                                    </div>

                                    <div class="form-group">
                                        <label for="email" class="block text-sm font-medium text-gray-700 mb-1">
                                            电子邮箱 <span class="text-red-500">*</span>
                                        </label>
                                        <div class="relative">
                                            <input type="email" id="email" v-model="formData.email"
                                                class="form-control pl-0 focus:pl-10 transition-all"
                                                placeholder="请输入电子邮箱" required>
                                        </div>
                                    </div>

                                    <div class="form-group">
                                        <label for="agent-type" class="block text-sm font-medium text-gray-700 mb-1">
                                            代理类型 <span class="text-red-500">*</span>
                                        </label>
                                        <div class="relative">
                                            <select id="agent-type" v-model="formData.agentType"
                                                class="form-control pl-0 focus:pl-10 transition-all appearance-none pr-10 bg-white"
                                                required>
                                                <option value="">请选择代理类型</option>
                                                <option value="1">省级代理</option>
                                                <option value="2">市级代理</option>
                                            </select>
                                            <div
                                                class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                                                <i class="fa fa-chevron-down text-gray-400"></i>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="form-group">
                                        <label for="province" class="block text-sm font-medium text-gray-700 mb-1">
                                            所在省份 <span class="text-red-500">*</span>
                                        </label>
                                        <div class="relative">
                                            <select id="province" v-model="formData.province"
                                                class="form-control pl-0 focus:pl-10 transition-all appearance-none pr-10 bg-white"
                                                required>
                                                <option value="">请选择省份</option>
                                                <option v-for="item in provinceData" :value="item.id">{{ item.name }}
                                                </option>
                                            </select>
                                        </div>
                                    </div>

                                    <div class="form-group">
                                        <label for="city" class="block text-sm font-medium text-gray-700 mb-1">
                                            所在城市 <span class="text-red-500">*</span>
                                        </label>
                                        <div class="relative">
                                            <select id="city" v-model="formData.city"
                                                class="form-control pl-0 focus:pl-10 transition-all appearance-none pr-10 bg-white"
                                                required>
                                                <option value="">请选择城市</option>

                                                <option v-for="item in cityData" :value="item.id">{{ item.name }}
                                                </option>

                                                <!-- <option v-if="formData.province === '北京'" value="北京">北京</option>
                                                <option v-if="formData.province === '上海'" value="上海">上海</option>
                                                <option v-if="formData.province === '广东'" value="广州">广州</option>
                                                <option v-if="formData.province === '广东'" value="深圳">深圳</option>
                                                <option v-if="formData.province === '浙江'" value="杭州">杭州</option>
                                                <option v-if="formData.province === '浙江'" value="宁波">宁波</option> -->
                                            </select>
                                            <div
                                                class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                                                <i class="fa fa-chevron-down text-gray-400"></i>
                                            </div>
                                        </div>
                                    </div>



                                    <!-- <div class="form-group">
                                        <label for="investment" class="block text-sm font-medium text-gray-700 mb-1">
                                            意向投资规模 <span class="text-red-500">*</span>
                                        </label>
                                        <div class="relative">
                                            <select id="investment" v-model="formData.investment"
                                                class="form-control pl-0 focus:pl-10 transition-all appearance-none pr-10 bg-white"
                                                required>
                                                <option value="">请选择投资规模</option>
                                                <option value="50万以下">50万以下</option>
                                                <option value="50-100万">50-100万</option>
                                                <option value="100-300万">100-300万</option>
                                                <option value="300-500万">300-500万</option>
                                                <option value="500万以上">500万以上</option>
                                            </select>
                                            <div
                                                class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                                                <i class="fa fa-chevron-down text-gray-400"></i>
                                            </div>
                                        </div>
                                    </div> -->

                                    <div class="form-group md:col-span-2">
                                        <div style="display: flex; align-items: center;">
                                            <div class="flex items-center h-5 mr-2">
                                                <input id="agreement" v-model="formData.agreement" type="checkbox"
                                                    class="w-4 h-4 text-primary-500 focus:ring-primary-500 border-gray-300 rounded"
                                                    required>
                                            </div>
                                            <div style="display: flex; flex-wrap: wrap;">
                                                我已阅读并同意
                                                <a href="javascript:"
                                                    class="text-primary-600 hover:underline mx-1">《合作协议》</a>
                                                和
                                                <a href="javascript:"
                                                    class="text-primary-600 hover:underline mx-1">《隐私政策》</a>
                                            </div>
                                        </div>
                                        <div v-if="errors.agreement" class="mt-2 text-sm text-red-500">
                                            {{ errors.agreement }}
                                        </div>
                                    </div>
                                </div>

                                <div class="form-actions mt-8">
                                    <button class="btn btn-primary px-8 py-3 text-lg" @click.prevent="submitForm">
                                        提交申请
                                    </button>
                                </div>
                                <button class="btn btn-primary px-8 py-3 text-lg"
                                    style="margin-top: 10px; background-color: gray;">
                                    <a href=" http://xcbdsc.com/xcbdsc.apk" download
                                        style="text-decoration: none; color: white;">点击下载代理商app</a>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <div class="submit-loading-mask" v-if="modalBox">
            <div v-if="modalBox">
                <div class="loading-text">提交中，请稍候，提交完成自动关闭弹窗...</div>
                <div class="loading-desc">此过程约1-2秒,请勿关闭页面</div>
            </div>

            <!-- <div style="font-size: 18px;padding: 15px;background-color: #67c23a; color: white; border-radius: 5%;">
                提交成功
            </div> -->
        </div>
        <footerVue></footerVue>
    </div>
</template>

<script>
import headerVue from '../components/headers.vue'
import footerVue from '../components/footers.vue'
import { citylist, citytree, agentApply } from '../apis/shopping'
export default {
    components: {
        headerVue,
        footerVue
    },
    data() {
        return {
            modalBox: false,
            submitStatus: false,
            provinceData: [],
            cityData: [],
            formData: {

                nickname: '',
                phone: '',
                email: '',
                province: '', // 用户代理的省份id
                city: '', //  用户代理市县id
                remark: '',
                agentType: ''


                // companyName: '',
                // contactPerson: '',
                // phone: '',
                // email: '',
                // province: '',
                // city: '',
                // agentType: '',
                // investment: '',
                // agreement: false
            },
            errors: {
                companyName: '',
                contactPerson: '',
                phone: '',
                email: '',
                province: '',
                city: '',
                agentType: '',
                investment: '',
                agreement: ''
            }
        }
    },
    mounted() {
        this.initRegion()
    },
    watch: {
        'formData.province'(newValue, oldValue) {
            this.getCityData(newValue)
        }
    },
    methods: {
        // 获取城市数据
        async getCityData(pid) {
            // 校验pid有效性，避免无效请求
            if (!pid) {
                console.warn('缺少省份ID,无法获取城市数据');
                return;
            }

            // this.regionIndex[1] = 0
            this.cityMapData = [];
            // this.regionRange.splice(1, 1, []);
            try {
                const data = await citytree({ 'pid': pid });
                if (data.code === 200 && Array.isArray(data.data)) {
                    // 批量处理数据，减少响应式更新次数
                    const cityIds = [];
                    data.data.forEach(item => {
                        cityIds.push(item);
                    });
                    // 一次性赋值，提升性能并确保响应式
                    this.cityData = cityIds;
                } else {
                    console.warn('城市数据返回格式异常', data);
                }
            } catch (error) {
                console.error('获取城市数据失败', error);
            } finally {
                this.$nextTick(() => {
                    this.$forceUpdate();
                });
            }
        },

        // 初始化地区
        async initRegion() {
            let data = await citylist({
                "level": 1,
                "limit": 100
            })
            if (data.code == 200) {
                data.data.listdata.forEach(item => {
                    this.provinceData.push(item)
                })
            }
            this.getCityData(this.provinceData[0].id)
        },
        async submitForm() {

            let isValid = true
            // 验证联系人姓名
            if (!this.formData.nickname.trim()) {
                this.errors.contactPerson = '请输入联系人姓名';
                isValid = false;
            }

            // 验证电话号码
            const phoneRegex = /^1[3-9]\d{9}$/;
            if (!phoneRegex.test(this.formData.phone)) {
                this.errors.phone = '请输入有效的手机号码';
                isValid = false;
            }

            // 验证电子邮箱
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(this.formData.email)) {
                this.errors.email = '请输入有效的电子邮箱';
                isValid = false;
            }

            // 验证省份
            if (!this.formData.province) {
                this.errors.province = '请选择省份';
                isValid = false;
            }

            // 验证城市
            if (!this.formData.city) {
                this.errors.city = '请选择城市';
                isValid = false;
            }

            // 验证代理类型
            if (!this.formData.agentType) {
                this.errors.agentType = '请选择代理类型';
                isValid = false;
            }


            // 验证协议勾选
            if (!this.formData.agreement) {
                this.errors.agreement = '请阅读并同意相关协议';
                isValid = false;
            }




            // 如果验证通过，可以提交表单
            if (isValid) {
                // this.modalBox = true
                try {
                    let data = await agentApply(this.formData)
                    if (data.code == 200) {
                        alert('提交成功')
                    }
                } catch {
                    // setTimeout(() => {
                    //     this.modalBox = false
                    // }, 2000)
                }

                this.formData = {
                    nickname: '',
                    phone: '',
                    email: '',
                    province: '',
                    city: '',
                    remark: ''
                };
            }
        }
    }
}
</script>
<style>
.submit-loading-mask {
    user-select: none;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(255, 255, 255, 0.85);
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: center;
}

/* 加载提示文字 */
.loading-text {
    text-align: center;
    font-size: 22px;
    color: #333;
    font-weight: 500;
    margin-bottom: 8px;
}

/* 加载辅助说明：浅色调降低焦虑 */
.loading-desc {
    text-align: center;
    font-size: 20px;
    color: #999;
}

:root {
    --primary-500: #6366F1;
    --primary-600: #4F46E5;
    --primary-700: #4338CA;
    --gray-300: #D1D5DB;
    --gray-400: #9CA3AF;
    --gray-500: #6B7280;
    --gray-700: #374151;
    --gray-800: #1F2937;
    --red-500: #EF4444;
    --shadow-card: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
    --shadow-card-hover: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}


body {
    font-family: 'Inter', system-ui, -apple-system, sans-serif;
    line-height: 1.5;
    color: var(--gray-800);
    background-color: #F9FAFB;
}

/* 布局组件 */
.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1.5rem;
}

.grid {
    display: grid;
}

.md\:grid-cols-12 {
    grid-template-columns: repeat(12, minmax(0, 1fr));
}

.md\:col-span-5 {
    grid-column: span 5 / span 5;
}

.md\:col-span-7 {
    grid-column: span 7 / span 7;
}

.md\:col-span-2 {
    grid-column: span 2 / span 2;
}

.gap-6 {
    gap: 1.5rem;
}

.gap-8 {
    gap: 2rem;
}

.order-1 {
    order: 1;
}

.order-2 {
    order: 2;
}

.md\:order-1 {
    order: 1;
}

.md\:order-2 {
    order: 2;
}

/* 间距和边距 */
.py-16 {
    padding-top: 4rem;
    padding-bottom: 4rem;
}

.md\:py-24 {
    padding-top: 6rem;
    padding-bottom: 6rem;
}

.p-8 {
    padding: 2rem;
}

.md\:p-10 {
    padding: 2.5rem;
}

.mb-6 {
    margin-bottom: 1.5rem;
}

.mb-10 {
    margin-bottom: 2.5rem;
}

.mt-1 {
    margin-top: 0.25rem;
}

.mt-2 {
    margin-top: 0.5rem;
}

.mt-8 {
    margin-top: 2rem;
}

.ml-3 {
    margin-left: 0.75rem;
}

.mr-2 {
    margin-right: 0.5rem;
}

.mr-3 {
    margin-right: 0.75rem;
}

/* 组件样式 */
.min-h-screen {
    min-height: 100vh;
}

.bg-gray-50 {
    background-color: #F9FAFB;
}

.bg-white {
    background-color: white;
}

.rounded-2xl {
    border-radius: 1rem;
}

.shadow-card {
    box-shadow: var(--shadow-card);
}

.shadow-card-hover {
    box-shadow: var(--shadow-card-hover);
}



.text-2xl {
    font-size: 1.5rem;
}

.text-xl {
    font-size: 1.25rem;
}

.text-lg {
    font-size: 1.125rem;
}

.text-sm {
    font-size: 0.875rem;
}

.font-bold {
    font-weight: 700;
}

.font-medium {
    font-weight: 500;
}

.text-gray-400 {
    color: var(--gray-400);
}

.text-gray-700 {
    color: var(--gray-700);
}

.text-gray-800 {
    color: var(--gray-800);
}

.text-primary-500 {
    color: var(--primary-500);
}

.text-primary-600 {
    color: var(--primary-600);
}

.text-red-500 {
    color: var(--red-500);
}

/* 表单样式 */
.form-control {
    width: 100%;
    padding: 0.75rem 1rem;
    border: 1px solid var(--gray-300);
    border-radius: 0.5rem;
    transition: all 0.3s ease;
    background-color: white;
    font-size: 1rem;
}

.form-control:focus {
    outline: none;
    border-color: var(--primary-500);
    box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.2);
}

.form-group {
    margin-bottom: 1.5rem;
}

/* 按钮样式 */
.btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0.75rem 1.5rem;
    border-radius: 0.5rem;
    font-weight: 500;
    transition: all 0.3s ease;
    cursor: pointer;
    border: none;
    font-size: 1rem;
}

.btn-primary {
    background-color: var(--primary-600);
    color: white;
}

.btn-primary:hover {
    background-color: var(--primary-700);
    transform: translateY(-2px);
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
}

/* 列表样式 */
.space-y-4>*+* {
    margin-top: 1rem;
}

/* 弹性布局 */
.flex {
    display: flex;
}

.items-center {
    align-items: center;
}

.items-start {
    align-items: flex-start;
}

.flex-shrink-0 {
    flex-shrink: 0;
}

.flex-wrap {
    flex-wrap: wrap;
}

/* 链接样式 */
a {
    text-decoration: none;
}

a:hover {
    text-decoration: underline;
}

/* 定位样式 */
.relative {
    position: relative;
}

.absolute {
    position: absolute;
}

.inset-y-0 {
    top: 0;
    bottom: 0;
}

.left-0 {
    left: 0;
}

.right-0 {
    right: 0;
}

.pl-3 {
    padding-left: 0.75rem;
}

.pr-3 {
    padding-right: 0.75rem;
}

.pr-10 {
    padding-right: 2.5rem;
}

.pl-10 {
    padding-left: 2.5rem;
}

.pointer-events-none {
    pointer-events: none;
}

/* 动画和过渡 */
.transform {
    transition: transform 0.3s ease;
}

.transition-all {
    transition: all 0.3s ease;
}

.hover:-translate-y-1:hover {
    transform: translateY(-0.25rem);
}

/* 响应式设计 */
@media (max-width: 768px) {
    .md\:grid-cols-12 {
        grid-template-columns: 1fr;
    }

    .md\:col-span-5,
    .md\:col-span-7,
    .md\:col-span-2 {
        grid-column: 1 / -1;
    }

    .md\:order-1,
    .md\:order-2 {
        order: 0;
    }

    .md\:py-24 {
        padding-top: 4rem;
        padding-bottom: 4rem;
    }

    .form-actions {
        text-align: center;
    }

    .btn {
        width: 100%;
    }
}
</style>