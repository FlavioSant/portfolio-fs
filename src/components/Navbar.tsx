import Image from 'next/image';
import { useState } from 'react';
import { NavbarItem } from './NavbarItem';
import { NavbarToggler } from './NavbarToggler';

import styles from './Navbar.module.scss';

export const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header>
      <div className={`center-container ${styles['navbar-container']}`}>
        <figure className={styles['navbar-logo']}>
          <Image src="/logo.svg" width={70} height={70} alt="Logo" />
        </figure>

        <div
          className={`${styles['navbar-nav-overlay']} ${
            isMenuOpen ? styles['is-menu-open'] : ''
          }`}
        >
          <nav className={styles['nav-container']}>
            <ul>
              <NavbarItem href="#hero" label="HOME" />
              <NavbarItem href="#about" label="SOBRE" />
              <NavbarItem href="#" label="HABILIDADES" />
              <NavbarItem href="#" label="PROJETOS" />
              <NavbarItem href="#" label="CONTATO" />
            </ul>
          </nav>
        </div>

        <NavbarToggler
          isMenuOpen={isMenuOpen}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        />
      </div>
    </header>
  );
};
