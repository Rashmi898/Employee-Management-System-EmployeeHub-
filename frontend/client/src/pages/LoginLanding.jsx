import React from "react";
import LoginLeftSide from "../components/LoginLeftSide";
import {
  ArrowRightIcon,
  ShieldIcon,
  UserIcon,
} from "lucide-react";
import { Link } from "react-router-dom";

const LoginLanding = () => {
  const portalOptions = [
    {
      to: "/login/admin",
      title: "Admin Portal",
      subtitle:
        "Manage your organization with powerful administrative tools.",
      icon: ShieldIcon,
    },
    {
      to: "/login/employee",
      title: "Employee Portal",
      subtitle:
        "View your profile, track attendance, request leave, and access payslips.",
      icon: UserIcon,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col md:flex-row">

      {/* Left Side */}
      <LoginLeftSide />

      {/* Right Side */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-6 sm:p-12 lg:p-16 bg-white">

        <div className="w-full max-w-md">

          {/* Header */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-3">
              Welcome Back
            </h2>

            <p className="text-slate-500 leading-relaxed">
              Please select your portal to securely access the system.
            </p>
          </div>

          {/* Portal Cards */}
          <div className="space-y-4">

            {portalOptions.map((portal, index) => {
              const Icon = portal.icon;

              return (
                <Link
                  key={index}
                  to={portal.to}
                  className="group block bg-slate-50 border border-slate-200 rounded-2xl p-5 transition-all duration-300 hover:border-indigo-400 hover:bg-indigo-50 hover:shadow-lg hover:scale-[1.02]"
                >
                  <div className="flex items-center justify-between">

                    {/* Left Content */}
                    <div className="flex items-start gap-4">

                      {/* Icon */}
                      <div className="p-3 rounded-xl bg-indigo-100 transition-all duration-300 group-hover:bg-indigo-200">
                        <Icon
                          size={22}
                          className="text-indigo-600"
                        />
                      </div>

                      {/* Text */}
                      <div>
                        <h3 className="font-semibold text-slate-900">
                          {portal.title}
                        </h3>

                        <p className="text-sm text-slate-500 mt-1 max-w-xs leading-relaxed">
                          {portal.subtitle}
                        </p>
                      </div>

                    </div>

                    {/* Arrow */}
                    <ArrowRightIcon
                      className="w-5 h-5 text-slate-400 transition-all duration-300 group-hover:text-indigo-600 group-hover:translate-x-1"
                    />

                  </div>
                </Link>
              );
            })}

          </div>

          {/* Footer */}
          <div className="mt-12 pt-6 border-t border-slate-200">
            <p className="text-sm text-slate-500 text-center md:text-left">
              © 2026{" "}
              <span className="font-semibold text-indigo-600 cursor-pointer hover:text-indigo-700 transition-colors">
                EmployeeHub
              </span>
            </p>

            <p className="text-xs text-slate-400 mt-2 text-center md:text-left">
              Secure employee management platform.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
};

export default LoginLanding;
