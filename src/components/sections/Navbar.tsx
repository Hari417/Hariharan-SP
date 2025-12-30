import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../../styles";
import { useLayout } from "../../context/LayoutContext";

const Navbar = () => {
    const [active, setActive] = useState("");
    const [scrolled, setScrolled] = useState(false);
    const [toggle, setToggle] = useState(false);
    const { isProfessional, toggleMode } = useLayout();

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            if (scrollTop > 100) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        {
            id: "about",
            title: "About",
        },
        {
            id: "work",
            title: "Work",
        },
        {
            id: "contact",
            title: "Contact",
        },
    ];

    return (
        <nav
            className={`${styles.paddingX
                } w-full flex items-center py-5 fixed top-0 z-20 ${scrolled
                    ? (isProfessional ? "bg-white/80 backdrop-blur-md shadow-sm" : "bg-primary")
                    : "bg-transparent"
                }`}
        >
            <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
                <Link
                    to='/'
                    className='flex items-center gap-2'
                    onClick={() => {
                        setActive("");
                        window.scrollTo(0, 0);
                    }}
                >
                    <img src={'/portfolio.svg'} alt='logo' className={`w-9 h-9 object-contain ${!isProfessional ? 'invert' : ''}`} />
                    <p className={`${isProfessional ? "text-slate-900" : "text-white"} text-[18px] font-bold cursor-pointer flex `}>
                        Hariharan &nbsp;
                        <span className='sm:block hidden'> | Portfolio</span>
                    </p>
                </Link>

                <div className='hidden sm:flex flex-row items-center gap-8'>
                    <ul className='list-none flex flex-row gap-10'>
                        {navLinks.map((nav) => (
                            <li
                                key={nav.id}
                                className={`${active === nav.title ? (isProfessional ? "text-slate-900" : "text-white") : (isProfessional ? "text-slate-600" : "text-secondary")
                                    } hover:text-white text-[18px] font-medium cursor-pointer transition-colors duration-300`}
                                onClick={() => setActive(nav.title)}
                            >
                                <a href={`#${nav.id}`}>{nav.title}</a>
                            </li>
                        ))}
                    </ul>

                    {/* Theme Toggle */}
                    <div
                        className={`w-14 h-7 rounded-full px-1 flex items-center cursor-pointer transition-colors duration-300 ${isProfessional ? 'bg-indigo-300' : 'bg-tertiary border border-white/10'}`}
                        onClick={toggleMode}
                        title={isProfessional ? "Switch to Dark Mode" : "Switch to Light Mode"}
                    >
                        <div className={`w-5 h-5 rounded-full shadow-md transform transition-transform duration-300 flex items-center justify-center ${isProfessional ? 'translate-x-7 bg-white' : 'translate-x-0 bg-[#915EFF]'}`}>
                            {isProfessional ? (
                                <span className="text-[12px]">☀️</span>
                            ) : (
                                <span className="text-[10px]">🌙</span>
                            )}
                        </div>
                    </div>
                </div>

                <div className='sm:hidden flex flex-1 justify-end items-center'>
                    {/* Mobile Menu Icon Placeholder - simplified for now */}
                    <div
                        className="w-[28px] h-[28px] object-contain cursor-pointer flex flex-col justify-center gap-1"
                        onClick={() => setToggle(!toggle)}
                    >
                        <span className={`block w-full h-[3px] bg-white transition-all ${toggle ? 'rotate-45 translate-y-[7px]' : ''}`}></span>
                        <span className={`block w-full h-[3px] bg-white transition-all ${toggle ? 'opacity-0' : ''}`}></span>
                        <span className={`block w-full h-[3px] bg-white transition-all ${toggle ? '-rotate-45 -translate-y-[7px]' : ''}`}></span>
                    </div>

                    <div
                        className={`${!toggle ? "hidden" : "flex"
                            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
                    >
                        <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
                            {navLinks.map((nav) => (
                                <li
                                    key={nav.id}
                                    className={`font-poppins font-medium cursor-pointer text-[16px] ${active === nav.title ? "text-white" : "text-secondary"
                                        }`}
                                    onClick={() => {
                                        setToggle(!toggle);
                                        setActive(nav.title);
                                    }}
                                >
                                    <a href={`#${nav.id}`}>{nav.title}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
