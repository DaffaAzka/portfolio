import path from "path";
import fs from "fs";
import { Experience, Menu, Project, SkillCategory } from "./types";

export * from "./types";

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

export function getAllSkills(): SkillCategory[] {
  const filePath = path.join(process.cwd(), "db", "skills.json");
  const fileContents = fs.readFileSync(filePath, "utf8");
  return JSON.parse(fileContents);
}
