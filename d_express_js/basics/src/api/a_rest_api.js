const express = require("express");

const port = 3000;

const app = express();

app.listen(port, () =>
  console.log(`Hello world app listening on port ${port}!`)
);
