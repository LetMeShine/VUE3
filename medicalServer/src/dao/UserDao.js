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
    async updateUser(param) {
        console.log("==========update", param)
        let id = param.id
        let updateAttra = ['name', 'password', 'address', 'tel']
        let updateParam = {}
        updateAttra.forEach(attr => {
            updateParam[attr] = param[attr]
        })
        const userInfo = await db.Users.update(
            updateParam, // 要更新的字段
            { where: { id,  } } // 匹配的条件
          )
        return userInfo;
    }
    async deleteUser(id) {
        console.log("==========delete", id)
        // 或者直接使用 delete 也可以删除
        const userInfo = await db.Users.destroy(
            { where: { id } } // 匹配的条件
          )
        return userInfo;
    }
}
const userDaoInstance = new UserDao()
export default userDaoInstance
