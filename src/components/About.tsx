import { motion } from 'framer-motion'
import { useFadeIn } from '../hooks/useFadeIn'

const languages = [
  'TypeScript',
  'JavaScript',
  'Python',
  'C',
  'C++',
  'Java',
  'SQL',
  'HTML/CSS',
]

const frameworksAndLibraries = [
  'React',
  'Next.js',
  'Node.js',
  'Tailwind',
  'PyTorch',
  'TensorFlow',
  'Pandas',
  'Matplotlib',
  'Seaborn',
  'REST APIs',
]

const toolsAndSoftware = [
  'Git',
  'GitHub',
  'Docker',
  'Kubernetes',
  'MongoDB',
  'MySQL',
  'PostgreSQL',
  'AWS',
  'Prisma',
  'GraphQL',
  'Jest',
  'JUnit',
  'macOS',
  'Windows',
]

function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const { ref, inView } = useFadeIn()
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  )
}

export default function About() {
  return (
    <section id="about" style={{ padding: 'clamp(6rem, 12vw, 10rem) 2rem', maxWidth: 1100, margin: '0 auto' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 440px), 1fr))', gap: '5rem', alignItems: 'start' }}>
        <div>
          <FadeIn>
            <p style={{ color: 'var(--accent)', fontSize: '0.78rem', letterSpacing: '0.25em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>
              01 — About
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', lineHeight: 1.1, marginBottom: '2rem' }}>
            Software Engineer & Data Enthusiast
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p style={{ color: 'var(--muted)', lineHeight: 1.9, fontSize: '1rem', marginBottom: '1.5rem' }}>
            I am a recent computer science graduate from Northeastern University. After a year at UMass Amherst, where I studied chemical engineering, I developed a passion for computer science while coding in MATLAB and decided to pursue it full time at Northeastern. Here, I concentrated in software and I aim to continue working in software and data engineering in the future.
            </p>
          </FadeIn>
          <FadeIn delay={0.25}>
            <p style={{ color: 'var(--muted)', lineHeight: 1.9, fontSize: '1rem', marginBottom: '2.5rem' }}>
            Beyond the classroom, I bring 16 months of full-time experience in both software and data engineering, most recently at Claim, a Sequoia-backed Series A fintech startup. I enjoy working at the intersection of data and software, building scalable systems that not only support rapid growth but also provide a strong technical foundation for the future.            </p>
          </FadeIn>
          <FadeIn delay={0.25}>
            <p style={{ color: 'var(--muted)', lineHeight: 1.9, fontSize: '1rem', marginBottom: '2.5rem' }}>
            In my free time, I love DJing and making my own mixes across all genres, from house music to hip-hop! I also enjoy weightlifting, spending time with my cat, finding good sushi spots, and cheering on Liverpool in the Premier League.
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <div style={{ display: 'flex', gap: '1.5rem' }}>
              <a href="https://github.com/1aurendrury" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--muted)', textDecoration: 'none', fontSize: '0.85rem', letterSpacing: '0.05em', transition: 'color 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--muted)')}
              >
                GitHub ↗
              </a>
              <a href="https://linkedin.com/in/1aurendrury" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--muted)', textDecoration: 'none', fontSize: '0.85rem', letterSpacing: '0.05em', transition: 'color 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--muted)')}
              >
                LinkedIn ↗
              </a>
            </div>
          </FadeIn>
        </div>

        <div>
          <div style={{ display: 'grid', gap: '2rem' }}>
            <div>
              <p style={{ color: 'var(--muted)', fontSize: '0.8rem', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
                Languages
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                {languages.map((language, i) => (
                  <motion.div
                    key={language}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.05 + 0.1, ease: [0.16, 1, 0.3, 1] }}
                    style={{
                      border: '1px solid var(--border)',
                      borderRadius: '2px',
                      padding: '0.75rem 1rem',
                      fontSize: '0.85rem',
                      color: 'var(--muted)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.75rem',
                      transition: 'border-color 0.25s, color 0.25s',
                      cursor: 'default',
                    }}
                    whileHover={{ borderColor: 'rgba(200,169,110,0.4)', color: 'var(--text)' }}
                  >
                    <span style={{ width: 4, height: 4, borderRadius: '50%', background: 'var(--accent)', flexShrink: 0 }} />
                    {language}
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <p style={{ color: 'var(--muted)', fontSize: '0.8rem', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
                Frameworks &amp; Libraries
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                {frameworksAndLibraries.map((framework, i) => (
                  <motion.div
                    key={framework}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.05 + 0.1, ease: [0.16, 1, 0.3, 1] }}
                    style={{
                      border: '1px solid var(--border)',
                      borderRadius: '2px',
                      padding: '0.75rem 1rem',
                      fontSize: '0.85rem',
                      color: 'var(--muted)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.75rem',
                      transition: 'border-color 0.25s, color 0.25s',
                      cursor: 'default',
                    }}
                    whileHover={{ borderColor: 'rgba(200,169,110,0.4)', color: 'var(--text)' }}
                  >
                    <span style={{ width: 4, height: 4, borderRadius: '50%', background: 'var(--accent)', flexShrink: 0 }} />
                    {framework}
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <p style={{ color: 'var(--muted)', fontSize: '0.8rem', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
                OS &amp; Software
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                {toolsAndSoftware.map((tool, i) => (
                  <motion.div
                    key={tool}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.05 + 0.1, ease: [0.16, 1, 0.3, 1] }}
                    style={{
                      border: '1px solid var(--border)',
                      borderRadius: '2px',
                      padding: '0.75rem 1rem',
                      fontSize: '0.85rem',
                      color: 'var(--muted)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.75rem',
                      transition: 'border-color 0.25s, color 0.25s',
                      cursor: 'default',
                    }}
                    whileHover={{ borderColor: 'rgba(200,169,110,0.4)', color: 'var(--text)' }}
                  >
                    <span style={{ width: 4, height: 4, borderRadius: '50%', background: 'var(--accent)', flexShrink: 0 }} />
                    {tool}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}