import Link from 'next/link';
import Image from 'next/image';

export default function Button({ name, link, color, secondColor, icon }) {

    const buttonStyles = {
        color,
        secondColor,
      };

    return (
        <div className='inline-block'>
            <Link 
                href={link} 
                className={`flex flex-row shadow-lg shadow-slate-950 lg:p-5 rounded-md lg:px-8 lg:py-2.5 lg:m-2 lg:text-sm font-extrabold hover:scale-125 ${buttonStyles.secondColor} ${buttonStyles.color}`}
            >
                <Image
                    className='object-cover rounded-sm lg:mx-2'
                    src={icon}
                    width={20}
                    height={20}
                    alt='icon'
                />
                {name}
            </Link>
        </div>
    )
};
