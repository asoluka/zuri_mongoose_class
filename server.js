const http = require("http");
const app = require("./src/app");
const connectDB = require("./src/db/connect");
require("dotenv").config();
const PORT = 5000;

const server = http.createServer(app);
connectDB();

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
