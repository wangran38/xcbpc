<template>
  <div>
    <header>
      <div class="container">
        <div class="logo">海南积分宝电子商务有限公司</div>
        <div class="expand" @click="switchIsshow"><img src="../static/展开菜单.png" alt=""
            style="width: 40px; height: 100%;"></div>
        <nav class="desktop-nav">
          <a href="#about" class="nav-link">项目背景</a>
          <a href="#services" class="nav-link">核心功能</a>
          <a href="#advantage" class="nav-link">投资优势</a>
          <a href="#scene" class="nav-link">应用场景</a>
          <a href="#process" class="nav-link">合作流程</a>
          <a href="#service" class="nav-link">提供服务</a>
        </nav>
      </div>

      <div v-show="isShow" class="expandList" :style="{ opacity: elementTagOpacity }">
        <nav>
          <a href="#about" class="nav-link">项目背景</a>
          <a href="#services" class="nav-link">核心功能</a>
          <a href="#advantage" class="nav-link">投资优势</a>
          <a href="#scene" class="nav-link">应用场景</a>
          <a href="#process" class="nav-link">合作流程</a>
          <a href="#service" class="nav-link">提供服务</a>
        </nav>
      </div>
    </header>

    <section class="hero-section">
      <div class="hero-bg">
        <img src="../static/background.jpg" alt="智慧农贸平台展示" class="hero-image">
      </div>

      <div class="hero-content">
        <h1 class="hero-title">智慧农贸<br>乡村振兴</h1>
        <p class="hero-subtitle">海南积分宝农贸市场数字化转型平台，连接农户与市场，构建全国统一大市场</p>
        <div class="hero-actions">
          <a class="btn-primary" href="/cooperate">成为代理</a>
          <a href="#services" class="btn-secondary">了解功能</a>
        </div>
      </div>

      <div class="scroll-indicator">
        <i class="fa fa-angle-down"></i>
      </div>
    </section>

    <section id="about" class="about-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">企业简介</h2>
          <div class="section-divider"></div>
        </div>

        <div>
          <div class="introduceItem" style="margin: 10px;">
            <div style="font-weight: bold; font-size: 20px;">公司简介:</div>
            <div>
              <p style="text-indent: 20px;">集积分运营、电子商务、应用软件技术于一体的复合型公司
                海南积分宝电子商务有限公司, 于2011年3月30日在海口成立，注册资金1000万人民币，是一家集积分运营、电子商务、应用软件技术于一体的复合型公司，致力于消费养老、企业咨询管理、文化传播推广与运营等。
              </p>
            </div>
          </div>


          <div class="introduceItem">
            <div style="font-weight: bold; font-size: 20px;">企业价值观:</div>
            <div>
              <p style="text-indent: 20px;">
                1客户第一
                客户是衣食父母
                ·尊重他人，随时随地维护积分宝形象
                ·始终微笑面对投诉和委屈，积极主动地为客户解决问题
                ·与客户交流过程中，即使不是自己的责任，也不推诿
                ·不断激发与满足客户的需求，提供建议和资讯提升客户的忠诚度
                ·平衡好客户需求和公司利益，寻求并取得双赢
                ·建立超前服务意识，防患于未然
                2 学习成长
                终生学习，终生成长，学习是成长的阶梯
                积极参与公司培训，认真学习，通过各项考评；熟练掌握专业知识与技能，并不断提升行业知识；主动学习，主动分享；不断提升职业素养，带动伙伴共同成长；明确标杆，勇于超越；
                3 激情快乐
                激情就是以压倒一切困难的决心和勇气，激情就是工作生活快乐的源泉
                喜欢自己的工作，认同积分宝企业文化热爱盘石，顾全大局，不计较个人得失以积极乐观的心态面对日常工作，碰到困难和挫折的时候永不放弃，不断自我激励，努力提升业绩始终以乐观主义的精神和必胜的信念，影响并带动同事和团队不断设定更高的目标，今天的最好表现是明天的最低要求
                4 团队协作
                集体荣誉感是团队的灵魂，共享共担，平凡人做非凡事
                积极融入团队，乐于接受同事的帮助，配合团队完成工作决策前积极发表建设性意见，充分参与团队讨论；决策后，无论个人是否有异议，必须从言行上完全予以支持积极主动分享业务知识和经验；主动给予同事必要的帮助；善于利用团队的力量解决问题和困难善于和不同类型的同事合作，不将个人喜好带入工作，充分体现“对事不对人”的原则有主人翁意识，积极正面地影响团队，改善团队士气和氛围
                5 迎接变化
                唯一不变的就是变化，拥抱变化，勇于创新
                适应公司的日常变化，不抱怨面对变化，理性对待，充分沟通，诚意配合对变化产生的困难和挫折，能自我调整，并正面影响和带动同事在工作中有前瞻意识，建立新方法、新思路创造变化，并带来绩效突破性地提高
                6 执着敬业
                对待工作专业执着，精益求精
                对于本行业的特点有深刻的认识，积极主动的为公司思考；抛弃狭隘的个人经验主义，不断开拓进取；以小我完成大我，坚信公司理念，以公司利益为重；教学相长：人人必须既能当老师教别人，也能做学生不断的求教他人；树立标杆：时刻迎接挑战，定期寻找学习标杆，不断争取超越对方；
                7 正直诚信
                永远保持正直诚信，言出必践
                不传播未经证实的消息，不背后不负责任地议论事和人；诚实正直，表里如一通过正确的渠道和流程，准确表达自己的观点；表达批评意见的同时能提出相应建议，直言有讳勇于承认错误，敢于承担责任，并及时改正对损害公司利益的不诚信行为正确有效地制止，并能正面引导；
                8 勇担责任
                承担社会和公司所赋予的责任，为自己和家人的幸福而不懈努力。
                今天的事不推到明天，上班时间只做与工作有关的事情遵循必要的工作流程，没有因工作失职而造成的重复错误先承担自己的责任，再追究其他人的责任将责任细化到每一个工作环节中，不断质疑和改进工作，并对自己工作的结果负责完成个人和团队责任目标
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- 项目背景 -->
    <section id="about" class="about-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">项目背景</h2>
          <div class="section-divider"></div>
          <p class="section-subtitle">响应国家政策号召，解决传统农贸痛点，助力乡村振兴</p>
        </div>

        <div class="about-content">
          <div class="about-text">
            <h3 class="about-title">政策驱动</h3>
            <p class="about-paragraph">
              国家大力推动农产品流通体系现代化，建设全国统一大市场，实施"数商兴农"工程，强调食品安全溯源。海南省也出台了智慧农贸市场建设指引，要求提升市场信息化、智能化、数字化水平。
            </p>

            <h3 class="about-title">行业痛点</h3>
            <p class="about-paragraph">
              传统农贸市场存在信息不对称（中间商差价占比30%）、供应链冗长（流通损耗率25%）、溯源困难（食品安全投诉年增25%）等问题。全国1.2万个农贸市场中90%亟待数字化改造，小农户面临"卖货难"，消费者缺乏信任，市场管理效率低下。
            </p>

            <h3 class="about-title">项目必要性</h3>
            <p class="about-paragraph">
              本项目直接契合国家及海南省关于智慧农贸、数字乡村、统一大市场建设的战略方向，能够解决行业痛点，保障食品安全，赋能乡村振兴，探索创新模式。
            </p>

            <h3 class="about-title">市场机遇</h3>
            <p class="about-paragraph">
              全国农产品年交易额超10万亿元，数字化渗透率不足15%，政策红利与市场空白形成双重机遇。平台已验证单市场年均收益可达80-120万元，海南省试点项目带动农户收入增长200%，展现强劲盈利能力。
            </p>
          </div>

          <div class="market-potential">
            <div class="potential-chart">
              <v-chart class="chart" :option="option" />
            </div>
            <div class="potential-stats">
              <div class="stat-item">
                <div class="stat-value">10万亿+</div>
                <div class="stat-label">年交易额</div>
              </div>
              <div class="stat-item">
                <div class="stat-value">1.2万+</div>
                <div class="stat-label">待改造市场</div>
              </div>
              <div class="stat-item">
                <div class="stat-value">80-120万</div>
                <div class="stat-label">单市场年均收益</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 核心功能 -->
    <section id="services" class="services-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">核心功能</h2>
          <div class="section-divider"></div>
          <p class="section-subtitle">打造集线上交易、供应链对接、精准溯源于一体的智慧农贸平台</p>
        </div>

        <div class="services-grid">
          <div class="service-card">
            <img src="../static/one.png" alt="">
            <h3 class="service-title">线上摊位</h3>
            <p class="service-description">为实体摊主开设线上虚拟摊位，实现线上线下融合经营，突破地域限制，接受全国订单。</p>
          </div>

          <div class="service-card">
            <img src="../static/two.png" alt="">
            <h3 class="service-title">源头直采</h3>
            <p class="service-description">连接农贸市场附近菜农、小农场、农业基地，为摊主/消费者提供一手货源信息，降低采购成本。</p>
          </div>

          <div class="service-card">
            <img src="../static/three.png" alt="">
            <h3 class="service-title">农户直销</h3>
            <p class="service-description">为农户提供发布农产品供给信息、在线接单的渠道，支持送至附近农贸市场代收点或物流到家。</p>
          </div>

          <div class="service-card">
            <img src="../static/four.png" alt="">
            <h3 class="service-title">全链溯源</h3>
            <p class="service-description">要求所有经营主体进行真实身份认证，记录农产品种养、交易信息，实现"从田间到餐桌"的全程可追溯。</p>
          </div>

          <div class="service-card">
            <img src="../static/five.png" alt="">
            <h3 class="service-title">大数据分析</h3>
            <p class="service-description">提供用户行为分析、供需预测、精准营销等功能，帮助摊主和农户做出更明智的经营决策。</p>
          </div>

          <div class="service-card">
            <img src="../static/six.png" alt="">
            <h3 class="service-title">支付安全</h3>
            <p class="service-description">集成多种支付方式，保障交易安全，提供便捷的结算服务，支持实时到账。</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 核心投资优势 -->
    <section class="application-section" id="advantage">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">核心投资优势</h2>
          <div class="section-divider"></div>
          <p class="section-subtitle">政策红利+技术壁垒+成熟模式，三大核心竞争力</p>
        </div>
        <div class="advantages-grid">
          <div class="advantage-card">
            <div class="advantage-icon">
              <img src="../static/zhengce.png" alt="">
            </div>
            <h3 class="advantage-title">政策红利</h3>
            <p class="advantage-desc">
              享受国家及地方政府双重补贴，合作项目可申报专项扶持资金，政策支持力度大，项目合规性高
            </p>
          </div>
          <div class="advantage-card">
            <div class="advantage-icon">
              <img src="../static/baolei.png" alt="">
            </div>
            <h3 class="advantage-title">技术壁垒</h3>
            <p class="advantage-desc">
              8项软件著作权，区块链溯源+AI定价+大数据分析技术，构建高壁垒技术体系
            </p>
          </div>
          <div class="advantage-card">
            <div class="advantage-icon">
              <img src="../static/moshi.png" alt="">
            </div>
            <h3 class="advantage-title">成熟模式</h3>
            <p class="advantage-desc">
              试点验证的"1+3"盈利模型，单市场平均6-12个月收回成本，现金流稳定
            </p>
          </div>
          <div class="advantage-card">
            <div class="advantage-icon">
              <img src="../static/youshi.png" alt="">
            </div>
            <h3 class="advantage-title">团队优势</h3>
            <p class="advantage-desc">
              核心团队拥有10年+农贸行业经验与互联网技术背景，实战经验丰富
            </p>
          </div>
        </div>
      </div>
    </section>



    <!-- 应用场景 -->
    <section class="application-section" id="scene">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">应用场景</h2>
          <div class="section-divider"></div>
          <p class="section-subtitle">覆盖农产品流通全链条，服务多方主体</p>
        </div>
        <div class="scenes-grid">
          <div class="scene-card">
            <!-- <div class="scene-icon">
              <i class="fa fa-user-tie"></i>
            </div> -->
            <h3 class="scene-title">农贸市场摊主</h3>
            <ul class="scene-list">
              <li>线上线下一体化经营，订单量增长40%</li>
              <li>源头直采降低采购成本，利润率提升25%</li>
              <li>数据驱动经营，精准把握市场需求</li>
            </ul>
          </div>
          <div class="scene-card">
            <!-- <div class="scene-icon">
              <i class="fa fa-user-farmer"></i>
            </div> -->
            <h3 class="scene-title">农户与合作社</h3>
            <ul class="scene-list">
              <li>直接对接市场，去除中间商，收入增长50%</li>
              <li>按需种植，减少农产品滞销风险</li>
              <li>获取市场数据，优化种植结构</li>
            </ul>
          </div>
          <div class="scene-card">
            <!-- <div class="scene-icon">
              <i class="fa fa-shopping-cart"></i>
            </div> -->
            <h3 class="scene-title">消费者</h3>
            <ul class="scene-list">
              <li>随时随地购买新鲜农产品，配送上门</li>
              <li>查看产品溯源信息，放心消费</li>
              <li>价格透明，享受更多实惠</li>
            </ul>
          </div>
          <div class="scene-card">
            <!-- <div class="scene-icon">
              <i class="fa fa-building"></i>
            </div> -->
            <h3 class="scene-title">市场管理方及政府部门</h3>
            <ul class="scene-list">
              <li>市场信息化升级，提升整体形象</li>
              <li>智能化管理，效率提升60%</li>
              <li>数据化运营，管理费收入增长80%</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- 合作流程 -->
    <section class="application-section" id="process">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">合作流程</h2>
          <div class="section-divider"></div>
          <p class="section-subtitle">六步轻松合作，开启财富之旅</p>
        </div>

        <div class="process-steps">
          <div class="step-item">
            <div class="step-number">1</div>
            <div class="step-content">
              <h3 class="step-title">初步洽谈</h3>
              <p class="step-desc">
                通过电话、邮件或面谈，初步了解项目情况与合作意向
              </p>
            </div>
          </div>
          <div class="step-item">
            <div class="step-number">2</div>
            <div class="step-content">
              <h3 class="step-title">资质审核</h3>
              <p class="step-desc">
                提交公司资质、资金证明等材料，评估合作资格
              </p>
            </div>
          </div>
          <div class="step-item">
            <div class="step-number">3</div>
            <div class="step-content">
              <h3 class="step-title">实地考察</h3>
              <p class="step-desc">
                前往总部或成熟试点市场考察，深入了解运营模式
              </p>
            </div>
          </div>
          <div class="step-item">
            <div class="step-number">4</div>
            <div class="step-content">
              <h3 class="step-title">方案定制</h3>
              <p class="step-desc">
                根据合作需求，定制专属合作方案与投资计划
              </p>
            </div>
          </div>
          <div class="step-item">
            <div class="step-number">5</div>
            <div class="step-content">
              <h3 class="step-title">签约培训</h3>
              <p class="step-desc">
                签订合作协议，参加系统培训，掌握运营技能
              </p>
            </div>
          </div>
          <div class="step-item">
            <div class="step-number">6</div>
            <div class="step-content">
              <h3 class="step-title">落地运营</h3>
              <p class="step-desc">
                总部协助落地，提供全程运营支持，确保项目顺利启动
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 提供的服务 -->
    <section class="application-section" id="service">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">提供的服务</h2>
          <div class="section-divider"></div>
          <p class="section-subtitle">全方位赋能，保障合作方利益</p>
        </div>

        <div class="benefits-grid">
          <div class="benefit-card">
            <div class="benefit-icon">
              <img src="../static/shouyi.png" alt="">
            </div>
            <h3 class="benefit-title">高额收益回报</h3>
            <p class="benefit-desc">
              县级代理年均收益80-120万元，6-12个月收回投资成本，收益稳定增长
            </p>
          </div>
          <div class="benefit-card">
            <div class="benefit-icon">
              <img src="../static/zhichi.png" alt="">
            </div>
            <h3 class="benefit-title">全程运营支持</h3>
            <p class="benefit-desc">
              市场调研、系统部署、商户培训全流程服务，专属顾问7×12小时响应
            </p>
          </div>
          <div class="benefit-card">
            <div class="benefit-icon">
              <img src="../static/daili.png" alt="">
            </div>
            <h3 class="benefit-title">区域独家代理</h3>
            <p class="benefit-desc">
              县级行政单位仅设1家代理商，独享区域开发权，避免同业恶性竞争
            </p>
          </div>
          <div class="benefit-card">
            <div class="benefit-icon">
              <img src="../static/zhichi2.png" alt="">
            </div>
            <h3 class="benefit-title">技术系统支持</h3>
            <p class="benefit-desc">
              持续的系统升级与维护，确保技术领先，功能不断优化
            </p>
          </div>
          <div class="benefit-card">
            <div class="benefit-icon">
              <img src="../static/zhengce.png" alt="">
            </div>
            <h3 class="benefit-title">政策申报支持</h3>
            <p class="benefit-desc">
              协助申报政府扶持项目，获取政策补贴和资金支持
            </p>
          </div>
          <div class="benefit-card">
            <div class="benefit-icon">
              <img src="../static/zengzhi.png" alt="">
            </div>
            <h3 class="benefit-title">数据增值服务</h3>
            <p class="benefit-desc">
              提供市场数据分析报告，帮助合作方发现新的商业机会
            </p>
          </div>
        </div>
      </div>
    </section>



    <footer class="footer" id="contact">
      <div class="container">
        <div class="footer-grid">
          <div class="footer-col">
            <h3 class="footer-title">海南积分宝电子商务有限公司</h3>
            <p class="footer-text">农贸市场数字化转型平台，连接农户与市场，助力乡村振兴，保障食品安全。</p>

          </div>


          <div class="footer-col">
            <button style="color: black; padding: 20px; font-size: 20px; "><a href="/cooperate">我要成为代理</a></button>
          </div>

          <div class="footer-col">
            <h3 class="footer-title">联系方式</h3>
            <ul class="footer-contacts">
              <li class="footer-contact">
                <i class="fa fa-map-marker"></i>
                <span>海南省海口市龙华区国贸大道1号</span>
              </li>
              <li class="footer-contact">
                <i class="fa fa-phone"></i>
                <span>+86 68552337</span>
              </li>
              <li class="footer-contact">
                <i class="fa fa-envelope"></i>
                <span>wangrantian@qq.com</span>
              </li>
              <li class="footer-contact">
                <i class="fa fa-clock-o"></i>
                <span>周一至周五: 8:00 - 18:00</span>
              </li>
            </ul>
          </div>
        </div>

        <div class="footer-bottom">
          <p hr class="footer-copyright">工信部ICP备案号:<a href="https://beian.miit.gov.cn/"
              target="_blank">琼ICP备2024041928号</a></p>
          <p class="footer-copyright">© 2025 海南积分宝电子商务有限公司. 保留所有权利。</p>

        </div>


      </div>
    </footer>
  </div>
