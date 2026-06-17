import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import {
  FiMail,
  FiMapPin,
  FiLinkedin,
  FiGithub,
  FiPhone,
  FiArrowUpRight,
  FiArrowUp,
  FiCheck,
  FiMenu,
  FiX,
  FiDownload,
  FiCpu,
  FiSmartphone,
  FiActivity,
  FiServer,
  FiBookOpen,
  FiCode,
  FiAward,
  FiFolder,
  FiExternalLink,
  FiFileText,
} from "react-icons/fi";
import {
  profile,
  experience,
  projects,
  moreProjects,
  certifications,
  skills,
  education,
  posts,
} from "./data";
import { ProjectVisual } from "./Mockups";
import { SkillIcon } from "./SkillIcons";

/* -------------------------------------------------------------------------- */
/*  Shared animation helpers                                                   */
/* -------------------------------------------------------------------------- */
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

function Reveal({ children, className, delay = 0, as = "div" }) {
  const M = motion[as] || motion.div;
  return (
    <M
      className={className}
      variants={fadeUp}
      custom={delay}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      {children}
    </M>
  );
}

function SectionHead({ eyebrow, title, sub }) {
  return (
    <div className="section-head">
      <Reveal as="span" className="eyebrow">
        {eyebrow}
      </Reveal>
      <Reveal>
        <h2 className="section-title">{title}</h2>
      </Reveal>
      {sub && (
        <Reveal>
          <p className="section-sub">{sub}</p>
        </Reveal>
      )}
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Scroll progress bar                                                        */
/* -------------------------------------------------------------------------- */
function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    restDelta: 0.001,
  });
  return (
    <motion.div
      style={{
        scaleX,
        transformOrigin: "0%",
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: 3,
        zIndex: 200,
        background: "linear-gradient(90deg, #2563eb, #06b6d4)",
      }}
    />
  );
}

/* -------------------------------------------------------------------------- */
/*  Navbar                                                                     */
/* -------------------------------------------------------------------------- */
const NAV = [
  ["About", "#about"],
  ["Experience", "#experience"],
  ["Projects", "#projects"],
  ["Skills", "#skills"],
  ["Certifications", "#certifications"],
  ["Education", "#education"],
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`nav ${scrolled ? "scrolled" : ""}`}>
      <div className="container">
        <a href="#top" className="brand">
          <span className="brand-badge">JR</span>
          <span>
            Jaswanth<span className="gradient-text"> Royal</span>
          </span>
        </a>

        <ul className={`nav-links ${open ? "open" : ""}`}>
          {NAV.map(([label, href]) => (
            <li key={href}>
              <a href={href} onClick={() => setOpen(false)}>
                {label}
              </a>
            </li>
          ))}
          <li className="nav-cta">
            <a href="#contact" className="btn btn-primary" onClick={() => setOpen(false)}>
              Contact
            </a>
          </li>
        </ul>

        <button
          className="nav-toggle"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </div>
    </nav>
  );
}

