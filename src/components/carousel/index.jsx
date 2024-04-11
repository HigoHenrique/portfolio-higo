import Link from 'next/link';
import Card from './card';
import { performRequest } from '@/services/datocms/lib/datocms';
import { CARD_PROJECT_QUERY } from '@/services/datocms/gql/queries';
export default async function Carousel(params) {
    const { data: { allProjects } } = await performRequest({ query: CARD_PROJECT_QUERY });

    return (
        <div className="lg:overflow-x-hidden lg:overflow-x-auto mx-auto lg:my-5 lg:p-10">
            <h4 className='font-bold lg:text-4xl lg:my-4'>Projetos</h4>
            <ul className="lg:flex lg:flex-row  lg:animate-carousel lg:gap-5 lg:p-4 ">
                {allProjects.map(project =>{
                    return(
                    <li key={project.id} className='aspect-square lg:h-60 lg:max-h-50 lg:max-w-80 md:w-1/3 hover:skew-y-2'>
                        <Link href={project.linkSite} className="h-full w-full">
                            <Card
                                title={project.title}
                                image={project.siteImage.responsiveImage}
                            />
                        </Link>
                </li>)
                })}
            </ul>
        </div>
    )
};
