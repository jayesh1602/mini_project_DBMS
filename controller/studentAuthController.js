const Student = require("../model/student");

module.exports.student_register = async (req, res) => {
  const { fullname, email, password, mobile, age, rollno, prn, cls, division } =
    req.body;

  try {
    const student = await Student.create({
      fullname,
      email,
      password,
      mobile,
      age,
      rollno,
      prn,
      cls,
      division,
    });

    res.status(200).json({ student });
  } catch (err) {
    res.status(404).json({ error: true });
  }
};

module.exports.editData = async (req, res) => {
  const id = req.params._id;
  const { fullname, email, password, mobile, age, prn, cls, division } =
    req.body;
  try {
    const data = await Student.updateOne(
      { id },
      {
        fullname,
        email,
        password,
        mobile,
        age,
        prn,
        cls,
        division,
      }
    );
    res.json(data);
  } catch (err) {
    res.status(404).json({ errors });
  }
};
