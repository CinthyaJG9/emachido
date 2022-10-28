//import { config } from "dotenv";
import {createPool} from "mysql2";
//import { createPool } from "mysql2/promise";
//config();

export const PORT = process.env.PORT || 4000;
export const DB_HOST = process.env.DB_HOST || "localhost";
export const DB_USER = process.env.DB_USER || "root";
export const DB_PASSWORD = process.env.DB_PASSWORD || "cecyt9jigc";
export const DB_DATABASE = process.env.DB_DATABASE || "ema";
export const DB_PORT = process.env.DB_PORT || 3306;


const pool = createPool({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASSWORD,
  port: Number(DB_PORT),
  database: DB_DATABASE
})

export {pool}
