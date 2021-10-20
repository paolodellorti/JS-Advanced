exports.handler = async event => {

  // Più tardi imposteremo una variabile d'ambiente interna a Netlify stesso, accessibile semplicemente così:
  const API_KEY =  process.env.API_KEY

  // qui facciamo la chiamata alla API esattamente come la facevamo prima in index_dev.js
  const response = await fetch(`https://api.waqi.info/feed/roma/?token=c959a7c7725869fa29e518f16f2ce8bd1c5daafd`)

  // da qui in giù la funzione fa da back-end: elaboriamo dei dati e li rimandiamo al front-end in formato JSON con uno statusCode 200, cioè "successo".
    return {
      statusCode: 200,
      body: response
    }
}


  // const api = {
  //   token: "vivalamamma"
  // }  

  // return {
  //       statusCode: 200,
  //       body: JSON.stringify(api)
  // }