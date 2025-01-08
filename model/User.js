const mongoose = require("mongoose");
const { Schema, model, models } = mongoose;

// User Schema
const userSchema = new Schema({
  _id: {
    type: Schema.Types.ObjectId,
    required: true,
    auto: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    default: "",
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+\@.+\..+/, "Please enter a valid email address"],
  },
  bio: {
    type: String,
    default: "",
  },
  discordId: {
    type: String,
    default: "",
  },
  googleId: {
    type: String,
    default: "",
  },
  twoFactorActivated: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  verifyCode: {
    type: String,
    required: [true, "Verification Code is required"],
  },
  verifyCodeExpiry: {
    type: Date,
    required: [true, "Verify code expiry is a must"],
  },
  password: {
    type: String,
    required: [true, "Password is required"],
  },
  eventsRegistered: [
    {
      type: Schema.Types.ObjectId,
      ref: "Tournament",
    },
  ],
  tournaments: [
    {
      type: Schema.Types.ObjectId,
      ref: "Tournament",
    },
  ],
  brackets: [
    {
      type: Schema.Types.ObjectId,
      ref: "Bracket",
    },
  ],
  games: [
    {
      type: Schema.Types.ObjectId,
      ref: "Game",
    },
  ],
});

// User Model
const UserModel = models.UserModel || model("UserModel", userSchema);

module.exports = UserModel;
