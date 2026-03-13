import { motion } from 'framer-motion'

interface Project {
  title: string
  description: string
  tags: string[]
  github?: string
  live?: string
  year: string
}

const projects: Project[] = [
  {
    title: 'Mini Spotify Wrapped',
    description: 'Constructed a Twitter bot using Spotify and Twitter APIs with Typescript to tweet out song information and a link each time a specific user listens to a new song on Spotify, providing real time updates to followers.\nAccumulated user data through a Python script that creates a Monthly Recap playlist on the user’s account each month, featuring their most listened to songs in the past 30 days and giving insight into their music taste.\nDeployed codebase to an AWS EC2 instance to enable continuous data collection and Twitter updates, utilized a PostgreSQL database for data storage, and developed an interactive UI to explore listening habits with React.',
    tags: ['React', 'Node.js', 'PostgreSQL', 'TypeScript', 'Python', 'AWS', 'Twitter API', 'Spotify API'],
    year: '2023 - Present',
  },
  {
    title: 'Credit Card Rewards Maximizer',
    description: 'Built a reinforcement learning system using Q-learning to optimize credit card usage by selecting the most rewarding card (cashback, points, or both) for each user transaction.\nDesigned a custom Gym environment with discrete state tuples of transaction category and amount bucket, enabling the agent to learn spending patterns and reward structures across thousands of training episodes.\nDeveloped a realistic credit card recommendation model that balances reward maximization with practical constraints such as annual fees and limiting the total number of cards a user needs to manage.\nProject for CS4100: Artificial Intelligence.',
    tags: ['Python', 'Scikit-learn', 'Pandas', 'Matplotlib', 'Reinforcement Learning', 'Q-learning', 'Gym', 'Streamlit'],
    github: 'https://github.com/1aurendrury/credit-card-reward-maximizer',
    year: '2025',
  },
  {
    title: 'Football Penalty Shootout',
    description: 'Developed a penalty shootout game with sudden death overtime in C++ that allows the user to play against an AI opponent.',
    tags: ['C++', 'OOP', 'Algorithms', 'Data Structures', 'Memory Management'],
    year: '2025',
  },
  {
    title: 'Escape the Castle',
    description: 'Built a reinforcement learning agent to navigate a dynamic 7x7 grid environment, learning optimal strategies for movement, combat, and evasion against randomized guards and obstacles to escape a castle.',
    tags: ['Python', 'NumPy', 'Reinforcement Learning', 'Q-learning', 'Gym', 'Matplotlib', 'PyTorch', 'Seaborn', 'Pandas', 'AI'],
    year: '2025',
  },
  {
    title: 'Shapeshifting Coloring Problems',
    description: 'Developed an AI agent using first-choice local search to solve a constraint-based grid coloring problem, ensuring no two adjacent cells share a color while minimizing the total number of colors and shapes used.',
    tags: ['Python', 'PyGame', 'NumPy', 'AI', ],
    year: '2025',
  },
  {
    title: 'VAR Check',
    description: 'Currently working on a desktop game titled "VAR Review", where the user is given a segment of a football game with multiple angles and must determine what the given on-field decision was. Football segment changes daily, and the user can review their decision history as well.',
    tags: ['Typescript', 'React', 'Node.js', 'PostgreSQL', 'Python', 'Docker', 'Vercel'],
    year: 'Present',
  },
]

export default function Projects() {
  return (
    <section id="projects" style={{
      padding: 'clamp(6rem, 12vw, 10rem) 2rem',
      background: 'var(--surface)',
      borderTop: '1px solid var(--border)',
      borderBottom: '1px solid var(--border)',
    }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          style={{ marginBottom: 'clamp(3rem, 6vw, 5rem)' }}
        >
          <p style={{ color: 'var(--accent)', fontSize: '0.78rem', letterSpacing: '0.25em', textTransform: 'uppercase', marginBottom: '1rem' }}>
            02 — Projects
          </p>
          <h2 style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', lineHeight: 1.1 }}>
            Selected Projects
          </h2>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 480px), 1fr))',
          gap: '1.5px',
          background: 'var(--border)',
          border: '1px solid var(--border)',
        }}>
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ background: 'rgba(200,169,110,0.03)' }}
              style={{
                background: 'var(--surface)',
                padding: 'clamp(1.75rem, 4vw, 2.5rem)',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.25rem',
                cursor: 'default',
                transition: 'background 0.3s',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div>
                  <p style={{ color: 'var(--muted)', fontSize: '0.72rem', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>
                    {project.year}
                  </p>
                  <h3 style={{ fontSize: 'clamp(1.2rem, 2.5vw, 1.5rem)', fontFamily: 'DM Serif Display, serif', fontWeight: 400 }}>
                    {project.title}
                  </h3>
                </div>
                <div style={{ display: 'flex', gap: '0.75rem', flexShrink: 0, marginLeft: '1rem' }}>
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer"
                      style={{ color: 'var(--muted)', textDecoration: 'none', fontSize: '0.78rem', letterSpacing: '0.05em', transition: 'color 0.2s' }}
                      onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent)')}
                      onMouseLeave={e => (e.currentTarget.style.color = 'var(--muted)')}
                    >
                      GitHub ↗
                    </a>
                  )}
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noopener noreferrer"
                      style={{ color: 'var(--muted)', textDecoration: 'none', fontSize: '0.78rem', letterSpacing: '0.05em', transition: 'color 0.2s' }}
                      onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent)')}
                      onMouseLeave={e => (e.currentTarget.style.color = 'var(--muted)')}
                    >
                      Live ↗
                    </a>
                  )}
                </div>
              </div>

              <p style={{ color: 'var(--muted)', lineHeight: 1.8, fontSize: '0.9rem', flexGrow: 1 }}>
                {project.description}
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {project.tags.map(tag => (
                  <span key={tag} style={{
                    border: '1px solid var(--border)',
                    color: 'var(--muted)',
                    fontSize: '0.72rem',
                    padding: '0.25rem 0.65rem',
                    borderRadius: '1px',
                    letterSpacing: '0.05em',
                  }}>
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          style={{ marginTop: '2.5rem', textAlign: 'center' }}
        >
          <a
            href="https://github.com/1aurendrury"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: 'var(--muted)',
              textDecoration: 'none',
              fontSize: '0.85rem',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              borderBottom: '1px solid var(--border)',
              paddingBottom: '2px',
              transition: 'color 0.2s, border-color 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.color = 'var(--accent)'; e.currentTarget.style.borderColor = 'var(--accent)' }}
            onMouseLeave={e => { e.currentTarget.style.color = 'var(--muted)'; e.currentTarget.style.borderColor = 'var(--border)' }}
          >
            View all on GitHub ↗
          </a>
        </motion.div>
      </div>
    </section>
  )
}