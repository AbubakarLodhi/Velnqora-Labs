export const site = {
  name: "Velnqora Labs",
  tagline: "Building digital experiences. Engineering what's next.",
};

export const mainNav = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Insights", href: "/blog" },
];

export const footerNav = [
  {
    title: "Explore",
    links: [
      { label: "About", href: "/about" },
      { label: "Services", href: "/services" },
      { label: "Portfolio", href: "/portfolio" },
      { label: "Insights", href: "/blog" },
    ],
  },
  {
    title: "Start a conversation",
    links: [{ label: "Contact", href: "/contact" }],
  },
];

export type Service = {
  slug: string;
  number: string;
  title: string;
  summary: string;
  description: string;
  challenges: string[];
  capabilities: string[];
  benefits: string[];
  process: string[];
  image: string;
  imageAlt: string;
};

export const services: Service[] = [
  {
    slug: "web-development",
    number: "01",
    title: "Web Development",
    summary: "Fast, thoughtful websites and web applications built around the way your business works.",
    description:
      "From a first business website to a complex SaaS platform, we design and develop dependable digital products that make it easier for people to understand, use, and trust your business.",
    challenges: ["A website that no longer reflects your offer", "Disconnected tools and manual handoffs", "A product idea that needs a clear path to launch"],
    capabilities: [
      "Custom websites, landing pages, and redesigns",
      "E-commerce stores and integrations",
      "SaaS platforms and custom web applications",
      "API integration, performance, and accessibility",
    ],
    benefits: ["A clearer journey from first visit to action", "A maintainable foundation that can grow with your needs", "Connected systems with less repetitive work"],
    process: ["Understand your users and goals", "Shape the experience and technical plan", "Build, test, and refine together", "Launch with a clear handover"],
    image: "/images/desk-topdown.jpg",
    imageAlt: "A focused workspace with a laptop and product planning notes",
  },
  {
    slug: "app-development",
    number: "02",
    title: "App Development",
    summary: "Mobile experiences that feel natural to use and fit the needs of your customers.",
    description:
      "We help turn mobile product ideas into useful, reliable applications. From product definition and app UI/UX to cross-platform development and ongoing maintenance, each decision is grounded in the people who will use it.",
    challenges: ["An idea that needs testing before a full build", "A fragmented experience across mobile devices", "An existing app that is difficult to maintain"],
    capabilities: [
      "Android and iOS application development",
      "Cross-platform apps with Flutter or React Native",
      "Custom mobile application design and prototyping",
      "App maintenance, improvements, and API connections",
    ],
    benefits: ["A consistent experience across supported devices", "A focused release shaped by real user needs", "A codebase designed for ongoing improvement"],
    process: ["Define the use case and essential features", "Map and prototype key user journeys", "Develop and test across target devices", "Release, learn, and plan improvements"],
    image: "/images/meeting-laptop.jpg",
    imageAlt: "A mobile product concept being discussed around a laptop",
  },
  {
    slug: "ai-machine-learning",
    number: "03",
    title: "AI & Machine Learning",
    summary: "Practical AI and machine learning solutions for specific, well-defined business needs.",
    description:
      "We identify where intelligent software can genuinely help, then design and build solutions that fit your data, workflows, and risk requirements—from generative AI features to predictive analytics and business automation.",
    challenges: ["Repetitive work that takes attention from higher-value tasks", "Unclear AI ideas without a practical first use case", "Business data that is difficult to turn into useful signals"],
    capabilities: [
      "AI-powered applications and generative AI integration",
      "AI chatbots and virtual assistants",
      "Machine learning and predictive analytics",
      "Workflow automation and custom AI solutions",
    ],
    benefits: ["Less manual effort in suitable workflows", "Faster access to relevant information", "A measured, responsible path from experiment to useful tool"],
    process: ["Select a specific problem and define safeguards", "Check data readiness and solution fit", "Prototype and evaluate with real workflows", "Integrate, monitor, and improve"],
    image: "/images/analytics.jpg",
    imageAlt: "Data visualisation on a screen during an analytics review",
  },
  {
    slug: "digital-marketing",
    number: "04",
    title: "Digital Marketing",
    summary: "A considered marketing strategy that connects the right audience with your offer.",
    description:
      "We bring strategy, creative, and measurement together to help you build visibility and generate demand. The work starts with your goals and audience—not a one-size-fits-all channel checklist.",
    challenges: ["Marketing activity without a clear shared direction", "Low visibility in relevant search results", "Campaigns that are difficult to evaluate or improve"],
    capabilities: [
      "Search engine optimization (SEO)",
      "Social media, content marketing, and brand strategy",
      "Paid advertising and Google Ads campaign management",
      "Lead generation, analytics, and performance reporting",
    ],
    benefits: ["A more coherent presence across relevant channels", "Clearer insight into what is attracting and converting interest", "Marketing activity tied to business priorities"],
    process: ["Understand your audience and current position", "Set priorities, messages, and measurement", "Launch focused campaigns and content", "Review performance and refine the plan"],
    image: "/images/strategy-wall.jpg",
    imageAlt: "A marketing and content strategy mapped out for review",
  },
];

