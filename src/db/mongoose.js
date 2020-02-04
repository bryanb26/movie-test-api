const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://mike:siths1234@cluster0-ls6pq.mongodb.net/test?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: true
  }
);