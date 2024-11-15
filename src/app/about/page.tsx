import Image from "next/image";
function About() {
  return (
    <main className="max-w-screen-sm sm:max-w-full mx-auto px-4">
      <h1 className="font-extrabold text-3xl sm:text-4xl md:text-5xl flex justify-center my-5 sm:my-10 items-center">
        DISCOVER:
      </h1>

      <section className="text-slate-900">
        <div className="space-x-3 flex flex-col sm:flex-row justify-between">
          <div className="ml-3 w-full sm:w-1/2">
            <h2 className="text-xl my-3 font-bold">MY JOURNEY:</h2>
            <p className="text-lg font-thin">
              My journey as a{" "}
              <span className="font-semibold">Web Developer</span> began in{" "}
              <span className="font-semibold">2023</span>, balancing my time as
              a full-time student and part-time{" "}
              <span className="font-semibold">Airbnb co-host</span>. This unique
              experience has provided valuable insights into customer service
              and the importance of a strong online presence.
            </p>
            <p className="text-lg my-5 font-thin">
              What sets me apart is my creative mindset and keen eye for detail.
              I believe that even the smallest elements like layout, color
              scheme, and typography can significantly impact user experience.
              My strong design sense helps me create websites that are both
              engaging and easy to navigate, ensuring a seamless experience for
              visitors.
            </p>
            <p className="text-lg my-5 font-thin">
              I am passionate about using my skills to help businesses elevate
              their online presence. Whether you are a startup needing a fresh
              website or an established brand seeking a redesign, I am dedicated
              to turning your vision into reality.
            </p>
            <p className="text-lg my-5 font-thin">
              Let&apos;s connect and explore how we can collaborate to enhance your
              business through impactful web development!
            </p>
          </div>
          <div className="w-full sm:w-1/2 mt-11 sm:mt-0">
            <Image
              src={"/images/Abouttt.jpg"}
              width={770}
              height={500}
              alt="about"
              quality={100}
            />
          </div>
        </div>

        <div className="border-t-2 p-3 my-7"></div>
        <div className="space-x-3 flex flex-col sm:flex-row justify-between">
          <div className="ml-3 w-full sm:w-1/2">
            <h2 className="text-xl my-3 font-bold">Why ME?:</h2>
            <ul className="list-disc p-5 list-inside text-lg text-gray-700">
              <li className="font-bold text-gray-800">
                Attention to Detail
                <p className="font-extralight text-gray-700">
                  My Attention to Detail differentiates me from others, allowing
                  me to uphold a level of{" "}
                  <span className="font-semibold">Precision and Quality</span>{" "}
                  in my work that enhances user experience and drives greater
                  client satisfaction.
                </p>
              </li>
              <li className="font-bold text-gray-800">
                Adaptability
                <p className="font-extralight text-gray-700">
                  Adaptability is my core quality, enabling me to quickly adjust
                  to new challenges and technologies, ensuring that I deliver{" "}
                  <span className="font-semibold">Effective Solutions</span> in
                  a constantly evolving landscape.
                </p>
              </li>
              <li className="font-bold text-gray-800">
                Creative Thinking
                <p className="font-extralight text-gray-700">
                  Creative thinking is a vital quality of mine, empowering me to
                  approach problems from{" "}
                  <span className="font-semibold">Unique angles</span> and
                  generate inventive solutions that captivate and inspire users.
                </p>
              </li>
              <li className="font-bold text-gray-800">
                Design Sense
                <p className="font-extralight text-gray-700">
                  My strong design sense allows me to create visually appealing
                  and user-friendly interfaces that effectively communicate{" "}
                  <span className="font-semibold">Brand Identity</span> and
                  enhance the overall user experience.
                </p>
              </li>
              <li className="font-bold text-gray-800">
                Business Acumen
                <p className="font-extralight text-gray-700">
                  My business acumen sets me apart, allowing me to understand{" "}
                  <span className="font-semibold">
                    Client Needs and Industry Trends
                  </span>{" "}
                  and deliver tailored solutions that drive value and align with
                  strategic goals.
                </p>
              </li>
            </ul>
          </div>
          <div className="w-full sm:w-1/2 mt-20 sm:mt-0">
            <Image
              src={"/images/About1.webp"}
              width={770}
              height={500}
              alt="about"
              quality={100}
            />
          </div>
        </div>

        <div className="border-t-2 p-3 my-7"></div>
        <div className="space-x-5 flex flex-col sm:flex-row justify-between">
          <div className="ml-5 w-full sm:w-1/2">
            <h2 className="text-xl font-bold my-3">VISION:</h2>
            <p className="text-lg my-5 font-thin">
              As a new web developer, my vision is to create innovative,
              user-centric digital experiences that empower individuals and
              businesses to thrive online. I am committed to understanding user
              needs and preferences, ensuring that every website and application
              I develop offers intuitive navigation and engaging interactions.
            </p>
            <p className="text-lg my-5 font-thin">
              By leveraging cutting-edge technologies like{" "}
              <span className="font-semibold">
                React, Next.js, and Tailwind CSS
              </span>
              , I aim to build responsive and high-performance solutions that
              function seamlessly across all devices. Accessibility is a
              priority for me; I will implement best practices to ensure that my
              digital products are inclusive for all users, regardless of their
              abilities.
            </p>
            <p className="text-lg my-5 font-thin">
              Additionally, I recognize the importance of SEO in enhancing
              online visibility, so I will integrate effective strategies into
              my projects. Lifelong learning is essential in this dynamic field,
              and I will actively seek opportunities for professional growth to
              stay current with industry trends. I also value collaboration and
              open communication, engaging with clients and team members
              throughout the development process to align on goals and
              expectations.
            </p>
          </div>
          <div className="w-full sm:w-1/2 mt-16 sm:mt-0">
            <Image
              src={"/images/About11.webp"}
              width={570}
              height={500}
              alt="about"
              quality={100}
            />
          </div>
        </div>
      </section>
    </main>
  );
}
export default About;

