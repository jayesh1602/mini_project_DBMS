const Student = require("../model/student");

module.exports.delete_student = async (req, res) => {
  const { id } = req.body;
  try {
    const result = await Student.findByIdAndDelete({ _id: id });
    res.status(200).json({ result });
  } catch (err) {
    console.log(err);
  }
};
