import "../assets/css/Footer.css";
import ContactForm from "./ContactForm";

const Footer = ({ backgroundImage, phoneNumber }) => {
  return (
    <footer
      className="footer"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="footer-content">
        <ContactForm />
        <h4>©2024 Marina Massage Therapist. All Rights Reserved.</h4>
      </div>
    </footer>
  );
};

export default Footer;
