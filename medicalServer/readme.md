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

12. 要想让接受的请求参数post需要安装插件`npm install body-parser`
/:id 是动态路由，id是变量，可以通过req.params.id获取
?test=66 是拼接路由，可以通过req.query.test获取
```js
// import bodyParser from 'body-parser'
// const  app = express();
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.json()); // 解析JSON格式的请求体 高版本直接使用
// app.use(express.urlencoded({ extended: true })); // 解析URL编码格式的请求体

// 这些不生效

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
