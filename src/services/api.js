
export const getCountries = async () => {

  const response = await fetch(
    "https://countries.dev/countries"
  );

  if (!response.ok) {
    throw new Error("Failed to fetch countries");
  }

  const data = await response.json();

  console.log("API DATA:", data);

  return data;

};