export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  period: string;
  category: "Academic" | "Mentorship" | "Organizational" | "Internship" | "Research";
  bullets: string[];
  tags: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  role: string;
  period?: string;
  link?: string;
  bullets: string[];
  tags: string[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  bullets: string[];
}

export interface AwardItem {
  title: string;
  issuer: string;
}

export interface ResumeData {
  name: string;
  roles: string[];
  summary: string;
  location: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  experiences: ExperienceItem[];
  projects: ProjectItem[];
  education: EducationItem[];
  awards: AwardItem[];
  skills: {
    category: string;
    items: string[];
  }[];
}

export const resumeData: ResumeData = {
  name: "Rafif Taqiy Gantari",
  roles: [
    "Aspiring Software & AI Engineer",
    "Machine Learning Developer",
    "Full-stack Web Developer",
  ],
  summary:
    "Aspiring Software Engineer and AI Engineer with hands-on experience in building and deploying full-stack web applications and machine learning systems in Python. Experienced in leading a development team, applying Agile practices, code review, and version control with Git. Strong foundation in data structures, algorithms, object-oriented programming, and Machine Learning.",
  location: "East Java, Indonesia",
  email: "rafiftaqiy05@gmail.com",
  phone: "+6289603915819",
  linkedin: "https://www.linkedin.com/in/rafif-taqiy-gantari",
  github: "https://github.com/RafifGantari",
  experiences: [
    {
      id: "dsa-ta",
      role: "Data Structure and Algorithm Teaching Assistant",
      organization: "Information System, Institut Teknologi Sepuluh Nopember",
      period: "Sep 2026 - Present",
      category: "Academic",
      bullets: [
        "Guided students in implementing complex data structures using Java.",
        "Mentored students on algorithmic problem-solving and time/space complexity analysis.",
        "Evaluated Java-based assignments and provided feedback to optimize code efficiency.",
      ],
      tags: ["Java", "Data Structures", "Algorithms", "Time Complexity", "Code Optimization"],
    },
    {
      id: "dpd-mentor",
      role: "Digital Product Development Mentor",
      organization: "Information System Expo 2026!",
      period: "Sep 2026",
      category: "Mentorship",
      bullets: [
        "Mentored students throughout a 4-week bootcamp via weekly virtual sessions.",
        "Guided participants in using VS Code, Figma, Live Server, and GitHub.",
        "Evaluated progressive projects and final presentations using structured rubrics.",
      ],
      tags: ["Mentorship", "Web Development", "Figma", "GitHub", "Product Development"],
    },
    {
      id: "pf-ta",
      role: "Programming Fundamental Teaching Assistant",
      organization: "Information System, Institut Teknologi Sepuluh Nopember",
      period: "Feb 2026 - July 2026",
      category: "Academic",
      bullets: [
        "Evaluated and graded 166 student assessments, including 7 lab-works, live coding sessions, and major exams.",
        "Facilitated 8 practical lab sessions for 50 students covering core programming topics, including Recursion, Arrays, and Object-Oriented Programming (OOP).",
        "Mentored 50 students in translating theoretical programming logic into functional code.",
      ],
      tags: ["Programming Fundamentals", "Java", "OOP", "Recursion", "Code Review"],
    },
    {
      id: "ampp-head",
      role: "Head of Web Development Division",
      organization: "AMPP ITS SC",
      period: "Jan 2026 - Dec 2026",
      category: "Organizational",
      bullets: [
        "Led a team of 3 developers in designing, building, and deploying the AMPP ITS SC website using Next.js, Supabase, and Vercel.",
        "Established a CI/CD workflow through GitHub and Vercel, including branch strategy, pull request reviews, and automated preview deployments for every change.",
        "Applied Agile practices, code review, and Git-based version control to coordinate the team and maintain code quality.",
      ],
      tags: ["Next.js", "Supabase", "Vercel", "CI/CD", "Agile", "Team Leadership"],
    },
    {
      id: "codveda-ml",
      role: "Machine Learning Engineer",
      organization: "Codveda Technologies – Internship",
      period: "Jan 2026 - Feb 2026",
      category: "Internship",
      bullets: [
        "Completed a comprehensive Machine Learning bootcamp and built 5+ projects covering classification, regression, and clustering.",
        "Performed data preprocessing, exploratory data analysis, and feature engineering to improve model performance.",
        "Developed and evaluated ML models using Python, Pandas, scikit-learn, and TensorFlow.",
      ],
      tags: ["Python", "Machine Learning", "Scikit-learn", "TensorFlow", "Pandas", "EDA"],
    },
    {
      id: "abinara-intern",
      role: "Programming Intern",
      organization: "Abinara Research Team ITS",
      period: "Oct 2024 - Nov 2024",
      category: "Research",
      bullets: [
        "Completed an intensive machine learning program and developed projects focusing on predictive modeling and algorithmic optimization.",
        "Performed data preprocessing, exploratory data analysis, and feature engineering to improve model performance.",
        "Developed and evaluated ML models using Python, Pandas, scikit-learn, and TensorFlow.",
      ],
      tags: ["Python", "Machine Learning", "TensorFlow", "Data Preprocessing", "Research"],
    },
  ],
  projects: [
    {
      id: "neuromove",
      title: "NeuroMove",
      role: "Machine Learning & Full-stack Developer",
      period: "Jan - Mar 2026",
      link: "https://github.com/RafifGantari",
      bullets: [
        "Developed and evaluated machine learning classification models to predict physical activity levels in older adults using health and mobility features, applying stratified 5-fold cross-validation and macro F1-score for model selection.",
        "Built a Python REST API with FastAPI to serve model predictions, expose model metadata, and validate incoming feature inputs.",
        "Integrated the prediction API with a Flutter mobile application and deployed the backend on Render to support model inference through the application.",
      ],
      tags: ["Python", "Scikit-learn", "FastAPI", "Flutter", "REST API", "Pandas", "NumPy", "Joblib", "Render"],
    },
    {
      id: "plant-disease",
      title: "Plant Disease Classification | Computer Vision",
      role: "Deep Learning & Computer Vision Developer",
      period: "2026",
      link: "https://github.com/RafifGantari",
      bullets: [
        "Developed a CNN-based image classification model to identify plant diseases accurately.",
        "Implemented image preprocessing, data augmentation, and model inference for real-time image-based predictions.",
        "Deployed the model through an interactive Streamlit web application for intuitive diagnostic visualization.",
      ],
      tags: ["Python", "TensorFlow/Keras", "CNN", "Streamlit", "Image Preprocessing", "Computer Vision"],
    },
    {
      id: "llm-assistant",
      title: "LLM Academic Assistant",
      role: "Document-Based AI Chatbot for Academic Research",
      period: "2026",
      link: "https://github.com/RafifGantari",
      bullets: [
        "Built a document-based AI chatbot using Retrieval-Augmented Generation (RAG), enabling semantic search and context-aware Q&A over academic PDFs.",
        "Designed and deployed an interactive Streamlit application integrated with high-performance LLM APIs (Groq / OpenAI-compatible).",
        "Applied document chunking, embedding generation, and vector retrieval to ensure factual citations and prevent hallucinations.",
      ],
      tags: ["Python", "Streamlit", "LangChain", "RAG", "LLM API", "Embeddings", "Vector Search"],
    },
    {
      id: "ampp-portal",
      title: "AMPP ITS SC Web Platform",
      role: "Lead Full-stack Developer",
      period: "Jan 2026 - Dec 2026",
      link: "https://github.com/RafifGantari",
      bullets: [
        "Architected and deployed the official website for AMPP ITS Student Chapter using Next.js and Supabase.",
        "Engineered a responsive, high-performance UI integrated with backend database services for event registration and chapter activities.",
        "Configured automated CI/CD pipelines via GitHub and Vercel, maintaining consistent code quality and 99.9% uptime.",
      ],
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "Vercel", "CI/CD"],
    },
  ],
  education: [
    {
      institution: "Institut Teknologi Sepuluh Nopember (ITS)",
      degree: "Information System, Faculty of Intelligent Electrical and Informatics Technology",
      period: "Aug 2024 - 2028",
      bullets: ["GPA 3.63/4.00"],
    },
  ],
  awards: [
    {
      title: "Top 10 Samsung Solve for Tomorrow 2026",
      issuer: "Samsung Electronics Indonesia",
    },
    {
      title: "3rd Place - Future League Academy (FLA) Batch 2 Final Project by AVO | 2026",
      issuer: "PT AVO Innovation Technology",
    },
    {
      title: "2nd Place - Kaggle Competition AXION 2025: Avalon Expo of Innovation",
      issuer: "Organized by Avalon AI Community",
    },
    {
      title: "Finalist - International Business Plan Competition Student x CEO Inter Summit 2025",
      issuer: "Student x CEO",
    },
    {
      title: "Awardee - Future League Academy Batch 2 (IT Track) by AVO",
      issuer: "PT AVO Innovation Technology",
    },
    {
      title: "Awardee - AI Rising Innovators Academy by Elevated",
      issuer: "Elevated",
    },
  ],
  skills: [
    {
      category: "Tech Stack",
      items: [
        "Python",
        "Java",
        "C++",
        "JavaScript",
        "TypeScript",
        "Dart",
        "Next.js",
        "React",
        "Flutter",
        "FastAPI",
        "Streamlit",
        "Tailwind CSS",
        "SQL",
      ],
    },
    {
      category: "AI & Machine Learning",
      items: [
        "Machine Learning",
        "Deep Learning",
        "Computer Vision",
        "Large Language Models (LLM)",
        "Retrieval-Augmented Generation (RAG)",
        "Scikit-learn",
        "PyTorch",
        "TensorFlow/Keras",
        "LangChain",
        "Embeddings",
        "Feature Engineering",
        "Data Preprocessing",
        "Model Training & Evaluation",
        "End-to-End ML Pipelines",
      ],
    },
    {
      category: "Hard Skills",
      items: [
        "Data Structures and Algorithms",
        "Object-Oriented Programming (OOP)",
        "REST API Development",
        "Model Deployment",
        "State Management",
        "Responsive Web Design",
        "Form Handling & Validation",
        "Routing & Navigation",
        "CI/CD Pipeline",
      ],
    },
    {
      category: "Tools",
      items: [
        "Git",
        "GitHub",
        "Vercel",
        "Render",
        "VS Code",
        "Figma",
        "Docker",
        "Supabase",
        "PostgreSQL",
        "MySQL",
        "Pandas",
        "NumPy",
        "Matplotlib",
        "Seaborn",
        "Joblib",
      ],
    },
    {
      category: "Soft Skills",
      items: [
        "Problem Solving",
        "Analytical Thinking",
        "Team Leadership",
        "Agile/Scrum",
        "Code Review",
        "Project Coordination",
        "Mentorship",
      ],
    },
    {
      category: "Languages",
      items: ["Bahasa Indonesia", "English"],
    },
  ],
};
