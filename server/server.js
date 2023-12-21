const mongoose = require("mongoose");
const dotenv = require("dotenv");

process.on("uncaughtException", (err) => {
  console.log("UNCAUTCHT EXCEPTION ! Shutting down...");
  console.log(err.name, err.message);
  process.exit(1);
}); // deh btk4f ale error w deh a7sn mn ale t7t deh fe video 123
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
    // useCreateIndex: true,
    // useFindAndModify: false,
  })
  .then((con) => {
    console.log("DB connection successfull");
  });
// const port = 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});

process.on("unhandledRejection", (err) => {
  console.log("UNHANDLED REJECTION ! 💥 Shutting down...");
  console.log(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
}); // deh 3lshan lw database msh mwsla kwis y3ny asmha 8lt aw bentha 8lt w kda de fe video 123
