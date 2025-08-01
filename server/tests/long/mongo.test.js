const { MongoClient } = require("mongodb");

test("Mongo: insert and find repeatedly", async () => {
  const client = new MongoClient(process.env.MONGO_URL);
  await client.connect();
  const db = client.db("test");
  const col = db.collection("items");

  for (let i = 0; i < 20; i++) {
    await col.insertOne({ name: `item_${i}` });
    const doc = await col.findOne({ name: `item_${i}` });
    expect(doc.name).toBe(`item_${i}`);
    await new Promise((res) => setTimeout(res, 1500));
  }

  await client.close();
}, 60000);
