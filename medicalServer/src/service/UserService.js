import UserDao from '../dao/UserDao.js'
class UserService {
    async getUserList() {
        return await UserDao.getUserList();
    }
}
const userInstance = new UserService();

export default userInstance;