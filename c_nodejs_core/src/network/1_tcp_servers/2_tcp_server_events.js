let net = require("net");

let server = net.createServer();

server.on("listening", function () {
  console.log("Listening at port 3000");
});

server.on("end", function (data) {
  console.log(data);
});

server.on("close", function () {
  console.log("Server closed");
});

server.on("error", function () {
  console.log("Server Error");
});

server.on("connection", function (socket) {
  socket.write("Hi");
  socket.end();
  server.close();
});

server.listen(3000);
/*
You need TCP client to test this
1.telnet localhost 3000(works on windows)
2.nc  localhost 3000(works on Mac)
3.netcat localhost 1337
*/