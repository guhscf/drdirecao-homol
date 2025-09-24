// netlify/functions/reviews.js
export async function handler(event, context) {
  console.log("KEY:", process.env.GOOGLE_API_KEY);
  console.log("PLACE:", process.env.GOOGLE_PLACE_ID);
  const placeId = process.env.REACT_APP_GOOGLE_PLACE_ID;
  const apiKey = process.env.REACT_APP_GOOGLE_API_KEY;

  const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews&key=${apiKey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*", // libera pro frontend
      },
      body: JSON.stringify(data),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Erro ao buscar reviews", details: error }),
    };
  }
}
