import { performRequest } from "@/services/datocms/lib/datocms";
import { PROJECT_DETAIL_QUERY_ID } from "@/services/datocms/gql/queries";
import NotFound from "@/app/not-found";
import Tech from "@/components/tech";
import Button from "@/components/button/button";
import { revalidatePath } from "next/cache";

export default async function ProjectDetail({params}) {
    const gql = PROJECT_DETAIL_QUERY_ID(params.id);
    const { data } = await performRequest({ query: gql });
    revalidatePath("/project/[id]", "page")
    if(data){
        const project = await data.project;
        const techList = project.stacks
        return(
            <div className="lg:mx-auto lg:w-full lg:pt-10 pt-5 text-center lg:align-middle p-5">
                <h1 className="lg:text-7xl text-3xl font-bold mb-10">
                    {project.title}
                </h1>
                <p className="lg:text-xl text-lg font-medium lg:w-4/5 mb-10 mx-auto">
                    {project.description}
                </p>
                <div className="lg:flex p-1 justify-center mx-auto">
                    <Button link={project.repositoryLink} name="Repositório"/>
                    <Button link={project.linkSite} name="Site"/>
                </div>
                <div className="px-15">
                    <Tech
                        techList={techList}
                        title="Tecnologias usadas no projeto"
                    />
                </div>
            </div>
        )
    }
    return(
        <NotFound/>
    )
};
