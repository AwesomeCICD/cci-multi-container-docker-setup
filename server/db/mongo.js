const { MongoClient } = require("mongodb");

module.exports = async function connectMongo(uri) {
  const client = new MongoClient(uri);
  await client.connect();
  const db = client.db("test");
  return { db, client };
};
