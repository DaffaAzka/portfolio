import path from "path";
import fs from "fs";

export interface Menu {
  id: number;
  title: string;
  link: string;
}

export interface Experience {
  company: string;
  description: string;
  period: string;
  technologies: string[];
  title: string;
}

export interface Project {
  category: string;
  title: string;
  details: string;
  stack: string[];
  projectUrl: string;
  image: string;
}

export function getAllMenus(): Menu[] {
  const filePath = path.join(process.cwd(), "db", "menus.json");
  const fileContents = fs.readFileSync(filePath, "utf8");
  return JSON.parse(fileContents);
}

export function getAllExperiences(): Experience[] {
  const filePath = path.join(process.cwd(), "db", "experiences.json");
  const fileContents = fs.readFileSync(filePath, "utf8");
  return JSON.parse(fileContents);
}

export function getAllProjects(): Project[] {
  const filePath = path.join(process.cwd(), "db", "projects.json");
  const fileContents = fs.readFileSync(filePath, "utf8");
  return JSON.parse(fileContents);
}
