import React, { useEffect, useState } from 'react';
import {
  ArrowDownRight, ArrowUpRight, BarChart3, Check, BookOpen,
  Code2, Database, FileSpreadsheet, GraduationCap,
  Mail, Menu, MessageSquareText, MoveUpRight, Workflow, X,
  Zap, Award, ShieldCheck, Sparkles
} from 'lucide-react';

const experience = [
  {
    role: 'Junior Program Manager — Senior Guide',
    company: 'Ditto Insurance (Zerodha Group) · Remote',
    date: 'Oct 2025 — Present',
    points: [
      'Directly manage quality and performance for 30+ advisors within a 150-member advisory team, and act as their main contact for performance and quality support.',
      'Built and own Ditto Assist, an advisor support web app with declaration help, a plan-question chatbot, coverage projections, and quality tools. It has 250+ unique users across departments and 20,000+ declaration lookups in five months.',
      'Built a QA dashboard that brings chat, call, and payment quality data into one place for advisors and managers. Its data comes from a Google Sheet I built, which pulls from an internal SQL database.',
      'Built a sales vs quality performance dashboard that links data across several sheets to track organisation-wide performance and competition standings.',
      'Automated QA reminders and operational updates using Google Apps Script, chatbots, and webhooks.',
      'Answer complex insurance questions from advisors on demand.',
      'Serve as a designated approver for insurance applications, reviewing and logging complex cases against internal checklists.',
      'Run department-wide sessions on common quality issues, reading policy documents, regulator resources, and claim settlement ratios.'
    ]
  },
  {
    role: 'Senior Associate — Guide (Advisor Enablement)',
    company: 'Ditto Insurance · Remote',
    date: 'Jul 2024 — Sep 2025',
    points: [
      'Selected as one of the first two Guides for the on-the-job training pilot that helps newly trained advisors move into live customer work.',
      'Supported 12 onboarding cohorts: 72 of the 78 trainees I worked with cleared probation.',
      'Designed bridge programs, coaching routines, feedback sessions, and quizzes for advisors at risk of failing probation.',
      'Trained and supported 3 newly appointed Guides until they cleared probation.',
      'Built scenario-based learning templates and mock customer interactions for phone and payment training.'
    ]
  },
  {
    role: 'Quality Executive',
    company: 'Ditto Insurance · Remote',
    date: 'Apr 2023 — Jun 2024',
    points: [
      'Reviewed advisor conversations across chat, calls, and payments against written quality standards (SOPs).',
      'Piloted and built Call QA, the quality review of phone calls: templates, SOPs, evaluation structure, and metrics. Leadership proposed it; I designed and built it. Also trained the call-focused team and wrote the first Call Handling SOP.',
      'Built the BPM (Business Process Manager) Quality function from scratch: evaluation frameworks, SOPs, feedback templates, automated reporting dashboards, and handover training.',
      'Mentored a QA Associate in call quality evaluation.'
    ]
  },
  {
    role: 'Customer Service Associate — SWAT',
    company: 'Amazon Development Center India · Coimbatore',
    date: 'Jul 2019 — Apr 2023',
    points: [
      'Selected within a year for SWAT, a specialist team that handles chat and email for several marketplaces: North America, with on-request cover for India, Canada, and Australia. Standard associates handle one marketplace.',
      'Handled escalations, return and refund policy cases, and abuse-prevention workflows during peak periods.',
      'Named “Best Performer” twice for keeping customer satisfaction above 95%, against a 75% team benchmark.',
      'Informal go-to person for newer associates on process questions and case resolution.'
    ]
  }
];

