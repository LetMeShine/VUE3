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

// 解析application/json
app.use(express.json());

// 解析application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }))

app.use("/", controller);

// 存储文件
const base64Image = 'data:image/png;base64,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'; // 这里应该是你的Base64字符串
const imageBuffer = Buffer.from(base64Image.replace(/^data:image\/\w+;base64,/, ""), 'base64');

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// 置顶目录
const staticPath = path.join(__dirname, '../static/img');

// 保存Base64图片到文件系统
const filePath = path.join(staticPath, 'uploadedImage.png');
fs.writeFileSync(filePath, imageBuffer);

console.log(staticPath,'__filename');

// 设置静态文件服务，这样可以直接通过URL访问图片
app.use('/static', express.static(staticPath));

app.listen(port, () => {
    console.log(`Service http://localhost:${port}`);
});
