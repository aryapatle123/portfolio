export interface Project {
  id: string;
  title: string;
  category: string;
  badge: string;
  shortDescription: string;
  fullDescription: string;
  problemSolved: string;
  methodology: string;
  technologies: string[];
  metrics?: {
    label: string;
    value: string;
    note: string;
  }[];
  githubUrl?: string;
  liveUrl?: string;
  filesInRepo?: string[];
  featured: boolean;
  interactiveDemoType?: 'sms' | 'fraud' | 'genre' | 'ledger';
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: {
    name: string;
    highlight?: boolean;
    category: string;
  }[];
}

export interface ExperienceItem {
  role: string;
  organization: string;
  type: string;
  duration: string;
  status: string;
  description: string;
  keyContributions: string[];
  technologies: string[];
  verifiedRepo?: string;
}

export const PORTFOLIO_DATA = {
  personal: {
    name: "Arya Patle",
    role: "Computer Science Student & Machine Learning Enthusiast",
    headline: "Building Intelligent Solutions with Python & Machine Learning",
    subheadline:
      "Computer Science student exploring machine learning, natural language processing, and practical software development with a focus on text classification, fraud detection, and algorithmic problem-solving.",
    bio: [
      "I am a Computer Science and Engineering student with hands-on project experience in machine learning, text classification, natural language processing, and fraud detection.",
      "My work focuses on Python-based data processing, feature extraction, model training, and performance evaluation through academic coursework, internship projects, and independent experimentation.",
      "I believe in building software that addresses real-world practical challenges, continually refining both my core computer science foundations and practical development engineering skills."
    ],
    status: "Open to Technical Internships & Collaborative Projects",
    location: "India",
  },

  education: {
    degree: "B.Tech in Computer Science and Engineering (CSE)",
    details: "Currently in Fourth Semester (Section B)",
    coreFocus: [
      "Machine Learning & Data Science",
      "Database Management Systems (DBMS)",
      "Operating Systems",
      "Compiler Design",
      "Data Structures & Algorithms"
    ],
    note: "Academic details will be updated as semester milestones advance."
  },

  socials: {
    github: "https://github.com/aryapatle123/CODESOFT",
    githubProfile: "https://github.com/aryapatle123",
    email: "", // User will update when ready
    linkedin: "", // User will update when ready
    resumeUrl: "" // User will update when ready
  },

  stats: [
    { label: "Core Focus", value: "ML & NLP" },
    { label: "Primary Language", value: "Python" },
    { label: "Verified Models", value: "3+ Deployed" },
    { label: "Academic Standing", value: "Semester IV (CSE)" }
  ],

  projects: [
    {
      id: "spam-sms-detection",
      title: "Spam SMS Detection",
      category: "Machine Learning / Text Classification",
      badge: "NLP Classification",
      shortDescription:
        "Machine learning system to classify SMS messages as Spam or Ham using TF-IDF feature extraction and Naive Bayes.",
      fullDescription:
        "Trained on the SMS Spam Collection dataset, this project addresses the threat of unsolicited and fraudulent SMS messages. It preprocesses text data through tokenization, stop-word removal, and TF-IDF vectorization before fitting a Multinomial Naive Bayes classifier.",
      problemSolved:
        "Mitigates mobile phishing and spam nuisances by reliably filtering unsolicited promotional text and malicious scam links.",
      methodology:
        "Text cleaning and tokenization → TF-IDF sparse matrix construction → Multinomial Naive Bayes classification with cross-validation.",
      technologies: ["Python", "Pandas", "Scikit-Learn", "TF-IDF Vectorization", "Naive Bayes", "Jupyter Notebook"],
      metrics: [
        { label: "Reported Accuracy", value: "96.86%", note: "Reported academic evaluation result on test split" }
      ],
      githubUrl: "https://github.com/aryapatle123/CODESOFT/blob/main/SpamSMSDetection.ipynb",
      filesInRepo: ["SpamSMSDetection.ipynb"],
      featured: true,
      interactiveDemoType: "sms"
    },
    {
      id: "credit-card-fraud-detection",
      title: "Credit Card Fraud Detection",
      category: "Machine Learning / Binary Classification",
      badge: "Financial Security",
      shortDescription:
        "Machine learning model distinguishing fraudulent credit card transactions from legitimate ones using ensemble classification.",
      fullDescription:
        "Built to address severe class imbalance in transaction data. The project employs Random Forest ensemble modeling to catch anomalous transaction patterns while minimizing false positives, serializing the final model via Python Pickle for deployment.",
      problemSolved:
        "Detects high-risk financial anomalies in near real-time, safeguarding consumers against unauthorized unauthorized credit charges.",
      methodology:
        "Highly imbalanced dataset preprocessing → Scaled feature handling → Random Forest ensemble training → Precision/Recall optimization.",
      technologies: ["Python", "Pandas", "Scikit-Learn", "Random Forest Classifier", "Pickle", "Jupyter Notebook"],
      metrics: [
        { label: "Reported Accuracy", value: "99.77%", note: "Reported metric on dataset evaluation" },
        { label: "Fraud Precision", value: "89%", note: "High confidence in flagged anomalies" },
        { label: "Fraud Recall", value: "68%", note: "Confirmed in project documentation" }
      ],
      githubUrl: "https://github.com/aryapatle123/CODESOFT/blob/main/CreditCardFraudDetection.ipynb.ipynb",
      filesInRepo: ["CreditCardFraudDetection.ipynb.ipynb", "fraud_detection_model.pkl"],
      featured: true,
      interactiveDemoType: "fraud"
    },
    {
      id: "movie-genre-classification",
      title: "Movie Genre Classification",
      category: "Machine Learning / Natural Language Processing",
      badge: "Text Analytics",
      shortDescription:
        "NLP pipeline that analyzes raw movie plot summaries to accurately predict film genres via TF-IDF and Logistic Regression.",
      fullDescription:
        "Analyzes unstructured narrative plot synopses to automatically label film genres. Utilizes TF-IDF vectorization with n-gram extraction to capture thematic cues, coupled with multiclass Logistic Regression with serialized model artifacts.",
      problemSolved:
        "Automates content tagging and metadata indexing for digital streaming catalogues and media recommendation engines.",
      methodology:
        "Plot synopsis normalization → Sublinear TF-IDF term weighting → Regularized Logistic Regression classifier → Pickle artifact storage.",
      technologies: ["Python", "Pandas", "NumPy", "Scikit-Learn", "TF-IDF Vectorization", "Logistic Regression"],
      metrics: [
        { label: "Reported Accuracy", value: "97.00%", note: "Reported evaluation metric on classification benchmark" }
      ],
      githubUrl: "https://github.com/aryapatle123/CODESOFT/blob/main/MovieGenreClassification.ipynb",
      filesInRepo: ["MovieGenreClassification.ipynb", "movie_genre_model.pkl", "tfidf_vectorizer.pkl"],
      featured: true,
      interactiveDemoType: "genre"
    },
    {
      id: "ca-work-ease",
      title: "CA Work Ease / AI Ledger Intelligence",
      category: "Machine Learning / Web Application Concept",
      badge: "Academic Concept",
      shortDescription:
        "An academic software concept assisting Chartered Accountants by parsing CSV ledgers, detecting anomalies, and automating transaction auditing.",
      fullDescription:
        "Designed to alleviate the manual verification workload faced by Chartered Accountants and financial auditors. The system concept processes raw CSV ledger exports, performs data validation, surfaces duplicate entries, highlights statistical anomalies, and aggregates income/expense cashflow insights.",
      problemSolved:
        "Replaces error-prone manual ledger audits with automated heuristic and algorithmic transaction anomaly flagging.",
      methodology:
        "Flask web backend → CSV ingestion & Pandas cleaning → Statistical high-value outlier detection → Duplicate hash matching → Dashboard visualization.",
      technologies: ["Python", "Flask", "Pandas", "CSV Processing", "Anomaly Detection", "Data Cleaning"],
      metrics: [
        { label: "Project Status", value: "Academic Concept", note: "Not commercially deployed; focused on exploratory audit automation" }
      ],
      filesInRepo: ["Ledger Data Pipeline (Academic)"],
      featured: false,
      interactiveDemoType: "ledger"
    }
  ] as Project[],

  skills: [
    {
      title: "Programming",
      description: "Core language foundation for algorithms and systems development",
      skills: [
        { name: "Python", highlight: true, category: "Programming" }
      ]
    },
    {
      title: "Data Science & Machine Learning",
      description: "Libraries, algorithms, and workflows for model building and evaluation",
      skills: [
        { name: "Scikit-Learn", highlight: true, category: "ML" },
        { name: "Pandas", highlight: true, category: "Data Science" },
        { name: "NumPy", highlight: false, category: "Data Science" },
        { name: "Random Forest", highlight: true, category: "Algorithm" },
        { name: "Logistic Regression", highlight: false, category: "Algorithm" },
        { name: "Naive Bayes", highlight: false, category: "Algorithm" }
      ]
    },
    {
      title: "Natural Language Processing (NLP)",
      description: "Text feature engineering, vector representation, and semantic matching",
      skills: [
        { name: "TF-IDF Vectorization", highlight: true, category: "NLP" },
        { name: "Text Classification", highlight: true, category: "NLP" },
        { name: "Count Vectorization", highlight: false, category: "NLP" },
        { name: "Cosine Similarity", highlight: false, category: "NLP" }
      ]
    },
    {
      title: "Development Tools & Environment",
      description: "IDEs, computational notebooks, and collaborative version control",
      skills: [
        { name: "Visual Studio Code", highlight: true, category: "Tools" },
        { name: "Google Colab", highlight: true, category: "Tools" },
        { name: "Jupyter Notebook", highlight: false, category: "Tools" },
        { name: "Git", highlight: false, category: "Tools" },
        { name: "GitHub", highlight: true, category: "Tools" }
      ]
    },
    {
      title: "Computer Science Core",
      description: "Foundational academic coursework in computer engineering",
      skills: [
        { name: "DBMS", highlight: false, category: "Academic" },
        { name: "Operating Systems", highlight: false, category: "Academic" },
        { name: "Compiler Design", highlight: false, category: "Academic" }
      ]
    }
  ] as SkillCategory[],

  experience: [
    {
      role: "Machine Learning Intern",
      organization: "CodSoft",
      type: "Virtual Internship",
      duration: "1 Month",
      status: "Completed",
      description:
        "Worked on practical machine learning pipelines encompassing data preprocessing, text feature extraction using TF-IDF, training classification models, and evaluating prediction accuracy.",
      keyContributions: [
        "Preprocessed raw text datasets, eliminating noise, punctuation, and stopwords for NLP models.",
        "Engineered numerical feature representations using TF-IDF and Count Vectorization techniques.",
        "Trained, fine-tuned, and benchmarked multiple supervised models (MultinomialNB, Logistic Regression, Random Forest).",
        "Serialized trained estimators and vectorizers using Python Pickle for reusable inference.",
        "Maintained structured, version-controlled repository documentation on GitHub."
      ],
      technologies: ["Python", "Scikit-Learn", "Pandas", "TF-IDF", "Jupyter Notebook", "Git"],
      verifiedRepo: "https://github.com/aryapatle123/CODESOFT"
    }
  ] as ExperienceItem[],

  entrepreneurship: {
    title: "Handcrafted Pipe-Cleaner Craft Venture",
    role: "Founder & Creator",
    type: "Independent Initiative",
    description:
      "Alongside my rigorous B.Tech computer science studies, I manage a small handcrafted pipe-cleaner craft venture. This personal initiative exercises creative product design, meticulous attention to detail, time management, inventory planning, and direct client fulfillment.",
    highlights: [
      "Balancing academic CSE responsibilities with hands-on craft production and order scheduling.",
      "Developing self-reliance, creative problem-solving, and attention to tactile quality.",
      "Cultivating real-world communication skills through direct client requests and custom orders."
    ]
  }
};
