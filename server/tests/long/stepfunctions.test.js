const axios = require("axios");

test("StepFunctions: simulate repeated POSTs", async () => {
  for (let i = 0; i < 20; i++) {
    const res = await axios.post(
      `${process.env.STEP_FUNCTIONS_ENDPOINT}`,
      {},
      { validateStatus: () => true }
    );
    expect([400, 403, 500]).toContain(res.status); // valid errors
    await new Promise((res) => setTimeout(res, 1500));
  }
}, 60000);
