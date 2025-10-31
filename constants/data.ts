// Complete mock data for Grow Money Investment Services

export const companyData = {
  name: "Grow Money Investment Services",
  tagline: "Your Trusted Partner in Wealth Creation",
  owner: {
    name: "Prerit Khorwal",
    designation: "Founder & Chief Investment Advisor",
    qualifications: [
      "CFP (Certified Financial Planner)",
      "NISM Certified",
      "MBA in Finance",
      "10+ years in wealth management",
    ],
    bio: "Prerit Khorwal is a seasoned financial advisor with over a decade of experience in wealth management and investment advisory. With a strong background in finance and a passion for helping people achieve their financial goals, he founded Grow Money Investment Services in 2015. His client-centric approach and deep market insights have earned him recognition in the industry. Prerit holds multiple certifications including CFP and NISM, and is dedicated to providing transparent, unbiased financial guidance that puts his clients' interests first.",
    image: "/financial-advisor-portrait.png",
  },
  registration: {
    amfi: "ARN-171566",
    sebi: "INZ000012345",
    cin: "U67120MH2015PTC123456",
  },
  contact: {
    phone: "+91 98765 43210",
    email: "contact@growmoney.in",
    whatsapp: "+91 98765 43210",
    address: "123, Business Tower, Financial District, Mumbai, Maharashtra - 400001",
  },
  workingHours: "Mon - Sat: 9:00 AM - 6:00 PM IST",
  socialMedia: {
    facebook: "https://facebook.com/growmoney",
    twitter: "https://twitter.com/growmoney",
    instagram: "https://instagram.com/growmoney",
    linkedin: "https://linkedin.com/company/growmoney",
    youtube: "https://youtube.com/@growmoney",
  },
}

export const services = [
  {
    id: 1,
    title: "Mutual Funds Investment",
    icon: "TrendingUp",
    description:
      "Invest in a diversified portfolio of top-performing mutual funds tailored to your risk profile. We provide access to direct plans that eliminate distributor charges, saving you up to 1-1.5% annually on your investments. Whether you're a first-time investor or an experienced one, our experts will guide you to build a robust investment portfolio aligned with your financial objectives.",
    features: [
      "Direct mutual fund access",
      "Zero commission plans",
      "Portfolio diversification",
      "Risk-based allocation",
    ],
  },
  {
    id: 2,
    title: "SIP Planning",
    icon: "BarChart3",
    description:
      "Build wealth systematically through Systematic Investment Plans (SIPs). Start investing with as little as ₹500 per month and let the power of compounding work for you. Our SIP planning experts help you determine the right investment amount and fund selection based on your financial goals and time horizon.",
    features: ["Flexible SIP amounts", "Goal-based planning", "Regular monitoring", "Automatic investment"],
  },
  {
    id: 3,
    title: "Lumpsum Investment",
    icon: "DollarSign",
    description:
      "Make the most of your lumpsum amount by investing strategically for long-term wealth creation. Whether it's bonus, inheritance, or savings, we help you deploy capital efficiently through systematic investment strategies. Our advisors assist with market timing and fund selection to maximize your returns over time.",
    features: ["Strategic deployment", "Market-timing strategies", "Tax optimization", "Performance tracking"],
  },
  {
    id: 4,
    title: "SWP - Systematic Withdrawal",
    icon: "Wallet",
    description:
      "Generate regular income during retirement through Systematic Withdrawal Plans (SWPs). Build a sustainable income stream from your investments while maintaining portfolio growth. Our SWP planning ensures consistent cash flow to support your retirement lifestyle without depleting your corpus.",
    features: ["Regular income generation", "Portfolio preservation", "Tax efficiency", "Retirement planning"],
  },
  {
    id: 5,
    title: "Insurance Planning",
    icon: "Shield",
    description:
      "Protect your family's financial future with comprehensive insurance planning. We provide expert guidance on term insurance, health insurance, and investment-linked policies. Our advisors assess your protection needs and recommend appropriate coverage to safeguard your loved ones.",
    features: ["Life insurance planning", "Health coverage guidance", "Claims support", "Policy review"],
  },
  {
    id: 6,
    title: "Portfolio Review & Rebalancing",
    icon: "RefreshCw",
    description:
      "Optimize your existing investment portfolio with regular reviews and strategic rebalancing. Our experts analyze your current holdings, assess performance against benchmarks, and recommend adjustments to align with your goals. Regular portfolio reviews ensure your investments remain on track despite market changes.",
    features: ["Performance analysis", "Quarterly reviews", "Rebalancing strategy", "Tax optimization"],
  },
]

export const statistics = [
  {
    number: 1500,
    label: "Active Clients",
    suffix: "+",
    icon: "Users",
  },
  {
    number: 10,
    label: "Years of Experience",
    suffix: "",
    icon: "Award",
  },
  {
    number: 250,
    label: "Assets Under Management",
    suffix: " Cr",
    icon: "TrendingUp",
    prefix: "₹",
  },
  {
    number: 4.8,
    label: "Client Rating",
    suffix: "★",
    icon: "Star",
  },
  {
    number: 3500,
    label: "Financial Goals Achieved",
    suffix: "+",
    icon: "Target",
  },
  {
    number: 15.5,
    label: "Average Annual Returns",
    suffix: "%",
    icon: "BarChart3",
  },
]

