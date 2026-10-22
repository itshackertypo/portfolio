import { submitContactMessage } from './supabase-client.js'

const heroPhoto =
  'https://images.pexels.com/photos/26765065/pexels-photo-26765065.png?auto=compress&cs=tinysrgb&h=650&w=940'
const projectImages = {
  devConnect:
    'https://images.pexels.com/photos/256502/pexels-photo-256502.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  smartStudy:
    'https://images.pexels.com/photos/54284/pexels-photo-54284.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  dataInsights:
    'https://images.pexels.com/photos/97080/pexels-photo-97080.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
}

const skills = [
  { name: 'HTML & CSS', desc: 'Semantic markup and modern responsive layouts', icon: '🌐' },
  { name: 'JavaScript', desc: 'ES6+, DOM manipulation, and async patterns', icon: '⚡' },
  { name: 'React', desc: 'Component-based UI with hooks and state management', icon: '⚛️' },
  { name: 'Node.js', desc: 'Backend APIs with Express and RESTful design', icon: '🟢' },
  { name: 'Python', desc: 'Scripting, automation, and data processing', icon: '🐍' },
  { name: 'Git & GitHub', desc: 'Version control and collaborative workflows', icon: '🔧' },
  { name: 'SQL & Databases', desc: 'PostgreSQL, query optimization, and schema design', icon: '🗄️' },
  { name: 'DSA', desc: 'Strong foundations in data structures and algorithms', icon: '🧠' },
]

const projects = [
  {
    title: 'DevConnect',
    desc: 'A social platform for developers to share projects, collaborate, and find teammates. Built with React and Supabase.',
    image: projectImages.devConnect,
    github: 'https://github.com/lovewadhwa/devconnect',
  },
  {
    title: 'SmartStudy',
    desc: 'An AI-powered study companion app that creates flashcards and quizzes from notes. Built with React Native and Node.js.',
    image: projectImages.smartStudy,
    github: 'https://github.com/lovewadhwa/smartstudy',
  },
  {
    title: 'DataInsights',
    desc: 'A dashboard that visualizes real-world datasets with interactive charts and filters. Built with Python and React.',
    image: projectImages.dataInsights,
    github: 'https://github.com/lovewadhwa/datainsights',
  },
]

export function initPortfolio() {
  const app = document.querySelector('#app')
  app.innerHTML = renderApp()

  initNavigation()
  initContactForm()
  initScrollAnimations()
}

