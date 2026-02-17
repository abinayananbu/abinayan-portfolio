import ElectricBorder from "../components/ElectricBorder";

export default function Project() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden bg-black text-white">

      {/* Background Glow */}
      <div className="absolute w-[400px] h-[400px] bg-indigo-600/20 blur-[120px] rounded-full top-20 left-20" />

      {/* Large Background Text */}
      <h1 className="absolute text-[160px] font-bold text-white/5 left-10 top-10 select-none pointer-events-none">
        PROJECTS
      </h1>

      {/* Projects Container */}
      <div className="relative z-10 max-w-6xl w-full mb-3 grid md:grid-cols-2 gap-10">

        {/* ================= PROJECT 1 ================= */}
        <ElectricBorder
          color="#7df9ff"
          speed={1.2}
          chaos={0.08}
          thickness={1.5}
          style={{ borderRadius: 20 }}
        >
          <div className="bg-zinc-900 rounded-[20px] p-8 h-full">
            <h2 className="text-2xl font-semibold mb-3">
              E-Commerce Web Application 
            </h2>

            <p className="text-gray-400 text-sm mb-4">
              Python (Django) • React • MySQL • Tailwind CSS
            </p>

            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              Developed a full-stack e-commerce platform with user authentication,
              product management, cart functionality, and secure checkout system.
              Built REST APIs for backend services and integrated them with a 
              responsive React frontend.
            </p>

            <div className="flex gap-4">
              <button className="px-4 py-2 bg-cyan-500/20 text-cyan-400 rounded-lg text-sm">
                Live Demo
              </button>
              <a href="https://github.com/abinayananbu/ecommerce" className="px-4 py-2 bg-white/10 text-white rounded-lg text-sm">
                GitHub
              </a>
            </div>
          </div>
        </ElectricBorder>

        {/* ================= PROJECT 2 ================= */}
        <ElectricBorder
          color="#00f5ff"
          speed={1.1}
          chaos={0.08}
          thickness={1.5}
          style={{ borderRadius: 20 }}
        >
          <div className="bg-zinc-900 rounded-[20px] p-8 h-full">
            <h2 className="text-2xl font-semibold mb-3">
              ArenaOps – Team Productivity & Automation SaaS
            </h2>

            <p className="text-gray-400 text-sm mb-4">
              Python (Django) • React • PostgreSQL • JWT Authentication
            </p>

            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              Built a task management system with secure login, CRUD operations,
              role-based access control, and real-time updates. Designed scalable
              backend APIs and optimized database queries for performance.
            </p>

            <div className="flex gap-4">
              <a  className="px-4 py-2 bg-cyan-500/20 text-cyan-400 rounded-lg text-sm">
                Live Demo
              </a>
              <a href="https://github.com/abinayananbu/Team-productivity-saas-ArenaOps-" className="px-4 py-2 bg-white/10 text-white rounded-lg text-sm">
                GitHub
              </a>
            </div>
          </div>
        </ElectricBorder>

      </div>
    </section>
  );
}
