import linkedinIcon from "@/assets/images/linkedin.png";
import githubIcon from "@/assets/images/github.png";
import "@/styles/layouts/Menu.scss";
import {useEffect, useState} from "react";

const Menu = () => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if(isOpen){
           document.body.style.overflowY = "hidden";
        }else{
            document.body.style.overflowY = "auto";
        }
    }, [isOpen]);
    return (
        <div className="menu">
            <div className={isOpen? "side-menu active" : "side-menu" }>
                <div className="top">
                    <p className="title">Samir subra</p>
                    <ul className="links-list">
                        <li className="links-list__item"><a href="/">Accueil</a></li>
                        <li className="links-list__item"><a href="/about">A Propos</a></li>
                        <li className="links-list__item"><a href="/projects">Projets</a></li>
                        <li className="links-list__item"><a href="/contact">Contact</a></li>
                    </ul>
                </div>
                <div className="bottom">
                    <div className="socials">
                        <a href="https://www.linkedin.com/in/samir-subra-859331258/"><img src={linkedinIcon}
                                                                                          alt="Linkedin icon"/></a>
                        <a href="https://github.com/SamirSubra"><img src={githubIcon} alt="Github icon"/></a>
                    </div>

                    <p className="copyright">
                        Copyright ©2024 Samir SUBRA. All right reserved.
                    </p>
                </div>
            </div>
            <button className={isOpen? "burger-menu active" : "burger-menu" } onClick={() => setIsOpen(!isOpen)}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </button>
        </div>
    );
};

export default Menu;