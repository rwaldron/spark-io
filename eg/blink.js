var Spark = require("../lib/spark");
var board = new Spark({
  token: "608fd30995205529ffc186d4018a651d253af9a9",
  deviceId: "53ff6f065067544840551187"
});

board.on("ready", function() {
  console.log("CONNECTED");

  var byte = 0;

  this.pinMode("D7", this.MODES.OUTPUT);

  setInterval(function() {
    this.digitalWrite("D7", (byte ^= 1));
  }.bind(this), 500);
});

board.on("error", function(error) {
  console.log(error);
});

