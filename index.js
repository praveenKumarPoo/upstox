const axios = require('axios');
var express = require('express');
var app = express();
var expressWs = require('express-ws')(app);

app.use(function (req, res, next) {
  console.log(req);
  return next();
});

app.get('/', function (req, res, next) {
  console.log('get route', req.testing);
  res.end();
});


app.ws('/watch', function (ws, req) {
  let myInterval;
  const getServerData = () => axios.get("http://kaboom.rksv.net/api/historical?interval=9").catch(function (error) {
    console.log(error);
  });
  ws.on('message', function (msg) {
    if(!ws.readyState === ws.OPEN)return 
    let reqMsg = JSON.parse(msg);
    if (reqMsg.cmd == "ping") {
      ws.send("Pong");
    } else if (reqMsg.cmd == "sub") {
      const sendDataToClient = async () => {
        let response = await getServerData();
        let count = 0;
        response.data.reverse();
        myInterval = setInterval(() => {
          if (!response.data[count]) {
            clearInterval(myInterval);
            myInterval = null;
            sendDataToClient();
            return;
          }
          ws.send(response.data[count]);
          count++;
        }, 100);
      }
      if (!myInterval) sendDataToClient()

    } else if (reqMsg.cmd == "unsub") {
      console.log("unsub uncsssl")
      clearInterval(myInterval)
      myInterval = null;
    }

  });
  console.log('socket', req.testing);
});

app.listen(3001);