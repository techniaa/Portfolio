import { useScroll, motion,useSpring, useTransform } from 'motion/react';
import React from 'react'

const ParallaxBackground=()=> {
    const {scrollYProgress}=useScroll();
    const x= useSpring(scrollYProgress, {damping:50});
    const mountain3Y=useTransform(x,[0,0.5],["0%","70%"]);
     const planatsX=useTransform(x,[0,0.5],["0%","-20%"]);
      const mountain2Y=useTransform(x,[0,0.5],["0%","30%"]);
       const mountain1Y=useTransform(x,[0,0.5],["0%","0%"]);
  return (
    <section className=' absolute inset-0 bg-black/40'>
        <div className='relative h-screen overflow-y-hidden'>
            {/*Background sk*/}
            <div className=' absolute inset-0 w-full h-screen -z-50'
            style={{
                backgroundImage:"url(/assets/Gemini_Generated_Image_b9ueitb9ueitb9ue.png)",
                backgroundPosition:"bottom",
                backgroundSize:"cover"
            }}
           />
           {/*Mountain layer 3*/}
            <motion.div className=' absolute inset-0  -z-40'
            style={{
                backgroundImage:"url(/assets/mountain-3.png)",
                backgroundPosition:"bottom",
                backgroundSize:"cover",
               y:mountain3Y,
            }}
           />
           {/* planets*/}
            <motion.div className=' absolute inset-0  -z-30'
            style={{
                backgroundImage:"url(/assets/planets.png)",
                backgroundPosition:"bottom",
                backgroundSize:"cover",
                x:planatsX,
            }}
           />
            {/* mountain layer 2*/}
            <motion.div className=' absolute inset-0  -z-20'
            style={{
                backgroundImage:"url(/assets/mountain-2.png)",
                backgroundPosition:"bottom",
                backgroundSize:"cover",
                y:mountain2Y
            }}
           />
              {/* mountain layer 1*/}
            <motion.div className=' absolute inset-0  -z-10'
            style={{
                backgroundImage:"url(/assets/mountain-1.png)",
                backgroundPosition:"bottom",
                backgroundSize:"cover",
                y:mountain1Y
            }}
           />

            
        </div>

    </section>
  )
};
export default ParallaxBackground;

