<template>
    <div class="user-wrap">
        <div class="condition">
            <a-button class="operate" type="primary">新增 </a-button>
            <a-input-search style="width: 300px;" v-model:value="value" placeholder="请输入用户名" :loading="loading"
                enter-button />
        </div>
        <div class="list-wrap">
            <a-table :columns="columns" :data-source="data">
                <template #bodyCell="{ column, record }">
                    <template v-if="column.key === 'name'">
                        <a>
                            {{ record.name }}
                        </a>
                    </template>
                    <template v-else-if="column.key === 'tags'">
                        <span>
                            <a-tag v-for="tag in record.tags" :key="tag"
                                :color="tag === 'loser' ? 'volcano' : tag.length > 5 ? 'geekblue' : 'green'">
                                {{ tag.toUpperCase() }}
                            </a-tag>
                        </span>
                    </template>
                    <template v-else-if="column.key === 'action'">
                        <span>
                            <a>编辑</a>
                            <a-divider type="vertical" />
                            <a>删除</a>
                        </span>
                    </template>
                </template>
            </a-table>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { DownOutlined } from '@ant-design/icons-vue';
import { ref } from 'vue';
// interface FormState {
//     username: string;
//     password: string;
// }
const value = ref<string>('');
const loading = ref<Boolean>(false);
const columns = [
    {
        title: '用户名',
        dataIndex: 'username',
        key: 'username',
    },
    {
        title: '姓名',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: '年龄',
        dataIndex: 'age',
        key: 'age',
    },
    {
        title: '地址',
        dataIndex: 'address',
        key: 'address',
    },
    {
        title: '联系电话',
        key: 'tags',
        dataIndex: 'tags',
    },
    {
        title: '操作',
        key: 'action',
    },
];

const data = [
    {
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
        tags: ['nice', 'developer'],
    },
    {
        key: '2',
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
        tags: ['loser'],
    },
    {
        key: '3',
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
    },
];
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
  