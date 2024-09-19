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

4. 运行命令`npx sequelize migration:generate --name=init-users`在migrations目录下生成文件，这一步主要是生成表，可以在表里添加对应的字段

5. 运行命令`npx sequelize db:migrate`，会提示需要手动安装mysql2，即可新建表等操作数据库

6. 运行命令`npx sequelize db:migrate:undo`，删除表

7. 创建models，运行命令`npx sequelize init:models`

8. 运行命令`npx sequelize init:seeders` 没啥用

9. 在models目录下新建一个文件init-models.js