function renderApp() {
  return `
    <nav class="navbar" id="navbar">
      <div class="nav-container">
        <a href="#hero" class="nav-logo">Love Wadhwa</a>
        <button class="nav-toggle" id="navToggle" aria-label="Toggle menu">
          <span></span><span></span><span></span>
        </button>
        <ul class="nav-links" id="navLinks">
          <li><a href="#hero">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>

    <section class="hero" id="hero">
      <div class="hero-content">
        <div class="hero-text">
          <p class="hero-greeting">Hi, I'm</p>
          <h1 class="hero-name">Love Wadhwa</h1>
          <p class="hero-tagline">B.Tech CSE Student & Aspiring Full-Stack Developer</p>
          <p class="hero-desc">Passionate about building elegant, efficient, and user-friendly software that solves real problems. Always learning, always building.</p>
          <div class="hero-buttons">
            <a href="#projects" class="btn btn-primary">View My Work</a>
            <a href="#contact" class="btn btn-outline">Get in Touch</a>
          </div>
        </div>
        <div class="hero-photo-wrapper">
          <div class="hero-photo-ring">
            <img src="${heroPhoto}" alt="Tech code visual" class="hero-photo" />
          </div>
        </div>
      </div>
      <a href="#about" class="scroll-indicator" aria-label="Scroll down">
        <span></span>
      </a>
    </section>

    <section class="section" id="about">
      <div class="container">
        <h2 class="section-title">About Me</h2>
        <div class="about-grid">
          <div class="about-card reveal">
            <p>
              I'm Love Wadhwa, a B.Tech Computer Science & Engineering student with a deep interest in
              web development, problem-solving, and building things that live on the internet.
            </p>
            <p>
              My journey in tech began with curiosity — taking apart how websites work, then learning
              to build them myself. I've since developed skills across the full stack, from crafting
              pixel-perfect frontends to designing efficient backend systems.
            </p>
            <p>
              Beyond academics, I actively work on personal projects, contribute to open-source, and
              participate in hackathons. I believe in writing clean code, learning continuously, and
              collaborating with others to create meaningful impact.
            </p>
          </div>
          <div class="about-stats reveal">
            <div class="stat-item">
              <span class="stat-number">3+</span>
              <span class="stat-label">Years Coding</span>
            </div>
            <div class="stat-item">
              <span class="stat-number">10+</span>
              <span class="stat-label">Projects Built</span>
            </div>
            <div class="stat-item">
              <span class="stat-number">5+</span>
              <span class="stat-label">Hackathons</span>
            </div>
            <div class="stat-item">
              <span class="stat-number">8</span>
              <span class="stat-label">Technologies</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section section-alt" id="skills">
      <div class="container">
        <h2 class="section-title">Skills & Expertise</h2>
        <p class="section-subtitle">Technologies I work with every day</p>
        <div class="skills-grid">
          ${skills.map((s, i) => `
            <div class="skill-card reveal" style="transition-delay:${i * 80}ms">
              <span class="skill-icon">${s.icon}</span>
              <h3 class="skill-name">${s.name}</h3>
              <p class="skill-desc">${s.desc}</p>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <section class="section" id="projects">
      <div class="container">
        <h2 class="section-title">Featured Projects</h2>
        <p class="section-subtitle">A selection of things I've built</p>
        <div class="projects-grid">
          ${projects.map((p, i) => `
            <article class="project-card reveal" style="transition-delay:${i * 120}ms">
              <div class="project-image">
                <img src="${p.image}" alt="${p.title} project screenshot" loading="lazy" />
              </div>
              <div class="project-body">
                <h3 class="project-title">${p.title}</h3>
                <p class="project-desc">${p.desc}</p>
                <a href="${p.github}" target="_blank" rel="noopener noreferrer" class="project-link">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                    <path d="M12 .5C5.37.5 0 5.78 0 12.29c0 5.21 3.44 9.63 8.21 11.19.6.11.82-.25.82-.56 0-.28-.01-1.02-.02-2-3.34.71-4.04-1.58-4.04-1.58-.55-1.37-1.34-1.74-1.34-1.74-1.09-.73.08-.72.08-.72 1.2.08 1.84 1.21 1.84 1.21 1.07 1.8 2.81 1.28 3.5.98.11-.76.42-1.28.76-1.57-2.67-.3-5.47-1.3-5.47-5.79 0-1.28.47-2.33 1.24-3.15-.12-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.2a11.6 11.6 0 0 1 6 0c2.29-1.52 3.3-1.2 3.3-1.2.66 1.65.24 2.87.12 3.17.77.82 1.24 1.87 1.24 3.15 0 4.5-2.81 5.48-5.49 5.78.43.36.81 1.08.81 2.18 0 1.57-.01 2.84-.01 3.23 0 .31.22.68.83.56C20.56 21.91 24 17.5 24 12.29 24 5.78 18.63.5 12 .5z"/>
                  </svg>
                  View on GitHub
                </a>
              </div>
            </article>
          `).join('')}
        </div>
      </div>
    </section>

    <section class="section section-alt" id="contact">
      <div class="container">
        <h2 class="section-title">Get in Touch</h2>
        <p class="section-subtitle">Have a project idea or just want to say hi? Drop me a message.</p>
        <form class="contact-form reveal" id="contactForm">
          <div class="form-row">
            <div class="form-group">
              <label for="name">Name</label>
              <input type="text" id="name" name="name" required placeholder="Your name" />
            </div>
            <div class="form-group">
              <label for="email">Email</label>
              <input type="email" id="email" name="email" required placeholder="you@example.com" />
            </div>
          </div>
          <div class="form-group">
            <label for="message">Message</label>
            <textarea id="message" name="message" rows="5" required placeholder="Tell me about your project or just say hello..."></textarea>
          </div>
          <button type="submit" class="btn btn-primary form-submit" id="submitBtn">
            Send Message
          </button>
          <p class="form-status" id="formStatus"></p>
        </form>
      </div>
    </section>

    <footer class="footer">
      <div class="container footer-container">
        <div class="footer-grid">
          <div class="footer-col footer-col-brand">
            <a href="#hero" class="footer-logo">
              <span class="footer-logo-text">Vatsal Garg</span>
              <span class="footer-logo-dot">.</span>
            </a>
            <p class="footer-tagline">
              B.Tech Computer Science &amp; Engineering student passionate about building elegant, scalable software and interactive web applications.
            </p>
            <div class="footer-status-badge">
              <span class="status-pulse"></span>
              <span>Open for internships &amp; collaboration</span>
            </div>
          </div>

          <div class="footer-col">
            <h4 class="footer-heading">Quick Links</h4>
            <ul class="footer-links">
              <li><a href="#hero">Home</a></li>
              <li><a href="#about">About Me</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div class="footer-col">
            <h4 class="footer-heading">Connect</h4>
            <ul class="footer-links">
              <li>
                <a href="https://github.com/itshackertypo" target="_blank" rel="noopener noreferrer">
                  GitHub (@itshackertypo)
                </a>
              </li>
              <li>
                <a href="https://github.com/itshackertypo/portfolio" target="_blank" rel="noopener noreferrer">
                  Portfolio Repository
                </a>
              </li>
              <li>
                <a href="https://linkedin.com/in/vatsalgarg" target="_blank" rel="noopener noreferrer">
                  LinkedIn Profile
                </a>
              </li>
              <li>
                <a href="#contact">Get In Touch</a>
              </li>
            </ul>
          </div>

          <div class="footer-col footer-col-connect">
            <h4 class="footer-heading">Follow Along</h4>
            <p class="footer-col-subtext">Check out my latest open-source projects, algorithms, and experiments.</p>
            <div class="footer-socials">
              <a href="https://github.com/itshackertypo" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                  <path d="M12 .5C5.37.5 0 5.78 0 12.29c0 5.21 3.44 9.63 8.21 11.19.6.11.82-.25.82-.56 0-.28-.01-1.02-.02-2-3.34.71-4.04-1.58-4.04-1.58-.55-1.37-1.34-1.74-1.34-1.74-1.09-.73.08-.72.08-.72 1.2.08 1.84 1.21 1.84 1.21 1.07 1.8 2.81 1.28 3.5.98.11-.76.42-1.28.76-1.57-2.67-.3-5.47-1.3-5.47-5.79 0-1.28.47-2.33 1.24-3.15-.12-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.2a11.6 11.6 0 0 1 6 0c2.29-1.52 3.3-1.2 3.3-1.2.66 1.65.24 2.87.12 3.17.77.82 1.24 1.87 1.24 3.15 0 4.5-2.81 5.48-5.49 5.78.43.36.81 1.08.81 2.18 0 1.57-.01 2.84-.01 3.23 0 .31.22.68.83.56C20.56 21.91 24 17.5 24 12.29 24 5.78 18.63.5 12 .5z"/>
                </svg>
              </a>
              <a href="https://linkedin.com/in/vatsalgarg" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                  <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z"/>
                </svg>
              </a>
              <a href="#contact" aria-label="Send direct message">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div class="footer-divider"></div>

        <div class="footer-bottom">
          <p class="footer-copy">&copy; ${new Date().getFullYear()} Vatsal Garg. All rights reserved.</p>
          <div class="footer-bottom-meta">
            <span class="footer-built">Crafted with <span class="heart-pulse">❤️</span> by Vatsal Garg</span>
            <a href="#hero" class="back-to-top" id="backToTop" aria-label="Back to top">
              <span>Back to top</span>
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="18 15 12 9 6 15"></polyline>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  `
}

function initNavigation() {
  const navbar = document.getElementById('navbar')
  const navToggle = document.getElementById('navToggle')
  const navLinks = document.getElementById('navLinks')

  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('nav-open')
    navToggle.classList.toggle('active')
  })

  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('nav-open')
      navToggle.classList.remove('active')
    })
  })

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('navbar-scrolled')
    } else {
      navbar.classList.remove('navbar-scrolled')
    }
  })

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      const target = document.querySelector(anchor.getAttribute('href'))
      if (target) {
        e.preventDefault()
        target.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    })
  })
}

function initContactForm() {
  const form = document.getElementById('contactForm')
  const submitBtn = document.getElementById('submitBtn')
  const status = document.getElementById('formStatus')

  form.addEventListener('submit', async (e) => {
    e.preventDefault()
    submitBtn.disabled = true
    submitBtn.textContent = 'Sending...'
    status.textContent = ''
    status.className = 'form-status'

    const name = form.name.value.trim()
    const email = form.email.value.trim()
    const message = form.message.value.trim()

    const { error } = await submitContactMessage(name, email, message)

    if (error) {
      status.textContent = 'Something went wrong. Please try again.'
      status.classList.add('form-error')
      submitBtn.disabled = false
      submitBtn.textContent = 'Send Message'
    } else {
      status.textContent = 'Thanks! Your message has been sent.'
      status.classList.add('form-success')
      form.reset()
      submitBtn.disabled = false
      submitBtn.textContent = 'Send Message'
    }
  })
}

function initScrollAnimations() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        }
      })
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  )

  document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
}
