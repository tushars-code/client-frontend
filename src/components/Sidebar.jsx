import { NavLink } from "react-router-dom";
import {
  Home,
  Users,
  BookOpen,
  Image,
  Briefcase,
  Handshake,
  Target,
} from "lucide-react"; // ✅ icon library

const menuItems = [
  { path: "/", label: "Human Practices", icon: Home },
  { path: "/outreach", label: "Outreach & Education", icon: Users },
 
  { path: "/media", label: "Media Gallery", icon: Image },
  { path: "/entrepreneurship", label: "Entrepreneurship", icon: Briefcase },
  { path: "/collaborations", label: "Collaborations", icon: Handshake },
  { path: "/impact", label: "Making Impact", icon: Target },
];

export default function Sidebar() {
  return (
    // CORRECTED: Added z-50 to ensure the sidebar always stays on top of page content
    <div className="fixed left-0 top-0 h-full w-64 bg-white border-r shadow-lg flex flex-col z-50">
      {/* 🧭 Sidebar Title */}
      <div className="p-5 font-bold text-xl text-cyan-600 border-b">
        Contents
      </div>

      {/* 📜 Navigation Links */}
      <nav className="flex flex-col mt-2 space-y-1">
        {menuItems.map(({ path, label, icon: Icon }) => (
          <NavLink
            key={path}
            to={path}
            end
            className={({ isActive }) =>
              `relative flex items-center gap-3 px-5 py-2.5 text-gray-700 hover:bg-cyan-50 hover:text-cyan-500 transition-colors duration-200 ${
                isActive ? "text-cyan-600 font-semibold bg-cyan-50" : ""
              }`
            }
          >
            {/* 🔵 Active side dot */}
            {({ isActive }) =>
              isActive && (
                <span className="absolute left-0 h-full w-1 bg-cyan-500 rounded-r-full"></span>
              )
            }

            {/* 📌 Icon */}
            <Icon
              size={20}
              className="min-w-[20px] text-cyan-400"
            />

            {/* 📝 Label */}
            <span className="truncate">{label}</span>
          </NavLink>
        ))}
      </nav>
    </div>
  );
}
