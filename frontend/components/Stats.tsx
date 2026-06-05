export default function Stats() {
  return (
    <section className="max-w-6xl mx-auto py-20 px-6">

      <div className="grid md:grid-cols-4 gap-6">

        <div className="glass p-8 text-center rounded-2xl">
          <h2 className="text-4xl font-bold text-cyan-400">2+</h2>
          <p className="mt-2 text-gray-300">Projects</p>
        </div>

        <div className="glass p-8 text-center rounded-2xl">
          <h2 className="text-4xl font-bold text-cyan-400">8+</h2>
          <p className="mt-2 text-gray-300">Skills</p>
        </div>

        <div className="glass p-8 text-center rounded-2xl">
          <h2 className="text-4xl font-bold text-cyan-400">3+</h2>
          <p className="mt-2 text-gray-300">Certificates</p>
        </div>

        <div className="glass p-8 text-center rounded-2xl">
          <h2 className="text-4xl font-bold text-cyan-400">1</h2>
          <p className="mt-2 text-gray-300">Conference Award</p>
        </div>

      </div>

    </section>
  );
}