import { useNavigate, useLocation } from "react-router-dom";
import { Home, FileBox, FolderGit2, Mail, UserRound } from "lucide-react";

export default function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { name: "Home", icon: Home, path: "/" },
    { name: "About", icon: UserRound, path: "/about" },
    { name: "Resume", icon: FileBox, path: "/resume" },
    { name: "Projects", icon: FolderGit2, path: "/projects" },
    { name: "Contact", icon: Mail, path: "/contact" },
  ];

  return (
    <aside
      className="
        fixed ml-3 top-1/2 -translate-y-1/2
        z-50
      "
    >
      <nav
        className="
          flex flex-col gap-4
          p-3
          rounded-3xl
          bg-white/5
          backdrop-blur-xl
          border border-white/10
          shadow-2xl
        "
      >
        {menuItems.map((item) => {
          const active = location.pathname === item.path;

          return (
            <div key={item.name} className="relative group">
              <button
                onClick={() => navigate(item.path)}
                className={`
                  w-14 h-14
                  flex items-center justify-center
                  rounded-xl
                  transition-all duration-300
                  active:scale-90

                  ${
                    active
                      ? "bg-indigo-500/20 text-indigo-400 shadow-lg shadow-indigo-500/20"
                      : "text-gray-400 hover:text-indigo-400 hover:bg-white/10"
                  }
                `}
              >
                <item.icon size={20} />
              </button>

              {/* Tooltip */}
              <div
                className="
                  pointer-events-none
                  absolute left-full ml-4
                  top-1/2 -translate-y-1/2
                  px-4 py-2
                  text-sm font-medium
                  rounded-xl
                  bg-black/70
                  backdrop-blur-md
                  border border-white/10
                  text-white
                  shadow-lg

                  opacity-0
                  translate-x-3
                  scale-95
                  group-hover:opacity-100
                  group-hover:translate-x-0
                  group-hover:scale-100

                  transition-all duration-300 ease-out
                  whitespace-nowrap
                "
              >
                {item.name}

                {/* Arrow */}
                <div
                  className="
                    absolute left-0 top-1/2
                    -translate-y-1/2 -translate-x-1/2
                    w-2 h-2
                    bg-black/70
                    border-l border-b border-white/10
                    rotate-45
                  "
                />
              </div>
            </div>
          );
        })}
      </nav>
    </aside>
  );
}
