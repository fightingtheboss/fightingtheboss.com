import {
  GitHubLogoIcon,
  TwitterLogoIcon,
  LinkedInLogoIcon,
  FileTextIcon,
} from "@radix-ui/react-icons";
import type { LoaderFunction, MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";

import { ContentListingItem, getContentListing } from "~/utils/mdx.server";

export const meta: MetaFunction = () => {
  return [
    { title: "Mina Mikhail" },
    {
      name: "description",
      content: "I'm Mina Mikhail, an engineering leader in Toronto",
    },
  ];
};

export const loader: LoaderFunction = async () => {
  const workListing = await getContentListing("work");
  const projectListing = await getContentListing("projects");

  return json({ work: workListing, projects: projectListing });
};

export default function Index() {
  const { work, projects } = useLoaderData<typeof loader>();

  return (
    <article>
      <div className="headline px-4 pt-4 sm:px-8 lg:pt-8">
        <h1 className="max-w-2xl text-3xl font-normal italic lg:max-w-none lg:text-7xl">
          I&apos;m an engineering leader, educator &amp; creative technologist
          based in Toronto.
        </h1>
        <ul className="flex py-4">
          <li className="py-2 pr-4">
            <Link
              to={"https://github.com/fightingtheboss"}
              title="GitHub"
              target="_blank"
              rel="noreferrer"
            >
              <GitHubLogoIcon className="scale-150" />
            </Link>
          </li>
          <li className="px-4 py-2">
            <Link
              to={"https://twitter.com/fightingtheboss"}
              title="Twitter"
              target="_blank"
              rel="noreferrer"
            >
              <TwitterLogoIcon className="scale-150" />
            </Link>
          </li>
          <li className="px-4 py-2">
            <Link
              to={"https://www.linkedin.com/in/minamikhail/"}
              title="LinkedIn"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInLogoIcon className="scale-150" />
            </Link>
          </li>
          <li className="py-2 pl-4">
            <Link
              to={
                "https://fightingtheboss.com/pdf/mina_mikhail_resume_2024.pdf"
              }
              title="Resume / CV"
            >
              <FileTextIcon className="scale-150" />
            </Link>
          </li>
        </ul>
      </div>

      <div className="px-4 pb-4 sm:px-8 md:flex md:pb-8">
        <h2 className="py-4 md:w-40 md:flex-none">Work</h2>
        <ul className="text-dynamic">
          {work.map((work: ContentListingItem) => (
            <li key={work.slug} className="py-2">
              <h3 className="group flex items-center font-bold uppercase leading-none">
                <Link
                  to={`/work/${work.slug}`}
                  className="link-hover transition hover:animate-link-hover-in hover:drop-shadow-[1px_1px_0px_rgba(0,0,0,.25)] active:-translate-y-1 active:scale-110 dark:hover:drop-shadow-[1px_1px_0px_rgba(255,255,255,.85)]"
                >
                  {work.frontmatter.meta.title}
                </Link>
                <span className="invisible text-nowrap pl-4 text-lg group-hover:visible group-active:visible">
                  {"-->"}
                </span>
              </h3>
              <h4 className="text-xs md:text-sm">
                {work.frontmatter.meta.tenure.startYear} &ndash;{" "}
                {work.frontmatter.meta.tenure.endYear}
              </h4>
            </li>
          ))}
        </ul>
      </div>

      <div className="px-4 pb-4 sm:px-8 md:flex lg:pb-8">
        <h2 className="py-4 md:w-40 md:flex-none">Projects</h2>
        <ul className="text-dynamic">
          {projects.map((project: ContentListingItem) => (
            <li key={project.slug} className="py-2">
              <h3 className="group flex items-center font-bold uppercase leading-none">
                <Link
                  to={`/projects/${project.slug}`}
                  className="link-hover transition hover:animate-link-hover-in hover:drop-shadow-[1px_1px_0px_rgba(0,0,0,.25)] active:-translate-y-1 active:scale-110 dark:hover:drop-shadow-[1px_1px_0px_rgba(255,255,255,.85)]"
                >
                  {project.frontmatter.meta.title}
                </Link>
                <span className="invisible text-nowrap pl-4 text-lg group-hover:visible group-active:visible">
                  {"-->"}
                </span>
              </h3>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
