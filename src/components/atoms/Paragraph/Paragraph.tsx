import styles from "./Paragraph.module.scss";
import type { ParagraphProps } from "./props";


export function Paragraph({ children }: ParagraphProps) {
  return <p className={styles.paragraph}>{children}</p>;
}
