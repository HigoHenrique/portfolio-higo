import { Bowlby_One } from "next/font/google";

 const bowlby_One = Bowlby_One({
    weight: "400",
    style: 'normal',
    subsets: ["latin"],
 });

export default function Title() {
    
    return(
        <>
        <h1 className={`${bowlby_One.className} text-4xl text-center lg:text-6xl leading-tight`}>Olá, meu nome é Higo Henrique</h1>
        <h2 className={`${bowlby_One.className} text-xl text-center lg:m-3 lg:text-3xl`}>Sou desenvolvedor Full-Stack</h2>
        </>
    )
};