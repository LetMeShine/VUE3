import express from 'express'
import UserService from '../service/UserService.js'
import Result from '../common/models/Result.js'

const UserControler = express.Router();

UserControler.post("/user/list/:id", async (req, res) => {
    // console.log(req.body, req.query, req.params, '请求参数')
    res.send(Result.success(await UserService.getUserList()));
});

UserControler.post("/user/add", async (req, res) => {
    console.log(req.body, req.query, req.params, '请求参数')
    res.send(Result.success(await UserService.addUser(req.body)));
});

export default UserControler