<template>
    <div class="user-wrap">
        <div class="condition">
            <a-button class="operate" type="primary" @click="showModal">新增 </a-button>
            <a-input-search style="width: 300px;" v-model:value="keyword" placeholder="请输入用户名" :loading="loading"
                enter-button />
        </div>
        <div class="list-wrap">
            <a-table :columns="columns" :data-source="data">
                <template #bodyCell="{ column, record }">
                    <template v-if="column.key === 'tags'">
                        <span>
                            <a-tag v-for="tag in record.tags" :key="tag"
                                :color="tag === 'loser' ? 'volcano' : tag.length > 5 ? 'geekblue' : 'green'">
                                {{ tag.toUpperCase() }}
                            </a-tag>
                        </span>
                    </template>
                    <template v-else-if="column.key === 'action'">
                        <span>
                            <a @click="editUser">编辑</a>
                            <a-divider type="vertical" />
                            <a>重置密码</a>
                            <a-divider type="vertical" />
                            <a>删除</a>
                        </span>
                    </template>
                </template>
            </a-table>
        </div>

        <a-modal v-model:open="open" :title="title">
            <a-form :model="formState" name="basic" :label-col="{ span: 4 }" :wrapper-col="{ span: 20 }" autocomplete="off"
                @finish="onFinish" @finishFailed="onFinishFailed">
                <a-form-item label="用户名" name="username" :rules="[{ required: true, message: '请输入用户名' }]">
                    <a-input :disabled="!isAdd" placeholder="请输入用户名" v-model:value="formState.username" />
                </a-form-item>

                <a-form-item v-if="isAdd" label="密码" name="password" :rules="[{ required: true, message: '请输入密码' }]">
                    <a-input-password v-model:value="formState.password" placeholder="请输入密码" />
                </a-form-item>

                <a-form-item label="姓名" name="name">
                    <a-input v-model:value="formState.name" placeholder="请输入姓名" />
                </a-form-item>
                <a-form-item label="生日" name="birth">
                    <a-date-picker v-model:value="formState.birth" placeholder="请输入生日" format="YYYY-MM-DD"
                        value-format="YYYY-MM-DD" />
                </a-form-item>
                <a-form-item label="联系电话" name="tel">
                    <a-input v-model:value="formState.tel" placeholder="请输入联系电话" />
                </a-form-item>
                <a-form-item label="地址" name="address">
                    <a-textarea v-model:value="formState.address" placeholder="请输入地址" />
                </a-form-item>
            </a-form>
            <template #footer>
                <a-button @click="hideModal">取消</a-button>
                <a-button type="primary" @click="hideModal">确定</a-button>
            </template>
        </a-modal>
    </div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue';
import { columns } from './ts/columns'
import type { TableProps } from 'ant-design-vue/lib/table/Table'
const keyword = ref<string>('');
const loading = ref<Boolean>(false);
const open = ref<boolean>(false);
const isAdd = ref<boolean>(false);
const title = computed(() => {
    return isAdd.value ? '新增' : '编辑'
})

const data: TableProps["dataSource"] = [
    {
        key: 'username',
        name: 'zs',
        age: 32,
        username: 'za',
        address: 'New York No. 1 Lake Park',
        tel: 123,
    },
    {
        key: '2',
        name: 'Jim Green',
        age: 42,
        username: 'za',
        address: 'London No. 1 Lake Park',
        tel: 123,
    },
    {
        key: '3',
        name: 'Joe Black',
        age: 32,
        username: 'za',
        address: 'Sidney No. 1 Lake Park',
        tel: 123,
    },
];

const showModal = () => {
    isAdd.value = true;
    open.value = true;
};
const hideModal = () => {
    open.value = false;
};

const editUser = () => {
    isAdd.value = false;
    open.value = true;
}

import { reactive } from 'vue';

interface FormState {
    username: string | undefined;
    password: string | undefined;
    name?: string | undefined;
    birth?: string | undefined;
    address?: string | undefined;
    tel?: string | undefined;
}

const formState = reactive({} as FormState);
const onFinish = (values: any) => {
    console.log('Success:', values);
};

const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
};

</script>
<style scoped>
.user-wrap {
    width: 100%;
    height: 100%;
}

.condition {
    margin-bottom: 16px;
    display: flex;
    justify-content: space-between;
}
</style>
  