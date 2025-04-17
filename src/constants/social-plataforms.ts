import { type IconName } from "@/components/Icon.astro";
type socialPlataformsObject = {
  plataform: IconName;
  url: string;
  color: string;
};

const SOCIAL_PLATAFORMS: socialPlataformsObject[] = [
  {
    plataform: "github",
    url: "https://github.com/Davidvela-306",
    color: "#fff",
  },
  {
    plataform: "linkedin",
    url: "https://www.linkedin.com/in/davidvela306/",
    color: "#fff",
  },
  {
    plataform: "instagram",
    url: "https://www.instagram.com/davidvela306/",
    color: "#fff",
  },
];

export default SOCIAL_PLATAFORMS;
