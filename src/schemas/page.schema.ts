import { z } from "zod";

const linkSchema = z.object({
  label: z.string().min(1),
  href: z.string().min(1),
});

const imageSchema = z.object({
  src: z.string().min(1),
  alt: z.string().min(1),
  width: z.number().positive().optional(),
  height: z.number().positive().optional(),
});

const headerBlockSchema = z.object({
  type: z.literal("header"),
  props: z.object({
    logo: linkSchema,
    navigation: z.array(linkSchema).min(1),
  }),
});

const introductionBlockSchema = z.object({
  type: z.literal("introduction"),
  props: z.object({
    eyebrow: z.string().optional(),
    title: z.string().min(1),
    summary: z.string().min(1),
    visual: z
      .object({
        label: z.string().min(1),
      })
      .optional(),
  }),
});

const contentItemSchema = z.discriminatedUnion("type", [
  z.object({
    type: z.literal("subtitle"),
    text: z.string().min(1),
  }),
  z.object({
    type: z.literal("paragraph"),
    text: z.string().min(1),
  }),
  z.object({
    type: z.literal("image"),
    image: imageSchema,
    caption: z.string().optional(),
  }),
  z.object({
    type: z.literal("highlight"),
    title: z.string().optional(),
    text: z.string().min(1),
  }),
]);

const contentBlockSchema = z.object({
  type: z.literal("content"),
  props: z.object({
    title: z.string().min(1).optional(),
    items: z.array(contentItemSchema).min(1),
  }),
});

const conclusionBlockSchema = z.object({
  type: z.literal("conclusion"),
  props: z.object({
    title: z.string().min(1),
    text: z.string().min(1),
    cta: linkSchema,
  }),
});

const referencesBlockSchema = z.object({
  type: z.literal("references"),
  props: z.object({
    title: z.string().min(1),
    items: z.array(
      z.object({
        label: z.string().min(1),
        href: z.string().min(1),
        description: z.string().optional(),
      }),
    ),
  }),
});

export const pageBlockSchema = z.discriminatedUnion("type", [
  headerBlockSchema,
  introductionBlockSchema,
  contentBlockSchema,
  conclusionBlockSchema,
  referencesBlockSchema,
]);

export const pageSchema = z.object({
  slug: z.string().min(1),
  title: z.string().min(1),
  description: z.string().optional(),
  blocks: z.array(pageBlockSchema).min(1),
});

export type PageData = z.infer<typeof pageSchema>;
export type PageBlock = z.infer<typeof pageBlockSchema>;
export type HeaderBlock = z.infer<typeof headerBlockSchema>;
export type IntroductionBlock = z.infer<typeof introductionBlockSchema>;
export type ContentBlock = z.infer<typeof contentBlockSchema>;
export type ContentItem = z.infer<typeof contentItemSchema>;
export type ConclusionBlock = z.infer<typeof conclusionBlockSchema>;
export type ReferencesBlock = z.infer<typeof referencesBlockSchema>;
