type Project = {
  name: string
  description: string
  link: string
  video?: string
  id: string
  date?: string
  technologies?: string[]
  image?: string
  readMore?: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
  description?: string
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}

type Education = {
  institution: string
  title: string
  start: string
  end: string
  location?: string
  id: string
  description?: string
  link?: string
}

// ---------------- PROFESSIONAL SUMMARY ----------------

export const PROFESSIONAL_SUMMARY = `I’m a passionate Full-Stack Developer who lives and breathes code. 
I thrive on transforming complex ideas into fast, scalable, and user-friendly applications. 
My toolkit spans React, Next.js, Node.js/Express, NestJS, Django, and robust databases like MongoDB , MySQL , sqlite and PostgreSQL. 
I’m constantly exploring new technologies, from modern front-end frameworks to back-end architectures, 
while keeping a sharp focus on performance, scalability, security and user delight.  

What excites me most is building applications that truly make an impact— 
whether it’s empowering communities with AI-driven features or creating platforms that reflect cultural identity. 
I’m eager to push limits, break down problems into elegant solutions, and collaborate on projects that challenge me to grow every day.`

// ---------------- PROJECTS ----------------

export const PROJECTS: Project[] = [
  {
    name: 'Togaar: E-Commerce for Arabic Culture',
    description:
      'A proudly cultural e-commerce platform designed for Arabic markets. Togaar celebrates tradition while embracing modern tech—offering seamless product browsing, cart management, and checkout. It’s more than an online store, it’s a tailored digital experience that reflects identity and community.',

    id: 'project3',
    date: '2025',
    technologies: [
      'Node.js / Express.js',
      'MongoDB + Mongoose',
      'socket.io',
      'JWT / Cookies',
      'Stripe API',
      'AI Chatbot',
      'i18next',
      'LRU-cache',
      'OTP',
    ],
    image: '/Togaar.png',
    link: 'https://documenter.getpostman.com/view/32860449/2sB3HtFcZn',
    readMore:
      'https://github.com/HasanOmarHasan/Togaar-E-Commerce-for-Arabic-Culture',
  },
  {
    name: 'Heal-Gen: AI-Powered Health Assistant (Full-Stack Django & React)',
    description:
      'A full-stack health assistant with Django REST, PostgreSQL, React/Tailwind UI, JWT/email authentication, real-time chat with doctor and patient, AI-powered symptom triage , GenAI-powered chatbot assistant for medical diseases , user profiles,  secure authentication, and a vibrant community forum, admin dashboard and more.',
    readMore: 'https://github.com/HasanOmarHasan/MoreHealth',
    link: 'https://heal-gen.vercel.app/',
    id: 'project1',
    date: '2025',
    technologies: [
      'Django',
      'Django REST Framework',
      'PostgreSQL',
      'React',
      'Tailwind CSS',
      'JWT',
      'React Query',
    ],
   
    image: '/morehealthHome.png',
  },
  {
    name: 'Car Price Prediction (Machine Learning)',
    description:
      'A machine learning project that predicts used car prices with regression and classification models. Implemented Linear/Logistic Regression, SVM, SGD, and advanced deep learning architectures (MLP, FNN, CNN, Wide & Deep). Achieved 95–98% accuracy across regression and classification tasks, with clustering validation reaching 98%.',
    link: 'https://www.kaggle.com/datasets/johndoe11311/vehicle-data',
    id: 'project4',
    date: '2025',
    technologies: [
      'Python',
      'Scikit-learn',
      'TensorFlow/Keras',
      'Pandas',
      'NumPy',
      'Machine Learning',
      'Deep Learning',
    ],
    image: '/car-price.png',
    readMore:
      'https://drive.google.com/file/d/1Rx_XLY0MVc_5n2MVBLdee2g96wcVLJYe/view?usp=sharing',
  },
  {
    name: 'Fresh-Cart (React & Bootstrap)',

    description:
      'Modular single-page e-commerce frontend simulating full shopping workflow with React v18, Axios API integration, Bootstrap layouts, JWT authentication,  secure checkout , Formik/Yup ensuring smooth validated user input , responsive  and Context API state management.',
    link: 'https://github.com/HasanOmarHasan/Fresh-Cart-E-commers',
    id: 'project2',
    date: '2024',
    technologies: ['React', 'Bootstrap', 'JWT', 'Formik', 'Yup', 'Axios'],
    image: '/Fresh-Cart.png',
  },
]

