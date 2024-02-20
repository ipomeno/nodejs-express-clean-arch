import { dbConfig } from "./knexfile";
import knex from "knex";

const db = knex(dbConfig.dev);
export default db;