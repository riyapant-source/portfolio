export type NavItem = {
  label: string;
  href: string;
};

export type Module = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  span?: string;
};

export type Project = {
  title: string;
  category: string;
  type: string;
  description: string;
  stack: string[];
  mark: string;
  url?: string;
};

export const navItems: NavItem[] = [
  { label: 'WORK', href: '#work' },
  { label: 'AI LAB', href: '#ai-lab' },
  { label: 'SECURITY', href: '#security' },
  { label: 'EXPERIENCE', href: '#experience' },
  { label: 'PROJECTS', href: '#projects' },
];

export const systemNodes = [
  { name: 'USER', tech: 'requests / actions / intent' },
  { name: 'APPLICATION', tech: 'React / Next.js / APIs' },
  { name: 'DATA', tech: 'MongoDB / SQL / files' },
  { name: 'INTELLIGENCE', tech: 'RAG / LLMs / embeddings' },
  { name: 'SECURITY', tech: 'RBAC / guardrails / checks' },
  { name: 'PRODUCTION', tech: 'Docker / Nginx / CI/CD' },
];

export const buildModules: Module[] = [
  {
    id: 'full-stack',
    title: 'FULL-STACK',
    description: 'Production applications, APIs, databases, authentication, microservices and deployment.',
    tags: ['React', 'Next.js', 'Node.js', 'MongoDB', 'SQL', 'Docker'],
    span: 'md:col-span-2',
  },
  {
    id: 'rag',
    title: 'RAG SYSTEMS',
    description: 'Context-aware AI systems with retrieval, embeddings, reranking and evaluation.',
    tags: ['RAG', 'RAGAS', 'Embeddings', 'Re-ranking', 'LLMs'],
  },
  {
    id: 'doc-intel',
    title: 'DOCUMENT INTELLIGENCE',
    description: 'Turning unstructured documents into structured information and actionable intelligence.',
    tags: ['OCR', 'IDP', 'Tesseract', 'PaddleOCR', 'Extraction'],
  },
  {
    id: 'web-intel',
    title: 'WEB INTELLIGENCE',
    description: 'Scraping, processing and connecting web information to intelligent search and chat.',
    tags: ['Web Scraping', 'RAG', 'Chatbots', 'Reports'],
  },
  {
    id: 'automation',
    title: 'AI AUTOMATION',
    description: 'Connecting applications, models and workflows.',
    tags: ['n8n', 'Agents', 'Automation', 'APIs'],
  },
  {
    id: 'security',
    title: 'AI SECURITY',
    description: 'Exploring how AI systems behave under adversarial and untrusted inputs.',
    tags: ['Prompt Injection', 'Retrieval Poisoning', 'Guardrails', 'AI Evaluation'],
    span: 'md:col-span-2',
  },
];

export const projects: Project[] = [
  {
    title: 'ENTERPRISE INTELLIGENCE PLATFORM',
    category: 'AI PLATFORM',
    type: 'PRODUCTION',
    description: 'Production-grade enterprise platform combining full-stack engineering, microservices, document intelligence and AI-assisted workflows.',
    stack: ['MERN', 'Docker', 'Nginx', 'OCR', 'AI', 'RBAC'],
    mark: 'PRIVATE / INTERNAL',
  },
  {
    title: 'MULTI-SOURCE RAG',
    category: 'AI SYSTEM',
    type: 'AI SYSTEM',
    description: 'Chat systems connecting databases and files with retrieval, reranking, security controls and evaluation.',
    stack: ['RAG', 'RAGAS', 'Reranking', 'Embeddings', 'LLM'],
    mark: 'PRIVATE / INTERNAL',
  },
  {
    title: 'SCRAPE → THINK → REPORT',
    category: 'WEB INTELLIGENCE',
    type: 'WEB INTELLIGENCE',
    description: 'Web intelligence workflow that collects information, processes it and turns it into searchable intelligence.',
    stack: ['Web Scraping', 'LLM', 'RAG', 'n8n'],
    mark: 'PRIVATE / INTERNAL',
  },
];

