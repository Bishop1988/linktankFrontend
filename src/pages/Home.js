import { Stevegary } from "../components/Stevegary";
import { CallToAction } from "../components/CallToAction";
import { HomeLinks } from "../components/HomeLinks";

import { useMediaPredicate } from "react-media-hook";
import "../styles/home.css";

const Home = () => {
  const biggerThanPhone = useMediaPredicate("(min-width: 576px)");
  const biggerThanTablet = useMediaPredicate("(min-width: 768px)");

  if (biggerThanTablet) {
    return <div className="home_desktop">
      <div className="home_left">
        <CallToAction />
        <HomeLinks />
      </div>
      <Stevegary />
    </div>
  }

  else if (biggerThanPhone) {
    return <div className="home_tablet">
      <div className="home_left">
        <CallToAction />
        <HomeLinks />
      </div>
      <Stevegary />
    </div>
  }

  else {
    return <div className="home_phone">
      <CallToAction />
      <Stevegary />
    </div>
  }
};

export default Home;