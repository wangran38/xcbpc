<template>
    <div class="pagination-container">
        <div class="pagination">
            <button class="pagination-btn prev-btn" @click="handlePrev" :disabled="currentPage === 1"
                :aria-disabled="currentPage === 1">
                <i class="icon" aria-hidden="true">←</i>
                <span class="text">上一页</span>
            </button>

            <div class="page-numbers">
                <button v-for="page in visiblePages" :key="page" class="page-btn"
                    :id="page == currentPage ? 'active' : ''" @click="handlePageChange(page)">
                    {{ page }}
                </button>


            </div>
            <button class="pagination-btn next-btn" @click="handleNext" :disabled="currentPage === totalPages"
                :aria-disabled="currentPage === totalPages">
                <span class="text">下一页</span>
                <i class="icon" aria-hidden="true">→</i>
            </button>

            <div class="page-jumper" v-if="showJumper">
                <span class="text">前往</span>
                <input type="number" v-model.number="jumpPage" class="page-input" :min="1" :max="totalPages"
                    @keydown.enter="handleJump" @blur="handleJump" aria-label="输入页码">
                <span class="text">页</span>
                <button class="jump-btn" @click="handleJump">确定</button>
            </div>
        </div>

        <div class="pagination-info" v-if="showInfo">
            <span>显示 {{ getStartItem() }}-{{ getEndItem() }} 项，共 {{ totalItems }} 项</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Pagination',
    props: {
        // 当前页码
        currentPage: {
            type: Number,
            required: true,
            default: 1
        },
        // 每页显示条数
        pageSize: {
            type: Number,
            default: 9
        },
        // 总条数
        totalItems: {
            type: Number,
            required: true,
            default: 0
        },
        // 显示的页码数量
        visiblePageCount: {
            type: Number,
            default: 5
        },
        // 是否显示页码跳转
        showJumper: {
            type: Boolean,
            default: true
        },
        // 是否显示分页信息
        showInfo: {
            type: Boolean,
            default: true
        }
    },
    data() {
        return {
            // 用于页码跳转的临时变量
            jumpPage: this.currentPage
        }
    },
    computed: {
        // 总页数
        totalPages() {
            if (this.totalItems <= 0) return 1
            return Math.ceil(this.totalItems / this.pageSize)
        },
        // 可见的页码列表
        visiblePages() {
            const pages = []
            const total = this.totalPages
            const current = this.currentPage
            const count = this.visiblePageCount

            if (total <= count) {
                for (let i = 1; i <= total; i++) {
                    pages.push(i)
                }
                return pages
            }

            // 计算中间页码范围
            const half = Math.floor(count / 2)
            let start = current - half
            let end = current + half

            // 处理边界情况
            if (start < 1) {
                start = 1
                end = count
            }
            if (end > total) {
                end = total
                start = total - count + 1
            }

            // 添加页码
            for (let i = start; i <= end; i++) {
                pages.push(i)
            }

            return pages
        },

    },
    watch: {
        // 监听当前页码变化，同步到跳转输入框
        currentPage(newVal) {
            this.jumpPage = newVal
        }
    },
    methods: {
        // 上一页
        handlePrev() {
            if (this.currentPage > 1) {
                this.$emit('page-change', this.currentPage - 1)
            }
        },
        // 下一页
        handleNext() {
            if (this.currentPage < this.totalPages) {
                this.$emit('page-change', this.currentPage + 1)
            }
        },
        // 页码变更
        handlePageChange(page) {
            if (page !== this.currentPage) {
                this.$emit('page-change', page)
            }
        },
        // 跳转页码
        handleJump() {
            let page = this.jumpPage
            // 验证页码有效性
            if (isNaN(page) || page < 1) {
                page = 1
            } else if (page > this.totalPages) {
                page = this.totalPages
            }
            // 更新跳转输入框的值
            this.jumpPage = page
            // 触发页码变更
            if (page !== this.currentPage) {
                this.$emit('page-change', page)
            }
        },
        // 获取当前页起始项
        getStartItem() {
            if (this.totalItems === 0) return 0
            return (this.currentPage - 1) * this.pageSize + 1
        },
        // 获取当前页结束项
        getEndItem() {
            if (this.totalItems === 0) return 0
            const end = this.currentPage * this.pageSize
            return end > this.totalItems ? this.totalItems : end
        }
    }
}
</script>

<style lang="scss" scoped>
.pagination-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding: 16px 0;
    box-sizing: border-box;
}

.pagination {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    flex-wrap: wrap;
}

.pagination-btn {
    display: flex;
    align-items: center;
    gap: 4px;
    padding: 6px 12px;
    background-color: #ffffff;
    border: 1px solid #e5e7eb;
    border-radius: 4px;
    color: #374151;
    font-size: 14px;
    cursor: pointer;
    transition: all 0.2s ease;



    &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
        background-color: #ffffff;
        border-color: #e5e7eb;
        color: #9ca3af;
    }

    .icon {
        font-size: 16px;
    }
}

.page-numbers {
    display: flex;
    align-items: center;
    gap: 4px;
}

.page-btn {
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #ffffff;
    border: 1px solid #e5e7eb;
    border-radius: 4px;
    color: #374151;
    font-size: 14px;
    cursor: pointer;
    transition: all 0.2s ease;

    &:hover {
        background-color: #f9fafb;
        border-color: #d1d5db;
    }

    &#active {
        background-color: #4CAF50;
        border-color: #4CAF50;
        color: #ffffff;
        font-weight: 500;


    }
}

.ellipsis {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    color: #9ca3af;
    font-size: 14px;
}

.page-jumper {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-left: 12px;
    color: #374151;
    font-size: 14px;

    .page-input {
        width: 50px;
        height: 32px;
        padding: 0 8px;
        border: 1px solid #e5e7eb;
        border-radius: 4px;
        text-align: center;
        font-size: 14px;
        transition: border-color 0.2s ease;

        &:focus {
            outline: none;
            border-color: #4CAF50;
            box-shadow: 0 0 0 2px rgba(79, 70, 229, 0.1);
        }
    }

    .jump-btn {
        padding: 6px 12px;
        background-color: #4CAF50;
        border: 1px solid #4CAF50;
        border-radius: 4px;
        color: #ffffff;
        font-size: 14px;
        cursor: pointer;
        transition: background-color 0.2s ease;


    }
}

.pagination-info {
    display: flex;
    justify-content: center;
    color: #6b7280;
    font-size: 14px;
    line-height: 1.5;
}

// 响应式调整
@media (max-width: 768px) {
    .pagination {
        gap: 4px;
    }

    .pagination-btn {
        padding: 4px 8px;
        font-size: 12px;

        .text {
            display: none;
        }
    }

    .page-btn {
        width: 28px;
        height: 28px;
        font-size: 12px;
    }

    .page-jumper {
        margin-left: 8px;
        font-size: 12px;

        .page-input {
            width: 40px;
            height: 28px;
            font-size: 12px;
        }

        .jump-btn {
            padding: 4px 8px;
            font-size: 12px;
        }
    }

    .pagination-info {
        font-size: 12px;
    }
}

@media (max-width: 480px) {
    .page-jumper {
        margin-left: 0;
        margin-top: 8px;
        width: 100%;
        justify-content: center;
    }
}
</style>