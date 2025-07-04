<template>
    <div class="min-h-screen bg-gray-50">
        <section id="agent-form" class="section py-16 md:py-24 bg-white">
            <div class="container mx-auto px-4">
                <div class="grid md:grid-cols-12 gap-8">
                    <div class="md:col-span-5 order-2 md:order-1">
                        <div
                            class="bg-white rounded-2xl shadow-xl p-8 md:p-10 transform transition-all duration-300 hover:shadow-2xl">
                            <h2 class="section-title text-[clamp(1.8rem,3vw,2.5rem)] font-bold mb-6 text-gray-800">代理商申请
                            </h2>
                            <p>
                                海南积分宝致力于为传统农贸市场提供全方位的数字化解决方案，诚邀各地合作伙伴加入我们的事业，共同开拓智慧农贸新蓝海。
                            </p>

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

                    <div class="md:col-span-7 order-1 md:order-2">
                        <div
                            class="bg-white rounded-2xl shadow-xl p-8 md:p-10 transform transition-all duration-300 hover:shadow-2xl">
                            <form @submit.prevent="submitForm">
                                <h3 class="text-2xl font-bold mb-6 text-gray-800">填写申请信息</h3>

                                <div class="grid md:grid-cols-2 gap-6">
                                    <div class="form-group">
                                        <label for="company-name" class="">
                                            公司名称 <span class="text-red-500">*</span>
                                        </label>
                                        <div class="relative">
                                            <div
                                                class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                <i class="fa fa-building text-gray-400"></i>
                                            </div>
                                            <input type="text" id="company-name" v-model="formData.companyName"
                                                class="form-control pl-10 focus:pl-10 transition-all"
                                                placeholder="请输入公司名称" required>
                                        </div>
                                    </div>

                                    <div class="form-group">
                                        <label for="contact-person">
                                            联系人姓名 <span class="text-red-500">*</span>
                                        </label>
                                        <div class="relative">
                                            <div
                                                class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                <i class="fa fa-user text-gray-400"></i>
                                            </div>
                                            <input type="text" id="contact-person" v-model="formData.contactPerson"
                                                class="form-control pl-10 focus:pl-10 transition-all"
                                                placeholder="请输入联系人姓名" required>
                                        </div>
                                    </div>

                                    <div class="form-group">
                                        <label for="phone">
                                            联系电话 <span class="text-red-500">*</span>
                                        </label>
                                        <div class="relative">
                                            <div
                                                class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                <i class="fa fa-phone text-gray-400"></i>
                                            </div>
                                            <input type="tel" id="phone" v-model="formData.phone"
                                                class="form-control pl-10 focus:pl-10 transition-all"
                                                placeholder="请输入联系电话" required>
                                        </div>
                                    </div>

                                    <div class="form-group">
                                        <label for="email">
                                            电子邮箱 <span class="text-red-500">*</span>
                                        </label>
                                        <div class="relative">
                                            <div
                                                class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                <i class="fa fa-envelope text-gray-400"></i>
                                            </div>
                                            <input type="email" id="email" v-model="formData.email"
                                                class="form-control pl-10 focus:pl-10 transition-all"
                                                placeholder="请输入电子邮箱" required>
                                        </div>
                                    </div>

                                    <div class="form-group">
                                        <label for="province">
                                            所在省份 <span class="text-red-500">*</span>
                                        </label>
                                        <div class="relative">
                                            <div
                                                class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                <i class="fa fa-map-marker text-gray-400"></i>
                                            </div>
                                            <select id="province" v-model="formData.province"
                                                class="form-control pl-10 focus:pl-10 transition-all appearance-none pr-10 bg-white"
                                                required>
                                                <option value="">请选择省份</option>
                                                <option value="北京">北京</option>
                                                <option value="上海">上海</option>
                                                <option value="广东">广东</option>
                                                <option value="浙江">浙江</option>
                                                <option value="江苏">江苏</option>
                                            </select>

                                        </div>
                                    </div>

                                    <div class="form-group">
                                        <label for="city"
                                            class="form-label block text-sm font-medium text-gray-700 mb-1">
                                            所在城市 <span class="text-red-500">*</span>
                                        </label>
                                        <div class="relative">
                                            <div
                                                class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                <i class="fa fa-city text-gray-400"></i>
                                            </div>
                                            <select id="city" v-model="formData.city"
                                                class="form-control pl-10 focus:pl-10 transition-all appearance-none pr-10 bg-white"
                                                required>
                                                <option value="">请选择城市</option>
                                                <option v-if="formData.province === '北京'" value="北京">北京</option>
                                                <option v-if="formData.province === '上海'" value="上海">上海</option>
                                                <option v-if="formData.province === '广东'" value="广州">广州</option>
                                                <option v-if="formData.province === '广东'" value="深圳">深圳</option>
                                                <option v-if="formData.province === '浙江'" value="杭州">杭州</option>
                                                <option v-if="formData.province === '浙江'" value="宁波">宁波</option>
                                            </select>
                                            <div
                                                class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                                                <i class="fa fa-chevron-down text-gray-400"></i>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="form-group">
                                        <label for="agent-type"
                                            class="form-label block text-sm font-medium text-gray-700 mb-1">
                                            代理类型 <span class="text-red-500">*</span>
                                        </label>
                                        <div class="relative">
                                            <div
                                                class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                <i class="fa fa-briefcase text-gray-400"></i>
                                            </div>
                                            <select id="agent-type" v-model="formData.agentType"
                                                class="form-control pl-10 focus:pl-10 transition-all appearance-none pr-10 bg-white"
                                                required>
                                                <option value="">请选择代理类型</option>
                                                <option value="省级代理">省级代理</option>
                                                <option value="市级代理">市级代理</option>
                                                <option value="县级代理">县级代理</option>
                                                <option value="区域代理">区域代理</option>
                                            </select>
                                            <div
                                                class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                                                <i class="fa fa-chevron-down text-gray-400"></i>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="form-group">
                                        <label for="investment"
                                            class="form-label block text-sm font-medium text-gray-700 mb-1">
                                            意向投资规模 <span class="text-red-500">*</span>
                                        </label>
                                        <div class="relative">
                                            <div
                                                class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                <i class="fa fa-money text-gray-400"></i>
                                            </div>
                                            <select id="investment" v-model="formData.investment"
                                                class="form-control pl-10 focus:pl-10 transition-all appearance-none pr-10 bg-white"
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
                                    </div>

                                    <div class="form-group md:col-span-2">
                                        <div>
                                            <div class="flex items-center h-5">
                                                <input id="agreement" v-model="formData.agreement" type="checkbox"
                                                    class="w-4 h-4 text-primary-500 focus:ring-primary-500 border-gray-300 rounded"
                                                    required>
                                                我已阅读并同意
                                            </div>
                                            <div>

                                                <a href="javascript:"
                                                    class="text-primary-600 hover:underline">《合作协议》</a> 和
                                                <a href="javascript:"
                                                    class="text-primary-600 hover:underline">《隐私政策》</a>
                                            </div>
                                        </div>
                                        <div v-if="errors.agreement" class="mt-2 text-sm text-red-500">
                                            {{ errors.agreement }}
                                        </div>
                                    </div>
                                </div>

                                <div class="form-actions mt-8">
                                    <button type="submit" class="btn btn-primary px-8 py-3 text-lg"
                                        style="margin:20px;">
                                        提交申请
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
import { ref, reactive } from 'vue'

