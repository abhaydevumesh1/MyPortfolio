const education = [
  { degree: "B.Tech. in Computer Science", institution: "APJ Abdul Kalam Technological University", year: "2024" },
  { degree: "M.Sc. in Software Engineering", institution: "University of Limerick", year: "2025" }
];

const Education = () => (
  <section className="section">
    <h2 className="education-title">🎓 Education</h2>
    <div className="cards">
      {education.map((edu, index) => (
        <div className="card" key={index}>
          <h3>{edu.degree}</h3>
          <p>{edu.institution}</p>
          <span>{edu.year}</span>
        </div>
      ))}
    </div>
  </section>
);

export default Education;