const dittoAssist = {
  summary: 'An internal web tool I built for the insurance advisors at Ditto. It helps them handle customer health-insurance applications faster, more accurately, and with more confidence.',
  facts: [
    ['Problem', 'Advisors had to work out where a customer’s existing conditions go on the insurer’s form, and dig through long plan documents for answers. Results could depend on who did the work.'],
    ['Used by', 'Insurance advisors, plus team leads, training, product, and operations teams across the organisation.'],
    ['My role', 'I built it and I maintain it.']
  ],
  stats: [
    ['20,000+', 'declaration lookups in five months'],
    ['250+', 'unique users across departments']
  ],
  modules: [
    ['Declaration help', 'The advisor enters a customer’s existing health condition. The tool shows where it should be declared on the insurer’s form, so nothing is missed or put in the wrong place.', FileSpreadsheet],
    ['Specific illness check', 'The advisor can quickly see whether a condition is covered, excluded, or restricted by a waiting period under a given plan.', ShieldCheck],
    ['Product Assist', 'A custom-built chatbot using the Gemini API. The advisor asks a question about a plan and gets an answer from the insurers’ own documents, with no digging through long brochures.', MessageSquareText],
    ['Coverage Projection Studio', 'Shows how a customer’s cover could grow over the years with bonuses and restoration benefits. This makes plan comparisons simple to explain.', BarChart3],
    ['Quality and coaching tools', 'Advisors and team leads see QA scores and feedback in one place. The tool also tracks team progress and shares announcements.', Award],
    ['Daily learning', 'Short insurance tips appear on the home screen.', BookOpen]
  ],
  why: [
    ['Consistent answers', 'Every advisor follows the same rules, so results don’t depend on who is doing the work.'],
    ['Fewer errors', 'Wrong or missed declarations can cause claim problems later. The tool is designed to reduce them.'],
    ['Faster handling', 'Advisors spend less time searching and more time with customers.'],
    ['Secure access', 'Only people from the organisation can sign in, and what each person sees depends on their role.']
  ],
  note: 'The tool guides advisors. It does not give medical advice or make underwriting decisions. Advisors still check the final declaration themselves.',
  tags: ['TypeScript', 'React', 'Node.js', 'Gemini API', 'Neon (SQL database)', 'Google Cloud']
};

const projects = [
  {
    id: '01',
    title: 'QA Performance Dashboard',
    category: 'REPORTING · DATA PIPELINE',
    icon: BarChart3,
    visual: 'dashboard',
    facts: [
      ['Problem', 'Quality scores and feedback were spread across separate sources, and reviewing them took manual effort.'],
      ['Used by', 'Advisors (individual views) and managers (team-level views).'],
      ['My role', 'I built it as part of Ditto Assist, and built the Google Sheet behind it. The sheet pulls QA data from an internal SQL database and sorts it into chat, call, and payment quality views.'],
      ['Result', 'Quality data from scattered sources is now in one place for advisors and managers.']
    ],
    tags: ['SQL database', 'Google Sheets', 'React']
  },
  {
    id: '02',
    title: 'Automated Quality Reminders',
    category: 'WORKFLOW AUTOMATION',
    icon: Workflow,
    visual: 'workflow',
    facts: [
      ['Problem', 'Advisors had to keep track of QA feedback, quality updates, and process changes.'],
      ['Used by', 'Advisors.'],
      ['My role', 'I built automatic notifications and reminders for QA feedback, quality updates, and process changes.'],
      ['Result', 'Advisors receive QA feedback, quality updates, and process changes automatically.']
    ],
    tags: ['Google Apps Script', 'Webhooks', 'Google Chat API', 'Google Workspace Studio']
  }
];

const skills = [
  { title: 'AI & Vibe Coding', icon: Sparkles, featured: true, items: ['Advanced vibe coding (AI-assisted development)', 'Google AI Professional certified (7 certifications)', 'Google AI Studio', 'Gemini API', 'NotebookLM', 'Claude Cowork'] },
  { title: 'Data & Reporting', icon: FileSpreadsheet, items: ['Google Sheets', 'Excel', 'SQL / PostgreSQL (working knowledge)', 'Performance dashboards', 'KPI management', 'Performance reporting'] },
  { title: 'Operations & Quality', icon: ShieldCheck, items: ['Quality evaluation', 'Trend analysis', 'SOP development', 'Workflow standardisation', 'Coaching', 'Policy wording analysis'] },
  { title: 'Automation & Programming', icon: Code2, items: ['Google Apps Script', 'Webhooks & Google Chat API', 'Notion', 'JavaScript (working knowledge)', 'HTML (familiar)', 'Python (can read it; not yet writing it independently)', 'Power BI (learning)'] }
];

