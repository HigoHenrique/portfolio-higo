import Image from "next/image";

export default function NotFound() {

  return (
    <div className="justify-center lg:w-full h-lvh mx-auto p-2">
      <h1 className={`lg:text-5xl text-4xl py-5 font-bold text-center`}>Página não encontrada</h1>
      <Image
        className="m-9 mx-auto saturate-200 align-middle"
        alt="error 404"
        src="/svgexport-23.svg"
        width={900}
        height={900}
      />
    </div>
  )
}