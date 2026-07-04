import { ButtonLink } from "@/src/components/atoms/ButtonLink/ButtonLink";
import { Heading } from "@/src/components/atoms/Heading/Heading";
import { Paragraph } from "@/src/components/atoms/Paragraph/Paragraph";
import type { ConclusionBlock } from "@/src/schemas/page.schema";
import styles from "./Conclusion.module.scss";

type ConclusionProps = ConclusionBlock["props"];

export function Conclusion({ title, text, cta }: ConclusionProps) {
  return (
    <section className={styles.section}>
      <div className={styles.copy}>
        <Heading>{title}</Heading>
        <Paragraph>{text}</Paragraph>
      </div>
      <ButtonLink href={cta.href}>{cta.label}</ButtonLink>
    </section>
  );
}
