const skills = ["JavaScript", "React", "Node.js", "CSS", "Git", "REST APIs"];

const Skills = () => (
  <section className="section">
    <h2 className="professional-title">🎓 Professional Knowledge</h2>
    <ul className="skills-list">
      {skills.map((skill, index) => (
        <li key={index}>{skill}</li>
      ))}
    </ul>
  </section>
);

export default Skills;