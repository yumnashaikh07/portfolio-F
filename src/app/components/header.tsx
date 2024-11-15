import Link from "next/link";
import Image from "next/image"; 
function Header() {
  return ( 
  <main>
  <header className="bg-[#d4d3ca] h-28 flex items-center px-4 sm:px-6 md:px-8 lg:px-16">
    
    <div className="flex flex-col w-1/2 font-semibold text-xl sm:text-lg  md:text-2xl lg:text-xl">
      <Image 
        src="/images/RAYS222.png"
        alt="logo"
        width={127}
        height={127}
        className=""
      />
    </div>

    <nav className="flex w-full  md:justify-between md:items-center flex-items-end justify-end ">
      <ul className="text-[#1f4676] font-bold text-sm sm:text-base   md:text-lg lg:text-xl space-x-6 sm:space-x-8 md:space-x-12 lg:space-x-14 my-3">
        <li><Link href="/profile" className="text-[#d4d3ca]">Profile</Link></li>
        <li><Link href="/contact" className="hover:underline">Contact</Link></li>
        <li><Link href="/about" className="hover:underline">About</Link></li>
        <li><Link href="/projects" className="hover:underline">Projects</Link></li>      
      </ul>
    </nav>

  </header>
</main>

  );
}
export default Header;
