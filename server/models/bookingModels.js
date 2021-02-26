const mongoose = require("mongoose");

const bookingSchema = mongoose.Schema({
    name: String,
    numberOfPeople: Number,
    numberOfKids: Number,
    highChair: Number,
    date: String,
    time: String,
    categoryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "category",
    },
});


module.exports = mongoose.model("bookingCollector", bookingSchema);