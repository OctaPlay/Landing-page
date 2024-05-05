import { CardHover } from "@/components/aceternity/CardHover";
import Image from "next/image";
import logo from "@/components/assets/logo.png";
export default function Home() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-8 sm:py-16">
            <div className="mb-8 max-w-xs sm:max-w-none sm:mb-16">
                <Image src={logo} alt="Logo" width={200} height={200} />
            </div>
            <h1 className="text-3xl font-bold text-white text-center mb-6 sm:text-4xl">
                We are not released yet. Please join our{" "}
                <a
                    href="https://discord.gg/qT2342YjRJ"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-400 hover:text-green-500 relative z-10"
                >
                    Discord
                </a>{" "}
                to stay updated.
            </h1>

            <CardHover />
        </div>
    );
}
