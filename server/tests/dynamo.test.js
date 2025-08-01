const { DynamoDBClient, ListTablesCommand } = require("@aws-sdk/client-dynamodb");

test("DynamoDB: can connect and list tables", async () => {
  const client = new DynamoDBClient({
    region: "us-east-1",
    endpoint: process.env.DYNAMODB_ENDPOINT,
    credentials: { accessKeyId: "dummy", secretAccessKey: "dummy" },
  });

  const result = await client.send(new ListTablesCommand({}));
  expect(result.TableNames).toBeDefined();
});
