import { Image as DatoImage } from "react-datocms";

export default function Tech({name, image}) {
    return(
        <div >
            <h2>{name}</h2>
            <DatoImage className="h-30 w-30 rounded-full" data={image} />
        </div>
    )
};
