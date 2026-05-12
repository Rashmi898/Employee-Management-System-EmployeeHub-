const express = require("express");

const router = express.Router();

const protect =
  require("../middleware/authMiddleware");

const authorizeRoles =
  require("../middleware/roleMiddleware");

const {
  createEmployee,
  getEmployees,
  updateEmployee,
  deleteEmployee
} = require("../controllers/employeeController");

router.post(
  "/",
  protect,
  authorizeRoles("admin"),
  createEmployee
);

router.get(
  "/",
  protect,
  getEmployees
);

router.put(
  "/:id",
  protect,
  authorizeRoles("admin"),
  updateEmployee
);

router.delete(
  "/:id",
  protect,
  authorizeRoles("admin"),
  deleteEmployee
);

module.exports = router;