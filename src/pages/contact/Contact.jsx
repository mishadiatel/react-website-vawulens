import HeaderImage from "../../images/header_bg_2.jpg";
import { MdEmail } from "react-icons/md";
import { AiFillLinkedin } from "react-icons/ai";
import { FaTelegramPlane } from "react-icons/fa";

import "./contact.css";
import Header from "../../components/Header";

const Contact = () => {
  return (
    <>
      <Header title={"Get In Touch"} image={HeaderImage}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque non
        numquam ipsa quae officiis velit.
      </Header>
      <section className="contact">
        <div className="container contact__container">
          <div className="contact__wrapper">
            <a
              href="mailto:mishadiatel13@gmail.com"
              target={"_blank"}
              rel={"noreferrer nooopener"}
            >
              <MdEmail />
            </a>
            <a
              href="https://www.linkedin.com/in/mykhailo-diatel-56a578242/"
              target={"_blank"}
              rel={"noreferrer nooopener"}
            >
              <AiFillLinkedin />
            </a>
            <a
              href="https://t.me/mihyiii"
              target={"_blank"}
              rel={"noreferrer nooopener"}
            >
              <FaTelegramPlane />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
