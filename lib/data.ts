import path from "path";
import fs from "fs";

export interface Menu {
  id: number;
  title: string;
  link: string;
}

export function getAllMenus(): Menu[] {
  const filePath = path.join(process.cwd(), "db", "menus.json");
  const fileContents = fs.readFileSync(filePath, "utf8");
  return JSON.parse(fileContents);
}
