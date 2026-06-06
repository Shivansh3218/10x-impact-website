// ============================================================
// 10x Impact Labs — content (sourced from 10ximpact.in production site)
// ============================================================

const U = "https://images.unsplash.com/";
const img = (id, w = 1400) => `${U}${id}?auto=format&fit=crop&q=80&w=${w}`;

export const IMG = {
  classroom: img("photo-1719159381916-062fa9f435a6"),
  teaching: img("photo-1544776193-352d25ca82cd"),
  villageGirl: img("flagged/photo-1574097656146-0b43b7660cb6"),
  womenColor: img("photo-1663527793121-532686299281"),
  data: img("photo-1551288049-bebda4e38f71"),
  potter: img("photo-1524497440-4da55062cb4a"),
  womenMP: img("photo-1587538018365-2a1f8b544c08"),
  community: img("photo-1519955266818-0231b63402bc"),   // community group, India
};

// Partner logos served from the live CDN (browser-loaded).
const A = "https://diag-pal-probe.lovable.app/__l5e/assets-v1/";
export const PARTNERS = [
  { n: "Udhyam Learning Foundation", f: A + "1af4e4a9-3ba7-41a6-812b-c292db765d11/udhyam.png" },
  { n: "Labhya Foundation", f: A + "5267f05c-ccda-4feb-a949-1a5e729459f0/labhya.png" },
  { n: "Dasra", f: A + "4ab60107-9307-4a31-ae7d-b797d883ac44/dasra.png" },
  { n: "Dhwani Foundation", f: A + "ceb9e799-f81d-45cb-824b-fb38c7467968/dhwani-foundation.png" },
  { n: "Dhwani RIS", f: A + "b6c888dc-8586-4fd6-ad1c-7734c3b5bb6a/dhwani-ris.png" },
  { n: "Project Tech4Dev", f: A + "ead365a3-6d6b-43cd-8da2-2f1f0794c953/partner-1.png" },
  { n: "Jan Sahas", f: A + "b58aee52-950b-43df-9f92-d149326eb0bb/partner-2.png" },
  { n: "TinkerHub", f: A + "96bf3ce3-d88d-42c6-bf95-d65ab788e374/partner-3.png" },
  { n: "Headstreams", f: A + "26ffbd5b-8e94-4c0d-9c65-787190c64406/partner-4.png" },
  { n: "EnAble India", f: A + "879a37c6-71e7-4e49-bae6-b80389f0bf34/partner-5.png" },
  { n: "Pehlay Akshar Foundation", f: A + "a9c85918-2919-42c9-9adc-6c8f826f90f3/partner-6.png" },
  { n: "Key Education Foundation", f: A + "7ae6fed3-74d6-4d80-a6e6-0e6849bce8fa/partner-7.png" },
  { n: "Nyaaya", f: A + "11fdcc54-cf3b-497b-8661-20061d995d39/partner-8.png" },
  { n: "Video Volunteers", f: A + "6c394d10-63a0-41ac-b443-43fee1000232/partner-9.png" },
  { n: "Agami", f: A + "dc15a706-c328-49a2-83ac-96ca52a11f6c/partner-10.png" },
  { n: "OASIS", f: A + "10b5392f-3ce0-4e10-9996-578002ef0195/partner-11.png" },
];

export const STATS = [
  { n: 1200, s: "+", l: "Non-profits Trained" },
  { n: 75, s: "+", l: "Solutions Delivered" },
  { n: 50, s: "+", l: "Partners Supported" },
  { n: 8, s: "+", l: "Countries Reached" },
];

