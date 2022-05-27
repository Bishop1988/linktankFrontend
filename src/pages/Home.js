import { Stevegary } from "../components/Stevegary";
import { CallToAction } from "../components/CallToAction";
import { HomeLinks } from "../components/HomeLinks";

import { useMediaPredicate } from "react-media-hook";
import "../styles/home.css";

const Home = () => {

    return <div className="home_desktop">
      <div className="home_left">
        <CallToAction />
        <HomeLinks />
      </div>
      <Stevegary />
    </div>
  }



export default Home;