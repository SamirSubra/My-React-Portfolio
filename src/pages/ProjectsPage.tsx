import "@/styles/pages/ProjectsPage.scss";
import youliBlackFullIMG from "@/assets/images/youliblack.png";
import hotelBFullIMG from "@/assets/images/hotelb.png";
import vahineFullIMG from "@/assets/images/vahine.png";
import youliBlackShortIMG from "@/assets/images/youliblack.png";
import hotelBShortIMG from "@/assets/images/hotelb_short.png";
import vahineShortIMG from "@/assets/images/vahine_short.png";
import whiteArrow from "@/assets/images/icons/white_arrow.svg";
import {useState} from "react";
import blackArrow from "@/assets/images/icons/black_arrow_white_bg.svg"

interface Project {
    company: string;
    title: string;
    description: string;
    technos: string;
    shortImageSrc: string;
    fullImageSrc: string;
    link: string;
}
const projects = [
    {
        company: 'Hotel Booking',
        title: 'Application Web + API REST',
        description: 'Hotel Booking est un projet personnel en cours (disponible sur GitHub) développé avec React et Node.js. Il s\'agit d\'une application web qui permet aux utilisateurs de réserver des hôtels et aux administrateurs de gérer les hôtels et les utilisateurs via des fonctionnalités CRUD complètes.\n' +
            '\n',
        technos: "React - Node - TypeScript - MongoDB",
        shortImageSrc: hotelBShortIMG,
        fullImageSrc: hotelBFullIMG,
        link: 'https://github.com/SamirSubra/HotelBooking',
    },
    {
        company: 'YouliBlack',
        title: 'Site web WordPress sur mesure',
        description: "Vahine Location est l'entreprise, dirigée par un indépendant spécialisé dans tout ce que touche l'automobile (permis, carte grise, location / vente de véhicules etc...). Ce site lui permet de mettre en avant ces services, mais aussi d'attirer les prospects dans ses locaux.\n" +
            "\n",
        technos: "PHP - SASS - WORDPRESS",
        shortImageSrc: youliBlackShortIMG,
        fullImageSrc: youliBlackFullIMG,
        link: 'https://youliblack.fr/',
    },
    {
        company: 'Vahine',
        title: 'Site web WordPress sur mesure',
        description: 'Youli Black représente l\'entreprise, dirigée par une coiffeuse exceptionnellement talentueuse, ayant sollicité mes compétences en vue de la conception de son site internet. Ce site web lui offre la possibilité de présenter l\'intégralité de ses services, ainsi que sa grille tarifaire, de manière élégante et efficace.\n',
        technos: "PHP - SASS - WORDPRESS",
        shortImageSrc: vahineShortIMG,
        fullImageSrc: vahineFullIMG,
        link: 'https://vahine-location.fr/',
    },
];

const ProjectsPage = () => {
    const [displayedProject, setDisplayedProject] = useState<Project>(projects[0]);

    const handleProjectClick = (project: Project) => {
        setDisplayedProject(project);
    };

    return (
        <div id="projects-page" className="page">

            <section className="section_1">
                <div className="container">
                    <h1>Mes projets recents</h1>
                    {projects.map((elt, idx)=> (
                        <div className="project" key={idx}>
                            <div className="left">
                                <p className="company">{elt.company}</p>
                                <p className="title">{elt.title}</p>
                                <a className="arrow" href={elt.link} target="_blank"><img src={blackArrow} alt=""/></a>

                            </div>
                            <img className="image" src={elt.shortImageSrc} alt="" onClick={() => handleProjectClick(elt)}/>
                        </div>))}
                </div>
            </section>
            <section className="section_2">
                <div className="container">
                    <div className="box">
                        <h2 className="title">{displayedProject.title}</h2>
                        <div className="content">
                            <img className="image" src={displayedProject.fullImageSrc} alt=""/>
                            <div className="right">
                                <p className="description">{displayedProject.description}</p>
                                <p className="technos">{displayedProject.technos}</p>
                                <a className="arrow" href={displayedProject.link} target="_blank"><img src={whiteArrow} alt=""/></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ProjectsPage;