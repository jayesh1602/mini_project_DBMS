const Admin = require("../model/Admin");

module.exports.admin_login = async (req, res) => {
  const { email, password } = req.body;
  console.log(email, password);
  try {
    const admin = await Admin.login(email, password);
    console.log(email + password);
    res.status(200).json({ admin });
  } catch (err) {
    res.status(404).json({ error: true });
  }
};

module.exports.admin_signup = async (req, res) => {
  const { email, password } = req.body;

  try {
    const admin = await Admin.create({
      email,
      password,
    });
    res.status(200).json({ admin });
  } catch (err) {
    console.log(err);
    res.status(404).json({ error: true });
  }
};
