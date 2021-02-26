const form = `
<form id="form-Restaurant">
    <div class = "title">
        <h2>Reserve A Table</h2>
    </div>
    <div class="form-group">
        <label for="name"></label>
        <input type="text" class="form-control" id="name" placeholder="Enter Your Name" name="name">
    </div>
    <div class="form-group">
        <label for="number"></label>
        <input type="number" class="form-control" id="number" placeholder="Number of People" name="number">
    </div>
    <div class="form-group">
        <label for="numberOfKids"></label>
        <input type="number" class="form-control" id="numberOfKids" placeholder="Number Of Kids" name="numberOfKids">
    </div>
    <div class="form-group">
        <label for="highChair"></label>
        <input type="text" class="form-control" id="highChair" placeholder="No. of High Chair Required" name="highChair">
    <fieldset class="form-group">
        <label for="date">Date</label>
        <div class="form-check form-check-inline">
        <input id="date" type="date"/>
    </div>
        <div class="form-check form-check-inline">
        <label for="time">Time</label>
        <input id="time" type="time"/>
        </div>
    </fieldset>
    <button type="submit" class="btn btn-Success">Confirm Booking</button>
    </form>
`;

const newBooking = () => {
  $(document).on("submit", "form#form-Restaurant", (e) => {
    e.preventDefault();
    console.log($("#name").val());
    console.log($("#number").val());
    console.log($("#numberOfKids").val());
    console.log($("#highChair").val());
    console.log($("#date").val());
    console.log($("#time").val());
    console.log("Booking Entered");

    const requestBody = {
      name: $("#name").val(),
      numberOfPeople: $("#number").val(),
      numberOfKids: $("#numberOfKids").val(),
      highChair: $("#highChair").val(),
      date: $("#date").val(),
      time: $("#time").val(),
    };

    const response = $.ajax({
      type: "POST",
      url: "/api/booking/new-booking",
      contentType: "application/json",
      data: JSON.stringify(requestBody),
    });
    // const response = $.ajax({
    //   type: "POST",
    //   url: "http://localhost:5000/booking/new-booking",
    //   contentType: "application/json",
    //   data: JSON.stringify(requestBody),
    // });

    window.alert("Booking Created!");

    console.log(`request body:`, requestBody);
    console.log(`request body: ${JSON.stringify(requestBody, null, 2)}`);

    // Event listener to for Delete Fruit Button
    $(document).on("click", "#delete-booking", async (e) => {
      e.preventDefault();

      const response = await $.ajax({
        type: "DELETE",
        url: `/api/booking/delete-booking/${$("#bookingId").val()}`,
        contentType: "application/json",
      });

      // Make a PATCH request to the server to update a fruit
      // const response = await $.ajax({
      //     type: "PATCH",
      //     url: `/api/booking/patch-booking/${$("#bookingId").val()}`,
      //     contentType: "application/json",
      //     data: JSON.stringify(requestBody),
      //     });

      // Create a pop up alert in the UI to inform the user that fruit was updated
      window.alert("Booking Updated!");
    });

    // Create a pop up alert in the UI to inform the user that fruit was deleted

    window.alert("Booking Deleted!");
  });

  return form;
};

export default newBooking;
