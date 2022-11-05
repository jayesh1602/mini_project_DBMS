const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const { isEmail } = require("validator");

const studentSchema = new mongoose.Schema({
  fullname: {
    type: String,
    required: true,
  },
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
  mobile: {
    type: Number,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  rollno: {
    type: Number,
    required: true,
  },
  prn: {
    type: Number,
    require: true,
  },
  cls: {
    type: Number,
    required: true,
  },
  division: {
    type: String,
    required: true,
  },
});

studentSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

studentSchema.statics.login = async function (email, password) {
  const student = await this.findOne({ email });
  if (student) {
    const auth = await bcrypt.compare(password, student.password);
    if (auth) {
      return student;
    }
    throw Error("Incorrect Password");
  }
  throw Error("Invalid Email.");
};

const Student = mongoose.model("student", studentSchema);

module.exports = Student;
