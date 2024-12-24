const express = require('express');
let Category = require('../models/categories.model');
const router = express.Router();

// Route to get all categories (for displaying in the table)
router.get('/categories', async (req, res) => {
  console.log('Add Category route hit');
  try {
    const categories = await Category.find();
    res.render('admin/manageCategories', { categories,title: 'Category Management'});
  } catch (err) {
    console.error('Error fetching categories:', err);
    res.status(500).send('Error fetching categories');
  }
});

// Route to add a new category
router.get('/categories/add', (req, res) => {
  res.render('admin/AddCategory',{ title:"AddCategory"});  // Render the form to add a new category
});

router.post('/categories/add', async (req, res) => {
  const { name, description } = req.body;
  console.log('Received data:', { name, description });
  try {
    const newCategory = new Category({ name, description });
    await newCategory.save();
    console.log('Category saved successfully');
    res.redirect('/admin-panel/categories');  // Redirect to the category list after saving
  } catch (err) {
    console.error('Error adding category:', err);
    res.status(500).send('Error adding category');
  }
});


router.get('/categories/edit/:id', async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);
    if (!category) {
      console.error('Category not found');
      return res.status(404).send('Category not found');
    }
    console.log('Editing category:', category);
    res.render('admin/EditCategory', { category ,title:"EditCategory"});
  } catch (err) {
    console.error('Error fetching category:', err);
    res.status(500).send('Error fetching category');
  }
});

router.post('/categories/edit/:id', async (req, res) => {
  const { name, description } = req.body;
  try {
    await Category.findByIdAndUpdate(req.params.id, { name, description });
    res.redirect('/admin-panel/categories');  // Redirect to the category list after update
  } catch (err) {
    console.error(err);
    res.status(500).send('Error updating category');
  }
});

// Route to delete a category
router.get('/categories/delete/:id', async (req, res) => {
  try {
    await Category.findByIdAndDelete(req.params.id);
    res.redirect('/admin-panel/categories');  // Redirect to the category list after deletion
  } catch (err) {
    console.error(err);
    res.status(500).send('Error deleting category');
  }
});

module.exports = router;
