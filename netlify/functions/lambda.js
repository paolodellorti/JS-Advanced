const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const API_KEY =  process.env.API_KEY;

exports.handler = async event => {
  const query = event.queryStringParameters;
  let responseFromAPI;

  if (query.city) {
    try {
      const response = await fetch(`https://api.waqi.info/feed/${query.city}/?token=${API_KEY}`);
      responseFromAPI = await response.json();
      if (responseFromAPI.data === "Unknown station") {
        alert("Unknown city, please type another one!");
      }
    } catch (error) {
      console.error(error);
    }
  } else if (query.lat && query.lon) {
    try {
      const response = await fetch(`https://api.waqi.info/feed/geo:${query.lat};${query.lon}/?token=${API_KEY}`);
      responseFromAPI = await response.json();
    } catch (error) {
      console.error(error);
    }
  }

  return {
    statusCode: 200,
    body: JSON.stringify(responseFromAPI)
  }
}