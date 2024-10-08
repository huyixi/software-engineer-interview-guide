import * as path from "path";
import { defineConfig } from "rspress/config";

export default defineConfig({
  root: path.join(__dirname, "docs"),
  title: "Software Engineer Interview Dictionary",
  description: "A dictionary for Software Engineer interview.",
  icon: "/rspress-icon.png",
  logo: {
    light: "/rspress-light-logo.png",
    dark: "/rspress-dark-logo.png",
  },
  themeConfig: {
    socialLinks: [{ icon: "github", mode: "link", content: "https://github.com/huyixi/software-engineer-interview-dictionary" }],
  },
});
