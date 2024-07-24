const { Pool } = require('pg');

const pool = new Pool({
  host: 'localhost',
  port: 5432,
  user: 'root',
  password: 'root',
  database: 'mycontacts',
});

pool.connect();

exports.query = async (query, values) => {
  const { rows } = await pool.query(query, values);
  return rows;
};
