import { MdArrowRightAlt } from 'react-icons/md';

import styles from './Projects.module.scss';

interface ProjectsProps {
  projects: Project[];
}

export const Projetcts = ({ projects }: ProjectsProps) => {
  return (
    <section id="projetos" className="bg-gray-1000">
      <div className="center-container">
        <div className={styles['projects-section-container']}>
          <h1 className="heading1 text-yellow text-center m-0">Projetos</h1>

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
                    <h3 className="heading3 text-gray-900 text-center">
                      {title}
                    </h3>
                    <span className="paragraph4 text-gray-900">
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
