import SubTitle from "@/components/subTitle";
import Tech from "@/components/tech";
import Title from "@/components/title";
import { performRequest } from '@/services/lib/datocms';

const PAGE_CONTENT_QUERY = `query MyQuery {
  allTeches {
    name
    id
    image {
      responsiveImage(imgixParams: {fit: scale, h: "100", w: "100", auto: format}) {
        src
        title
        width
        sizes
        height
        alt
        base64
      }
    }
  }
}`;

export default async function Home() {
  const { data:{allTeches} } = await performRequest({ query: PAGE_CONTENT_QUERY });
  return (
    <div className="flex flex-row m-auto py-40 sm:py-40 lg:py-40">
      <div className="text-center align-middle">
        <Title />
        <SubTitle />
        <div>
          {allTeches.map(tech =>{
            console.log(tech)
            return(
              <Tech
              key={tech.id}
              name={tech.name}
              image={tech.image.responsiveImage}
              />
            )
          })}
        </div>
        
      </div>
    </div>
  );
}
