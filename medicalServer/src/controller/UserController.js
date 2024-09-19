import express from 'express'
import UserService from '../service/UserService.js'
import Result from '../common/models/Result.js'

const UserControler = express.Router();

UserControler.post("/user/list", async (req, res) => {
    res.send(Result.success(await UserService.getUserList()));
});

export default UserControler