import Link from 'next/link';
import Image from 'next/image';

export default function Button({ name, link, color, secondColor, icon }) {

    return (
        <div className='block text-center'>
            <Link
                target="_blank"
                href={link} 
                className={`flex flex-row shadow-sm border-2 border-h-text shadow-h-text lg:p-5 rounded-md px-8 lg:py-2.5 lg:m-4 py-2 m-2 lg:text-xl text-lg font-extrabold hover:scale-110 ${color} ${secondColor} bg-h-blue-4`}
            >
                <Image
                    className='object-cover rounded-full w-6 h-6 lg:h-8 lg:w-8 lg:mx-4 mx-2'
                    src={icon}
                    width={20}
                    height={20}
                    alt='icon'
                    hidden={icon ? false : true}
                />
                {name}
            </Link>
        </div>
    )
};
