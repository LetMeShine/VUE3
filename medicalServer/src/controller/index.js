// 路由汇总

// 负责所有路由的导入
import express from 'express'
import UserController from './UserController.js'
const router = express.Router();
router.use("/medical", UserController);

export default router