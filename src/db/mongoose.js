const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://bryan:SITHS123@cluster0-s6pam.mongodb.net/test?retryWrites=true&w=majority", 
{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: true
}
);
