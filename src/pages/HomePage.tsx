import "@/styles/pages/HomePage.scss";
import phoneIcon from "@/assets/images/icons/phone.png";
import mailIcon from "@/assets/images/icons/mail.png";
import meImg from "@/assets/images/me_home.png";

//motion
import {motion} from "framer-motion";

// variants
import {fadeIn} from "../variants";

const HomePage = () => {
        return (
        <div id="home-page" className="page">
            <div className="container">
                <motion.div

                    variants={fadeIn("up", 0.2)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{once: false, amount: 0.7}}
                    className="left">
                    <h1 className="title"><span>Mon nom est </span>Samir Subra</h1>
                    <p className="description">Développeur web en recherche d'opportunité</p>
                    <a href="/contact" className="btn">Parlez avec moi</a>

                    <div className="contact-info">
                        <div className="phone">
                            <img src={phoneIcon} alt=""/>
                            <a href="tel:07 69 03 85 88">+33 (0)7 69 03 85 88</a>
                        </div>
                        <div className="mail">
                            <img src={mailIcon} alt=""/>
                            <a href="mailto:samir.subra26@gmail.com">samir.subra26@gmail.com</a>
                        </div>
                    </div>
                </motion.div>
                <div className="image">
                    <img src={meImg} alt=""/>
                </div>
            </div>
        </div>
    );
};

export default HomePage;