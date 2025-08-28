import React from "react";
import "./App.css";

function App() {
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="#">
            Data Analytics Portfolio
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
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

      {/* Home Section */}
      <section
        id="home"
        className="vh-100 d-flex align-items-center justify-content-center bg-light"
      >
        <div className="text-center">
          <h2>I'm Jayasri</h2>
          <h1>Welcome to My Data Analytics Portfolio</h1>
          <p className="lead">
            Exploring insights from data and creating impactful solutions
          </p>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-5">
        <div className="container">
          <h2 className="mb-4">About Me</h2>
          <p>
            I am a Data Analyst with experience in Python, SQL, and
            visualization tools like Power BI and Tableau. Passionate about
            turning raw data into actionable insights to drive business
            decisions.
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-5 bg-light">
        <div className="container">
          <h2 className="mb-4">Projects</h2>
          <div className="row">
            <div className="col-md-4 mb-3">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Sales Dashboard</h5>
                  <p className="card-text">
                    Created interactive sales dashboards using Power BI to track
                    key metrics and trends.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Customer Segmentation</h5>
                  <p className="card-text">
                    Performed clustering analysis in Python to segment customers
                    for targeted marketing strategies.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Financial Forecasting</h5>
                  <p className="card-text">
                    Implemented predictive models in Python to forecast monthly
                    revenue and trends.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-5">
        <div className="container">
          <h2 className="mb-4">Skills</h2>
          <div className="row">
            <div className="col-md-3 mb-3">
              <div className="card p-3 text-center">Python</div>
            </div>
            <div className="col-md-3 mb-3">
              <div className="card p-3 text-center">SQL</div>
            </div>
            <div className="col-md-3 mb-3">
              <div className="card p-3 text-center">Power BI</div>
            </div>
            <div className="col-md-3 mb-3">
              <div className="card p-3 text-center">Tableau</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-5 bg-light">
        <div className="container">
          <h2 className="mb-4">Contact Me</h2>
          <form>
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Your Name"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                placeholder="Your Email"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Message</label>
              <textarea
                className="form-control"
                rows="4"
                placeholder="Your Message"
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-3">
        &copy; 2025 Data Analytics Portfolio. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
