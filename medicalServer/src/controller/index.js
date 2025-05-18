// 路由汇总

// 负责所有路由的导入
import express from 'express'
import UserController from './UserController.js'
const router = express.Router();

// 一定要在 router.use才生效，很多例子是写在app.use，导致一直不生效，然后一直获取不到req.body
// 解析application/json
router.use(express.json());

// 解析application/x-www-form-urlencoded
router.use(express.urlencoded({ extended: true }))

router.use("/medical", UserController);

export default router