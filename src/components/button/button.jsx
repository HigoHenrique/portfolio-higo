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
                className={`flex flex-row shadow-lg shadow-slate-950 p-5 rounded-md px-8 py-2.5 m-2 text-sm font-extrabold hover:scale-125 ${buttonStyles.secondColor} ${buttonStyles.color}`}
            >
                <Image
                    className='object-cover rounded-sm mx-2'
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
