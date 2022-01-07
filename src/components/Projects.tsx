import type { Project } from '../pages';
import { MdArrowRightAlt } from 'react-icons/md';

import styles from './Projects.module.scss';

type ProjectsProps = {
  projects: Project[];
};

export const Projetcts: React.FC<ProjectsProps> = ({ projects }) => {
  return (
    <section id="projetos" className={styles['projects-section']}>
      <div className="center-container">
        <div className={styles['projects-section-container']}>
          <h1>Projetos</h1>

          <ul className={styles['projects-section-list']}>
            {projects.map(({ image, title, uid, url }) => (
              <li key={uid}>
                <a href={url.url} rel="noreferrer" target="_blank">
                  <img
                    src={image.url}
                    width={image.dimensions.width}
                    height={image.dimensions.height}
                    alt={image.alt}
                  />
                  <div className={styles['project-item-hover-container']}>
                    <p>{title}</p>
                    <span>
                      VER <MdArrowRightAlt size={22} />
                    </span>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
