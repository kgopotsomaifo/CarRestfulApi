export const carsApiFetch = async (url, dataMethod, data) => {
  const response = await fetch(url, {
    method: dataMethod,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return await response.json(); // parses response to JSON
};