</template>

<script setup>
import { use } from 'echarts/core';
import { CanvasRenderer } from 'echarts/renderers';
import { LabelLayout } from 'echarts/features';
import { PieChart, LineChart } from 'echarts/charts';
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
} from 'echarts/components';
import VChart, { THEME_KEY } from 'vue-echarts';
import { ref, defineComponent } from 'vue';


use([
  CanvasRenderer,
  PieChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  LabelLayout,
  LineChart
]);

const isShow = ref(false)
const elementTagOpacity = ref(0)

const switchIsshow = () => {
  isShow.value = !isShow.value
  elementTagOpacity.value = isShow.value ? 1 : 0
}

window.addEventListener('resize', () => {
  console.log(window.innerWidth)
  if (window.innerWidth > 840) {
    isShow.value = false
    elementTagOpacity.value = 0
  }
})


const option = ref({
  title: {
    show: true,
    text: '市场潜力数据'
  },
  xAxis: {
    type: 'category',
    data: ['2025', '2026', '2027', '2028', '2029', '2030', '2031']
  },
  yAxis: {
    type: 'value'
  },
  tooltip: {
    trigger: 'axis',
    formatter: '{c}亿元'
  },
  series: [
    {
      data: [0.1, 0.6, 7, 10, 13, 17, 30],
      type: 'line',
      label: {
        show: true,
        position: 'top',
        formatter: '{c}亿元'
      }
    },
    {
      data: [0.1, 5, 7, 10, 13, 17, 30],
      type: 'bar',
      color: '#a2b0db',
    }
  ]
})
const option2 = ref({
  title: {
    show: true,
    text: '用户增长预测'
  },
  xAxis: {
    type: 'category',
    data: ['2024', '2025', '2026', '2027', '2028', '2029', '2030']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: [150, 230, 224, 218, 135, 147, 260],
      type: 'line'
    }
  ],

})
</script>

