const express = require("express");
const BookingApi = require("../Models/bookingModels");
const bookingModel = require("../Models/bookingModels");

const router = express.Router();

//health check
router.get("/health", (request, response) =>
  response.send("Booking routes work ok")
);
//posting new booking

router.post("/new-booking", (request, response) => {
  const requestBody = request.body;

  BookingApi.create(requestBody).then((data) => {
    console.log("This Booking was added Successfully");
    console.log(requestBody);
  });
  response.send("This Booking was created Succefully");
});
//patch
router.patch("/patch-booking/:id", (request, response) => {
  BookingModel.findByIdAndUpdate(request.params.id, requestBody, {
    new: true,
    upsert: true,
  })
    .then((data) => {
      console.log("Update successful!");
      response.send(data);
    })
    .catch(() => {
      console.log("Something went wrong!!");
      response.status(404).send("booking was not found!!");
    });
});
// delete route
router.delete("/delete-booking/:id", (request, response) => {
  bookingModel
    .findByIdAndDelete(request.params.id)
    .then((data) => {
      console.log("Booking Delete successful!");
      response.send(data);
    })
    .catch(() => {
      console.log("Something went wrong!!");
      response.status(404).send("Booking was not found!!");
    });
});

module.exports = router;
