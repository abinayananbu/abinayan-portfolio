import ElectricBorder from "../components/ElectricBorder";

export default function Resume() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden bg-black text-white">

     {/* Background Glow */}
      <div className="absolute w-[400px] h-[400px] bg-indigo-600/20 blur-[120px] rounded-full top-20 left-20" />

      {/* Large Background Text */}
      <h1 className="absolute text-[180px] font-bold text-white/5 left-10 top-10 select-none pointer-events-none">
        RESUME
      </h1>

      {/* Resume Container */}
      <div className="relative z-10 mt-[60px] max-w-5xl w-full mb-3 grid md:grid-cols-2 gap-10">

        {/* ========== EXPERIENCE CARD ========== */}
        <ElectricBorder
          color="#7df9ff"
          speed={1.2}
          chaos={0.08}
          thickness={1.5}
          style={{ borderRadius: 20 }}
        >
          <div className="bg-zinc-900 rounded-[20px] p-8 h-full">
            <h2 className="text-2xl font-semibold mb-6">Experience</h2>

            {/* Job 1 */}
            <div className="mb-6 border-l-2 border-cyan-400 pl-4">
            <h3 className="text-lg font-medium">
                 Full Stack Developer
            </h3>
            <p className="text-sm text-gray-400">
                Freelance / Personal Projects • 2024 - Present
            </p>
            <p className="text-gray-500 mt-2 text-sm leading-relaxed">
                Built full-stack web applications using Python (Django / Flask) 
                for backend development and React with Tailwind CSS for frontend. 
                Designed REST APIs, managed databases, implemented authentication, 
                and optimized application performance for scalability.
            </p>
            </div>
          </div>
        </ElectricBorder>

        {/* ========== EDUCATION CARD ========== */}
        <ElectricBorder
          color="#00f5ff"
          speed={1.1}
          chaos={0.08}
          thickness={1.5}
          style={{ borderRadius: 20 }}
        >
          <div className="bg-zinc-900 rounded-[20px] p-8 h-full">
            <h2 className="text-2xl font-semibold mb-6">Education</h2>

            {/* Degree */}
            <div className="mb-6 border-l-2 border-teal-400 pl-4">
              <h3 className="text-lg font-medium">
                Bachelor’s Degree in Computer Science and Engineering
              </h3>
              <p className="text-sm text-gray-400">
                Anna University  • 2020 - 2024
              </p>
              <p className="text-gray-500 mt-2 text-sm leading-relaxed">
                Focused on software development, data structures, and 
                web technologies. Completed projects related to full-stack 
                development and UI engineering.
              </p>
            </div>

            {/* Higher Secondary Education */}
            <div className="mb-6 border-l-2 border-teal-400 pl-4">
            <h3 className="text-lg font-medium">
                Higher Secondary Education (HSC)
            </h3>
            <p className="text-sm text-gray-400">
                S.M Matric.Hr.Sec.School, Mylaudy • 2020
            </p>
            <p className="text-gray-500 mt-2 text-sm leading-relaxed">
                Completed Higher Secondary Education with a focus on academic excellence 
                and foundational knowledge in core subjects.
            </p>
            </div>

            {/* Secondary School Leaving Certificate */}
            <div className="mb-6 border-l-2 border-teal-400 pl-4">
            <h3 className="text-lg font-medium">
                Secondary School Leaving Certificate (SSLC)
            </h3>
            <p className="text-sm text-gray-400">
                S.M Matric.Hr.Sec.School, Mylaudy • 2018
            </p>
            <p className="text-gray-500 mt-2 text-sm leading-relaxed">
                Successfully completed secondary education with strong fundamentals 
                in mathematics, science, and communication.
            </p>
            </div>
          </div>
        </ElectricBorder>

      </div>
    </section>
  );
}
