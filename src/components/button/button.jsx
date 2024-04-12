import Link from 'next/link';
import Image from 'next/image';

export default function Button({ name, link, color, secondColor, icon }) {

    return (
        <div className='block'>
            <div className={secondColor}>
            <Link
                target="_blank"
                href={link} 
                className={`flex flex-row shadow-lg shadow-slate-950 lg:p-5 rounded-md px-8 lg:py-2.5 py-2 m-2 lg:text-xl text-lg font-extrabold hover:scale-110 ${color} ${secondColor}`}
            >
                <Image
                    className='object-cover rounded-sm w-6 h-6 lg:h-8 lg:w-8 lg:mx-4 mx-2'
                    src={icon}
                    width={20}
                    height={20}
                    alt='icon'
                />
                {name}
            </Link>
            </div>
        </div>
    )
};
