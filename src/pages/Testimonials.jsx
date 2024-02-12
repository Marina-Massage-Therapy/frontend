import { useSelector } from "react-redux";
import TestimonialCard from "../cmps/TestimonialCard";
import NewTestimonialCard from "../cmps/NewTestimonialCard";
import { t } from "i18next";
import testimonialsBackground1 from "../assets/img/testimonialsBackground1.jpg";
import "../assets/css/Testimonials.css";

const Testimonials = () => {
  const testimonials = useSelector(
    (state) => state?.testimonialModule?.testimonials
  );

  return (
    <div className="testimonials-container">
      <div className="testimonials-background">
        <img
          src={testimonialsBackground1}
          alt="Testimonials Background"
        />
        <div className="testimonials-title">
          <h1>{t("pages.testimonials.title")}</h1>
        </div>
      </div>
      <div className="testimonials-content">
        <div className="description-title">
          <h2>{t("pages.testimonials.subtitle")}</h2>
        </div>
        <NewTestimonialCard />
        <div className="testimonials-card">
          {testimonials?.map((testimonial) => (
            <TestimonialCard
              key={testimonial?._id}
              _id={testimonial?._id}
              fullname={testimonial?.fullname}
              message={testimonial?.message}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
