const mongoose = require("mongoose");

main()
  .then(() => {
    console.log(`connection successful`);
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/amazon");
}
const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
  },
  price: {
    type: Number,
    min: [10, "Too lower price"],
    max: [100, "should be under 100"],
  },
  category: {
    type: String,
    enum: ["fiction", "non-fiction"],
  },
  genre: {
    type: [String],
  },
});

const Book = mongoose.model("Book", bookSchema);

Book.findByIdAndUpdate(
  "6728e6dc032ced34d68e9c61",
  { price: 105 },
  { runValidators: true }
)
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err.errors.price.properties.message);
  });

// let book1 = new Book({
//   title: "Islam",
//   author: "Raza Saqib",
//   price: 150,
//   category: "non-fiction",
//   genre: ["Ikhlaqiat".toLowerCase(), "Ebadat"],
// });
// book1
//   .save()
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
