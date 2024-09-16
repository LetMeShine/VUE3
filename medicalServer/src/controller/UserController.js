const UserControler = require("express").Router();
const UserService = require("../service/UserService");
const Result = require("../common/models/Result");

UserControler.get("/", async (req, res) => {
    res.send(Result.success(await UserService.getUserList()));
});

module.exports = UserControler;