//<main className ="max-w-screen-sm sm:max-w-full mx-auto px-4">
//       <h1 className="font-extrabold text-5xl flex justify-center my-11 items-center">
//         DISCOVER:-
//       </h1>
// <section className=" text-slate-900">
//     <div className="space-x-3 ">
//           <div className="ml-3 md:w-1/2">
//           <h2 className="text-xl my-3 font-bold ">MY JOURNEY:</h2>
//           <p className="text-lg font-thin ">
//             My journey as a<span className="font-semibold"> Web Developer </span>{" "}
//             began in<span className="font-semibold"> 2023</span> , balancing my time
//             as a full-time student and part-time{" "}
//             <span className="font-semibold">Airbnb co-host</span>. This unique
//             experience has provided valuable insights into customer service and
//             the importance of a strong online presence.
//           </p>
//           <p className="text-lg my-5 font-thin">
//             What sets me apart is my creative mindset and keen eye for detail. I
//             believe that even the smallest elements layout, color scheme, and
//             typography can significantly impact user experience. My strong
//             design sense helps me create websites that are both engaging and
//             easy to navigate, ensuring a seamless experience for visitors.
//           </p>
//           <p className="text-lg my-5 font-thin">
//             I am passionate about using my skills to help businesses elevate
//             their online presence. Whether you're a startup needing a fresh
//             website or an established brand seeking a redesign, I'm dedicated to
//             turning your vision into reality.
//           </p>
//           <p className="text-lg my-5 font-thin ">
//             Let's connect and explore how we can collaborate to enhance your
//             business through impactful web development!
//           </p>
//         </div>
//         <div className="w-1/2 mt-11">
//         <Image
//         src={"/images/Abouttt.jpg"}
//         width={770}
//         height={500}
//         alt="about"
//         quality={100}
//         />
//       </div>
//   </div>

// <div className=" border-t-2 p-3 my-7"></div>

