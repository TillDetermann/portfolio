
import {
	FaWindows,
	FaApple,
	FaLinux
} from "react-icons/fa";
import { DiJava, DiWindows } from "react-icons/di";
import {
    SiMacos,
    SiLinux,
    SiSwift,
    SiTypescript,
    SiJavascript,
    SiHtml5,
    SiCsswizardry,
    SiDotnet,
    SiC,
    SiOllama,
    SiNodedotjs,
    SiNpm,
    SiAngular,
    SiGit,
    SiSvelte,
    SiPython
} from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";
import { AiFillFileWord } from "react-icons/ai";

export const SkillsData = [
	// Digital Skills
	{ name: "macOS", icon: <SiMacos />, category: "digital-skills" },
	{ name: "Windows", icon: <DiWindows />, category: "digital-skills" },
	{ name: "Linux", icon: <SiLinux />, category: "digital-skills" },
	{ name: "Microsoft Office", icon: <AiFillFileWord />, category: "digital-skills" },

	// Programming Languages
	{ name: "Python", icon: <SiPython />, category: "programming-languages" },
	{ name: "Swift", icon: <SiSwift />, category: "programming-languages" },
	{ name: "TypeScript", icon: <SiTypescript />, category: "programming-languages" },
	{ name: "JavaScript", icon: <SiJavascript />, category: "programming-languages" },
	{ name: "HTML", icon: <SiHtml5 />, category: "programming-languages" },
	{ name: "CSS", icon: <SiCsswizardry />, category: "programming-languages" },
	{ name: "C#", icon: <TbBrandCSharp />, category: "programming-languages" },
	{ name: "C", icon: <SiC />, category: "programming-languages" },
	{ name: "Java", icon: <DiJava />, category: "programming-languages" },

	// Tools/Frameworks
	{ name: "Ollama", icon: <SiOllama />, category: "tools-frameworks" },
	{ name: ".NET", icon: <SiDotnet />, category: "tools-frameworks" },
	{ name: "Node.js", icon: <SiNodedotjs />, category: "tools-frameworks" },
	{ name: "npm", icon: <SiNpm />, category: "tools-frameworks" },
	{ name: "Angular", icon: <SiAngular />, category: "tools-frameworks" },
	{ name: "Svelte", icon: <SiSvelte />, category: "tools-frameworks" },
	{ name: "Git", icon: <SiGit />, category: "tools-frameworks" },
];