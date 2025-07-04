<template>
  <div>
    <!-- 导航栏 - 新增招商入口 -->
    <header>
      <div class="container">
        <div class="logo">海南积分宝<span>智慧农贸招商平台</span></div>
        <nav class="desktop-nav">
          <a href="#" class="nav-link">首页</a>
          <a href="#about" class="nav-link">项目背景</a>
          <a href="#advantages" class="nav-link">招商优势</a>
          <a href="#services" class="nav-link">核心功能</a>
          <a href="#cases" class="nav-link">成功案例</a>
          <a href="#cooperate" class="nav-link">合作流程</a>
          <a href="#contact" class="nav-link cta-btn">立即加盟</a>
        </nav>
        <div class="mobile-menu-btn" @click="toggleMobileMenu">
          <i class="fa fa-bars"></i>
        </div>
      </div>
      <div class="mobile-menu" v-show="isMobileMenuOpen">
        <a href="#" class="mobile-nav-link" @click="toggleMobileMenu">首页</a>
        <a href="#about" class="mobile-nav-link" @click="toggleMobileMenu">项目背景</a>
        <a href="#advantages" class="mobile-nav-link" @click="toggleMobileMenu">招商优势</a>
        <a href="#services" class="mobile-nav-link" @click="toggleMobileMenu">核心功能</a>
        <a href="#cases" class="mobile-nav-link" @click="toggleMobileMenu">成功案例</a>
        <a href="#cooperate" class="mobile-nav-link" @click="toggleMobileMenu">合作流程</a>
        <a href="#contact" class="mobile-nav-link cta-btn" @click="toggleMobileMenu">立即加盟</a>
      </div>
    </header>

    <!-- 英雄区域 - 强化招商价值主张 -->
    <section class="hero-section">
      <div class="hero-bg">
        <img src="../static/background.jpg" alt="智慧农贸招商平台" class="hero-image">
        <div class="hero-overlay"></div>
      </div>
      <div class="hero-content">
        <h1 class="hero-title">智慧农贸<br><span>共享乡村振兴万亿商机</span></h1>
        <p class="hero-subtitle">海南积分宝农贸市场数字化转型平台，连接1000+市场与50万农户，构建全国统一大市场</p>
        <div class="hero-actions">
          <a href="#contact" class="btn-primary">抢占区域代理权</a>
          <a href="#cases" class="btn-secondary">查看盈利案例</a>
        </div>
        <div class="招商热线">
          <i class="fa fa-phone"></i> 400-888-9999 （7×12小时招商咨询）
        </div>
      </div>
      <div class="scroll-indicator">
        <i class="fa fa-angle-down"></i>
      </div>
    </section>

    <!-- 项目背景 - 强化政策与市场数据 -->
    <section id="about" class="about-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">项目背景</h2>
          <div class="section-divider"></div>
          <p class="section-subtitle">政策红利+市场蓝海，双轮驱动的黄金赛道</p>
        </div>
        <div class="about-content">
          <div class="about-text">
            <h3 class="about-title"><i class="fa fa-gavel"></i> 政策驱动</h3>
            <p class="about-paragraph">
              国家"数商兴农"工程明确要求2025年实现80%农贸市场数字化改造，海南省财政专项补贴智慧农贸项目（最高50万元/市场）。商务部数据显示，全国农产品年交易额超10万亿元，数字化渗透率不足15%，政策红利与市场空白形成双重机遇。
            </p>
            <h3 class="about-title"><i class="fa fa-exclamation-triangle"></i> 行业痛点</h3>
            <p class="about-paragraph">
              传统农贸存在"三难"：农户卖货难（中间商差价占比30%）、摊主获客难（日均客流下降40%）、消费者信任难（食品安全投诉年增25%）。全国1.2万个农贸市场中，90%仍处于原始经营状态，数字化改造需求井喷。
            </p>
            <h3 class="about-title"><i class="fa fa-rocket"></i> 项目优势</h3>
            <p class="about-paragraph">
              作为海南省重点扶持项目，我们已完成定安塔岭市场等5个试点，实现摊主营收增长45%、农户溢价20%、消费者复购率提升3倍。平台获国家版权局8项软件著作权，与省农业农村厅数据平台实现互联互通。
            </p>
          </div>
          <div class="market-data">
            <div class="data-chart">
              <canvas id="marketGrowthChart"></canvas>
            </div>
            <div class="stats-grid">
              <div class="stat-card">
                <div class="stat-number">1000+</div>
                <div class="stat-text">全国待改造农贸市场</div>
              </div>
              <div class="stat-card">
                <div class="stat-number">50万+</div>
                <div class="stat-text">可连接农户资源</div>
              </div>
              <div class="stat-card">
                <div class="stat-number">300亿</div>
                <div class="stat-text">年交易额潜力</div>
              </div>
              <div class="stat-card">
                <div class="stat-number">95%</div>
                <div class="stat-text">食品安全可追溯</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 招商优势 - 新增核心板块 -->
    <section id="advantages" class="advantages-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">五大招商优势</h2>
          <div class="section-divider"></div>
          <p class="section-subtitle">全方位赋能合作伙伴，降低创业风险，提升盈利空间</p>
        </div>
        <div class="advantages-grid">
          <div class="advantage-card">
            <div class="advantage-icon">
              <i class="fa fa-shield"></i>
            </div>
            <h3 class="advantage-title">政策红利支持</h3>
            <p class="advantage-description">
              享受国家及地方政府双重补贴，合作项目可申报"数字乡村"专项扶持资金，单个市场最高获50万元补贴，降低初期投入压力。
            </p>
          </div>
          <div class="advantage-card">
            <div class="advantage-icon">
              <i class="fa fa-line-chart"></i>
            </div>
            <h3 class="advantage-title">成熟盈利模式</h3>
            <p class="advantage-description">
              试点市场验证的"1+3"盈利模型：平台服务费+数据增值+供应链差价+广告收入，单市场年均收益可达80-120万元。
            </p>
          </div>
          <div class="advantage-card">
            <div class="advantage-icon">
              <i class="fa fa-wrench"></i>
            </div>
            <h3 class="advantage-title">全程运营支持</h3>
            <p class="advantage-description">
              提供从市场调研、系统部署到商户培训的全流程服务，配备专属运营顾问，7×12小时响应机制，确保项目落地无忧。
            </p>
          </div>
          <div class="advantage-card">
            <div class="advantage-icon">
              <i class="fa fa-lock"></i>
            </div>
            <h3 class="advantage-title">区域独家代理</h3>
            <p class="advantage-description">
              实行区域保护政策，每个县级行政单位仅设1家代理商，独享区域内市场开发权，避免同业恶性竞争。
            </p>
          </div>
          <div class="advantage-card">
            <div class="advantage-icon">
              <i class="fa fa-users"></i>
            </div>
            <h3 class="advantage-title">强大资源整合</h3>
            <p class="advantage-description">
              整合政府、农户、金融机构等多方资源，提供农产品溯源、供应链金融等增值服务，增强市场粘性与盈利能力。
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- 核心功能 - 优化展示方式 -->
    <section id="services" class="services-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">核心功能</h2>
          <div class="section-divider"></div>
          <p class="section-subtitle">六大核心功能，构建智慧农贸全生态</p>
        </div>
        <div class="services-grid">
          <div class="service-card">
            <div class="service-icon">
              <i class="fa fa-store"></i>
            </div>
            <h3 class="service-title">线上摊位系统</h3>
            <p class="service-description">
              为摊主打造"一店两铺"模式，线下实体摊位+线上虚拟店铺同步运营，突破地域限制，实现3公里外订单配送，试点市场线上订单占比达35%。
            </p>
          </div>
          <div class="service-card">
            <div class="service-icon">
              <i class="fa fa-leaf"></i>
            </div>
            <h3 class="service-title">源头直采平台</h3>
            <p class="service-description">
              直连50万+农户与农业基地，去除中间环节，摊主采购成本平均降低22%，同时农户售价比传统渠道高15-20%。
            </p>
          </div>
          <div class="service-card">
            <div class="service-icon">
              <i class="fa fa-id-card"></i>
            </div>
            <h3 class="service-title">全链溯源体系</h3>
            <p class="service-description">
              从种植养殖到销售终端的全流程数据记录，消费者扫码即可查看农产品"前世今生"，试点市场食品安全投诉下降82%。
            </p>
          </div>
          <div class="service-card">
            <div class="service-icon">
              <i class="fa fa-bar-chart"></i>
            </div>
            <h3 class="service-title">智能数据分析</h3>
            <p class="service-description">
              提供销售趋势、客群分析、爆品预测等数据服务，帮助摊主精准备货，试点摊主库存周转率提升40%，损耗率下降50%。
            </p>
          </div>
          <div class="service-card">
            <div class="service-icon">
              <i class="fa fa-credit-card"></i>
            </div>
            <h3 class="service-title">聚合支付系统</h3>
            <p class="service-description">
              支持微信、支付宝、银行卡等多种支付方式，实时结算到账，资金流水可追溯，帮助市场管理方提升收费效率60%以上。
            </p>
          </div>
          <div class="service-card">
            <div class="service-icon">
              <i class="fa fa-users"></i>
            </div>
            <h3 class="service-title">商户管理后台</h3>
            <p class="service-description">
              为市场管理方提供商户入驻、摊位管理、数据监控等功能，实现市场运营数字化，管理效率提升50%，人力成本降低30%。
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- 成功案例 - 恢复并强化 -->
    <section id="cases" class="cases-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">成功案例</h2>
          <div class="section-divider"></div>
          <p class="section-subtitle">看早期合作伙伴如何实现盈利增长</p>
        </div>
        <div class="cases-grid">
          <div class="case-card">
            <div class="case-image">
              <img src="../static/dingan-market.jpg" alt="定安塔岭中心农贸市场" class="case-image-img">
              <div class="case-overlay">
                <div class="case-overlay-content">
                  <h3 class="case-overlay-title">定安塔岭市场</h3>
                  <p class="case-overlay-description">海南省首个智慧农贸试点</p>
                </div>
              </div>
            </div>
            <div class="case-info">
              <div class="case-meta">
                <span class="case-category">改造案例</span>
                <span class="case-date">2024年8月</span>
              </div>
              <h3 class="case-title">传统市场数字化转型标杆</h3>
              <p class="case-description">
                改造后3个月内，市场日均客流量增长65%，摊主线上订单占比达42%，市场管理费收入增长80%，成为海南省智慧农贸示范项目。
              </p>
              <div class="case-data">
                <div class="data-item">
                  <div class="data-value">65%</div>
                  <div class="data-label">客流增长</div>
                </div>
                <div class="data-item">
                  <div class="data-value">42%</div>
                  <div class="data-label">线上订单占比</div>
                </div>
                <div class="data-item">
                  <div class="data-value">80%</div>
                  <div class="data-label">管理费增长</div>
                </div>
              </div>
            </div>
          </div>
          <div class="case-card">
            <div class="case-image">
              <img src="../static/farmer-income.jpg" alt="农户收益增长" class="case-image-img">
              <div class="case-overlay">
                <div class="case-overlay-content">
                  <h3 class="case-overlay-title">文昌农户联盟</h3>
                  <p class="case-overlay-description">直连市场的收益提升</p>
                </div>
              </div>
            </div>
            <div class="case-info">
              <div class="case-meta">
                <span class="case-category">农户案例</span>
                <span class="case-date">2024年10月</span>
              </div>
              <h3 class="case-title">农产品溢价25%，订单量增长3倍</h3>
              <p class="case-description">
                文昌100户农户通过平台直连市场，省去中间环节，农产品平均溢价25%，订单量月均增长3倍，户均年增收8-12万元。
              </p>
              <div class="case-data">
                <div class="data-item">
                  <div class="data-value">25%</div>
                  <div class="data-label">农产品溢价</div>
                </div>
                <div class="data-item">
                  <div class="data-value">300%</div>
                  <div class="data-label">订单增长</div>
                </div>
                <div class="data-item">
                  <div class="data-value">12万</div>
                  <div class="data-label">户均年增收</div>
                </div>
              </div>
            </div>
          </div>
          <div class="case-card">
            <div class="case-image">
              <img src="../static/consumer-trust.jpg" alt="消费者信任提升" class="case-image-img">
              <div class="case-overlay">
                <div class="case-overlay-content">
                  <h3 class="case-overlay-title">三亚试点市场</h3>
                  <p class="case-overlay-description">消费者满意度提升</p>
                </div>
              </div>
            </div>
            <div class="case-info">
              <div class="case-meta">
                <span class="case-category">消费者案例</span>
                <span class="case-date">2024年12月</span>
              </div>
              <h3 class="case-title">复购率提升2.8倍，投诉量下降90%</h3>
              <p class="case-description">
                三亚试点市场引入溯源系统后，消费者复购率从18%提升至50%，食品安全投诉量下降90%，市场口碑大幅提升。
              </p>
              <div class="case-data">
                <div class="data-item">
                  <div class="data-value">280%</div>
                  <div class="data-label">复购率提升</div>
                </div>
                <div class="data-item">
                  <div class="data-value">90%</div>
                  <div class="data-label">投诉下降</div>
                </div>
                <div class="data-item">
                  <div class="data-value">50%</div>
                  <div class="data-label">满意度评分</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 合作流程 - 新增招商板块 -->
    <section id="cooperate" class="cooperate-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">合作流程</h2>
          <div class="section-divider"></div>
          <p class="section-subtitle">简单四步，开启财富之旅</p>
        </div>
        <div class="cooperate-steps">
          <div class="step-item">
            <div class="step-number">1</div>
            <div class="step-content">
              <h3 class="step-title">初步咨询</h3>
              <p class="step-description">
                通过电话、在线表单或实地考察进行项目了解，获取详细招商资料
              </p>
            </div>
          </div>
          <div class="step-item">
            <div class="step-number">2</div>
            <div class="step-content">
              <h3 class="step-title">资格审核</h3>
              <p class="step-description">
                提交区域市场调研报告，公司评估合作可行性，确定合作意向
              </p>
            </div>
          </div>
          <div class="step-item">
            <div class="step-number">3</div>
            <div class="step-content">
              <h3 class="step-title">签约培训</h3>
              <p class="step-description">
                签订合作协议，缴纳合作费用，参加为期5天的系统培训和运营指导
              </p>
            </div>
          </div>
          <div class="step-item">
            <div class="step-number">4</div>
            <div class="step-content">
              <h3 class="step-title">市场启动</h3>
              <p class="step-description">
                公司提供市场推广方案，协助合作伙伴进行本地市场开拓和商户签约
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 加盟政策 - 新增招商板块 -->
    <section id="policy" class="policy-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">加盟政策</h2>
          <div class="section-divider"></div>
          <p class="section-subtitle">灵活的合作模式，满足不同投资者需求</p>
        </div>
        <div class="policy-grid">
          <div class="policy-card">
            <div class="policy-header">
              <h3 class="policy-title">市级代理</h3>
              <div class="policy-price">30-50万元</div>
            </div>
            <div class="policy-content">
              <ul class="policy-features">
                <li><i class="fa fa-check"></i> 独家代理一个地级市</li>
                <li><i class="fa fa-check"></i> 享受全市项目收益的40%</li>
                <li><i class="fa fa-check"></i> 发展县级代理商权限</li>
                <li><i class="fa fa-check"></i> 总部全程市场支持</li>
                <li><i class="fa fa-check"></i> 免费提供2套系统部署</li>
              </ul>
              <a href="#contact" class="policy-btn">了解详情</a>
            </div>
          </div>
          <div class="policy-card highlight">
            <div class="policy-header">
              <div class="policy-badge">推荐</div>
              <h3 class="policy-title">县级代理</h3>
              <div class="policy-price">10-20万元</div>
            </div>
            <div class="policy-content">
              <ul class="policy-features">
                <li><i class="fa fa-check"></i> 独家代理一个县级单位</li>
                <li><i class="fa fa-check"></i> 享受全县项目收益的60%</li>
                <li><i class="fa fa-check"></i> 优先续约权</li>
                <li><i class="fa fa-check"></i> 总部运营指导</li>
                <li><i class="fa fa-check"></i> 免费提供1套系统部署</li>
              </ul>
              <a href="#contact" class="policy-btn">了解详情</a>
            </div>
          </div>
          <div class="policy-card">
            <div class="policy-header">
              <h3 class="policy-title">单市场合作</h3>
              <div class="policy-price">3-5万元</div>
            </div>
            <div class="policy-content">
              <ul class="policy-features">
                <li><i class="fa fa-check"></i> 单个农贸市场合作</li>
                <li><i class="fa fa-check"></i> 享受市场收益的30%</li>
                <li><i class="fa fa-check"></i> 系统永久使用权</li>
                <li><i class="fa fa-check"></i> 1年技术维护服务</li>
                <li><i class="fa fa-check"></i> 市场运营培训</li>
              </ul>
              <a href="#contact" class="policy-btn">了解详情</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 联系我们 - 强化招商咨询 -->
    <section id="contact" class="contact-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">立即加盟</h2>
          <div class="section-divider"></div>
          <p class="section-subtitle">填写以下表单，获取详细招商资料</p>
        </div>
        <div class="contact-content">
          <div class="contact-form">
            <div class="form-container">
              <h3 class="form-title">招商咨询</h3>
              <form @submit.prevent="submitForm">
                <div class="form-group form-group-half">
                  <label for="name" class="form-label">姓名</label>
                  <input type="text" id="name" v-model="form.name" class="form-input" placeholder="您的姓名" required>
                </div>
                <div class="form-group form-group-half">
                  <label for="phone" class="form-label">电话</label>
                  <input type="tel" id="phone" v-model="form.phone" class="form-input" placeholder="您的联系电话" required>
                </div>
                <div class="form-group">
                  <label for="city" class="form-label">意向区域</label>
                  <input type="text" id="city" v-model="form.city" class="form-input" placeholder="您感兴趣的代理区域" required>
                </div>
                <div class="form-group">
                  <label for="cooperation" class="form-label">合作意向</label>
                  <select id="cooperation" v-model="form.cooperation" class="form-input" required>
                    <option value="">请选择合作类型</option>
                    <option value="市级代理">市级代理</option>
                    <option value="县级代理">县级代理</option>
                    <option value="单市场合作">单市场合作</option>
                    <option value="其他">其他合作</option>
                  </select>
                </div>
                <div class="form-group">
                  <label for="message" class="form-label">留言</label>
                  <textarea id="message" v-model="form.message" rows="4" class="form-input"
                    placeholder="请简要描述您的情况或疑问"></textarea>
                </div>
                <div class="form-group form-checkbox">
                  <input type="checkbox" id="agreement" v-model="form.agreement" required>
                  <label for="agreement">我已阅读并同意<a href="#" target="_blank">《合作协议》</a>和<a href="#"
                      target="_blank">《隐私政策》</a></label>
                </div>
                <button type="submit" class="form-button">
                  <i class="fa fa-paper-plane"></i> 提交申请
                </button>
              </form>
            </div>
          </div>
          <div class="contact-info">
            <div class="info-container">
              <h3 class="info-title">招商专线</h3>
              <div class="info-items">
                <div class="info-item">
                  <div class="info-icon">
                    <i class="fa fa-phone"></i>
                  </div>
                  <div class="info-content">
                    <h4 class="info-subtitle">咨询电话</h4>
                    <p class="info-text">400-888-9999</p>
                    <p class="info-text">0898-66668888</p>
                  </div>
                </div>
                <div class="info-item">
                  <div class="info-icon">
                    <i class="fa fa-envelope"></i>
                  </div>
                  <div class="info-content">
                    <h4 class="info-subtitle">电子邮箱</h4>
                    <p class="info-text">investment@hainan-integral.com</p>
                  </div>
                </div>
                <div class="info-item">
                  <div class="info-icon">
                    <i class="fa fa-weixin"></i>
                  </div>
                  <div class="info-content">
                    <h4 class="info-subtitle">微信咨询</h4>
                    <p class="info-text">扫描二维码添加招商专员</p>
                    <div class="wechat-qrcode">
                      <img src="../static/wechat-qrcode.jpg" alt="微信二维码" class="qrcode-img">
                    </div>
                  </div>
                </div>
                <div class="info-item">
                  <div class="info-icon">
                    <i class="fa fa-map-marker"></i>
                  </div>
                  <div class="info-content">
                    <h4 class="info-subtitle">公司地址</h4>
                    <p class="info-text">海南省海口市龙华区国贸大道1号</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <footer class="footer">
      <div class="container">
        <div class="footer-grid">
          <div class="footer-col">
            <h3 class="footer-title">海南积分宝电子商务有限公司</h3>
            <p class="footer-text">
              农贸市场数字化转型平台，连接农户与市场，助力乡村振兴，保障食品安全。
            </p>
            <div class="footer-social">
              <a href="#" class="footer-social-link">
                <i class="fa fa-weixin"></i>
              </a>
              <a href="#" class="footer-social-link">
                <i class="fa fa-weibo"></i>
              </a>
              <a href="#" class="footer-social-link">
                <i class="fa fa-linkedin"></i>
              </a>
              <a href="#" class="footer-social-link">
                <i class="fa fa-github"></i>
              </a>
            </div>
          </div>
          <div class="footer-col">
            <h3 class="footer-title">快速链接</h3>
            <ul class="footer-links">
              <li><a href="#" class="footer-link">首页</a></li>
              <li><a href="#about" class="footer-link">项目背景</a></li>
              <li><a href="#advantages" class="footer-link">招商优势</a></li>
              <li><a href="#services" class="footer-link">核心功能</a></li>
              <li><a href="#cases" class="footer-link">成功案例</a></li>
              <li><a href="#cooperate" class="footer-link">合作流程</a></li>
              <li><a href="#policy" class="footer-link">加盟政策</a></li>
              <li><a href="#contact" class="footer-link">联系我们</a></li>
            </ul>
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
                <span>400-888-9999</span>
              </li>
              <li class="footer-contact">
                <i class="fa fa-envelope"></i>
                <span>investment@hainan-integral.com</span>
              </li>
              <li class="footer-contact">
                <i class="fa fa-clock-o"></i>
                <span>周一至周五: 8:00 - 18:00</span>
              </li>
            </ul>
          </div>
        </div>
        <div class="footer-bottom">
          <p class="footer-copyright">© 2025 海南积分宝电子商务有限公司. 保留所有权利。</p>
          <div class="footer-links">
            <a href="#" class="footer-link">隐私政策</a>
            <a href="#" class="footer-link">服务条款</a>
            <a href="#" class="footer-link">网站地图</a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isMobileMenuOpen: false,
      form: {
        name: '',
        phone: '',
        city: '',
        cooperation: '',
        message: '',
        agreement: false
      },
      marketChart: null
    }
  },
  mounted() {
    // 初始化导航栏滚动效果
    window.addEventListener('scroll', this.handleScroll);

    // 初始化市场增长图表
    // this.initMarketChart();

    // 初始化平滑滚动
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: 'smooth'
          });
        }
      });
    });
  },
  methods: {
    toggleMobileMenu() {
      this.isMobileMenuOpen = !this.isMobileMenuOpen;
    },
    handleScroll() {
      const header = document.querySelector('header');
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    },
    initMarketChart() {
      const ctx = document.getElementById('marketGrowthChart');
      if (ctx) {
        this.marketChart = new Chart(ctx, {
          type: 'bar',
          data: {
            labels: ['2020', '2021', '2022', '2023', '2024', '2025E'],
            datasets: [{
              label: '智慧农贸市场规模(亿元)',
              data: [50, 120, 230, 450, 800, 1500],
              backgroundColor: [
                'rgba(34, 116, 223, 0.7)',
                'rgba(34, 116, 223, 0.7)',
                'rgba(34, 116, 223, 0.7)',
                'rgba(34, 116, 223, 0.7)',
                'rgba(34, 116, 223, 0.7)',
                'rgba(34, 116, 223, 0.9)'
              ],
              borderColor: [
                'rgba(34, 116, 223, 1)',
                'rgba(34, 116, 223, 1)',
                'rgba(34, 116, 223, 1)',
                'rgba(34, 116, 223, 1)',
                'rgba(34, 116, 223, 1)',
                'rgba(34, 116, 223, 1)'
              ],
              borderWidth: 1
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
              y: {
                beginAtZero: true
              }
            },
            plugins: {
              legend: {
                display: false
              }
            }
          }
        });
      }
    },
    submitForm() {
      // 这里是表单提交逻辑
      console.log('表单提交:', this.form);

      // 模拟提交成功
      alert('提交成功！我们的招商专员将在24小时内与您联系。');

      // 重置表单
      this.form = {
        name: '',
        phone: '',
        city: '',
        cooperation: '',
        message: '',
        agreement: false
      };

      // 关闭移动菜单（如果打开）
      this.isMobileMenuOpen = false;
    }
  },
  beforeDestroy() {
    // 清理事件监听器
    window.removeEventListener('scroll', this.handleScroll);

    // 销毁图表
    if (this.marketChart) {
      this.marketChart.destroy();
    }
  }
}
</script>