export const processSteps = [
  {
    number: "01",
    title: "Discover",
    body: "We listen, ask focused questions, and clarify the people, problem, and outcome behind your brief.",
    when: "Understand",
    output: "A shared project brief",
  },
  {
    number: "02",
    title: "Plan",
    body: "We align on scope, priorities, technical direction, and a practical plan before work begins.",
    when: "Align",
    output: "A considered roadmap",
  },
  {
    number: "03",
    title: "Build",
    body: "We design, develop, and review in clear stages, keeping you involved as decisions take shape.",
    when: "Create",
    output: "Tested project increments",
  },
  {
    number: "04",
    title: "Improve",
    body: "We prepare a thoughtful handover and help identify sensible next steps after launch.",
    when: "Evolve",
    output: "A clear next-step plan",
  },
];

export type CaseStudy = {
  slug: string;
  title: string;
  category: "E-commerce" | "SaaS" | "AI" | "Mobile" | "Web" | "Marketing";
  summary: string;
  challenge: string;
  approach: string[];
  outcome: string;
  image: string;
  imageAlt: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "ecommerce-storefront",
    title: "The considered storefront",
    category: "E-commerce",
    summary: "An e-commerce website concept designed to make browsing and buying feel effortless.",
    challenge: "Help a growing product brand bring its catalogue, product stories, and checkout into one clear online experience.",
    approach: ["Organise products around intuitive categories and useful filters.", "Create detailed product pages with clear, scannable information.", "Design a responsive cart and checkout journey."],
    outcome: "The concept brings discovery, product detail, and checkout into a cohesive storefront direction. It is a design exercise, not a live store or reported client result.",
    image: "/images/desk-topdown.jpg",
    imageAlt: "E-commerce storefront concept shown in a product design workspace",
  },
  {
    slug: "saas-operations-dashboard",
    title: "The clearer operations dashboard",
    category: "SaaS",
    summary: "A SaaS dashboard concept that turns scattered operational information into a focused workspace.",
    challenge: "Give a busy operations team a clearer view of work in progress without overwhelming them with charts and disconnected screens.",
    approach: ["Prioritise the information people need to act on each day.", "Bring key status, activity, and reporting into one interface.", "Use consistent patterns to make the dashboard easier to scan."],
    outcome: "The concept demonstrates a calmer, more connected product experience. It does not represent a deployed platform or measured business result.",
    image: "/images/analytics.jpg",
    imageAlt: "Concept dashboard and analytics interface displayed on a laptop",
  },
  {
    slug: "ai-support-assistant",
    title: "The useful support assistant",
    category: "AI",
    summary: "An AI chatbot platform concept for finding answers in an approved knowledge base.",
    challenge: "Help customers resolve common questions quickly while making it clear when a conversation needs human support.",
    approach: ["Design a conversational interface with clear, helpful prompts.", "Ground suggested answers in a defined source of information.", "Include transparent handoff points for questions that need a person."],
    outcome: "The concept explores a responsible support journey with visible human oversight. It is not a deployed AI service or a performance claim.",
    image: "/images/meeting-laptop.jpg",
    imageAlt: "AI customer-support assistant concept discussed on a laptop",
  },
  {
    slug: "mobile-companion-app",
    title: "The everyday mobile companion",
    category: "Mobile",
    summary: "A mobile application concept that makes a recurring customer task simpler on the go.",
    challenge: "Turn a multi-step service journey into a focused mobile experience that works naturally on a small screen.",
    approach: ["Map the core task into a short, accessible user journey.", "Design reusable patterns for iOS and Android.", "Consider useful states, notifications, and account settings."],
    outcome: "The concept shows how a mobile-first product could make a common task easier to complete. It is not a released application.",
    image: "/images/focus.jpg",
    imageAlt: "Mobile application concept in a clean, focused workspace",
  },
  {
    slug: "business-website-refresh",
    title: "The confident business website",
    category: "Web",
    summary: "A business website concept built to explain a complex service with greater clarity.",
    challenge: "Help prospective customers understand what a service includes, who it is for, and how to take the next step.",
    approach: ["Organise the offer around customer questions and needs.", "Create a distinctive visual system with accessible page layouts.", "Make service details and contact paths easy to find."],
    outcome: "The concept illustrates a clear, responsive direction for a service-led website. It is not a live business website.",
    image: "/images/workshop.jpg",
    imageAlt: "Business website concept and content structure in a planning session",
  },
  {
    slug: "digital-growth-campaign",
    title: "The connected growth campaign",
    category: "Marketing",
    summary: "A digital marketing campaign concept that connects search, content, and paid media.",
    challenge: "Create a coherent campaign direction for a business that needs its content and advertising to work toward the same goal.",
    approach: ["Define an audience, useful message, and campaign objective.", "Connect search content with relevant social and paid activity.", "Plan a measurement approach to guide future optimisation."],
    outcome: "The concept outlines a connected campaign strategy. It is not an executed campaign or a report of client results.",
    image: "/images/strategy-wall.jpg",
    imageAlt: "Digital marketing campaign concept and channel plan",
  },
];

