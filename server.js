"use strict";

const express = require("express");
const path = require("path");

const app = express();
const port = 3000;

// access to HTML and CSS files in the 'public' directory
app.use(express.static(path.join(__dirname, "public")));

// route for rendering the homepage
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// route for rendering the about page
app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "about.html"));
});

// Handles undefined routes by serving the 404 error page.
app.get("*", (req, res) => {
  console.log("404 route triggered");
  res.status(404).sendFile(path.join(__dirname, "public", "404.html"));
});

// Starting the server
app.listen(port, () => {
  console.log(`app is listening on http://localhost:${port}`);
});
