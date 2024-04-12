import { Image as DatoImage } from "react-datocms";
import { performRequest } from "@/services/datocms/lib/datocms";
import { TECH_QUERY } from "@/services/datocms/gql/queries";

export default async function Tech() {
    const { data: { allTeches } } = await performRequest({ query: TECH_QUERY });
    return (
        <div className="rounded-md py-5 my-5">
        <h2 className="lg:py-5 font-bold mx-auto text-center lg:text-4xl text-3xl">Principais Linguagens</h2>
        <div className="grid grid-cols-4 w-80 gap-2 mt-14 lg:my-2 lg:grid-cols-7 lg:gap-0 lg:w-3/5 lg:h-auto lg:justify-center mx-auto lg:py-10 lg:p-5">
            {allTeches.map(tech => {
                return (
                    <div className="lg:mx-5 animate-bounce" key={tech.id}>
                        <h3 className="text-center lg:text-lg font-bold">{tech.name}</h3>
                        <DatoImage data={tech.image.responsiveImage} />
                    </div>
                )
            })}
        </div>
        </div>
    )
};
