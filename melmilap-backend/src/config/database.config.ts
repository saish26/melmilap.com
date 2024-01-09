import { DataSource } from 'typeorm';
import 'dotenv/config';

export const AppDataSource = new DataSource({
  //database config
  type: 'postgres',
  host: process.env.DATABASE_HOST,
  port: Number(process.env.DATABASE_PORT),
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  entities: ['dist/**/*.entity.js'],
  logging: true,
  synchronize: true,

  //migrations credentials
  // migrationsRun: true,
  // migrations: ['dist/migrations/*.ts'] || ['dist/src/migrations/*.ts'],
  // migrationsTableName: 'migrations_history',
});