<style>
/* ===== 全局样式与重置 ===== */
:root {
  --primary: #2274df;
  /* 农业主题绿色 */
  --secondary: #f5a623;
  /* 强调色 */
  --dark: #333;
  /* 深色文本 */
  --light: #f8f9fa;
  /* 浅色背景 */
  --gray: #6c757d;
  /* 灰色文本 */
  --transition: all 0.3s ease;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  /* 盒模型设置  */
}

a {
  text-decoration: none;
}

html {
  scroll-behavior: smooth;
  /* 平滑滚动  */
  font-size: 16px;
}

body {
  font-family: 'PingFang SC', 'Microsoft YaHei', sans-serif;
  color: var(--dark);
  line-height: 1.6;
  overflow-x: hidden;
}


.benefits-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 25px;
}

.benefit-card {
  background: white;
  border-radius: 12px;
  padding: 35px 25px;
  text-align: center;
  box-shadow: 0 7px 20px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s;
  border: 1px solid #eee;
}

.benefit-card:hover {
  transform: translateY(-10px);
}

.benefit-icon {
  width: 70px;
  height: 70px;
  background: #f0f7ff;
  color: var(--primary);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.8rem;
  margin: 0 auto 20px;
}

.benefit-title {
  font-size: 1.3rem;
  color: var(--primary);
  margin-bottom: 15px;
  font-weight: 600;
}

