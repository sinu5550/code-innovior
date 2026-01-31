import { Monitor, PenTool, Code, Shield, ArrowRight } from "lucide-react";

const courses = [
  {
    title: "UI/UX Design",
    icon: <Monitor size={48} />,
    gradient: "from-blue-500 to-indigo-600",
    shadow: "shadow-indigo-500/40",
  },
  {
    title: "Graphics Design",
    icon: <PenTool size={48} />,
    gradient: "from-blue-400 to-blue-600",
    shadow: "shadow-blue-500/40",
  },
  {
    title: "Web Development",
    icon: <Code size={48} />,
    gradient: "from-fuchsia-500 to-purple-600",
    shadow: "shadow-fuchsia-500/40",
  },
  {
    title: "Cyber Security",
    icon: <Shield size={48} />,
    gradient: "from-purple-500 to-violet-600",
    shadow: "shadow-violet-500/40",
  },
];

export default function CoursesSection() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            Browse Top Essential Career{" "}
            <span className="text-orange-500">Courses</span>.
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Equip Yourself With The Most In-Demand Skills To Thrive In Today's
            Tech-Driven Job Market. Choose A Course That Shapes Your Future.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {courses.map((course, index) => (
            <div key={index} className="relative group">
              {/* Blur/Glow Effect behind the card */}
              <div
                className={`absolute inset-0 bg-gradient-to-b ${course.gradient} opacity-40 blur-xl rounded-2xl transition-all duration-300 group-hover:scale-110 group-hover:opacity-60 -z-10`}
              ></div>
              {/* Card Content */}
              <div
                className={`relative bg-gradient-to-b ${course.gradient} rounded-2xl p-8 flex flex-col items-center justify-center text-white min-h-[220px] transition-transform duration-300 group-hover:scale-105 cursor-pointer overflow-hidden`}
              >
                
                <div className="absolute -top-32 -left-12 w-66  h-66 bg-white/50 blur-2xl rounded-full pointer-events-none"></div>

                
                <div className="absolute top-0 left-0 w-full h-full bg-white/5 opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none"></div>

                <div className="bg-white/20 p-4 rounded-xl mb-4 backdrop-blur-sm relative z-10">
                  {course.icon}
                </div>
                <div className="w-32 h-0.5 bg-white/30 my-4 rounded-full relative z-10"></div>
                <h3 className="text-xl font-bold text-center relative z-10">{course.title}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* Browse All Button */}
        <div className="flex justify-center">
          <button className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white px-8 py-3 rounded-xl font-semibold flex items-center gap-2 hover:opacity-90 transition-opacity shadow-md">
            <ArrowRight size={20} />
            Browse All
          </button>
        </div>
      </div>
    </section>
  );
}
