import { motion } from "framer-motion";

import { styles } from "../../styles";
import { experiences } from "../../constants";
import { SectionWrapper } from "../../hoc";
import { useLayout } from "../../context/LayoutContext";
import { textVariant } from "../../utils/motion";

const ExperienceCard = ({ experience, isProfessional }: { experience: any, isProfessional: boolean }) => {
    return (
        <div
            className="flex flex-col relative pl-8 pb-10 border-l-2 border-secondary last:border-0"
        >
            {/* Icon */}
            <div className={`absolute top-0 -left-[25px] w-[50px] h-[50px] rounded-full border-4 ${isProfessional ? 'border-indigo-50 bg-indigo-50' : 'border-[#1d1836]'} flex justify-center items-center`} style={{ background: isProfessional ? '#eef2ff' : experience.iconBg }}>
                <img
                    src={experience.icon}
                    alt={experience.company_name}
                    className='w-[60%] h-[60%] object-contain'
                />
            </div>

            {/* Content */}
            <div className={`${isProfessional ? 'bg-indigo-50/50 shadow-sm border border-indigo-100 hover:shadow-md hover:bg-indigo-50 hover:-translate-y-1 transition-all duration-300' : 'bg-[#1d1836]'} p-5 rounded-2xl ml-4 sm:ml-8 relative`}>
                {/* Arrow */}
                <div className={`absolute top-4 -left-3 w-0 h-0 border-t-[10px] border-t-transparent border-r-[15px] ${isProfessional ? 'border-r-indigo-50' : 'border-r-[#1d1836]'} border-b-[10px] border-b-transparent transition-all duration-300`}></div>

                <div>
                    <h3 className={`${isProfessional ? 'text-black' : 'text-white'} text-[24px] font-extrabold`}>{experience.title}</h3>
                    <p
                        className={`${isProfessional ? 'text-slate-700' : 'text-secondary'} text-[16px] font-bold`}
                        style={{ margin: 0 }}
                    >
                        {experience.company_name}
                    </p>
                    <p className="text-gray-400 text-[14px] mt-1">{experience.date}</p>
                </div>

                <ul className='mt-5 list-disc ml-5 space-y-2'>
                    {experience.points.map((point: string, index: number) => (
                        <li
                            key={`experience-point-${index}`}
                            className={`${isProfessional ? 'text-slate-700' : 'text-white-100'} text-[14px] pl-1 tracking-wider`}
                        >
                            {point}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

const Experience = () => {
    const { isProfessional } = useLayout();
    return (
        <>
            <motion.div variants={textVariant(0.1)}>
                <p className={`${styles.sectionSubText} text-center ${isProfessional ? '!text-slate-600' : ''}`}>
                    What I have done so far
                </p>
                <h2 className={`${styles.sectionHeadText} text-center ${isProfessional ? '!text-black font-extrabold' : ''}`}>
                    Work Experience.
                </h2>
            </motion.div>

            <div className='mt-20 flex flex-col items-start md:ml-10 ml-0'>
                {experiences.map((experience, index) => (
                    <ExperienceCard
                        key={`experience-${index}`}
                        experience={experience}
                        isProfessional={isProfessional}
                    />
                ))}
            </div>
        </>
    );
};

export default SectionWrapper(Experience, "work");
