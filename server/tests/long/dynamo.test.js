const {
    DynamoDBClient,
    CreateTableCommand,
    PutItemCommand,
    GetItemCommand,
  } = require("@aws-sdk/client-dynamodb");
  
  test("DynamoDB: create + loop writes", async () => {
    const client = new DynamoDBClient({
      region: "us-east-1",
      endpoint: process.env.DYNAMODB_ENDPOINT,
      credentials: { accessKeyId: "dummy", secretAccessKey: "dummy" },
    });
  
    try {
      await client.send(new CreateTableCommand({
        TableName: "FunTable",
        KeySchema: [{ AttributeName: "id", KeyType: "HASH" }],
        AttributeDefinitions: [{ AttributeName: "id", AttributeType: "S" }],
        ProvisionedThroughput: { ReadCapacityUnits: 5, WriteCapacityUnits: 5 }
      }));
    } catch (e) {
      if (!e.message.includes("Table already exists")) throw e;
    }
  
    for (let i = 0; i < 20; i++) {
      const id = `item${i}`;
      await client.send(new PutItemCommand({
        TableName: "FunTable",
        Item: { id: { S: id }, val: { S: "foo" } }
      }));
      const result = await client.send(new GetItemCommand({
        TableName: "FunTable",
        Key: { id: { S: id } }
      }));
      expect(result.Item.val.S).toBe("foo");
      await new Promise((res) => setTimeout(res, 1500));
    }
  }, 60000);
  