import { Link } from "react-router-dom";
import BannerImage from "../assets/banner.jpg";

const Home = () => {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1>
          Burger <span className="BurgerSpan">45</span>
        </h1>
        <p>
          Delicious Hamburgers <br /> with 45 Spicy Mixed
        </p>
        <Link to="">
          <button>Order Now</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
