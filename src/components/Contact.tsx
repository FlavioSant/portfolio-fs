import {
  FiFacebook,
  FiGithub,
  FiInstagram,
  FiLinkedin,
  FiMail,
  FiPhone,
} from 'react-icons/fi';
import styles from './Contact.module.scss';
import { ContactForm } from './ContactForm';

export const Contact: React.FC = () => {
  return (
    <section id="contato">
      <div className="center-container">
        <div className={styles['contact-section-content']}>
          <article className={styles['contact-section-description']}>
            <h1>Contato</h1>
            <p>Entre em contato, envie-me uma mensagem!</p>

            <div>
              <a href="https://api.whatsapp.com/send?l=pt_BR&phone=5514991179995&text=Olá, estou entrando em contato pelo seu portfólio.">
                <FiPhone size={18} />
                +55 (14) 99117-9995
              </a>
              <a href="mailto:flaviohenrique_santos@hotmail.com?subject=Contato">
                <FiMail size={18} />
                flaviohenrique_santos@hotmail.com
              </a>
            </div>

            <div className={styles['contact-section-description-icons']}>
              <a
                href="https://www.facebook.com/flavio.santos.9887"
                rel="noreferrer"
                target="_blank"
                title="Facebok"
              >
                <FiFacebook size={22} />
              </a>
              <a
                href="https://www.instagram.com/flavio_santos_"
                rel="noreferrer"
                target="_blank"
                title="Instagram"
              >
                <FiInstagram size={22} />
              </a>
              <a
                href="https://github.com/FlavioSant"
                rel="noreferrer"
                target="_blank"
                title="GitHub"
              >
                <FiGithub size={22} />
              </a>
              <a
                href="https://www.linkedin.com/in/flavio-santos-75487a164"
                rel="noreferrer"
                target="_blank"
                title="Linkedin"
              >
                <FiLinkedin size={22} />
              </a>
            </div>
          </article>

          <ContactForm />
        </div>
      </div>
    </section>
  );
};