export const experimentalModules = [
  'RAGAS EVALUATION',
  'BGE RE-RANKING',
  'PROMPT INJECTION',
  'RETRIEVAL POISONING',
  'DOCUMENT INTELLIGENCE',
  'WEB SCRAPING',
  'MULTI-SOURCE CHAT',
  'AI GUARDRAILS',
  'N8N AUTOMATION',
  'AGENTIC WORKFLOWS',
  'CONTEXT ENGINEERING',
  'AI SECURITY',
];

export const experienceItems = [
  {
    company: 'SONA COMSTAR',
    role: 'Software Engineer',
    period: '2025 — Present',
    description: 'Building production full-stack systems, AI applications, document intelligence pipelines and security automation.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Docker', 'Nginx', 'RAG', 'OCR', 'DevSecOps'],
  },
  {
    company: 'DISTRICT ADMINISTRATION',
    role: 'Product Engineer Intern',
    period: '2024',
    description: 'Worked on technology solutions and digital systems for real-world administrative workflows.',
    technologies: ['Product Systems', 'Workflow Design', 'Digital Operations'],
  },
  {
    company: 'LYFT',
    role: 'Backend Developer Intern',
    period: '2023 — 2024',
    description: 'Worked on backend APIs, SQL and performance improvements in a distributed environment.',
    technologies: ['Backend APIs', 'SQL', 'Distributed Systems'],
  },
  {
    company: 'DELOITTE',
    role: 'Project Intern',
    period: '2022',
    description: 'Worked on enterprise data modelling, data analysis and reducing redundancy across data structures.',
    technologies: ['Data Modelling', 'Analytics', 'Data Quality'],
  },
];

export const stackMatrix = [
  { label: 'FRONTEND', items: ['React', 'Next.js', 'TypeScript', 'Tailwind'] },
  { label: 'BACKEND', items: ['Node.js', 'Express', 'Python', 'REST APIs'] },
  { label: 'DATABASE', items: ['MongoDB', 'SQL', 'PostgreSQL'] },
  { label: 'AI', items: ['LLMs', 'RAG', 'LangChain', 'RAGAS', 'Embeddings', 'Re-ranking', 'Agents'] },
  { label: 'AUTOMATION', items: ['n8n', 'GitHub Actions', 'CI/CD'] },
  { label: 'INFRASTRUCTURE', items: ['Docker', 'Nginx', 'Kubernetes', 'AWS', 'OCI'] },
  { label: 'SECURITY', items: ['Semgrep', 'Gitleaks', 'Trivy', 'OWASP ZAP', 'OWASP', 'RBAC', 'SSO'] },
];

export const achievements = [
  'OCI 2025 Certified Data Science Professional',
  '1st Prize — Zscaler Purple Teaming Quiz',
  'Team Top 3 — Zscaler Workshop',
  '9th Place — National Entrepreneurship Challenge, IIT Bombay — 2024',
];

export const publicProjects = [
  {
    title: 'AEGIS',
    category: 'AI PLATFORM',
    description: 'AI career intelligence platform with resume building, mock interviews, analysis, industry insights and personalized recommendations.',
    stack: ['Next.js', 'Gemini', 'LangChain', 'RAG', 'Prisma'],
    repo: 'https://github.com/riya-pant/aegis',
  },
  {
    title: 'PAHADI HAAT',
    category: 'FULL-STACK',
    description: 'MERN marketplace connecting regional sellers, farmers and artisans with urban buyers and logistics workflows.',
    stack: ['React', 'Node.js', 'MongoDB', 'Maps', 'JWT'],
    repo: 'https://github.com/riya-pant/pahadi-haat',
  },
];

export const securityThreats = [
  { id: '01', title: 'PROMPT INJECTION', detail: 'untrusted instructions' },
  { id: '02', title: 'RETRIEVAL POISONING', detail: 'malicious context' },
  { id: '03', title: 'ACCESS CONTROL', detail: 'identity / RBAC' },
  { id: '04', title: 'APPLICATION SECURITY', detail: 'SAST / DAST / secrets' },
];

export const securityTools = ['Semgrep', 'Gitleaks', 'Trivy', 'OWASP ZAP', 'OWASP Top 10', 'RBAC', 'JWT', 'SSO', 'Guardrails', 'RAG Security'];
