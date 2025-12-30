import yoloLogo from "../assets/yolo.png";
import vision from "../assets/vision.png";
import model from "../assets/model.png";
import edgeai from "../assets/edgeai.png";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "services",
        title: "Services",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const personalInfo = [
    { label: "Name", value: "Hariharan" },
    { label: "Education", value: "St.Joseph's college of engineering" },
    { label: "Course", value: " BE ECE & BS Data Science" },
    { label: "Location", value: "Chennai, India" },
    { label: "Email", value: "hariharansp2050@gmail.com" }, // Update with real email
    { label: "Phone", value: "+91 8939738179" },      // Update with realrefine the display of personal phone
    { label: "CGPA", value: "8.1" },
];

const services = [
    {
        title: "AI Solution Development",
        icon: "https://cdn-icons-png.flaticon.com/512/2103/2103633.png", // Keeping generic AI
        description: "Custom AI models and systems to solve complex problems and automate business processes."
    },
    {
        title: "Computer Vision Consulting",
        icon: vision,
        description: "Expert guidance on building and integrating computer vision applications for various industries."
    },
    {
        title: "Model Deployment & Optimization",
        icon: model,
        description: "Deploy ML/DL models efficiently on edge devices and optimize their performance for production."
    },
    {
        title: "Intelligent Automation",
        icon: "https://cdn-icons-png.flaticon.com/512/2082/2082988.png",
        description: "Design and develop smart bots and agents for automating complex tasks and workflows."
    },
    {
        title: "Data Analysis & ML",
        icon: "https://cdn-icons-png.flaticon.com/512/2881/2881033.png",
        description: "Comprehensive data analysis and machine learning solutions for business intelligence."
    },
    {
        title: "Edge AI Solutions",
        icon: edgeai,
        description: "Optimized AI solutions for edge devices with real-time processing capabilities."
    },
];

