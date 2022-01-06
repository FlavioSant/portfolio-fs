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
      aria-label="Clique para abrir/fechar o menu."
      type="button"
      title="abrir/fechar menu"
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
