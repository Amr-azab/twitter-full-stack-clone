const express = require("express");
// const morgan = require('morgan');
const AppError = require("./utlis/appError");
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const mongoSanitize = require("express-mongo-sanitize");
const usersRouter = require("./routes/userRoutes");
const tweetsRouter = require("./routes/tweetRoutes");
const globalErrorHandler = require("./controllers/errorController");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const app = express();
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
); // connection front with back while diffrenet domain
app.options("*", cors()); // handle cors to all route
const morgan = require("morgan"); // log information
app.use(morgan("dev"));
app.use(express.json()); // parse incoming request data with json

app.use(cookieParser());

app.use("/api/twitter/user/", usersRouter);
app.use("/api/twitter/tweet/", tweetsRouter);
app.use(express.static(`${__dirname}/build`));
app.all("*", (req, res, next) => {
  res.sendFile(`${__dirname}/build/index.html`);
});
// app.all("*", (req, res, next) => {
//   next(new AppError(`Can't find this url on the server`, 400));
// });

app.use(globalErrorHandler);

module.exports = app;
