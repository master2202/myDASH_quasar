const http = require("http");
const app = require("./src/app");

// configure server
const port = process.env.PORT || 3000;
const server = http.createServer(app);

// configure socket.io
const io = require("socket.io")(server);
io.on("connection", client => {
  io.emit("message", "server has joined!");
  client.on("event", data => {
    console.log(data);
  });
  client.on("disconnect", () => {
    console.log("client is disconnected");
  });
});

server.listen(port, () => {
  let host =
    server.address().address === "::" ? "localhost" : server.address().address;
  console.log("server running on:");
  console.log("http://" + host + ":" + port);
});
