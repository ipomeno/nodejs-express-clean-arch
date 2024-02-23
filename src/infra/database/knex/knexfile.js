import path from 'path';
import config from '../../config.js';

const __filename = new URL(import.meta.url).pathname;
const __dirname = path.dirname(__filename);

const dbConfig = {
  dev: {
    client: 'mysql2',
    connection: {
      host: config.db.host,
      user: config.db.user,
      password: config.db.password,
      port: config.db.port,
      database: config.db.database,
      suportBigNumbers: true,
      bigNumberStrings: true
    },
    pool: { min: 2, max: 10 },
    seeds: { directory: path.join(__dirname, 'seeds') },
    migrations: { tableName: 'database_migrations', directory: path.join(__dirname, 'migrations') }
  }
}

export default dbConfig[ process.env.NODE_ENV ];