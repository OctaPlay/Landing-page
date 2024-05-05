import { HoverEffect } from "../ui/card-hover-effect";

export function CardHover() {
    return (
        <div className=" mx-auto px-8 w-[98.7vw] ">
            <HoverEffect items={projects} />
        </div>
    );
}
export const projects = [
    {
        title: "Jaron De Klein",
        description:
            "Jaron De Klein is the CEO and the brain behind OctaPlay's innovative technology infrastructure. For contact, reach out to Jaron for any inquiries or collaborations.",
        link: "mailto:jaron@octaplay.net",
        image: "https://cdn.discordapp.com/avatars/265791535386329091/911521d4b24dbd5f4b6c90333fdf0970.png?size=1024",
        email: "jaron@octaplay.net",
    },
    {
        title: "Ritam Choudhuri",
        description:
            "Ritam is the technical genius behind OctaPlay's groundbreaking technology solutions. For technical inquiries or assistance, feel free to reach out to Ritam.",
        link: "mailto:xcyth@octaplay.net",
        image: "https://cdn.discordapp.com/avatars/338190277552635904/5a7ab3e77c646ff9ceaff01497f25bea.png?size=1024",
        email: "xcyth@octaplay.net",
    },
    {
        title: "OctaPlay Business",
        description:
            "OctaPlay Business serves as our primary business contact. For inquiries related to partnerships, collaborations, or business opportunities, please reach out to OctaPlay Business.",
        link: "mailto:business@octaplay.net",
        image: "https://cdn.discordapp.com/attachments/1235181143033380908/1236109323499868191/octaplay-favicon-color.png?ex=6638ca44&is=663778c4&hm=540ed4da395d0c20d3698c5d5cdbfd4016f7e6d3a0ccff748563d96fd4b8b6ad&",
        email: "business@octaplay.net",
    },
];
