import ProjectCard from "@/components/projectcard";
const Projects =
[
    {
        Image:"/images/project3.png",
        title:"Static Resume",
        description:"This is my Own Brand's Landing Page.It is under process using Next.JS Framework",
        VercelLink:"https://hackathon-milestone-1-2-yumna-shaikhs-projects.vercel.app/",
        GithubLink:"https://github.com/yumnashaikh07/Hackathon-Milestone-1-2-",
    },
    
    {
        Image:"/images/project2.png",
        title:"Emotion Selector",
        description:"It is a website that i made in my early days by using CSS, HTML, and JavaScript ",
        VercelLink:"https://emotion-selector.vercel.app/",
        GithubLink:"https://github.com/yumnashaikh07/Emotion-Selector",
    },
];
export default function ProjectsComponent(){
    return(
        <main>
            <section className="gap-4 p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {Projects.map((project , index ) => (
                    <ProjectCard
                    key={index}
                    image={project.Image}
                    title={project.title}
                    description={project.description}
                    VercelLink={project.VercelLink}
                    GithubLink={project.GithubLink}
                    />
                ))}
            </section>
        </main>
    );
};


