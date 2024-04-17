import SubTitle from "@/components/subTitle";
import Tech from "@/components/tech";
import Title from "@/components/title";
import Carousel from "@/components/carousel";
import { performRequest } from "@/services/datocms/lib/datocms";
import { TECH_QUERY } from "@/services/datocms/gql/queries";
import { revalidatePath } from "next/cache";

export default async function Home() {
  const { data: { allTeches } } = await performRequest({ query: TECH_QUERY });
  revalidatePath("/", "page")
  return (
    <div className="lg:mx-auto lg:pt-20 py-5 lg:text-center lg:align-middle">
        <Title />
        <SubTitle />
        <div className=" border-b-2 border-h-blue-1/25">
            <Tech
              techList={allTeches}
              title="Principais Linguagens"
            />
          </div>
          <div className="w-full block">
          <Carousel/>
          </div>
    </div>
  );
}
