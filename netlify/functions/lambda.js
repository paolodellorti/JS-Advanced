const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

exports.handler = async event => {

  const API_KEY =  process.env.API_KEY;
  const API_PARAMS = event.queryStringParameters;

  const response = await fetch(`https://api.waqi.info/feed/roma/?token=${API_KEY}`);
  const data = await response.json();

  return {
    statusCode: 200,
    body: JSON.stringify(API_PARAMS)
  }
}