const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const API_KEY =  process.env.API_KEY;

exports.handler = async event => {
  const query = event.queryStringParameters;
  let responseFromAPI;

  if (query.city) {
    const response = await fetch(`https://api.waqi.info/feed/${query.city}/?token=${API_KEY}`);
    responseFromAPI = await response.json();
  } else if (query.lat && query.lon) {
    const response = await fetch(`https://api.waqi.info/feed/geo:${query.lat};${query.lon}/?token=${API_KEY}`);
    responseFromAPI = await response.json();
  }

  return {
    statusCode: 200,
    body: JSON.stringify(responseFromAPI)
  }
}