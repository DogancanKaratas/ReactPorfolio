import ProjectCards from "../../helper/Components/ProjectCards";
import "./About.scss";

const About = () => {
  return (
    <>
    <section className="about-section">
      <div className="bio-text">
        <h1 className="bio-title">BIO</h1>
        <p className="bio-pha">
        I am an engineer with a license in electrical electronics, always eager to learn new informaton in every field. Being a good and creative engineer has been my dream since my childhood. I am confident in teamwork and exchanging ideas with my teammates and I think I have developed leadership skills. I also believe that I can bring different visions to my colleagues and my company with my engineering perspective.
        </p>
      </div>
    </section>
    <ProjectCards />
    </>
  );
};

export default About;
