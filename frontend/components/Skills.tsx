const skills = [
  "HTML",
  "Python",
  "Git",
  "GitHub",
  "VS Code",
  "Machine Learning",
  "Responsive Design",
  "MS Excel",
  "MS Word",
  "Power Point"
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="max-w-6xl mx-auto py-24 px-6"
    >
      <h2 className="text-4xl font-bold text-cyan-400 mb-10 text-center">
        Skills
      </h2>

      <div className="grid md:grid-cols-4 gap-6">

        {skills.map((skill) => (
          <div
            key={skill}
            className="glass p-6 rounded-xl text-center hover:scale-105 transition duration-300"
          >
            <h3 className="text-lg font-semibold">
              {skill}
            </h3>
          </div>
        ))}

      </div>
    </section>
  );
}