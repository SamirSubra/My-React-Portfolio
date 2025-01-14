import "@/styles/pages/ContactPage.scss";

const ContactPage = () => {
    return (
        <div id="contact-page">
            <div className="container">
                <div className="left">
                    <h2 className="title">Contactez-moi</h2>
                    <div className="infos">
                        <p className="phone">+33 (0)7 69 03 85 88</p>
                        <p className="email">samir.subra26@gmail.com</p>
                        <div className="links">
                            <a href="https://github.com/SamirSubra">GITHUB</a>
                            <a href="https://www.linkedin.com/in/samir-subra-859331258/">LINKEDIN</a>
                        </div>
                    </div>
                </div>
                <div className="right">
                    <h2 className="title">Formulaire de contact</h2>
                    <form action="">
                        <div className="row">
                            <div className="input">
                                <label htmlFor="name">Nom / prénom</label>
                                <input type="text" name="name" id="name" placeholder="Nom / prénom"/>
                            </div>
                            <div className="input">
                                <label htmlFor="name">Email</label>
                                <input type="text" name="email" id="email" placeholder="Email"/>
                            </div>
                        </div>
                        <div className="input">
                            <label htmlFor="message">Message</label>
                            <textarea name="message" id="message" placeholder="Message"></textarea>
                        </div>
                        <input type="submit" value="Envoyer" className="btn"/>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;