// 10 case studies (matching the production /case_study list).
export const CASES = [
  {
    slug: "enable-india", cat: "Disability", client: "EnAble India",
    title: "Enabling 100,000+ Rural Persons with Disabilities with Livelihood Opportunities",
    desc: "A nationwide matching and tracking platform connecting rural persons with disabilities to jobs and entrepreneurship.",
    img: IMG.womenMP, services: ["Technology Platforms", "MEL", "Capacity Building"],
    stats: [{ v: "100,000+", l: "People reached" }, { v: "15+", l: "States" }],
    challenge: "EnAble India's reach far outpaced its tooling. Counsellors were stitching together spreadsheets to track candidates, employers, and outcomes.",
    approach: "We built a single source of truth for candidates, jobs, and outcomes, and trained counsellor cohorts to own it.",
    solution: "A national platform with counsellor-friendly workflows, employer portals, and an analytics layer the leadership uses weekly.",
    outcome: "Over 100,000 persons with disabilities reached, with a system the team can grow on for the next decade.",
  },
  {
    slug: "grant-management", cat: "Tech for Good", client: "One of India's largest banking CSRs",
    title: "Leading the Development of a Grant Management Platform for One of India's Largest Banking CSRs",
    desc: "An end-to-end grant-management platform powering ₹800 Cr of annual disbursal across 200+ projects.",
    img: IMG.data, services: ["Technology Platforms", "Product", "Data"],
    stats: [{ v: "₹800 Cr", l: "Annual disbursal" }, { v: "200+", l: "Projects" }],
    challenge: "A major banking CSR was managing hundreds of crores in grants across 200+ projects on spreadsheets and email — with no single view of disbursal, compliance, or impact.",
    approach: "We led product and design end-to-end, mapping the full grant lifecycle with the CSR team and building around how grants are actually reviewed, approved, and tracked.",
    solution: "An end-to-end grant-management platform handling proposals, due diligence, disbursal, compliance, and reporting — with dashboards leadership uses to steer the portfolio.",
    outcome: "₹800 Cr disbursed annually across 200+ projects on one platform, with full visibility from proposal to impact.",
  },
  {
    slug: "ask-nyaaya", cat: "Legal", client: "Nyaaya (Vidhi Centre for Legal Policy)",
    title: "Enhancing Access to Legal Information through the “Ask Nyaaya” Program",
    desc: "A conversational legal-aid assistant that makes Indian law approachable for citizens, paralegals, and frontline workers.",
    img: IMG.teaching, services: ["AI Solutions", "Product", "Capacity Building"],
    stats: [{ v: "<10s", l: "Avg response time" }, { v: "100k+", l: "Queries handled" }],
    challenge: "Millions of Indians have legal questions but no affordable, trustworthy first port of call. Nyaaya had deep legal content but limited reach through static pages.",
    approach: "We re-architected the experience around real user questions, layered an AI assistant grounded in vetted legal content, and trained the team to maintain it.",
    solution: "An “Ask Nyaaya” chat experience that interprets plain-language queries, returns plain-language answers, and always points back to authoritative content and human help.",
    outcome: "Dramatic improvement in question-to-answer time and major uplift in citizens served per month, with the team in full control of the content.",
  },
  {
    slug: "buland-bol", cat: "Livelihood", client: "Buland Bol partner",
    title: "Scaling Self-Paced Learning through the Buland Bol Training Chatbot",
    desc: "A WhatsApp-first training chatbot that delivers self-paced learning to thousands of frontline practitioners.",
    img: IMG.villageGirl, services: ["AI Solutions", "Product", "MEL"],
    stats: [{ v: "10,000+", l: "Learners reached" }, { v: "68%", l: "Completion rate" }],
    challenge: "In-person training was high-quality but impossible to scale across geographies and shifts. Practitioners needed a familiar, low-bandwidth channel.",
    approach: "We designed a modular curriculum delivered via a WhatsApp chatbot, with built-in assessments and a dashboard for trainers.",
    solution: "A production chatbot that meets learners where they already are, plus a trainer dashboard for cohort progress and intervention.",
    outcome: "Thousands of practitioners completing modules each month, with cost per learner an order of magnitude lower than instructor-led delivery.",
  },
  {
    slug: "ai-mentor-chatbot", cat: "Livelihood", client: "Community volunteer programs",
    title: "Empowering Community Volunteers in 10+ States via an AI-Powered Mentor ChatBot",
    desc: "A conversational AI mentor giving frontline community volunteers on-demand guidance across 10+ Indian states.",
    img: IMG.womenColor, services: ["AI Solutions", "Product", "Capacity Building"],
    stats: [{ v: "10+", l: "States reached" }, { v: "AI-powered", l: "Mentor chatbot" }],
    challenge: "Frontline volunteers across 10+ states needed timely, consistent guidance, but human mentors couldn't scale to answer questions the moment they came up.",
    approach: "We designed an AI mentor grounded in the program's own playbooks, delivered through a familiar chat interface, with escalation to humans when needed.",
    solution: "A conversational AI mentor chatbot that answers volunteers' questions in their context, available on demand across geographies.",
    outcome: "Community volunteers in 10+ states get instant, consistent mentoring, freeing human mentors for the highest-value cases.",
  },
  {
    slug: "mel-200-ngos", cat: "Livelihood", client: "Philanthropic funder consortium",
    title: "Improving 200+ Grassroots NGOs' Monitoring, Evaluation, and Learning Platform",
    desc: "A shared MEL platform serving 200+ grassroots NGOs across India, with funder-friendly reporting baked in.",
    img: IMG.data, services: ["MEL", "Data", "Capacity Building"],
    stats: [{ v: "200+", l: "NGOs onboarded" }, { v: "~40%", l: "Reporting time saved" }],
    challenge: "Grassroots NGOs were drowning in funder-specific reporting templates, with no time left for actual learning.",
    approach: "We designed a common data model across funders, built a multi-tenant MEL platform, and ran capacity programs so NGOs could own it.",
    solution: "A platform that ingests programmatic data once and produces both internal learning artefacts and funder-grade reports.",
    outcome: "200+ NGOs now operate on a shared backbone, with measurable time saved per reporting cycle and a learning network that didn't exist before.",
  },
  {
    slug: "udhyam-livelihoods", cat: "Livelihood", client: "Udhyam Learning Foundation",
    title: "Improving Livelihoods and Earnings of Village-Level Entrepreneurs in Uttar Pradesh",
    desc: "Digital tools that help village-level entrepreneurs run better businesses and earn more.",
    img: IMG.potter, services: ["Technology Platforms", "Data", "MEL"],
    stats: [{ v: "5,000+", l: "Entrepreneurs" }, { v: "+22%", l: "Avg earnings lift" }],
    challenge: "Entrepreneurs in rural UP had ambition and informal networks, but no simple digital tooling to track sales, inventory, and customer relationships.",
    approach: "Co-design sprints with entrepreneurs to find the smallest useful tools, then progressive enhancement as adoption grew.",
    solution: "A lightweight Android-first toolkit and a coach dashboard that surfaces who needs help, when.",
    outcome: "Sustained earnings lift and a data backbone the program team uses to target support precisely.",
  },
  {
    slug: "evidence-based-experimentation", cat: "Livelihood", client: "Multi-country consortium",
    title: "Improving Evidence-Based Decision Making for Changemakers through Tech-Enabled Experimentation Across Asia",
    desc: "A tech-enabled experimentation platform helping changemakers across Asia test, learn and scale interventions with rigour.",
    img: IMG.womenColor, services: ["Technology Platforms", "MEL", "Data"],
    stats: [{ v: "6", l: "Countries" }, { v: "40+", l: "Active experiments" }, { v: "25", l: "Partner orgs" }],
    challenge: "Changemakers across Asia were running interventions with limited ability to test what works, compare results across geographies, or share evidence with funders in a structured way.",
    approach: "We co-designed a lightweight experimentation framework with the consortium, then built tooling for hypothesis tracking, baseline-endline measurement, and cross-program learning.",
    solution: "A multi-tenant web platform with a shared metrics library, experiment templates, and a peer-learning layer that turns each test into a shareable case.",
    outcome: "Partner organisations now run structured experiments end-to-end on the platform, with cross-country learning loops that did not exist before.",
  },
  {
    slug: "classroom-content", cat: "Education", client: "Education partners",
    title: "Delivering Engaging Educational Content and Activities to Teachers for Enhanced Classroom Learning",
    desc: "Designing engaging content and activities that help teachers improve foundational classroom learning.",
    img: IMG.classroom, services: ["Product", "Design", "Content"],
    stats: [{ v: "Foundational", l: "Learning content" }, { v: "Teacher-first", l: "Co-designed" }],
    challenge: "Teachers wanted to make foundational lessons more engaging but lacked ready-to-use, context-appropriate classroom content and activities.",
    approach: "We co-designed content and activity formats with teachers, grounded in real classroom constraints and learning goals.",
    solution: "A library of engaging, easy-to-run classroom content and activities mapped to foundational learning outcomes.",
    outcome: "Teachers deliver more engaging lessons with ready-made activities, improving classroom participation and foundational learning.",
  },
  {
    slug: "lms-video-volunteers", cat: "Livelihood", client: "Video Volunteers",
    title: "LMS Evaluation for Video Volunteers",
    desc: "A rigorous evaluation of Video Volunteers' Learning Management System, with a roadmap to lift completion and impact.",
    img: IMG.womenColor, services: ["MEL", "Product", "Research"],
    stats: [{ v: "Mixed-method", l: "Evaluation" }, { v: "Roadmap", l: "Delivered" }],
    challenge: "VV had invested in an LMS for community correspondents but lacked clarity on learner outcomes, drop-off points, and product-market fit.",
    approach: "Mixed-method evaluation: usage analytics, learner interviews, and product audits combined into a single decision-grade report.",
    solution: "Concrete recommendations across content design, UX, and learning architecture, plus a phased redesign plan the team could execute.",
    outcome: "VV adopted the recommendations and now has a measurable learning improvement plan tied to programmatic outcomes.",
  },
];

