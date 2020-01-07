const mongoose = require("mongoose");
mongoose.connect("past something here", {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: true
});
