import path from "path";
import fs from "fs";

export interface Menu {
  id: number;
  title: string;
  link: string;
}

export interface Menu {
  company: string;
  description: string;
  period: string;
  technologies: string[];
  title: string;
}

export function getAllMenus(): Menu[] {
  const filePath = path.join(process.cwd(), "db", "menus.json");
  const fileContents = fs.readFileSync(filePath, "utf8");
  return JSON.parse(fileContents);
}

export function getAllExperiences(): Menu[] {
  const filePath = path.join(process.cwd(), "db", "experiences.json");
  const fileContents = fs.readFileSync(filePath, "utf8");
  return JSON.parse(fileContents);
}
