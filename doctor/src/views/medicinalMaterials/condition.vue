<template>
    <div class="condition">
        <div class="left">
            <a-button class="space" type="primary">新增</a-button>
            <a-button>批量删除</a-button>
        </div>
        <div class="right">
            <a-select class="space select-condition" v-model:value="value" mode="multiple" placeholder="请选择药材四性"
                :options="[...Array(25)].map((_, i) => ({ value: (i + 10).toString(36) + (i + 1) }))"
                @change="handleChange"></a-select>
            <a-select class="space select-condition" v-model:value="value" mode="multiple" placeholder="请选择药材五位"
                :options="[...Array(25)].map((_, i) => ({ value: (i + 10).toString(36) + (i + 1) }))"
                @change="handleChange"></a-select>
            <a-input-search class="input-condition" v-model:value="keyword" placeholder="请输入药材名字" enter-button
                @search="onSearch" />
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
const handleChange = (value: string[]) => {
    console.log(`selected ${value}`);
};
const value = ref(['a1', 'b2']);
const keyword = ref('');

const onSearch = (searchValue: string) => {
    console.log('use value', searchValue);
    console.log('or use this.value', keyword.value);
};
</script>


<style scoped lang="less">
.condition {
    display: flex;
    justify-content: space-between;
    padding: 12px;
    border-bottom: 1px solid #f0f0f0;

    .space {
        margin-right: 12px;
    }

    .select-condition {
        width: 240px;
    }

    .input-condition {
        width: 300px;
    }
}
</style>