export const CASE_CATEGORIES = ["All", "Disability", "Education", "Legal", "Livelihood", "Tech for Good"];

// Services — two tracks (verbatim service names from /what-we-do).
export const SERVICES = {
  ngo: {
    key: "Non-profits & Philanthropies",
    label: "For Non-profits & Philanthropies",
    tagline: "Designing for the people doing the work.",
    items: [
      { h: "Leverage Tech, Data & AI for Better Programs and Community Outcomes", p: "We help NGOs identify, plan and use the right tech, data and AI tools — practical solutions that improve program delivery and outcomes, not shiny apps." },
      { h: "Build MEL Process, Dashboard & Tech for Smarter Decisions", p: "We set up simple MEL processes, build dashboards, and design data systems that make it easy to track, learn and improve — without the complexity." },
      { h: "Fractional MEL / Data Expert", p: "Part-time, on-demand MEL & data experts who work with your team every month to strengthen data systems and help you learn and improve." },
      { h: "Fractional Product Manager — Digital Solutions Expert", p: "A part-time expert Product Manager who helps plan, build and manage digital projects — from concept to adoption." },
    ],
  },
  gov: {
    key: "GovTech, Philanthropies & CSRs",
    label: "For GovTech, Philanthropies & CSRs",
    tagline: "Improving public service delivery.",
    items: [
      { h: "Design Tech, Data & AI Programs for Impact", p: "We help funders design tech, data, and AI-enabled programs — from concept to partner identification and implementation support." },
      { h: "Strengthen Grantee Tech and Data Capacity", p: "Grantee tech and data capacity-building through workshops, toolkits, and direct support that builds reporting strength and sustainability." },
      { h: "Research and Insights on Tech, Data and AI", p: "Custom research, landscape studies and insight reports on tech, data and AI trends in the social impact space." },
    ],
  },
};

