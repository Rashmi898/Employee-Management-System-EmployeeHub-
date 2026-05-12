const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const app = express();
require("dotenv").config();
const connectDB = require("./config/db");
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
const employeeRoutes = require("./routes/employeeRoutes");
app.use("/api/employees", employeeRoutes);
const attendanceRoutes = require("./routes/attendanceRoutes");
app.use("/api/attendance", attendanceRoutes);
const leaveRoutes = require("./routes/leaveRoutes");
app.use("/api/leaves", leaveRoutes);
const dashboardRoutes = require("./routes/dashboardRoutes");
app.use("/api/dashboard", dashboardRoutes);
const authRoutes =require("./routes/authRoutes");
app.use("/api/auth", authRoutes);
app.get("/", (req, res) => {
   res.json({
      message: "Employee Management API Running"
   });
});

const PORT = 5000;
connectDB();
app.listen(PORT, () => {
   console.log(`Server running on port ${PORT}`);
});