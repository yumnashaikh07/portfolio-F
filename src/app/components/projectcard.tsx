"use client"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react"
interface ProjectCardProps
    {
        image: string,
        title: string ,
        description: string,
        VercelLink: string,
        GithubLink: string,
        
    }
const ProjectCard :React.FC <ProjectCardProps>  =({image, title, description, VercelLink, GithubLink}) =>{
    const[showGithubLink , setShowGithubLink] = useState(false);
    const toggleGithubLink =()=>{
        setShowGithubLink(prev => !prev)
    };
    return(
    <div className=" bg-[#1f4676] p-5 md:p-7 bordrer shadow-2xl">
            <Image
            src={image}
            alt={title}
            width={200}
            height={100}
            className="object-cover h-[700px] md:h-[350px] w-full"/>
            <div className="border-2 p-3">
            <h3 className="font-bold text-base md:text-2xl my-3 ml-3">{title}</h3>
            <p className="">{description}</p>
            </div>
        <div className="mt-5">
            <Link href={VercelLink} legacyBehavior>
                <a target="_blank" rel="noopener noreferrer" className="text-white text-lg md:text-xl ml-5 flex flex-col hover:underline">
                    View Live
                </a>
            </Link>
        <button
                onClick={toggleGithubLink}  
                className=" text-white ml-3 font-semibold text-lg md:text-xl hover:underline ">
                {showGithubLink ? 'Hide Github Link': 'Github Link'}
        </button>
        {showGithubLink &&(
            <p className="mt-3">
                <Link href={GithubLink} legacyBehavior>
                <a target="_blank"  rel="noopener noreferrer" className="text-white font-semibold text-lg md:text-xl hover:underline">
                    Github Repo
                </a>
                </Link>
            </p>
        )}
        </div>
    </div>
    )
}

export default  ProjectCard ;
