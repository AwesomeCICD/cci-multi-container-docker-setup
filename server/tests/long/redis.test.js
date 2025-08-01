const redis = require("redis");

test("Redis: stress test", async () => {
  const client = redis.createClient({ url: process.env.REDIS_URL });
  await client.connect();

  for (let i = 0; i < 30; i++) {
    await client.set(`key${i}`, `value${i}`);
    const val = await client.get(`key${i}`);
    expect(val).toBe(`value${i}`);
    await new Promise((res) => setTimeout(res, 1500)); // 1.5 sec delay
  }

  await client.quit();
}, 60000);
