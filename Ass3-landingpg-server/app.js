const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const path = require("path");

const app = express();
const PORT = 5000;

// Middleware for static files
app.use(express.static(path.join(__dirname, "public")));

// Set view engine to EJS
app.set("view engine", "ejs");

// Use express-ejs-layouts
app.use(expressLayouts);
app.set("layout", "./layout");

// Define routes
app.get("/", (req, res) => {
  res.render("landing", { title: "Landing Page" });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
