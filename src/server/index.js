const express = require("express");
const app = express();
const cors = require("cors");
const router = require("./routes/emailsender");
const port = 4400;

app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());
app.use(router);
app.listen(port, () => {
  console.log("Server running on port " + port);
});
