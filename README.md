# weather-app-CLI
Solo Project at Chingu.io

This app is built with nodeJs and integreated wit command line fnction to fetch weather of a given location which is to be provided as the firstargument in command line followed by the unit either 'c' of 'f' depending on preference .

`node app.js city_name unit`

'c' process the weather in celcius
'f' process the weather in farenheit

#How to use App
>Note: This is only a backend application and can only be intercted with via a commandline. **You cannot use it in a browser** 

1. clone the github repository on your machine
2. navigate into the directory of the project
3. run `npm install` to install all dependencies that is required by the app
4. rename the `.env.sample` file to `.env` and replace the the values of the API keys with your API keys gotten from
5. >[Open Map](https://docs.mapbox.com/#maps) for geocoding API
6. >[Openweathermap.org ](https://openweathermap.org/) for weather forecast
7. run `node app.js city_name unit`
8. View your result in the terminal![Screenshot (123)](https://user-images.githubusercontent.com/46326628/160235367-fccb3d66-44e8-4a50-853f-be5c0544011e.png)
