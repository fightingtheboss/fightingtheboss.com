import { cssBundleHref } from "@remix-run/css-bundle";
import type { LinksFunction } from "@remix-run/node";
import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import stylesheet from "~/tailwind.css";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
];

export default function App() {
  return (
    <html lang="en" className="dark font-sans antialiased">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/github-dark.min.css"
        />
      </head>
      <body className=" dark:bg-black dark:text-white">
        <header className="flex px-2 py-4 sm:px-4">
          <div className="flex-auto px-2 sm:px-4">
            <h1 className="text-2xl font-bold leading-5 tracking-widest">
              <Link to={"/"} className="link-hover">
                MINA MIKHAIL
              </Link>
            </h1>
          </div>
          <div className="flex-auto px-2 sm:px-4">
            <nav>
              <ul className="flex justify-end">
                <li className="relative block px-2">About</li>
                <li className="relative block px-2">Projects</li>
                <li className="relative block px-2">Blog</li>
              </ul>
            </nav>
          </div>
        </header>
        <main className="pb-8">
          <Outlet />
        </main>
        <footer>
          <div className="px-4 py-4 text-right sm:px-8">
            <p className="text-xs">
              &copy; {new Date().getFullYear()} Mina Mikhail. All rights
              reserved.
            </p>
          </div>
        </footer>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
