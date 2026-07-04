import { Heading } from "@/src/components/atoms/Heading/Heading";
import type { ReferencesBlock } from "@/src/schemas/page.schema";
import styles from "./References.module.scss";

type ReferencesProps = ReferencesBlock["props"];

export function References({ title, items }: ReferencesProps) {
  return (
    <section className={styles.section} id="referencias">
      <Heading>{title}</Heading>
      <ol className={styles.list}>
        {items.map((item) => (
          <li className={styles.item} key={item.href}>
            <a className={styles.link} href={item.href} target="_blank" rel="noreferrer">
              {item.label}
            </a>
            {item.description ? <p className={styles.description}>{item.description}</p> : null}
          </li>
        ))}
      </ol>
    </section>
  );
}
