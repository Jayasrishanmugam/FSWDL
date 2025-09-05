import { useEffect, useState } from "react";
import axios from "axios";

function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/projects").then((res) => {
      setProjects(res.data);
    });
  }, []);

  return (
    <section id="projects" className="bg-light p-5">
      <div className="container">
        <h2 className="mb-4">Projects</h2>
        <div className="row">
          {projects.length > 0 ? (
            projects.map((p) => (
              <div key={p._id} className="col-md-4 mb-3">
                <div className="card h-100 shadow-sm">
                  <div className="card-body">
                    <h5 className="card-title">{p.title}</h5>
                    <p className="card-text">{p.description}</p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>No projects found.</p>
          )}
        </div>
      </div>
    </section>
  );
}

export default Projects;
