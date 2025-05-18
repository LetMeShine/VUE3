<template>
    <div>
        <!-- 虚拟列表 -->
        <!-- 可视区域高度 -->
        <!-- 真实列表高度 -->
        <div class="virtual-list">
            <div class="container" ref="container" :style="{ height: `${container.height}px` }" @scroll="handleRoll">
                <ul :style="{
                    'height': `${li.height * list.length}px`,
                    'padding-top': `${li.height * pos}px`
                }">
                    <li :style="{ height: `${li.height}px` }" v-for="item of showList" :key="item">{{ item }}</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'virtual-list',
    data() {
        return {
            list: [],// 真实的数据，数据量很大
            li: {
                // 列表项信息
                height: 50
            },
            container: {
                // 容器信息
                height: 500
            },
            pos: 1, // 第一排元素的序号
            MAX_NUM: 1, // 容器中最多显示几个列表项
            timer: null,
            startRoll: true,
        },
    },
    computed: {
        // 虚拟列表的数据
        showList() {
            // 第一排元素下标
            // 最多显示多少个
            return this.list.slice(this.pos, this.pos + this.MAX_NUM)
        }
    },
    mounted() {
        for (let i = 0; i < 10000; i++) {
            this.list.push(i)
        }
        this.handleRoll()
    },
    methods: {
        handleRoll() {
            if (this.startRoll) {
                // 容器中的列表项目
                const {
                    container,
                    li
                } = this
                // 计算可视区域最多能显示多少个li
                this.MAX_NUM = Math.ceil(container.height / li.height)
                // scroll元素已经滚动的高度
                let scrollTop = this.$refs.container.scrollTop
                // 计算当前处于第一位元素的下标
                this.pos = Math.round(scrollTop / li.height)
                // 做一个节流操作
                this.startRoll = false
                this.timer = setTimeout(() => {
                    this.startRoll = true
                    clearTimeout(this.timer)
                }, 50)
            }
        }
    }
}
</script>