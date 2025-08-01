const { Client } = require("pg");

module.exports = async function connectPostgres(connString) {
  const client = new Client({ connectionString: connString });
  await client.connect();
  return client;
};