export const partners = [
  { name: "HDFC Mutual Fund", initials: "HDFC" },
  { name: "ICICI Prudential", initials: "ICICI" },
  { name: "SBI Mutual Fund", initials: "SBI" },
  { name: "Axis Mutual Fund", initials: "Axis" },
  { name: "Aditya Birla Sun Life", initials: "ABSL" },
  { name: "Nippon India", initials: "NIP" },
  { name: "Kotak Mahindra", initials: "KMC" },
  { name: "DSP Mutual Fund", initials: "DSP" },
  { name: "Tata Mutual Fund", initials: "Tata" },
  { name: "UTI Mutual Fund", initials: "UTI" },
  { name: "Franklin Templeton", initials: "FT" },
  { name: "IDFC Mutual Fund", initials: "IDFC" },
  { name: "L&T Mutual Fund", initials: "L&T" },
  { name: "Mirae Asset", initials: "MA" },
  { name: "Motilal Oswal", initials: "MO" },
  { name: "Parag Parikh", initials: "PP" },
  { name: "Quantum Mutual Fund", initials: "QMF" },
  { name: "Quant Mutual Fund", initials: "QF" },
  { name: "Mahindra Manulife", initials: "MM" },
  { name: "Edelweiss", initials: "EW" },
  { name: "Sundaram Mutual Fund", initials: "SM" },
  { name: "PPFAS", initials: "PPFAS" },
  { name: "Baroda BNP Paribas", initials: "BBNP" },
  { name: "Canara Robeco", initials: "CRF" },
  { name: "Union Mutual Fund", initials: "UMF" },
]

export const mutualFunds = [
  "Axis Bluechip Fund",
  "SBI Small Cap Fund",
  "HDFC Top 100",
  "ICICI Prudential Growth",
  "Nippon India Tax Saver",
  "Parag Parikh Flexi Cap",
  "Mirae Asset Large Cap",
  "Kotak Emerging Equity",
  "Tata Digital India",
  "Quant Active Fund",
  "Franklin India Focused",
  "DSP Midcap Fund",
  "Motilal Oswal Multicap",
  "UTI Dividend Yield",
  "Sundaram Select Micro Cap",
  "PPFAS Long Term Equity",
  "Quantum Long Term Equity",
  "Edelweiss Balanced Advantage",
  "Aditya Birla Focused Equity",
  "IDFC Infrastructure Fund",
]

export const teamMembers = [
  {
    id: 1,
    name: "Prerit Khorwal",
    designation: "Founder & Chief Investment Advisor",
    bio: "With over a decade of experience in financial advisory and wealth management, Prerit founded Grow Money with a vision to democratize professional financial guidance. His systematic approach to investing and client-centric philosophy has earned the trust of over 1,500 families. He holds certifications in financial planning and is a regular speaker at financial literacy workshops.",
    qualifications: ["CFP (Certified Financial Planner)", "NISM Certified", "MBA in Finance"],
    image: "/professional-male-financial-advisor.jpg",
    linkedIn: "https://linkedin.com",
  },
  {
    id: 2,
    name: "Rohit Sharma",
    designation: "Senior Investment Analyst",
    bio: "Rohit brings 8 years of experience in market research and portfolio analysis. He specializes in identifying high-potential mutual funds and constructing diversified portfolios. His data-driven approach and deep market knowledge help clients navigate complex investment decisions with confidence.",
    qualifications: ["CFA Level II", "B.Tech (Finance)", "Market Research Specialist"],
    image: "/professional-male-investment-analyst.jpg",
    linkedIn: "https://linkedin.com",
  },
  {
    id: 3,
    name: "Priya Mehta",
    designation: "Portfolio Manager",
    bio: "Priya is an experienced portfolio manager with a track record of delivering consistent returns across market cycles. She specializes in goal-based investing and wealth preservation strategies. Her personalized approach ensures every client's portfolio is aligned with their specific objectives and risk tolerance.",
    qualifications: ["MBA (Finance)", "NISM Certified", "7+ years Portfolio Management"],
    image: "/professional-female-portfolio-manager.jpg",
    linkedIn: "https://linkedin.com",
  },
  {
    id: 4,
    name: "Ankit Verma",
    designation: "Client Relationship Manager",
    bio: "Ankit ensures every client receives exceptional service and support throughout their investment journey. With 6 years of experience in client relationship management, he handles portfolio reviews, queries, and ensures complete transparency in all communications.",
    qualifications: ["B.Com (Finance)", "NISM Certified", "Customer Success Specialist"],
    image: "/professional-male-client-relationship-manager.jpg",
    linkedIn: "https://linkedin.com",
  },
]

