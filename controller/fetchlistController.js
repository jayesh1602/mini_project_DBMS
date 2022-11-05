const Student = require("../model/student");

module.exports.view_studentList = async (req, res) => {
    try {
      const studentlist = await Student.find();
      res.status(200).json({ studentlist });
    } catch (err) {
      console.log(err);
    }
};