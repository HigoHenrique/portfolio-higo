import ProjectCard from "@/components/projectCard";
import { PROJECT_QUERY } from "@/services/datocms/gql/queries";
import { performRequest } from "@/services/datocms/lib/datocms";
import { revalidatePath } from "next/cache";

export default async function Project() {

      const { data: { allProjects } } = await performRequest({ query: PROJECT_QUERY });
      revalidatePath("/project", "page")
    return (
      <div className="lg:mx-auto lg:w-full lg:pt-10 py-5 lg:text-center lg:align-middle">
        <div className="border-b-2 border-h-blue-1/25">
          {allProjects.map(project =>{
            return(
              <ProjectCard
                id={project.id}
                key={project.id}
                title={project.title}
                linkSite={project.linkSite}
                repositoryLink={project.repositoryLink}
                siteImage={project.siteImage.responsiveImage}
              />
            )
          })}
          </div>
    </div>
    );
  }
  