import { getProjectBySlug, getAllProjects } from "@/lib/portfolio";
import ReactMarkdown from "react-markdown";
import Link from "next/link";
import { ArrowLeft, Calendar, Building2, Briefcase, Tag } from "lucide-react";
import { notFound } from "next/navigation";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const projects = getAllProjects();
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  
  try {
    const project = getProjectBySlug(slug);

    return (
      <article className="mx-auto w-full max-w-3xl px-6 py-20 space-y-12">
        <Link
          href="/projects"
          className="group inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-orange-600"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          Back to Projects
        </Link>

        <header className="space-y-6">
          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Building2 className="h-4 w-4 text-orange-500" />
              {project.company}
            </div>
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4 text-orange-500" />
              {project.period}
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            {project.title}
          </h1>
          
          <div className="flex items-center gap-2 text-lg font-medium text-orange-600">
            <Briefcase className="h-5 w-5" />
            {project.role}
          </div>
        </header>

        <div className="prose prose-orange dark:prose-invert max-w-none 
          prose-h2:text-2xl prose-h2:font-bold prose-h2:mt-12 prose-h2:mb-6
          prose-h3:text-xl prose-h3:font-semibold prose-h3:mt-8 prose-h3:mb-4
          prose-p:text-muted-foreground prose-p:leading-relaxed
          prose-li:text-muted-foreground prose-strong:text-foreground">
          <ReactMarkdown
            components={{
              h2: ({ children }) => {
                const id = children?.toString().toLowerCase()
                  .replace(/[^a-z0-9가-힣\s]/g, '')
                  .trim()
                  .replace(/\s+/g, '-');
                return <h2 id={id}>{children}</h2>;
              },
              h3: ({ children }) => {
                const id = children?.toString().toLowerCase()
                  .replace(/[^a-z0-9가-힣\s]/g, '')
                  .trim()
                  .replace(/\s+/g, '-');
                return <h3 id={id}>{children}</h3>;
              },
              img: ({ src, alt }) => (
                <span className="block my-8">
                  <img src={src} alt={alt} className="max-w-[550px] w-full rounded-xl shadow-lg mx-auto" />
                  {alt && <span className="block text-center text-sm text-muted-foreground mt-2">{alt}</span>}
                </span>
              ),
              a: ({ href, children }) => {
                const isExternal = href?.startsWith('http') || href?.startsWith('//');
                return (
                  <a 
                    href={href} 
                    target={isExternal ? "_blank" : undefined} 
                    rel={isExternal ? "noopener noreferrer" : undefined}
                    className="text-orange-600 hover:text-orange-700 underline underline-offset-4"
                  >
                    {children}
                  </a>
                );
              }
            }}
          >
            {project.content}
          </ReactMarkdown>
        </div>

        <div className="pt-12 border-t mt-12">
          <div className="flex items-center gap-2 mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            <Tag size={14} className="text-orange-500" />
            Technologies Used
          </div>
          <div className="flex flex-wrap gap-2">
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
      </article>
    );
  } catch (error) {
    notFound();
  }
}
