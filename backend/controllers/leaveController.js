// const Leave = require("../models/Leave");

// const applyLeave = async (req, res) => {
//   try {
//     const leave = await Leave.create(req.body);

//     res.status(201).json({
//       success: true,
//       leave
//     });

//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: error.message
//     });
//   }
// };
// const updateLeaveStatus = async (req, res) => {
//   try {
//     const leave = await Leave.findByIdAndUpdate(
//       req.params.id,
//       {
//         status: req.body.status
//       },
//       { new: true }
//     );

//     res.status(200).json({
//       success: true,
//       leave
//     });

//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: error.message
//     });
//   }
// };
// module.exports = {
//   applyLeave,
//   updateLeaveStatus
// };
const Leave = require("../models/Leave");

// Apply leave
const applyLeave = async (req, res) => {
  try {
    const leave = await Leave.create(req.body);

    res.status(201).json({
      success: true,
      leave
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// Update leave status
const updateLeaveStatus = async (req, res) => {
  try {
    const leave = await Leave.findByIdAndUpdate(
      req.params.id,
      {
        status: req.body.status
      },
      { new: true }
    );

    res.status(200).json({
      success: true,
      leave
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

module.exports = {
  applyLeave,
  updateLeaveStatus
};