# MKM-Current-Whether

- ## MKM-Current-Whether checks the weather around you and all over the world at a glance. Rely on the accurate weather forecast and adjust your schedule to the weather coming in.

## API USED

- Weather APIs are Application Programming Interfaces that allow you to connect to large databases of weather forecast and historical information.

- https://openweathermap.org/api 

- ### API CALL ( Call current weather data for one location By city name )

- #### api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

- ### API IN JSON FORMAT EXAMPLE ( RAW FORM )

- {
"coord": {
"lon": 72.8479,
"lat": 19.0144
},
"weather": [
{
"id": 711,
"main": "Smoke",
"description": "smoke",
"icon": "50d"
}
],
"base": "stations",
"main": {
"temp": 304.15,
"feels_like": 304.72,
"temp_min": 304.15,
"temp_max": 304.15,
"pressure": 1009,
"humidity": 48
},
"visibility": 3500,
"wind": {
"speed": 3.6,
"deg": 290
},
"clouds": {
"all": 40
},
"dt": 1616224744,
"sys": {
"type": 1,
"id": 9052,
"country": "IN",
"sunrise": 1616202768,
"sunset": 1616246364
},
"timezone": 19800,
"id": 1275339,
"name": "Mumbai",
"cod": 200
}

- ### USED MAIN PART 

- "main": {
"temp": 304.15,
"feels_like": 304.72,
"temp_min": 304.15,
"temp_max": 304.15,
"pressure": 1009,
"humidity": 48
},


- ### package.json File

- #### https://github.com/MohitKumarMandhre/MKM-Current-Whether/blob/main/PICS/p1.PNG

- #### ![alt text](https://github.com/MohitKumarMandhre/MKM-Current-Whether/blob/main/PICS/p1.PNG)

- ### Galary 

- ![alt text](https://github.com/MohitKumarMandhre/MKM-Current-Whether/blob/main/PICS/whether-V-G.gif)


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
