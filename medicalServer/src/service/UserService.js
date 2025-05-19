import UserDao from '../dao/UserDao.js'
class UserService {
    async getUserList() {
        return await UserDao.getUserList();
    }
    async addUser(param) {
        return await UserDao.addUser(param);
    }
    async updateUser(param) {
        return await UserDao.updateUser(param);
    }
    async deleteUser(param) {
        return await UserDao.deleteUser(param);
    }
}
const userInstance = new UserService();

export default userInstance;
