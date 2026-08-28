const projects = [
  ['/images/1.png', 'Courtyard Residence', 'KASARAGOD · RESIDENTIAL · 2024'],
  ['/images/3.png', 'House on the Coast', 'KERALA · RESIDENTIAL · 2023'],
  ['/images/architecture.png', 'Form & Light', 'CONCEPT · ARCHITECTURE · 2024'],
]
export default function Projects() { return <section className="projects" id="projects"><div className="shell"><div className="section-head"><div><span className="eyebrow">Selected work</span><h2 className="section-title">Spaces that tell a story.</h2></div><a className="text-link" href="#contact">View all projects →</a></div><div className="project-grid">{projects.map(([image, title, details]) => <article className="project" key={title}><img src={image} alt={title} /><div className="project-info"><b>{title}</b><span>{details}</span></div></article>)}</div></div></section> }
