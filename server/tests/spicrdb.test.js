const grpc = require("@grpc/grpc-js");
const { v1 } = require("@authzed/authzed-node");

test("SpiceDB: can connect and health check", async () => {
  const client = v1.NewClient(
    `localhost:50051`,
    grpc.credentials.createInsecure(),
    { token: process.env.SPICEDB_PSK }
  );

  const result = await client.readSchema({});
  expect(result).toBeDefined(); // Will likely throw unless schema is loaded
});
