import axios from 'axios'

export function getUserList() {
    return axios({
        method: 'post',
        url: 'http://localhost:3000/medical/user/list',
        data: {
            condition: {
                username: 'tingxu'
            },
            page: 1,
            pageSize: 20
        }
    });
}

