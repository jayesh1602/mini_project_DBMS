const Student = require("../model/student");

module.exports.view_studentList = async (req, res) => {
  try {
    const studentlist = await Student.find();
    studentlist.forEach(student => {
      
    });
    res.status(200).json({ studentlist });
  } catch (err) {
    res.status(404).json({ error: true });
  }
};
