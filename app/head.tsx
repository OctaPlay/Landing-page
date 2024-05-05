import Head from "next/head";

const Header = () => {
    const siteName = "OctaPlay";
    const siteUrl = "https://octaplay.net";
    const slogan =
        "The only one stop portal for all your enterprise hosting needs.";

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

    return (
        <Head>
            <title>{siteName}</title>
            <meta name="description" content={slogan} />
            <meta name="keywords" content={keywords} />

            <meta property="og:type" content="website" />
            <meta property="og:url" content={siteUrl} />
            <meta property="og:title" content={siteName} />
            <meta property="og:description" content={slogan} />
            <meta property="og:image" content="/logo.png" />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta property="og:site_name" content={siteName} />

            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={siteUrl} />
            <meta property="twitter:title" content={siteName} />
            <meta property="twitter:description" content={slogan} />
            <meta property="twitter:image" content="/twitter-image.jpg" />
            <meta property="twitter:image:width" content="1200" />
            <meta property="twitter:image:height" content="630" />
            <meta property="twitter:site" content="@octaplay" />

            <meta name="robots" content="index, follow" />
            <link rel="canonical" href={siteUrl} />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1"
            />

            <meta name="slogan" content={slogan} />
        </Head>
    );
};
export default Header;