// ---------------- WORK EXPERIENCE ----------------
export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    title: 'Software Engineer',
    company: 'Freelance  ',
    start: ' 2025',
    end: 'Present',
    id: 'experience1',
    link: 'https://www.linkedin.com/in/hasanomarhasan/',
    description:
      'Helping individuals and businesses bring their ideas to life through modern web technologies. As a freelance software engineer, I craft tailored full-stack applications that combine elegant design with robust functionality. My work spans from building dynamic frontends in React/Next.js to developing secure, scalable APIs with Node.js, NestJS, and Django. I thrive on solving challenging problems, learning new technologies, and delivering digital solutions that create real value for clients.',
  },
]

// ---------------- EDUCATION ----------------
export const EDUCATION: Education[] = [
  {
    institution:
      'New Cairo Technological University (NCTU), ICT Faculty ,. Specialized in Software Engineering and Artificial Intelligence.',
    title: "Bachelor's in Information and Communication Technology",
    start: '2021 ',
    end: '2025',
    description:
      'Currently pursuing degree with focus on:\n\n- Software development methodologies and practices\n- Database management systems and data structures\n- Network communications and information systems\n- Web technologies and application development',
    id: 'education2',
    location: 'New Cairo, Egypt',
    link: 'https://www.linkedin.com/in/hasanomarhasan/',
  },
  {
    institution: 'Route Academy',
    title: 'Frontend Development Diploma',
    start: 'Sep 2023',
    end: 'Feb 2024',
    link: 'https://drive.google.com/file/d/15Srw8ajDZBXUEfhraKcveFovaMVhuLRh/view',
    description:
      'Completed intensive frontend development program covering modern web technologies:\n\n- Mastered HTML, CSS, JavaScript, and TypeScript fundamentals\n- Developed proficiency in React.js and Next.js frameworks\n- Built responsive and interactive user interfaces\n- Implemented best practices in frontend architecture and performance optimization',
    id: 'education1',
  },
  {
    institution: ' Coursera , udemy , indexacademy, Meta',
    title: 'Full-Stack Developer',
    start: '',
    end: '2022',
    link: 'https://coursera.org/share/8d69f065d17612ee5b2a10b3f66061f7',
    // https://www.coursera.org/account/accomplishments/verify/Y82333A66W2K
    description: `Comprehensive training in modern web technologies and best practices.`,
    //  I have actively pursued continuous professional development by completing several industry-recognized courses. These include Jonas Schmedtmann’s highly acclaimed HTML & CSS, JavaScript, and React/Next.js tracks on Udemy; Meta’s Git, Database, Backend Python, and Frontend React tracks on Coursera; along with multiple specialized courses on LinkedIn Learning.
    id: 'education3',
  },
  {
    institution: 'Orange Digital Center',
    title: 'Software Testing Intern',
    start: 'Aug 2022',
    end: 'Aug 2022',
    link: 'https://www.linkedin.com/in/hasanomarhasan/',
    description:
      'Acquired comprehensive skills in software testing methodologies:\n\n- Performed both manual and automation testing procedures\n- Learned testing frameworks and quality assurance best practices\n- Gained experience in identifying and reporting software defects\n- Developed understanding of test planning and execution strategies',
    id: 'work1',
  },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'Comming Soon',
    description: ' ',
    link: '/blog/top-vscode-shortcut',
    uid: 'blog-1',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/HasanOmarHasan',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/hasanomarhasan/',
  },
  {
    label: 'Whatsapp & phone',
    link: 'https://wa.me/201153445721?text=Hello%20Hasan,%20I%20came%20across%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20potential%20opportunity%20with%20you.',
  },
  {
    label: 'CV',
    link: 'https://drive.google.com/file/d/1jConEtRobHSXZ20UiHvwJKtoE-3Uj5xU/view?usp=sharing',
  },
]

export const EMAIL = 'hassan.omar.shamy@gmail.com'
