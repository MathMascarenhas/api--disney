const defaultUrl = "https://api.disneyapi.dev";

export async function getAllCharacters() {
  const response = await fetch(defaultUrl + "/characters", { method: "GET" });
  const allCharacters = await response.json();
  return allCharacters.data;
}
