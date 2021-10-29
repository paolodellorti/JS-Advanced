# Air Quality Index Tracker
This is a project for the Javascript Advanced module of the start2impact web development course.
<br>
## Contents
- [Description](#description)
- [App deployment](#app-deployment)
- [How to use](#how-to-use)
- [Things learned](#things-learned)
- [Contacts](#contacts)

## Description
The request was to make a small application wich **show you the level of pollution where you want in the world, using API to get datas**.
<br>
User can **search every place in the world** by typing the city he prefers on the search bar, or he can **look for the nearest AQI station** by allowing geolocation on the browser.
<br>
It is also possible to **save** a position, and **recall** it when is necessary.
<br>
### Technologies
- [JavaScript](https://javascript.info)
- [Webpack](https://webpack.js.org)
- [Air Quality Open Data Platform](https://aqicn.org/data-platform/token/#/)
- [Google Maps Javascript API](https://developers.google.com/maps/documentation/javascript/overview?hl=it)
### Home Page
![homePage](https://user-images.githubusercontent.com/84512004/139426752-e70caabd-6d8a-43ae-8bcd-36ef56b6ddb3.png)
### Random Page
![page](https://user-images.githubusercontent.com/84512004/139426855-53d6674f-dfb2-4e64-8ab2-399f67d299ef.png)

## App deployment
This application has been deployed on Netlify. You can check it here:
https://js-advanced-paolodellorti.netlify.app/

## How to use
First download the repo locally, then install it with

```javascript
	npm install
```

Before running it, remember to create a .env file with your AQI API_KEY, here's a snippet with .env sample:

```html
    API_KEY=yourtokenfromaqicn
```

Once you've done this, go to index.js (line 55) and index_dev.js (line 72) and change the google API key with your.

```javascript
	apiKey: "writeHereYourGoogleAPI_KEY",
```
Google API key is restricted to my domain at google maps developer console. Remember to do the same if you want to deploy it online.
<br><br><br>
Now you're ready to run it locally! Type

```javascript
	npm run dev
```

to start it in a live server.