export const AUDIENCES = [
  { h: "Non-profits & Philanthropies", p: "Build the digital backbone your programs deserve.", tags: ["Tech & AI strategy", "AI capacity building", "Product & design", "MEL systems"] },
  { h: "Governments & GovTech", p: "Make public services faster, clearer and easier to govern.", tags: ["Product & design audits", "User research", "Design governance"] },
  { h: "Social Enterprises", p: "Ship products that scale impact and revenue together.", tags: ["Product strategy", "Data", "Lean experimentation"] },
  { h: "Fellows & Community", p: "Grow as a tech-for-good practitioner alongside us.", tags: ["AI for Impact Fellowship", "Open toolkits", "Peer learning"] },
];

export const PRINCIPLES = [
  { n: "01", h: "Product Thinking Approach", p: "We treat every intervention, digital or non-digital, like a product with clear goals, user journeys and measurable outcomes." },
  { n: "02", h: "User-Centred & Collaborative", p: "Our work starts with the needs, behaviours and realities of end users. We co-design with stakeholders from day one." },
  { n: "03", h: "Data-Driven", p: "Every decision is informed by data. From baseline assessments to iterative pilots, we track what works and pivot where needed." },
  { n: "04", h: "Lean Startup Methodology", p: "Move fast, test early, learn continuously. Rapid prototyping, feedback loops and adaptive planning de-risk innovation." },
];

export const VALUES = [
  { k: "01", h: "Leading with Trust", p: "Long-term partnerships, not transactions." },
  { k: "02", h: "Co-Design", p: "Built with people, never just for them." },
  { k: "03", h: "Jugaadu Spirit", p: "Frugal innovation for real-world constraints." },
  { k: "04", h: "Action-biased", p: "We ship. We iterate. We adapt." },
];

