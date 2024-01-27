import "../assets/css/Footer.css";
import ContactForm from "./ContactForm";

const Footer = ({ backgroundImage, phoneNumber }) => {
  return (
    <footer
      className="footer"
      style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="footer-content">
        {/* <h2>Book Your Massage</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <a href="#" className="book-online-btn">
          BOOK ONLINE
        </a>
        <p className="call-text">or call me at</p>
        <a href={`tel:${phoneNumber}`} className="phone-number">
          {phoneNumber}
        </a> */}
        <ContactForm />
      </div>
    </footer>
  );
};

export default Footer;
