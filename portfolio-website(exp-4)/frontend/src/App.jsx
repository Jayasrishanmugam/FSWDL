import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [bio, setBio] = useState(null);
  const [skills, setSkills] = useState([]);
  const [projects, setProjects] = useState([]);

  // Fetch data from backend
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/bio")
      .then((res) => setBio(res.data[0]));
    axios
      .get("http://localhost:5000/api/skills")
      .then((res) => setSkills(res.data));
    axios
      .get("http://localhost:5000/api/projects")
      .then((res) => setProjects(res.data));
  }, []);

  // Handle contact form submit
  const handleContactSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      message: e.target.message.value,
    };

    try {
      await axios.post("http://localhost:5000/api/contacts", formData);
      alert("✅ Message sent successfully!");
      e.target.reset();
    } catch (error) {
      console.error("❌ Error sending message:", error);
      alert("Failed to send message");
    }
  };

  return (
    <div>
      {/* 🏠 Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top shadow-sm">
        <div className="container">
          <a className="navbar-brand fw-bold" href="#home">
            My Portfolio
          </a>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="#home">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#projects">
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#skills">
                  Skills
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* 🏠 Home */}
      <section id="home" className="bg-light text-dark text-center p-5 mt-5">
        <h1 className="display-4 fw-bold">Hi, I’m Jayasri 👋</h1>
        <p className="lead">
          A passionate Data Analyst who loves turning raw data into insights.
        </p>
      </section>

      {/* 🙋 About */}
      <section id="about" className="container p-5">
        <h2 className="mb-3">About Me</h2>
        {bio ? <p className="fs-5">{bio.description}</p> : <p>Loading...</p>}
      </section>

      {/* 📊 Projects */}
      <section id="projects" className="bg-light p-5">
        <div className="container">
          <h2 className="mb-4">Projects</h2>
          <div className="row">
            {projects.length > 0 ? (
              projects.map((p) => (
                <div key={p._id} className="col-md-4 mb-3">
                  <a
                    href={p.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-decoration-none"
                  >
                    <div className="card h-100 shadow-sm">
                      <div className="card-body">
                        <h5 className="card-title">{p.title}</h5>
                        <p className="card-text">{p.description}</p>
                      </div>
                    </div>
                  </a>
                </div>
              ))
            ) : (
              <p>No projects found.</p>
            )}
          </div>
        </div>
      </section>

      {/* 🛠 Skills */}
      <section id="skills" className="container p-5">
        <h2 className="mb-3">Skills</h2>
        <div className="row">
          {skills.length > 0 ? (
            skills.map((s) => (
              <div key={s._id} className="col-md-3 mb-3">
                <div className="card text-center shadow-sm">
                  <div className="card-body">
                    <h5 className="card-title">{s.title}</h5>
                    <p className="card-text">{s.level}</p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>No skills found.</p>
          )}
        </div>
      </section>

      {/* 📩 Contact */}
      <section id="contact" className="bg-dark text-light p-5">
        <div className="container">
          <h2>Contact Me</h2>
          <form onSubmit={handleContactSubmit}>
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input
                name="name"
                type="text"
                className="form-control"
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                name="email"
                type="email"
                className="form-control"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Message</label>
              <textarea
                name="message"
                className="form-control"
                rows="3"
                placeholder="Enter your message"
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              Send
            </button>
          </form>
        </div>
      </section>

      {/* ⚡ Footer */}
      <footer className="bg-secondary text-center text-light p-3">
        <p>
          &copy; {new Date().getFullYear()} Jayasri | Data Analyst Portfolio
        </p>
      </footer>
    </div>
  );
}

export default App;
