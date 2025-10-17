const mongoose = require("mongoose");

// Creating a user schema
const userSchema = new mongoose.Schema({
  Name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  age: { type: Number, min: 7, max: 120, required: true },
});

const User = mongoose.model("User", userSchema);

// Controller function for user creation
const createUser = async (firstName, email, password, age) => {
  try {
    const user = new User({ firstName, email, password, age });
    // return the saved document (mocking User.prototype.save should resolve to the saved object)
    const saved = await user.save();
    return saved;
  } catch (error) {
    throw new Error("Something went wrong with creating a new user.");
  }
};

module.exports = { createUser, User };