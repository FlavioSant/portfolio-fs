import styles from './NavbarItem.module.scss';

type NavbarItemProps = {
  href: string;
  label: string;
};

export const NavbarItem: React.FC<NavbarItemProps> = ({ href, label }) => {
  return (
    <li className={styles['navbar-item']}>
      <a href={href}>{label}</a>
    </li>
  );
};
