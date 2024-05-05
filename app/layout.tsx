import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/custom/Footer";
import { BackgroundBeams } from "@/components/aceternity/background-beams";
import Head from "next/head";
import Header from "./head";

const inter = Inter({ subsets: ["latin"] });

const keywords = [
    "game hosting",
    "minecraft hosting",
    "game server hosting",
    "gaming community",
    "enterprise hosting",
    "dedicated servers",
    "cloud hosting",
    "virtual private servers",
    "game server management",
    "high-performance hosting",
    "competitive gaming",
    "multiplayer gaming",
    "online gaming",
    "streaming servers",
    "content delivery network",
    "game development hosting",
    "modded server hosting",
    "game server management",
    "scalable hosting solutions",
    "custom game hosting",
    "robust infrastructure",
    "reliable hosting services",
    "best game hosting provider",
    "affordable game hosting",
    "secure game hosting",
    "24/7 support",
    "global server locations",
    "low-latency hosting",
    "customizable server configurations",
    "competitive pricing",
    "dedicated gaming support",
    "managed hosting services",
    "game server optimization",
    "fast and reliable",
    "high-performance network",
    "advanced security features",
    "uptime guarantee",
    "game server monitoring",
    "flexible hosting plans",
    "easy setup and management",
    "free migrations",
    "game-specific optimizations",
    "community-driven hosting",
    "best-in-class hosting solutions",
    "premium game hosting services",
    "ultimate gaming experience",
    "game hosting",
    "minecraft hosting",
    "minecraft server hosting",
    "minecraft community",
    "minecraft server management",
    "minecraft modded server hosting",
    "minecraft server optimization",
    "minecraft server plugins",
    "minecraft server customization",
    "minecraft server setup",
    "minecraft server configurations",
    "minecraft network hosting",
    "minecraft networking",
    "minecraft server monitoring",
    "minecraft server optimization",
    "best minecraft hosting provider",
    "affordable minecraft hosting",
    "secure minecraft hosting",
    "minecraft server support",
    "24/7 minecraft server hosting",
    "global minecraft server locations",
    "low-latency minecraft hosting",
    "customizable minecraft server plans",
    "dedicated minecraft server support",
    "managed minecraft hosting services",
    "fast and reliable minecraft hosting",
    "high-performance minecraft network",
    "minecraft server security",
    "minecraft server uptime guarantee",
    "minecraft server monitoring",
    "flexible minecraft hosting plans",
    "easy setup and management for minecraft servers",
    "free minecraft server migrations",
    "minecraft-specific optimizations",
    "community-driven minecraft hosting",
    "premium minecraft hosting services",
    "ultimate minecraft server experience",
].join(", ");

export const metadata: Metadata = {
    title: "OctaPlay",
    description:
        "The only one stop portal for all your enterprise hosting needs.",
    keywords,
};

export default function RootLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en">
            <body className="min-h-screen bg-neutral-950 relative flex flex-col antialiased sm:min-h-full">
                <BackgroundBeams />
                <div className="flex-grow">{children}</div>
                <Footer />
            </body>
        </html>
    );
}
