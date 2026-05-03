"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, useInView, type Variants } from "framer-motion";
import { useRef } from "react";

// ─── Animation helpers ─────────────────────────────────────────────────────

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" as const, delay: i * 0.08 },
  }),
};

const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -32 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.55, ease: "easeOut" as const },
  },
};

const fadeRight: Variants = {
  hidden: { opacity: 0, x: 32 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.55, ease: "easeOut" as const },
  },
};

function ScrollReveal({
  children,
  variants = fadeUp as Variants,
  custom = 0,
  className = "",
}: {
  children: React.ReactNode;
  variants?: Variants;
  custom?: number;
  className?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      custom={custom}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ─── Data ──────────────────────────────────────────────────────────────────

const NAV_LINKS = ["About", "Skills", "Experience", "Education", "Contact"];

const SKILLS = [
  {
    category: "Languages",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
      </svg>
    ),
    items: ["C#", ".NET Core", "JavaScript", "TypeScript", "T-SQL", "VB.NET"],
  },
  {
    category: "Frameworks",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.429 9.75 2.25 12l4.179 2.25m0-4.5 5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0 4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0-5.571 3-5.571-3" />
      </svg>
    ),
    items: ["ASP.NET Core", "ASP.NET MVC", "Angular", "Web API", "Entity Framework", "jQuery", "Mustache.js", "Telerik UI"],
  },
  {
    category: "Cloud & Ops",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z" />
      </svg>
    ),
    items: ["Microsoft Azure", "Azure SQL", "Azure Blob", "Azure Functions", "Azure DevOps", "Graph API", "GitHub", "TFS", "SVN"],
  },
  {
    category: "Reporting",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
      </svg>
    ),
    items: ["Crystal Reports", "RDLC Reporting", "Power BI"],
  },
];

const EXPERIENCES = [
  {
    title: "Senior Software Engineer",
    company: "ONEICT LTD",
    period: "Jun 2025 – Present",
    current: true,
    project: "ONE ERP System",
    description:
      "Leading ERP module development including HRM, Inventory, Sales, and Accounting. Act as Team Lead substitute during absences — handling client requirement gathering, escalations, and code reviews. Own Crystal Reports implementation and GitHub repository management.",
    tech: ["ASP.NET Core", "Angular", "MSSQL", "Crystal Reports", "GitHub"],
  },
  {
    title: "Senior Software Engineer",
    company: "Hoxro Dev. Center",
    period: "Feb 2022 – May 2025",
    current: false,
    project: "Hoxro LMS — Legal Case & Practice Management",
    description:
      "Built and owned the ASP.NET Core Web API backend. Optimized Azure SQL performance, architected Azure Blob & Functions for document storage, and integrated Microsoft Graph API. Delivered Angular + TypeScript frontend features and set up Azure DevOps CI/CD pipelines. Mentored junior developers and led the team during critical delivery phases.",
    tech: ["ASP.NET Core", "Web API", "C#", "Azure SQL", "Graph API", "Azure Blob", "Azure Functions", "Angular", "TypeScript", "Azure DevOps"],
  },
  {
    title: "Programmer",
    company: "SouthTech Group Limited",
    period: "Dec 2019 – Feb 2022",
    current: false,
    project: "Ascend MF · Eagle Eye · Scaled HRM",
    description:
      "Developed financial and HRM solutions for international clients. Designed loan & insurance tracking logic, improved reporting engine performance, enhanced UI/UX, and maintained CI/CD pipelines with TFS version control.",
    tech: ["ASP.NET Core", "ASP.NET MVC", "C#", "MSSQL", "jQuery", "Mustache.js", "Crystal Reports", "TFS"],
  },
  {
    title: "Senior Officer (Software Developer)",
    company: "RSF / Rahimafrooz Initiative",
    period: "Aug 2015 – Dec 2019",
    current: false,
    project: "RASolarERP · AMS Financial Solution",
    description:
      "Designed full ERP modules from scratch and built finance solutions covering GL, Payroll, and Expense Management. Conducted end-user training, optimized system efficiency, and managed version control with SVN.",
    tech: ["ASP.NET", "ASP.NET MVC", "C#", "MSSQL", "jQuery", "Telerik UI", "RDLC Reporting", "SVN"],
  },
];

