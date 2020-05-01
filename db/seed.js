var data = require('./data.json');
var mongoose = require('mongoose');
var Shoes = require('./models/shoe.js');

mongoose.connect('mongodb://localhost/adidas');

// inserts each JSON-formatted shoe into the database
// seed with npm run seed-database or node seed.js
const seed = function() {
  for (let shoe of data) {
    Shoes.insertOne(shoe, (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log(`${shoe.id} inserted into the collection`)
      }
    });
  }
};

seed();

//mongoose.disconnect();