<style>
/* ===== 全局样式与重置 ===== */
:root {
  --primary: #2274df;
  --secondary: #f5a623;
  --dark: #333;
  --light: #f8f9fa;
  --gray: #6c757d;
  --transition: all 0.3s ease;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

a {
  text-decoration: none;
}

html {
  scroll-behavior: smooth;
  font-size: 16px;
}

body {
  font-family: 'PingFang SC', 'Microsoft YaHei', sans-serif;
  color: var(--dark);
  line-height: 1.6;
  overflow-x: hidden;
}

img {
  max-width: 100%;
  height: auto;
}

li {
  list-style: none;
}

.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
}

header {
  position: fixed;
  width: 100%;
  background: rgba(255, 255, 255, 0.95);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  transition: var(--transition);
}

header.scrolled {
  background: #fff;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
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

.logo span {
  font-size: 1rem;
  color: var(--secondary);
  margin-left: 10px;
  font-weight: 500;
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

.cta-btn {
  background-color: var(--secondary);
  color: white !important;
  padding: 8px 20px;
  border-radius: 5px;
  transition: background-color 0.3s;
}

.cta-btn:hover {
  background-color: #e39412;
}

.cta-btn::after {
  display: none;
}

.mobile-menu-btn {
  display: none;
  font-size: 1.5rem;
  cursor: pointer;
}

.mobile-menu {
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background-color: white;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  z-index: 1000;
}

.mobile-nav-link {
  display: block;
  padding: 15px 20px;
  color: var(--dark);
  border-bottom: 1px solid #eee;
}

.mobile-nav-link:last-child {
  border-bottom: none;
}

.mobile-nav-link:hover {
  background-color: #f5f5f5;
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
}

.hero-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.hero-overlay {
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.3));
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

.hero-title span {
  color: var(--secondary);
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
  border-radius: 5px;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.1rem;
  transition: var(--transition);
  text-align: center;
  border: 2px solid transparent;
}

.btn-primary {
  background: var(--primary);
  color: white;
}

.btn-primary:hover {
  background: #1a64c2;
  transform: translateY(-2px);
}

.btn-secondary {
  background: rgba(255, 255, 255, 0.2);
  color: white;
  border: 2px solid white;
}

.btn-secondary:hover {
  background: rgba(255, 255, 255, 0.3);
  transform: translateY(-2px);
}

.招商热线 {
  margin-top: 30px;
  font-size: 1.2rem;
  font-weight: 500;
  display: flex;
  align-items: center;
}

.招商热线 i {
  margin-right: 10px;
  color: var(--secondary);
}

.scroll-indicator {
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 2rem;
  color: white;
  animation: bounce 2s infinite;
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

.about-section {
  background: white;
}

.about-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
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
  display: flex;
  align-items: center;
}

.about-title i {
  margin-right: 10px;
  color: var(--secondary);
}

.about-paragraph {
  margin-bottom: 20px;
  color: #555;
  font-size: 1.1rem;
  line-height: 1.8;
}

.market-data {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.data-chart {
  height: 300px;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}

.stat-card {
  background: white;
  border-radius: 12px;
  box-shadow: 0 7px 20px rgba(0, 0, 0, 0.08);
  padding: 30px;
  text-align: center;
  transition: var(--transition);
  border: 1px solid rgba(0, 0, 0, 0.05);
}

.stat-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
}

.stat-number {
  font-size: 2.8rem;
  font-weight: 700;
  color: var(--primary);
  margin-bottom: 10px;
  font-family: 'Arial', sans-serif;
}

.stat-text {
  font-size: 1.1rem;
  color: var(--gray);
  font-weight: 500;
}

.advantages-section {
  background: #f9f9f9;
}

.advantages-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
}

