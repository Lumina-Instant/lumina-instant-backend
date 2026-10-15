const { Pool } = require('pg');

//setup postgresql enviroment
const pool = new Pool({
  host: process.env.DB_HOST || 'localhost',
  port: process.env.DB_PORT || 5432,
  user: process.env.DB_USER || 'lumina_user',
  password: process.env.DB_PASSWORD || 'lumina_secure_pass',
  database: process.env.DB_NAME || 'lumina_db',

  //seup mac number of connection in the  pool
  max: 20,
  idleTimeoutMillies: 30000,
});

//test db when startup
pool.query('SELECT NOW()', (err, res) => {
  if (err) {
    console.error('[DB] connect error', err.stack);
  } else {
    console.log(
      '[DB] connected to postgresql successfully at :',
      res.rows[0].now
    );
  }
});

module.exports = pool;
