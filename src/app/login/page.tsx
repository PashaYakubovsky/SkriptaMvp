import { IoEyeOutline } from "react-icons/io5";
import { IoEyeOffOutline } from "react-icons/io5";

import Link from "next/link";
import Input from "@/components/common/Input";

export default function Login() {
    return (
        <main className="flex min-h-screen flex-col items-center flex-start px-4 py-2">
            <span className="w-full h-[120px] text-center flex items-center justify-start text-3xl">
                Skripta...
            </span>

            <div className="flex flex-col items-start justify-start w-full h-[80vh]">
                <h2 className="text-4xl my-2">Welcome Back</h2>
                <p className="mb-2 text-sm">Let's get started by filling out the form below.</p>

                <Input type="email" placeholder="Email" />
                <Input type="password" svg={IoEyeOutline} placeholder="Password" />

                {/* CTA */}
                <Link
                    href="/configuration"
                    className="w-full bg-[#4B39EF] h-[44px] rounded-lg text-white flex justify-center items-center">
                    Sign In
                </Link>

                {/* Redirect to registration */}
                <div className="mt-[1rem] text-sm">
                    Don't have an account?{" "}
                    <Link className="text-[#4B39EF]" href="/register">
                        Sign Up here
                    </Link>
                </div>
            </div>
        </main>
    );
}
