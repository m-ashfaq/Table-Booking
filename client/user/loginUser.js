// import newUser from "./newUser";
// import newBooking from "../newBooking";

/*
I've added a button in this form to allow a first time user to register
Clicking on the Register New User button loads the newUser.js form
*/

const form = `
  <form id="login-user">
    <div class="form-group">
      <label for="username">Username</label>
      <input type="text" class="form-control" placeholder="Please enter username" name="username">
    </div>
    <div class="form-group">
      <label for="password">Password</label>
      <input type="password" class="form-control" placeholder="Please enter password" name="password">
    </div>
    <button type="submit" class="btn btn-primary">Log in</button>
  </form>
`;

const loginUser = () => {
  $(document).on("submit", "#login-user", async (event) => {
    console.log("event", event);
    event.preventDefault();

    const formData = {
      username: $("input[name='username']").val(),
      password: $("input[name='password']").val(),
    };
    console.log("formData", formData);
    const response = await $.ajax({
      type: "POST",
      url: "/api/users/login",
      contentType: "application/json",
      data: JSON.stringify(formData),
    });
    console.log("response", response);
  });
  return form;
};

export default loginUser;
