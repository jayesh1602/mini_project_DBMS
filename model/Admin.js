const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const { isEmail } = require("validator");

const adminSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    validate: [isEmail, "Please enter a valid email"],
  },
  password: {
    type: String,
    required: true,
    minlength: [6, "Minimum length of password should must be 6 characters"],
  },
});

adminSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

adminSchema.statics.login = async function (email, password) {
  const admin = await this.findOne({ email });
  if (admin) {
    const auth = await bcrypt.compare(password, admin.password);
    if (auth) {
      return admin;
    }
    throw Error("Incorrect Password");
  }
  throw Error("Invalid Email.");
};

const Admin = mongoose.model("admin", adminSchema);

module.exports = Admin;
