import "../assets/css/Welcome.css";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const navigate = useNavigate();
  return (
    <div className="welcome-container">
      <div className="title-wrap">
        <h6>Welcome</h6>
        <h2>A Few Words About Me</h2>
      </div>
      <div className="content-wrap">
        <p>
          Welcome to a world of healing and relaxation! With 13 years of
          dedicated practice, I'm a massage therapist who is passionate about
          enhancing your well-being. My expertise lies in a diverse range of
          massage modalities, including Shiatsu, classic Swedish massage, hot
          stones therapy, deep tissue, and sport massage.
        </p>
        <br />
        <br />
        <p>
          Over the years, I have honed my skills to provide a personalized and
          therapeutic experience tailored to your unique needs. Whether you seek
          tension relief, muscle pain release, or a moment of pure relaxation,
          each session is a journey designed to promote physical and mental
          harmony.
        </p>
        <div className="read-more-btn">
          <button onClick={() => navigate("/about")}>Read more</button>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