const EDUCATION = [
  {
    degree: "M.Sc. in Computer Science",
    institution: "Jahangirnagar University (JU)",
    year: "2024",
  },
  {
    degree: "B.Sc. in Computer Science & Engineering",
    institution: "Daffodil International University (DIU)",
    year: "2015",
  },
  {
    degree: "Diploma in Computer Technology",
    institution: "Faridpur Polytechnic Institute (FPI)",
    year: "2010",
  },
];

// ─── Components ────────────────────────────────────────────────────────────

function Tag({ label }: { label: string }) {
  return (
    <span className="inline-block text-[11px] font-mono px-2 py-0.5 rounded border border-[#2a2a2a] bg-[#1a1a1a] text-[#888] tracking-wide">
      {label}
    </span>
  );
}

function SectionLabel({ text }: { text: string }) {
  return (
    <ScrollReveal className="flex items-center gap-3 mb-10">
      <div className="h-px w-8 bg-[#00a8ff]" />
      <span className="text-[#00a8ff] text-xs font-mono uppercase tracking-[0.2em]">{text}</span>
    </ScrollReveal>
  );
}

// ─── Sections ──────────────────────────────────────────────────────────────

function Navbar({ active, setActive }: { active: string; setActive: (s: string) => void }) {
  const [open, setOpen] = useState(false);

  function scrollTo(id: string) {
    setActive(id);
    setOpen(false);
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <motion.nav
      initial={{ y: -56, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-[#1e1e1e] bg-[#0d0d0d]/90 backdrop-blur-md"
    >
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        <span className="font-mono text-sm text-[#00a8ff] tracking-widest font-semibold">MSI.DEV</span>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((l, i) => (
            <motion.li
              key={l}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.07, duration: 0.35 }}
            >
              <button
                onClick={() => scrollTo(l)}
                className={`text-xs font-mono uppercase tracking-widest transition-colors ${
                  active === l ? "text-[#00a8ff]" : "text-[#888] hover:text-white"
                }`}
              >
                {l}
              </button>
            </motion.li>
          ))}
          <motion.li
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.35 }}
          >
            <a
              href="mailto:islam.mdshafiq@gmail.com"
              className="text-xs font-mono uppercase tracking-widest px-4 py-2 border border-[#00a8ff] text-[#00a8ff] rounded hover:bg-[#00a8ff] hover:text-black transition-all"
            >
              Hire Me
            </a>
          </motion.li>
        </ul>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-[#888] hover:text-white"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-5 h-5">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-[#0d0d0d] border-t border-[#1e1e1e] px-6 py-4"
        >
          <ul className="flex flex-col gap-4">
            {NAV_LINKS.map((l) => (
              <li key={l}>
                <button
                  onClick={() => scrollTo(l)}
                  className="text-xs font-mono uppercase tracking-widest text-[#888] hover:text-white transition-colors"
                >
                  {l}
                </button>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </motion.nav>
  );
}

function Hero() {
  return (
    <section id="about" className="min-h-screen flex items-center pt-14 px-6">
      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-16 items-center py-20">
        {/* Text — staggered entrance */}
        <div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-[#00a8ff] text-xs font-mono uppercase tracking-[0.3em] mb-4"
          >
            Senior Software Engineer
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.55 }}
            className="text-5xl sm:text-6xl font-bold leading-tight text-white mb-6"
          >
            Md. Shafiqul<br />
            <span className="text-[#00a8ff]">Islam.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="text-[#888] leading-relaxed mb-8 max-w-md"
          >
            Building robust, enterprise-grade solutions with over 9 years of expertise
            in ERP, finance, HRM, and legal systems. Specialized in the .NET ecosystem,
            Angular, and Azure Cloud Infrastructure.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.45 }}
            className="flex flex-wrap gap-3"
          >
            <button
              onClick={() => document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" })}
              className="px-6 py-3 border border-[#333] text-sm text-white rounded hover:border-[#00a8ff] hover:text-[#00a8ff] transition-all font-mono"
            >
              View Experience
            </button>
            <a
              href="mailto:islam.mdshafiq@gmail.com"
              className="px-6 py-3 bg-[#00a8ff] text-black text-sm font-semibold rounded hover:bg-[#0090d8] transition-colors font-mono"
            >
              Get In Touch
            </a>
          </motion.div>
        </div>

        {/* Profile card — slides in from right */}
        <motion.div
          initial={{ opacity: 0, x: 48 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.65, ease: "easeOut" }}
          className="flex justify-center md:justify-end"
        >
          <div className="relative w-100 h-150">
            <motion.div
              animate={{ rotate: [3, 4, 3] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 rounded-2xl border border-[#00a8ff]/20"
            />
            <motion.div
              animate={{ rotate: [-2, -3, -2] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute inset-0 rounded-2xl border border-[#00a8ff]/10"
            />
            <div className="absolute inset-4 rounded-xl bg-[#111] border border-[#1e1e1e] flex flex-col items-center justify-center gap-4 p-6">
              <div className="w-100 h-150 rounded-full overflow-hidden border-2 border-[#00a8ff]/40 shrink-0">
                <Image
                  src="/profile.png"
                  alt="Md. Shafiqul Islam"
                  width={864}
                  height={1243}
                  className="w-full h-full object-cover object-top"
                  priority
                />
              </div>
              <div className="text-center mb-8">
                <p className="text-white font-semibold text-lg">Md. Shafiqul Islam</p>
                <p className="text-[#888] text-md font-mono mt-1">9+ Years Experience</p>
              </div>
              <div className="grid grid-cols-3 gap-3 w-full mt-2">
                {[
                  { n: "9+", label: "Years" },
                  { n: "4", label: "Companies" },
                  { n: "10+", label: "Projects" },
                ].map((s, i) => (
                  <motion.div
                    key={s.label}
                    initial={{ opacity: 0, scale: 0.7 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.75 + i * 0.1, duration: 0.4, ease: "backOut" }}
                    className="text-center"
                  >
                    <p className="text-[#00a8ff] font-bold text-lg">{s.n}</p>
                    <p className="text-[#555] text-[10px] font-mono uppercase">{s.label}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Summary() {
  return (
    <section className="px-6 py-20 border-t border-[#1a1a1a]">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal variants={fadeLeft}>
          <div className="flex items-start gap-4 mb-6">
            <div className="h-px w-8 bg-[#00a8ff] mt-3 shrink-0" />
            <h2 className="text-2xl font-bold text-white">Professional Summary</h2>
          </div>
        </ScrollReveal>
        <div className="grid md:grid-cols-2 gap-8 text-[#888] leading-relaxed text-sm pl-12">
          <ScrollReveal variants={fadeLeft} custom={0}>
            <p>
              Highly accomplished Senior Software Engineer with over 9 years of
              experience architecting and delivering complex enterprise solutions.
              Proven track record in developing ERP, Human Resource Management (HRM),
              and Legal Management Systems (LMS) that serve thousands of users across
              global markets.
            </p>
          </ScrollReveal>
          <ScrollReveal variants={fadeRight} custom={0}>
            <p>
              Expertise spans the full-stack development cycle, from database design in
              MSSQL and Azure SQL to building high-performance backend APIs using .NET
              Core and intuitive frontend interfaces with Angular. Passionate about clean
              code, scalable architecture, and implementing modern DevOps practices to
              streamline delivery.
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="px-6 py-20 border-t border-[#1a1a1a]">
      <div className="max-w-6xl mx-auto">
        <SectionLabel text="Technical Arsenal" />
        <ScrollReveal>
          <h2 className="text-3xl font-bold text-white mb-12">Core Skills</h2>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {SKILLS.map((group, i) => (
            <ScrollReveal key={group.category} custom={i}>
              <div className="bg-[#111] border border-[#1e1e1e] rounded-xl p-5 hover:border-[#00a8ff]/30 transition-colors h-full">
                <div className="text-[#00a8ff] mb-3">{group.icon}</div>
                <h3 className="text-white font-semibold text-sm mb-4">{group.category}</h3>
                <div className="flex flex-wrap gap-1.5">
                  {group.items.map((item) => (
                    <Tag key={item} label={item} />
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal custom={4}>
          <div className="mt-5 bg-[#111] border border-[#1e1e1e] rounded-xl p-5">
            <p className="text-[#888] text-xs font-mono uppercase tracking-widest mb-3">Methodologies & Practices</p>
            <div className="flex flex-wrap gap-2">
              {["Agile / Scrum", "OOP Principles", "Unit Testing", "Code Review", "CI/CD", "System Design", "Technical Leadership"].map(
                (m) => <Tag key={m} label={m} />
              )}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="px-6 py-20 border-t border-[#1a1a1a]">
      <div className="max-w-6xl mx-auto">
        <SectionLabel text="Professional Journey" />
        <ScrollReveal>
          <h2 className="text-3xl font-bold text-white mb-12">Work Experience</h2>
        </ScrollReveal>

        <div className="relative pl-8">
          <div className="absolute left-0 top-2 bottom-2 w-px bg-gradient-to-b from-[#00a8ff] via-[#00a8ff]/30 to-transparent" />

          <div className="flex flex-col gap-12">
            {EXPERIENCES.map((exp, i) => (
              <ScrollReveal key={i} custom={i} variants={fadeLeft}>
                <div className="relative">
                  {/* Timeline dot */}
                  <div
                    className={`absolute -left-8 top-1.5 w-3 h-3 rounded-full border-2 ${
                      exp.current
                        ? "bg-[#00a8ff] border-[#00a8ff] shadow-[0_0_8px_#00a8ff]"
                        : "bg-[#0d0d0d] border-[#444]"
                    }`}
                    style={{ transform: "translateX(-3px)" }}
                  />
                  <motion.div
                    whileHover={{ borderColor: "rgba(0,168,255,0.3)", y: -2 }}
                    transition={{ duration: 0.2 }}
                    className="bg-[#111] border border-[#1e1e1e] rounded-xl p-6"
                  >
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                      <h3 className="text-white font-semibold text-base">{exp.title}</h3>
                      <span className={`text-xs font-mono ${exp.current ? "text-[#00a8ff]" : "text-[#555]"}`}>
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-[#00a8ff]/70 text-sm font-medium mb-1">{exp.company}</p>
                    <p className="text-[#555] text-xs font-mono mb-4 italic">{exp.project}</p>
                    <p className="text-[#888] text-sm leading-relaxed mb-4">{exp.description}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {exp.tech.map((t) => <Tag key={t} label={t} />)}
                    </div>
                  </motion.div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Education() {
  return (
    <section id="education" className="px-6 py-20 border-t border-[#1a1a1a]">
      <div className="max-w-6xl mx-auto">
        <SectionLabel text="Education & Credentials" />
        <ScrollReveal>
          <h2 className="text-3xl font-bold text-white mb-12">Academic Background</h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Education timeline */}
          <ScrollReveal variants={fadeLeft}>
            <p className="text-[#888] text-xs font-mono uppercase tracking-widest mb-5">Degrees</p>
            <div className="flex flex-col gap-px border-l-2 border-[#1e1e1e] pl-6">
              {EDUCATION.map((edu, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ delay: i * 0.12, duration: 0.45 }}
                  className="relative mb-6"
                >
                  <div className="absolute -left-[25px] top-1.5 w-2 h-2 rounded-full bg-[#00a8ff]/60" />
                  <p className="text-[#00a8ff]/70 text-xs font-mono mb-0.5">{edu.year}</p>
                  <p className="text-white font-medium text-sm">{edu.degree}</p>
                  <p className="text-[#555] text-xs">{edu.institution}</p>
                </motion.div>
              ))}
            </div>
          </ScrollReveal>

          {/* Cards */}
          <div className="flex flex-col gap-5">
            {/* Cert */}
            <ScrollReveal custom={0} variants={fadeRight}>
              <div className="bg-[#111] border border-[#1e1e1e] rounded-xl p-5">
                <p className="text-[#888] text-xs font-mono uppercase tracking-widest mb-4">Certification</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#00a8ff]/10 border border-[#00a8ff]/20 flex items-center justify-center text-[#00a8ff] shrink-0">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 3.741-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white text-sm font-medium">Object Oriented Programming in C#</p>
                    <p className="text-[#555] text-xs">BASIS Institute of Technology & Management · 2015</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Languages */}
            <ScrollReveal custom={1} variants={fadeRight}>
              <div className="bg-[#111] border border-[#1e1e1e] rounded-xl p-5">
                <p className="text-[#888] text-xs font-mono uppercase tracking-widest mb-4">Languages</p>
                <div className="flex flex-col gap-3">
                  {[
                    { lang: "English", level: "Professional · IELTS GT 6.0", pct: 72 },
                    { lang: "Bengali", level: "Native", pct: 100 },
                  ].map((l) => (
                    <div key={l.lang}>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-white">{l.lang}</span>
                        <span className="text-[#555] font-mono">{l.level}</span>
                      </div>
                      <div className="h-0.5 bg-[#1e1e1e] rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${l.pct}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                          className="h-full bg-[#00a8ff] rounded-full"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Reference */}
            <ScrollReveal custom={2} variants={fadeRight}>
              <div className="bg-[#111] border border-[#1e1e1e] rounded-xl p-5">
                <p className="text-[#888] text-xs font-mono uppercase tracking-widest mb-4">Reference</p>
                <div>
                  <p className="text-white font-medium text-sm">Azizul Mollik</p>
                  <p className="text-[#00a8ff]/70 text-xs mb-1">Sr. Software Engineer · NEXT IT Limited</p>
                  <p className="text-[#555] text-xs font-mono">Available upon request</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const CONTACT_ITEMS = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
        </svg>
      ),
      label: "Phone",
      value: "+880 1738 767493",
      href: "tel:+8801738767493",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
        </svg>
      ),
      label: "Email",
      value: "islam.mdshafiq@gmail.com",
      href: "mailto:islam.mdshafiq@gmail.com",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
        </svg>
      ),
      label: "Location",
      value: "Dhaka, Bangladesh",
      href: "#",
    },
  ];

  return (
    <section id="contact" className="px-6 py-24 border-t border-[#1a1a1a]">
      <div className="max-w-6xl mx-auto text-center">
        <SectionLabel text="Get In Touch" />
        <ScrollReveal>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Ready for the next challenge?
          </h2>
        </ScrollReveal>
        <ScrollReveal custom={1}>
          <p className="text-[#888] mb-12 max-w-lg mx-auto leading-relaxed">
            Currently based in Dhaka, Bangladesh. Available for technical leadership
            roles and specialized .NET / Cloud consulting.
          </p>
        </ScrollReveal>

        <div className="grid sm:grid-cols-3 gap-5 max-w-2xl mx-auto mb-10">
          {CONTACT_ITEMS.map((c, i) => (
            <ScrollReveal key={c.label} custom={i}>
              <motion.a
                href={c.href}
                whileHover={{ y: -4, borderColor: "rgba(0,168,255,0.4)" }}
                transition={{ duration: 0.2 }}
                className="bg-[#111] border border-[#1e1e1e] rounded-xl p-5 transition-colors text-center group flex flex-col items-center"
              >
                <div className="text-[#00a8ff] flex justify-center mb-3">
                  {c.icon}
                </div>
                <p className="text-[#555] text-xs font-mono uppercase tracking-widest mb-1">{c.label}</p>
                <p className="text-white text-xs">{c.value}</p>
              </motion.a>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal custom={3}>
          <a
            href="https://linkedin.com/in/islammdshafiq"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#888] hover:text-[#00a8ff] text-xs font-mono transition-colors"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            linkedin.com/in/islammdshafiq
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-[#1a1a1a] px-6 py-6">
      <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-4">
        <span className="font-mono text-sm text-[#00a8ff] font-semibold">MSI.DEV</span>
        <p className="text-[#444] text-xs font-mono">
          © 2025 Md. Shafiqul Islam, Senior Software Engineer
        </p>
        <div className="flex items-center gap-4">
          <a
            href="https://linkedin.com/in/islammdshafiq"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#555] hover:text-[#00a8ff] text-xs font-mono transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="mailto:islam.mdshafiq@gmail.com"
            className="text-[#555] hover:text-[#00a8ff] text-xs font-mono transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}

// ─── Page ──────────────────────────────────────────────────────────────────

export default function Home() {
  const [activeNav, setActiveNav] = useState("About");

  return (
    <>
      <Navbar active={activeNav} setActive={setActiveNav} />
      <main>
        <Hero />
        <Summary />
        <Skills />
        <Experience />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
