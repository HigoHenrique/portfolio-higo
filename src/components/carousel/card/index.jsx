import { Image as DatoImage } from "react-datocms";
import clsx from "clsx";

export default function Card({image}) {
    return(
        <div className={clsx(
            'group lg:flex lg:h-full lg:w-full items-center my-3 justify-center rounded-lg lg:border-4 border-2 border-h-text lg:shadow-lg shadow-md shadow-h-text hover:border-white dark:bg-h-blue-1 hover:scale-105',
          )}>
            <DatoImage 
            className="h-full w-full object-contain transition duration-300 ease-in-out" 
            data={image} />
        </div>
    )
};
