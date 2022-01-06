import Image from 'next/image';
import { useState } from 'react';
import { NavbarItem } from './NavbarItem';
import { NavbarToggler } from './NavbarToggler';

import styles from './Navbar.module.scss';

export const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header>
      <div
        className={`${styles['navbar-container']} ${
          isMenuOpen ? styles['is-menu-open'] : ''
        }`}
      >
        <div className={`center-container`}>
          <nav className={styles['navbar-navigation-container']}>
            <figure
              className={styles['navbar-logo']}
              onClick={() => scrollTo({ top: 0 })}
            >
              <Image
                src="/logo.svg"
                width={70}
                height={70}
                alt="Logo"
                title="Flávio Santos | Dev"
              />
            </figure>

            <ul>
              <NavbarItem
                href="#home"
                label="HOME"
                onClick={() => setIsMenuOpen(false)}
              />
              <NavbarItem
                href="#sobre"
                label="SOBRE"
                onClick={() => setIsMenuOpen(false)}
              />
              <NavbarItem
                href="#habilidades"
                label="HABILIDADES"
                onClick={() => setIsMenuOpen(false)}
              />
              <NavbarItem
                href="#projetos"
                label="PROJETOS"
                onClick={() => setIsMenuOpen(false)}
              />
              <NavbarItem
                href="#contato"
                label="CONTATO"
                onClick={() => setIsMenuOpen(false)}
              />
            </ul>
          </nav>

          <NavbarToggler
            isMenuOpen={isMenuOpen}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          />
        </div>
      </div>
    </header>
  );
};
