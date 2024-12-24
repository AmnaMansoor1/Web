
use('limelightdb');

// Insert a few documents into the categories collection.
db.getCollection('categories').insertMany([
  [
    {
      "_id": {
        "$oid": "6769d81823754e4f764f2bd0"
      },
      "name": "Women's Shirts",
      "description": "A variety of stylish and comfortable shirts for women, available in different sizes and designs."
    },
    {
      "_id": {
        "$oid": "6769d81823754e4f764f2bd1"
      },
      "name": "Men's Trousers",
      "description": "Elegant and durable trousers for men, suitable for both formal and casual wear."
    },
    {
      "_id": {
        "$oid": "6769d81823754e4f764f2bd2"
      },
      "name": "Kids' Dresses",
      "description": "Colorful and comfortable dresses for kids, perfect for any occasion."
    },
    {
      "_id": {
        "$oid": "6769d81823754e4f764f2bd3"
      },
      "name": "Accessories",
      "description": "A wide range of fashion accessories to complement any outfit."
    }
  ]
  
]);



// Print a message to the output window.
console.log(`data inserted.`);

