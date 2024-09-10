import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Amelia Schueppert's Awesome Portfolio",
  description: "6.1040 Fall 2024",
  base: "/portfolio-aschuep/",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Blogs", link: "/blogs" },
      { text: "About Me", link: "/about" },
      { text: "Assignments", link: "/assignments" },
    ],

    sidebar: [
      {
        text: "Blogs",
        link: "/blogs",
        
      },
      {
        text: "Assignments",
        link: "/assignments",
        
      },
      {
        text: "About Me",
        link: "/about",
        
      },
    ],

    socialLinks: [{ icon: "github", link: "https://github.com/61040-fa24" }],
  },
});
