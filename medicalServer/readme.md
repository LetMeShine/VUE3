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