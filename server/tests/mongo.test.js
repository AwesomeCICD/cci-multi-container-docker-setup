const connectMongo = require('../db/mongo');

test('MongoDB: can connect and ping', async () => {
  const { db, client } = await connectMongo(process.env.MONGO_URL);
  const admin = db.admin();
  const result = await admin.ping();
  expect(result.ok).toBe(1);
  await client.close();
});
