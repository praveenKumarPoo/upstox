# upstox
websocket project with live stocks This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

to run the wesocket server follow the below steps

go to the root folder and ### `npm install`

and click on startServer bat file in root folder or  enter thge command  ### `npm run start`

you have to checkout master branch for websocket server

## Available Scripts

In the project directory, you can run:

if node and npm installed follow the below steps 

code is pushed to cloud herokuapp if you want to verify, you can access below url without https use http it will work,

http://poo-prav-app.herokuapp.com/

 Realtime websocket connection need to run websocket project locally, which i will be sharing with this project same way you need to run with below command 

## About WebApp

Candlestick Chart repersentation is implemented for HOCL Data 

Seperate Theme file is maintained for future scalability 

React styled compnent implemented for styling 

Responsive NavBar is implemented for mobile and desktop view 

having two pages with dashboard and RealtimeDashboard 
Dashboard --> historical rest api data is reperesented in candelstick data reperesentation

inside graph zoom button is avialiable  and pan is also possible 

Realtime Dashboard 

when you load the page you will see three buttons with subscription, unsubscribe and ping 

subscribe button will connect you with websocket for realtime data before please run the websocket application locally , i have pointed localhost with 3001 port which is used to initial instance for web socket 

unsubscribe button will stops the data from websocket server 

Ping button will respond with pong message in text area 


ws://localhost:3001/watch

### `npm install`
### `npm start`

ws://localhost:3001/watch


http://poo-prav-app.herokuapp.com/


### `npm install`
command will help you to fetch the dependend modules to run the appliation.


### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`
unit testing implemented , snapshot testing implemented, in future want to scale and extent we can do more test case 
Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

