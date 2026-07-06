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
      degree: "Bachelor of Engineering (B.E.) – Computer Science and Engineering",
      score: "CGPA: 6.08/10",
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
      title: "Amazon Sales Analytics Dashboard",
      problem: "Fragmented Amazon retail sales data made it difficult to analyze monthly profit margins, seasonal trends, and product performance.",
      solution: "Designed and built an interactive Power BI dashboard powered by structured SQL database queries to visualize sales KPIs.",
      dataset: "Amazon Retail Sales Dataset",
      outcome: "Enabled deep-dive sales diagnostic capabilities, identifying key margin trends and improving reporting efficiency.",
      tech: ["Power BI", "SQL", "DAX", "Data Analysis"],
      link: "https://github.com/pahadibanda/Amazon-Sales-Analytics-Dashboard",
      liveLink: "https://github.com/pahadibanda/Amazon-Sales-Analytics-Dashboard",
      category: "Power BI",
      image: "/sales_dashboard.jpg"
    },
    {
      title: "Blinkit Grocery Sales Dashboard",
      problem: "Grocery retail outlets struggled to track customer satisfaction, item outlet sales, and product performance dynamically.",
      solution: "Developed an interactive Power BI dashboard utilizing DAX and Power Query to analyze Blinkit grocery sales datasets.",
      dataset: "Blinkit Grocery Sales Dataset",
      outcome: "Provided comprehensive visual diagnostics on item type sales, outlet sizes, and customer ratings.",
      tech: ["Power BI", "DAX", "Power Query", "Excel", "Data Visualization"],
      link: "https://github.com/pahadibanda/blinkit-grocery-sales-dashboard",
      liveLink: "https://github.com/pahadibanda/blinkit-grocery-sales-dashboard",
      category: "Power BI",
      image: "/hr_dashboard.jpg"
    },
    {
      title: "HR Analytics Dashboard",
      problem: "Management lacked structured insights into employee retention, departmental performance, and organizational demographics.",
      solution: "Created an HR analytics dashboard to track and analyze staff demographics, attrition rates, and satisfaction scores.",
      dataset: "Corporate HR Dataset",
      outcome: "Pinpointed critical attrition metrics and demographic patterns to assist HR retention strategies.",
      tech: ["Power BI", "DAX", "Data Analytics"],
      link: "https://github.com/pahadibanda/HR-Analytics-Dashboard",
      liveLink: "https://github.com/pahadibanda/HR-Analytics-Dashboard",
      category: "Power BI",
      image: "/finance_dashboard.jpg"
    }
  ]
};
