import { motion } from 'framer-motion';
import { styles } from '../styles';
import portbg from '../assets/tech/portbg.mp4'

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1] opacity-60"
        autoPlay
        loop
        muted
      >
        <source src={portbg} type="video/mp4" />
      </video>

      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#6786b5]" />
          <div className="w-1 sm:h-80 h-40"
            style={{
              background: 'linear-gradient(to bottom, #6786b5 0%, rgba(15, 43, 85, 0) 100%)',
            }} />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#6786b5]">Khushal!</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop wonderful new-gen
            <br/>
            websites and web applications.
          </p>
        </div>
      </div>

      {/* Computers Canvas */}


      {/* Scroll Indicator */}
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-white flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop',
              }}
              className="w-3 h-3 rounded-full bg-white mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
