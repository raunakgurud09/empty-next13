import { SiteConfig } from "@/types";

export const siteConfig: SiteConfig = {
  name: "RaunakGurud",
  description: "| FullStack Developer",
  // url: "https://raunakgurud.com",
  url: process.env.NODE_ENV === "development" ?"http://localhost:3000" : "https://raunakgurud.vercel.app",
  ogImage: "https://tx.shadcn.com/og.jpg",
  links: {
    twitter: "https://twitter.com/RaunakGurud",
    github: "https://github.com/raunakgurud09",
  },
};