.benefit-desc {
  color: var(--gray);
  line-height: 1.7;
}

/* 合作流程板块 */
.process-section {
  background: #f9f9f9;
}

.process-steps {
  display: flex;
  justify-content: space-between;
  position: relative;
  margin-top: 50px;
}

.process-steps::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
  height: 2px;
  background: #e0e0e0;
  transform: translateY(-50%);
  z-index: 1;
}

.step-item {
  position: relative;
  z-index: 2;
  text-align: center;
  width: 16.66%;
}

.step-number {
  width: 60px;
  height: 60px;
  background: var(--primary);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0 auto 20px;
  border: 3px solid white;
  box-shadow: 0 0 0 2px var(--primary);
}

.step-content {
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 7px 20px rgba(0, 0, 0, 0.08);
}

.step-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--primary);
  margin-bottom: 10px;
}

.step-desc {
  color: var(--gray);
}

/* 应用场景板块 */
.scenes-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
}

.scene-card {
  background: white;
  border-radius: 12px;
  box-shadow: 0 7px 20px rgba(0, 0, 0, 0.08);
  padding: 35px 25px;
  transition: transform 0.3s;
  border: 1px solid #eee;
}

.scene-card:hover {
  transform: translateY(-10px);
}

.scene-icon {
  width: 70px;
  height: 70px;
  background: #f0f7ff;
  color: var(--primary);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.8rem;
  margin: 0 auto 20px;
}

