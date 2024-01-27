import HomeTopSection from "../cmps/HomeTopSection";
import Welcome from "../cmps/Welcome";
import "../assets/css/Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <HomeTopSection />
      <Welcome />
    </div>
  );
};

export default Home;
