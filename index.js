const express = require("express");
const studentroute = require("./route/studentroute");
const app = express();
const port = 80;
app.use(express.json());

app.use("/student",studentroute);

app.listen(port, () => {
  console.log(`server is running at http://localhost:${port}/`);
});
