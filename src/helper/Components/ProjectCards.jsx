import "./ProjectCards.scss";
import { aboutData } from "../abaoutData";
const ProjectCards = () => {
  return (
    <section className="project-card">
      <div className="container-project-card">
        <div className="pha">
        <h3>2022 - 2023</h3> 
          <h4>CLARUSWAY.</h4> 
          <h5>Front End Developer</h5> 

        </div>
        <div className="pha">
          <h3>2022 - 2023</h3> 
          <h4>CLARUSWAY.</h4> 
          <h5>Front End Developer</h5> 
          {aboutData.map((item)=>(
            <li>{item.description}</li>
          ))}
        </div>

        <div className="pha">
        <h3>2016 - 2022</h3> 
          <h4>Atatürk University.</h4> 
          <h5>Electrical Electronics Engineering</h5> 
            
        </div>

       
      </div>
    </section>
  );
};

export default ProjectCards;
