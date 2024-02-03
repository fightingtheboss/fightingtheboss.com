import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "Mina Mikhail" },
    {
      name: "description",
      content: "I'm Mina Mikhail, an engineering leader in Toronto",
    },
  ];
};

export default function Index() {
  return (
    <article>
      <div className="headline px-4 pt-4 sm:px-8 lg:pt-8">
        <h1 className="max-w-2xl text-3xl font-normal italic lg:max-w-none lg:text-7xl">
          I&apos;m an engineering leader, educator &amp; creative technologist
          based in Toronto.
        </h1>
        <ul className="flex py-4">
          <li className="py-2 pr-4">GitHub</li>
          <li className="px-4 py-2">Twitter</li>
          <li className="px-4 py-2">LinkedIn</li>
          <li className="py-2 pl-4">CV</li>
        </ul>
      </div>

      <div className="px-4 pb-4 sm:px-8 md:flex md:pb-8">
        <h2 className="py-4 md:w-40 md:flex-none">Work</h2>
        <ul className="text-dynamic">
          <li className="py-2">
            <h3 className="group flex items-center font-bold uppercase leading-none">
              <Link to={"/work/shopify"}>Shopify</Link>
              <span className="invisible text-nowrap pl-4 text-lg group-hover:visible">
                {"-->"}
              </span>
            </h3>
            <h4 className="text-xs md:text-sm">2018 &ndash; 2023</h4>
          </li>
          <li className="py-2">
            <h3 className="group flex items-center font-bold uppercase leading-none">
              <Link to={"/work/general-assembly"}>General Assembly</Link>
              <span className="invisible text-nowrap pl-4 text-lg group-hover:visible">
                {"-->"}
              </span>{" "}
            </h3>
            <h4 className="text-xs md:text-sm">2013 &ndash; 2018</h4>
          </li>
          <li className="py-2">
            <h3 className="group flex items-center font-bold uppercase leading-none">
              <Link to={"/work/mubi"}>MUBI</Link>
              <span className="invisible text-nowrap pl-4 text-lg group-hover:visible">
                {"-->"}
              </span>{" "}
            </h3>
            <h4 className="text-xs md:text-sm">2009 &ndash; 2012</h4>
          </li>
          <li className="py-2">
            <h3 className="group flex items-center font-bold uppercase leading-none">
              <Link to={"/work/tiffr"}>TIFFR</Link>
              <span className="invisible text-nowrap pl-4 text-lg group-hover:visible">
                {"-->"}
              </span>{" "}
            </h3>
            <h4 className="text-xs md:text-sm">2009 &ndash; present</h4>
          </li>
        </ul>
      </div>

      <div className="px-4 pb-4 sm:px-8 md:flex lg:pb-8">
        <h2 className="py-4 md:w-40 md:flex-none">Projects</h2>
        <ul className="text-dynamic">
          <li className="py-1 md:py-2">
            <h3 className="group flex items-center font-bold uppercase leading-none">
              <Link to={"projects/pegleg"}>Pegleg</Link>
              <span className="invisible text-nowrap pl-4 text-lg group-hover:visible">
                {"-->"}
              </span>{" "}
            </h3>
          </li>
          <li className="py-1 md:py-2">
            <h3 className="group flex items-center font-bold uppercase leading-none">
              <Link to={"/projects/im-so-close"}>I&apos;m So Close</Link>
              <span className="invisible text-nowrap pl-4 text-lg group-hover:visible">
                {"-->"}
              </span>{" "}
            </h3>
          </li>
          <li className="py-1 md:py-2">
            <h3 className="group flex items-center font-bold uppercase leading-none">
              <Link to={"/projects/double-feature-series"}>
                Double Feature Series
              </Link>
              <span className="invisible text-nowrap pl-4 text-lg group-hover:visible">
                {"-->"}
              </span>{" "}
            </h3>
          </li>
        </ul>
      </div>
    </article>
  );
}
