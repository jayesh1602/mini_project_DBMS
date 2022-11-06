const Student = require("../model/student");

module.exports.editDataAdmin = async (req, res) => {
  const {
    id,
    fullname,
    email,
    mobile,
    age,
    rollno,
    prn,
    cls,
    division,
  } = req.body;
  
  try {
    const data = await Student.updateOne(
      { _id: id },
      {
        fullname,
        email,
        mobile,
        age,
        prn,
        rollno,
        cls,
        division,
      }
    );
    res.json(data);
  } catch (err) {
    res.status(404).json({ errors });
  }
};
