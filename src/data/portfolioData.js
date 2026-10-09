export const siteInfo = {
  name: 'Franchezka Faith E. Tingal',
  logo: 'Franchezka Tingal',
  role: '',
tagline: 'I design and build digital products around how people actually use them, and I enjoy learning a product inside out so I can make it easy for others to understand.',
}
 
export const navigationLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Resume', href: '#resume' },
  { label: 'Contact', href: '#contact' },
]
 
export const aboutHighlights = [
  {
    title: 'Education',
    text: 'BS Information Technology, Polytechnic University of the Philippines (2022–2026), graduated magna cum laude.',
  },
  {
    title: 'Hands-On Product Experience',
    text: 'UI/UX Design and Web Development Intern at Lamina Studios, working with Laravel, Tailwind, Figma, and Cypress.',
  },
  {
    title: 'User-Centered Design',
    text: 'Designed and built the interface for Globalinked, a system for monitoring MOU/MOA linkage agreements.',
  },
  {
    title: 'Technical Fluency',
    text: 'Comfortable with both the design and development sides of a product, and with Microsoft apps for everyday work.',
  },
]
 
export const skillCategories = [
  {
    title: 'Frontend Development',
    description: 'Building responsive interfaces with reusable components.',
    icon: 'code',
    items: ['React', 'Laravel', 'Tailwind CSS', 'HTML', 'CSS', 'JavaScript'],
  },
  {
    title: 'UI/UX Design',
    description: 'Turning complex workflows into clear user experiences.',
    icon: 'palette',
    items: ['Figma', 'UI/UX Design', 'Wireframing', 'Prototyping'],
  },
  {
    title: 'Testing & Quality',
    description: 'Checking details so products feel reliable and ready.',
    icon: 'shield',
    items: ['Cypress', 'Feature Testing'],
  },
  {
    title: 'Tools & Productivity',
    description: 'Organizing work and collaborating across product teams.',
    icon: 'tools',
    items: ['Microsoft 365', 'Git/GitHub','Notion' ],
  },
  {
    title: 'Professional Strengths',
    description: 'Communicating clearly and learning quickly.',
    icon: 'arrow',
    items: ['User-Focused Thinking', 'Clear Communication', 'Quick Learner'],
  },
]


export const certificates = [
  {
    title: 'CERTIFICATE NAME',
    issuer: 'ISSUING ORGANIZATION',
    year: 'YEAR',
  },
]
 

