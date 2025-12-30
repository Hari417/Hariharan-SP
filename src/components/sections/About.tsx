import { motion } from "framer-motion";
import { FaUser, FaGraduationCap, FaBook, FaMapMarkerAlt, FaEnvelope, FaPhone, FaStar } from "react-icons/fa";

import { styles } from "../../styles";
import { personalInfo } from "../../constants";
import { fadeIn, textVariant } from "../../utils/motion";
import { SectionWrapper } from "../../hoc";
import { useLayout } from "../../context/LayoutContext";

const About = () => {
    const { isProfessional } = useLayout();

    const getIcon = (label: string) => {
        switch (label.toLowerCase()) {
            case 'name': return <FaUser />;
            case 'education': return <FaGraduationCap />;
            case 'course': return <FaBook />;
            case 'location': return <FaMapMarkerAlt />;
            case 'email': return <FaEnvelope />;
            case 'phone': return <FaPhone />;
            case 'cgpa': return <FaStar />;
            default: return <FaUser />;
        }
    };

    return (
        <>
            <div className="flex flex-col lg:flex-row gap-10 w-full items-center">
                {/* Left Column: Text */}
                <div className="w-full lg:w-[60%] flex flex-col gap-4">
                    <motion.div variants={textVariant(0.1)}>
                        <p className={`${styles.sectionSubText} ${isProfessional ? '!text-slate-600' : ''}`}>Introduction</p>
                        <h2 className={`${styles.sectionHeadText} ${isProfessional ? '!text-slate-800' : ''}`}>Overview.</h2>
                    </motion.div>

                    <motion.p
                        variants={fadeIn("", "", 0.1, 1)}
                        className={`text-[17px] leading-[30px] ${isProfessional ? 'text-slate-600' : 'text-secondary'}`}
                    >
                        I’m Hari, an AI & Machine Learning engineer passionate about building intelligent systems that solve real problems.
                        My work is rooted in designing and deploying ML models—especially in computer vision and predictive analytics—and integrating them into robust applications that deliver measurable results.
                        I’m proficient in Python, PyTorch, and OpenCV, and I apply MLOps-aware thinking to optimize models for performance and deployment.
                        Beyond individual models, I build complete workflows that combine data processing, model training,
                        and operational inference pipelines.
                    </motion.p>
                </div>

                {/* Right Column: Personal Details Grid */}
                <motion.div
                    variants={fadeIn("left", "", 0.2, 1)}
                    className={`flex-1 w-full p-6 rounded-2xl ${isProfessional
                        ? 'bg-gradient-to-br from-indigo-50 to-white border border-indigo-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)]'
                        : 'bg-tertiary'
                        } h-fit`}
                >
                    <h3 className={`text-[20px] font-bold mb-6 ${isProfessional ? '!text-blue-900' : 'text-white'} border-b ${isProfessional ? 'border-blue-300' : 'border-gray-700'} pb-4`}>
                        Personal Details
                    </h3>

                    <div className="grid grid-cols-1 gap-4">
                        {personalInfo.map((info, index) => (
                            <div key={index} className={`flex items-center gap-4 p-3 rounded-xl transition-all ${isProfessional
                                ? 'bg-white/50 hover:bg-blue-100/50 border border-transparent hover:border-blue-200'
                                : 'bg-black/20 hover:bg-white/10 border border-transparent hover:border-white/20'
                                }`}>
                                <div className={`p-3 rounded-full text-lg ${isProfessional ? 'bg-blue-100 text-blue-600' : 'bg-black/30 text-secondary'}`}>
                                    {getIcon(info.label)}
                                </div>
                                <div className="flex flex-col">
                                    <span className={`text-xs font-medium uppercase tracking-wider ${isProfessional ? 'text-slate-500' : 'text-secondary'}`}>
                                        {info.label}
                                    </span>
                                    <span className={`font-semibold text-sm sm:text-[15px] ${isProfessional ? 'text-slate-800' : 'text-white'}`}>
                                        {info.value}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </>
    );
};

export default SectionWrapper(About, "about");
