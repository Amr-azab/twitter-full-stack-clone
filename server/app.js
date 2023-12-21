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
);
app.options("*", cors());
const morgan = require("morgan");
app.use(morgan("dev"));
app.use(express.json());

// app.use(helmet());
// console.log(process.env.NODE_ENV);
// if (process.env.NODE_ENV === 'development') {
//   app.use(morgan('dev'));
// }
// const limiter = rateLimit({
//   max: 100,
//   windowMs: 60 * 60 * 1000,
//   message: 'Too many requests from this IP, please try again in an hour!',
// });
// app.use('/api', limiter);
// Body parser, reading data from body into req.body
// app.use(express.json({ limit: '10kb' }));
// app.use(express.urlencoded({ extended: true, limit: '10kb' }));
app.use(cookieParser());
// app.use(cors());

// Data sanitization against NoSQL query injection
// app.use(mongoSanitize());

// app.use((req, res, next) => {
//   req.requestTime = new Date().toISOString();
//   next();
// });
app.use("/api/twitter/user/", usersRouter);
app.use("/api/twitter/tweet/", tweetsRouter);
app.all("*", (req, res, next) => {
  next(new AppError(`Can't find this url on the server`, 400));
});

app.use(globalErrorHandler);

module.exports = app;
