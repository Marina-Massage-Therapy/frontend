import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
// import.meta.env.VITE_YOUR_SERVICE_ID;
// import.meta.env.VITE_YOUR_TEMPLATE_ID;
// import.meta.env.VITE_YOUR_PUBLIC_KEY;
import "../assets/css/Contact.css";

const Contact = () => {
  const form = useRef();

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
          console.log("message sent"); // make sure the message is sent
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
    >
      <label>Name</label>
      <input
        type="text"
        name="user_name"
      />
      <label>Email</label>
      <input
        type="email"
        name="user_email"
      />
      <label>Message</label>
      <textarea name="message" />
      <input
        type="submit"
        value="Send"
      />
    </form>
  );
};

export default Contact;
