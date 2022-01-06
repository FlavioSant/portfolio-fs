import Image from 'next/image';
import { MdArrowRightAlt } from 'react-icons/md';

import styles from './Projects.module.scss';

export const Projetcts: React.FC = () => {
  return (
    <section id="projetos" className={styles['projects-section']}>
      <div className="center-container">
        <div className={styles['projects-section-container']}>
          <h1>Projetos</h1>

          <ul className={styles['projects-section-list']}>
            <li>
              <a
                href="https://githubexplorerfs.vercel.app/"
                rel="noreferrer"
                target="_blank"
              >
                <Image
                  src="/thumbnails/github-explorer.jpg"
                  width={280}
                  height={200}
                  alt="GitHub Explorer"
                />
                <div className={styles['project-item-hover-container']}>
                  <p>GitHub Explorer</p>
                  <span>
                    VER <MdArrowRightAlt size={22} />
                  </span>
                </div>
              </a>
            </li>
            <li>
              <a
                href="https://moveitfs.vercel.app/"
                rel="noreferrer"
                target="_blank"
              >
                <Image
                  src="/thumbnails/moveit.jpg"
                  width={280}
                  height={200}
                  alt="Move.it"
                />
                <div className={styles['project-item-hover-container']}>
                  <p>Move.it</p>
                  <span>
                    VER <MdArrowRightAlt size={22} />
                  </span>
                </div>
              </a>
            </li>
            <li>
              <a
                href="https://react-clima-tempo-fs.vercel.app/"
                rel="noreferrer"
                target="_blank"
              >
                <Image
                  src="/thumbnails/react-clima-tempo.jpg"
                  width={280}
                  height={200}
                  alt="React Clima Tempo"
                />
                <div className={styles['project-item-hover-container']}>
                  <p>React Clima Tempo</p>
                  <span>
                    VER <MdArrowRightAlt size={22} />
                  </span>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
