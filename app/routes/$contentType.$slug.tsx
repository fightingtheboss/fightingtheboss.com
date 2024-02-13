import {
  LoaderFunction,
  LoaderFunctionArgs,
  MetaFunction,
  json,
} from "@remix-run/node";
import { useLoaderData, useParams } from "@remix-run/react";
import { getMDXComponent } from "mdx-bundler/client/index.js";
import { useMemo } from "react";
import invariant from "tiny-invariant";

import heading from "~/components/MdxHeading/MdxHeading";
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
  const { contentType } = useParams();
  const { code, frontmatter } = useLoaderData<typeof loader>();
  const ContentComponent = useMemo(() => getMDXComponent(code), [code]);

  const skills = frontmatter.meta.skills ? (
    <h2 className="mb-4 mt-2 text-base font-medium">
      {frontmatter.meta.skills.join(" / ")}
    </h2>
  ) : null;

  const banner = frontmatter.meta.banner ? (
    <img
      src={frontmatter.meta.banner.src}
      alt={frontmatter.meta.banner.alt}
      className="mb-0 mt-4 rounded"
    />
  ) : (
    <div className="xl:mt-4 xl:block xl:h-[calc(100%_-_1rem)] xl:w-full xl:bg-black dark:xl:bg-white"></div>
  );

  const tenure = frontmatter.meta.tenure ? (
    <h2 className="mb-4 mt-2 text-base font-medium">
      {frontmatter.meta.tenure.startDate} &ndash;{" "}
      {frontmatter.meta.tenure.endDate}
    </h2>
  ) : null;

  return (
    <article className="px-4 sm:px-8 md:pt-4 xl:pt-0">
      <header className="prose mb-6 grid max-w-none grid-cols-[1fr_min(65ch,_100%)_1fr] dark:prose-invert *:col-start-2 xl:*:col-start-1">
        <div className="border-t-8 border-black dark:border-white xl:pr-8">
          <h4 className="mb-1 mt-4 text-xs font-black uppercase">
            {contentType}
          </h4>
          <h1 className="mb-2 mt-1 uppercase">{frontmatter.meta.title}</h1>
          {tenure}
          {skills}
          <h3 className="font-normal italic xl:max-w-[36ch]">
            {frontmatter.meta.description}
          </h3>
        </div>
        <div className="border-t-8 border-black dark:border-white xl:!col-start-2">
          {banner}
        </div>
      </header>
      <div className="prose grid max-w-none grid-cols-[1fr_min(65ch,_100%)_1fr] dark:prose-invert *:col-start-2 prose-headings:mb-0 prose-headings:mt-5 prose-headings:font-medium prose-h1:uppercase prose-h3:text-base prose-h3:uppercase prose-p:mb-0 prose-a:decoration-indigo-600 prose-a:decoration-2 prose-a:underline-offset-4">
        <ContentComponent
          components={{
            h1: heading("h1"),
            h2: heading("h2"),
            h3: heading("h3"),
            h4: heading("h4"),
            h5: heading("h5"),
            h6: heading("h6"),
          }}
        />
      </div>
    </article>
  );
}
