const express = require("express");
const router = express.Router();

const leaveController = require("../controllers/leaveController");

console.log(leaveController);

router.post("/", leaveController.applyLeave);
router.put("/:id", leaveController.updateLeaveStatus);

module.exports = router;