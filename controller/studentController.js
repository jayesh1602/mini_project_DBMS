const Student = require("../model/student");

module.exports.viewData = async (req, res) => {
  const id = req.params.id;
  try {
    const data = await Student.findById(id);
    console.log(id);
    res.status(200).json({ data });
  } catch (err) {
    res.status(404).json({ error: "Something went wrong..." });
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
    res.status(404).json({ errors: "update date properly..." });
  }
};

module.exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await Student.login(email, password);
    console.log(user);
    console.log(email + password);
    res.status(200).json({ user });
  } catch (err) {
    // const errors = hadleErr(err);
    console.log(err);
    res.status(404).json({ errors: "invalid credentials..." });
  }
};
