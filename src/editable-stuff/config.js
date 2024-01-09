// NAVIGATION BAR SECTION
const navBar = {
  show: true,
};

// MAIN BODY SECTION
// https://fontawesome.com/v4/icons/
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Anya",
  middleName: "",
  lastName: "Bindra",
  message: "Electrical and Computer Engineering at Carnegie Mellon University",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/anyabindra12",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/linkedin",
    },
    // {
    //   image: "fa-discord",
    //   url: "https://discordapp.com/users/384794549412954113",
    // },
    
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",
const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/headshot.jpg"),
  imageSize: 375,
  message:
    "Hi! I am a junior at Carnegie Mellon University studying Electrical and Compuetr Engineering. I am broadly interested at the intersection of Computational Finance and Machine Learning." ,
  resume: require("../editable-stuff/resume.pdf"),
  education:
    <div>
    <p style={{fontSize:22, marginBottom:0}}><b>Carnegie Mellon University</b></p>
    <p style={{fontSize:18, marginBottom:0}}>B.Sc. Electrical and Computer Engineering, 2025 </p>
    <ul>
      <li>Computer Science Courses
        <ul>
          <li>Machine Learning</li>
          <li>Computer Systems, Functional Programming, Full Stack Development</li>
          <li>Theory of Computation, Data Structures & Algorithms</li>
        </ul>
      </li>
      <li>Electrical Engineering Courses
        <ul>
          <li>Electronic Devices and Analog Circuits, Structure & Design of Digital Systems</li>
          <li>Signals and Systems</li>
          
        </ul>
      </li>
    <li> Math Courses
        <ul>
          <li> Matrices and Linear Transformations, Probability and Statistics,Multivariable Calculus</li>
          <li> Discrete Math, Formal Logic</li>
          
        </ul>
      </li>
   <li> Business and Economics Courses
        <ul>
          <li> Microeconomics, Computational Finance</li>
          <li> Intro to Entrepreneurship, Optimization for Business</li>
          
        </ul>
      </li>
    </ul>

    <p style={{fontSize:22, marginBottom:0}}><b>Gems Modern Academy</b></p>
    <p style={{fontSize:18, marginBottom:0}}>Salutatorian, Aug 2019 - May 2021</p>
    <ul>
      <li>Relevant Courses
        <ul>
          <li> Higher Level Math Analysis and Approaches, Physics, Computer Science</li>
          <li> Lower Level French B, Language and Literature, Business Management</li>
        </ul>
      </li>
    </ul>

    
    </div>,
};

