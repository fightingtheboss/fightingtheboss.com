import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { cssBundleHref } from "@remix-run/css-bundle";
import { json } from "@remix-run/node";
import type { LinksFunction, LoaderFunctionArgs } from "@remix-run/node";
import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";

import {
  ThemeBody,
  ThemeHead,
  ThemeProvider,
  Theme,
  Themed,
  useTheme,
} from "~/components/ThemeProvider";
import stylesheet from "~/tailwind.css";
import { getThemeSession } from "~/utils/theme.server";

import { Switch } from "./components/ui/switch";

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const themeSession = await getThemeSession(request);

  return json({
    theme: themeSession.getTheme(),
  });
};

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
];

function App() {
  const data = useLoaderData<typeof loader>();
  const [theme, setTheme] = useTheme();

  const toggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT
    );
  };

  return (
    <html lang="en" className={`${theme ?? ""} font-sans antialiased`}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
        <ThemeHead ssrTheme={Boolean(data.theme)} />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/github-dark.min.css"
        />
      </head>
      <body>
        <ThemeBody ssrTheme={Boolean(data.theme)} />
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
                <li className="relative block px-2">
                  <div className="inline-grid grid-flow-row-dense grid-cols-none items-center gap-2">
                    <Themed
                      dark={
                        <Switch
                          id="theme"
                          className="peer col-span-1 col-start-2 row-start-1"
                          defaultChecked
                          onCheckedChange={toggleTheme}
                        />
                      }
                      light={
                        <Switch
                          id="theme"
                          className="peer col-span-1 col-start-2 row-start-1"
                          onCheckedChange={toggleTheme}
                        />
                      }
                    />
                    {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                    <label
                      htmlFor="theme"
                      className="col-span-1 col-start-1 row-start-1 basis-0"
                    >
                      <SunIcon />
                    </label>
                    {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                    <label
                      htmlFor="theme"
                      className="col-span-1 col-start-3 row-start-1 basis-0"
                    >
                      <MoonIcon />
                    </label>
                  </div>{" "}
                </li>
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

export default function AppWithProviders() {
  const data = useLoaderData<typeof loader>();

  return (
    <ThemeProvider specifiedTheme={data.theme}>
      <App />
    </ThemeProvider>
  );
}
