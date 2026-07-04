import { Conclusion } from "@/src/components/organisms/Conclusion/Conclusion";
import { ContentSection } from "@/src/components/organisms/ContentSection/ContentSection";
import { Header } from "@/src/components/organisms/Header/Header";
import { Introduction } from "@/src/components/organisms/Introduction/Introduction";
import { References } from "@/src/components/organisms/References/References";
import {RendererProps} from "@/src/components/Renderer/props";
import styles from "@/src/components/Renderer/Renderer.module.scss";



export function Renderer({ blocks }: RendererProps) {
  return (
    <div className={styles.page}>
      {blocks.map((block, index) => {
        switch (block.type) {
          case "header":
            return <Header key={`${block.type}-${index}`} {...block.props} />;
          case "introduction":
            return <Introduction key={`${block.type}-${index}`} {...block.props} />;
          case "content":
            return <ContentSection key={`${block.type}-${index}`} {...block.props} />;
          case "conclusion":
            return <Conclusion key={`${block.type}-${index}`} {...block.props} />;
          case "references":
            return <References key={`${block.type}-${index}`} {...block.props} />;
          default: {
            const _exhaustive: never = block;
            return _exhaustive;
          }
        }
      })}
    </div>
  );
}
