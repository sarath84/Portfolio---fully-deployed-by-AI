import { useMemo } from 'react'
import { certificates, education, experience, profile, projects, skills } from './data/resume'
import { useActiveSection, useReveal, useScrollProgress, useTheme } from './hooks'
import type { Project } from './data/resume'
import type { MouseEvent, ReactNode } from 'react'

const NAV = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
]

function Reveal({ children, delay = 0, className = '' }: { children: ReactNode; delay?: number; className?: string }) {
  const ref = useReveal<HTMLDivElement>()
  return (
    <div ref={ref} className={`reveal ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  )
}

function Section({ id, index, title, children }: { id: string; index: string; title: string; children: ReactNode }) {
  return (
    <section id={id} className="section" aria-labelledby={`${id}-title`}>
      <Reveal>
        <p className="eyebrow">{index}</p>
        <h2 id={`${id}-title`} className="section-title">
          {title}
        </h2>
      </Reveal>
      {children}
    </section>
  )
}

function Chips({ items }: { items: string[] }) {
  return (
    <ul className="chips">
      {items.map((s) => (
        <li key={s}>{s}</li>
      ))}
    </ul>
  )
}

function Header() {
  const ids = useMemo(() => NAV.map((n) => n.id), [])
  const active = useActiveSection(ids)
  const { theme, toggle } = useTheme()
  return (
    <header className="header">
      <div className="header-inner">
        <a href="#top" className="logo" aria-label="Sarath AC, back to top">
          sarath<span>.</span>
        </a>
        <nav aria-label="Primary">
          <ul className="nav">
            {NAV.map((n) => (
              <li key={n.id}>
                <a href={`#${n.id}`} aria-current={active === n.id ? 'true' : undefined}>
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="header-actions">
          <button
            type="button"
            className="icon-btn"
            onClick={toggle}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
          >
            {theme === 'dark' ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
              </svg>
            )}
          </button>
          <a className="btn btn-sm" href={profile.resumeFile} download>
            Resume
          </a>
        </div>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section id="top" className="hero" aria-labelledby="hero-title">
      <p className="hero-hello">
        <span className="wave" aria-hidden="true">👋</span> Hello, I’m
      </p>
      <h1 id="hero-title" className="hero-title">
        {profile.name}
        <span className="accent">.</span>
      </h1>
      <p className="hero-role">{profile.role}</p>
      <p className="hero-lede">
        I build web applications and turn messy data into clear, useful insight. Recently I worked on an EEG
        viewer for a Brain–Machine Interface platform at CDAC, Trivandrum.
      </p>
      <div className="hero-cta">
        <a className="btn" href="#projects">
          See my work
        </a>
        <a className="btn btn-ghost" href={profile.resumeFile} download>
          Download resume
        </a>
      </div>
      <p className="hero-meta">
        <span className="dot" aria-hidden="true" /> Based in {profile.location}
      </p>
    </section>
  )
}

function About() {
  return (
    <Section id="about" index="01 / about" title="A bit about me">
      <Reveal delay={80}>
        <p className="lead">{profile.summary}</p>
      </Reveal>
      <Reveal delay={140} className="about-grid">
        <div className="card-plain">
          <h3>Focus</h3>
          <p>Data analytics, machine learning, and full-stack web development with React and Django.</p>
        </div>
        <div className="card-plain">
          <h3>Education</h3>
          <p>B.Tech in Computer Science and Engineering, College of Engineering Chengannur (2020–2024).</p>
        </div>
        <div className="card-plain">
          <h3>Certified</h3>
          <p>{certificates[0]}.</p>
        </div>
      </Reveal>
    </Section>
  )
}

function Experience() {
  return (
    <Section id="experience" index="02 / experience" title="Where I’ve worked">
      <ol className="timeline">
        {experience.map((job) => (
          <li key={job.org} className="timeline-item">
            <Reveal>
              <div className="timeline-head">
                <div>
                  <h3>
                    {job.role} <span className="muted">at</span> {job.org}
                  </h3>
                  <p className="muted">{job.place}</p>
                </div>
                <p className="period">{job.period}</p>
              </div>
              <ul className="bullets">
                {job.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
              <Chips items={job.stack} />
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  )
}

function ProjectCard({ project }: { project: Project }) {
  const onMove = (e: MouseEvent<HTMLElement>) => {
    const r = e.currentTarget.getBoundingClientRect()
    e.currentTarget.style.setProperty('--mx', `${e.clientX - r.left}px`)
    e.currentTarget.style.setProperty('--my', `${e.clientY - r.top}px`)
  }
  return (
    <article className={`project ${project.featured ? 'project-featured' : ''}`} onMouseMove={onMove}>
      <p className="project-tag">{project.tag}</p>
      <h3>{project.title}</h3>
      <p className="project-blurb">{project.blurb}</p>
      <ul className="bullets small">
        {project.points.map((p) => (
          <li key={p}>{p}</li>
        ))}
      </ul>
      <Chips items={project.stack} />
    </article>
  )
}

function Projects() {
  return (
    <Section id="projects" index="03 / projects" title="Things I’ve built">
      <div className="project-grid">
        {projects.map((p, i) => (
          <Reveal key={p.title} delay={i * 80} className={p.featured ? 'span-2' : ''}>
            <ProjectCard project={p} />
          </Reveal>
        ))}
      </div>
    </Section>
  )
}

function Skills() {
  return (
    <Section id="skills" index="04 / skills" title="Tools & technologies">
      <div className="skill-grid">
        {skills.map((g, i) => (
          <Reveal key={g.group} delay={i * 50}>
            <div className="card-plain">
              <h3>{g.group}</h3>
              <Chips items={g.items} />
            </div>
          </Reveal>
        ))}
      </div>
      <Reveal>
        <h3 className="sub-title">Education & certificates</h3>
        <div className="edu">
          {education.map((e) => (
            <div key={e.title} className="edu-row">
              <div>
                <p className="edu-title">{e.title}</p>
                <p className="muted">
                  {e.org}
                  {e.note ? ` · ${e.note}` : ''}
                </p>
              </div>
              <p className="period">{e.period}</p>
            </div>
          ))}
          {certificates.map((c) => (
            <div key={c} className="edu-row">
              <p className="edu-title">{c}</p>
              <p className="period">Certificate</p>
            </div>
          ))}
        </div>
      </Reveal>
    </Section>
  )
}

function Contact() {
  return (
    <Section id="contact" index="05 / contact" title="Let’s talk">
      <Reveal delay={80}>
        <p className="lead">
          I’m open to data science and full-stack opportunities. The quickest way to reach me is by email.
        </p>
        <div className="hero-cta">
          <a className="btn" href={`mailto:${profile.email}`}>
            {profile.email}
          </a>
          <a className="btn btn-ghost" href={`tel:+91${profile.phone}`}>
            Call {profile.phone}
          </a>
        </div>
        <p className="hero-meta">
          <span className="dot" aria-hidden="true" /> {profile.location}
        </p>
      </Reveal>
    </Section>
  )
}

export default function App() {
  const progress = useScrollProgress()
  return (
    <>
      <a href="#about" className="skip">
        Skip to content
      </a>
      <div className="progress" style={{ transform: `scaleX(${progress})` }} aria-hidden="true" />
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <footer className="footer">
        <p>© {new Date().getFullYear()} {profile.name}. Built with React.</p>
        <a href="#top">Back to top ↑</a>
      </footer>
    </>
  )
}
