<template>
    <div class="about">about</div>
</template>
<script lang="ts">
// eslint-disable-next-line
/* eslint-disable */
import {
    reactive,
    ref,
    toRefs,
    computed,
    watch,
    onMounted,
    onUpdated,
    onUnmounted,
} from "vue"; // 按需加载
// import func from "vue-editor-bridge";
export default {
    setup() {
        // 创建响应式数据 reactive函数接收一个普通的对象，返回响应式的对象
        // setup函数中将响应式数据对象return出去供template模板使用
        // setup无法访问this
        const state: any = reactive({
            name: 2,
            type: "偶数",
            x: ref(66), // 最后在template使用直接使用 x 即可
            name1: computed(() => state.name * 10), // 计算属性
        });
        const stop = watch(
            // 清除监听 stop
            () => state.name,
            (newVal, oldVal) => {
                newVal % 2 === 0
                    ? (state.type = "偶数")
                    : (state.type = "奇数");
            }
        ); // 监听name属性
        let c = ref(10); // 初始化的值为10 ref()函数 返回对象只包含value属性
        let a = 100; // 非响应式
        const change = () => {
            a += 1;
            c.value += 1;
            state.name += 1;
            state.x; // 直接使用x，无需加value
            console.log(state.x);
            if (state.name === 10) stop();
        };
        // 自动播放
        const autoPlay = function () {
            state.name++;
            if (state.name === 10) {
                state.name = 0;
            }
        };
        let timer: any;
        const play = () => {
            timer = setInterval(autoPlay, 1000);
        };
        onMounted(() => {
            // 挂载完成
            play();
        });
        onUpdated(() => {
            state.name % 2 === 0
                ? (state.type = "偶数")
                : (state.type = "奇数");
        });
        onUnmounted(() => {
            clearInterval(timer);
        });
        return {
            // ...state, // 这里解构...会将响应式对象 state 转成 普通对象
            ...toRefs(state), // 这个就是响应式的了
            c,
            a,
            change, // 方法记得return出去，不然template无法使用
        };
    },
    // ref适用于基本数据类型，reactive复杂数据类型
};
</script>

