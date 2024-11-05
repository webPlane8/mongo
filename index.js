const mongoose = require("mongoose");

main()
  .then(() => {
    console.log(`connection successful`);
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/test");
}

const userSchema = mongoose.Schema({
  name: String,
  email: String,
  age: Number,
});

// let Employee = mongoose.model("Employee", userSchema);
let User = mongoose.model("User", userSchema);

User.findOneAndDelete({ name: "saqib" })
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

// User.findByIdAndDelete("672104524f2ed9a1c696fd17")
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// User.deleteMany({ age: 1 })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// User.deleteOne({ name: "Ahmad" })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// User.findByIdAndUpdate("672104819445148e6ca7dc84", { age: 5 }, { new: true })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// User.updateMany({ age: 5 }, { age: 4 })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
// User.updateOne({ name: "saqib" }, { name: "Wali haider" })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// User.updateOne({ name: "saqib" }, { name: "Ahmad" })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
// User.findById("6721048cf614b35a4249eb44")
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
// User.insertMany([
//   { name: "waseem", email: "waseem@gmail.com", age: 26 },
//   { name: "wahab", email: "wahab@gmail.com", age: 39 },
//   { name: "babar", email: "babar@gmail.com", age: 32 },
// ]).then((res) => {
//   console.log(res);
// });

// const user3 = new User({
//   name: "Ali",
//   email: "Ali@gmail.com",
//   age: 1,
// });
// user3
//   .save()
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
