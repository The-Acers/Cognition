import { motion } from "framer-motion";

const sponsors = [
  {
    name: "Github",
    logo: "./github-education-logo.jpeg",
    link: "https://github.com/education",
  },
  {
    name: "CodeCrafters",
    logo: "./codecrafters.png",
    link: "https://codecrafters.io/",
  },
];

export default function Sponsor() {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center px-4 space-y-8">
      {/* Heading */}
      <motion.h2
        className="text-white text-6xl md:text-9xl font-thin font-poppins text-center"
        whileHover={{ scale: 1.05, fontWeight: 700 }}
        transition={{ duration: 0.3 }}
      >
        Our Sponsor
      </motion.h2>

      {/* Card Container */}
      <div className="w-full max-w-[90vw] md:max-w-[50vw] bg-black border border-white rounded-xl p-6 flex flex-wrap justify-center gap-6">
        {sponsors.map((sponsor, index) => (
          <motion.a
            key={index}
            href={sponsor.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <motion.img
              src={sponsor.logo}
              alt={sponsor.name}
              className="w-24 h-24 object-cover rounded-full"
            />
          </motion.a>
        ))}
      </div>
    </div>
  );
}