// EXPERIENCE SECTION
const experience = {
  show: true,
  heading: "Experience",
  data: [
    {
      company: 'Bank of America',
      location: "New York, NY",
      role: 'Sales and Trading Summer Analyst',
      date: 'Summer 2024',
      description: [
        <ul>
          <li>Global Markets Division.</li>
        </ul>
      ],
    },
    {
      company: 'WorldQuant',
      location: "Brain Platform",
      role: 'Quantitative Trading Research Consultant',
      date: 'Fall 2023 - Ongoing',
      description: [
        <ul>
          <li>Created alpha models and trading strategies with optimal Sharpe ratio (>1.25) by fine tuning input metrics on price-volume and fundamental datasets.</li>
        <li> Leveraged time series and cross-sectional operators, backtested algorithm on options and stocks to generate high investment returns. </li>
        </ul>
      ],
    },
    {
      company: 'Jefferies Financial Group',
      location: "Jersey City, NJ",
      role: 'Summer Analyst',
      date: 'June 2023 – Aug 2023',
      description: [
        <ul>
          <li>Infrastructure & Security Group, Information Technology Division </li>
          <li>Developed an Attribute Based Access Control Engine using Decision Trees, XGBoost and Random Forest classifier algorithms(91%accuracy)
</li>
          <li>Implemented a scalable, end to end bot subroutine in UiPath(VB,C#) that automates the process of provisioning access to systems, saving 320+ hours of admin work
          <li>Programmed REST APIs using SpringBoot to retrieve Docker Images from a CI/CD pipeline and push them into an elastic container register </li>
</li>
          <li>Supported over 300 individuals by moderating an online question forum and providing guidance during office hours</li>
          <li>Learnt about Equity and Debt capital markets, evaluated financial statements inExcel, performed corporate valuation analysis </li>
          <li> Conducted Exploratory Data Analysis (EDA) to gain critical insights, identify trends and patterns within datasets. </li>
          <li> Developed skills in Cloud Computing, Windows Servers, and Splunk (Cloud Security), gaining experience in technology infrastructure.</li>
          <li>Collaborated with cross-functional teams across data science and engineering to enhance data-driven decision-making processes </li>
          <li> Tools,Technologies and Frameworks : CI/CD, Amazon Relational Database Service (RDS), Microservices, Postman API, JavaScript, Scrum, Bitbucket, Cyberark, Jira, DevOps, Machine Learning, Amazon EC2, Spring Boot, Microsoft SQL Server, AWS SageMaker, Robotic Process Automation (RPA), Python </li>
        </ul>,
      ],
    },
    {
      company: "Jane Street",
      location: "New York, NY",
      role: "Quantitative Trading Insight Week",
      date: "Aug 2023",
      description: [
        <ul>
          <li> Gained knowledge of market making,arbitrage,asset classes and securities through mock trading simulations,estimathons and strategy games.</li>
         <li> Attended seminars and participated in discussions on heuristics and biases, liquidity in financial markets, and statistics. </li>
        </ul>
      ],
    },
    {
      company: 'Mashreq Bank',
      location: "Dubai, United Arab Emirates",
      role: 'Digital Technology Intern',
      date: 'May 2022 - Jul 2022',
      description: [
        <ul>
         <li>Leveraged the NLP BERT transformer model for building a question answering and information retrieval pipeline on structured and tabular data</li>
          <li>Conducted quantitative analysis on logical grouping of CIFs and RMs within the corporate, for increased efficiency in business operations </li>
          <li> Learnt about integrating Microsoft Outlook, GraphAPI, Azure Datalake and CRM into the Pulse platform backend. Incorporated agile
and scrum methodologies into the development and optimization of client and server side applications. </li>
        </ul>,
      ],
    },
 
  ]
};

// LEADERSHIP SECTION
const leadership = {
  show: true,
  heading: "Activities & Leadership",
  data: [
    {
      company: 'Smart Women Securities',
      role: 'Research Board Analyst',
      date: 'Sep 2022 – Present',
      description: 
        <ul>
        <li> Prepare stock pitches, perform DCF and ratio analysis to value equities, conduct qualitative and quantitative evaluations to determine the Long/Short position. </li>
        </ul>,
    },
    {
      company: 'CMU Business and Technology Group, Product Studio',
      role: 'Software Engineer',
      date: 'Sept 2023 – Present',
      description:
        <ul>
         <li>Working on OpenGym, a platform to monitor gym occupancy and usage. Utilized ESP 32 as a wifi/bluetooth sensor to collect data, a React Frontend and Node backend</li>
          <li>Coordinated with key academic advisors and professors at CMU on the project. Incorporating time series data analysis for trend forecasting.</li>
        </ul>,
    },
    {
      company: 'Scottie Ventures',
      role: 'Venture Capital Analyst',
      date: 'Sept 2023- Present',
      description:
        <ul>
         
          <li> Worked with Plug and Play as a University Fellow to analyze 30+ startups per week from weekly pitch sessions,evaluated team structure, value proposition, competitive advantage, market size and ESG goals. </li>
          <li> Performed due diligence with team to develop investment rationale and recommend startups to invest in, focusing in the FinTech, Commerce and Supply Chain industries. </li>
        </ul>,
    },
    {
      company: 'Forte Foundation',
      role: 'Undergraduate Campus Ambassador',
      date: 'May 2023 - Present',
      description: 
        <ul>
          <li> Serving as a representative of Forté on campus, facilitating recruiting, event management, and assisting Forté in creating a conducive environment for the leadership development of women of color. </li>
        </ul>,
    },
   
  ]
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
//const repos = {
  //show: true,
  //heading: "Recent Projects",
  //gitHubUsername: "michelleliu4",
  //reposLength: 4,
  //specificRepos: ['Jreamboard', 'goodbot-slack'],
//};

// AWARDS SECTION
const awards = {
  show: true,
  heading: "Awards",
  message:
  <div>
    <p style={{fontSize:20, marginBottom:0}}><b>2nd place, WorldQuant Alphathon, Gold Level (2023)</b></p>
      <ul>
        <li>Created alphas with high Sharpe Ratios, profitable tradings with high investment returns </li>
      </ul>
      <p style={{fontSize:20, marginBottom:0}}><b> Salutatorian, International Baccalaureate (2022)</b></p>
      <ul>
        <li> Achieved 2nd place globally, as well as awarded the KS Varkey Scholarship</li>
        
      </ul>
     
  </div>,
  images: [
    { 
      img: require("../assets/img/awards_ib.png"), 
      label: "", 
      paragraph: "" 
    },
    { 
      img: require("../assets/img/awards_worldquant.png"), 
      label: "", 
      paragraph: "" 
    },
  ],
  imageSize: {
    width:"400", //orig: 615
    height:"400" //orig: 450
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  languages: [
    { name: "Python", value: require("../assets/img/logo_python.png") },
    { name: "JavaScript", value: require("../assets/img/logo_javascript.png") },
    { name: "HTML/CSS", value: require("../assets/img/logo_html.png") },
    // { name: "CSS", value: require("../assets/img/logo_css.png") },
    { name: "ReasonML", value: require("../assets/img/logo_reasonml.png") },
    // { name: "Racket", value: require("../assets/img/logo_racket.png") },
    { name: "C/C++", value: require("../assets/img/logo_c.png") },
  ],
  librariesFrameworks: [
    { name: "TensorFlow", value: require("../assets/img/logo_tensorflow.png") },
    { name: "NumPy", value: require("../assets/img/logo_numpy.png") },
    { name: "pandas", value: require("../assets/img/logo_pandas.png") },
    { name: "scikit-learn", value: require("../assets/img/logo_scikitlearn.png") },
    { name: "Matplotlib", value: require("../assets/img/logo_matplotlib.png") },
    { name: "React", value: require("../assets/img/logo_react.png") },
    { name: "PostgreSQL", value: require("../assets/img/logo_postgresql.png") },
  ],
  otherSkills: [
    { name: "Git", value: require("../assets/img/logo_git.png") },
    { name: "Docker", value: require("../assets/img/logo_docker.png") },
    { name: "Figma", value: require("../assets/img/logo_figma.png") },
    { name: "WordPress", value: require("../assets/img/logo_wordpress.png") },
    { name: "Agile", value: require("../assets/img/logo_agile.png") },
    { name: "Jira", value: require("../assets/img/logo_jira.png") },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "Always open to opportunities! Please reach out to me at",
  email: "anyab@andrew.cmu.edu",
};

// BLOG SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, experience, leadership, awards, skills, getInTouch };
