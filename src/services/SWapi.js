//all API fetch calls are made from this module

export default async function SWapi() {
  const apiUrl = "https://swapi.dev/api/starships/";
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    
    return data;
  } catch (e) {
    console.error(e);
  }
}
