# Weather App

Welcome to the Weather App! This app allows you to retrieve current weather details for a specific location using the OpenWeather API. You can also toggle between Celsius and Fahrenheit units to view temperature information.

## Features
- When you start this app your location will be detected depending on the Your IP.
- Enter a location name in the input box and press Enter to retrieve weather details.
- Displayed weather details include:
  - Current temperature
  - Minimum temperature
  - Maximum temperature
  - Pressure
  - Humidity
  - Wind speed
  - Dynamic Cloud Image under City name
  - Application is entirely Responsive
- Dynamic background image based on the temperature of the location.
- You can see °F or °C button in the top bar
    - if you want to see values in °F click on that all the values will be changed to °F from °C
    - if you want to see values in °C click on that all the values will be changed to °C from °F

## Note: 
- Updates May take time due to delay from API
- Use your own API Key in the weatherService.js file because API_Key is a sensitive information which cannot be shared on github
- To check the Output Iam attaching the screenShots

## Technologies Used

- ReactJS: A JavaScript library for building user interfaces.
- Plain CSS: For styling the application.
- OpenWeather API: To fetch weather data for the specified location.
- React Icons: For adding weather icons and UI elements.
- Axios is used to fetch the user location.

## How to Use

1. Clone the repository:

```sh
git clone https://github.com/your-username/weather-app.git
    or
download as zip file and extract zip file

cd weather-app
npm install
npm start 


### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

