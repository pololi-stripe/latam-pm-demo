const path = require("path");
const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();
app.enable('trust proxy');

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, "../client/build")));

app.get("/api", (req, res) => {
  res.json({ message: "Hello from server! sdfjdklafjd;afjdlks;a" });
});

app.get("/success", (req, res) => {
  res.sendFile(path.join(__dirname, "./success.html"));
});

app.get("/cancel", (req, res) => {
  res.sendFile(path.join(__dirname, "./cancel.html"));
});

// Mexico Payment Methods
const mexico = require("./mexico.js");
app.use("/mx", mexico);

// All other GET requests not handled before will return our React app
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
});

// Note: Make sure to place everything above the app.listen function.
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