.scene-title {
  font-size: 1.3rem;
  color: var(--primary);
  margin-bottom: 15px;
  font-weight: 600;
  text-align: center;
}

.scene-list {
  text-align: left;
  margin-top: 10px;
}

.scene-list li {
  margin-bottom: 12px;
  position: relative;
  padding-left: 20px;
  color: var(--gray);
}

.scene-list li::before {
  content: '•';
  color: var(--primary);
  position: absolute;
  left: 0;
}

/* 核心优势板块 */
.advantages-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
}

.advantage-card {
  background: white;
  border-radius: 12px;
  box-shadow: 0 7px 20px rgba(0, 0, 0, 0.08);
  padding: 40px 30px;
  text-align: center;
  transition: transform 0.3s, box-shadow 0.3s;
  border: 1px solid #eee;
}

.advantage-icon {
  width: 80px;
  height: 80px;
  /* background: var(--primary); */
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  margin: 0 auto 20px;
}

.advantage-title {
  font-size: 1.5rem;
  color: var(--primary);
  margin-bottom: 15px;
  font-weight: 600;
}

.advantage-desc {
  color: var(--gray);
  line-height: 1.7;
}


.market-potential {
  background: white;
  border-radius: 12px;
  box-shadow: 0 7px 20px rgba(0, 0, 0, 0.08);
  padding: 30px;
}

