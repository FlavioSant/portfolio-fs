import Image from 'next/image';
import { useState } from 'react';
import classNames from 'classnames';
import { NavbarItem } from './NavbarItem';
import { NavbarToggler } from './NavbarToggler';

import styles from './Navbar.module.scss';

export const Navbar = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <header>
      <div
        className={classNames(
          styles['navbar-container'],
          isMobileOpen ? styles['is-menu-open'] : '',
        )}
      >
        <div className="center-container">
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
                onClick={() => setIsMobileOpen(false)}
              />
              <NavbarItem
                href="#sobre"
                label="SOBRE"
                onClick={() => setIsMobileOpen(false)}
              />
              <NavbarItem
                href="#habilidades"
                label="HABILIDADES"
                onClick={() => setIsMobileOpen(false)}
              />
              <NavbarItem
                href="#projetos"
                label="PROJETOS"
                onClick={() => setIsMobileOpen(false)}
              />
              <NavbarItem
                href="#contato"
                label="CONTATO"
                onClick={() => setIsMobileOpen(false)}
              />
            </ul>
          </nav>

          <NavbarToggler
            isMenuOpen={isMobileOpen}
            onClick={() => setIsMobileOpen(!isMobileOpen)}
          />
        </div>
      </div>
    </header>
  );
};
