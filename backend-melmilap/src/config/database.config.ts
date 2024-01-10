import { DataSource } from 'typeorm';
import 'dotenv/config';

export const AppDataSource = new DataSource({
  //database config
  type: 'postgres',
  host: process.env.DATABASE_HOST || '203.161.55.40',
  port: Number(process.env.DATABASE_PORT) || 25432,
  username: process.env.DATABASE_USER || 'archnepal',
  password: process.env.DATABASE_PASSWORD || '@SamashyaArchnepal',
  database: process.env.DATABASE_NAME || 'archnepal',
  entities: ['dist/**/*.entity.js'],
  logging: true,
  synchronize: true,

  //migrations credentials
  migrationsRun: true,
  migrations: ['dist/migrations/*.js'] || ['dist/src/migrations/*.js'],
  migrationsTableName: 'migrations_history',
});
