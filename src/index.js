const express = require("express");
require("./db/mongoose"); //ensures mongoose runs and connects to our database
const app = express();
const movieRouter = require("./routers/movies");
const userRouter = require("./routers/user");
const reviewRouter = require("./routers/reviews");
app.use(express.json());
app.use(movieRouter);
app.use(userRouter);
app.use(reviewRouter);
app.listen(3000, () => {
  console.log("Server up on 3000");
});

//bcrypt hashing will occur as middleware during requests

/* const bcrypt = require("bcryptjs");
const testFunction = async () => {
  const password = "obeysudo";
  const hashedPassword = await bcrypt.hash(password, 10);
  console.log(password);
  console.log(hashedPassword);
  const isMatch = await bcrypt.compare("obeysudo", hashedPassword);
  console.log(isMatch);
};
testFunction(); */

/* const jwt = require("jsonwebtoken");
const testFunction = async () => {
  const token = jwt.sign({ _id: "5e1f3f813f07551900b85ea5" }, "obeysudo", {
    expiresIn: "7 days"
  });
  console.log(token);
  const data = jwt.verify(token, "obeysudo");
  console.log(data);
};
testFunction(); */

const Review = require("./models/review");
const User = require("./models/user");

/* const test = async () => {
  const review = await Review.findById("5e35b3384388f403f065a998"); //find the review
  await review.populate("owner").execPopulate(); //find the owner of the review
  console.log(review.owner);
};
test(); */

/* const main = async () => {
  const user = await User.findById("5e35b1947cd59a237c51b9a2");
  await user.populate("reviews").execPopulate();
  console.log(user.reviews);
};
main(); */