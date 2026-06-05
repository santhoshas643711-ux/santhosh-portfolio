export default function Projects() {
  return (
    <section
      id="projects"
      className="max-w-6xl mx-auto py-24 px-6"
    >
      <h2 className="text-4xl font-bold text-cyan-400 mb-10 text-center">
        Projects
      </h2>

      <div className="grid md:grid-cols-2 gap-8">

        <div className="glass p-8 rounded-2xl hover:scale-105 transition duration-300">

          <h3 className="text-2xl font-bold">
            Driver Alertness Monitoring
          </h3>

          <p className="mt-4 text-gray-300">
            CNN-based driver drowsiness detection system
            using facial feature fusion and real-time monitoring.
          </p>

          <div className="mt-4">
            <span className="bg-cyan-500 px-3 py-1 rounded-full text-sm">
              React
            </span>
          </div>

        </div>

        <div className="glass p-8 rounded-2xl hover:scale-105 transition duration-300">

          <h3 className="text-2xl font-bold">
            School Website Development
          </h3>

          <p className="mt-4 text-gray-300">
            Modern responsive school website built
            using Next.js and professional UI design.
          </p>

          <div className="mt-4">
            <span className="bg-cyan-500 px-3 py-1 rounded-full text-sm">
              Next.js
            </span>
          </div>

        </div>

      </div>
    </section>
  );
}