export const BELIEFS = [
  { h: "People over platforms", p: "We design for the person at the other end of the screen — frontline worker, beneficiary, official, fellow." },
  { h: "Adoption is the metric", p: "A deployed system that nobody uses is a failure. We're judged on usage, not delivery." },
  { h: "Frugal by default", p: "Low bandwidth, shared devices, modest budgets. The constraint is the design brief." },
  { h: "Boring tech, bold outcomes", p: "Proven tools so we can spend our risk budget on what actually matters." },
  { h: "Evidence over enthusiasm", p: "MEL isn't a reporting tax. It's how we know what to keep, kill and scale." },
  { h: "Hand back the keys", p: "Our job ends when your team can run it without us." },
];

export const INCUBATED = ["IIM-B NSRCEL", "Wadhwani Foundation"];

// Team (real members from /about-us).
export const TEAM = [
  { n: "Vaibhav Mishra", r: "Director & Co-founder", li: "https://www.linkedin.com/in/vaibhavmishra05/", email: "vaibhav@10ximpact.in" , photo: "/team/vaibhav.jpg"},
  { n: "Tony Brian D’Souza", r: "Director & Co-founder", li: "https://www.linkedin.com/in/tonybriandsouza/", email: "tony@10ximpact.in" , photo: "/team/tony.jpg"},
  { n: "Abhishek Bhardwaj", r: "Principal MEL & Research Lead", li: "https://www.linkedin.com/in/abhardwaj/", email: "abhishek@10ximpact.in" , photo: "/team/abhishek.jpg"},
  { n: "Noor Dhawan", r: "Product Manager", li: "https://www.linkedin.com/in/noor-dhawan-pm/", email: "noor@10ximpact.in" , photo: "/team/noor.jpg"},
  { n: "Garima Bagaria", r: "Senior Product Designer", li: "https://www.linkedin.com/in/garimabagaria/", email: "garima@10ximpact.in" , photo: "/team/garima.jpg"},
  { n: "Shivansh Rawat", r: "Associate Product Manager", li: "https://www.linkedin.com/in/shivansh-rawat-78aa421b5/", email: "shivansh@10ximpact.in" , photo: "/team/shivansh.jpg"},
  { n: "Yukti Grover", r: "Business Associate", li: "https://www.linkedin.com/in/writingbyyuktigrover", email: "yukti@10ximpact.in" , photo: "/team/yukti.jpg"},
  { n: "Rajasekhar Kaliki", r: "Advisor", li: "" },
  { n: "Daniela de Carvalho Matielo", r: "Advisor", li: "https://www.linkedin.com/in/danimatielo/" , photo: "/team/daniela.jpg"},
];

// id => project context, for the interactive India map
export const MAP_STATES = {
  ka: { state: "Karnataka", proj: "Bengaluru HQ · shared MEL platform for 200+ NGOs", stat: "with a philanthropic funder consortium" },
  up: { state: "Uttar Pradesh", proj: "Village-level entrepreneurs — livelihoods & earnings", stat: "with Udhyam Learning Foundation" },
  mp: { state: "Madhya Pradesh", proj: "Rural persons with disabilities into livelihoods", stat: "with EnAble India" },
  mh: { state: "Maharashtra", proj: "Buland Bol self-paced training chatbot", stat: "WhatsApp-first capacity building" },
  dl: { state: "Delhi", proj: "“Ask Nyaaya” legal-aid assistant", stat: "with Nyaaya · Vidhi Centre for Legal Policy" },
  br: { state: "Bihar", proj: "AI-powered mentor chatbot for volunteers", stat: "active across 10+ states" },
  jh: { state: "Jharkhand", proj: "Persons-with-disabilities livelihoods platform", stat: "with EnAble India" },
  or: { state: "Odisha", proj: "AI-powered mentor chatbot for volunteers", stat: "active across 10+ states" },
  rj: { state: "Rajasthan", proj: "Grantee tech & data capacity building", stat: "philanthropy programs" },
  tn: { state: "Tamil Nadu", proj: "Classroom content & LMS evaluation", stat: "with Video Volunteers" },
  tg: { state: "Telangana", proj: "AI-powered mentor chatbot for volunteers", stat: "active across 10+ states" },
  wb: { state: "West Bengal", proj: "Community MEL & data systems", stat: "ecosystem programs" },
  gj: { state: "Gujarat", proj: "Grantee tech & data capacity building", stat: "philanthropy programs" },
  as: { state: "Assam", proj: "AI-powered mentor chatbot for volunteers", stat: "active across 10+ states" },
  kl: { state: "Kerala", proj: "Product & design advisory", stat: "social enterprises" },
};

