test("get to /api/v1/status should return 200", async () => {
  const host = "http://localhost:3000";
  const endpoint = "api/v1/status";

  const response = await fetch(`${host}/${endpoint}`);
  expect(response.status).toBe(200);
});
