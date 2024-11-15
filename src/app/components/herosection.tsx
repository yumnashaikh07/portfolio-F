
import Image from "next/image";
import Link from "next/link";
export default function Herosection ()
{
    return(
        <main className=" md:h-[600px] h-[900px] my-20"> 
      <section className=" grid grid-cols-1 md:grid-cols-2 ">
      <div className="flex justify-center">
      <Image 
      src={"/images/PORT 1.png"}
      width={500}
      height={770}
      alt="image"
      quality={100}/>
</div>
<div className=" hero-div">
      <div className="hero-slide ">
          <div className="text-4xl mb-3  text-[#1f4676]">
            <h1>
              <strong>YUMNA</strong>
            </h1>
            <h1>
              <strong>SHAIKH</strong>
            </h1>
          </div>
          <div className="bg-black w-[137px] h-1"></div>
          <h3 className="text-7xl mb-3 font-thin text-[#1f4676]  ">
            WEB-DEVELOPER
          </h3>
          <div className="text-xl ml-2 text-slate-900 font-extralight">
          <p >I focus on creating tailored websites and applications that</p>
          <p >harmoniously combine visual appeal with high functionality</p> 
          <p >My skills include responsive web development,implementing </p>
          <p className="mb-9  "> SEO best practices, and improving user experience. </p>
          </div>
          <div>
          <button className="px-8 mb-9 py-3 items-center mr-5 ml-2 bg-[#1f4676]  hover:bg-[#d4d3ca] text-white font-semibold rounded-xl">
            <Link href={"/contact"} >For Queries</Link></button>
          </div>
        </div>
  </div>    
      </section>
        </main>
    
)
}


