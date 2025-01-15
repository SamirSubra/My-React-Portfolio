import "@/styles/pages/AboutPage.scss";
import meImg from "@/assets/images/me_about.png";
import phoneIcon from "@/assets/images/icons/phone.png";
import mailIcon from "@/assets/images/icons/mail.png";
import personIcon from "@/assets/images/icons/person.png";
import locationIcon from "@/assets/images/icons/location.png";
import tsIcon from "@/assets/images/icons/typescript.png";
import sassIcon from "@/assets/images/icons/sass.png";
import reactIcon from "@/assets/images/icons/react.png";
import nodeIcon from "@/assets/images/icons/node.png";
import mysqlIcon from "@/assets/images/icons/mysql.png";
import gitIcon from "@/assets/images/icons/git.png";
import Experience from "../assets/components/Experience.tsx";
import cvPDF from "@/assets/files/CV_Samir_SUBRA.pdf"

const AboutPage = () => {
    return (
        <div id="about-page">
                <section className="section_1">
                    <div className="container">

                    <h1>Qui suis-je</h1>
                    <div className="content">
                        <div className="left">
                            <img src={meImg} alt=""/>
                            <h2 className="name"> Samir Subra </h2>
                            <p className="description">Développeur web</p>
                            <a href={cvPDF} className="link-btn">Télécharger mon CV</a>
                        </div>
                        <div className="right">
                            <div className="contact-info">
                                <div className="phone">
                                    <img src={phoneIcon} alt=""/>
                                    <p>+07 69 03 85 88</p>
                                </div>
                                <div className="mail">
                                    <img src={mailIcon} alt=""/>
                                    <p>samir.subra26@gmail.com</p>
                                </div>
                                <div className="age">
                                    <img src={personIcon} alt=""/>
                                    <p>22 ans</p>
                                </div>
                                <div className="location">
                                    <img src={locationIcon} alt=""/>
                                    <p>Villeurbanne</p>
                                </div>
                            </div>
                            <div className="description">
                                Je suis samir SUBRA, passionné par le secteur du développement web. J’ai effectué 3 ans
                                d’études dans l’IUT de Vélizy en île-de-France. Au cours de ces 3 ans d’études, je me
                                suis
                                pris de passion pour le web. Je me suis lance pLusieurs petits projets perso & pro. J’ai
                                egalement effectué 2 stages différents en tant que ciéveloppeur full-stack!
                            </div>
                            <div className="technos">
                                <p>Technos que je maîtrise actuellement (ce portfolio utilise actuellement les 4 premiers outils de la liste)</p>
                                <ul className="technos-list">
                                    <li className="technos-list__item"><img src={tsIcon} alt=""/></li>
                                    <li className="technos-list__item"><img src={sassIcon} alt=""/></li>
                                    <li className="technos-list__item"><img src={reactIcon} alt=""/></li>
                                    <li className="technos-list__item"><img src={gitIcon} alt=""/></li>
                                    <li className="technos-list__item"><img src={nodeIcon} alt=""/></li>
                                    <li className="technos-list__item"><img src={mysqlIcon} alt=""/></li>
                                </ul>
                            </div>
                            <div className="quote">
                                <p className={"text"}>Ce que j’apprécie dans le développement web, c’est la combinaison
                                    harmonieuse entre la rigueur algorithmique et logique, et l’exploration créative
                                    qu’il
                                    offre.</p>
                            </div>
                        </div>
                    </div>
                    </div>
                </section>
                <section className="section_2">
                    <div className="container">
                        <div className="left">
                            <h2 className="title">Mon expérience</h2>
                            <p className="description">Au cours de mes 3 ans d’études, j’ai pu acquérir pas mal d’expérience dans le web au sein de mon université, mais surtout en dehors !</p>
                            <a href={cvPDF} className="btn">Télécharger mon CV</a>
                        </div>
                        <div className="right">
                            <Experience date={"09/2024 - 10/2024"} company={"Vahine"} position={"Développeur full-stack"}/>
                            <Experience date={"03/2024 - 07/2024"} company={"LesBonsTech (agence web)"} position={"Stage Développeur full-stack"}/>
                            <Experience date={"05/2023 - 07/2023"} company={"ShopRadar"} position={"Stage Développeur full-stack"}/>
                            <Experience date={"05/2023 - 06/2023"} company={"YouliBlack"} position={"Développeur full-stack"}/>
                        </div>
                    </div>
                </section>
            </div>
    );
};

export default AboutPage;