const express = require("express");
const app = express();

let server = app.listen(3002, () => {
  console.log("App v2 running on port 3002");
});

app.get("/", (req, res) => {
  res.send("Hello from Version 2 🚀");
});

process.on("SIGTERM", () => {
  console.log("v2 shutting down...");
  server.close(() => process.exit(0));
});
