

import { Model, Optional, DataTypes } from "sequelize";
import sequelize from "../database/db-connection";

interface ITransactionAttributes {
    id: number;
    testing: string;
}

interface TransactionCreationAttributes
    extends Optional<ITransactionAttributes, "id"> {}

export class Transaction
    extends Model<ITransactionAttributes, TransactionCreationAttributes>
    implements ITransactionAttributes {
    public id!: number;
    public testing!: string;

    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

Transaction.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        testing: {
            type: DataTypes.STRING,
        },
    },
    {
        tableName: "transaction",
        sequelize,
    }
);