import path from 'path';

const __filename = new URL(import.meta.url).pathname;
const __dirname = path.dirname(__filename);

const dbConfig = {
  dev: {
    client: 'mysql',
    connection: {
      host: 'locahost',
      user: 'root',
      password: 'root',
      port: 3306,
      database: 'dblara',
      suportBigNumbers: true,
      bigNumberStrings: true
    },
    pool: { min: 2, max: 10 },
    seeds: { directory: path.join(__dirname, 'seeds') },
    migrations: { tableName: 'database_migrations', directory: path.join(__dirname, 'migrations') }
  }
}

export { dbConfig };