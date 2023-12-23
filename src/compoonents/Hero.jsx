import { motion } from "framer-motion";
import { styles } from "../styles";
import Profile from '../assets/profile.png' 

const Hero = () => {
  return (
    <section className={`relative w-full h-[90vh] mx-auto justify-between`}>
      <div
        className={`absolute inset-0 top-[50px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#915EFF]'>Ravindra</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Fronted Developer "Transforming ideas <br className='sm:block hidden' />
            into seamless digital experiences with code." 
          </p>
        </div>
      </div>
      
      <img src={Profile} className="sm:w-[32%] w-[65%] flex absolute md:right-[5%] right-[15%] bottom-0 z-10 opacity-60"/>

      <div className='absolute hidden  xs:bottom-10 bottom-32 w-full md:flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
