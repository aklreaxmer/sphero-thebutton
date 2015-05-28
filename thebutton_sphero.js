var Cylon = require('cylon');
var WebSocket = require('ws');
var ws = new WebSocket("wss://wss.redditmedia.com/thebutton?h=84b7e212810677485d7ab577044cadd2fe921469&e=1432794142");
var color = "";
ws.on('message', function(message) {
    var json_message = JSON.parse(message);
    var time = json_message.payload.seconds_left;
    console.log(time + ' ' + color);
    if (time <= 12)
    	color = "red";
    else if (time <= 22)
    	color = "orange";
    else if (time <= 32)
    	color = "yellow";
    else if (time <= 42)
    	color = "green";
    else if (time <= 52)
    	color = "blue";
    else
    	color = "purple";

});

console.log("e")
Cylon.robot({
  connections: {
    sphero: { adaptor: 'sphero', port: 'COM5' }
  },

  devices: {
    sphero: { driver: 'sphero' }
  },

  work: function(my) {
    every((.01).second(), function() {
    	console.log(color);
      my.sphero.setColor(color);
      if(color == "red")
      	my.sphero.roll(255, Math.floor(Math.random() * 360))
    });
  }
}).start();