const skills = [
    {
        title: "Programming Languages",
        skills: [
            { name: "Python", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" },
            { name: "C", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg" },
            { name: "Java", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg" },
            { name: "SQL", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg" },
        ],
    },
    {
        title: "Tools",
        skills: [
            { name: "Git", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg" },
            { name: "GitHub", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg" },
            { name: "Firebase", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/firebase/firebase-plain.svg" },
            { name: "AWS", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
        ],
    },
    {
        title: "Computer Vision",
        skills: [
            { name: "OpenCV", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/opencv/opencv-original.svg" },
            { name: "YOLO", icon: yoloLogo },
            { name: "ResNet", icon: "https://cdn-icons-png.flaticon.com/512/10098/10098083.png" }, // Neural Net icon placeholder
        ],
    },
    {
        title: "Libraries",
        skills: [
            { name: "Pandas", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/pandas/pandas-original.svg" },
            { name: "NumPy", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/numpy/numpy-original.svg" },
            { name: "Scikit-learn", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/scikitlearn/scikitlearn-original.svg" },
            { name: "Matplotlib", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/matplotlib/matplotlib-original.svg" },
            { name: "Flask", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/flask/flask-original.svg" },
            { name: "FastAPI", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/fastapi/fastapi-original.svg" },
            { name: "Docker", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg" },
        ],
    },
    {
        title: "Machine Learning / Deep Learning",
        skills: [
            { name: "PyTorch", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/pytorch/pytorch-original.svg" },
            { name: "Keras", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/keras/keras-original.svg" },
            { name: "TensorFlow", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/tensorflow/tensorflow-original.svg" },
            { name: "Transformers", icon: "https://cdn-icons-png.flaticon.com/512/12532/12532650.png" }, // HuggingFace/AI icon
            { name: "LangChain", icon: "https://avatars.githubusercontent.com/u/126733545?s=200&v=4" }, // LangChain logo
            { name: "LangGraph", icon: "https://avatars.githubusercontent.com/u/126733545?s=200&v=4" }, // LangChain logo (same ecosystem)
        ],
    },
];

const experiences = [
    {
        title: "Internship (Automation)",
        company_name: "Candela Technologies",
        icon: "https://cdn-icons-png.flaticon.com/512/16654/16654308.png", // Electronics Icon
        iconBg: "#383E56",
        date: "July - 2026 (Expected) / Current", // Adjust date as per resume "July - 2026"
        points: [
            "Developed an automation testing robot (digital twin) using Python and KiCAD.",
            "Designed custom PCBs for specialized hardware requirements.",
            "Implemented hardware control using Python, Numpy, and Raspberry Pi GPIO.",
            "Utilized Socket programming for real-time communication between components.",
        ],
    },
    {
        title: "Chatbot Developer Intern",
        company_name: "Cognicx IT Solutions",
        icon: "https://cdn-icons-png.flaticon.com/512/3222/3222146.png", // AI/Bot Icon
        iconBg: "#E6DEDD",
        date: "Previous",
        points: [
            "Developed and maintained automated test scripts for a banking chatbot, achieving 89.68% accuracy.",
            "Implemented RAG pipelines (Retrieval-Augmented Generation) for enhanced response capabilities.",
            "Improved performance and stability using Python, Selenium, and React.",
            "Managed REST APIs and version control via Git/GitHub.",
        ],
    },
    {
        title: "Intern",
        company_name: "Chennai Port Trust",
        icon: "https://cdn-icons-png.flaticon.com/512/870/870143.png", // Port/Ship Icon
        iconBg: "#383E56",
        date: "Previous",
        points: [
            "Studied the working of Doppler Weather Radar systems.",
            "Analyzed port traffic guidance electronic systems and their operations.",
            "Gained insights into large-scale electronic infrastructure management.",
        ],
    },
];

const testimonials = [
    {
        testimonial:
            "Hariharan showed exceptional skill in integrating complex hardware with modern AI logic during his drone project.",
        name: "Project Mentor",
        designation: "Professor",
        company: "St. Joseph's",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
        testimonial:
            "His work on the Smart Camera system demonstrated a deep understanding of real-time computer vision optimization.",
        name: "Tech Lead",
        designation: "CTO",
        company: "Startup Co",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
];

const projects = [
    {
        name: "Disaster Response Drone",
        description:
            "An all-purpose drone built with ML/DL for human detection in disaster zones. Features a modular, ready-to-deploy monitoring framework.",
        tags: [
            {
                name: "python",
                color: "blue-text-gradient",
            },
            {
                name: "deep-learning",
                color: "green-text-gradient",
            },
            {
                name: "drone-hardware",
                color: "pink-text-gradient",
            },
        ],
        image: "https://cdn-icons-png.flaticon.com/512/3061/3061341.png", // Drone placeholder
        source_code_link: "https://github.com/",
        live_link: "#",
    },
    {
        name: "Smart Camera System",
        description:
            "Deep-learning powered camera system capable of real-time object recognition and security monitoring with 78% accuracy.",
        tags: [
            {
                name: "opencv",
                color: "blue-text-gradient",
            },
            {
                name: "pytorch",
                color: "green-text-gradient",
            },
            {
                name: "security",
                color: "pink-text-gradient",
            },
        ],
        image: "https://cdn-icons-png.flaticon.com/512/3616/3616422.png", // Camera placeholder
        source_code_link: "https://github.com/",
        live_link: "#",
    },
    {
        name: "Edge AI Robotics",
        description:
            "Robots powered by Nvidia Jetson Orin Nano and Raspberry Pi that use local LLMs and vision systems to see, understand, and respond naturally.",
        tags: [
            {
                name: "nvidia-jetson",
                color: "green-text-gradient",
            },
            {
                name: "local-llm",
                color: "pink-text-gradient",
            },
            {
                name: "robotics",
                color: "blue-text-gradient",
            },
        ],
        image: "https://cdn-icons-png.flaticon.com/512/2040/2040494.png", // Robot placeholder
        source_code_link: "https://github.com/",
        live_link: "#",
    },
    {
        name: "Integrated Bus Management System",
        description:
            "Government-funded smart transportation system utilizing Edge AI and Computer Vision for real-time bus tracking and passenger counting to optimize public transit efficiency.",
        tags: [
            {
                name: "python",
                color: "blue-text-gradient",
            },
            {
                name: "yolov8",
                color: "green-text-gradient",
            },
            {
                name: "edge-ai",
                color: "pink-text-gradient",
            },
        ],
        image: "https://placehold.co/600x400/000000/FFF?text=Bus+System", // Reliable placeholder
        source_code_link: "https://github.com/",
        live_link: "#",
    },
    {
        name: "Autonomous NFC-Guided Robot",
        description:
            "NFC-guided line-tracking robot for smart lab automation. Features real-time cloud connectivity via Firebase and remote control through a Next.js dashboard.",
        tags: [
            {
                name: "nextjs",
                color: "blue-text-gradient",
            },
            {
                name: "firebase",
                color: "green-text-gradient",
            },
            {
                name: "robotics",
                color: "pink-text-gradient",
            },
        ],
        image: "https://placehold.co/600x400/000000/FFF?text=NFC+Robot", // Reliable placeholder
        source_code_link: "https://github.com/",
        live_link: "#",
    },
];

export { services, skills, experiences, testimonials, projects, personalInfo };
