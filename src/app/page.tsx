"use client";
import Project from "~/components/project";
import { Paragraph, Tagline } from "~/components/typography";
import WebGL from "~/components/webgl/webgl";

const Home = () => (
  <div className="flex h-screen items-center justify-between p-8 sm:p-16 bg-black">
    <div className="flex flex-col mb-16 lg:mb-0 flex-1 xl:flex-none w-[40vw] relative">
      <h1 className="text-white text-3xl sm:text-4xl font-semibold tracking-tight">
        Kasper Tontti
      </h1>
      <h2 className="text-white text-lg sm:text-xl tracking-normal mb-2">
        Leader, Software Engineer & Designer
      </h2>
      <Paragraph>
        A seasoned software consultant with a decade of hands-on experience in
        crafting user-centric digital solutions. Expertise spans from fullstack
        development with a deep understanding of React & Node.js with
        TypeScript, Python & .NET to cloud solutions on AWS & Azure.
      </Paragraph>

      <Tagline>
        Proven record in leading ambitious projects from pixels to peak
        performance.
      </Tagline>

      <div className="flex mb-4">
        <Project title="co-founder" link="https://gnonce.com/">
          @gnonce
        </Project>
        <Project
          title="sr. software engineer"
          link="https://mvision.ai/"
        >
          @mvision
        </Project>
      </div>
      <Paragraph>
        <b>always building.</b>
      </Paragraph>
      <div className="z-10 absolute -bottom-16 left-0">
        <img src={"/signature.svg"} alt="logo-signature" className="h-12" />
      </div>
    </div>
    <div className="w-[50vw] h-[40vw] relative hidden lg:block">
      <WebGL />
    </div>
  </div>
);

export default Home;
