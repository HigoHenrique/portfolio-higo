import SubTitle from "@/components/subTitle";
import Tech from "@/components/tech";
import Title from "@/components/title";
import Carousel from "@/components/carousel";

export default function Home() {
  return (
    <div className="lg:mx-auto lg:pt-20 py-5 lg:text-center lg:align-middle">
        <Title />
        <SubTitle />
        <div className=" border-b-2 border-h-blue-1/25">
            <Tech/>
          </div>
          <div className="w-full block">
          <Carousel/>
          </div>
    </div>
  );
}
