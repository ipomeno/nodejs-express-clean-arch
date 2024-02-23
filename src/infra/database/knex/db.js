import dbConfig from "./knexfile.js";
import knex from "knex";

const db = knex(dbConfig);
export default db;