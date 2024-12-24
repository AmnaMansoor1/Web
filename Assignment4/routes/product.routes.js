const express = require('express');
let Product = require('../models/product.model'); // Adjust the model path as per your folder structure
const router = express.Router();
const Category = require('../models/categories.model'); // Ensure you import the Category model

// Route to get all products (for displaying in the table)
router.get('/products', async (req, res) => {
  console.log('Manage Products route hit');
  try {
    const products = await Product.find();
    res.render('admin/manageProducts', { products, title: 'Product Management' });
  } catch (err) {
    console.error('Error fetching products:', err);
    res.status(500).send('Error fetching products');
  }
});

// Route to add a new product
router.get('/products/add', async (req, res) => {
    try {
      const categories = await Category.find(); // Fetch categories from the database
      res.render('admin/AddProduct', { title: "Add Product", categories }); // Pass categories to the view
    } catch (err) {
      console.error('Error fetching categories:', err);
      res.status(500).send('Error loading add product page');
    }
  });
router.post('/products/add', async (req, res) => {
  const { name, description, price, stock } = req.body; // Assuming products have name, description, price, and stock
  try {
    const newProduct = new Product({ name, description, price, stock });
    await newProduct.save();
    res.redirect('/admin-panel/products'); // Redirect to the product list after saving
  } catch (err) {
    console.error(err);
    res.status(500).send('Error adding product');
  }
});

// Route to edit a product
router.get('/products/edit/:id', async (req, res) => {
    try {
      const product = await Product.findById(req.params.id);
      if (!product) {
        console.error('Product not found');
        return res.status(404).send('Product not found');
      }
  
      // Fetch categories from your database
      const categories = await Category.find(); // Assuming you have a `Category` model
  
      console.log('Editing product:', product);
      res.render('admin/EditProduct', { product, categories, title: "Edit Product" });
    } catch (err) {
      console.error('Error fetching product:', err);
      res.status(500).send('Error fetching product');
    }
  });
  

router.post('/products/edit/:id', async (req, res) => {
  const { name, description, price, stock } = req.body;
  try {
    await Product.findByIdAndUpdate(req.params.id, { name, description, price, stock });
    res.redirect('/admin-panel/products'); // Redirect to the product list after update
  } catch (err) {
    console.error(err);
    res.status(500).send('Error updating product');
  }
});

// Route to delete a product
router.get('/products/delete/:id', async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.redirect('/admin-panel/products'); // Redirect to the product list after deletion
  } catch (err) {
    console.error(err);
    res.status(500).send('Error deleting product');
  }
});

module.exports = router;
