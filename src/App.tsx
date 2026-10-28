import { useEffect, useState } from 'react'
import { benefits, business, faqs, process, services, whatsappHref } from './config'

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return <span aria-hidden="true" className="arrow">{diagonal ? '↗' : '→'}</span>
}

function Brand({ footer = false }: { footer?: boolean }) {
  return (
    <a className={`brand${footer ? ' brand-footer' : ''}`} href="#home" aria-label={`${business.name} home`}>
      <span className="brand-symbol" aria-hidden="true"><i /><i /><i /></span>
      <span>{business.name}</span>
    </a>
  )
}

function HomestayPreview() {
  return (
    <div className="browser-preview homestay-preview" aria-label="Concept preview of a Himachal homestay website">
      <div className="browser-bar"><span /><span /><span /><small>cedarandstone.in</small><b>↗</b></div>
      <div className="stay-screen">
        <div className="stay-nav"><strong>CEDAR <em>&</em> STONE</strong><span>STAY&nbsp;&nbsp; · &nbsp;&nbsp;EXPLORE&nbsp;&nbsp; · &nbsp;&nbsp;OUR STORY</span><button>ENQUIRE</button></div>
        <div className="stay-hero">
          <div className="stay-sun" />
          <div className="mountain mountain-back" /><div className="mountain mountain-front" />
          <div className="stay-copy"><small>A SLOWER KIND OF STAY</small><h3>Find your<br />quiet place.</h3><span>Somewhere in the hills, close to what matters.</span><button>DISCOVER THE STAY&nbsp; ↗</button></div>
          <div className="stay-caption">31°28' N &nbsp; 76°16' E <i /> HIMACHAL PRADESH</div>
        </div>
        <div className="stay-bottom"><span>ROOM TO BREATHE.</span><span>A hillside homestay · Himachal Pradesh</span><span>SCROLL TO EXPLORE ↓</span></div>
      </div>
    </div>
  )
}

function RestaurantPreview() {
  return (
    <div className="browser-preview restaurant-preview" aria-label="Concept preview of a local restaurant website">
      <div className="browser-bar"><span /><span /><span /><small>thejuniper.in</small><b>↗</b></div>
      <div className="restaurant-screen">
        <header><div className="restaurant-logo"><span>THE</span><strong>JUNIPER</strong><i>TABLE & KITCHEN</i></div><nav>OUR STORY　 THE MENU　 VISIT</nav><button>BOOK A TABLE</button></header>
        <div className="restaurant-hero"><div className="restaurant-image"><div className="plate"><div className="dish"><i /><i /><i /><i /><b /></div></div><span className="image-label">MADE SLOW. SHARED OFTEN.</span></div><div className="restaurant-copy"><small>GOOD FOOD, GOOD COMPANY</small><h3>A little<br />taste of<br /><em>somewhere.</em></h3><p>Seasonal plates, local ingredients and a seat waiting for you.</p><button>TAKE A LOOK AT THE MENU&nbsp; ↗</button></div></div>
        <footer>FRESH FROM OUR KITCHEN <i /> OPEN DAILY, 11 AM – 10 PM <i /> UNA, HIMACHAL PRADESH</footer>
      </div>
    </div>
  )
}

function CoachingPreview() {
  return (
    <div className="browser-preview coaching-preview" aria-label="Concept preview of a coaching institute website">
      <div className="browser-bar"><span /><span /><span /><small>northstarlearning.in</small><b>↗</b></div>
      <div className="coaching-screen">
        <header><div className="northstar-mark">N<span>✳</span></div><strong>NORTHSTAR <small>LEARNING CENTRE</small></strong><nav>PROGRAMMES　 ABOUT　 STUDENT LIFE</nav><button>LET'S TALK ↗</button></header>
        <div className="coach-hero"><div className="coach-copy"><small>CURIOUS MINDS. CONFIDENT FUTURES.</small><h3>Make room<br />for <em>what's next.</em></h3><p>Supportive teaching and thoughtful learning, built around every student's potential.</p><button>EXPLORE OUR PROGRAMMES　 ↗</button><div className="coach-note">LEARNING, WITH DIRECTION.</div></div><div className="coach-art"><div className="coach-circle"><span>LEARN<br />WITH<br /><b>INTENT</b></span></div><div className="coach-orbit orbit-one" /><div className="coach-orbit orbit-two" /><i>✳</i><span className="art-caption">FIND YOUR<br />OWN NORTH.</span></div></div>
        <footer><span>PERSONAL ATTENTION</span><span>STRONG FOUNDATIONS</span><span>ROOM TO GROW</span></footer>
      </div>
    </div>
  )
}

