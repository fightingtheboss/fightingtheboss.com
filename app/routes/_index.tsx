import type { MetaFunction } from "@remix-run/node";

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
      <div className="headline px-4 pt-4 lg:pt-8">
        <h1 className="text-3xl font-normal italic lg:text-7xl">
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

      <div className="px-4 pb-4 lg:flex lg:pb-8">
        <h2 className="py-4 lg:w-40 lg:flex-initial">
          Work &ldquo;1234567890&rdquo; {"-->"}
        </h2>
        <ul className="text-3xl lg:text-8xl">
          <li className="py-2">
            <h3 className="font-bold uppercase leading-none">Shopify</h3>
            <h4 className="text-xs">2018 &ndash; 2023</h4>
          </li>
          <li className="py-2">
            <h3 className="font-bold uppercase leading-none">
              General Assembly
            </h3>
            <h4 className="text-xs">2013 &ndash; 2018</h4>
          </li>
          <li className="py-2">
            <h3 className="font-bold uppercase leading-none">MUBI</h3>
            <h4 className="text-xs">2009 &ndash; 2012</h4>
          </li>
          <li className="py-2">
            <h3 className="font-bold uppercase leading-none">TIFFR</h3>
            <h4 className="text-xs">2009 &ndash; present</h4>
          </li>
        </ul>
      </div>

      <div className="px-4 pb-4 lg:flex lg:pb-8">
        <h2 className="py-4 lg:w-40 lg:flex-initial">Projects</h2>
        <ul className="text-3xl lg:text-8xl">
          <li className="py-1 lg:py-2">
            <h3 className="font-bold uppercase leading-none">Pegleg</h3>
          </li>
          <li className="py-1 lg:py-2">
            <h3 className="font-bold uppercase leading-none">
              I&apos;m So Close
            </h3>
          </li>
          <li className="py-1 lg:py-2">
            <h3 className="font-bold uppercase leading-none">
              Double Feature Series
            </h3>
          </li>
        </ul>
      </div>
    </article>
  );
}
