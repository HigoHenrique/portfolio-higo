import { ALL_CONTACT_QUERY } from "@/services/datocms/gql/queries";
import { performRequest } from "@/services/datocms/lib/datocms";
import { Image as DatoImage } from "react-datocms";
import Link from "next/link";

export default async function ContactCard() {
    const { data: {allContacts} } = await performRequest({ query: ALL_CONTACT_QUERY });
    return(
        <div className="lg:flex justify-center align-middle mx-auto" >
            {allContacts.map(contact =>{
                return(
                    <div className="p-5 mb-10 border-4 lg:mb-20 shadow-lg shadow-h-text lg:rounded-lg lg:m-2 lg:w-1/2" key={contact.id}>
                        <h1 className="text-4xl font-bold text-center p-5">{ contact.name }</h1>
                        <Link href={contact.contactContent}>
                            <DatoImage
                                className="rounded-3xl border-4 hover:scale-110 mx-auto"
                                data={contact.image.responsiveImage}
                            />
                        </Link>
                        <p className=" lg:w-4/5 mx-auto p-5 align-middle lg:text-xl text-2xl text-center">
                            {contact.description}
                        </p>
                    </div>
                )
            })}
        </div>
    )
};
