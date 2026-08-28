export default function About() {
  return <section className="shell intro" id="about">
    <div className="image-block"><img src="/images/2.png" alt="Contemporary residential project" /><span className="image-caption">DESIGNED FOR THE WAY YOU LIVE</span></div>
    <div><span className="eyebrow">Who we are</span><h2 className="section-title">Built on thoughtful design and sound engineering.</h2><p className="copy">ARST is a multidisciplinary design consultancy serving homeowners, developers and institutions across South India. We bring architectural ambition and structural confidence together from the earliest line on paper.</p><p className="principal"><strong>Subishnath P.</strong><span>B.E., M.Tech — Structural Engineering</span></p><div className="feature-list">{['Context-first planning', 'Code-compliant systems', 'Transparent process', 'Enduring value'].map((item, index) => <div className="feature" key={item}><span>0{index + 1}</span>{item}</div>)}</div><a className="text-link" href="#contact">Discover our practice →</a></div>
  </section>
}
