/**
 * Local content store. Every page reads from here instead of hard-coding copy,
 * so this file plays the role of the CMS. Swap these arrays for a headless CMS
 * (Sanity, Contentful, Webflow CMS API, etc.) by keeping the same shapes.
 *
 * Pricing figures are placeholder sample content, not real offers.
 */

export const site = {
  name: "Velnqora Labs",
  tagline: "Making business stuff easier to handle",
  email: "hello@velnqoralabs.example",
  phone: "+1 (555) 014-2290",
  address: "214 Market Street, Suite 900, San Francisco, CA 94105",
  hours: "Mon–Fri, 9:00–18:00 PT",
  social: [
    { label: "LinkedIn", href: "https://www.linkedin.com/" },
    { label: "X", href: "https://x.com/" },
    { label: "Instagram", href: "https://www.instagram.com/" },
  ],
};

export const mainNav = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Pricing", href: "/pricing" },
  { label: "Contact", href: "/contact" },
];

export const footerNav = [
  {
    title: "Main",
    links: [
      { label: "Home", href: "/" },
      { label: "Case studies", href: "/case-study" },
      { label: "Pricing", href: "/pricing" },
      { label: "Blog", href: "/blog" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Services", href: "/services" },
      { label: "Case study detail", href: "/case-study/revive-and-rise" },
      { label: "Article detail", href: "/post/five-signals-your-business-is-ready-to-scale" },
      { label: "Plan detail", href: "/pricing-plan/professional" },
    ],
  },
  {
    title: "Utility",
    links: [
      { label: "404", href: "/404" },
      { label: "Password", href: "/401" },
      { label: "Licenses", href: "/licenses" },
      { label: "Style guide", href: "/style-guide" },
      { label: "Changelog", href: "/changelog" },
    ],
  },
];

export const legalLinks = [
  { label: "Privacy policy", href: "/licenses#privacy" },
  { label: "Terms & conditions", href: "/licenses#terms" },
];

export const heroAvatars = ["/images/portrait-1.jpg", "/images/portrait-4.jpg", "/images/portrait-3.jpg"];

/** Sample client names for the scrolling marquee (fictional). */
export const clientNames = ["Northline", "Bright Path", "Verdant Energy", "CityRoots", "Atlas Advisory", "Harbor Health", "Varo Studio", "Kestrel & Co."];

export const metrics = [
  { value: "13K+", label: "Businesses formed" },
  { value: "24 hrs", label: "Average setup time" },
  { value: "99.9%", label: "Client satisfaction rate" },
  { value: "25+", label: "Countries served" },
];

export type Service = {
  slug: string;
  number: string;
  title: string;
  summary: string;
  description: string;
  outcomes: string[];
  image: string;
};

export const services: Service[] = [
  {
    slug: "risk-assessment",
    number: "01",
    title: "Risk assessment",
    summary: "Spot operational, financial and market risk before it becomes expensive.",
    description:
      "We map the exposures hiding in your operations, contracts and cash flow, then rank them by likelihood and impact so you know exactly where to act first.",
    outcomes: ["Prioritised risk register", "Mitigation playbooks", "Quarterly exposure review"],
    image: "/images/planning.jpg",
  },
  {
    slug: "talent-strategy",
    number: "02",
    title: "Talent strategy",
    summary: "Hire, structure and retain the team your next stage actually needs.",
    description:
      "From org design to hiring scorecards, we help you build a team shaped around the work ahead — not the org chart you inherited.",
    outcomes: ["Org design blueprint", "Role scorecards", "Retention and incentive plan"],
    image: "/images/team-diverse.jpg",
  },
  {
    slug: "growth-planning",
    number: "03",
    title: "Growth planning",
    summary: "Turn ambition into a sequenced plan with owners, budgets and milestones.",
    description:
      "We pressure-test where growth will come from, size each opportunity, and build a 12-month roadmap your team can execute week by week.",
    outcomes: ["Market opportunity sizing", "12-month roadmap", "Budget and hiring model"],
    image: "/images/strategy-wall.jpg",
  },
  {
    slug: "performance-optimization",
    number: "04",
    title: "Performance optimization",
    summary: "Remove friction from the processes that slow your people down.",
    description:
      "We audit your workflows end to end, automate the repetitive steps, and set up the operating rhythm that keeps improvements from slipping.",
    outcomes: ["Process audit", "Automation backlog", "Operating cadence"],
    image: "/images/pair-work.jpg",
  },
  {
    slug: "business-analytics",
    number: "05",
    title: "Business analytics",
    summary: "Dashboards and metrics that leadership actually uses to decide.",
    description:
      "We define the handful of numbers that matter, connect the data sources, and build reporting that answers questions instead of raising them.",
    outcomes: ["North-star metric tree", "Executive dashboard", "Monthly insight review"],
    image: "/images/analytics.jpg",
  },
];

export const processSteps = [
  {
    number: "01",
    title: "Discover & diagnose",
    body: "Interviews, data review and a candid look at what is working and what is not.",
    when: "Weeks 1–2",
    output: "Diagnostic report",
  },
  {
    number: "02",
    title: "Strategy & plan",
    body: "A focused plan with clear priorities, owners, budgets and measurable targets.",
    when: "Weeks 3–4",
    output: "12-month roadmap",
  },
  {
    number: "03",
    title: "Execute & optimize",
    body: "We work alongside your team to ship the plan and adjust as results come in.",
    when: "Ongoing",
    output: "Weekly sprints",
  },
  {
    number: "04",
    title: "Analyze & report",
    body: "Transparent reporting on outcomes, so every decision is grounded in evidence.",
    when: "Monthly",
    output: "Results review",
  },
];

export type CaseStudy = {
  slug: string;
  title: string;
  client: string;
  category: "Strategy" | "Operations" | "Analytics" | "Growth";
  year: string;
  duration: string;
  image: string;
  summary: string;
  challenge: string;
  approach: string[];
  outcome: string;
  metrics: { value: string; label: string }[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "revive-and-rise",
    title: "Revive & Rise",
    client: "Northline Retail Group",
    category: "Strategy",
    year: "2025",
    duration: "6 months",
    image: "/images/presentation.jpg",
    summary: "A regional retailer reversed three years of decline with a sharper format strategy.",
    challenge:
      "Northline's store network had grown faster than its margins. Foot traffic was falling, inventory was ageing, and leadership disagreed on whether to cut stores or reinvest.",
    approach: [
      "Store-by-store profitability model using two years of POS and lease data.",
      "Customer research across six markets to understand why visits had dropped.",
      "A three-format strategy: flagship, neighbourhood and pick-up points.",
      "Phased rollout with a weekly scorecard reviewed by the executive team.",
    ],
    outcome:
      "Within two quarters, like-for-like sales returned to growth and the business closed underperforming sites without losing regional share.",
    metrics: [
      { value: "+18%", label: "Like-for-like sales" },
      { value: "−22%", label: "Aged inventory" },
      { value: "4.1×", label: "Return on programme cost" },
    ],
  },
  {
    slug: "bright-path-analytics",
    title: "Bright Path Analytics",
    client: "Bright Path Logistics",
    category: "Analytics",
    year: "2025",
    duration: "4 months",
    image: "/images/analytics.jpg",
    summary: "One source of truth replaced 40 spreadsheets and cut reporting time by 80%.",
    challenge:
      "Every department reported its own version of delivery performance. Monthly reviews were spent reconciling numbers rather than acting on them.",
    approach: [
      "Defined a metric tree linking on-time delivery to cost per drop.",
      "Consolidated four data sources into a governed warehouse.",
      "Built role-based dashboards for operations, finance and leadership.",
    ],
    outcome:
      "Reporting moved from a monthly scramble to a live view, and route-level cost issues were spotted weeks earlier.",
    metrics: [
      { value: "−80%", label: "Reporting time" },
      { value: "40 → 1", label: "Spreadsheets to dashboards" },
      { value: "+9 pts", label: "On-time delivery" },
    ],
  },
  {
    slug: "green-tech-solutions",
    title: "Green Tech Solutions",
    client: "Verdant Energy Systems",
    category: "Growth",
    year: "2024",
    duration: "8 months",
    image: "/images/team-laptops.jpg",
    summary: "A clean-energy start-up entered two new markets with a repeatable sales motion.",
    challenge:
      "Verdant had product-market fit at home but its first expansion attempt stalled — the sales playbook did not travel.",
    approach: [
      "Market prioritisation across nine regions using regulation and demand signals.",
      "Rebuilt the sales process around a partner-led channel.",
      "Hiring plan and onboarding programme for the new regional teams.",
    ],
    outcome:
      "Both new markets reached break-even inside a year, and the playbook is now used for every launch.",
    metrics: [
      { value: "2", label: "New markets launched" },
      { value: "11 mo", label: "Time to break-even" },
      { value: "+64%", label: "Qualified pipeline" },
    ],
  },
  {
    slug: "urban-farming-initiative",
    title: "Urban Farming Initiative",
    client: "CityRoots Collective",
    category: "Operations",
    year: "2024",
    duration: "5 months",
    image: "/images/loft-team.jpg",
    summary: "A non-profit doubled its growing capacity without adding headcount.",
    challenge:
      "CityRoots ran twelve rooftop farms on volunteer goodwill and paper rotas. Growth meant chaos.",
    approach: [
      "Mapped every recurring task and removed duplicate effort between sites.",
      "Introduced a simple scheduling tool and volunteer onboarding kit.",
      "Set up a shared dashboard for yield, waste and volunteer hours.",
    ],
    outcome:
      "The collective added twelve more sites in a season and volunteer retention improved markedly.",
    metrics: [
      { value: "2×", label: "Growing capacity" },
      { value: "+35%", label: "Volunteer retention" },
      { value: "0", label: "New full-time hires" },
    ],
  },
  {
    slug: "atlas-finance-turnaround",
    title: "Atlas Finance Turnaround",
    client: "Atlas Advisory Partners",
    category: "Operations",
    year: "2023",
    duration: "7 months",
    image: "/images/workshop.jpg",
    summary: "A mid-size advisory firm rebuilt delivery operations and recovered its margin.",
    challenge:
      "Utilisation was high but margin was falling. Scope creep and manual handoffs were eating profit on every engagement.",
    approach: [
      "Engagement-level profitability analysis across 300 projects.",
      "Standardised scoping templates and change-request process.",
      "Automated handoffs between sales, delivery and billing.",
    ],
    outcome: "Margins recovered within three quarters and project overruns became the exception.",
    metrics: [
      { value: "+12 pts", label: "Gross margin" },
      { value: "−45%", label: "Budget overruns" },
      { value: "3 wks", label: "Faster invoicing" },
    ],
  },
  {
    slug: "harbor-health-scale-up",
    title: "Harbor Health Scale-up",
    client: "Harbor Health Clinics",
    category: "Strategy",
    year: "2023",
    duration: "9 months",
    image: "/images/team-review.jpg",
    summary: "A clinic network grew from 6 to 15 locations with a consistent patient experience.",
    challenge:
      "Each new clinic was opened from scratch. Quality varied and the leadership team was stretched thin.",
    approach: [
      "Built a clinic-in-a-box launch playbook.",
      "Defined a regional management layer and KPIs.",
      "Introduced patient-experience tracking across all sites.",
    ],
    outcome: "Nine new clinics opened on schedule, with patient satisfaction above the original sites.",
    metrics: [
      { value: "6 → 15", label: "Locations" },
      { value: "4.8/5", label: "Patient rating" },
      { value: "−30%", label: "Launch cost per site" },
    ],
  },
];

export const caseCategories = ["All", "Strategy", "Operations", "Analytics", "Growth"] as const;

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  category: "Strategy" | "Leadership" | "Operations" | "Finance";
  date: string; // ISO
  readTime: string;
  author: string;
  image: string;
  body: { type: "p" | "h2" | "quote" | "list"; text?: string; items?: string[] }[];
};

