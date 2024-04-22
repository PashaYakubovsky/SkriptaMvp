import { IoIosArrowRoundForward } from "react-icons/io";
import Link from "next/link";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center flex-start">
            <span className="w-full h-[90px] text-center shadow-md flex items-center justify-center text-3xl font-bold">
                Skripta...
            </span>

            <div className="flex flex-col items-center justify-center w-full h-[80vh]">
                <Link
                    href="/login"
                    className="
                    p-5
                    gap-2
                  bg-[#4B39EF] 
                  text-white 
                    rounded-md
                  hover:bg-[#4B39cF] 
                    focus:outline-none
                    focus:ring-2 focus:bg-[#4B39EF] 
                    focus:ring-opacity-50
                    transition-all
                    flex items-center justify-center
                    active:bg-[#4B39FF]
                    active:scale-125
              ">
                    <IoIosArrowRoundForward className="w-[1.5rem] h-[1.5rem] text-white" />
                    Get Started
                </Link>
            </div>
        </main>
    );
}
