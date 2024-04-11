import { Image as DatoImage } from "react-datocms";
import clsx from "clsx";

export default function Card({image}) {
    return(
        <div className={clsx(
            'group lg:flex h-full w-full items-center justify-center rounded-lg border-4 border-h-blue-3 hover:border-h-blue-2 dark:bg-h-blue-1 hover:scale-110',
          )}>
            <DatoImage 
            className="h-full w-full object-contain transition duration-300 ease-in-out" 
            data={image} />
        </div>
    )
};
