const Student = require("../model/student");

module.exports.viewData = async (req, res) => {
  const id = req.params.id;
  try {
    const data = await Student.findById(id);
    if (data) {
      console.log(id);
      res.status(200).json({ data });
    } else {
      res.status(404).json({ error: true });
    }
  } catch (err) {
    res.status(404).json({ error: true });
  }
};

module.exports.editData = async (req, res) => {
  const id = req.params.id;
  console.log(id);
  const { fullname, email, mobile, age, prn, cls, division } = req.body;
  try {
    const data = await Student.updateOne(
      { _id: id },
      {
        fullname,
        email,
        mobile,
        age,
        prn,
        cls,
        division,
      }
    );
    if (data) {
      res.status(200).json({ data });
    } else {
      res.status(404).json({ error: true });
    }
  } catch (err) {
    console.log(err);
    res.status(404).json({ error: true });
  }
};

module.exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await Student.login(email, password);
    res.status(200).json({ user });
  } catch (err) {
    // const errors = hadleErr(err);
    console.log(err);
    res.status(404).json({ error: true });
  }
};
