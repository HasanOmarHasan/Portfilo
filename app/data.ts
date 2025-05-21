type Project = {
  name: string
  description: string
  link: string
  video?: string
  id: string
  date?: string
  technologies?: string[]
  image?: string
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

export const PROFESSIONAL_SUMMARY = `As a passionate full-stack web developer, I bring ideas to life through elegant, efficient code and intuitive user experiences. My expertise spans the entire web development spectrum, from crafting responsive front-end interfaces using HTML5, CSS3, JavaScript/TypeScript, React, Next.js, and Tailwind CSS, to building robust back-end systems with Python/Django and Node.js/Express.

I excel in database management with PostgreSQL and various SQL/NoSQL solutions, while ensuring clean API design and seamless integration. My commitment to best practices shows in my use of Git for version control, Docker for consistent deployments, and adherence to Agile methodologies for smooth project delivery.

What sets me apart is my holistic approach to development - combining technical expertise with a keen eye for user experience and performance optimization. I'm particularly excited about integrating AI and automation solutions while maintaining a strong foundation in core web development principles.

I'm always eager to tackle new challenges and would love to discuss how I can help bring your web development ideas to life. Whether you have a specific project in mind or just want to explore possibilities, let's connect for a friendly, no-obligation conversation about creating something amazing together.`

export const PROJECTS: Project[] = [
  {
    name: 'MoreHealth (Full-Stack Django & React)',
    description: ' A full-stack health assistant built with Django REST and PostgreSQL, React/Tailwind UI, JWT/email authentication, real-time Socket.IO chat, AI-powered symptom triage, user profiles, a community forum, and an admin dashboard.',
    link: 'https://github.com/HasanOmarHasan/MoreHealth',
    id: 'project1',
    date: '2025',
    technologies: ['Django', 'Django REST Framework', 'PostgreSQL', 'React', 'Tailwind CSS', 'JWT'],
      video: '/morehealth.MP4' 
  },
  {
    name: 'Fresh-Cart (React)',
    description: 'A modular single-page e-commerce front end that simulates the full shopping workflow—from product browsing to secure checkout—using a mock API.It’s built in React v18, fetches products via Axios into responsive Bootstrap layouts, and manages JWT-protected auth and cart state with Context API—all forms validated with Formik/Yup.',
    link: 'https://github.com/HasanOmarHasan/Fresh-Cart-E-commers',
    id: 'project2',
    date: '2024',
    technologies: ['React', 'Bootstrap', 'JWT', 'Formik', 'Yup'],
    image: '/Fresh-Cart.png'
  },
  
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Independent Learning & Development',
    title: 'Full-Stack Developer',
    start: 'May 2023',
    end: 'Present',
    link: 'https://github.com/HasanOmarHasan',
    description: 'Actively developing full-stack web applications while expanding expertise in modern web technologies. Focus areas include:\n\n- Building responsive web applications using React and Next.js\n- Implementing backend solutions with Node.js and Python\n- Practicing clean code principles and modern development workflows\n- Contributing to open-source projects and building personal portfolio projects',
    id: 'work1',
  }
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: '10 Top vscode shortcut should every developers knows',
    description: ' اكتر  10 shortcut لازم كل الdevelopers يعرفها في vscode ، البونص اهم واحدة',
    link: '/blog/top-vscode-shortcut',
    uid: 'blog-1',
  }
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
    label: 'CV',
    link: 'https://drive.google.com/drive/folders/17qLVN_bkyLhvKXmiy5svVDE0N44nmZM0?usp=sharing',
  }
]

export const EMAIL = 'hassan.omar.shamy@gmail.com'
