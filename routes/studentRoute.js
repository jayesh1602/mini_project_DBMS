const { Router } = require("express");

const {
  viewData,
  editData,
  login,
} = require("../controller/studentController");

const router = Router();

router.post("/login", login);
router.get("/info/:id", viewData);
router.get("/editInfo", editData);

module.exports = router;
