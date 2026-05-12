// const LoginLeftSide = () => {
//   return (
//     <div className="hidden md:flex w-1/2 bg-indigo-950 relative overflow-hidden border-r border-slate-200">
      
//       {/* Background Blur */}
//       <div className="absolute top-30 -left-30 w-72 h-72 bg-indigo-500/20 rounded-full blur-3xl"></div>

//       {/* Content */}
//       <div className="relative z-10 flex flex-col items-start justify-center p-12 lg:p-20 w-full h-full">
        
//         <h1 className="text-4xl lg:text-5xl font-medium text-white mb-6 leading-tight tracking-tight">
//           Employee <br />
//           Management System
//         </h1>

//         <p className="text-slate-400 text-lg max-w-md leading-relaxed">
//           Streamline your employee management with our intuitive system.
//           Track attendance, manage payroll, and empower your team securely.
//         </p>

//       </div>
//     </div>
//   );
// };

// export default LoginLeftSide;
const LoginLeftSide = () => {
  return (
    <div className="hidden md:flex w-1/2 bg-slate-950 relative overflow-hidden">

      {/* Background Effects */}
      <div className="absolute top-20 -left-20 w-72 h-72 bg-indigo-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl"></div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col justify-center px-12 lg:px-20 h-full">

        {/* Badge */}
        <div className="mb-6">
          <span className="px-4 py-2 bg-indigo-500/20 text-indigo-300 rounded-full text-sm font-medium">
            HR Management Platform
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight mb-6">
          Employee <br />
          Management <br />
          System
        </h1>

        {/* Description */}
        <p className="text-slate-400 text-lg leading-relaxed max-w-lg mb-10">
          Manage employees, track attendance, process payroll, and organize
          workflows from one secure dashboard.
        </p>

        {/* Feature Cards */}
        <div className="grid grid-cols-2 gap-4 max-w-md">

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 cursor-pointer transition-all duration-300 hover:scale-105 hover:bg-indigo-500/10 hover:border-indigo-400">
            <h3 className="text-white font-semibold mb-1">
              Attendance
            </h3>
            <p className="text-slate-400 text-sm">
              Track employee check-ins.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 cursor-pointer transition-all duration-300 hover:scale-105 hover:bg-cyan-500/10 hover:border-cyan-400">
            <h3 className="text-white font-semibold mb-1">
              Payroll
            </h3>
            <p className="text-slate-400 text-sm">
              Generate salary slips easily.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 cursor-pointer transition-all duration-300 hover:scale-105 hover:bg-purple-500/10 hover:border-purple-400">
            <h3 className="text-white font-semibold mb-1">
              Leave
            </h3>
            <p className="text-slate-400 text-sm">
              Manage leave requests.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 cursor-pointer transition-all duration-300 hover:scale-105 hover:bg-pink-500/10 hover:border-pink-400">
            <h3 className="text-white font-semibold mb-1">
              Analytics
            </h3>
            <p className="text-slate-400 text-sm">
              Monitor team performance.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default LoginLeftSide;