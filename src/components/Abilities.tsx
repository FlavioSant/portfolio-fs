import Image from 'next/image';

import styles from './Abilities.module.scss';

export const Abilities = () => {
  return (
    <section id="habilidades">
      <div className="center-container">
        <div className={styles['abilities-section-content']}>
          <h1 className="heading1 text-yellow text-center m-0">
            Minhas Habilidades
          </h1>

          <ul className={styles['abilities-section-list']}>
            <li>
              <Image
                src="/icons/reactjs.svg"
                width={80}
                height={80}
                alt="reactjs"
              />
              <p className="paragraph1 text-gray-50">React</p>
            </li>
            <li>
              <Image
                src="/icons/nextjs.svg"
                width={80}
                height={80}
                alt="nextjs"
              />
              <p className="paragraph1 text-gray-50">NextJS</p>
            </li>
            <li>
              <Image
                src="/icons/javascript.svg"
                width={80}
                height={80}
                alt="javascript"
              />
              <p className="paragraph1 text-gray-50">JavaScript</p>
            </li>
            <li>
              <Image
                src="/icons/typescript.svg"
                width={80}
                height={80}
                alt="typescript"
              />
              <p className="paragraph1 text-gray-50">Typescript</p>
            </li>
            <li>
              <Image
                src="/icons/html-5.svg"
                width={80}
                height={80}
                alt="html-5"
              />
              <p className="paragraph1 text-gray-50">HTML</p>
            </li>
            <li>
              <Image
                src="/icons/css-3.svg"
                width={80}
                height={80}
                alt="css-3"
              />
              <p className="paragraph1 text-gray-50">CSS</p>
            </li>
            <li>
              <Image src="/icons/sass.svg" width={80} height={80} alt="sass" />
              <p className="paragraph1 text-gray-50">Sass</p>
            </li>
            <li>
              <Image
                src="/icons/styled-components.svg"
                width={80}
                height={80}
                alt="styled-components"
              />
              <p className="paragraph1 text-gray-50">Styled Components</p>
            </li>
            <li>
              <Image
                src="/icons/figma.svg"
                width={80}
                height={80}
                alt="figma"
              />
              <p className="paragraph1 text-gray-50">Figma</p>
            </li>
            <li>
              <Image
                src="/icons/graphql.svg"
                width={80}
                height={80}
                alt="graphql"
              />
              <p className="paragraph1 text-gray-50">GraphQL</p>
            </li>
            <li>
              <Image
                src="/icons/docker.svg"
                width={80}
                height={80}
                alt="docker"
              />
              <p className="paragraph1 text-gray-50">Docker</p>
            </li>
            <li>
              <Image src="/icons/git.svg" width={80} height={80} alt="git" />
              <p className="paragraph1 text-gray-50">Git</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