const concepts = [
  { title: 'Cedar & Stone', type: 'HIMACHAL HOMESTAY', className: 'concept-stay', component: <HomestayPreview />, description: 'A calm, landscape-led stay website with room for property details and guest enquiries.' },
  { title: 'The Juniper', type: 'LOCAL RESTAURANT', className: 'concept-food', component: <RestaurantPreview />, description: 'A warm restaurant experience that puts the menu, opening hours and location up front.' },
  { title: 'Northstar Learning', type: 'COACHING INSTITUTE', className: 'concept-coach', component: <CoachingPreview />, description: 'An engaging institute website for programmes, teaching approach and student life.' },
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(0)
  const emailIsPlaceholder = business.email.includes('[')
  const navItems = [['Why a website', '#why'], ['What we build', '#services'], ['Our work', '#work'], ['Pricing', '#pricing']]

  useEffect(() => {
    document.title = `${business.name} | Business Websites`
    document.querySelector('meta[name="description"]')?.setAttribute(
      'content',
      `${business.description} Serving ${business.location} and remote clients.`,
    )
  }, [])

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="site-header">
        <div className="container header-inner">
          <Brand />
          <button className="mobile-menu-toggle" aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
            <span /><span />
          </button>
          <nav className={`main-nav${menuOpen ? ' nav-open' : ''}`} aria-label="Main navigation">
            {navItems.map(([label, href]) => <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</a>)}
            <a className="nav-contact" href="#contact" onClick={() => setMenuOpen(false)}>Let’s talk <Arrow diagonal /></a>
          </nav>
        </div>
      </header>

      <main id="main">
        <section className="hero-section" id="home">
          <div className="hero-grid container">
            <div className="hero-copy">
              <div className="eyebrow"><span className="eyebrow-dot" /> WEB DESIGN & DEVELOPMENT <span className="eyebrow-line" /></div>
              <h1>Your business<br />deserves more than<br />a <span>social media page.</span></h1>
              <p className="hero-intro">Professional websites for businesses that want to build credibility, showcase their services, and make it easier for customers to find and contact them.</p>
              <div className="hero-actions"><a className="button button-primary" href="#services">View services <Arrow /></a><a className="button button-quiet" href="#contact">Contact us <Arrow diagonal /></a></div>
              <div className="hero-meta"><span><i /> BASED IN UNA, HIMACHAL</span><span>WORKING WITH BUSINESSES EVERYWHERE</span></div>
            </div>
            <div className="hero-art" aria-label="Illustrated responsive website mockup for a local business">
              <div className="art-orbit art-orbit-one" /><div className="art-orbit art-orbit-two" />
              <div className="hero-note note-top"><span className="note-dot" /> MADE FOR YOUR BUSINESS</div>
              <div className="hero-window">
                <div className="window-toolbar"><div className="window-dots"><i /><i /><i /></div><span>yourbusiness.in</span><span className="window-menu">MENU&nbsp; +</span></div>
                <div className="window-body">
                  <div className="mock-nav"><strong>YOUR<br />BUSINESS<span>.</span></strong><span>ABOUT　 SERVICES　 CONTACT</span><button>LET'S TALK ↗</button></div>
                  <div className="mock-content">
                    <div className="mock-text"><small>LOCAL. THOUGHTFUL. YOURS.</small><h2>Good work.<br /><i>Right here.</i></h2><p>Everything your customers need to know, in one place.</p><button>GET TO KNOW US&nbsp; ↗</button></div>
                    <div className="mock-image"><div className="mock-landscape"><i /><i /><i /></div><div className="mock-photo-label">ROOTED IN THE HILLS</div><span className="mock-image-index">01 / 03</span></div>
                  </div>
                  <div className="mock-footer"><span>MADE FOR THE PEOPLE AROUND YOU</span><span>SCROLL TO EXPLORE ↓</span></div>
                </div>
              </div>
              <div className="hero-note note-bottom"><span className="note-icon">↗</span><div><strong>One clear place<br />to find your business.</strong><small>YOUR WEBSITE, WORKING FOR YOU</small></div></div>
              <div className="art-index">01 — 04</div>
            </div>
          </div>
          <div className="hero-bottom container"><span>GOOD BUSINESSES DESERVE GOOD WEBSITES.</span><a href="#why">WHY A WEBSITE? <span>↓</span></a></div>
        </section>

        <section className="intro-section section-pad" id="why">
          <div className="container">
            <div className="section-heading split-heading">
              <div><div className="eyebrow"><span className="section-marker">01</span> A STRONGER ONLINE PRESENCE</div><h2>Not just online.<br /><span>Easy to find. Easy to trust.</span></h2></div>
              <p>A social page is useful. A website gives your business a home of its own—one that works around your customers, day and night.</p>
            </div>
            <div className="benefit-grid">
              {benefits.map((item) => <article className="benefit-card" key={item.number}><span className="benefit-number">{item.number}</span><div className="benefit-icon" aria-hidden="true"><i /></div><h3>{item.title}</h3><p>{item.description}</p><span className="benefit-rule" /></article>)}
            </div>
            <div className="seo-note"><span className="note-star">✳</span><p><strong>Built with the basics in place.</strong> A clear structure can support search visibility, but no website can guarantee a particular Google ranking.</p><a href="#contact">Talk about your goals <Arrow /></a></div>
          </div>
        </section>

        <section className="services-section section-pad" id="services">
          <div className="container">
            <div className="section-heading">
              <div className="eyebrow"><span className="section-marker">02</span> WHAT WE BUILD</div>
              <div className="heading-row"><h2>A website that fits<br /><span>the way you work.</span></h2><p>From a simple introduction to a richer business website, choose a starting point that makes sense for you.</p></div>
            </div>
            <div className="service-grid">
              {services.map((service, index) => <article className={`service-card${index === 2 ? ' service-featured' : ''}`} key={service.id}>
                <div className="service-card-top"><span className="service-index">0{index + 1} / 07</span><span className="service-arrow"><Arrow diagonal /></span></div>
                <div className="service-glyph" aria-hidden="true"><i className={`glyph-${index + 1}`} /></div>
                <span className="service-suitable">{service.suitable}</span>
                <h3>{service.title}</h3><p>{service.description}</p>
                <a href={`#price-${service.id}`}>Explore pricing <Arrow /></a>
              </article>)}
            </div>
            <div className="custom-note"><span className="custom-icon">+</span><p><strong>Need something more advanced?</strong> Online payments, booking management, databases and admin panels are separate custom-development projects. Let’s talk about the scope.</p><a href="#contact">Discuss a custom project <Arrow diagonal /></a></div>
          </div>
        </section>

        <section className="work-section section-pad" id="work">
          <div className="container">
            <div className="section-heading work-heading">
              <div><div className="eyebrow"><span className="section-marker">03</span> A FEEL FOR WHAT’S POSSIBLE</div><h2>Three businesses.<br /><span>Three different stories.</span></h2></div>
              <p>Each business is different. These concept designs show how a website can be shaped around what you offer.</p>
            </div>
            <div className="concept-grid">
              {concepts.map((concept, index) => <article className={`concept-card ${concept.className}`} key={concept.title}>
                <div className="concept-preview">{concept.component}</div>
                <div className="concept-info"><div><span className="concept-type">{concept.type} <i>·</i> CONCEPT DESIGN</span><h3>{concept.title}</h3><p>{concept.description}</p></div><span className="concept-count">0{index + 1}</span></div>
              </article>)}
            </div>
            <p className="concept-disclaimer"><span /> Concept designs for demonstration only. These are not client projects or examples of completed work.</p>
          </div>
        </section>

        <section className="pricing-section section-pad" id="pricing">
          <div className="container">
            <div className="section-heading pricing-heading">
              <div><div className="eyebrow"><span className="section-marker">04</span> OUR RATES</div><h2>A clear starting point.<br /><span>A conversation from there.</span></h2></div>
              <p>Choose the type of website you’re looking for. We’ll discuss your needs and confirm a tailored quote before any work begins.</p>
            </div>
            <div className="pricing-grid">
              {services.map((service, index) => <article className={`price-card${index === 2 ? ' price-featured' : ''}`} id={`price-${service.id}`} key={service.id}>
                <div className="price-card-heading"><span>{service.title}</span><span className="price-card-number">0{index + 1}</span></div>
                <div className="price-amount">{service.price}</div>
                <p className="price-suitable">{service.suitable}</p>
                <p className="price-description">{service.description}</p>
                <ul>{service.includes.map((item) => <li key={item}><span>✓</span>{item}</li>)}</ul>
                <a className="price-cta" href={whatsappHref(`Hello, I'd like to ask about your ${service.title} service.`)} target="_blank" rel="noreferrer">Get in touch <Arrow diagonal /></a>
              </article>)}
            </div>
            <div className="pricing-footnotes"><p><span>01</span> Final price depends on the number of pages, design complexity, content and requested functionality.</p><p><span>02</span> Domain registration, hosting renewals, paid third-party services and ongoing maintenance may be charged separately when applicable.</p></div>
          </div>
        </section>

        <section className="process-section section-pad" id="process">
          <div className="container process-layout">
            <div className="process-intro"><div className="eyebrow"><span className="section-marker">05</span> HOW WE WORK</div><h2>Good work,<br /><span>without the guesswork.</span></h2><p>A simple process, with clear conversations along the way. You’ll know what’s happening before we move to the next step.</p><a className="text-link" href="#contact">Start with a conversation <Arrow diagonal /></a></div>
            <div className="process-list">{process.map(([number, title, description]) => <article className="process-step" key={number}><span className="process-number">{number}</span><div><h3>{title}</h3><p>{description}</p></div><span className="process-check" aria-hidden="true">↗</span></article>)}</div>
          </div>
        </section>

        <section className="faq-section section-pad" id="faq">
          <div className="container faq-layout">
            <div className="faq-intro"><div className="eyebrow"><span className="section-marker">06</span> GOOD TO KNOW</div><h2>Questions,<br /><span>answered simply.</span></h2><p>Something else on your mind? We’re happy to talk it through.</p><a href="#contact" className="text-link">Ask us directly <Arrow diagonal /></a></div>
            <div className="faq-list">
              {faqs.map(([question, answer], index) => <article className={`faq-item${openFaq === index ? ' faq-open' : ''}`} key={question}>
                <h3><button aria-expanded={openFaq === index} onClick={() => setOpenFaq(openFaq === index ? null : index)}>{question}<span aria-hidden="true">{openFaq === index ? '−' : '+'}</span></button></h3>
                <div className="faq-answer" hidden={openFaq !== index}><p>{answer}</p></div>
              </article>)}
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="contact-top container">
            <div className="eyebrow"><span className="section-marker">07</span> YOUR NEXT STEP</div>
            <div className="contact-main"><div><h2>Let’s make it<br /><span>easy to find you.</span></h2><p>Tell us a little about your business and what you have in mind. We’ll take it from there.</p></div><a className="contact-whatsapp" href={whatsappHref()} target="_blank" rel="noreferrer"><span className="whatsapp-mark">↗</span><span><small>CHAT WITH US ON WHATSAPP</small><strong>{business.whatsappNumber}</strong></span><Arrow diagonal /></a></div>
          </div>
          <div className="contact-details">
            <div className="container contact-details-grid">
              <div><span className="contact-label">EMAIL</span>{emailIsPlaceholder ? <span className="contact-value">{business.email}</span> : <a className="contact-value" href={`mailto:${business.email}`}>{business.email}<Arrow diagonal /></a>}</div>
              <div><span className="contact-label">BASED IN</span><span className="contact-value">{business.location}</span></div>
              <div><span className="contact-label">WORKING WITH</span><span className="contact-value">{business.serviceArea}</span></div>
              <div><span className="contact-label">BUILT BY</span><span className="contact-value">{business.founder}</span></div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-main">
          <div className="footer-brand-block"><Brand footer /><p>Thoughtful websites for small businesses ready to grow their online presence.</p><span className="footer-location"><i /> UNA, HIMACHAL PRADESH, INDIA</span></div>
          <div className="footer-nav"><span className="footer-heading">EXPLORE</span>{navItems.map(([label, href]) => <a key={href} href={href}>{label}</a>)}<a href="#process">How we work</a><a href="#faq">FAQs</a></div>
          <div className="footer-contact"><span className="footer-heading">SAY HELLO</span><a href={whatsappHref()} target="_blank" rel="noreferrer">WhatsApp <Arrow diagonal /></a>{!emailIsPlaceholder && <a href={`mailto:${business.email}`}>{business.email} <Arrow diagonal /></a>}<a href="#contact">{business.location}</a></div>
          <a className="back-top" href="#home" aria-label="Back to top">↑</a>
        </div>
        <div className="container footer-bottom"><span>© {new Date().getFullYear()} {business.name}. ALL RIGHTS RESERVED.</span><span>INDEPENDENT WEB DESIGN & DEVELOPMENT</span><a href="#home">BACK TO TOP ↑</a></div>
      </footer>
    </>
  )
}

export default App
