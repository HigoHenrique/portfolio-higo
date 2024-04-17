import Link from 'next/link';
import Card from './card';
import { performRequest } from '@/services/datocms/lib/datocms';
import { CARD_PROJECT_QUERY } from '@/services/datocms/gql/queries';
import { revalidatePath } from 'next/cache';
export default async function Carousel() {
    const { data: { allProjects } } = await performRequest({ query: CARD_PROJECT_QUERY });
    revalidatePath("/", 'page')
    return (
        <div className="lg:overflow-x-hidden lg:snap-normal lg:overflow-x-auto mx-auto my-5 lg:p-10 p-3">
            <h4 className='font-bold lg:text-5xl text-3xl text-center lg:mb-5 mb-5'>Projetos</h4>
            <ul className="lg:flex lg:flex-row lg:animate-carousel lg:gap-8 lg:p-4">
                {allProjects.map(project =>{
                    return(
                    <li key={project.id} className='lg:aspect-square aspect-auto lg:h-80 lg:w-1/3 hover:skew-y-1'>
                        <Link target="_blank" href={project.linkSite} className="h-full w-full">
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
