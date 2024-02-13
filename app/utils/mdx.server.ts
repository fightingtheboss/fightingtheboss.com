import { readFile, readdir } from "fs/promises";
import { resolve } from "path";

import { bundleMDX } from "mdx-bundler";
import { sortBy } from "sort-by-typescript";

export type ContentType = "work" | "projects" | "posts" | "*";
export interface ContentListingItem {
  slug: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  frontmatter: Record<string, any>;
}
export type ContentListing = ContentListingItem[];

/**
 * Get all the slugs for a given content type
 * @param contentType The content type to get the slugs for
 */
export async function getSlugs(contentType: ContentType) {
  const path =
    contentType === "*"
      ? resolve(process.cwd(), "app", "content")
      : resolve(process.cwd(), "app", "content", contentType);

  const files = await readdir(path, { recursive: contentType === "*" });
  return files.map((file) => file.replace(/\.mdx/, ""));
}

/**
 * Get all the frontmatter for a given content type
 * @param contentType The content type to fetch
 */
export async function getContentListing(
  contentType: ContentType
): Promise<ContentListing> {
  const slugs = await getSlugs(contentType);
  const content = await Promise.all(
    slugs.map(async (slug) => {
      const { frontmatter } = await getContent(contentType, slug);
      return {
        slug,
        frontmatter,
      };
    })
  );

  return content.sort(sortBy("frontmatter.content_type_order"));
}

/**
 * Get the React component and frontmatter from an MDX file for a given slug
 * @param slug The slug of the MDX file to get
 */
export async function getContent(contentType: ContentType, slug: string) {
  const source = await readFile(
    resolve(process.cwd(), "app", "content", contentType, `${slug}.mdx`),
    "utf8"
  );

  const [rehypeHighlight, rehypeSlug, remarkGfm] = await Promise.all([
    import("rehype-highlight").then((mod) => mod.default),
    import("rehype-slug").then((mod) => mod.default),
    import("remark-gfm").then((mod) => mod.default),
  ]);

  const { code, frontmatter } = await bundleMDX({
    source,
    cwd: process.cwd(),
    mdxOptions: (options) => {
      options.remarkPlugins = [...(options.remarkPlugins ?? []), remarkGfm];
      options.rehypePlugins = [
        ...(options.rehypePlugins ?? []),
        rehypeSlug,
        rehypeHighlight,
      ];
      return options;
    },
  });

  return {
    code,
    frontmatter,
  };
}
