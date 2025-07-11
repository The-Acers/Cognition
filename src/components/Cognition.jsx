import { motion } from "framer-motion";
import Words from "./Words";

export default function Cognition() {
  const frames = [
    { top: "30%", left: "5%", rotate: "15deg", text: "EPISODE 2" },
    { top: "45%", left: "75%", rotate: "15deg", text: "EPISODE 3" },
    { top: "65%", left: "30%", rotate: "-5deg", text: "To Be Revealed...." },
    { top: "60%", left: "65%", rotate: "10deg", text: "EPISODE 4" },
    { top: "10%", left: "15%", rotate: "-10deg", text: "IDEATION" },
  ];

  return (
    <div className="relative flex flex-col items-center justify-center h-screen overflow-hidden">
      {/* Yellow Floating Frames */}
      {frames.map((frame, index) => (
        <motion.div
          key={index}
          className="absolute hidden w-40 h-40 md:w-56 md:h-56 rounded-2xl border-8 border-white bg-gradient-to-br from-yellow-400 to-yellow-600 md:flex items-center justify-center text-transparent font-semibold text-lg md:text-xl"
          style={{
            top: frame.top,
            left: frame.left,
          }}
          initial={{ rotate: frame.rotate }}
          animate={{ rotate: frame.rotate }}
          whileHover={{
            scale: 1.05,
            rotate: "0deg",
            color: "white",
          }}
          transition={{ duration: 0.3 }}
          onHoverEnd={() => {
            document.getElementById(
              `frame-${index}`
            ).style.transform = `rotate(${frame.rotate})`;
          }}
          id={`frame-${index}`}
        >
          {frame.text}
        </motion.div>
      ))}

      {/* Text and Buttons */}
      <div className="relative flex flex-col items-center justify-center space-y-4">
        {/* "GitHub Presents" text */}

        <Words />
        <div className="items-center justify-center space-x-6 flex">
          <motion.img
            src="./github-education-logo.jpeg" // replace with your left image
            alt="Left"
            className="w-12 md:w-16 object-cover rounded-full"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          />
          <motion.div
            className="text-white font-thin text-2xl md:text-3xl"
            whileHover={{ scale: 1.05, fontWeight: 700 }}
            transition={{ duration: 0.3 }}
          >
            GitHub Presents
          </motion.div>
        </div>
        {/* Two images side by side and centered */}
        <div className="flex items-center justify-center space-x-6">
          {/* Left image */}

          {/* Cognition image */}
          <motion.img
            src="./cognition.png"
            alt="Cognition"
            className="w-72 md:w-96"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          />
        </div>

        {/* Buttons */}
        <div className="flex space-x-4">
          <a
            className="mt-6 inline-block bg-white text-yellow-600 hover:bg-gradient-to-r hover:from-yellow-500 hover:to-yellow-800 hover:text-white px-5 py-3 rounded-lg text-sm md:text-lg font-bold transition-colors duration-500 hover:shadow-lg"
            href="/"
          >
            Call for Registration
            <span className="text-sm text-gray-600 text-center hover:text-black block">
              (COMING SOON)
            </span>
          </a>

          <a
            className="mt-6 inline-block bg-white text-yellow-600 hover:bg-gradient-to-r hover:from-yellow-500 hover:to-yellow-800 hover:text-white px-5 py-3 rounded-lg text-sm md:text-lg font-bold transition-colors duration-500 hover:shadow-lg"
            href="//forms.gle/zTYsrLw2VwotBF367"
          >
            Join The Campaign!! <br />
            <span className="text-sm text-gray-600 text-center hover:text-black">
              (FOR FREE PASSES)
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}
