"use client"
import {motion ,useInView} from 'framer-motion'
import React from "react"
import Image from 'next/image'
const skills=[
                {name:'Next.JS' , level: 85},
                {name:'Figma' , level: 70},
                {name:'Wix Studio' , level: 75},
                {name:'HTML & CSS' , level: 85},
                {name:'Tailwindcss' , level: 85},
                {name:'Javascript' , level: 85},
                {name:'MS-Word' , level: 85},
                {name:'MS-Excel' , level: 85},
  
]
export default function Skill (){
    const ref = React.useRef(null)
    const isInView = useInView(ref , {once:true});
    return(
//         <main className='bg-[#1f4676]  flex-row md:flex justify-between '>
//             <section  ref={ref} className=" text-black h-[550px]  w-1/2 flex flex-col   ">
//             <h1 className=" text-5xl my-11 h-auto md:wz text-center ">
//           <strong>SKILLS</strong>
//         </h1>
//                 <div className="space-y-7 mx-11 text-xl font-semibold">
//                     {skills.map((skill)=>(
//                     <div key={skill.name}>
//                         <div className="flex justify-between ">
//                             <span>{skill.name}</span>
//                             <span>{skill.level}%</span>     
//                         </div>
//                         <div className=" bg-gray-500 h-3">
//                             <motion.div className="bg-[#d4d3ca] h-3"
//                             initial= {{width:0}}
//                             animate= {{width: isInView ?`${skill.level}%`: 0}} 
//                             transition={{duration: 5, ease: "easeOut" }}/>

//                             </div>
//                             </div>
//                 ))} 
//                 </div>
// </section>
// <section>
//     <Image
//     src={"/images/skill22.jpg"}
//     width={570}
//     height={500}
//     alt='skill'
//    />
// </section>
//         </main>
<main className="bg-[#1f4676] flex flex-col md:flex-row justify-between py-10">
  <section ref={ref} className="text-black h-auto w-full md:w-1/2 flex flex-col px-5 md:px-10">
    <h1 className="text-5xl my-11 md:my-5 text-center">
      <strong>SKILLS</strong>
    </h1>

    <div className="space-y-7 mx-5 md:mx-11 text-xl font-semibold">
      {skills.map((skill) => (
        <div key={skill.name}>
          <div className="flex justify-between">
            <span>{skill.name}</span>
            <span>{skill.level}%</span>
          </div>
          <div className="bg-gray-500 h-3">
            <motion.div
              className="bg-[#d4d3ca] h-3"
              initial={{ width: 0 }}
              animate={{ width: isInView ? `${skill.level}%` : 0 }}
              transition={{ duration: 5, ease: 'easeOut' }}
            />
          </div>
        </div>
      ))}
    </div>
  </section>

  <section className="mt-10 md:mt-0">
    <Image
      src="/images/skill22.jpg"
      width={570}
      height={500}
      alt="skill"
      className="w-full max-w-xs md:max-w-md mx-auto"
    />
  </section>
</main>

    )
}