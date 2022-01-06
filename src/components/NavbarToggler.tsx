import styles from './NavbarToggler.module.scss';

type NavbarTogglerProps = {
  isMenuOpen: boolean;
  onClick: () => void;
};

export const NavbarToggler: React.FC<NavbarTogglerProps> = ({
  isMenuOpen,
  onClick,
}) => {
  return (
    <button
      type="button"
      className={`${styles['toggler-button']} ${
        isMenuOpen ? styles['is-menu-open'] : ''
      }`}
      onClick={onClick}
    >
      <span className={styles.line} />
      <span className={styles.line} />
      <span className={styles.line} />
    </button>
  );
};
