const redis = require("redis");

test("Redis: can set and get a key", async () => {
  const client = redis.createClient({ url: process.env.REDIS_URL });
  await client.connect();
  await client.set("foo", "bar");
  const val = await client.get("foo");
  expect(val).toBe("bar");
  await client.quit();
});
