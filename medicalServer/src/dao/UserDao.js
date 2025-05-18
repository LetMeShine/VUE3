import db from '../models/index.js';
import { Op } from "sequelize";

class UserDao {
    async getUserList() {
        console.log("==========")
        const userInfo = await db.Users.findAll({
            where: {
                name: {
                    [Op.not]: null
                }
            }
        })
        return userInfo;
    }
    async addUser(param) {
        console.log("==========", param)
        const userInfo = await db.Users.create(param)
        return userInfo;
    }
}
const userDaoInstance = new UserDao()
export default userDaoInstance