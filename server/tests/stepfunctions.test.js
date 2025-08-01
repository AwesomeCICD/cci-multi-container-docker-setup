const axios = require("axios");

test("Step Functions: local endpoint responds", async () => {
  const res = await axios.post(
    `${process.env.STEP_FUNCTIONS_ENDPOINT}`,
    {},
    { validateStatus: () => true }
  );
  expect(res.status).toBe(400); // Local endpoint will reject empty body
});
