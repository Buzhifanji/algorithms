import { searchPlugin } from "@vuepress/plugin-search";
import { defineUserConfig } from "vuepress";
import theme from "./theme";

export default defineUserConfig({
  lang: "zh-CN",
  title: "algorithms",
  description: "算法导论与JavaScript实现",
  theme,
  base: "/algorithms/",
  plugins: [
    searchPlugin({
      // 你的选项
    }),
  ],
});
