import { useEffect, useState } from "react";
import axios from "axios";

function About() {
  const [bio, setBio] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:5000/api/bio").then((res) => {
      setBio(res.data[0]); // fetch first bio record
    });
  }, []);

  return (
    <section id="about" className="container p-5">
      <h2 className="mb-3">About Me</h2>
      {bio ? (
        <p className="text-lg">
          Hello! My name is <b>{bio.name}</b>. <br />
          {bio.description}
        </p>
      ) : (
        <p>Loading...</p>
      )}
    </section>
  );
}

export default About;
