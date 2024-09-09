<template>
    <a-layout class="main-wrap">
        <a-layout-header class="header">
            <div class="logo" />
            <a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="horizontal" :style="{ lineHeight: '64px' }">
                <a-menu-item v-for="(menu) in menuList" :key="menu.key">{{ menu.title }}</a-menu-item>
            </a-menu>
        </a-layout-header>
        <a-layout style="padding: 12px">
            <a-layout-content :style="{ background: '#fff', padding: '16px', margin: 0, minHeight: '280px' }">
                <RouterView />
            </a-layout-content>
        </a-layout>
    </a-layout>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import { RouterView } from 'vue-router'
const selectedKeys = ref<string[]>(['1']);

interface MenuItem {
    title: string,
    key: string
}

const menuList = ref<MenuItem[]>([
    {
        title: '用户管理',
        key: '1'
    },
    // {
    //     title: '用户',
    //     key: '2'
    // },
])
</script>
<style scoped>
.main-wrap {
    width: 100%;
    height: 100%;
}

#components-layout-demo-top-side-2 .logo {
    float: left;
    width: 120px;
    height: 31px;
    margin: 16px 24px 16px 0;
    background: rgba(255, 255, 255, 0.3);
}

.ant-row-rtl #components-layout-demo-top-side-2 .logo {
    float: right;
    margin: 16px 0 16px 24px;
}

.site-layout-background {
    background: #fff;
}
</style>
  