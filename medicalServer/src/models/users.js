import _sequelize from 'sequelize';
const { Model } = _sequelize;

export default class Users extends Model {
    static init(sequelize, DataTypes) {
        return super.init({
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                autoIncrement: true, // 自增
                primaryKey: true,
            },
            userCode: {
                type: DataTypes.STRING(30),
                allowNull: true,
            },
            name: {
                type: DataTypes.STRING(30),
                allowNull: true,
            },
            username: {
                type: DataTypes.STRING(30),
                allowNull: true,
            },
            password: {
                type: DataTypes.STRING(30),
                allowNull: true,
            },
            tel: {
                type: DataTypes.STRING(30),
                allowNull: true,
            },
            address: {
                type: DataTypes.STRING(200),
                allowNull: true,
            },
            birth: {
                type: DataTypes.DATE,
                allowNull: true,
            },
            created_at: {
                type: DataTypes.DATE,
                allowNull: true,
                defaultValue: sequelize.literal('CURRENT_TIMESTAMP') // 自动获取当前时间作为创建时间
            },
            update_at: {
                type: DataTypes.DATE,
                allowNull: true,
            },

        }, {
            sequelize,
            tableName: "users",
            timestamps: true, // 自动开启时间戳
            createdAt: 'created_at', // 自动获取当前时间作为创建时间
            updatedAt: 'update_at', // 自动获取当前时间作为更新时间
            indexes: [
                {
                    name: "PRIMARY",
                    unique: true,
                    using: "BTREE",
                    fields: [
                        { name: 'id' }
                    ]
                }
            ]
        })
    }
}
