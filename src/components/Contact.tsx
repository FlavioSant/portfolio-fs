import {
  FiFacebook,
  FiGithub,
  FiInstagram,
  FiLinkedin,
  FiMail,
} from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { ContactForm } from './ContactForm';

import styles from './Contact.module.scss';

export const Contact = () => {
  return (
    <section id="contato">
      <div className="center-container">
        <div className={styles['contact-section-content']}>
          <article className={styles['contact-section-description']}>
            <h1 className="heading1 text-yellow m-0">Contato</h1>
            <p className="paragraph1 text-gray-50">
              Entre em contato, envie-me uma mensagem!
            </p>

            <div>
              <a
                className="text-gray-50"
                aria-label="Entre em contato pelo whatsapp."
                href="https://api.whatsapp.com/send?l=pt_BR&phone=5514991179995&text=Olá, estou entrando em contato pelo seu portfólio."
                title="Clique para entrar em contato pelo whatsapp."
              >
                <FaWhatsapp size={20} />
                +55 (14) 99117-9995
              </a>
              <a
                className="text-gray-50 mt-3"
                aria-label="Entre em contato por email"
                href="mailto:flaviohenrique_santos@hotmail.com"
                title="Clique para entrar em contato por email"
              >
                <FiMail size={20} />
                flaviohenrique_santos@hotmail.com
              </a>
            </div>

            <div className={styles['contact-section-description-icons']}>
              <a
                href="https://www.facebook.com/flavio.santos.9887"
                rel="noreferrer"
                target="_blank"
                title="Facebok"
                className="text-gray-50"
              >
                <FiFacebook size={24} />
              </a>
              <a
                href="https://www.instagram.com/flavio_santos_"
                rel="noreferrer"
                target="_blank"
                title="Instagram"
                className="text-gray-50"
              >
                <FiInstagram size={24} />
              </a>
              <a
                href="https://github.com/FlavioSant"
                rel="noreferrer"
                target="_blank"
                title="GitHub"
                className="text-gray-50"
              >
                <FiGithub size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/flavio-santos-75487a164"
                rel="noreferrer"
                target="_blank"
                title="Linkedin"
                className="text-gray-50"
              >
                <FiLinkedin size={24} />
              </a>
            </div>
          </article>

          <ContactForm />
        </div>
      </div>
    </section>
  );
};
