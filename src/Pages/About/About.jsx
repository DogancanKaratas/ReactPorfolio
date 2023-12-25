import ProjectCards from "../../helper/Components/ProjectCards";
import "./About.scss";

const About = () => {
  return (
    <>
    <section className="about-section">
      <div className="bio-text">
        <h1 className="bio-title">BIO</h1>
        <p className="bio-pha">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
          voluptatum, quaerat tempore officia omnis, velit sit facilis iure
          iusto nisi est numquam sed doloremque assumenda impedit inventore
          asperiores nostrum ipsum.
        </p>
      </div>
    </section>
    <ProjectCards />
    </>
  );
};

export default About;
