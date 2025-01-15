import "@/styles/pages/ContactPage.scss";
import { useState } from "react";
import emailjs from "@emailjs/browser";

const ContactPage = () => {
    const [formData, setFormData] = useState({
        from_name: "",
        from_email: "",
        message: "",
    });

    const [formStatus, setFormStatus] = useState(""); // Pour afficher un message de statut (succès ou erreur)
    const [isSubmitting, setIsSubmitting] = useState(false); // Pour éviter les soumissions multiples

    // Fonction pour mettre à jour les données du formulaire
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target; // Utilisation de 'name' pour la clé dynamique
        setFormData((prevData) => ({
            ...prevData,
            [name]: value, // Mise à jour correcte de la clé dynamique
        }));
    };

    // Fonction de soumission du formulaire
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Validation basique
        if (!formData.from_name || !formData.from_email || !formData.message) {
            setFormStatus("Veuillez remplir tous les champs.");
            return;
        }

        setIsSubmitting(true);
        setFormStatus("");

        // Envoi des données avec EmailJS
        emailjs
            .send(
                "service_s64sn9u", // Remplace par ton Service ID
                "template_p8v2h5s", // Remplace par ton Template ID
                formData,
                "PJD5XNBTQh7uWHxZh" // Remplace par ton User ID
            )
            .then(() => {
                setFormStatus("Message envoyé avec succès !");
                setFormData({ from_name: "", from_email: "", message: "" }); // Réinitialiser le formulaire
            })
            .catch((error) => {
                console.error("Erreur lors de l'envoi :", error);
                setFormStatus("Une erreur est survenue. Veuillez réessayer.");
            })
            .finally(() => {
                setIsSubmitting(false);
            });
    };

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
                    <form onSubmit={handleSubmit}>
                        <div className="row">
                            <div className="input">
                                <label htmlFor="name">Nom / prénom</label>
                                <input
                                    type="text"
                                    name="from_name"
                                    id="name"
                                    placeholder="Nom / prénom"
                                    value={formData.from_name}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="input">
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    name="from_email"
                                    id="email"
                                    placeholder="Email"
                                    value={formData.from_email}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className="input">
                            <label htmlFor="message">Message</label>
                            <textarea
                                name="message"
                                id="message"
                                placeholder="Message"
                                value={formData.message}
                                onChange={handleChange}
                            ></textarea>
                        </div>
                        <button type="submit" className="btn" disabled={isSubmitting}>
                            {isSubmitting ? "Envoi en cours..." : "Envoyer"}
                        </button>
                        {formStatus && <p className="status-message">{formStatus}</p>}
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
