import { MdMarkEmailRead } from "react-icons/md";
import { IoMdPhonePortrait } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";
import "./Contact.scss";

const Contact = () => {
  return (
    <div className="Contact">
      <h1>Contact Me ...</h1>
      
      <div className="informations">
      <div className="email">
      <a href="mailto:karatasdgncn21@gmail.com">
        <div className="icon">
          <MdMarkEmailRead /> Email
        </div>
        <div className="text">karatasdgncn21@gmail.com</div>
      </a>
      </div>
      
      <div className="phone">
      <a href="tel:0555 555 55 55">
        <div className="icon">
          <IoMdPhonePortrait /> Phone
        </div>
        <div  className="text">0555 555 55 55</div>
      </a>
      </div>
      

      <div className="location">
        <div className="icon">
          <IoLocationOutline /> Location
        </div>
        <div  className="text">Erzurum/Palandöken</div>
      </div>
      </div>
      
    </div>
  );
};

export default Contact;
