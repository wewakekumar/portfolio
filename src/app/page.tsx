import Header from "@/components/Header/Header";
import Image from "next/image";

import wewake from "@/assets/image/wewake.png";
import Button from "@/components/Button/Button";
import ContactLinks from "@/components/ContactLinks/ContactLinks";
import About from "./about/page";

import { mySkills } from "@/constants/mySkills";
import Card from "@/components/Card/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Projects from "@/screens/projects/Projects";
import Skills from "@/screens/Skills/Skills";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-between">
      <Header />
      <div className="flex items-center justify-center gap-x-12">
        <div className="flex flex-col items-start gap-y-4">
          <p className="text-2xl">
            I'M{" "}
            <span className="text-5xl ml-2 text-primary">
              <b>Vivek Kumar</b>
            </span>
          </p>
          <p className="text-2xl">Frontend Developer</p>
          <Button className="text-2xl px-6 py-2 rounded-lg border-4 border-primary text-primary hover:bg-primary hover:text-tertiary">
            Contact Me
          </Button>
        </div>
        <div className="relative">
          <Image height={550} width={550} src={wewake} alt="developer-image" />
          <div className="absolute bottom-10 right-0">
            <ContactLinks
              links={[
                {
                  url: "https://www.linkedin.com/in/wewakekumar/",
                  type: "PHONE",
                },
                {
                  url: "https://www.linkedin.com/in/wewakekumar/",
                  type: "LINKEDIN",
                },
                {
                  url: "https://www.linkedin.com/in/wewakekumar/",
                  type: "EMAIL",
                },
                {
                  url: "https://www.linkedin.com/in/wewakekumar/",
                  type: "TWITTER",
                },
              ]}
            />
          </div>
        </div>
      </div>
      <div>
        <About />
      </div>
      <Skills />
      <Projects />
    </main>
  );
}