/* -------------------------------------------------------------------------- */
/*  Hero — with rotating role text                                             */
/* -------------------------------------------------------------------------- */
function Rotator({ words }) {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % words.length), 2200);
    return () => clearInterval(t);
  }, [words.length]);
  return (
    <span className="rotator">
      <span className="label">I'm a</span>
      <AnimatePresence mode="wait">
        <motion.span
          key={words[i]}
          className="gradient-text"
          initial={{ y: 18, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -18, opacity: 0 }}
          transition={{ duration: 0.35 }}
        >
          {words[i]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

/* A rotating CSS-3D cube */
function Cube({ size = 64 }) {
  const h = size / 2;
  const faces = [
    `rotateY(0deg) translateZ(${h}px)`,
    `rotateY(90deg) translateZ(${h}px)`,
    `rotateY(180deg) translateZ(${h}px)`,
    `rotateY(270deg) translateZ(${h}px)`,
    `rotateX(90deg) translateZ(${h}px)`,
    `rotateX(-90deg) translateZ(${h}px)`,
  ];
  return (
    <motion.div
      className="cube3d"
      style={{ width: size, height: size }}
      animate={{ rotateX: [0, 360], rotateY: [0, 360] }}
      transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
    >
      {faces.map((t, i) => (
        <span
          key={i}
          className="cube-face"
          style={{ width: size, height: size, transform: t }}
        />
      ))}
    </motion.div>
  );
}

/* Floating 3D scene behind the hero */
function Hero3D() {
  const floats = [
    { cls: "f3-a", y: [0, -26, 0], dur: 9, el: <Cube size={74} /> },
    { cls: "f3-b", y: [0, 22, 0], dur: 11, el: <Cube size={46} /> },
    { cls: "f3-c", y: [0, -18, 0], dur: 8, el: <Cube size={34} /> },
    { cls: "f3-d", y: [0, 18, 0], dur: 10, el: <span className="ring3d" /> },
    { cls: "f3-e", y: [0, -16, 0], dur: 7, el: <span className="dot3d" /> },
    { cls: "f3-g glyph", y: [0, 16, 0], dur: 12, el: "</>" },
    { cls: "f3-h glyph", y: [0, -20, 0], dur: 9.5, el: "{ }" },
    { cls: "f3-i glyph", y: [0, 14, 0], dur: 11, el: "( )" },
  ];
  return (
    <div className="hero3d" aria-hidden="true">
      {floats.map((f, i) => (
        <motion.div
          key={i}
          className={`f3 ${f.cls}`}
          animate={{ y: f.y }}
          transition={{ duration: f.dur, repeat: Infinity, ease: "easeInOut" }}
        >
          {f.el}
        </motion.div>
      ))}
    </div>
  );
}

function Hero() {
  const initials = profile.name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("");

  return (
    <header className="hero" id="top">
      <div className="hero-bg">
        <motion.span
          className="blob blob-1"
          animate={{ x: [0, 30, 0], y: [0, 20, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.span
          className="blob blob-2"
          animate={{ x: [0, -25, 0], y: [0, -18, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="grid-overlay" />
        <Hero3D />
      </div>

      <div className="container">
        <motion.div variants={stagger} initial="hidden" animate="show">
          <motion.span className="hero-pill" variants={fadeUp}>
            <span className="dot" /> Open to opportunities · {profile.location.split(",")[0]}
          </motion.span>

          <motion.h1 variants={fadeUp}>
            Hi, I'm <span className="gradient-text">{profile.name}</span>
          </motion.h1>

          <motion.div variants={fadeUp}>
            <Rotator words={profile.roles} />
          </motion.div>

          <motion.p className="lead" variants={fadeUp}>
            I build high-performance software where{" "}
            <strong>software meets hardware</strong> — shipping mobile APKs and
            desktop tools for real-time network diagnostics and monitoring.
          </motion.p>

          <motion.div className="hero-actions" variants={fadeUp}>
            <a href="#projects" className="btn btn-primary">
              View My Work <FiArrowUpRight />
            </a>
            <a href="#contact" className="btn btn-ghost">
              Get in Touch <FiMail />
            </a>
            {profile.resumeUrl && (
              <a
                href={profile.resumeUrl}
                className="btn btn-ghost"
                target="_blank"
                rel="noreferrer"
              >
                View Résumé <FiFileText />
              </a>
            )}
          </motion.div>

          <motion.div className="hero-stats" variants={fadeUp}>
            {profile.stats.map((s) => (
              <div className="hero-stat" key={s.label}>
                <div className="num">{s.value}</div>
                <div className="lab">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Visual card */}
        <motion.div
          className="hero-card-wrap"
          initial={{ opacity: 0, scale: 0.9, rotateY: -12 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            className="hero-card"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            <motion.div
              className="floaty f1"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <FiActivity /> Real-time
            </motion.div>
            <motion.div
              className="floaty f2"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <FiCpu /> Hardware
            </motion.div>

            <div className="hero-avatar">{initials}</div>
            <h3>{profile.name}</h3>
            <div className="role">{profile.headline}</div>

            <div className="meta">
              <FiMapPin /> {profile.location}
            </div>
            <div className="meta">
              <FiMail /> {profile.email}
            </div>

            <div className="chip-row">
              {["Python", "Java", "Django"].map((c) => (
                <span className="chip" key={c}>
                  {c}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </header>
  );
}

/* -------------------------------------------------------------------------- */
/*  About                                                                      */
/* -------------------------------------------------------------------------- */
const ABOUT_CARDS = [
  {
    icon: <FiSmartphone />,
    title: "Mobile & Desktop",
    text: "Ship cross-platform APKs and Windows installers from idea to deployment.",
  },
  {
    icon: <FiActivity />,
    title: "Real-time Diagnostics",
    text: "RF parameters, iPerf throughput, and ping stability — monitored live.",
  },
  {
    icon: <FiCpu />,
    title: "Software ↔ Hardware",
    text: "Integrate with Raspberry Pi and SIM modules for accurate field data.",
  },
  {
    icon: <FiServer />,
    title: "Telecom & Networking",
    text: "Diagnostic tooling for the telecommunications and field-engineering space.",
  },
];

function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <SectionHead
          eyebrow="About Me"
          title="Where software meets hardware"
        />
        <div className="about-grid">
          <div>
            <Reveal>
              <p className="about-lead">
                I'm a Software Developer specialising in mobile applications and
                specialized diagnostic tools.
              </p>
            </Reveal>
            <Reveal delay={1}>
              <p className="about-text">{profile.summary}</p>
            </Reveal>
          </div>

          <motion.div
            className="about-cards"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            {ABOUT_CARDS.map((c) => (
              <motion.div className="about-card" key={c.title} variants={fadeUp}>
                <div className="ico">{c.icon}</div>
                <div>
                  <h4>{c.title}</h4>
                  <p>{c.text}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Experience                                                                 */
/* -------------------------------------------------------------------------- */
function Experience() {
  return (
    <section className="section" id="experience" style={{ background: "var(--bg-soft)" }}>
      <div className="container">
        <SectionHead
          eyebrow="Experience"
          title="My professional journey"
          sub="Building and shipping diagnostic software in the telecom space."
        />
        <div className="timeline">
          {experience.map((job, i) => (
            <Reveal className="tl-item" key={i} delay={i}>
              <div className="tl-card">
                <div className="tl-top">
                  <div>
                    <div className="tl-role">{job.role}</div>
                    <div className="tl-company">
                      {job.company} · {job.location}
                    </div>
                  </div>
                  <span className="tl-period">{job.period}</span>
                </div>

                <div className="tl-project">📡 {job.project}</div>
                <p className="tl-summary">{job.summary}</p>

                <ul className="tl-points">
                  {job.points.map((p, j) => (
                    <li key={j}>
                      <FiCheck /> {p}
                    </li>
                  ))}
                </ul>

                <div className="tag-row">
                  {job.tags.map((t) => (
                    <span className="tag" key={t}>
                      {t}
                    </span>
                  ))}
                </div>

                {job.link && (
                  <a
                    href={job.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-link"
                  >
                    <FiExternalLink /> {job.linkLabel || "View project"}
                  </a>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Projects                                                                   */
/* -------------------------------------------------------------------------- */
function CodePanel({ snippet }) {
  if (!snippet) return null;
  return (
    <div className="code-panel">
      <div className="code-bar">
        <span className="dots">
          <i /> <i /> <i />
        </span>
        <span className="code-file">{snippet.file}</span>
        <span className="code-lang">{snippet.lang}</span>
      </div>
      <pre>
        <code>{snippet.code}</code>
      </pre>
    </div>
  );
}

function Projects() {
  return (
    <section className="section" id="projects">
      <div className="container">
        <SectionHead
          eyebrow="Projects"
          title="Things I've built"
          sub="My own personal projects — from an open-source Android app to a deployed LMS and an ML music engine. (The COTS diagnostic tool is professional work — see Experience.)"
        />
        <div className="features">
          {projects.map((p, i) => (
            <Reveal className="feature" key={p.title} delay={i % 2}>
              <div className="feature-info">
                <span className="feature-tag">{p.tagline}</span>
                <h3>{p.title}</h3>
                <p className="feature-blurb">{p.blurb}</p>
                <ul className="pc-highlights">
                  {p.highlights.map((h, j) => (
                    <li key={j}>
                      <FiCheck /> {h}
                    </li>
                  ))}
                </ul>
                <div className="feature-tech">
                  {p.tech.map((t) => (
                    <span className="tag" key={t}>
                      {t}
                    </span>
                  ))}
                </div>
                <div className="feature-actions">
                  {p.demo && (
                    <a href={p.demo} target="_blank" rel="noreferrer" className="btn btn-primary">
                      {p.demoLabel || "Live Demo"} <FiArrowUpRight />
                    </a>
                  )}
                  {p.github && (
                    <a href={p.github} target="_blank" rel="noreferrer" className="btn btn-ghost">
                      <FiGithub /> Source Code
                    </a>
                  )}
                  {p.files && (
                    <a href={p.files} target="_blank" rel="noreferrer" className="btn btn-ghost">
                      <FiFolder /> Project Files
                    </a>
                  )}
                </div>
              </div>
              <div className="feature-visual">
                <ProjectVisual visual={p.visual} title={p.title} url={p.demo} />
              </div>
            </Reveal>
          ))}
        </div>

        {moreProjects && moreProjects.length > 0 && (
          <>
            <Reveal>
              <h3 className="subhead">More projects</h3>
            </Reveal>
            <div className="projects-grid">
              {moreProjects.map((p, i) => (
                <Reveal className="project-card" key={p.title} delay={i}>
                  <div className="pc-head">
                    <div className="pc-icon">
                      <FiFolder />
                    </div>
                    {p.link && (
                      <a
                        href={p.link}
                        className="pc-link"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Open project"
                      >
                        <FiArrowUpRight />
                      </a>
                    )}
                  </div>
                  <h3>{p.title}</h3>
                  <p className="pc-blurb">{p.blurb}</p>
                  <div className="pc-tech">
                    {p.tech.map((t) => (
                      <span className="tag" key={t}>
                        {t}
                      </span>
                    ))}
                  </div>
                </Reveal>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Certifications                                                             */
/* -------------------------------------------------------------------------- */
function Certifications() {
  if (!certifications || certifications.length === 0) return null;
  return (
    <section className="section" id="certifications" style={{ background: "var(--bg-soft)" }}>
      <div className="container">
        <SectionHead
          eyebrow="Certifications"
          title="Credentials & certifications"
          sub="Professional certifications I've earned."
        />
        <div className="cert-grid">
          {certifications.map((c, i) => (
            <Reveal className="cert-card" key={i} delay={i}>
              <div className="cert-ico">
                <FiAward />
              </div>
              <div className="cert-body">
                <h4>{c.title}</h4>
                <div className="cert-issuer">{c.issuer}</div>
              </div>
              {c.link && (
                <a
                  href={c.link}
                  target="_blank"
                  rel="noreferrer"
                  className="cert-link"
                  aria-label="View certificate"
                >
                  <FiExternalLink />
                </a>
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Skills — animated bars                                                     */
/* -------------------------------------------------------------------------- */
function Skills() {
  return (
    <section className="section" id="skills" style={{ background: "var(--bg-soft)" }}>
      <div className="container">
        <SectionHead
          eyebrow="Skills"
          title="My technical toolkit"
          sub="The languages, frameworks, and systems I build with every day."
        />
        <div className="toolkit">
          {skills.map((g, gi) => (
            <Reveal className="tk-group" key={g.group} delay={gi}>
              <div className="tk-head">
                <span className="tk-bar" />
                {g.group}
              </div>
              <motion.div
                className="tk-grid"
                variants={stagger}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
              >
                {g.items.map((s) => (
                  <motion.div className="tk-chip" key={s.name} variants={fadeUp}>
                    <span className="tk-ico">
                      <SkillIcon name={s.name} />
                    </span>
                    <span className="tk-name">{s.name}</span>
                  </motion.div>
                ))}
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Education                                                                  */
/* -------------------------------------------------------------------------- */
function Education() {
  return (
    <section className="section" id="education">
      <div className="container">
        <SectionHead eyebrow="Education" title="Academic background" />
        <div className="edu-grid">
          {education.map((e, i) => (
            <Reveal className="edu-card" key={i} delay={i}>
              <div className="edu-ico">
                <FiBookOpen />
              </div>
              <div className="edu-body">
                <div className="edu-top">
                  <h3>{e.school}</h3>
                  {e.score && <span className="edu-score">{e.score}</span>}
                </div>
                <div className="edu-degree">{e.degree}</div>
                <div className="edu-period">{e.period}</div>
                <p className="edu-detail">{e.detail}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Posts (optional)                                                           */
/* -------------------------------------------------------------------------- */
function Posts() {
  if (!posts || posts.length === 0) return null;
  return (
    <section className="section" id="posts" style={{ background: "var(--bg-soft)" }}>
      <div className="container">
        <SectionHead
          eyebrow="Featured"
          title="Posts & writing"
          sub="A few things I've shared on LinkedIn."
        />
        <div className="posts-grid">
          {posts.map((p, i) => (
            <Reveal className="post-card" key={i} delay={i}>
              {p.date && <span className="post-date">{p.date}</span>}
              <h4>{p.title}</h4>
              <p>{p.excerpt}</p>
              {p.link && (
                <a className="post-link" href={p.link} target="_blank" rel="noreferrer">
                  Read on LinkedIn <FiArrowUpRight />
                </a>
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Contact                                                                    */
/* -------------------------------------------------------------------------- */
function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-band">
        <Reveal>
          <div className="contact-wrap">
            <h2>Let's build something great</h2>
            <p>
              I'm open to new opportunities and collaborations — especially where
              software meets hardware. Drop me a line and let's talk.
            </p>
            <div className="contact-actions">
              <a href={`mailto:${profile.email}`} className="btn btn-white">
                <FiMail /> Say Hello
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline"
              >
                <FiLinkedin /> Connect on LinkedIn
              </a>
            </div>
            <div className="social-row">
              <a href={`mailto:${profile.email}`} className="social-btn" aria-label="Email">
                <FiMail />
              </a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" className="social-btn" aria-label="LinkedIn">
                <FiLinkedin />
              </a>
              {profile.github && (
                <a href={profile.github} target="_blank" rel="noreferrer" className="social-btn" aria-label="GitHub">
                  <FiGithub />
                </a>
              )}
              {profile.phone && (
                <a href={`tel:${profile.phone}`} className="social-btn" aria-label="Phone">
                  <FiPhone />
                </a>
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Footer + scroll-to-top                                                     */
/* -------------------------------------------------------------------------- */
function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-right">
          <span className="footer-tag">
            {profile.headline} · {profile.location.split(",")[0]}
          </span>
          <div className="footer-social">
            <a href={`mailto:${profile.email}`} aria-label="Email">
              <FiMail />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <FiLinkedin />
            </a>
            {profile.github && (
              <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
                <FiGithub />
              </a>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}

function ToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 500);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <AnimatePresence>
      {show && (
        <motion.button
          className="to-top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.6 }}
          aria-label="Scroll to top"
        >
          <FiArrowUp />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

/* -------------------------------------------------------------------------- */
/*  App                                                                        */
/* -------------------------------------------------------------------------- */
export default function App() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Certifications />
        <Education />
        <Posts />
        <Contact />
      </main>
      <Footer />
      <ToTop />
    </>
  );
}