export const caseCategories = ["All", "E-commerce", "SaaS", "AI", "Mobile", "Web", "Marketing"] as const;

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  category: "Web Development" | "AI & Machine Learning" | "Product Strategy";
  date: string;
  readTime: string;
  author: string;
  image: string;
  imageAlt: string;
  body: { type: "p" | "h2" | "quote" | "list"; text?: string; items?: string[] }[];
};

export const posts: Post[] = [
  {
    slug: "choosing-the-right-scope-for-your-first-web-product",
    title: "How to scope your first web product",
    excerpt: "A useful first release starts with the problem it solves—not a long list of features.",
    category: "Product Strategy",
    date: "2026-11-18",
    readTime: "5 min read",
    author: "Velnqora Labs",
    image: "/images/planning.jpg",
    imageAlt: "Product planning notes beside a laptop",
    body: [
      { type: "p", text: "Early product ideas often arrive with a generous feature list. Before deciding what to build, get specific about who needs the product and what they need to accomplish." },
      { type: "h2", text: "Start with one meaningful user journey" },
      { type: "p", text: "Describe the moment a user arrives, the task they need to complete, and what a useful result looks like. This gives your team something concrete to design and test." },
      { type: "h2", text: "Separate essentials from possibilities" },
      { type: "list", items: ["Identify the smallest complete version of the core task.", "Write down assumptions that need to be tested.", "Keep later improvements visible without adding them to the first release."] },
      { type: "quote", text: "A focused first release is a way to learn deliberately—not a promise to build less forever." },
      { type: "p", text: "A clear scope helps make design, budget, and technical decisions easier to discuss before development begins." },
    ],
  },
  {
    slug: "practical-ai-for-business-workflows",
    title: "Finding a practical first use for AI",
    excerpt: "Begin with a real workflow, reliable information, and a clear plan for human review.",
    category: "AI & Machine Learning",
    date: "2026-11-12",
    readTime: "4 min read",
    author: "Velnqora Labs",
    image: "/images/analytics.jpg",
    imageAlt: "Analytics viewed on a screen during a product review",
    body: [
      { type: "p", text: "AI can be useful when it addresses a specific task and fits the way people already work. A tool without a clear use case can add complexity instead of removing it." },
      { type: "h2", text: "Choose a task before choosing a model" },
      { type: "p", text: "Look for a repeated task with a clear input and a result someone can review. Then check whether your available information is suitable for the job." },
      { type: "h2", text: "Plan for review and exceptions" },
      { type: "list", items: ["Set expectations for what the system can and cannot answer.", "Decide when a person should review or take over.", "Test with representative examples before wider use.", "Consider privacy, access, and ongoing evaluation."] },
      { type: "p", text: "A small, well-defined pilot can help a team assess usefulness and risks before committing to a broader implementation." },
    ],
  },
  {
    slug: "website-redesign-beyond-the-homepage",
    title: "A website redesign beyond the homepage",
    excerpt: "A stronger redesign aligns the full customer journey, content, and site structure.",
    category: "Web Development",
    date: "2026-11-04",
    readTime: "5 min read",
    author: "Velnqora Labs",
    image: "/images/desk-topdown.jpg",
    imageAlt: "A website planning workspace with a laptop and notebook",
    body: [
      { type: "p", text: "A homepage refresh can improve first impressions, but visitors make decisions across the whole site. A useful redesign considers how pages work together." },
      { type: "h2", text: "Trace what visitors need to understand" },
      { type: "p", text: "Review how people move from an introduction to services, supporting detail, and a clear next step. Each page should answer a real question." },
      { type: "h2", text: "Build a foundation that stays useful" },
      { type: "list", items: ["Make navigation and page relationships easy to follow.", "Use accessible layouts and readable content.", "Consider performance and mobile use from the start.", "Plan for the people who will maintain the site."] },
      { type: "p", text: "When content, design, and development are planned together, the result can be both more coherent for visitors and easier to evolve." },
    ],
  },
];

