const { Client } = require("pg");

test("Postgres: insert + query repeatedly", async () => {
  const client = new Client({ connectionString: process.env.POSTGRES });
  await client.connect();
  await client.query(`CREATE TABLE IF NOT EXISTS test (id SERIAL, val TEXT);`);

  for (let i = 0; i < 20; i++) {
    await client.query(`INSERT INTO test (val) VALUES ($1)`, [`hello_${i}`]);
    const res = await client.query(`SELECT val FROM test WHERE val = $1`, [`hello_${i}`]);
    expect(res.rows[0].val).toBe(`hello_${i}`);
    await new Promise((res) => setTimeout(res, 2000)); // 2 sec
  }

  await client.end();
}, 90000);
