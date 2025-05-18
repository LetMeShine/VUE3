import UserDao from '../dao/UserDao.js'
class UserService {
    async getUserList() {
        return await UserDao.getUserList();
    }
    async addUser(param) {
        return await UserDao.addUser(param);
    }
}
const userInstance = new UserService();

export default userInstance;