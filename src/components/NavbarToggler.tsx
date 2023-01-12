import classNames from 'classnames';
import styles from './NavbarToggler.module.scss';

interface NavbarTogglerProps {
  isMenuOpen: boolean;
  onClick: () => void;
}

export const NavbarToggler = ({ isMenuOpen, onClick }: NavbarTogglerProps) => {
  return (
    <button
      aria-label="Clique para abrir/fechar o menu."
      type="button"
      title="abrir/fechar menu"
      onClick={onClick}
      className={classNames(
        styles['toggler-button'],
        isMenuOpen ? styles['is-menu-open'] : '',
      )}
    >
      <span className={classNames(styles['line'], 'bg-gray-100')} />
      <span className={classNames(styles['line'], 'bg-gray-100')} />
      <span className={classNames(styles['line'], 'bg-gray-100')} />
    </button>
  );
};
