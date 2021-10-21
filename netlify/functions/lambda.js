const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const API_KEY =  process.env.API_KEY;

exports.handler = async event => {

  let API_PARAMS;
  if (event.queryStringParameters.lat) {
    API_PARAMS = event.queryStringParameters.lat + "&&" + event.queryStringParameters.lon;
  } else {
    API_PARAMS = event.queryStringParameters.city;
  }

  const response = await fetch(`https://api.waqi.info/feed/roma/?token=${API_KEY}`);
  const data = await response.json();

  return {
    statusCode: 200,
    body: JSON.stringify(API_PARAMS)
  }
}