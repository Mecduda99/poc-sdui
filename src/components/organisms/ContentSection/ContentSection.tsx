import { Heading } from "@/src/components/atoms/Heading/Heading";
import { Paragraph } from "@/src/components/atoms/Paragraph/Paragraph";
import { FigureBlock } from "@/src/components/molecules/FigureBlock/FigureBlock";
import { HighlightBox } from "@/src/components/molecules/HighlightBox/HighlightBox";
import type { ContentBlock, ContentItem } from "@/src/schemas/page.schema";
import styles from "./ContentSection.module.scss";

type ContentSectionProps = ContentBlock["props"];

function renderContentItem(item: ContentItem, index: number) {
  switch (item.type) {
    case "subtitle":
      return <Heading as="h3">{item.text}</Heading>;
    case "paragraph":
      return <Paragraph>{item.text}</Paragraph>;
    case "image":
      return <FigureBlock image={item.image} caption={item.caption} />;
    case "highlight":
      return <HighlightBox title={item.title} text={item.text} />;
    default: {
      const _exhaustive: never = item;
      return _exhaustive;
    }
  }
}

export function ContentSection({ title, items }: ContentSectionProps) {
  return (
    <section className={styles.section} id="conteudo">
      {title ? <Heading>{title}</Heading> : null}
      <div className={styles.items}>
        {items.map((item, index) => (
          <div className={styles.item} key={`${item.type}-${index}`}>
            {renderContentItem(item, index)}
          </div>
        ))}
      </div>
    </section>
  );
}
