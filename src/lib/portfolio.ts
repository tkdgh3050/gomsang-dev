import fs from "fs";
import path from "path";
import matter from "gray-matter";

const portfolioDirectory = path.join(process.cwd(), "src/content/portfolio");

export interface ProjectMetadata {
  slug: string;
  title: string;
  company: string;
  period: string;
  role: string;
  description: string;
  tags: string[];
}

export interface Project extends ProjectMetadata {
  content: string;
}

const PROJECT_ORDER = [
  "innopas",
  "ai-textbook",
  "delivery-mutual-aid",
  "youtil",
  "totalori",
];

export function getAllProjects(): ProjectMetadata[] {
  const fileNames = fs.readdirSync(portfolioDirectory);
  const allProjectsData = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, "");
    const fullPath = path.join(portfolioDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data } = matter(fileContents);

    return {
      slug,
      ...(data as Omit<ProjectMetadata, "slug">),
    };
  });

  // Custom sorting based on PROJECT_ORDER
  return allProjectsData.sort((a, b) => {
    const indexA = PROJECT_ORDER.indexOf(a.slug);
    const indexB = PROJECT_ORDER.indexOf(b.slug);
    
    // If slug not in order list, put it at the end
    const rankA = indexA === -1 ? 999 : indexA;
    const rankB = indexB === -1 ? 999 : indexB;
    
    return rankA - rankB;
  });
}

export function getProjectBySlug(slug: string): Project {
  const fullPath = path.join(portfolioDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    slug,
    ...(data as Omit<ProjectMetadata, "slug">),
    content,
  };
}
