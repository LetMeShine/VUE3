import type { TableProps } from 'ant-design-vue/lib/table/Table'
export const columns: TableProps['columns'] = [
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
        key: 'tel',
        dataIndex: 'tel',
    },
    {
        title: '操作',
        key: 'action',
    },
]