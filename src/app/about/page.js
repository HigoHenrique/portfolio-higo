import { performRequest } from "@/services/datocms/lib/datocms";
import { Image as DatoImage } from "react-datocms";
import {ABOUT_QUERY} from '@/services/datocms/gql/queries';

export default async function About() {
    const { data: {about} } = await performRequest({ query: ABOUT_QUERY });
    return(
        <div className="lg:flex lg:mx-auto mx-5 justify-center lg:text-center mt-10 lg:p-10">
                <DatoImage className=" lg:w-1/3 lg:h-1/2 lg:m-2 rounded-xl border-8" data={about.imgMe.responsiveImage}/>
            <div className="flex w-4/5 justify-center my-5 align-middle">
                <p className="lg:p-5 p-2 font-bold lg:text-lg text-xl">
                    {about.aboutMe}
                </p>
            </div>
        </div>
    )
};
