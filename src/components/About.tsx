import Image from 'next/image';

import styles from './About.module.scss';

export const About = () => {
  return (
    <section id="sobre" className="bg-gray-1000">
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
            <h1 className="heading1 text-yellow m-0">Sobre mim</h1>
            <p className="paragraph1 text-gray-50">
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
              Atualmente trabalho como desenvolvedor web e continuo estudando
              programação e inglês para melhorar minhas habilidades.
            </p>

            <a
              target="_blank"
              href="./curriculo/curriculo-flavio-santos.pdf"
              download="curriculo-flavio-santos.pdf"
              title="Clique para fazer download do currículo."
              className="px-8 py-3 bg-yellow paragraph2 text-gray-800"
            >
              DOWNLOAD CV
            </a>
          </article>
        </div>
      </div>
    </section>
  );
};
