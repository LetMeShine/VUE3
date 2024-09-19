import { Sequelize } from 'sequelize';
// import { development } from '../dao/config.json';
import initModels from './init-models.js';

const { host, username, password, database, dialect } = {
    "username": "root",
    "password": "123456",
    "database": "db_doctor",
    "host": "127.0.0.1",
    "dialect": "mysql"
}
const sequelize = new Sequelize(database, username, password,
    { host, dialect, define: { timestamps: false } });

export default initModels(sequelize);


