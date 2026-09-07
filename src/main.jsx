import { StrictMode, useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { Alert, Badge, Button, Card, Col, Container, Form, Nav, Navbar, Row, Stack } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

const experience = [
  {
    company: 'HP Inc.', role: 'Software Development Engineer, Manufacturing Test', period: 'Jul 2023 - Present',
    points: [
      'Automated manufacturing test processes with VB.NET and C#, reducing manual effort and test cycle time by 70%.',
      'Led test readiness, system validation, and factory transitions across 3+ sites, delivering the P11 production ramp with zero critical test failures.',
      'Used production and test data to reduce failure rates from 42% to 1.5% through cross-functional root-cause resolution.',
      'Consolidated reporting data from 5+ business units to support monthly financial reviews.',
    ],
  },
  {
    company: 'Pixium Digital Pte Ltd', role: 'Software Developer UI/UX Intern', period: 'Dec 2021 - Nov 2022',
    points: ['Built and maintained web applications with Yii2 and React.', 'Delivered responsive front-end components and improved product usability through UI/UX audits.', 'Created wireframes and interactive prototypes that helped communicate product direction and win client tenders.'],
  },
  {
    company: 'TES - Sustainable Technology Solutions', role: 'Summer Analyst and Developer Intern', period: 'May 2021 - Aug 2021',
    points: ['Planned and developed Power BI dashboards for more than 40 facilities worldwide.', 'Used AWS to improve data preparation and extraction workflows.', 'Designed wireframes and prototypes for an upcoming ERP system.'],
  },
];

const skills = ['Python', 'MySQL', 'Power BI', 'C#', 'VB.NET', 'JavaScript', 'HTML/CSS', 'React', 'React Native', 'Hardware Test Automation', 'Data Analysis', 'UI/UX Design', 'Wireframing & Prototyping', 'Git'];

const projects = [
  { title: 'Manufacturing Test Automation', text: 'Production-focused automation, validation, and data analysis at HP Inc.', tags: ['C#', 'VB.NET', 'Data analysis'] },
  { title: 'Person-Centered Care (PEAR)', text: 'Final Year Project for dementia care, including API integration, data validation, and migration to React Native Expo.', tags: ['React Native', 'JavaScript', 'UX'] },
  { title: 'Power BI Operations Dashboards', text: 'Dashboards planned and developed for over 40 facilities worldwide during my time at TES.', tags: ['Power BI', 'AWS', 'Analytics'] },
];

function Header({ portfolio }) {
  const home = portfolio ? '/index.html#home' : '#home';
  const links = [['Home', home], ['Experience', portfolio ? '/index.html#experience' : '#experience'], ['Skills', portfolio ? '/index.html#skills' : '#skills'], ['Projects', portfolio ? '/index.html#projects' : '#projects'], ['Portfolio', '/index.html#/portfolio'], ['Contact', portfolio ? '/index.html#contact' : '#contact']];
  return <Navbar expand="lg" sticky="top" bg="body" className="border-bottom shadow-sm"><Container><Navbar.Brand href={home} className="fw-bold">Qian Yi<span className="text-primary">.</span></Navbar.Brand><Navbar.Toggle aria-controls="main-nav" /><Navbar.Collapse id="main-nav"><Nav className="ms-auto align-items-lg-center">{links.map(([label, href]) => <Nav.Link active={portfolio === (label === 'Portfolio')} href={href} key={label}>{label}</Nav.Link>)}</Nav></Navbar.Collapse></Container></Navbar>;
}

function Footer({ portfolio }) { return <footer className="border-top py-5"><Container><Row className="g-4 align-items-center"><Col><h5 className="mb-1">Qian Yi<span className="text-primary">.</span></h5><p className="text-body-secondary mb-0">Software development, manufacturing test, and data-informed problem solving.</p></Col><Col md="auto"><Stack direction="horizontal" gap={3} className="site-links"><a href="https://www.linkedin.com/in/sohqianyi/" target="_blank" rel="noreferrer">LinkedIn</a><a href="https://github.com/sohqianyi" target="_blank" rel="noreferrer">GitHub</a><a href={portfolio ? '/index.html#contact' : '#contact'}>Contact</a></Stack></Col></Row></Container></footer>; }

function Home() {
  return <><Header /><main className="home-redesign"><section id="home" className="intro-section"><Container><div className="intro-meta"><span>Singapore / 2026</span><span>Software · Systems · Data</span></div><h1 className="intro-title">I build <em>useful</em><br />systems for<br /><span>real-world work.</span></h1><div className="intro-bottom"><p>Qian Yi is a Software Development Engineer at HP Inc. working across manufacturing automation, validation, and production data.</p><a className="intro-arrow" href="#experience" aria-label="Scroll to experience">↓</a></div></Container></section><section className="signal-strip"><Container><Row className="g-0"><Col md={4}><span>01</span><strong>MAKE</strong><p>Turn repetitive processes into reliable systems.</p></Col><Col md={4}><span>02</span><strong>MEASURE</strong><p>Use data to find what is actually happening.</p></Col><Col md={4}><span>03</span><strong>IMPROVE</strong><p>Move from a good idea to a measurable outcome.</p></Col></Row></Container></section><section id="experience" className="py-5 experience-redesign"><Container><div className="section-intro"><span className="section-index">01 / EXPERIENCE</span><h2>Work that has to<br /><em>work.</em></h2><p>My work sits close to the point where software meets the physical world: test systems, factories, teams, and decisions.</p></div><Stack gap={0} className="timeline">{experience.map((item, index) => <article className="timeline-item" key={`${item.company}-${item.role}`}><div className="timeline-marker">0{index + 1}</div><div><p className="timeline-period">{item.period}</p><h3>{item.company}</h3><h4>{item.role}</h4><ul>{item.points.slice(0, 3).map((point) => <li key={point}>{point}</li>)}</ul></div></article>)}</Stack></Container></section><section id="skills" className="py-5 skills-redesign"><Container><div className="section-intro"><span className="section-index">02 / TOOLKIT</span><h2>Technical range,<br /><em>practical focus.</em></h2></div><div className="skill-marquee" aria-label="Skills">{skills.map((skill) => <span key={skill}>{skill}</span>)}</div></Container></section><section id="projects" className="py-5 projects-redesign"><Container><div className="section-intro project-intro"><div><span className="section-index">03 / SELECTED WORK</span><h2>Things I’ve<br /><em>made useful.</em></h2></div><a className="text-link-redesign" href="/index.html#/portfolio">See design portfolio <span>↗</span></a></div><Row className="g-0 project-list">{projects.map((project, index) => <Col md={4} key={project.title}><article className="project-tile"><span className="project-number">0{index + 1}</span><h3>{project.title}</h3><p>{project.text}</p><div>{project.tags.map((tag) => <small key={tag}>{tag}</small>)}</div></article></Col>)}</Row></Container></section><section id="contact" className="contact-redesign py-5"><Container><div className="contact-redesign-inner"><span className="section-index">04 / CONTACT</span><h2>Have a problem<br />worth solving?</h2><a href="mailto:qianyiisoh@gmail.com">qianyiisoh@gmail.com <span>↗</span></a></div></Container></section></main><Footer /></>;
}

function SectionHeading({ eyebrow, title }) { return <div className="mb-4"><p className="text-primary text-uppercase small fw-semibold mb-2">{eyebrow}</p><h2 className="display-6 fw-bold">{title}</h2></div>; }

function Portfolio() { return <><Header portfolio /><main className="portfolio-redesign"><section className="portfolio-intro"><Container><div className="intro-meta"><span>Portfolio / 2026</span><span>Interfaces · Systems · Prototypes</span></div><h1 className="intro-title">Designing for<br /><em>clearer</em><br /><span>experiences.</span></h1><div className="intro-bottom"><p>Selected interface and prototype work from product, ERP, and service experiences.</p><a className="intro-arrow" href="#portfolio-work" aria-label="Scroll to selected work">↓</a></div></Container></section><section id="portfolio-work" className="portfolio-work"><Container><div className="section-intro"><span className="section-index">01 / SELECTED WORK</span><h2>Ideas made<br /><em>visible.</em></h2><p>A selection of UI/UX work designed to make complex workflows easier to understand and use.</p></div><div className="portfolio-list">{[
  ['ArtAF', 'ArtAFcover.png', 'https://www.figma.com/proto/HxVvkrksUar33OC9W7i3WG/ArtAF-(Copy)?node-id=201-911&starting-point-node-id=201%3A911&mode=design'],
  ['NUS RMS', 'NUSRMScover.png', 'https://www.figma.com/proto/599K33NdfoPi8QRdTboHpn/BL2.0-RMS-(Copy)?node-id=19-5972&starting-point-node-id=19%3A5972&mode=design'],
  ['WRS Resource Centre', 'WRScover.png', 'https://www.figma.com/proto/YLKyuXskFOjgWVAvCUWea1/WRS-Resource-Centre-(Copy)?node-id=4-69&mode=design'],
  ['Hunt Companies Mobile', 'HMCcover.png', 'https://www.figma.com/proto/19Dh0D84GGJY2JobLC1ArX/CJ-Slyfields-MobileApp-(Copy)?type=design&scaling=contain&page-id=3%3A14&starting-point-node-id=102%3A677&mode=design'],
  ['Hunt Companies Web', 'HMCWebCover.png', 'https://www.figma.com/proto/tJnSOYOE1rs818fzeqJn9P/Hunt-Companies-WebApp-(Copy)?type=design&node-id=4-69&scaling=contain&page-id=3%3A14&mode=design'],
].map(([name, image, href], index) => <a className="portfolio-project" href={href} target="_blank" rel="noreferrer" key={name}><span className="portfolio-project-number">0{index + 1}</span><div className="portfolio-project-image"><img src={`/assets/img/portfolio/${image}`} alt={`${name} cover`} /></div><div className="portfolio-project-info"><h3>{name}</h3><span>View prototype <b>↗</b></span></div></a>)}</div></Container></section></main><Footer portfolio /></>; }

function App() {
  const [hash, setHash] = useState(window.location.hash);

  useEffect(() => {
    const handleHashChange = () => setHash(window.location.hash);
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return hash === '#/portfolio' ? <Portfolio /> : <Home />;
}

createRoot(document.getElementById('root')).render(<StrictMode><App /></StrictMode>);
