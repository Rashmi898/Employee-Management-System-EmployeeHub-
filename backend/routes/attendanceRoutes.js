const express = require("express");

const router = express.Router();

const {
  checkIn,checkOut
} = require("../controllers/attendanceController");

router.post("/checkin", checkIn);
router.put("/checkout/:id", checkOut);
module.exports = router;