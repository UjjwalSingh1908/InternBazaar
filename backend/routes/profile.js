const express = require("express");
const router = express.Router();
const isAuth = require("../middleware/is-auth");
const profileController = require("../controllers/profile");

// POST => /profile/edit
router.post("/edit", isAuth, profileController.updateResume);

// GET => /profile/view
router.post("/view", isAuth, profileController.viewResume);

router.post("/myapplications", isAuth, profileController.myapplications);
router.post("/applieduser", isAuth, profileController.appliedusers);

// POST => /profile/postedInternships
router.post(
  "/postedInternships",
  isAuth,
  profileController.viewPostedInternships
);

router.post("/changeStatus", isAuth, profileController.changeStatus);

module.exports = router;
