

import { Model, Optional, DataTypes } from "sequelize";
import sequelize from "../database/db-connection";

interface ITransactionAttributes {
    id: number;
    buyerId: number;
}

interface TransactionCreationAttributes
    extends Optional<ITransactionAttributes, "id"> {}

export class Transaction
    extends Model<ITransactionAttributes, TransactionCreationAttributes>
    implements ITransactionAttributes {
    public id!: number;
    public buyerId!: number;

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
        buyerId: {
            type: DataTypes.INTEGER,
        }
    },
    {
        tableName: "transaction",
        sequelize,
    }
);