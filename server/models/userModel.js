const crypto = require("crypto");
const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    maxlength: [
      30,
      "The name must have a maximum writing limit of 30 characters ",
    ],
    minlength: [3, "The name must be written at a minimum of 30 characters"],
    required: [true, "Please tell us your name!"],
  },
  userName: {
    type: String,
    trim: true,
    maxlength: [
      30,
      "The username must have a maximum writing limit of 30 characters ",
    ],
    minlength: [
      3,
      "The username must be written at a minimum of 30 characters",
    ],
    required: [true, "Please tell us your username!"],
    unique: true,
  },
  email: {
    type: String,
    required: [true, "Please provide your email"],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, "Please provide a vaild email"],
  },
  // photo: String,
  // role: {
  //   type: String,
  //   enum: ['user', 'admin'],
  //   default: 'user',
  // },
  password: {
    type: String,
    required: [true, "Please provide a password!"],
    minlength: [8],
    select: false, // 3lshan mtzhar4
  },
  passwordConfirm: {
    type: String,
    required: [true, "Please provide a confirm password"],
    validate: {
      // this only works on CREATE and SAVE
      validator: function (el) {
        return el === this.password; // confrim password === password
      },
      message: "Password are not the same",
    },
  },
  // passwordChangedAt: Date,
  // passwordResetToken: String,
  // passwordResetExpires: Date,
  // active: {
  //   type: Boolean,
  //   default: true,
  //   select: false,
  // },
  bio: { type: String, default: "Welcome to my profile" },
  profileImage: {
    type: String,
    default:
      "https://res.cloudinary.com/df6gs6m1e/image/upload/v1694552868/default_zzzv3q.jpg",
  },
  coverImage: {
    type: String,
    default:
      "https://res.cloudinary.com/df6gs6m1e/image/upload/v1694554226/wallpaperflare.com_wallpaper_3_tjpvzd.jpg",
  },
});

userSchema.pre("save", async function (next) {
  // Only run this function if password was actually modified
  // if (!this.isModified('password')) return next();
  // Hash the password with cost of 12
  this.password = await bcrypt.hash(this.password, 12);
  // Delete passwordConfirm field
  this.passwordConfirm = undefined;
  next();
});
userSchema.pre("save", function (next) {
  if (!this.userName.startsWith("@")) {
    this.userName = "@" + this.userName;
  }
  next();
});
// userSchema.pre('save', function (next) {
//   if (!this.isModified('password') || this.isNew) return next();
//   this.passwordChangedAt = Date.now() - 1000;
//   next();
// });

// userSchema.pre(/^find/, function (next) {
//   this.find({ active: { $ne: false } });
//   next();
// });
userSchema.methods.correctPassword = async function (
  candidatePassword,
  userpassword
) {
  return await bcrypt.compare(candidatePassword, userpassword);
}; // 3lshan y4ofham same wla false
userSchema.methods.changedPasswordAfter = function (JWTTimeStamp) {
  if (this.passwordChangedAt) {
    const changedTimesTamp = parseInt(
      this.passwordChangedAt.getTime() / 1000,
      10
    );
    return JWTTimeStamp < changedTimesTamp;
  }
  // False means Not changed
  return false;
};
// userSchema.methods.createPasswordResetToken = function () {
//   const resetToken = crypto.randomBytes(32).toString('hex');
//   this.passwordResetToken = crypto
//     .createHash('sha256')
//     .update(resetToken)
//     .digest('hex');
//   this.passwordResetExpires = Date.now() + 10 * 60 * 1000;
//   return resetToken;
// };
const User = mongoose.model("User", userSchema);

module.exports = User;
