import { MdMarkEmailRead } from "react-icons/md";
import { IoMdPhonePortrait } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";

const Contact = () => {
  return (
    <div>
      <h1>Contact Me ...</h1>
      <a href="mailto:karatasdgncn21@gmail.com">
        <div>
          <MdMarkEmailRead /> Email
        </div>
        <div>karatasdgncn21@gmail.com</div>
      </a>

      <a href="tel:0555 555 55 55">
        <div>
          <IoMdPhonePortrait /> Phone
        </div>
        <div>0555 555 55 55</div>
      </a>

      <div>
        <div>
          <IoLocationOutline /> Location
        </div>
        <div>Erzurum/Palandöken</div>
      </div>
    </div>
  );
};

export default Contact;
