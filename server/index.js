const express = require("express");
const app = express();

//importing internal routers

const timingRouter = require("./Routes/timingRoutes");

const port = 3000;

app.use(express.json());

app.get("/", (req, res) => res.send("Hello World"));

//health check rout

app.get("/health", (req, res) => res.send("Health is OK"));

//smoke test

app.get("/smoketest", (req, res) => res.send("Smoke test is OK"));

//booking routes
app.get("/booking", (req, res) => res.send("Welcome to the booking routes"));

//internal routes
app.use("/timing", timingRouter);

//by Id

app.get("/booking:id", (req, res) => {
  console.log(req.params.id);
  res.send("OK");
});

app.post("/new-booking", (req, res) => {
  console.log(req.body);
  res.send("OK");
});

app.patch("/booking/update/:id", (req, res) => {
  console.log(req.params.id);
  console.log(req.body);
  res.send(
    `Object with id :${req.params.id} has been changed to ${JSON.stringify(
      req.body
    )}`
  );
});

app.delete("/booking/delete/:id", (req, res) => {
  console.log(req.params.id);
  res.send(`This object with id: ${req.params.id} has been deleted`);
});

app.listen(port, () => console.log(`app is Listning at http://localhost:3000`));
