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

const app = require("express")();

app.use("/", require("./controller"));

module.exports = app;