export default function Achievements() {
  const achievements = [
    "Infosys Springboard Certification",
    "Microsoft Excel Advanced Certification",
    "Best Paper Award - International Conference",
  ];

  return (
    <section
      id="achievements"
      className="max-w-6xl mx-auto py-24 px-6"
    >
      <h2 className="text-4xl font-bold text-cyan-400 mb-10 text-center">
        Certifications & Achievements
      </h2>

      <div className="grid md:grid-cols-3 gap-6">

        {achievements.map((item) => (
          <div
            key={item}
            className="glass p-6 rounded-xl text-center hover:scale-105 transition duration-300"
          >
            <h3 className="font-semibold">
              {item}
            </h3>
          </div>
        ))}

      </div>
    </section>
  );
}