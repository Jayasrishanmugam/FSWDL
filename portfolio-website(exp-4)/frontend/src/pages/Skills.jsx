import { useEffect, useState } from "react";
import axios from "axios";

function Skills() {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/skills").then((res) => {
      setSkills(res.data);
    });
  }, []);

  return (
    <section id="skills" className="container p-5">
      <h2 className="mb-3">Skills</h2>
      <ul className="list-group">
        {skills.length > 0 ? (
          skills.map((skill) => (
            <li key={skill._id} className="list-group-item">
              {skill.name} – {skill.level}
            </li>
          ))
        ) : (
          <p>No skills found.</p>
        )}
      </ul>
    </section>
  );
}

export default Skills;
