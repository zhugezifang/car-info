import { MetadataRoute } from "next";
import { env } from "~/env.mjs";
import { locales, defaultLocale } from "~/i18n";

export default function sitemap(): MetadataRoute.Sitemap {
  const list: MetadataRoute.Sitemap = [
    {
      url: "https://www.car-infos.vercel.app",
      lastModified: new Date(),
      priority: 1,
    },
  ];
  locales.forEach((lang) => {
    if (lang === defaultLocale) return;
    list.push({
      url: `${env.SITE_URL}/${lang}`,
      lastModified: new Date(),
      priority: 0.9,
    });
  });
  return list;
}
