import { performRequest } from "@/services/datocms/lib/datocms";
import { PROJECT_DETAIL_QUERY_ID } from "@/services/datocms/gql/queries";
import NotFound from "@/app/not-found";

export default async function ProjectDetail({params}) {
    const gql = PROJECT_DETAIL_QUERY_ID(params.id);
    const { data } = await performRequest({ query: gql });
    console.log(data)
    if(data){
        const project = await data.project;
        return(
            <div>
                <h1>
                    {project.title}
                </h1>
                <p>
                    {project.description}
                </p>
            </div>
        )
    }
    return(
        <NotFound/>
    )
};
