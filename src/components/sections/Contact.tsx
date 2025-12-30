import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../../styles";
// import { EarthCanvas } from "../canvas"; // Future implementation
import { SectionWrapper } from "../../hoc";
import { useLayout } from "../../context/LayoutContext";
import { slideIn } from "../../utils/motion";

import myImage from "../../assets/MyImage.png";

const Contact = () => {
    const formRef = useRef(null);
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [loading, setLoading] = useState(false);
    const { isProfessional } = useLayout();

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        setLoading(true);

        emailjs.send(
            import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
            {
                from_name: form.name,
                to_name: "Hariharan",
                from_email: form.email,
                to_email: "hariharansp2050@gmail.com",
                message: form.message,
            },
            import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
        ).then(() => {
            setLoading(false);
            alert('Thank you. I will get back to you as soon as possible.');
            setForm({ name: '', email: '', message: '' });
        }, (error) => {
            setLoading(false);
            console.error(error);
            alert(`Error: ${error.text || JSON.stringify(error)}`);
        });
    };

    return (
        <div
            className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
        >
            <motion.div
                variants={slideIn("left", "tween", 0.2, 1)}
                className={`flex-[0.75] ${isProfessional ? 'bg-indigo-50 shadow-xl shadow-indigo-100/50 border border-indigo-100' : 'bg-black-100'} p-8 rounded-2xl`}
            >
                <p className={`${styles.sectionSubText} ${isProfessional ? '!text-slate-600' : ''}`}>Get in touch</p>
                <h3 className={`${styles.sectionHeadText} ${isProfessional ? '!text-slate-800' : ''}`}>Contact.</h3>

                <form
                    ref={formRef}
                    onSubmit={handleSubmit}
                    className='mt-12 flex flex-col gap-8'
                >
                    <label className='flex flex-col'>
                        <span className={`font-medium mb-4 ${isProfessional ? 'text-slate-700' : 'text-white'}`}>Your Name</span>
                        <input
                            type='text'
                            name='name'
                            value={form.name}
                            onChange={handleChange}
                            placeholder="What's your name?"
                            className={`${isProfessional ? 'bg-white border border-indigo-200 text-indigo-900 focus:border-indigo-500' : 'bg-tertiary text-white'} py-4 px-6 placeholder:text-secondary rounded-lg outline-none border-none font-medium`}
                        />
                    </label>
                    <label className='flex flex-col'>
                        <span className={`font-medium mb-4 ${isProfessional ? 'text-slate-700' : 'text-white'}`}>Your Email</span>
                        <input
                            type='email'
                            name='email'
                            value={form.email}
                            onChange={handleChange}
                            placeholder="What's your web address?"
                            className={`${isProfessional ? 'bg-white border border-slate-300 text-slate-800' : 'bg-tertiary text-white'} py-4 px-6 placeholder:text-secondary rounded-lg outline-none border-none font-medium`}
                        />
                    </label>
                    <label className='flex flex-col'>
                        <span className={`font-medium mb-4 ${isProfessional ? 'text-slate-700' : 'text-white'}`}>Your Message</span>
                        <textarea
                            rows={7}
                            name='message'
                            value={form.message}
                            onChange={handleChange}
                            placeholder='What you want to say?'
                            className={`${isProfessional ? 'bg-white border border-slate-300 text-slate-800' : 'bg-tertiary text-white'} py-4 px-6 placeholder:text-secondary rounded-lg outline-none border-none font-medium`}
                        />
                    </label>

                    <button
                        type='submit'
                        className={`${isProfessional ? 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-indigo-200' : 'bg-tertiary text-white shadow-primary'} py-3 px-8 rounded-xl outline-none w-fit font-bold shadow-md transition-colors`}
                    >
                        {loading ? "Sending..." : "Send"}
                    </button>
                </form>
            </motion.div>

            <motion.div
                variants={slideIn("right", "tween", 0.2, 1)}
                className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
            >
                {/* User Image */}
                <div className={`w-full h-full ${isProfessional ? 'bg-white border border-slate-200' : 'bg-black-200'} rounded-2xl flex items-center justify-center overflow-hidden`}>
                    <img
                        src={myImage}
                        alt="Hari"
                        className="w-full h-full object-cover rounded-2xl"
                    />
                </div>
            </motion.div>
        </div>
    );
};

export default SectionWrapper(Contact, "contact");
