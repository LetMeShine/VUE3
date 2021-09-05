<template>
    <div class="nav-bottom">
        <router-link
            active-class="active"
            :to="menu.path"
            v-for="(menu, i) in menuLists"
            :key="i"
        >
            <i class="iconfont" :class="menu.icon"></i>
            <label>{{ menu.title }}</label>
        </router-link>
    </div>
</template>
<script lang="ts">
// eslint-disable-next-line
/* eslint-disable */
import bottomData from "@/utils/bottomData.js";
import { reactive, toRefs } from "vue";
export default {
    setup() {
        const state: any = reactive({
            menuLists: bottomData,
        });
        return {
            ...toRefs(state),
        };
    },
};
</script>

