const Employee = require("../models/Employee");
const Attendance = require("../models/Attendance");
const Leave = require("../models/Leave");

const getDashboardStats = async (req, res) => {
  try {
    const totalEmployees = await Employee.countDocuments();

    const totalAttendance =
      await Attendance.countDocuments();

    const totalLeaves =
      await Leave.countDocuments();

    const approvedLeaves =
      await Leave.countDocuments({
        status: "Approved"
      });

    res.status(200).json({
      success: true,
      stats: {
        totalEmployees,
        totalAttendance,
        totalLeaves,
        approvedLeaves
      }
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

module.exports = {
  getDashboardStats
};