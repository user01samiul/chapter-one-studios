import type { MetadataRoute } from "next";
import { siteDescription, siteName } from "./seo";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteName,
    short_name: "Chapter One",
    description: siteDescription,
    start_url: "/",
    display: "standalone",
    background_color: "#f8f5ef",
    theme_color: "#b38b4b",
    icons: [
      {
        src: "/Landing%20Page/Logo_s/2.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
