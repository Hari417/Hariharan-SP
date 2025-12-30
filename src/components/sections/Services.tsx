import { motion } from "framer-motion";
import { styles } from "../../styles";
import { services } from "../../constants";
import { fadeIn, textVariant } from "../../utils/motion";
import { SectionWrapper } from "../../hoc";
import { useLayout } from "../../context/LayoutContext";

const ServiceRow = ({ index, title, icon, description, isProfessional }: { index: number; title: string; icon: string, description?: string, isProfessional: boolean }) => (
    <motion.div
        variants={fadeIn("up", "spring", index * 0.1, 0.75)}
        className={`w-full flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-6 items-center justify-between p-6 rounded-[24px] ${isProfessional ? 'bg-gradient-to-r from-blue-100 to-white border border-blue-200 shadow-lg shadow-blue-100/50 hover:shadow-blue-200' : 'bg-tertiary/30 hover:bg-tertiary/50'} transition-all duration-300`}
    >
        {/* Icon/Image Section */}
        <div className={`w-full md:w-1/3 flex justify-center items-center`}>
            <div className={`w-24 h-24 rounded-full flex items-center justify-center ${isProfessional ? 'bg-blue-200 shadow-inner' : 'bg-white/10 shadow-lg'}`}>
                <img src={icon} alt={title} className='w-12 h-12 object-contain' />
            </div>
        </div>

        {/* Text Section */}
        <div className={`w-full md:w-2/3 flex flex-col gap-2 ${index % 2 === 0 ? 'md:items-start md:text-left' : 'md:items-end md:text-right'} items-center text-center`}>
            <h3 className={`text-[20px] md:text-[26px] font-bold ${isProfessional ? 'text-blue-900' : 'text-white'}`}>
                {title}
            </h3>
            <p className={`text-[15px] leading-[26px] ${isProfessional ? 'text-blue-800/80' : 'text-gray-300'} max-w-2xl`}>
                {description}
            </p>
        </div>
    </motion.div>
);

const Services = () => {
    const { isProfessional } = useLayout();
    return (
        <>
            <motion.div variants={textVariant(0.1)} className="mb-10">
                <p className={`${styles.sectionSubText} text-center ${isProfessional ? '!text-slate-600' : ''}`}>
                    What I offer
                </p>
                <h2 className={`${styles.sectionHeadText} text-center ${isProfessional ? '!text-slate-800' : ''}`}>
                    Solutions & Services.
                </h2>
            </motion.div>

            <div className='flex flex-col gap-6 md:gap-10 w-full'>
                {services.map((service, index) => (
                    <ServiceRow key={service.title} index={index} {...service} isProfessional={isProfessional} />
                ))}
            </div>
        </>
    );
};

export default SectionWrapper(Services, "services");
