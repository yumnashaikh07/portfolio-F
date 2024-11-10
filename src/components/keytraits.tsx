import Image from "next/image"
export default function KeyTraits(){
    return(
        <main className=" bg-[#1f4676] md:mt-32 md:p-3 md:h-[400px] ">
            <h1 className=" text-4xl md:text-5xl mb-9 text-center ">
          <strong>KEY TRAITS</strong>
           </h1>
           <section className="grid grid-cols-1 md:grid-cols-3  gap-4 px-4">
            <div>
                <Image 
                src={"/images/key3.webp"}
                width={175}
                height={175}
                alt="keytraits"
                className="mb-2 border-4 border-black mx-auto"/>
               
                    <h3 className="font-bold font-serif p-1 text-xl md:text-2xl">Attention to Detail</h3>
                    <p >With a focus on detail, I deliver precise, user-centered web solutions.</p>
                
            </div>
            <div>
            <Image 
                src={"/images/key11.jpg"}
                width={175}
                height={175}
                alt="keytraits"
                className="mb-2 border-4 border-black mx-auto"/>
            <h3 className="font-bold   font-serif  p-1 text-xl md:text-2xl">Quick Turnaround</h3>
                    <p>Quick turnaround and ability to complete websites within one week.</p>
               
            </div>
            <div>
            <Image 
                src={"/images/key222.jpg"}
                width={175}
                height={175}
                alt="keytraits"
                className="mb-2 border-4 border-black mx-auto"/>
                
                <h3 className="font-bold  font-serif  p-1 text-xl md:text-2xl">Effective Communication</h3>
                    <p>Effective communication ensures clear understanding, smooth collaboration, and successful project outcomes.</p>
                </div>
            </section>
            
        </main>
    )
}