export const posts: Post[] = [
  {
    slug: "five-signals-your-business-is-ready-to-scale",
    title: "Five signals your business is ready to scale",
    excerpt: "Growth that outruns your systems is expensive. Here is how to tell when the foundations can take the weight.",
    category: "Strategy",
    date: "2026-10-14",
    readTime: "6 min read",
    author: "Mark Otto",
    image: "/images/strategy-wall.jpg",
    body: [
      { type: "p", text: "Most companies do not fail because they grow too slowly. They stumble because they grow faster than the systems underneath them. Before you pour fuel on the fire, check the foundations." },
      { type: "h2", text: "1. Your unit economics hold at volume" },
      { type: "p", text: "If each new customer costs more to serve than the last, scaling multiplies the problem. Model your margins at two and five times today's volume before you commit." },
      { type: "h2", text: "2. Work is documented, not remembered" },
      { type: "p", text: "When key processes live in one person's head, every new hire is a bottleneck. Written playbooks are the cheapest scaling tool you have." },
      { type: "quote", text: "Scale rewards the boring work: clear processes, clean data and owners for every number." },
      { type: "h2", text: "3–5. The rest of the checklist" },
      { type: "list", items: ["Demand is repeatable, not dependent on one channel or client.", "Leadership has time to lead, not just firefight.", "You can see your core metrics weekly without a spreadsheet marathon."] },
      { type: "p", text: "If you can tick four of the five, you are ready. If not, fix the gaps first — it is far cheaper now than later." },
    ],
  },
  {
    slug: "building-a-dashboard-leaders-actually-use",
    title: "Building a dashboard leaders actually use",
    excerpt: "Fewer charts, clearer owners, and a weekly ritual. The anatomy of reporting that drives decisions.",
    category: "Operations",
    date: "2026-09-22",
    readTime: "5 min read",
    author: "Clara Voss",
    image: "/images/analytics.jpg",
    body: [
      { type: "p", text: "The average leadership dashboard has thirty charts and is opened twice a month. The best ones have six numbers and are discussed every Monday." },
      { type: "h2", text: "Start with decisions, not data" },
      { type: "p", text: "List the decisions your team makes each week. Then pick the one or two numbers that would change each decision. Everything else is optional." },
      { type: "h2", text: "Give every metric an owner" },
      { type: "p", text: "A number without an owner is trivia. Assign one person who explains movement and proposes action." },
      { type: "list", items: ["One page, no scrolling.", "Targets shown next to actuals.", "Trend over the last 13 weeks.", "A short written commentary."] },
    ],
  },
  {
    slug: "hiring-for-the-next-stage-not-the-last",
    title: "Hiring for the next stage, not the last",
    excerpt: "The people who got you here are not always the roles that get you there. A practical guide to org design.",
    category: "Leadership",
    date: "2026-08-30",
    readTime: "7 min read",
    author: "Theo Marlow",
    image: "/images/team-diverse.jpg",
    body: [
      { type: "p", text: "Early teams are built from generalists who do a bit of everything. That is a strength until the work becomes specialised and nobody owns the outcome." },
      { type: "h2", text: "Design the org around the work ahead" },
      { type: "p", text: "Write down the three biggest outcomes for the next 18 months. Then ask who owns each one today. Gaps in that list are your hiring plan." },
      { type: "quote", text: "Hire for the problems you will have in a year, not the ones you had last quarter." },
      { type: "p", text: "Use scorecards that describe outcomes, not tasks. It keeps interviews focused and gives new hires a clear definition of success." },
    ],
  },
  {
    slug: "cash-flow-habits-of-resilient-companies",
    title: "Cash-flow habits of resilient companies",
    excerpt: "Weekly forecasts, disciplined collections and a clear runway rule. Simple habits that keep you in control.",
    category: "Finance",
    date: "2026-07-18",
    readTime: "4 min read",
    author: "Mark Otto",
    image: "/images/planning.jpg",
    body: [
      { type: "p", text: "Profitable companies still run out of cash. Resilience comes from a few unglamorous habits practised every week." },
      { type: "list", items: ["A rolling 13-week cash forecast.", "Invoices sent the day work is delivered.", "A runway rule that triggers action, not panic."] },
      { type: "p", text: "None of this needs new software. It needs a calendar slot and an owner." },
    ],
  },
  {
    slug: "running-a-strategy-offsite-that-sticks",
    title: "Running a strategy offsite that sticks",
    excerpt: "Most offsites end with energy and no follow-through. Here is the structure we use to change that.",
    category: "Strategy",
    date: "2026-06-05",
    readTime: "6 min read",
    author: "Clara Voss",
    image: "/images/workshop.jpg",
    body: [
      { type: "p", text: "The value of an offsite is decided in the week after it ends. Plan the follow-up before you plan the agenda." },
      { type: "h2", text: "Pre-work beats brainstorming" },
      { type: "p", text: "Send data and a short memo two weeks before. Use the room for decisions, not discovery." },
      { type: "h2", text: "Leave with owners and dates" },
      { type: "p", text: "Every agreed priority leaves the room with a name and a 30-day milestone attached." },
    ],
  },
  {
    slug: "automation-without-the-chaos",
    title: "Automation without the chaos",
    excerpt: "Automating a broken process just makes it break faster. Fix, simplify, then automate.",
    category: "Operations",
    date: "2026-05-12",
    readTime: "5 min read",
    author: "Theo Marlow",
    image: "/images/pair-work.jpg",
    body: [
      { type: "p", text: "Automation is the last step, not the first. Map the process, remove what is unnecessary, then automate what remains." },
      { type: "list", items: ["Map the current process with the people who do it.", "Delete steps that exist only for historical reasons.", "Standardise inputs before you automate.", "Measure before and after."] },
    ],
  },
];

