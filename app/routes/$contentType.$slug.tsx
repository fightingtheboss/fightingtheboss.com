import {
  LoaderFunction,
  LoaderFunctionArgs,
  MetaFunction,
  json,
} from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { getMDXComponent } from "mdx-bundler/client/index.js";
import { useMemo } from "react";
import invariant from "tiny-invariant";

import { ContentType, getContent } from "~/utils/mdx.server";

export const meta: MetaFunction<typeof loader> = ({ data }) => {
  const { frontmatter } = data;

  return [
    { title: `${frontmatter.meta.title} | Mina Mikhail` },
    {
      name: "description",
      content: frontmatter.meta.description,
    },
  ];
};

export const loader: LoaderFunction = async ({
  params,
}: LoaderFunctionArgs) => {
  invariant(params.contentType, "contentType is required");
  invariant(params.slug, "slug is required");

  const content = await getContent(
    params.contentType as ContentType,
    params.slug
  );

  if (!content) {
    throw new Response("Not Found", { status: 404 });
  }

  return json(content);
};

export default function Content() {
  const { code, frontmatter } = useLoaderData<typeof loader>();
  const ContentComponent = useMemo(() => getMDXComponent(code), [code]);

  return (
    <article className="prose px-4 dark:prose-invert prose-h1:uppercase sm:px-8">
      <header>
        <h1>{frontmatter.meta.title}</h1>
      </header>
      <ContentComponent />
    </article>
  );
}
