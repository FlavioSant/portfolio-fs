import Image from 'next/image';
import { FiFacebook, FiInstagram, FiGithub, FiLinkedin } from 'react-icons/fi';

import styles from './Hero.module.scss';

export const Hero: React.FC = () => {
  return (
    <section id="hero">
      <div className="center-container">
        <div className={styles['hero-section-content']}>
          <article className={styles['hero-section-description']}>
            <h1>
              Olá, <br /> me chamo <span>Flávio Santos.</span>
            </h1>
            <span className={styles['sub-title']}>
              Desenvolvedor Front-end.
            </span>
            <p>
              Sempre gostei muito da área de tecnologia, me identifiquei melhor
              como desenvolvedor front-end, pois gosto de criar novos layouts e
              trabalhar com a parte visual das aplicações.
            </p>

            <div className={styles['hero-section-description-icons']}>
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

          <figure className={styles['hero-section-ilustration']}>
            <Image
              src="/ilustration.svg"
              width={454}
              height={411}
              alt="Ilustração de um programador"
              layout="intrinsic"
            />
          </figure>
        </div>
      </div>
    </section>
  );
};
