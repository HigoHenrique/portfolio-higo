import { Image as DatoImage } from "react-datocms";
import { Bowlby_One } from "next/font/google";
import Button from "../button/button";
import Link from "next/link";

const bowlby_one = Bowlby_One({
    weight: "400",
    style: "normal",
    subsets: ['latin'],
})

export default function ProjectCard({title, linkSite, repositoryLink,siteImage, id}) {
    return(
        <div className="lg:flex lg:w-4/5 p-5 lg:border-4 border-2 mb-8 border-h-text lg:mx-auto bg-h-blue-2 mx-4 rounded-lg lg:shadow-lg lg:shadow-h-text">
            <div className="lg:w-4/5 lg:h-80 drop-shadow-2xl border-2 border-h-text">
                <DatoImage className="lg:w-full lg:h-full" data={siteImage}/>
            </div>
            <div className=" lg:w-full">
                <h1 className={`${bowlby_one.className}  lg:text-2xl text-3xl p-4 text-center`}>{title}</h1>
            <div className="lg:w-4/5 w-full mx-auto p-3 lg:p-6">
            <Button
                    link={linkSite}
                    name="Acessar o site publicado"
                />
            <Button
                    link={repositoryLink}
                    name="Acessar o repositório no Github"
                />
            <Link href={`/project/${id}`}>
                <h2 className="animate-bounce mt-10 lg:text-lg hover:underline text-center">Ver Detalhes</h2>
            </Link>
            </div>
            </div>
        </div>
    )
};
