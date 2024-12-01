<template>
    <a-config-provider :locale="locale">
        <a-layout class="main-wrap">
            <a-layout-header class="header">
                <div class="logo" />
                <a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="horizontal" :style="{ lineHeight: '64px' }">
                    <router-link :to="path">
                        <a-menu-item @click="clickMenu(menu)" v-for="(menu) in menuList" :key="menu.key">
                            {{ menu.title
                            }}
                        </a-menu-item>
                    </router-link>
                </a-menu>
            </a-layout-header>
            <a-layout style="padding: 12px">
                <a-layout-content :style="{ background: '#fff', padding: '16px', margin: 0, minHeight: '280px' }">
                    <RouterView />
                </a-layout-content>
            </a-layout>
        </a-layout>
    </a-config-provider>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import { RouterView } from 'vue-router'
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
import locale from 'ant-design-vue/locale/zh_CN';
dayjs.locale('zh-cn');
const selectedKeys = ref<string[]>(['1']);
const path = ref<string>('/');

interface MenuItem {
    title: string,
    key: string,
    path: string
}

const menuList = ref<MenuItem[]>([
    {
        title: '用户管理',
        key: '1',
        path: '/userCenter'
    },
    {
        title: '药材管理',
        key: '2',
        path: '/medicinalMaterials',
    },
])

const clickMenu = (menu: MenuItem) => {
    path.value = menu.path
}

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
  