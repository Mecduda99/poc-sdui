import Image from "next/image";
import styles from "./ResponsiveImage.module.scss";
import type { ResponsiveImageProps } from "./props";


export function ResponsiveImage({
  src,
  alt,
  width = 960,
  height = 540,
}: ResponsiveImageProps) {
  return (
    <Image
      className={styles.image}
      src={src}
      alt={alt}
      width={width}
      height={height}
      sizes="(min-width: 768px) 720px, 100vw"
    />
  );
}
