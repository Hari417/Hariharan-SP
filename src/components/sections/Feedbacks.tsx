import { motion } from "framer-motion";

import { styles } from "../../styles";
import { SectionWrapper } from "../../hoc";
import { useLayout } from "../../context/LayoutContext";
import { fadeIn, textVariant } from "../../utils/motion";
import { testimonials } from "../../constants";

const FeedbackCard = ({
    index,
    testimonial,
    name,
    designation,
    company,
    image,
    isProfessional
}: any) => (
    <motion.div
        variants={fadeIn("", "spring", index * 0.5, 0.75)}
        className={`${isProfessional ? 'bg-white shadow-lg shadow-indigo-100/50 border border-indigo-50' : 'bg-black-200'} p-10 rounded-3xl xs:w-[320px] w-full`}
    >
        <p className={`${isProfessional ? 'text-slate-800' : 'text-white'} font-black text-[48px]`}>"</p>

        <div className='mt-1'>
            <p className={`${isProfessional ? 'text-slate-700' : 'text-white'} tracking-wider text-[18px]`}>{testimonial}</p>

            <div className='mt-7 flex justify-between items-center gap-1'>
                <div className='flex-1 flex flex-col'>
                    <p className={`${isProfessional ? 'text-slate-800' : 'text-white'} font-medium text-[16px]`}>
                        <span className='text-blue-text-gradient'>@</span> {name}
                    </p>
                    <p className={`mt-1 ${isProfessional ? 'text-slate-500' : 'text-secondary'} text-[12px]`}>
                        {designation} of {company}
                    </p>
                </div>

                <img
                    src={image}
                    alt={`feedback_by-${name}`}
                    className='w-10 h-10 rounded-full object-cover'
                />
            </div>
        </div>
    </motion.div>
);

const Feedbacks = () => {
    const { isProfessional } = useLayout();
    return (
        <div className={`mt-12 ${isProfessional ? 'bg-slate-50' : 'bg-black-100'} rounded-[20px]`}>
            <div
                className={`${isProfessional ? 'bg-indigo-100/50' : 'bg-tertiary'} rounded-2xl ${styles.padding} min-h-[300px]`}
            >
                <motion.div variants={textVariant(0.1)}>
                    <p className={`${styles.sectionSubText} ${isProfessional ? '!text-slate-600' : ''}`}>What others say</p>
                    <h2 className={`${styles.sectionHeadText} ${isProfessional ? '!text-slate-800' : ''}`}>Testimonials.</h2>
                </motion.div>
            </div>
            <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
                {testimonials.map((testimonial, index) => (
                    <FeedbackCard key={testimonial.name} index={index} {...testimonial} isProfessional={isProfessional} />
                ))}
            </div>
        </div>
    );
};

export default SectionWrapper(Feedbacks, "");
