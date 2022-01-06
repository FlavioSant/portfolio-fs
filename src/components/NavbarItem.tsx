import styles from './NavbarItem.module.scss';

type NavbarItemProps = {
  href: string;
  label: string;
  onClick: () => void;
};

export const NavbarItem: React.FC<NavbarItemProps> = ({
  href,
  label,
  onClick,
}) => {
  return (
    <li className={styles['navbar-item']} onClick={onClick}>
      <a href={href}>{label}</a>
    </li>
  );
};
