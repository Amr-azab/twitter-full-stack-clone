const mongoose = require("mongoose");
const dotenv = require("dotenv");

// process.on("uncaughtException", (err) => {
//   console.log("UNCAUTCHT EXCEPTION ! Shutting down...");
//   console.log(err.name, err.message);
//   process.exit(1);
// });

const app = require("./app");

const port = 8000;
dotenv.config({ path: "./config.env" });
const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
  })
  .then((con) => {
    console.log("DB connection successfull");
  });

app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});

// process.on("unhandledRejection", (err) => {
//   console.log("UNHANDLED REJECTION ! 💥 Shutting down...");
//   console.log(err.name, err.message);
//   server.close(() => {
//     process.exit(1);
//   });
// });
