import { Stevegary } from "../components/Stevegary";
import { CallToAction } from "../components/CallToAction";
import { useMediaPredicate } from "react-media-hook";
import "../styles/home.css";

const Home = () => {
    const biggerThan480 = useMediaPredicate("(min-width: 480px)");

    if (biggerThan480) {
        return <div className="home_non_mobile">
            <CallToAction />
            <Stevegary />
        </div>
    } else {
        return <div>
            <CallToAction />
            <Stevegary />
        </div>
    }
};

export default Home;