export const postCategories = ["All", "Strategy", "Leadership", "Operations", "Finance"] as const;

export type Plan = {
  slug: string;
  name: string;
  audience: string;
  price: number | null; // null = custom
  hours: string;
  features: string[];
  extra: string;
  featured?: boolean;
  description: string;
  idealFor: string[];
};

export const plans: Plan[] = [
  {
    slug: "starter",
    name: "Starter",
    audience: "Freelancers & solo consultants",
    price: 99,
    hours: "100 hours",
    features: ["Client management", "Appointment scheduling", "Task management", "Basic dashboard"],
    extra: "Extra hours at $1.10/hour",
    description: "Everything a solo operator needs to stay organised and look professional from day one.",
    idealFor: ["Independent consultants", "Early-stage founders", "Side businesses"],
  },
  {
    slug: "professional",
    name: "Professional",
    audience: "Small teams",
    price: 199,
    hours: "220 hours",
    features: ["Everything in Starter", "Workflow automation", "Custom reports", "Team collaboration"],
    extra: "Extra hours at $1.05/hour",
    featured: true,
    description: "Shared workflows and reporting for small teams that need to move in step.",
    idealFor: ["Teams of 3–15", "Agencies and studios", "Growing service firms"],
  },
  {
    slug: "business",
    name: "Business",
    audience: "Growing businesses",
    price: 299,
    hours: "400 hours",
    features: ["Everything in Professional", "Advanced analytics", "Document management", "API access"],
    extra: "Extra hours at $1.00/hour",
    description: "Deeper analytics and integrations for businesses scaling across teams and locations.",
    idealFor: ["Multi-team organisations", "Operations-heavy businesses", "Companies with in-house data"],
  },
  {
    slug: "enterprise",
    name: "Enterprise",
    audience: "Large organizations",
    price: null,
    hours: "700+ hours",
    features: ["Everything in Business", "Dedicated account manager", "Single sign-on (SSO)", "24/7 premium support"],
    extra: "Volume rates on request",
    description: "A tailored engagement with dedicated support, security reviews and custom terms.",
    idealFor: ["Enterprises and public bodies", "Regulated industries", "Multi-region programmes"],
  },
];

