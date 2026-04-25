import type { MetadataRoute } from "next";
import { absoluteUrl, openGraphImage, siteUrl } from "./seo";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
      images: [
        absoluteUrl(openGraphImage),
        absoluteUrl(
          "/Landing%20Page/Photo_s%20To%20Use/Wedding%201_%20Fatima%20%26%20Mark/DSC01580.jpg"
        ),
        absoluteUrl(
          "/Landing%20Page/Photo_s%20To%20Use/Wedding%202_%20Saed%20%26%20Nour/MUS04371.jpg"
        ),
        absoluteUrl(
          "/Landing%20Page/Photo_s%20To%20Use/Wedding%203%20_%20Saja%20and%20Ahmed/Photos/DSCF0352-Enhanced-NR.jpg"
        ),
      ],
    },
  ];
}