// Resources — 3 toolkits + 6 articles (verbatim links from /resource).
export const RESOURCES = {
  featured: {
    type: "Toolkit", title: "Product Management for Social Impact Toolkit",
    author: "10x Impact Labs Team", date: "Toolkit",
    desc: "A step-by-step toolkit to help social sector teams design, build, and manage impactful tech and data solutions.",
    url: "https://10x-impact-labs.gitbook.io/impact-product-management-toolkit/",
    img: IMG.classroom,
  },
  toolkits: [
    { type: "Toolkit", title: "Measuring User / Community Satisfaction for Changemakers Toolkit", author: "10x Impact Labs Team", desc: "A practical guide to help changemakers gather, measure, and act on feedback from the communities they serve.", url: "https://10x-impact-labs.gitbook.io/measuring-user-satisfaction-toolkit/" },
    { type: "Toolkit", title: "Product Management for Social Impact Toolkit", author: "10x Impact Labs Team", desc: "A step-by-step toolkit to help social sector teams design, build, and manage impactful tech and data solutions.", url: "https://10x-impact-labs.gitbook.io/impact-product-management-toolkit/" },
    { type: "Toolkit", title: "100+ Tech Tools for Changemakers", author: "10x Impact Labs Team", desc: "A curated list of 100+ free and affordable digital tools to help changemakers work smarter, scale faster, and create more impact.", url: "https://bit.ly/10x_Tools" },
  ],
  articles: [
    { type: "Article", title: "Scaling Impact Through AI: The 10x Way", author: "Shams", url: "https://www.linkedin.com/pulse/scaling-impact-through-ai-10x-way-vaibhav-mishra-rcxxc/" },
    { type: "Article", title: "Why NGOs Must Rethink Data Management to Scale Their Impact", author: "Shams", url: "https://www.linkedin.com/pulse/why-ngos-must-rethink-data-management-scale-impact-vaibhav-mishra-4i6zc/" },
    { type: "Article", title: "Why Tech Products Rarely Scale in the Nonprofit Sector – And How We Can Change That", author: "Shams", url: "https://www.linkedin.com/pulse/why-tech-products-rarely-scale-nonprofit-sector-how-vaibhav-mishra-u8rcc/" },
    { type: "Article", title: "True SaaS for Nonprofits: Built for Self-Use, Not Vendor Dependence", author: "Shams", url: "https://www.linkedin.com/pulse/true-saas-nonprofits-built-self-use-vendor-dependence-vaibhav-mishra-7jq5f/" },
    { type: "Article", title: "Glific Sprint Experience – A Partner Perspective: 4 Highlights", author: "Shams", url: "https://glific.org/a-partner-perspective-at-glific-sprint-4-highlights/" },
    { type: "Article", title: "How to build an effective M&E Tech System: Lessons from the Field", author: "Tony D’Souza", url: "https://www.linkedin.com/pulse/how-build-effective-me-tech-system-5-lessons-from-field-tony-d-souza-qha7c/" },
  ],
};

// Programs & initiatives (from /programs-initiatives).
export const INITIATIVES = [
  { n: "01", h: "AI for Impact Fellowship", p: "Building the next cohort of practitioners who can deploy AI responsibly in the social sector." },
  { n: "02", h: "DataVizforGood Initiative", p: "Open-source data storytelling resources and visualisation support for the social sector." },
  { n: "03", h: "Dasra — Data Catalyst Program", p: "Strengthening data capacity across the ecosystem in partnership with Dasra." },
];

export const SDGS = [
  { n: "01", l: "No Poverty" }, { n: "03", l: "Good Health & Well-being" }, { n: "04", l: "Quality Education" },
  { n: "05", l: "Gender Equality" }, { n: "08", l: "Decent Work & Economic Growth" }, { n: "10", l: "Reduced Inequalities" },
  { n: "13", l: "Climate Action" }, { n: "16", l: "Peace, Justice & Strong Institutions" }, { n: "17", l: "Partnerships for the Goals" },
];

