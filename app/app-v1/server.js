const express = require("express");
const app = express();

let server = app.listen(3001, () => {
  console.log("App v1 running on port 3001");
});

app.get("/", (req, res) => {
  res.send("Hello from Version 1");
});

// Graceful shutdown
process.on("SIGTERM", () => {
  console.log("v1 shutting down...");
  server.close(() => {
    console.log("v1 closed");
    process.exit(0);
  });
});
