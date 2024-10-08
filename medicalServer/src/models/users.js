import _sequelize from 'sequelize';
const { Model } = _sequelize;

export default class Users extends Model {
    static init(sequelize, DataTypes) {
        return super.init({
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
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
            },
            update_at: {
                type: DataTypes.DATE,
                allowNull: true,
            },

        }, {
            sequelize,
            tableName: "users",
            timestamps: false,
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