.potential-chart {
  height: 250px;
  margin-bottom: 20px;
}

.potential-stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
}

.stat-item {
  background: #f9f9f9;
  border-radius: 8px;
  padding: 15px;
  text-align: center;
}

.stat-value {
  font-size: 20px;
  font-weight: 700;
  color: var(--primary);
  margin-bottom: 5px;
}

.stat-label {
  font-size: 0.9rem;
  color: var(--gray);
}

.chart {
  width: 100%;
  height: 100%;
}

.expand {
  display: none;
}

.expandList {
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
}


.expandList nav {
  display: flex;
  justify-content: space-between;
  margin: 10px;
  transition: margin 0.5s;
  flex-wrap: wrap;
}


img {
  max-width: 100%;
  height: auto;
  /* 响应式图片  */
}

li {
  list-style: none;
}

.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 10px;
}

header {
  position: fixed;
  width: 100%;
  background: rgba(255, 255, 255, 0.95);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  transition: var(--transition);
}



header .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0;
}

.logo {
  font-size: 1.8rem;
  font-weight: 700;
  color: var(--primary);
}

.desktop-nav {
  display: flex;
  gap: 30px;
}

.nav-link {
  text-decoration: none;
  color: var(--dark);
  font-weight: 500;
  transition: color 0.3s;
  position: relative;
}

