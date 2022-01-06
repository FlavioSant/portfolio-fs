import Image from 'next/image';

import styles from './Abilities.module.scss';

export const Abilities: React.FC = () => {
  return (
    <section id="habilidades">
      <div className="center-container">
        <div className={styles['abilities-section-content']}>
          <h1>Minhas Habilidades</h1>

          <ul className={styles['abilities-section-list']}>
            <li>
              <Image
                src="/icons/html-5.svg"
                width={80}
                height={80}
                alt="html-5"
              />
              <p>HTML</p>
            </li>
            <li>
              <Image
                src="/icons/css-3.svg"
                width={80}
                height={80}
                alt="css-3"
              />
              <p>CSS</p>
            </li>
            <li>
              <Image
                src="/icons/javascript.svg"
                width={80}
                height={80}
                alt="javascript"
              />
              <p>JavaScript</p>
            </li>
            <li>
              <Image
                src="/icons/typescript.svg"
                width={80}
                height={80}
                alt="typescript"
              />
              <p>TypeScript</p>
            </li>
            <li>
              <Image
                src="/icons/nextjs.svg"
                width={80}
                height={80}
                alt="nextjs"
              />
              <p>NextJs</p>
            </li>
            <li>
              <Image
                src="/icons/reactjs.svg"
                width={80}
                height={80}
                alt="reactjs"
              />
              <p>ReactJs</p>
            </li>
            <li>
              <Image src="/icons/sass.svg" width={80} height={80} alt="sass" />
              <p>Sass</p>
            </li>
            <li>
              <Image
                src="/icons/styled-components.svg"
                width={80}
                height={80}
                alt="styled-components"
              />
              <p>Styled Components</p>
            </li>
            <li>
              <Image
                src="/icons/figma.svg"
                width={80}
                height={80}
                alt="figma"
              />
              <p>Figma</p>
            </li>
            <li>
              <Image
                src="/icons/graphql.svg"
                width={80}
                height={80}
                alt="graphql"
              />
              <p>GraphQL</p>
            </li>
            <li>
              <Image
                src="/icons/docker.svg"
                width={80}
                height={80}
                alt="docker"
              />
              <p>Docker</p>
            </li>
            <li>
              <Image src="/icons/git.svg" width={80} height={80} alt="git" />
              <p>Git</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
