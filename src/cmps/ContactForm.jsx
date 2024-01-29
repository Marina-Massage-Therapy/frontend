import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import "../assets/css/ContactForm.css";
import { t } from "i18next";

const ContactForm = () => {
  const form = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");
  const [comment, setComment] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_4fppkha",
        "template_rvtiimk",
        form.current,
        "aD2i3pcBPnxDvQqs7"
      )
      .then(
        (result) => {
          console.log(result.text);
          setName("");
          setEmail("");
          setTelephone("");
          setComment("");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact-container">
      <div className="contact-info-section">
        <h2>{t("cmps.contactForm.title")}</h2>
      </div>
      <form
        ref={form}
        className="contact-form"
        onSubmit={sendEmail}
      >
        <input
          type="text"
          name="user_name"
          placeholder={t("cmps.contactForm.name")}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          name="user_email" // Match the name attribute to your EmailJS template
          placeholder={t("cmps.contactForm.email")}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="tel"
          name="user_telephone" // Add the name attribute for the telephone
          placeholder={t("cmps.contactForm.telephone")}
          value={telephone}
          onChange={(e) => setTelephone(e.target.value)}
        />
        <textarea
          name="user_comment" // Add the name attribute for the comment
          placeholder={t("cmps.contactForm.message")}
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <button type="submit">{t("cmps.contactForm.submit")}</button>
      </form>
    </div>
  );
};

export default ContactForm;
