import { DataTypes } from "sequelize";
import _SequelizeMeta from "./SequelizeMeta.js";
import _Users from "./users.js";


export default function initModels(sequelize) {
    const SequelizeMeta = _SequelizeMeta.init(sequelize, DataTypes);
    const Users = _Users.init(sequelize, DataTypes);

    return {
        SequelizeMeta,
        Users
    }
}

