import { useEffect, useState } from "react";
import "../assets/css/NewTestimonialCard.css";
import {
  create_testimonial,
  set_selected_testimonial,
  update_testimonial,
} from "../store/actions/testimonial";
import { useSelector } from "react-redux";
import { t } from "i18next";

const NewTestimonialCard = () => {
  const currentTestimonial = useSelector(
    (state) => state?.testimonialModule?.currentTestimonial
  );
  const [fullname, setFullname] = useState("");
  const [message, setMessage] = useState("");
  const [showCard, setShowCard] = useState(false);

  useEffect(() => {
    if (currentTestimonial) {
      setFullname(currentTestimonial?.fullname);
      setMessage(currentTestimonial?.message);
      setShowCard(true);
    }
  }, [currentTestimonial]);

  const hideFormAndResetField = () => {
    setShowCard(!showCard);
    set_selected_testimonial(null);
    setFullname("");
    setMessage("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (currentTestimonial) {
      update_testimonial({
        _id: currentTestimonial._id,
        fullname: fullname,
        message: message,
      });
    } else {
      create_testimonial(fullname, message);
    }
    hideFormAndResetField();
  };

  return (
    <div className="new-testimonial-container">
      <button
        onClick={hideFormAndResetField}
        className="toggle-button"
      >
        {showCard
          ? t("cmps.newTestimonialCard.hideForm")
          : t("cmps.newTestimonialCard.newTestimonial")}
      </button>
      {showCard && (
        <div className="new-testimonial-card">
          <form
            onSubmit={handleSubmit}
            className="new-testimonial-form"
          >
            <div className="input-group">
              <input
                type="text"
                placeholder={t("cmps.newTestimonialCard.fullname")}
                value={fullname}
                onChange={(e) => setFullname(e.target.value)}
                required
              />
            </div>
            <div className="input-group">
              <textarea
                placeholder={t("cmps.newTestimonialCard.message")}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
            </div>
            <div className="submit-btn">
              <button
                type="submit"
                className="submit-button"
              >
                {t("cmps.newTestimonialCard.submit")}
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default NewTestimonialCard;
