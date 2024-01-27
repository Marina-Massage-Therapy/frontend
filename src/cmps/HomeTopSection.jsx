import Background from "../assets/img/background.png";
import "../assets/css/HomeTopSection.css";

const HomeTopSection = () => {
  return (
    <div className="background-photo">
      <img src={Background} alt="backgroundPic" style={{ opacity: 0.7 }} />
      <div className="overlay-text">
        <h1>Marina Massage Therapist</h1>
        <h4>
          Your well-being is my focus, and your journey to balance and tension
          relese begins now.
        </h4>
      </div>
    </div>
  );
};

export default HomeTopSection;