.nav-link:hover {
  color: var(--primary);
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--primary);
  transition: width 0.3s;
}

.nav-link:hover::after {
  width: 100%;
}



.hero-section {
  position: relative;
  height: 100vh;
  display: flex;
  align-items: center;
  overflow: hidden;
}

.hero-bg {
  position: absolute;
  width: 100%;
  height: 100%;
  /* z-index: -1; */
}

.hero-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  /* 响应式背景图处理  */
}

.hero-content {
  z-index: 10;
  max-width: 600px;
  color: white;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  padding: 0 20px;
  animation: fadeInUp 1s ease;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(50px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.hero-title {
  font-size: 3.5rem;
  line-height: 1.2;
  margin-bottom: 20px;
  font-weight: 700;
}

.hero-subtitle {
  font-size: 1.25rem;
  margin-bottom: 30px;
  font-weight: 300;
}

.hero-actions {
  display: flex;
  gap: 15px;
}

.btn {
  display: inline-block;
  padding: 14px 32px;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.1rem;
  transition: var(--transition);
  text-align: center;
  border: 2px solid transparent;
}

.btn-primary {
  border-radius: 5px;
  padding: 10px;
  background: var(--primary);
  color: white;
}



.btn-secondary {
  border-radius: 5px;
  padding: 10px;
  background: rgba(255, 255, 255, 0.2);
  color: white;
  border: 2px solid white;
}




@keyframes bounce {

  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateY(0);
  }

  40% {
    transform: translateY(-20px);
  }

  60% {
    transform: translateY(-10px);
  }
}

section {
  padding: 100px 0;
  background: var(--light);
}

.section-header {
  text-align: center;
  margin-bottom: 60px;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}

.section-title {
  font-size: 2.5rem;
  color: var(--primary);
  margin-bottom: 15px;
  font-weight: 700;
}

.section-divider {
  width: 80px;
  height: 4px;
  background: var(--secondary);
  margin: 0 auto 20px;
  border-radius: 2px;
}

.section-subtitle {
  font-size: 1.25rem;
  color: var(--gray);
  font-weight: 300;
}

/* ===== 关于我们 ===== */
.about-section {
  background: white;
}

.about-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  /* 双列布局  */
  gap: 50px;
  align-items: center;
}