export const projects = [
  {
    id: 'globalinked',
    title: 'Globalinked',
    subtitle: 'Agreement Monitoring System',
    description:
      'A capstone system for monitoring MOU/MOA agreements, statuses, and follow-up actions.',
    summary:
      'A linkage agreement (MOU/MOA) monitoring system built as my capstone project to help organizations track agreements, statuses, and important actions.',
    image: '/images/oia.jpg',
    role: 'UI/UX Designer / Frontend Developer / Client Coordinator',
    year: '2026',
    technologies: ['Figma', 'Frontend Development', 'Requirements Gathering','React.js' ,'HTML', 'CSS'],
    features: ['Agreement monitoring', 'Status tracking', 'Search and filtering', 'Action follow-ups'],
    contributions: [
      'Designed the interface and user flows for non-technical users.',
      'Built the frontend for quick status checks and follow-up actions.',
      'Worked with teammates on requirements and system analysis.',
    ],
    challenges: 'Clarifying process-heavy agreement tracking into a clean workflow that people could scan quickly.',
    liveUrl: 'https://globalinked-demo.vercel.app/',
    githubUrl: '',
    github: '',
    demo: 'https://globalinked-demo.vercel.app/',
    details: [
      'Designed the interface and user flows so non-technical users can monitor MOU and MOA records easily.',
      'Built the frontend for quick status checks and follow-up actions.',
      'Worked with teammates on requirements and system analysis, focusing on what users actually need from the product.',
    ],
  },

  {
    id: 'myblog',
    title: 'MYBlog',
    subtitle: 'Personal Blog Website',
    description:
      'A personal blog website designed to provide a simple and engaging platform for creating, managing, and viewing blog posts.',
    summary:
      'A responsive blog website focused on clean content presentation, easy navigation, and a user-friendly experience for both readers and administrators.',
    image: '/images/blog.jpg',
    role: 'Web Developer / UI Designer',
    year: '2026',
    technologies: ['Laravel', 'PHP', 'SQLite', 'Blade', 'CSS'],
    features: [
      'User authentication',
      'Blog post management',
      'Admin dashboard',
      'Post creation and editing',
      'User management',
      'Responsive design',
    ],
    contributions: [
      'Designed the user interface and user experience for the blog.',
      'Built the blog interface and user-facing pages.',
      'Implemented authentication and blog post management features.',
      'Created an admin interface for managing posts and users.',
      'Focused on responsive layouts and a clean reading experience.',
    ],
    challenges:
      'Creating a simple and visually appealing blog experience while supporting authentication, content management, and different user roles.',
    liveUrl: 'https://franchezkatingal.github.io/Blog-App/',
    githubUrl: 'https://github.com/FranchezkaTingal/Blog-App',
    github: 'https://github.com/FranchezkaTingal/Blog-App',
    demo: 'https://franchezkatingal.github.io/Blog-App/',
    details: [
      'Developed a Laravel-based blog application with user authentication.',
      'Implemented blog post creation, editing, and management features.',
      'Created administrative features for managing posts and users.',
      'Designed a responsive interface focused on readability and simple navigation.',
    ],
  },
  {
    id: 'holiday-calendar',
    title: 'Holiday Calendar',
    subtitle: 'Interactive Holiday Calendar',
    description:
      'A web-based holiday calendar that allows users to explore holidays and important dates through an interactive and visually engaging calendar interface.',
    summary:
      'An interactive holiday calendar designed to make browsing holidays and important dates simple, organized, and visually engaging.',
    image: '/images/calendar.jpg',
    role: 'Developer',
    year: '2026',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    features: [
      'Interactive calendar',
      'Holiday information',
      'Date navigation',
      'Event details',
      'Responsive design',
    ],
    contributions: [
      'Designed the calendar interface with a focus on visual organization and usability.',
      'Developed interactive calendar functionality using JavaScript.',
      'Created responsive layouts for different screen sizes.',
      'Organized holiday information for easy browsing and navigation.',
    ],
    challenges:
      'Designing an attractive calendar interface while keeping holiday information clear, accessible, and easy to navigate.',
    liveUrl: 'https://franchezkatingal.github.io/holiday-calendar/',
    githubUrl: 'https://github.com/FranchezkaTingal/holiday-calendar',
    github: 'https://github.com/FranchezkaTingal/holiday-calendar',
    demo: 'https://franchezkatingal.github.io/holiday-calendar/',
    details: [
      'Built an interactive calendar for viewing holidays and important dates.',
      'Implemented date navigation and holiday information display.',
      'Designed a responsive interface that adapts to different screen sizes.',
      'Focused on clean visual hierarchy and an engaging user experience.',
    ],
  },
]

export const experiences = [
  {
    role: 'UI/UX Design and Web Development Intern',
    company: 'Lamina Studios',
    period: '2026',
    description:
      'Worked across design and development using Figma, Laravel, and Tailwind, and used Cypress for testing. Gained hands-on experience in how a product is designed, built, and checked before it reaches users.',
  },
  {
    role: 'Government Internship Program (GIP)',
    company: 'Public Employment Service Office',
    period: '2023',
    description: 'Supported daily office operations through administrative assistance, document and record management, and client support.',
  },
]
 
export const resumeInfo = {
  education: [
    'Bachelor of Science in Information Technology (Magna Cum Laude)',
    'Polytechnic University of the Philippines, Manila',
    '2022–2026',
  ],
  experience: ['UI/UX Design & Web Development Intern','Government Internship Program (GIP)'],
  coreSkills: ['Client Communication', 'Requirements Gathering', 'System Analysis', 'UI/UX', 'Documentation', 'Web Development', 'Microsoft 365'],
  downloadUrl: '/resume_tingal.pdf',
}
 
export const contactInfo = {
  intro: "Interested in working together or discussing an opportunity? Feel free to reach out.",
  email: 'franchezkatingal@gmail.com',
  linkedin: 'https://www.linkedin.com/in/franchezka-faith-tingal-b248b8296/',
  github: 'github.com/FranchezkaTingal',
}

