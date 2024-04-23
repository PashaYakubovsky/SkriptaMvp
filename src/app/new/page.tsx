import Link from "next/link";
import { RiComputerLine } from "react-icons/ri";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center flex-start">
            <header className="h-[90px] bg-[#4B39EF] text-lg pt-[3rem] w-full px-4 text-white">
                What Do You Want To Do?
            </header>
            <div className="flex flex-col items-start justify-start w-full h-[80vh] px-4 pt-[0.5rem] ">
                <Link
                    href="/configuration"
                    className="
                        w-[14rem] h-[12rem] shadow-md rounded-md
                        hover:shadow-xl hover:scale-105
                        cursor-pointer active:scale-95 
                        transform transition duration-300 ease-in-out">
                    <div className="h-[70%] bg-[#39D2C0] p-2 flex flex-col justify-between text-white text-sm	">
                        <div className="relative w-fit rounded-md overflow-hidden p-2">
                            <div className="absolute w-full h-full left-0 top-0 bg-white opacity-25"></div>
                            <RiComputerLine className="w-[1.5rem] h-[1.5rem] text-white" />
                        </div>

                        <div className="text-start  drop-shadow-md">
                            <div>Vertical Films</div>
                            <div>Script Generation</div>
                        </div>
                    </div>
                    <div
                        className="h-[30%] flex 
                    items-center justify-center text-2xl
                    ">
                        Begin
                    </div>
                </Link>
            </div>
        </main>
    );
}
