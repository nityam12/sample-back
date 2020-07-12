const mongoose = require("mongoose");
const path = require("path");
const jimp = require("jimp");



const userSchema = new mongoose.Schema(
  {
    status: {
      type: String,
      lowercase: true,
    },
    age: {
      type: Number,
      required: true,
    },
    date: {
      type: Date,
    },
    gender: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      default: `uploads/def.jpg`,
    },
    name: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

userSchema.pre("save", async function (next) {
  // only run this function if password was actually modified
  if (!this.isModified("password")) return next();

  this.password = await bcrypt.hash(this.password, 12);

  next();
});

const User = mongoose.model("User", userSchema);

module.exports = User;
