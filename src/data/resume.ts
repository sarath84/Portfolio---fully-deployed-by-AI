// All content below is taken from Sarath AC's resume (SarathRESUME.pdf).
export const profile = {
  name: 'Sarath AC',
  role: 'Data Scientist & Full-Stack Developer',
  location: 'Malappuram, Kerala',
  email: 'acsarath650@gmail.com',
  phone: '9847951521',
  summary:
    'Enthusiastic Data Scientist with a solid foundation in data analytics and visualization. Skilled in data cleaning, EDA, and generating insights to support decisions. Proficient in Python (Pandas, NumPy, Matplotlib, Seaborn), SQL, and Excel, with experience in creating dashboards in Power BI/Tableau. Passionate about turning complex data into clear, useful insights.',
  resumeFile: '/Sarath_AC_Resume.pdf',
}

export interface Experience {
  role: string
  org: string
  place: string
  period: string
  points: string[]
  stack: string[]
}

export const experience: Experience[] = [
  {
    role: 'Intern',
    org: 'Centre for Development of Advanced Computing (CDAC)',
    place: 'Trivandrum',
    period: 'Aug 2025 – Jan 2026',
    stack: ['React.js', 'Django', 'REST APIs', 'WebSocket', 'JavaScript', 'CSS'],
    points: [
      'Contributed to a Brain–Machine Interface (BMI) web application for end-to-end EEG data ingestion, processing, visualization, and analysis.',
      'Designed and implemented EEG data upload pipelines, supporting EDF ingestion and conversion to DICOM for standardized medical data handling.',
      'Developed a custom EEG Viewer, functionally comparable to the Natus EEG application, integrated into the web platform.',
      'Implemented viewer controls: channel selection, configurable sensitivity, spacing, time base and time-per-window, plus signal filtering (notch, low-pass, high-pass, band-pass, bandstop).',
      'Built signal processing and analytical features such as FFT, Power Spectral Density (PSD), and montage configuration.',
      'Enabled offline streaming and playback of selected EEG segments for retrospective analysis.',
      'Implemented real-time EEG acquisition and visualization by streaming signals from EEG hardware over WebSockets.',
      'Developed interactive analysis dashboards using heatmaps, bar charts, and line charts to visualize signal density, data quality, and event frequency.',
      'Worked as a full-stack developer using React.js for the frontend and Python (Django) for backend services, integrating REST APIs.',
    ],
  },
]

export interface Project {
  title: string
  tag: string
  blurb: string
  points: string[]
  stack: string[]
  featured?: boolean
}

export const projects: Project[] = [
  {
    title: 'EEG Viewer & BMI Platform',
    tag: 'Internship · CDAC',
    featured: true,
    blurb:
      'A web-based EEG viewer inside a Brain–Machine Interface platform, built to be functionally comparable to the Natus EEG application.',
    points: [
      'EDF upload pipeline with conversion to DICOM',
      'Channel selection, sensitivity, spacing, time base and filters',
      'FFT, PSD and montage configuration',
      'Real-time hardware streaming over WebSockets',
    ],
    stack: ['React.js', 'Django', 'WebSocket', 'DICOM', 'EDF'],
  },
  {
    title: 'Student Exam Score Prediction',
    tag: 'End-to-end ML project',
    blurb:
      'An end-to-end machine learning pipeline in Python covering ingestion, preprocessing, training, evaluation and inference.',
    points: [
      'Preprocessing with Scikit-learn ColumnTransformer and reproducible train–test splits',
      'XGBoost and CatBoost regressors; best test R² ≈ 0.87',
      'Multi-model comparison on train/test R²',
      'Modular architecture with logging and exception handling',
    ],
    stack: ['Python', 'Scikit-learn', 'XGBoost', 'CatBoost'],
  },
  {
    title: 'Bank Loan Eligibility Analysis',
    tag: 'Data analysis project',
    blurb:
      'Analysis of financial data for 3,000 customers to identify the factors linked to loan default.',
    points: [
      'Cleaning: missing values, duplicates, encoding, outlier detection',
      'Feature engineering: income bins, debt-to-income ratio, credit score groups',
      'EDA with Matplotlib and Seaborn',
      'Interactive Power BI dashboard for approval trends and high-risk segments',
    ],
    stack: ['Pandas', 'NumPy', 'Seaborn', 'Power BI'],
  },
]

export const skills: { group: string; items: string[] }[] = [
  { group: 'Languages', items: ['Python', 'C', 'React.js'] },
  { group: 'Backend & Data', items: ['Django', 'REST API', 'MySQL'] },
  {
    group: 'Machine Learning',
    items: ['Linear Regression', 'Logistic Regression', 'Decision Tree', 'Random Forest', 'XGBoost'],
  },
  { group: 'Libraries', items: ['Pandas', 'NumPy', 'Matplotlib', 'Seaborn'] },
  { group: 'Tools', items: ['AWS', 'Git'] },
  {
    group: 'Core Concepts',
    items: [
      'Data Structures & Algorithms',
      'Machine Learning',
      'Deep Learning',
      'Exploratory Data Analysis',
      'Data Mining',
      'Data Cleaning',
    ],
  },
]

export const education = [
  {
    title: 'B.Tech, Computer Science and Engineering',
    org: 'College of Engineering Chengannur',
    period: '2020 – 2024',
    note: '12-week Advanced Python Computing course, IIT Madras (NPTEL)',
  },
  {
    title: 'Upskill Course, Full Stack Data Science',
    org: 'AlmaBetter',
    period: 'Nov 2024 – Aug 2025',
    note: '',
  },
]

export const certificates = [
  'Google Data Analyst Professional Certificate (Coursera)',
  'Full Stack Data Science',
]
