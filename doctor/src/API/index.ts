import axios from 'axios'

export function getUserList() {
    return axios({
        method: 'post',
        url: 'http://localhost:3000/medical/user/list/99?test=6666',
        data: {
            condition: {
                username: 'tingxu'
            },
            page: 1,
            pageSize: 20
        }
    });
}

export function addUser(param) {
    return axios({
        method: 'post',
        url: 'http://localhost:3000/medical/user/add',
        data: param
    });
}
