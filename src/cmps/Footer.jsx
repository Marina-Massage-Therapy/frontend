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
      </div>
    </footer>
  );
};

export default Footer;