// Join Us (from /join-us)
export const WHY_JOIN = [
  "Opportunities to work on real problems, with real people, creating real-world impact.",
  "An open, collaborative work culture that values initiative, curiosity, and kindness.",
  "The chance to grow your skills in product, strategy, data, and innovation for social good.",
];
export const HIRING = [
  { n: "01", h: "Application Review", p: "We review your application to understand your skills, values, and what excites you." },
  { n: "02", h: "Role-based Task or Case Study", p: "A short assignment to get a sense of your approach and thinking." },
  { n: "03", h: "Final Interview", p: "A deeper conversation about the role, your experience, and the work." },
  { n: "04", h: "Team Conversation", p: "Meet the team you'll work with and see if it's a mutual fit." },
];
export const EXPERTISE = ["Product Management", "Technology Management", "Design", "Data Management", "Research", "Impact Consulting", "Management Consulting", "MEL"];

export const CONTACT = {
  email: "team@10ximpact.in",
  careers: "careers@10ximpact.in",
  studio: "Workden, Domlur, Bengaluru, India",
  mapsUrl: "https://maps.app.goo.gl/1P7a4ioUsMQj9HYB7",
  responseTime: "Within 3 working days, always.",
  linkedin: "https://www.linkedin.com/company/10ximpactlabs/",
  x: "https://x.com/10ximpactlabs",
  chatmne: "https://chatmne.ai/",
};

export const FOOTER = {
  quickLinks: [
    { t: "About Us", to: "/about" },
    { t: "What we do", to: "/what-we-do" },
    { t: "Case Studies", to: "/work" },
    { t: "Programs & Initiatives", to: "/initiatives" },
  ],
  resources: [
    { t: "Toolkits", to: "/resources" },
    { t: "Articles", to: "/resources" },
  ],
  legal: [
    { t: "Privacy Policy", href: "#" },
    { t: "Disclaimer", href: "#" },
    { t: "Terms & Conditions", href: "#" },
    { t: "Sitemap", href: "#" },
  ],
};

export const NAV_LINKS = [
  { to: "/about", t: "About Us" },
  { to: "/what-we-do", t: "What We Do" },
  { to: "/work", t: "Case Studies" },
  { to: "/initiatives", t: "Programs & Initiatives" },
  { to: "/resources", t: "Resources" },
  { to: "/join", t: "Join Us" },
  { href: "https://chatmne.ai/", t: "ChatMnE", ext: true },
];

