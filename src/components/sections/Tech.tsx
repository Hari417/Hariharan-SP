import { motion } from "framer-motion";
import { SectionWrapper } from "../../hoc";
import { skills } from "../../constants";
import { useLayout } from "../../context/LayoutContext";
import { fadeIn, textVariant } from "../../utils/motion";
import { styles } from "../../styles";

const SkillCard = ({ title, items, index, isProfessional }: { title: string, items: any[], index: number, isProfessional: boolean }) => (
    <motion.div
        variants={fadeIn("up", "spring", index * 0.1, 0.75)}
        className={`w-full p-6 rounded-[20px] ${isProfessional ? 'bg-white shadow-lg border border-slate-100' : 'bg-tertiary border border-gray-800'}`}
    >
        <h3 className={`text-[20px] font-bold mb-6 text-center ${isProfessional ? 'text-indigo-900' : 'text-white'}`}>
            {title}
        </h3>
        <div className="flex flex-wrap justify-center gap-4">
            {items.map((skill) => (
                <div key={skill.name} className="flex flex-col items-center gap-2 group">
                    <div className={`w-14 h-14 rounded-xl flex items-center justify-center p-2 transition-all duration-300 ${isProfessional ? 'bg-slate-50 group-hover:bg-indigo-50 group-hover:scale-110' : 'bg-black-200 group-hover:bg-white/10 group-hover:scale-110'}`}>
                        <img src={skill.icon} alt={skill.name} className="w-full h-full object-contain" />
                    </div>
                    <p className={`text-[12px] font-medium ${isProfessional ? 'text-slate-600' : 'text-gray-400'}`}>
                        {skill.name}
                    </p>
                </div>
            ))}
        </div>
    </motion.div>
);

const Tech = () => {
    const { isProfessional } = useLayout();

    return (
        <>
            <motion.div variants={textVariant(0.1)} className="mb-14">
                <p className={`${styles.sectionSubText} text-center ${isProfessional ? '!text-slate-600' : ''}`}>
                    My technical expertise
                </p>
                <h2 className={`${styles.sectionHeadText} text-center ${isProfessional ? '!text-slate-800' : ''}`}>
                    Skills & Technologies.
                </h2>
            </motion.div>

            <div className='flex flex-col gap-8'>
                {/* First Row: Programming & Tools (2 columns if desktop) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {skills.slice(0, 2).map((category, index) => (
                        <SkillCard
                            key={category.title}
                            title={category.title}
                            items={category.skills}
                            index={index}
                            isProfessional={isProfessional}
                        />
                    ))}
                </div>

                {/* Second Row: CV & Libraries & ML/DL (3 columns if desktop) */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {skills.slice(2, 5).map((category, index) => (
                        <SkillCard
                            key={category.title}
                            title={category.title}
                            items={category.skills}
                            index={index + 2}
                            isProfessional={isProfessional}
                        />
                    ))}
                </div>
            </div>
        </>
    );
};

export default SectionWrapper(Tech, "tech");
