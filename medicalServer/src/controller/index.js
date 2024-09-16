// 路由汇总

// 负责所有路由的导入
const router = require("express").Router();
router.use("/user", require("./UserController"));
module.exports = router;