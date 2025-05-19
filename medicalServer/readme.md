# mysql的安装
更改数据库的加密方式：
ALTER USER 'root'@'localhost' IDENTIFIED WITH 'mysql_native_password' BY '123456';
FLUSH PRIVILEGES;

## 项目搭建
npm init -y
npm install express
nodemon 热部署
package.json
"dev": "nodemon ./src/index.js",

## 项目划分

Controller层：负责路由接收
Service层：负责业务逻辑
Dao层：负责数据库的操作等
Common目录：负责管理工具、配置文件信息等


## 连接数据库的操作

1. 在根目录下新增.sequelizerc文件
内容是固定模板
```js
const path = require('path')

module.exports = {
    config: path.join(__dirname, 'src/dao/config.json'),
    'migrations-path': path.join(__dirname, 'src/dao/migrations'),
    'seeders-path': path.join(__dirname, 'src/dao/seeders'),
    'models-path': path.join(__dirname, 'src/models'),
}
```

2. 运行命令`npx sequelize init:config` 生成src/db/config.json文件
修改第一个数据库的名字和密码

3. 运行命令`npx sequelize init:migrations`生成src/db/migrations文件

4. 运行命令`npx sequelize migration:generate --name=init-users`在migrations目录下生成文件，这一步主要是生成表，必须在表里先添加对应的字段

5. 运行命令`npx sequelize db:migrate`，会提示需要手动安装mysql2，即可新建表等操作数据库

6. 运行命令`npx sequelize db:migrate:undo`，删除表

7. 创建models，运行命令`npx sequelize init:models`

8. 运行命令`npx sequelize init:seeders` 没啥用

9. 在models目录下新建一个文件init-models.js

10. 要想让主键id在新增数据的时候自增，需要设置数据库表的结构自增的字段autoIncrement: true，应该是有地方缺少了，实在不行就通过mysql命令行来操作数据库

```mysql
SHOW DATABASES; -- 查看数据库
USE db_doctor; -- 使用数据库
SHOW CREATE TABLE users; -- 查看表结构看看主键是否是自增的
如果不是自增的，则需要修改表结构
ALTER TABLE `users` MODIFY `id` INT AUTO_INCREMENT;
DESCRIBE users; -- 查看表结构
```
```js
// 在init user的时候地方都加上
id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true, // 自增
    primaryKey: true,
},
created_at: {
    type: DataTypes.DATE,
    allowNull: true,
    defaultValue: sequelize.literal('CURRENT_TIMESTAMP') // 自动获取当前时间作为创建时间
},
```

11. 要想让数据的创建时间是自动生成的，需要再models的User模型给创建时间设置默认值
`defaultValue: sequelize.literal('CURRENT_TIMESTAMP')` // 自动获取当前时间作为创建时间

12. 要想让接受的请求参数post需要安装插件`npm install body-parser`,但是4.16.0以上不需要安装。
/:id 是动态路由，id是变量，可以通过req.params.id获取
?test=66 是拼接路由，可以通过req.query.test获取
```js
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

```
<!-- 在模型开启时间戳，自动更新创建时间和更新时间 -->
```js
{
    timestamps: true, // 自动开启时间戳
    createdAt: 'created_at', // 自动获取当前时间作为创建时间,别名是created_at
    updatedAt: 'update_at', // 自动获取当前时间作为更新时间，别名是update_at
}
```

**生成图片后存储图片文件等**
需要先新增对应的目录文件 `static/img`
```js

// 存储文件
const base64Image = 'data:image/png;base64,iVBORw0KGgoAAAANS'; // 这里应该是你的Base64字符串
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

// 这样就可以通过 http://localhost:3000/static/uploadedImage.png 地址来访问图片了
```


13. 新增药材原理表
+ 药材图表多个
+ 药材名字
+ 药材功效
+ 药材描述

14. 症状库
+ 症状名字有的话就展示名字（没有就展示时间）
+ 病发时间（时长）
+ 症状描述
+ 观察取照片
+ 过敏史

UI构思：
新增页面：
时间选择器
图片上传
症状描述文本框
过敏史单选，补充文本框
症状名字

