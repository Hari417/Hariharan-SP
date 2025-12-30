import { useState } from "react";
import { motion } from "framer-motion";

import { styles } from "../../styles";
import { ComputersCanvas } from "../canvas"; // To be implemented

import { useLayout } from "../../context/LayoutContext";
import professionalAvatar from "../../assets/professional_avatar.png";
import creativeAvatar from "../../assets/creative_avatar.png";

const Hero = () => {
    const { isProfessional } = useLayout();
    const [activeSide, setActiveSide] = useState<'left' | 'right' | null>(null);

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isProfessional) return;
        const width = window.innerWidth;
        const x = e.clientX;
        if (x < width / 2) {
            setActiveSide('left');
        } else {
            setActiveSide('right');
        }
    };

    return (
        <section
            className={`relative w-full h-screen mx-auto overflow-hidden ${isProfessional ? 'flex items-center justify-center' : ''}`}
            onMouseMove={handleMouseMove}
            onMouseLeave={() => setActiveSide(null)}
        >

            {/* Hover Background Gradients (Pro Mode) */}
            {isProfessional && (
                <>
                    {/* Left Side Blue Gradient - Constrained to Left Half, Stronger near center */}
                    <div
                        className={`absolute top-0 bottom-0 left-0 w-1/2 bg-gradient-to-r from-transparent to-blue-600/40 transition-opacity duration-500 pointer-events-none z-0 ${activeSide === 'left' ? 'opacity-100' : 'opacity-0'}`}
                    />
                    {/* Right Side Violet Gradient - Constrained to Right Half, Stronger near center */}
                    <div
                        className={`absolute top-0 bottom-0 right-0 w-1/2 bg-gradient-to-l from-transparent to-[#915EFF]/40 transition-opacity duration-500 pointer-events-none z-0 ${activeSide === 'right' ? 'opacity-100' : 'opacity-0'}`}
                    />
                </>
            )}

            <div
                className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5 z-10 pointer-events-none ${isProfessional ? 'justify-center text-center' : ''}`}
            >
                {!isProfessional && (
                    <div className='flex flex-col justify-center items-center mt-5 pointer-events-auto'>
                        <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
                        <div className='w-1 sm:h-80 h-40 violet-gradient' />
                    </div>
                )}

                <div className={`pointer-events-none w-full h-full ${isProfessional ? 'flex flex-row justify-center pb-0' : ''}`}>
                    {/* Left Column: Backend Label Only */}
                    <div className={`${isProfessional ? 'text-left flex-1 flex flex-col justify-center py-20 pl-10' : ''}`}>
                        {/* Backend Label (Bottom Right of Left Column) */}
                        {isProfessional && (
                            <div
                                className={`pointer-events-auto text-right pr-10 pb-20 transition-all duration-300 ${activeSide === 'left' ? 'scale-110 translate-x-4' : ''}`}
                            >
                                <h2 className={`text-4xl font-black tracking-tighter uppercase transition-colors duration-300 ${activeSide === 'left' ? 'text-blue-700' : 'text-slate-800'}`}>
                                    Backend <br /> Dev
                                </h2>
                            </div>
                        )}

                        {/* Creative Mode Text (Hidden in Pro) */}
                        {!isProfessional && (
                            <div>
                                <h1 className={`${styles.heroHeadText} text-white`}>
                                    Hi, I'm <span className='text-[#915EFF]'>Hariharan</span>
                                </h1>
                                <p className={`${styles.heroSubText} mt-2 text-white-100`}>
                                    I'm an AIML Engineer <br className='sm:block hidden' />
                                    I build scalable Solutions.
                                </p>
                            </div>
                        )}
                    </div>

                    {/* Center Column: Split Photo (Pro Only) */}
                    {isProfessional && (
                        <div className="flex-0 z-10 flex items-end justify-center h-full">
                            <div className="relative w-[600px] h-[90vh] mt-auto">
                                {/* Left Half - Professional */}
                                <div
                                    className={`absolute inset-0 w-full h-full transition-all duration-500 ease-out origin-bottom ${activeSide === 'left' ? 'scale-110 z-20 drop-shadow-2xl' : 'scale-100 z-10'}`}
                                >
                                    <img
                                        src={professionalAvatar}
                                        alt="Professional"
                                        className="w-full h-full object-contain object-bottom"
                                        style={{ clipPath: 'polygon(0 0, 50% 0, 50% 100%, 0% 100%)' }}
                                    />
                                </div>
                                {/* Right Half - Creative */}
                                <div
                                    className={`absolute inset-0 w-full h-full transition-all duration-500 ease-out origin-bottom ${activeSide === 'right' ? 'scale-110 z-20 drop-shadow-2xl' : 'scale-100 z-10'}`}
                                >
                                    <img
                                        src={creativeAvatar}
                                        alt="Creative"
                                        className="w-full h-full object-contain object-bottom filter brightness-110 contrast-125"
                                        style={{ clipPath: 'polygon(50% 0, 100% 0, 100% 100%, 50% 100%)' }}
                                    />
                                </div>
                                {/* The Crack/Split Line - Vertical */}
                                <div
                                    className="absolute inset-0 w-full h-full pointer-events-none z-30"
                                    style={{
                                        background: 'linear-gradient(90deg, transparent 49.8%, rgba(255,255,255,0.8) 49.8%, rgba(255,255,255,0.8) 50.2%, transparent 50.2%)',
                                    }}
                                />
                            </div>
                        </div>
                    )}

                    {/* Right Column: AIOT Label Only (Pro Only) */}
                    {isProfessional && (
                        <div className="flex-1 text-left flex flex-col justify-center py-20 pl-10">
                            {/* AIOT Label (Bottom Left of Right Column) */}
                            <div
                                className={`pointer-events-auto text-left transition-all duration-300 ${activeSide === 'right' ? 'scale-110 -translate-x-4' : ''}`}
                            >
                                <h2 className={`text-4xl font-black tracking-tighter uppercase transition-colors duration-300 ${activeSide === 'right' ? 'text-[#915EFF]' : 'text-slate-800'}`}>
                                    AI-IOT <br /> Dev
                                </h2>
                            </div>
                        </div>
                    )}
                </div>      {/* Creative Mode Buttons (Hidden in Pro logic above, but need to ensure structure) */}
                {!isProfessional && (
                    /* This block is empty as Creative layout handles buttons differently or elsewhere, 
                       but for this refactor we are focusing on the conditional structure above. 
                       The original code had buttons ONLY inside isProfessional block. 
                    */
                    null
                )}
            </div>

            {!isProfessional && <ComputersCanvas />}

            {/* Scroll indicator */}
            {/* Scroll indicator - Hidden in Professional Mode */}
            {!isProfessional && (
                <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
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
            )}
        </section >
    );
};

export default Hero;
