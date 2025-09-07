'use client'

import { useEffect } from "react";

export default function SwaggerPage() {
  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://unpkg.com/swagger-ui-dist/swagger-ui.css";
    document.head.appendChild(link);

    const script = document.createElement("script");
    script.src = "https://unpkg.com/swagger-ui-dist/swagger-ui-bundle.js";
    script.onload = () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (window as any).ui = (window as any).SwaggerUIBundle({
        url: "/api/swagger",
        dom_id: "#swagger-ui",
      });
    };
    document.body.appendChild(script);

    return () => {
      document.head.removeChild(link);
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <div id="swagger-ui" />
    </div>
  );
}
