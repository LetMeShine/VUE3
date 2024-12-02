<template>
    <div class="materials-wrap">
        <Condition />
        <a-row class="content" :gutter="16">
            <a-col :span="8">
                <!-- 药材图片是读取数据库的 TODO -->
                <a-card hoverable style="width: 300px">
                    <template #cover>
                        <img alt="example" src="./imgs/chaihu.webp" />
                    </template>
                    <template #actions>
                        <edit-outlined key="edit" @click="editMaterial" />
                        <delete-outlined key="delete" @click="delMaterial" />
                        <!-- <ellipsis-outlined key="ellipsis" /> -->
                    </template>
                    <a-card-meta title="柴胡" description="用于感冒发热、寒热往来、疟疾、肝郁气滞、胸肋胀痛、脱肛、子宫脱垂、月经不调">
                    </a-card-meta>
                </a-card>
            </a-col>
            <!-- <a-col :span="8">
                <a-card title="Card title" hoverable style="width: 300px">
                    <p>card content</p>
                </a-card>
            </a-col>
            <a-col :span="8">
                <a-card title="Card title" hoverable style="width: 300px">
                    <p>card content</p>
                </a-card>
            </a-col> -->
        </a-row>
        <contextHolder />
    </div>
</template>

<script lang="ts" setup>
import { SettingOutlined, EditOutlined, EllipsisOutlined, DeleteOutlined, ExclamationCircleOutlined } from '@ant-design/icons-vue';
import { ref, computed, onBeforeMount, reactive, h } from 'vue';
import { Modal, message } from 'ant-design-vue';
import Condition from './condition.vue'

const [modal, contextHolder] = Modal.useModal();

const delMaterial = () => {
    console.log('删除吗')
    modal.confirm({
        title: '删除确认',
        icon: h(ExclamationCircleOutlined),
        content: '你确认删除该药材吗？',
        async onOk() {
            try {
                let res = await new Promise((resolve, reject) => {
                    setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
                });
                message.success('删除成功')
                return res
            } catch {
                // 删除失败
                return console.log('Oops errors!');
            }
        },
    });
}

const editMaterial = (data) => {
    console.log(data, '编辑')
};

const formState = reactive({} as FormState);
const onFinish = (values: any) => {
    console.log('Success:', values);
};

const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
};

onBeforeMount(() => {
})

</script>
<style scoped lang="less">
.materials-wrap {
    .content {
        margin: 12px;
    }
}

:deep(.ant-card-cover) {
    padding: 4px;
    border-bottom: 1px solid #f0f0f0;
}
</style>
  