export const faqs = [
  {
    q: "What kind of businesses do you work with?",
    a: "We work with founders, small teams and established companies across retail, logistics, health, energy and professional services. Most clients have between 5 and 500 people.",
  },
  {
    q: "How quickly can we get started?",
    a: "After an initial call we usually send a proposal within three working days, and most engagements kick off within two weeks.",
  },
  {
    q: "Can we change plans later?",
    a: "Yes. You can move between plans at the start of any billing month, and unused hours on annual plans roll over for one quarter.",
  },
  {
    q: "Do you work remotely or on-site?",
    a: "Both. Most work happens remotely with on-site workshops at key moments such as kick-off and strategy sessions.",
  },
  {
    q: "How do you measure success?",
    a: "We agree measurable targets in the first two weeks and report against them every month, so progress is never a matter of opinion.",
  },
  {
    q: "Are the prices on this site real offers?",
    a: "No — the plan amounts on this demo site are sample placeholder content. Contact us for an actual proposal.",
  },
];

export const testimonials = [
  {
    quote: "Velnqora Labs brought structure to a business that had outgrown its spreadsheets. Our weekly leadership meeting is now 30 minutes and actually decides things.",
    name: "Natalia Voss",
    role: "Founder, Varo Studio",
    image: "/images/portrait-5.jpg",
  },
  {
    quote: "The growth plan was specific enough that every team knew what to do on Monday morning. We hit our expansion targets a quarter early.",
    name: "Daniel Okafor",
    role: "COO, Verdant Energy",
    image: "/images/portrait-6.jpg",
  },
  {
    quote: "They listened first, then challenged us. The risk review alone paid for the engagement twice over.",
    name: "Helena Brooks",
    role: "CFO, Northline Retail",
    image: "/images/portrait-7.jpg",
  },
  {
    quote: "Clear thinking, honest advice and real follow-through. It felt like adding senior people to our team, not hiring a vendor.",
    name: "Richard Hale",
    role: "Managing Partner, Atlas Advisory",
    image: "/images/portrait-2.jpg",
  },
];

