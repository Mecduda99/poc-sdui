import styles from "./Heading.module.scss";
import type { HeadingProps } from "./props";


export function Heading({ as: Component = "h2", children }: HeadingProps) {
  return <Component className={styles[Component]}>{children}</Component>;
}
