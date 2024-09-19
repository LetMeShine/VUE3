// // 项目文件夹根目录创建 app.js
// const express = require('express');
// const app = express();
// const port = 3000;

// app.get('/', (req, res) => {
//     res.send('Hello World!');
// });

// app.listen(port, () => {
//     console.log(`Example app listening at http://localhost:${port}`);
// });

// 以下两行注释仅用于记录系统启动速度，读者可自行斟酌。
import express from 'express'
import controller from './controller/index.js'
import cors from 'cors'
const port = 3000;
const app = express();

// 使用cors中间件
// 自定义CORS配置
const corsOptions = {
    origin: '*', // 或使用函数来判断是否允许跨域
    optionsSuccessStatus: 200, // 设置成功响应的HTTP状态码
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // 允许的请求方法
    allowedHeaders: ['Content-Type', 'Authorization'], // 允许的头信息
    exposedHeaders: ['Authorization'] // 暴露的头信息
};
app.use(cors(corsOptions));

app.use("/", controller);

app.listen(port, () => {
    console.log(`Service http://localhost:${port}`);
});