// Detailed What We Do content — two tracks, full per-service breakdown.
export const SERVICE_DETAILS = {
  intro: "We help nonprofits, philanthropies, and governments design practical Tech, Data & AI systems grounded in real-world needs.",
  tracks: [
    {
      key: "ngo",
      label: "For Non-profits & Philanthropies",
      services: [
        {
          h: "Leverage Tech, Data & AI for Better Programs and Community Outcomes",
          problem: ["Don't have in-house tech experts who understand social sector realities", "End up with expensive, overbuilt, or underused systems", "Miss out on AI tools that make work faster, easier, and more impactful"],
          offering: "We help NGOs identify, plan and use the right tech, data and AI tools for their work — not shiny apps, but practical solutions that improve program delivery and outcomes.",
          help: ["Finding low-cost tech tools and AI solutions for your programs", "Setting up easy MIS systems, dashboards and data processes", "Identifying AI tools for reporting, data cleaning, translation, or outreach", "Building a simple Tech & Data roadmap for your organization", "Training your team on tech and data literacy"],
          who: ["NGOs running programs without tech or data support", "Teams curious about AI but don't know where to start", "Organizations with scattered systems and no clear data strategy"],
          why: ["Practical, sector-relevant tech support", "Focus on what's usable, not what's fancy", "Helps you focus on impact, not tech headaches"],
        },
        {
          h: "Build MEL Process, Dashboard & Tech for Smarter Decisions",
          problem: ["Don't have structured MEL processes to track what matters", "Struggle with messy or incomplete data systems", "Can't turn data into clear, actionable insights for decision-making"],
          offering: "We help NGOs set up simple MEL processes, build dashboards, and design data systems that make it easy to track, learn and improve — without making it too complex.",
          help: ["Building MEL frameworks and KPIs for programs", "Setting up custom dashboards using tools like Google Data Studio, Power BI", "Designing data collection and reporting workflows", "Training teams to interpret and use data for program decisions"],
          who: ["NGOs scaling programs and needing structured MEL", "Orgs facing donor reporting challenges", "Any non-profit that wants to become data-driven"],
          why: ["Keeps MEL simple, usable and aligned to your programs", "Dashboards and tools you can manage without heavy tech", "Focus on learning, not just reporting"],
        },
        {
          h: "Fractional MEL / Data Expert",
          problem: ["They lack in-house MEL (Monitoring, Evaluation & Learning) or data experts", "Full-time hires are expensive or hard to find with the right social sector experience", "Teams struggle with messy data systems, reporting gaps, and weak decision-making frameworks"],
          offering: "We give you part-time, on-demand MEL & Data experts — experienced in the social impact space — who work with your team every month to strengthen data systems, track what matters, and help you learn and improve. Think of it as your own MEL/Data person on-call.",
          help: ["Setting up simple, usable MIS / data systems", "Designing MEL frameworks and indicators for projects and organizations", "Creating dashboards & reports for internal use and donor reporting", "Running program evaluations and outcome studies", "Training your team to use data for decision-making", "Cleaning up and organizing existing data", "Support during donor audits and reporting cycles"],
          who: ["Non-profits without a full-time MEL / Data person", "Growing orgs needing data support for new programs", "NGOs handling multiple donors and reporting requirements", "Sector alliances and networks needing MEL support across partners"],
          why: ["Fractional = affordable + flexible", "You get sector-relevant experts who understand your context", "Practical, no-jargon, action-focused support"],
        },
        {
          h: "Fractional Product Manager — Digital Solutions Expert",
          problem: ["Lack experienced product managers to guide design and development", "End up with clunky, unusable, or underutilized systems", "Struggle with adoption, user feedback and scaling"],
          offering: "We place a part-time, expert Product Manager with your team to help plan, build and manage digital projects — from concept to adoption.",
          help: ["Scoping and designing digital solutions (apps, dashboards, platforms)", "Managing vendor and tech partner coordination", "Conducting user research and testing", "Creating a product roadmap and rollout plan", "Ensuring program and tech alignment"],
          who: ["NGOs building new digital tools", "Orgs facing tech product adoption issues", "Teams needing a tech advisor but can't hire full-time"],
          why: ["Affordable, on-demand product leadership", "Focus on practical, impact-driven tech solutions", "Acts as your in-house tech guide without full-time costs"],
        },
      ],
    },
    {
      key: "gov",
      label: "For GovTech, Philanthropies & CSRs",
      services: [
        {
          h: "Design Tech, Data & AI Programs for Impact",
          problem: ["Struggle to design relevant, scalable models", "Face difficulty identifying impact-ready tech partners", "Often miss out on AI innovations usable for their focus areas"],
          offering: "We help funders design tech, data, and AI-enabled programs — from concept to partner identification and implementation support.",
          help: ["Co-designing tech and AI-powered social programs", "Sourcing and vetting social impact tech partners", "Building data and AI use cases for existing programs", "Advising on grant structuring for tech initiatives"],
          who: ["Foundations and CSRs funding tech-heavy projects", "Donor networks exploring AI for social impact", "Philanthropies wanting to integrate data into decision-making"],
          why: ["Sector-informed, tech-savvy advisory", "Keeps focus on impact, feasibility, and scale", "Avoids costly, impractical tech mistakes"],
        },
        {
          h: "Strengthen Grantee Tech and Data Capacity",
          problem: ["Reporting gaps and poor program data", "Weak adoption of funded platforms", "Under-utilized program insights"],
          offering: "We offer grantee tech and data capacity-building programs — through workshops, toolkits, and direct support.",
          help: ["Running AI, data, and digital literacy workshops", "Designing MEL and data frameworks for grantees", "Providing on-demand tech advisory services", "Creating custom toolkits and guides"],
          who: ["Philanthropies and CSRs funding multiple NGOs", "Donor networks managing social innovation programs"],
          why: ["Focus on grantee-centric, simple, usable solutions", "Builds program sustainability and reporting strength", "Supports both grassroots and mid-sized organizations"],
        },
        {
          h: "Research and Insights on Tech, Data and AI",
          problem: ["Limited research on how tech, data and AI are being used in India's social sector", "Hard for funders to plan, fund and track trends", "Few credible, field-grounded reference points"],
          offering: "We run custom research, landscape studies and insight reports on tech, data and AI trends in the social impact space.",
          help: ["Mapping AI tools and innovations in social impact", "Researching grantee tech adoption challenges", "Studying MIS and MEL tech trends", "Publishing insight notes for your ecosystem partners"],
          who: ["Philanthropies investing in tech and data", "Donor networks looking for insights to inform strategy", "CSR teams planning AI or tech capacity initiatives"],
          why: ["Actionable, context-rich insights", "Focused on practical recommendations for funders", "Uses real field examples and data"],
        },
      ],
    },
  ],
};
