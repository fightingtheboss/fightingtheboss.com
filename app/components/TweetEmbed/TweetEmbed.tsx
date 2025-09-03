import React, { useEffect, useRef } from "react";

interface Props {
  id: string;
  className?: string;
  children?: React.ReactNode;
}

export default function Tweet({ id, className, children }: Props) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const win = window as any;

    const runLoad = () => {
      try {
        if (win.twttr && win.twttr.widgets && ref.current) {
          win.twttr.widgets.load(ref.current);
        }
      } catch (e) {
        // ignore
      }
    };

    if (win.twttr && win.twttr.widgets) {
      runLoad();
      return;
    }

    const script = document.createElement("script");
    script.src = "https://platform.twitter.com/widgets.js";
    script.async = true;
    script.charset = "utf-8";
    script.onload = runLoad;
    document.body.appendChild(script);

    return () => {
      // leave script in place (fast subsequent loads) and don't mutate global twttr
    };
  }, [id]);

  return (
    <div ref={ref} className={className}>
      <blockquote className="twitter-tweet">
        {children ?? (
          <a href={`https://twitter.com/ShopifyEng/status/${id}`}>View Tweet</a>
        )}
      </blockquote>
    </div>
  );
}