const formData = ref({
    companyName: '',
    contactPerson: '',
    phone: '',
    email: '',
    province: '',
    city: '',
    agentType: '',
    investment: '',
    agreement: false
})

const errors = reactive({
    companyName: '',
    contactPerson: '',
    phone: '',
    email: '',
    province: '',
    city: '',
    agentType: '',
    investment: '',
    agreement: ''
})


</script>

<style>
.form-group {
    margin: 20px;
}

.text-red-500 {
    color: red;
}

:root {
    --primary-50: #EEF2FF;
    --primary-100: #E0E7FF;
    --primary-200: #C7D2FE;
    --primary-300: #A5B4FC;
    --primary-400: #818CF8;
    --primary-500: #6366F1;
    --primary-600: #4F46E5;
    --primary-700: #4338CA;
    --primary-800: #3730A3;
    --primary-900: #312E81;
    --gray-50: #F9FAFB;
    --gray-100: #F3F4F6;
    --gray-200: #E5E7EB;
    --gray-300: #D1D5DB;
    --gray-400: #9CA3AF;
    --gray-500: #6B7280;
    --gray-600: #4B5563;
    --gray-700: #374151;
    --gray-800: #1F2937;
    --gray-900: #111827;
    --red-500: #EF4444;
}

body {
    font-family: 'Inter', system-ui, -apple-system, sans-serif;
    line-height: 1.5;
    color: var(--gray-800);
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1.5rem;
}



h2 {
    font-size: clamp(1.8rem, 3vw, 2.5rem);
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 1rem;
}

h3 {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 1rem;
}

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
    transform: translateY(-1px);
}

.form-label {
    font-weight: 500;
    color: var(--gray-700);
    font-size: 0.875rem;
}

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

.animate-fade-in {
    animation: fadeIn 0.5s ease-out forwards;
    opacity: 0;
}

@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(10px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* 响应式设计 */
@media (max-width: 768px) {
    .md:grid-cols-2 {
        grid-template-columns: 1fr;
    }

    .md:col-span-5,
    .md:col-span-7 {
        grid-column: 1 / -1;
    }

    .md:order-1,
    .md:order-2 {
        order: 0;
    }
}
</style>