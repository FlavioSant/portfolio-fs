import styles from './NavbarItem.module.scss';

interface NavbarItemProps {
  href: string;
  label: string;
  onClick: () => void;
}

export const NavbarItem = ({ href, label, onClick }: NavbarItemProps) => {
  return (
    <li className={styles['navbar-item']} onClick={onClick}>
      <a href={href} className="paragraph1 text-gray-50 w-full py-2">
        {label}
      </a>
    </li>
  );
};
