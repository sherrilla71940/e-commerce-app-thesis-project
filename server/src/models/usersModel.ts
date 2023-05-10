

import { Model, Optional, DataTypes } from "sequelize";
import sequelize from "../database/db-connection";

interface IUserAttributes {
    id: number;
    email: string;
    name: string;
    password: string;
    seller: boolean;
}

interface UserCreationAttributes
    extends Optional<IUserAttributes, "id"> {}

export class User
    extends Model<IUserAttributes, UserCreationAttributes>
    implements IUserAttributes {
    public id!: number;
    public email!: string;
    public name!: string;
    public password!: string;
    public seller!: boolean;

    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        email: {
            type: DataTypes.STRING,
        },
        name: {
            type: DataTypes.STRING,
        },
        password: {
            type: DataTypes.STRING,
        },
        seller: {
            type: DataTypes.BOOLEAN,
        },
    },
    {
        tableName: "user",
        sequelize,
    }
);