import styles from "./ButtonLink.module.scss";
import type { ButtonLinkProps } from "./props";

export function ButtonLink({ href, children }: ButtonLinkProps) {
  return (
    <a className={styles.button} href={href}>
      {children}
    </a>
  );
}
