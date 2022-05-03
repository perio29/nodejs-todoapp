const express = require("express");
const app = express();
const PORT = 3000;

app.listen(PORT, () => {
  console.log("サーバーが起動しました");
});

app.get("/", (req, res) => {
  res.send("hello world");
});
