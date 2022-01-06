import Image from 'next/image';

import styles from './About.module.scss';

export const About: React.FC = () => {
  return (
    <section id="about" className={styles['about-section']}>
      <div className="center-container">
        <div className={styles['about-section-content']}>
          <figure className={styles['about-section-photo']}>
            <Image
              src="/photo.jpg"
              width={330}
              height={330}
              alt="Flávio Santos"
            />
          </figure>
          <article className={styles['about-section-description']}>
            <h1>Sobre mim</h1>
            <p>
              Sou apaixonado pela área da tecnologia desde pequeno, mais
              especificamente em programação e desenvolvimento web.
              <br />
              <br />
              Tenho 24 anos, nascido e criado em Bauru, cidade do interior de
              São Paulo. Sou formado no curso de Ciência da Computação pela
              universidade UNIP, também possuo um diploma técnico em informática
              pela instituição Senac.
              <br />
              <br />
              Atualmente continuo estudando programação e inglês para melhorar
              minhas habilidades.
            </p>

            <a href="#" download="Currículo.pdf" target="_blank">
              DOWNLOAD CV
            </a>
          </article>
        </div>
      </div>
    </section>
  );
};
