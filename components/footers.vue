<template>
    <footer class="footer">
        <div class="container">
            <div class="footer-grid">
                <div class="footer-col">
                    <h3 class="footer-title">海南积分宝电子商务有限公司</h3>
                    <p class="footer-text">农贸市场数字化转型平台，连接农户与市场，助力乡村振兴，保障食品安全。</p>

                </div>


                <div class="footer-col">
                    <button style="color: black; padding: 20px; font-size: 20px; "><a href="/cooperate"
                            target="_blank">成为代理</a></button>
                </div>

                <div class="footer-col">
                    <h3 class="footer-title">联系方式</h3>
                    <ul class="footer-contacts">
                        <li class="footer-contact">
                            <span>海南省海口市秀英区海盛路35号</span>
                        </li>
                        <li class="footer-contact">
                            <span>+86 68552337</span>
                        </li>
                        <li class="footer-contact">
                            <span>wangrantian@qq.com</span>
                        </li>
                        <li class="footer-contact">
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
</template>



<style lang="scss" scoped>
.footer-grid {
    display: flex;
    align-items: center;
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

// 响应式调整
@media (max-width: 768px) {

    .footer-grid {
        gap: 30px;
    }
}

.footer {
    padding: 10px;
    margin-left: -10px;
    margin-right: -10px;
    margin-bottom: -10px;
    background-color: #1e293b;
    color: white;

    .container {
        max-width: 1700px;
        margin: 0 auto;
    }

    .footer-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 40px;
        // margin-bottom: 40px;
    }

    .footer-col {
        button {
            background-color: white;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            transition: transform 0.3s;

            &:hover {
                transform: scale(1.05);
            }

            a {
                text-decoration: none;
                color: #333;
                font-weight: 500;
            }
        }
    }

    .footer-title {
        font-size: 18px;
        position: relative;
    }

    .footer-text {
        color: #ccc;
        line-height: 1.6;
    }

    .footer-contacts {
        list-style: none;
        padding: 0;

        .footer-contact {
            display: flex;
            align-items: flex-start;
            margin-bottom: 15px;

            i {
                margin-right: 10px;
                color: #4CAF50;
                margin-top: 3px;
            }

            span {
                color: #ccc;
            }
        }
    }

    .footer-bottom {
        padding-top: 20px;
        border-top: 1px solid #444;
        text-align: center;

        .footer-copyright {
            color: #aaa;
            margin: 5px 0;
            font-size: 14px;

            a {
                text-decoration: none;
            }
        }
    }
}
</style>