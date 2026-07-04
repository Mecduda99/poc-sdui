import { Heading } from "@/src/components/atoms/Heading/Heading";
import { Paragraph } from "@/src/components/atoms/Paragraph/Paragraph";
import type { IntroductionBlock } from "@/src/schemas/page.schema";
import styles from "./Introduction.module.scss";

type IntroductionProps = IntroductionBlock["props"];

export function Introduction({ eyebrow, title, summary, visual }: IntroductionProps) {
  return (
    <section className={styles.section} id="introducao">
      <div className={styles.copy}>
        {eyebrow ? <span className={styles.eyebrow}>{eyebrow}</span> : null}
        <Heading as="h1">{title}</Heading>
        <Paragraph>{summary}</Paragraph>
      </div>
      {visual ? (
        <div className={styles.visual} aria-label={visual.label}>
          <span>{visual.label}</span>
        </div>
      ) : null}
    </section>
  );
}
