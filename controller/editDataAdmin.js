const Student = require("../model/student");

module.exports.editDataAdmin = async (req, res) => {
  const { id, fullname, email, password, mobile, age, prn, cls, division } =
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
