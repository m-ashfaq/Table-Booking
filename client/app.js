import "regenerator-runtime/runtime";
import newBooking from "./newBooking";
import newUser from "./user/newUser";
import loginUser from "./user/loginUser";

console.log("Check if this works");

$("body").prepend(newBooking());
$("body").prepend(newUser());
$("body").prepend(loginUser());