//   <div className=" grid gide-col-1 md:grid-col-2 space-x-3   ">
//         <div className="ml-3 md:w-1/2">
//           <h2 className="text-xl my-3 font-bold">Why ME?:</h2>

//           <ul className="list-disc p-5 list-inside text-lg text-gray-700">
//             <li className="font-bold text-gray-800">
//               Attention to Detail
//               <p className="font-extralight text-gray-700">
//                 My Attention to Detail differentiates me from others, allowing
//                 me to uphold a level of<span className="font-semibold"> Precision and Quality</span> in my work that
//                 not only enhances user experience but also drives greater client
//                 satisfaction.
//               </p>
//             </li>
//             <li className="font-bold text-gray-800">
//               Adaptability
//               <p className="font-extralight text-gray-700">
//                 Adaptability is my core quality, enabling me to quickly adjust
//                 to new challenges and technologies, ensuring that I deliver
//                 <span className="font-semibold"> Effective Solutions</span> in a constantly evolving landscape.
//               </p>
//             </li>
//             <li className="font-bold text-gray-800">
//               Creative Thinking
//               <p className="font-extralight text-gray-700">
//                 Creative thinking is a vital quality of mine, empowering me to
//                 approach problems from <span className="font-semibold"> Unique angles</span> and generate inventive
//                 solutions that captivate and inspire users.
//               </p>
//             </li>
//             <li className="font-bold text-gray-800">
//               Design Sense
//               <p className="font-extralight text-gray-700">
//                 My strong design sense allows me to create visually appealing
//                 and user-friendly interfaces that effectively communicate<span className="font-semibold"> Brand
//                 Identity</span>  and enhance the overall user experience.e
//               </p>
//             </li>
//             <li className="font-bold text-gray-800">
//               Business Acumen
//               <p className="font-extralight text-gray-700">
//                 My business acumen sets me apart from others, as it allows me to
//                 not only understand<span className="font-semibold"> Client Needs and Industry Trends</span>  but also to
//                 deliver tailored solutions that drive value and align with
//                 strategic goals.
//               </p>
//             </li>
//           </ul>
//           </div>
//         <div className="w-1/2 mt-20">
//         <Image
//         src={"/images/About1.webp"}
//         width={770}
//         height={500}
//         alt="about"
//         quality={100}
//         />
//       </div>
//   </div>

// <div className=" border-t-2 p-3 my-7"></div>

//   <div className=" space-x-5 grid gide-col-1 md:grid-col-2  ">
//     <div className="ml-5  md:w-1/2">
//           <h2 className="text-xl font-bold my-3 ">VISION:</h2>
//           <p className="text-lg my-5 font-thin  ">
//             As a new web developer, my vision is to create innovative,
//             user-centric digital experiences that empower individuals and
//             businesses to thrive online. I am committed to understanding user
//             needs and preferences, ensuring that every website and application I
//             develop offers intuitive navigation and engaging interactions.
//           </p>
//           <p className="text-lg my-5 font-thin ">
//             By leveraging cutting-edge technologies like
//             <span className="font-semibold"> React, Next.js, and Tailwind CSS</span>
//             , I aim to build responsive and high-performance solutions that
//             function seamlessly across all devices. Accessibility is a priority
//             for me; I will implement best practices to ensure that my digital
//             products are inclusive for all users, regardless of their abilities.
//           </p>
//           <p className="text-lg my-5 font-thin ">
//             Additionally, I recognize the importance of SEO in enhancing online
//             visibility, so I will integrate effective strategies into my
//             projects. Lifelong learning is essential in this dynamic field, and
//             I will actively seek opportunities for professional growth to stay
//             current with industry trends. I also value collaboration and open
//             communication, engaging with clients and team members throughout the
//             development process to align on goals and expectations.
//           </p>
//         </div>
//         <div className="w-1/2 mt-16">
//         <Image
//         src={"/images/About11.webp"}
//         width={570}
//         height={500}
//         alt="about"
//         quality={100}
//         />
//       </div>
//   </div>
//       </section>
//     </main>
