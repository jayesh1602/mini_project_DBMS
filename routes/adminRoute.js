const { Router } = require("express");

const { delete_student } = require("../controller/deleteController");

const { view_studentList } = require("../controller/fetchlistController");

const { student_register } = require("../controller/studentAuthController");

const { editDataAdmin } = require("../controller/editDataAdmin");

const { admin_login, admin_signup } = require("../controller/adminController");

const router = Router();

router.post("/signup/admin", admin_signup);
router.post("/login/admin", admin_login);
router.get("/viewStudent", view_studentList);
router.post("/addStudent", student_register);
router.post("/updateStudent", editDataAdmin);
router.delete("/deleteStudent", delete_student);

module.exports = router;
