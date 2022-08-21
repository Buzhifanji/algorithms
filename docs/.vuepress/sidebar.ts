import { SidebarItem } from "@vuepress/theme-default";
import fs from "fs";
import { sidebar } from "vuepress-theme-hope";

function readFileNames(path: string): SidebarItem[] {
  const result: SidebarItem[] = [];
  try {
    const files = fs.readdirSync(`./docs/${path}`);
    files.forEach((file) => {
      result.push({
        link: `/${path}/${file}`,
        text: file.replace(".md", ""),
      });
    });
  } catch (err) {
    console.log("读取文件错误：", err.message);
  }
  return result;
}

export default sidebar([
  {
    text: "算法基础",
    icon: "note",
    children: readFileNames("base"),
  },
]);
