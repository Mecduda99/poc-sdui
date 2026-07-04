import { ResponsiveImage } from "@/src/components/atoms/ResponsiveImage/ResponsiveImage";
import styles from "./FigureBlock.module.scss";

type FigureBlockProps = {
  image: {
    src: string;
    alt: string;
    width?: number;
    height?: number;
  };
  caption?: string;
};

export function FigureBlock({ image, caption }: FigureBlockProps) {
  return (
    <figure className={styles.figure}>
      <ResponsiveImage {...image} />
      {caption ? <figcaption className={styles.caption}>{caption}</figcaption> : null}
    </figure>
  );
}
