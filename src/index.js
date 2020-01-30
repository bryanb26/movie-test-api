const express = require("express");
require("./db/mongoose"); //ensures mongoose runs and connects to our database
const app = express();
const movieRouter = require("./routers/movies");
const userRouter = require("./routers/user");
app.use(express.json());
app.use(movieRouter);
app.use(userRouter);

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

const testFunction = async() => {
  const token = jwt.sign({_id: "5e1f3fca5b09e82b8884d068"}, "obeysudo", {
    expriesIn: "7 days"
  });
  console.log(token);
  const data = jwt.verify(token, "obeysudo");
  console.log(data);
};

testFunction(); */

const Review = require("./models/review");
const User = require("./models/user");

const test = async ()=> {
  const review = await Review.findById(""); //find the review
  await review.populate("owner").execPopulate(); //find the owner of the review
  console.log(review.owner);
};
test();