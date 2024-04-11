import SubTitle from "@/components/subTitle";
import Tech from "@/components/tech";
import Title from "@/components/title";
import Carousel from "@/components/carousel";

export default function Home() {
  return (
    <div className="lg:flex lg:flex-row lg:mx-auto lg:w-auto sm:py-40 lg:py-40">
      <div className="lg:text-center lg:align-middle">
        <Title />
        <SubTitle />
        <div className="shadow-md shadow-h-blue-1">
            <Tech/>
            <Carousel/>
          </div>
      </div>
    </div>
  );
}
