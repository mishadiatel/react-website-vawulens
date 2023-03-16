import Header from "../../components/Header";
import HeaderImage from "../../images/header_bg_1.jpg";
import StoryImage from "../../images/about1.jpg";
import VisionImage from "../../images/about2.jpg";
import MissionImage from "../../images/about3.jpg";
import "./about.css";

const About = () => {
  return (
    <>
      <Header title={"About Us"} image={HeaderImage}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi optio
        autem dolor iure ut voluptas aut iste quos deleniti cupiditate.
      </Header>
      <section className="about__story">
        <div className="container about__story-container">
          <div className="about__section-image">
            <img src={StoryImage} alt="Our story image" />
          </div>
          <div className="about__section-content">
            <h1>Our Story</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
              impedit sunt adipisci cupiditate dolore. Dolorum similique nihil
              magni placeat ipsa!
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit
              error quaerat molestias veritatis libero deleniti.
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae
              neque enim veritatis deleniti rem et.
            </p>
          </div>
        </div>
      </section>
      <section className="about__Vision">
        <div className="container about__Vision-container">
          <div className="about__section-content">
            <h1>Our Vision</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
              impedit sunt adipisci cupiditate dolore. Dolorum similique nihil
              magni placeat ipsa!
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit
              error quaerat molestias veritatis libero deleniti.
            </p>
          </div>
          <div className="about__section-image">
            <img src={VisionImage} alt="Our Vision image" />
          </div>
        </div>
      </section>
      <section className="about__mission">
        <div className="container about__mission-container">
          <div className="about__section-image">
            <img src={MissionImage} alt="Our mission image" />
          </div>
          <div className="about__section-content">
            <h1>Our Mission</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
              impedit sunt adipisci cupiditate dolore. Dolorum similique nihil
              magni placeat ipsa!
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit
              error quaerat molestias veritatis libero deleniti.
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae
              neque enim veritatis deleniti rem et.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
