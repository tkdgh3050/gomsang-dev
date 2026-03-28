import { getAllProjects } from "@/lib/portfolio";
import Link from "next/link";
import { ArrowUpRight, FolderOpen } from "lucide-react";

export default function ProjectsPage() {
  const projects = getAllProjects();

  return (
    <div className="max-w-3xl mx-auto px-6 py-20 space-y-12">
      <header className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight flex items-center gap-3">
          <FolderOpen className="text-orange-500" /> Projects
        </h1>
        <p className="text-lg text-muted-foreground">
          기술적 도전과 비즈니스 문제를 해결한 주요 프로젝트들입니다.
        </p>
      </header>

      <div className="grid grid-cols-1 gap-6">
        {projects.map((project) => (
          <Link
            key={project.slug}
            href={`/projects/${project.slug}`}
            className="group block p-8 rounded-2xl border bg-card hover:shadow-lg transition-all hover:border-orange-200 dark:hover:border-orange-900/50"
          >
            <div className="space-y-4">
              <div className="flex justify-between items-start">
                <div className="space-y-1">
                  <span className="text-xs font-semibold uppercase tracking-wider text-orange-600">
                    {project.company}
                  </span>
                  <h3 className="text-2xl font-bold group-hover:text-orange-600 transition-colors">
                    {project.title}
                  </h3>
                </div>
                <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
              </div>
              
              <p className="text-muted-foreground leading-relaxed">
                {project.description}
              </p>

              <div className="pt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
