const connectPostgres = require('../db/postgres');

test('PostgreSQL: can connect and select version', async () => {
  const client = await connectPostgres(process.env.POSTGRES);
  const res = await client.query('SELECT version();');
  expect(res.rows.length).toBeGreaterThan(0);
  await client.end();
});
