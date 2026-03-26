import { motion } from "framer-motion";

import ParticlesContainer from "../components/ParticlesContainer";
import ProjectsBtn from "../components/ProjectsBtn";
import Avatar from "../components/Avatar";

import { fadeIn } from "../variants";

const Home = () => {
  return (
    <div className="bg-primary/60 h-full ">
      {/* text */}
      <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10 pt-20 lg:pt-0 ">
        <div className=" text-left flex flex-col justify-start pt-20 xl:pt-40 h-full container mx-auto z-50">
          {/* title */}
          <motion.h2
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2"
          >
            Hello, I'm <br />{" "}
            <span className="text-accent bl">Anthokhiya Nath</span> <br />{" "}
            Creative Web Developer
          </motion.h2>

          {/* subtitle */}
          <motion.p
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16"
          >
            Turning ideas into motion with code, GSAP & Framer
          </motion.p>
          {/* btn */}
        <div className="absolute bottom-0 left-40 transform -translate-x-1/2 z-10 block lg:hidden">
          <ProjectsBtn />
        </div>
        </div>
      </div>
      {/* image */}
      <div className="w-[1280px] h-full absolute right-0 bottom-0">
        {/* bg img */}
        <div
          role="img"
          className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0"
          aria-hidden
        />

        {/* particles */}
        <ParticlesContainer />

        {/* btn */}
        <div className="absolute bottom-0 left-40 transform -translate-x-1/2 z-10">
          <ProjectsBtn />
        </div>

        {/* avatar */}
        <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          animate="show"
          exit="hidden"
          transition={{ duration: 1, ease: "easeInOut" }}
          className="w-full h-full max-w-[737px] max-h-[678px] absolute -bottom-32  lg:bottom-10 lg:right-[0%] z-10"
        >
          <Avatar />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