export const postCategories = ["All", "Web Development", "AI & Machine Learning", "Product Strategy"] as const;

export const faqs = [
  {
    q: "What kinds of businesses do you work with?",
    a: "We work with startups, entrepreneurs, small and medium-sized businesses, and established companies looking for a thoughtful digital partner.",
  },
  {
    q: "Can you help shape an idea before development?",
    a: "Yes. We can help clarify the audience, core problem, key features, and a practical first release before committing to a build.",
  },
  {
    q: "Do you work with existing products and websites?",
    a: "Yes. We can review an existing website, application, or workflow and discuss redesigns, integrations, maintenance, or focused improvements.",
  },
  {
    q: "How do you approach AI projects?",
    a: "We start with a defined business need, assess whether AI is appropriate, and consider data quality, privacy, testing, and human oversight.",
  },
  {
    q: "How much does a project cost?",
    a: "The right scope and budget depend on your goals, requirements, and timing. Share what you have in mind and we can discuss a suitable next step.",
  },
  {
    q: "What happens after I submit the contact form?",
    a: "The form on this website currently validates in your browser and does not transmit submissions. A contact backend needs to be connected before launch.",
  },
];

export const values = [
  { title: "Clarity before complexity", body: "We ask what needs to change and for whom before recommending a technology or channel." },
  { title: "Useful by design", body: "We care about the details that make a product understandable, accessible, and practical to use." },
  { title: "Thoughtful collaboration", body: "We make decisions visible, communicate trade-offs, and work toward a shared definition of done." },
  { title: "Built to evolve", body: "We aim for solutions that are maintainable and adaptable as your needs become clearer." },
];

export const imageCredits = [
  "Photography in this design: Unsplash (unsplash.com), subject to its applicable license.",
  "The 3D website-build animation and poster are original assets created for this site.",
];

export function formatDate(iso: string) {
  return new Date(iso + "T00:00:00").toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" });
}
