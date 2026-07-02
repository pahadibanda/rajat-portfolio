export const portfolioData = {
  personalInfo: {
    name: "Rajat Rangra",
    title: "Data Analyst | Power BI & Python Developer",
    headline: "Turning Data into Business Decisions.",
    description: "Computer Science graduate specializing in SQL, Python, and Power BI. I love transforming complex datasets into meaningful dashboards that help businesses make better decisions.",
    about: "I'm a Computer Science graduate passionate about Data Analytics. I enjoy solving business problems using SQL, Python, and Power BI, and I love transforming complex datasets into meaningful dashboards that help businesses make better decisions. Additionally, as a National Basketball Player representing the state and national teams under the Basketball Federation of India, I bring strong team collaboration, leadership, and discipline built in high-pressure environments to my professional career.",
    email: "Rangrajat@gmail.com",
    phone: "9816647573",
    location: "Himachal Pradesh, India",
    github: "https://github.com/",
    linkedin: "https://www.linkedin.com/in/rajat-rangra-68849b248/",
    leetcode: "https://leetcode.com/yourusername",
    resumeUrl: "/resume.pdf"
  },
  skills: [
    // Programming
    { name: "Python", desc: "General scripting, data manipulation, and automation scripting.", category: "Programming", level: 90 },
    { name: "SQL", desc: "Database querying, join operations, aggregations, and data extraction.", category: "Programming", level: 90 },
    { name: "JavaScript", desc: "Interactive DOM manipulation, frontend scripting, and app logic.", category: "Programming", level: 85 },
    { name: "HTML & CSS", desc: "Responsive page layouts, modern styling systems, and grid alignment.", category: "Programming", level: 90 },
    
    // Data Analysis
    { name: "Power BI", desc: "Dashboard building, DAX calculations, and interactive report rendering.", category: "Data Analysis", level: 85 },
    { name: "Pandas & NumPy", desc: "Data cleaning, loading datasets, handling missing values, and data manipulation.", category: "Data Analysis", level: 85 },
    { name: "Matplotlib & Seaborn", desc: "Creating bar charts, pie charts, trend line graphs, and heatmaps.", category: "Data Analysis", level: 80 },
    { name: "Microsoft Excel", desc: "VLOOKUP/XLOOKUP, pivot tables, and quick diagnostic data analysis.", category: "Data Analysis", level: 90 },
    { name: "Data Visualization", desc: "Plotting visual trends, recovery rates, and business KPIs.", category: "Data Analysis", level: 85 },
    { name: "Data Cleaning & EDA", desc: "Exploratory data analysis, removing duplicates, and standardizing data formats.", category: "Data Analysis", level: 90 },

    // Machine Learning
    { name: "Machine Learning", desc: "Predictive classification, regression models, and validation.", category: "Machine Learning", level: 75 },

    // Tools
    { name: "Git & GitHub", desc: "Version tracking, committing local changes, and repository branching.", category: "Tools" },
    { name: "VS Code & Postman", desc: "Code editing, linting configuration, and API endpoint verification.", category: "Tools" },
    { name: "MySQL & SQLite", desc: "Relational database schema querying and indexing.", category: "Tools" }
  ],
  education: [
    {
      institution: "Chandigarh University",
      location: "Mohali, India",
      degree: "Bachelor of Engineering – Computer Science and Engineering",
      score: "CGPA: 6.0",
      period: "August 2022 – May 2026",
      status: "Graduated",
      coursework: [
        "Python",
        "SQL",
        "Power BI",
        "Excel",
        "Machine Learning",
        "Data Structures",
        "DBMS"
      ]
    },
    {
      institution: "GSSS Bir Baghera",
      location: "Hamirpur, India",
      degree: "Higher Secondary Certificate (12th)",
      score: "Percentage: 74%",
      period: "April 2020 – March 2021"
    },
    {
      institution: "New Public School, Sector 18B, Chandigarh",
      location: "Chandigarh, India",
      degree: "Secondary School Certificate (10th)",
      score: "Percentage: 89.5%",
      period: "April 2018 – March 2019"
    }
  ],
  certifications: [
    { 
      name: "Foundation of Cloud IoT Edge ML", 
      issuedBy: "NPTEL", 
      year: "May 2025", 
      credentialUrl: "https://nptel.ac.in" 
    },
    { 
      name: "Cloud Computing", 
      issuedBy: "IIT Kharagpur (NPTEL)", 
      year: "Jan 2024", 
      credentialUrl: "https://nptel.ac.in" 
    },
    { 
      name: "Internet of Things", 
      issuedBy: "NITTTR Chandigarh", 
      year: "Nov 2023", 
      credentialUrl: "https://www.nitttrchd.ac.in" 
    },
    { 
      name: "Multicore Computer Architecture", 
      issuedBy: "IIT Guwahati (NPTEL)", 
      year: "May 2023", 
      credentialUrl: "https://nptel.ac.in" 
    }
  ],
  projects: [
    {
      title: "Sales Data Analysis & Dashboard",
      problem: "Collected and cleaned a retail sales dataset (10,000+ rows) using Pandas – handled missing values, removed duplicates, and standardized column formats for analysis.",
      solution: "Created bar charts, pie charts, and trend line graphs using Matplotlib and Seaborn to visualize monthly revenue, top-selling products, and regional performance.",
      dataset: "Retail Sales Dataset (10,000+ rows)",
      outcome: "Enabled regional managers to pinpoint underperforming sectors and visualize monthly revenue.",
      tech: ["Python", "Pandas", "Matplotlib", "Seaborn", "Excel", "Power BI"],
      link: "https://github.com/",
      liveLink: "https://github.com/",
      category: "Data Analysis",
      image: "/sales_dashboard.jpg"
    },
    {
      title: "COVID-19 Data Trends Analysis",
      problem: "Loaded and cleaned COVID-19 case data from Our World in Data using Pandas; handled null values and filtered country-wise records for trend analysis.",
      solution: "Plotted line graphs and heatmaps to visualize daily case trends, recovery rates, and death rates across 10+ countries using Matplotlib and Seaborn.",
      dataset: "Our World in Data COVID-19 Dataset",
      outcome: "Provided clean, real-time visual tracking of vaccination cycles and disease metrics for policy planning.",
      tech: ["Python", "Pandas", "Matplotlib", "Excel", "Data Visualization"],
      link: "https://github.com/",
      liveLink: "https://github.com/",
      category: "Data Analysis",
      image: "/covid_dashboard.jpg"
    },
    {
      title: "Student To-Do List Web Application",
      problem: "Built a task management web app where users can add, delete, and mark tasks as complete – data saved in browser localStorage so tasks persist on page reload.",
      solution: "Designed a clean, mobile-friendly UI using CSS Flexbox with color-coded priority labels (High / Medium / Low) for easy task tracking.",
      dataset: "Browser LocalStorage",
      outcome: "Created a responsive task manager web app that stores user data on local storage.",
      tech: ["HTML", "CSS", "JavaScript"],
      link: "https://github.com/",
      liveLink: "https://github.com/",
      category: "Web Application"
    }
  ]
};
