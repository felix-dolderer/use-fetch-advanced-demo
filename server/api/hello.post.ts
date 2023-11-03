export default defineEventHandler(async (event) => {
  const { name } = await readBody(event);

  // Delay the response by 1 second to simulate a slow API and show the loading indicator
  await new Promise((resolve) => setTimeout(resolve, 1_000));

  return { hello: name };
});
