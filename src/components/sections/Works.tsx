import { motion } from "framer-motion";
import { styles } from "../../styles";
// import { github } from "../../assets"; // Need assets
import { SectionWrapper } from "../../hoc";
import { useLayout } from "../../context/LayoutContext";
import { projects } from "../../constants";
import { fadeIn, textVariant } from "../../utils/motion";

const ProjectCard = ({
    index,
    name,
    description,
    tags,
    image,
    source_code_link,
    live_link,
    isProfessional
}: any) => {
    return (
        <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
            <div
                className={`p-5 rounded-2xl sm:w-[360px] w-full transition-all duration-300 ${isProfessional ? 'bg-indigo-50 shadow-sm border border-indigo-100 hover:shadow-lg hover:shadow-indigo-100/40 hover:-translate-y-2' : 'bg-tertiary'}`}
            >
                <div className='relative w-full h-[230px]'>
                    <img
                        src={image}
                        alt='project_image'
                        className='w-full h-full object-cover rounded-2xl'
                    />

                    <div className='absolute inset-0 flex justify-end m-3 card-img_hover gap-2'>
                        {/* Live Link */}
                        {live_link && (
                            <div
                                onClick={() => window.open(live_link, "_blank")}
                                className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
                                title="Live Demo"
                            >
                                <span className="text-white text-[10px] font-bold">LIVE</span>
                            </div>
                        )}
                        {/* GitHub Link */}
                        <div
                            onClick={() => window.open(source_code_link, "_blank")}
                            className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
                            title="Source Code"
                        >
                            <span className="text-white text-[10px] font-bold">CODE</span>
                        </div>
                    </div>
                </div>

                <div className='mt-5'>
                    <h3 className={`${isProfessional ? 'text-slate-800' : 'text-white'} font-bold text-[24px]`}>{name}</h3>
                    <p className={`mt-2 text-[14px] ${isProfessional ? 'text-slate-600' : 'text-secondary'}`}>{description}</p>
                </div>

                <div className='mt-4 flex flex-wrap gap-2'>
                    {tags.map((tag: any) => (
                        <p
                            key={`${name}-${tag.name}`}
                            className={`text-[14px] ${tag.color}`}
                        >
                            #{tag.name}
                        </p>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

const Works = () => {
    const { isProfessional } = useLayout();
    return (
        <>
            <motion.div variants={textVariant(0.1)}>
                <p className={`${styles.sectionSubText} ${isProfessional ? '!text-slate-600' : ''}`}>My work</p>
                <h2 className={`${styles.sectionHeadText} ${isProfessional ? '!text-slate-800' : ''}`}>Projects.</h2>
            </motion.div>

            <div className='w-full flex'>
                <motion.p
                    variants={fadeIn("", "", 0.1, 1)}
                    className={`mt-3 text-[17px] max-w-3xl leading-[30px] ${isProfessional ? 'text-slate-600' : 'text-secondary'}`}
                >
                    Following projects showcases my skills and experience through
                    real-world examples of my work. Each project is briefly described with
                    links to code repositories and live demos in it. It reflects my
                    ability to solve complex problems, work with different technologies,
                    and manage projects effectively.
                </motion.p>
            </div>

            <div className='mt-20 flex flex-wrap gap-7'>
                {projects.map((project, index) => (
                    <ProjectCard key={`project-${index}`} index={index} {...project} isProfessional={isProfessional} />
                ))}
            </div>
        </>
    );
};

export default SectionWrapper(Works, "");
