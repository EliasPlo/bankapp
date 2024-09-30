import { Pool } from 'pg';

export const connectToPostgres = () => {
  const pool = new Pool({
    user: 'postgres_user',
    host: 'localhost',
    database: 'banking',
    password: 'yourpassword',
    port: 5432,
  });

  pool.connect((err) => {
    if (err) {
      console.error('Error connecting to PostgreSQL', err);
    } else {
      console.log('Connected to PostgreSQL');
    }
  });
};
