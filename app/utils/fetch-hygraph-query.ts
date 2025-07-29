export const fetchHygraphQuery = async <T>(
  query: string,
  revalidate?: number,
): Promise<T> => {
  const teste = "teste";
  console.log("HYGRAPH_URL:", process.env.HYGRAPH_URL);
  console.log("HYGRAPH_TOKEN:", process.env.HYGRAPH_TOKEN);
  console.log("Query:", query);

  const response = await fetch(process.env.HYGRAPH_URL!, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${process.env.HYGRAPH_TOKEN}`,
    },
    body: JSON.stringify({ query }),
    next: {
      revalidate,
    },
  });

  console.log("Response Status:", response.status);

  if (!response.ok) {
    const errorText = await response.text();
    console.error("API Error:", errorText);
    throw new Error(`API returned status ${response.status}`);
  }

  const jsonResponse = await response.json();
  console.log("Response JSON:", jsonResponse);

  const { data } = jsonResponse || {};
  if (!data) {
    throw new Error("No data returned from API.");
  }

  return data;
};
