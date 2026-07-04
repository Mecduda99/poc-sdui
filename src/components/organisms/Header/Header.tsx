import { NavMenu } from "@/src/components/molecules/NavMenu/NavMenu";
import type { HeaderBlock } from "@/src/schemas/page.schema";
import styles from "./Header.module.scss";

type HeaderProps = HeaderBlock["props"];

export function Header({ logo, navigation }: HeaderProps) {
  return (
    <header className={styles.header}>
      <a className={styles.logo} href={logo.href}>
        {logo.label}
      </a>
      <NavMenu items={navigation} />
    </header>
  );
}
