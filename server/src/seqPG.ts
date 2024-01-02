import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
export const envConfig = dotenv.config();

export const PG_URI = process.env.PG_URI!;
export const sequelize = new Sequelize(PG_URI, {
    dialect: 'postgres',
    define: {
      timestamps: false, 
    }, 
    logging: false
  });