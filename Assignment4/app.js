const express = require("express");
const mongoose=require("mongoose");
const expressLayouts = require("express-ejs-layouts");
const path = require("path");
const categoryRouter = require('./routes/category.routes.js');  // Adjust path as needed
const productRouter = require('./routes/product.routes.js'); // Adjust path as needed
const app = express();
const PORT = 5000;

app.use(express.urlencoded({ extended: true }));  // To parse form data
app.use(express.json());  // To parse JSON data (if required)
const loginRoutes = require('./routes/loginRoutes');
app.use(loginRoutes);

// Middleware for static files
app.use(express.static(path.join(__dirname, "public")));

// Set view engine to EJS
app.set("view engine", "ejs");
//vies 
app.set('views', path.join(__dirname, 'views'));

// Use express-ejs-layouts
app.use(expressLayouts);
// app.set("layout", "./layout");
// MongoDB connection
mongoose
  .connect("mongodb://localhost:27017/Limelightdb")
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Could not connect to MongoDB", err));

// Define routes
app.get("/", (req, res) => {
  res.render("landing", { title: "Landing Page" });
});

//admin
app.get("/admin-panel", (req, res) => {
  res.render("admin-panel",{title: 'Admin-Page'});
});
// //Routes
// const categoryRoutes = require('../routes/category.routes');  // Adjust the path as needed
// app.use('/', categoryRoutes)
// ManageCategories
// // Route to get all categories (for displaying in the table)
// router.get('/add-category', async (req, res) => {
//   try {
//     const categories = await Category.find();
//     res.render('/admin/manageCategories', { categories });
//   } catch (err) {
//     console.error('Error fetching categories:', err);
//     res.status(500).send('Error fetching categories');
//   }
// });
app.use('/admin-panel', categoryRouter);
// Add the product router
app.use('/admin-panel', productRouter);


// route for login
app.get('/login', (req, res) => {
  res.render('users/login', { title: 'Login' });
});
//route for checkout page
// Set up your routes
app.get('/checkout', (req, res) => {
    // Render the checkout.ejs file in the 'views/users' folder
    res.render('users/checkout' , {title : 'checkoutpg'});
});
// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