.about-text {
  padding-right: 30px;
}

.about-title {
  font-size: 1.5rem;
  color: var(--primary);
  margin: 30px 0 15px;
  font-weight: 600;
}

.about-paragraph {
  margin-bottom: 20px;
  color: #555;
  font-size: 1.1rem;
  line-height: 1.8;
}







/* ===== 核心功能 ===== */
.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
}

.service-card {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 7px 20px rgba(0, 0, 0, 0.08);
  transition: var(--transition);
}

.service-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
}





.service-title {
  margin: 10px;
  font-size: 1.5rem;
  margin-bottom: 15px;
  color: var(--primary);
  font-weight: 600;
}

.service-description {
  margin: 10px;
  color: #555;
  margin-bottom: 20px;
  line-height: 1.7;
}

/* ===== 响应式设计 ===== */
@media (max-width: 992px) {


  /* 平板设备  */
  .hero-title {
    font-size: 2.8rem;
  }

  .section-title {

    font-size: 2rem;
  }

  .about-content {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .about-text {
    padding-right: 0;
  }
}

@media (max-width: 840px) {

  /* 小尺寸平板  */
  .desktop-nav {
    display: none;
  }





  .hero-title {
    font-size: 2.2rem;
  }

  .hero-actions {
    flex-direction: column;
    gap: 15px;
  }

  .btn {
    width: 100%;
  }

  section {
    padding: 80px 0;
  }


  .logo {
    margin-left: 10px;
    flex-grow: 1;
    /* text-align: center; */
  }

  .expand {
    line-height: 50%;
    margin-right: 10px;
    font-size: 30px;
    display: inline-block;
  }


}

@media (max-width: 480px) {
  .expand {
    line-height: 50%;
    margin-right: 10px;
    font-size: 30px;
    display: inline-block;
  }

  /* 手机设备  */
  .logo {
    font-size: 1.4rem;
  }

  .hero-title {
    font-size: 1.8rem;
  }

  .hero-subtitle {
    font-size: 1rem;
  }

  .section-title {
    font-size: 1.8rem;
  }

  .section-subtitle {
    font-size: 1rem;
  }




}







@layer utilities {
  .content-auto {
    content-visibility: auto;
  }
}

.footer {
  background-color: #1e293b;
  color: #e2e8f0;
  padding: 4rem 0;
}

.container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.footer-grid {
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  gap: 3rem;
}

@media (min-width: 640px) {
  .footer-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (min-width: 1024px) {
  .footer-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

.footer-title {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: #ffffff;
}

.footer-text {
  line-height: 1.75;
  margin-bottom: 1.5rem;
}





.footer-links {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.footer-link {
  color: #cbd5e1;
  transition: color 0.3s ease;
}

.footer-link:hover {
  color: #3b82f6;
}

.footer-contacts {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.footer-contact {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
}

.footer-contact i {
  margin-top: 0.25rem;
  color: #3b82f6;
}

.footer-bottom {
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.footer-copyright {
  text-align: center;
  color: #94a3b8;
}
</style>