export const timeline = [
  { year: "2018", title: "The beginning", body: "Two operators start Velnqora Labs to give small businesses the strategic support usually reserved for large ones." },
  { year: "2022", title: "Rapid growth", body: "The team grows to 30 consultants and opens offices in London and Singapore." },
  { year: "2024", title: "Facing challenges", body: "A tough market sharpens our focus: fewer services, deeper expertise, measurable outcomes." },
  { year: "2026", title: "Global consolidation", body: "Clients in 25+ countries and a delivery model built around long-term partnerships." },
];

export const values = [
  { title: "Trusted expertise", body: "Senior consultants who have run businesses, not just advised them." },
  { title: "Tailored strategies", body: "No templates. Every plan starts with your numbers and your people." },
  { title: "Long-term partnership", body: "We measure success by the results you still see a year later." },
];

export const team = [
  { name: "Mark Otto", role: "Co-founder & CEO", image: "/images/portrait-4.jpg" },
  { name: "Clara Voss", role: "Head of Strategy", image: "/images/portrait-1.jpg" },
  { name: "Theo Marlow", role: "Operations Lead", image: "/images/portrait-6.jpg" },
  { name: "Amara Lewis", role: "Analytics Director", image: "/images/portrait-3.jpg" },
];

export const changelog = [
  { version: "1.2.0", date: "2026-11-20", notes: ["Added blog category filters", "Added pricing plan detail pages", "Improved reduced-motion handling"] },
  { version: "1.1.0", date: "2026-10-02", notes: ["Case study detail template", "Testimonial carousel with keyboard controls"] },
  { version: "1.0.0", date: "2026-09-01", notes: ["Initial release"] },
];

export const imageCredits = [
  "All photography: Unsplash (unsplash.com) under the Unsplash License — free for commercial and non-commercial use, no attribution required.",
  "3D hero background and “website build” animation: original, rendered in-house with three.js (MIT License).",
];

export function formatDate(iso: string) {
  return new Date(iso + "T00:00:00").toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" });
}

export function formatPrice(price: number | null) {
  return price === null ? "Custom" : `$${price}`;
}