.advantage-card {
  background: white;
  border-radius: 12px;
  box-shadow: 0 7px 20px rgba(0, 0, 0, 0.08);
  padding: 40px 30px;
  text-align: center;
  transition: var(--transition);
  border: 1px solid rgba(0, 0, 0, 0.05);
  position: relative;
}

.advantage-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
}

.advantage-icon {
  width: 80px;
  height: 80px;
  background: var(--primary);
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
  margin-bottom: 15px;
  color: var(--primary);
  font-weight: 600;
}

.advantage-description {
  color: #555;
  line-height: 1.7;
}

.services-section {
  background: white;
}

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
  border: 1px solid rgba(0, 0, 0, 0.05);
}

.service-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
}

.service-icon {
  height: 120px;
  background: var(--primary);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  color: white;
}

.service-content {
  padding: 25px;
}

.service-title {
  font-size: 1.5rem;
  margin-bottom: 15px;
  color: var(--primary);
  font-weight: 600;
}

.service-description {
  color: #555;
  margin-bottom: 20px;
  line-height: 1.7;
}

.cases-section {
  background: #f9f9f9;
}

.cases-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
}

.case-card {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 7px 20px rgba(0, 0, 0, 0.08);
  transition: var(--transition);
  border: 1px solid rgba(0, 0, 0, 0.05);
}

.case-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
}

.case-image {
  position: relative;
  height: 200px;
  overflow: hidden;
}

.case-image-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.case-card:hover .case-image-img {
  transform: scale(1.1);
}

.case-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent);
  opacity: 0;
  transition: opacity 0.3
}
</style>