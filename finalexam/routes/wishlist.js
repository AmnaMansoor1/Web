const express = require('express');
const router = express.Router();
const Wishlist = require('../models/Wishlist');
const { isAuthenticated } = require('../middleware/auth');

router.get('/view', isAuthenticated, async (req, res) => {
    const userId = req.user._id;
    try {
      const wishlist = await Wishlist.findOne({ userId }).populate('products');
      res.render('wishlist', { wishlist });
    } catch (error) {
      res.status(500).send('Error fetching wishlist');
    }
  });
router.post('/add', isAuthenticated, async (req, res) => {
  const { productId } = req.body;
  const userId = req.user._id;

  try {
    let wishlist = await Wishlist.findOne({ userId });
    if (!wishlist) {
      wishlist = new Wishlist({ userId, products: [productId] });
    } else {
      wishlist.products.push(productId);
    }
    await wishlist.save();
    res.json({ success: true });
  } catch (error) {
    res.json({ error: 'Could not add to wishlist' });
  }
});

module.exports = router;