const mongoose = require("mongoose");

const tweetSchema = new mongoose.Schema(
  {
    tweet: {
      type: String,
      required: false,
    },
    photo: {
      type: String,
      required: false,
    },
    user: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      required: [true, "tweet must belong to user"],
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  }
  // {
  //   toJSON: { virtuals: true }, // deh 3lshan tdaf fe al database
  //   toObject: { virtuals: true }, // deh 3lshan tdaf fe al database
  // }
);

// DOCUMENT MIDDLEWARE :run before .save() and .create()
// tweetSchema.pre('save', function (next) {
//   this.slug = slugify(this.name, { lower: true });
//   next();
// });

const Tweet = mongoose.model("tweets", tweetSchema);
module.exports = Tweet;
