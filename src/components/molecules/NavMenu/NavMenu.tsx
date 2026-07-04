import styles from "./NavMenu.module.scss";

type NavItem = {
  label: string;
  href: string;
};

type NavMenuProps = {
  items: NavItem[];
};

export function NavMenu({ items }: NavMenuProps) {
  return (
    <nav className={styles.nav} aria-label="Navegacao principal">
      {items.map((item) => (
        <a className={styles.link} href={item.href} key={item.href}>
          {item.label}
        </a>
      ))}
    </nav>
  );
}
