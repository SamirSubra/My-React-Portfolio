import "@/styles/pages/HomePage.scss";
import phoneIcon from "@/assets/images/icons/phone.png";
import mailIcon from "@/assets/images/icons/mail.png";
import meImg from "@/assets/images/me_home.png";

const HomePage = () => {
        return (
        <div id="home-page">
            <div className="container">
                <div className="left">
                    <h1 className="title"><span>Mon nom est </span>Samir Subra</h1>
                    <p className="description">Développeur web en recherche d'opportunité</p>
                    <a href="#" className="btn">Parlez avec moi</a>

                    <div className="contact-info">
                        <div className="phone">
                            <img src={phoneIcon} alt=""/>
                            <p>+07 69 03 85 88</p>
                        </div>
                        <div className="mail">
                            <img src={mailIcon} alt=""/>
                            <p>samir.subra26@gmail.com</p>
                        </div>
                    </div>
                </div>
                <div className="image">
                    <img src={meImg} alt=""/>
                </div>
            </div>
        </div>
    );
};

export default HomePage;