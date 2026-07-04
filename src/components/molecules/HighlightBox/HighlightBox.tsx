import { Heading } from "@/src/components/atoms/Heading/Heading";
import styles from "./HighlightBox.module.scss";

type HighlightBoxProps = {
  title?: string;
  text: string;
};

export function HighlightBox({ title, text }: HighlightBoxProps) {
  return (
    <aside className={styles.box}>
      {title ? <Heading as="h3">{title}</Heading> : null}
      <p className={styles.text}>{text}</p>
    </aside>
  );
}