const metrics = [
  { value: '20,000+', label: 'Declaration lookups', detail: 'In five months, in Ditto Assist, a web app I built' },
  { value: '250+', label: 'Unique users', detail: 'Across advisory, training, product, operations, and management' },
  { value: '72 of 78', label: 'Trainees cleared probation', detail: '12 onboarding cohorts I supported' },
  { value: 'Above 95%', label: 'Customer satisfaction', detail: 'Amazon · vs 75% team benchmark · Best Performer, twice' }
];

function Metric({ value, label, detail }) {
  return <div className="metric">
    <div className="metric-value">{value}</div>
    <div className="metric-label">{label}</div>
    {detail && <div className="metric-detail">{detail}</div>}
  </div>;
}

function ProjectVisual({ type }) {
  if (type === 'assist') return <div className="visual assist-visual" aria-hidden="true">
    <div className="visual-top"><span className="mini-mark">DA</span><span>Ditto Assist</span><span className="status-dot" /></div>
    <div className="assist-layout">
      <div className="assist-sidebar"><i /><i /><i /><i /></div>
      <div className="assist-main">
        <div className="mock-eyebrow">ADVISOR SUPPORT</div>
        <div className="mock-title">How can I help?</div>
        <div className="mock-line long" /><div className="mock-line medium" />
        <div className="mock-answer"><span className="answer-dot" /><div><b>Answer from approved documents</b><i /><i className="short" /></div></div>
        <div className="mock-input">Ask a product or declaration question… <ArrowUpRight size={13}/></div>
      </div>
    </div>
  </div>;
  if (type === 'dashboard') return <div className="visual dashboard-visual" aria-hidden="true">
    <div className="visual-top"><span>QUALITY OVERVIEW</span><span className="period">EXAMPLE LAYOUT</span></div>
    <div className="dash-kpis">
      <div><small>TEAM QA</small><b>—</b><span>Score view</span></div>
      <div><small>CHANNELS</small><b>03</b><span>Chat · Call · Payment</span></div>
    </div>
    <div className="chart-label">TREND VIEW <span>Example shape, not real data</span></div>
    <div className="chart">
      {[38,47,42,58,52,66,61,77,69,86,80,94].map((h,i)=><div key={i} className={`bar ${i===11?'bar-active':''}`} style={{height:`${h}%`}} />)}
    </div>
  </div>;
  return <div className="visual workflow-visual" aria-hidden="true">
    <div className="visual-top"><span>QA UPDATE FLOW</span><span className="live-pill"><i /> AUTOMATED</span></div>
    <div className="flow-step"><span className="flow-icon"><Database size={15}/></span><div><b>QA feedback updated</b><small>Source: QA data sheet</small></div><Check size={15} className="flow-check"/></div>
    <div className="flow-connector"><span /></div>
    <div className="flow-step"><span className="flow-icon"><Zap size={15}/></span><div><b>Workflow runs</b><small>Apps Script · Webhook</small></div><Check size={15} className="flow-check"/></div>
    <div className="flow-connector"><span /></div>
    <div className="flow-step"><span className="flow-icon"><MessageSquareText size={15}/></span><div><b>Advisor notified</b><small>Google Chat</small></div><Check size={15} className="flow-check"/></div>
  </div>;
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);
  const email = 'pmehruf@gmail.com';
  const phone = '+91 96569 88473';
  const linkedin = 'https://www.linkedin.com/in/mehruf-p-6a4845171';

  useEffect(() => {
    if (!menuOpen) return undefined;
    const onKey = (e) => { if (e.key === 'Escape') setMenuOpen(false); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [menuOpen]);

  return <div className="site-shell">
    <a className="skip-link" href="#main">Skip to content</a>
    <header className="site-header">
      <a href="#home" className="brand" onClick={closeMenu}><span className="brand-symbol">M<span>.</span></span><span className="brand-name">MEHRUF P.</span></a>
      <button className="menu-toggle" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={menuOpen} aria-controls="main-nav" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={21}/> : <Menu size={21}/>}</button>
      <nav id="main-nav" className={menuOpen ? 'nav-links open' : 'nav-links'} aria-label="Main navigation">
        <a href="#work" onClick={closeMenu}>Work</a>
        <a href="#experience" onClick={closeMenu}>Experience</a>
        <a href="#skills" onClick={closeMenu}>Skills</a>
        <a href="#about" onClick={closeMenu}>About</a>
        <a className="nav-contact" href={`mailto:${email}`} onClick={closeMenu}>Get in touch <ArrowUpRight size={14}/></a>
      </nav>
    </header>

    <main id="main">
      <section id="home" className="hero section-wrap">
        <div className="hero-copy">
          <div className="eyebrow"><span className="eyebrow-line" /> QUALITY &amp; PROGRAM MANAGEMENT · INSURANCE</div>
          <h1>Operations, Analysis and <span>Automation.</span></h1>
          <p className="hero-description">Seven years in customer support, quality review, coaching, and program management: first at Amazon, then at Ditto Insurance. I review work against written standards, track performance, and build dashboards, workflow automation, and a web app used across departments, using advanced AI-assisted (“vibe”) coding.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#work">See my work <ArrowDownRight size={16}/></a>
          </div>
          <div className="hero-footnote"><span className="availability-dot" /> Based in Kerala, India</div>
        </div>
        <div className="hero-art" aria-hidden="true">
          <div className="orbit orbit-one" /><div className="orbit orbit-two" /><div className="orbit orbit-three" />
          <div className="hero-core"><div className="core-grid" /><span className="core-m">M<span>.</span></span><span className="core-label">DATA → DECISIONS</span></div>
          <div className="float-card card-top"><span className="float-icon"><Award size={15}/></span><div><small>CERTIFIED</small><b>Google AI Professional</b></div></div>
          <div className="float-card card-mid"><span className="float-icon"><ShieldCheck size={15}/></span><div><small>AWARD · 2026</small><b>The Quality Guardian</b></div></div>
          <div className="float-card card-bottom"><span className="float-icon"><Sparkles size={15}/></span><div><small>MAIN SKILL</small><b>Advanced vibe coding</b></div></div>
        </div>
      </section>

      <section className="metrics-section" aria-label="Key numbers">
        <div className="section-wrap metrics-grid">
          {metrics.map((m) => <Metric key={m.label} {...m} />)}
        </div>
      </section>

      <section id="work" className="section-wrap section-block work-section">
        <div className="section-heading">
          <div><div className="eyebrow"><span className="eyebrow-line" /> SELECTED WORK</div><h2>Tools I've built<br/><span>for real teams.</span></h2></div>
          <p>Ditto Assist is my main project. Two smaller projects follow it.</p>
        </div>

        <article className="flagship" aria-labelledby="ditto-assist-title">
          <div className="flagship-head">
            <div className="flagship-copy">
              <div className="project-category">MAIN PROJECT · WEB APP · HEALTH-INSURANCE APPLICATION SUPPORT</div>
              <h3 id="ditto-assist-title">Ditto Assist</h3>
              <p className="flagship-summary">{dittoAssist.summary}</p>
              <dl className="project-facts">
                {dittoAssist.facts.map(([term, text]) => <div key={term}><dt>{term}</dt><dd>{text}</dd></div>)}
              </dl>
              <div className="flagship-stats">
                {dittoAssist.stats.map(([value, label]) => <div key={label}><strong>{value}</strong><span>{label}</span></div>)}
              </div>
            </div>
            <div className="flagship-visual">
              <ProjectVisual type="assist"/>
            </div>
          </div>

          <h4 className="flagship-subtitle">What advisors get</h4>
          <div className="module-grid">
            {dittoAssist.modules.map(([name, text, ModuleIcon], i) => <section className="module-card" key={name} aria-labelledby={`module-${i}`}>
              <div className="module-top"><span>0{i+1}</span><ModuleIcon size={18} aria-hidden="true"/></div>
              <h5 id={`module-${i}`}>{name}</h5>
              <p>{text}</p>
            </section>)}
          </div>

          <h4 className="flagship-subtitle">Why it matters</h4>
          <div className="why-grid">
            {dittoAssist.why.map(([title, text]) => <div className="why-item" key={title}><b>{title}</b><p>{text}</p></div>)}
          </div>

          <p className="project-limit"><b>Important to know.</b> {dittoAssist.note}</p>
          <div className="tag-list" aria-label="Tools used">{dittoAssist.tags.map(tag=><span key={tag}>{tag}</span>)}</div>
          <a className="button button-secondary flagship-link" href="https://github.com/pmehruf/ditto-assist/" target="_blank" rel="noreferrer">View Ditto Assist on GitHub <MoveUpRight size={15}/></a>
        </article>

        <h3 className="more-title">More projects</h3>
        <div className="project-grid two">
          {projects.map((project) => {
            const Icon = project.icon;
            return <article className={`project-card project-${project.visual}`} key={project.id}>
              <div className="project-visual-wrap">
                <ProjectVisual type={project.visual}/>
                <span className="project-number">{project.id}</span>
              </div>
              <div className="project-content">
                <div className="project-category">{project.category}</div>
                <div className="project-title-row"><h3>{project.title}</h3><span className="project-icon" aria-hidden="true"><Icon size={17}/></span></div>
                <dl className="project-facts">
                  {project.facts.map(([term, text]) => <div key={term}><dt>{term}</dt><dd>{text}</dd></div>)}
                </dl>
                <div className="tag-list" aria-label="Tools used">{project.tags.map(tag=><span key={tag}>{tag}</span>)}</div>
              </div>
            </article>;
          })}
        </div>
        <p className="project-note"><span>NOTE</span> The pictures above are illustrative concepts, not actual screenshots.</p>
      </section>

      <section className="impact-band">
        <div className="section-wrap impact-inner">
          <div className="impact-copy"><div className="eyebrow"><span className="eyebrow-line" /> IMPACT AT DITTO</div><h2>Results at<br/><span>Ditto Insurance.</span></h2><p>I turn scattered performance information into clearer reports, and I build the tools and processes that help a team work consistently.</p></div>
          <div className="impact-stats">
            <div className="impact-stat"><span className="impact-label">TEAM I MANAGE</span><strong>30+</strong><span>advisors directly, within a 150-member advisory team</span></div>
            <div className="impact-stat"><span className="impact-label">QUALITY IMPROVEMENT</span><strong>77% <i>→</i> 86%+</strong><span>QA score for my team of 30+ advisors</span></div>
            <div className="impact-stat"><span className="impact-label">BUILT FROM SCRATCH</span><strong>Call QA + BPM Quality</strong><span>Two quality functions: templates, SOPs, evaluation structure, and metrics. Leadership proposed the idea; I designed and built them.</span></div>
          </div>
        </div>
      </section>

      <section id="experience" className="section-wrap section-block experience-section">
        <div className="section-heading">
          <div><div className="eyebrow"><span className="eyebrow-line" /> CAREER PATH</div><h2>Experience that<br/><span>keeps building.</span></h2></div>
          <p>I moved from resolving customer issues, to checking service quality, to coaching advisors, to building the reports and tools teams use every day.</p>
        </div>
        <div className="timeline">
          {experience.map((job, i)=><article className="timeline-item" key={job.role}>
            <div className="timeline-marker" aria-hidden="true"><span>{String(i+1).padStart(2,'0')}</span><i /></div>
            <div className="timeline-body">
              <div className="timeline-head"><div className="timeline-date">{job.date}</div><h3>{job.role}</h3><div className="timeline-company">{job.company}</div></div>
              <ul className="timeline-points">{job.points.map(point=><li key={point}><span className="bullet-dot" aria-hidden="true"/>{point}</li>)}</ul>
            </div>
          </article>)}
        </div>
      </section>

      <section id="skills" className="section-wrap section-block skills-section">
        <div className="section-heading">
          <div><div className="eyebrow"><span className="eyebrow-line" /> TOOLKIT</div><h2>Skills,<br/><span>with honest levels.</span></h2></div>
          <p>Where a skill is still developing, the level is written next to it.</p>
        </div>
        <div className="skills-grid">
          {skills.map((group,i)=>{ const SkillIcon = group.icon; return <div className={group.featured ? 'skill-card featured' : 'skill-card'} key={group.title}><div className="skill-card-top"><span>0{i+1}</span><SkillIcon size={18} aria-hidden="true"/></div><h3>{group.title}</h3><ul className="skill-items">{group.items.map(item=><li key={item}>{item}</li>)}</ul></div>; })}
        </div>
        <div className="learning-note"><span className="learning-icon" aria-hidden="true"><GraduationCap size={17}/></span><p><b>Currently learning</b><br/>Power BI and advanced Apps Script.</p></div>
      </section>

      <section id="about" className="section-wrap section-block about-section">
        <div className="about-left"><div className="eyebrow"><span className="eyebrow-line" /> ABOUT</div><h2>Careful with facts.<br/><span>Clear in reports.</span></h2></div>
        <div className="about-right">
          <p>I check information for accuracy, look for patterns in performance data, and explain what I find clearly. I started in customer support at Amazon, moved into quality review at Ditto Insurance, and now combine coaching, program management, reporting, and workflow automation.</p>
          <p>What I do best: reviewing work against written standards, coaching people to improve, and turning scattered data into reports and tools that others can rely on.</p>
          <div className="recognition-list"><div><Sparkles size={17} aria-hidden="true"/><span><b>Google AI Professional</b><small>7 certifications</small></span></div><div><Award size={17} aria-hidden="true"/><span><b>The Quality Guardian</b><small>Ditto Insurance · 2026</small></span></div><div><Award size={17} aria-hidden="true"/><span><b>Best Performer · 2×</b><small>Amazon Development Center India</small></span></div></div>
          <div className="education-card"><GraduationCap size={19} aria-hidden="true"/><div><b>B.Tech — Electronics and Communication Engineering</b><span>APJ Abdul Kalam Technological University · 2015–2019 · CGPA 7.06</span></div></div>
          <div className="certs"><span>CERTIFICATIONS</span><p>Google AI Professional (7 total certifications) · Google Sheets Masterclass · PostgreSQL Master Bootcamp · Python and Django Full Stack Web Developer Bootcamp</p></div>
        </div>
      </section>

      <section className="contact-section">
        <div className="section-wrap contact-inner">
          <div className="eyebrow"><span className="eyebrow-line" /> CONTACT</div>
          <h2>Get in <span>touch.</span></h2>
          <p>For questions, collaboration, or opportunities, send me an email or message me on LinkedIn.</p>
          <div className="contact-actions"><a className="button button-primary" href={`mailto:${email}`}> <Mail size={16} aria-hidden="true"/> {email} <ArrowUpRight size={15} aria-hidden="true"/></a><a className="button button-secondary" href={linkedin} target="_blank" rel="noreferrer">View LinkedIn <MoveUpRight size={15} aria-hidden="true"/></a></div>
          <div className="contact-meta"><span>Malappuram, Kerala, India</span><a href={`tel:${phone.replace(/\s/g, '')}`}>{phone}</a></div>
        </div>
      </section>
    </main>

    <footer className="site-footer"><div className="section-wrap footer-inner"><a href="#home" className="brand"><span className="brand-symbol">M<span>.</span></span><span className="brand-name">MEHRUF P.</span></a><span>Kerala, India</span><a href="#home" className="back-top">BACK TO TOP ↑</a></div></footer>
  </div>;
}

export default App;