export const calculators = [
  {
    id: 1,
    title: "SIP Calculator",
    icon: "TrendingUp",
    description:
      "Calculate potential returns on your SIP investments based on investment amount, duration, and expected annual returns. Understand the power of compounding and how regular investments can build your wealth over time.",
    status: "Coming Soon",
  },
  {
    id: 2,
    title: "Lumpsum Calculator",
    icon: "DollarSign",
    description:
      "Estimate the future value of your one-time investments. Analyze different investment scenarios and understand how different investment amounts can grow over various time periods.",
    status: "Coming Soon",
  },
  {
    id: 3,
    title: "SWP Calculator",
    icon: "Wallet",
    description:
      "Plan your retirement income with our SWP calculator. Determine the optimal withdrawal amount to ensure your corpus lasts through your retirement while generating regular income.",
    status: "Coming Soon",
  },
  {
    id: 4,
    title: "Step-up SIP Calculator",
    icon: "ArrowUpCircle",
    description:
      "Calculate returns on SIPs with annual increments. Perfect for professionals expecting salary increases who want to boost their SIP contributions regularly.",
    status: "Coming Soon",
  },
  {
    id: 5,
    title: "Goal Planning Calculator",
    icon: "Target",
    description:
      "Plan investments for your financial goals like education, home purchase, or vacation. Calculate required monthly investments to achieve your specific financial objectives.",
    status: "Coming Soon",
  },
]

export const testimonials = [
  {
    id: 1,
    name: "Rajesh Kumar",
    designation: "Business Owner",
    content:
      "Working with Grow Money was one of the best decisions for my family's financial future. Prerit's transparent approach and personalized strategies have helped us achieve our goals. Highly recommended!",
    image: "/professional-male-testimonial.jpg",
  },
  {
    id: 2,
    name: "Anita Desai",
    designation: "IT Professional",
    content:
      "I was overwhelmed with investment options until I met Prerit. His guidance on SIP planning and portfolio diversification gave me confidence. The regular reviews and updates keep me on track.",
    image: "/professional-female-testimonial.jpg",
  },
  {
    id: 3,
    name: "Vikram Singh",
    designation: "Corporate Executive",
    content:
      "The direct mutual fund approach at Grow Money saved me significant commission charges. The team's expertise and support through market volatility has been exceptional.",
    image: "/professional-male-business-testimonial.jpg",
  },
  {
    id: 4,
    name: "Meera Patel",
    designation: "Homemaker & Investor",
    content:
      "After my retirement, I was concerned about managing my finances. Grow Money's SWP planning ensured a steady income stream while maintaining my portfolio growth. Truly peace of mind!",
    image: "/professional-female-homemaker-testimonial.jpg",
  },
  {
    id: 5,
    name: "Arun Nair",
    designation: "Software Engineer",
    content:
      "The SIP calculator and goal-based planning helped me invest strategically. I appreciated the quarterly reviews that kept my portfolio aligned with my financial goals. Great service!",
    image: "/professional-male-engineer-testimonial.jpg",
  },
  {
    id: 6,
    name: "Priyanka Sharma",
    designation: "Consultant",
    content:
      "Starting with Grow Money was easy and transparent. No hidden fees, just genuine advice. The team explained everything clearly and helped me build a diversified portfolio. Highly satisfied!",
    image: "/professional-female-consultant-testimonial.jpg",
  },
]

export const usps = [
  {
    title: "SEBI Registered",
    description:
      "Our services are fully regulated and registered with the Securities and Exchange Board of India, ensuring complete compliance and investor protection.",
  },
  {
    title: "Transparent Advisory",
    description:
      "We believe in complete transparency. No hidden charges, no conflict of interest. Our recommendations are always based on your needs, not commission incentives.",
  },
  {
    title: "Zero Commission",
    description:
      "We provide access to direct mutual fund plans with zero commission, saving you up to 1-1.5% annually compared to regular plans.",
  },
  {
    title: "Personalized Strategies",
    description:
      "Every financial situation is unique. We create customized investment strategies aligned with your goals, timeline, and risk appetite.",
  },
  {
    title: "Regular Portfolio Reviews",
    description:
      "We conduct quarterly portfolio reviews to ensure your investments remain aligned with your goals and market conditions.",
  },
  {
    title: "Expert Team",
    description:
      "Our team comprises certified financial planners, investment analysts, and advisors with decades of combined experience in wealth management.",
  },
]

export const companyStory = {
  mission:
    "To democratize access to professional financial advisory services and empower individuals to make informed investment decisions for secure wealth creation.",
  vision:
    "To become India's most trusted and client-centric investment advisory firm, recognized for transparency, expertise, and consistent value delivery.",
  values: [
    {
      title: "Integrity",
      description:
        "We conduct our business with complete honesty and transparency, putting client interests above all else.",
    },
    {
      title: "Excellence",
      description:
        "We strive for excellence in every aspect of our service delivery, continuously improving our processes and expertise.",
    },
    {
      title: "Client-First",
      description:
        "Every decision we make is guided by what's best for our clients, without compromise on our principles.",
    },
    {
      title: "Knowledge",
      description: "We invest in continuous learning and stay updated with market trends to provide the best guidance.",
    },
    {
      title: "Trust",
      description: "We build long-term relationships based on trust, consistency, and proven track records of success.",
    },
  ],
}
