import { motion } from 'framer-motion'

interface ResumeEntry {
  role: string
  org: string
  location: string
  period: string
  bullets: string[]
}

interface EducationEntry {
  degree: string
  school: string
  location: string
  period: string
  bullets: string[]
}

const experience: ResumeEntry[] = [
  {
    role: 'Software Engineer Co-Op',
    org: 'Claim, a Sequoia-backed Series A Fintech Startup',
    location: 'Boston, MA',
    period: 'January 2025 – August 2025',
    bullets: [
      'Developed a secure end-to-end automatic workflow to aggregate all user conversions and invoice partner brands via Stripe monthly with 100% accuracy.',
      'Led the development and maintenance of over 30+ internal business-critical dashboards using SQL and Python to monitor user statistics and assess app performance for current and prospective brand partners.',
      'Developed and thoroughly tested GraphQL endpoints for brand and user location querying during Claim\'s city expansion.',
    ],
  },
  {
    role: 'Software Developer and CAD Assistant Co-Op',
    org: 'Walsh Mechanical Contractors',
    location: 'Abington, MA',
    period: 'January 2024 – August 2024',
    bullets: [
      'Developed and thoroughly tested two in-house applications for equipment ordering between field and warehouse units, decreasing ordering and delivery times by 40%.',
      'Wrote numerous AutoCAD scripts to correctly label item lengths, eliminating the need for manual labeling.',
      'Constructed a Python script to correctly format and filter Excel sheets for item lists at job sites based on their type, measurements, and quantity.',
    ],
  },
  {
    role: 'Lead Teaching Assistant',
    org: 'Northeastern University',
    location: 'Boston, MA',
    period: 'August 2023/2024/2025 – December 2023/2024/2025',
    bullets: [
      'Fundamentals of Computer Science I & Program Design and Implementation I',
      'Led weekly labs for 36 students, reviewing the current week’s material and providing one-on-one support as needed.',
      'Held 4+ office hours each week, assisting students with their homework and concepts such as recursion, abstraction, mutable data, and trees.',
      'Graded assignments and exams, giving detailed feedback to 30+ students weekly.',
      'Developed and reviewed assignments, labs, and autograder scripts with fellow teaching assistants and instructors.',
    ],
  },
]

const education: EducationEntry[] = [
  {
    degree: 'Bachelor of Science in Computer Science',
    school: 'Northeastern University',
    location: 'Boston, MA',
    period: 'September 2022 – December 2025',
    bullets: [
      'Khoury College of Computer Sciences Graduate with a Concentration in Software',
      'Cum Laude | Dean\'s List',
      'Relevant coursework: Object Oriented Design, Algorithms and Data, Database Design, Computer Systems, Fundamentals of Software Engineering, Artificial Intelligence, and Network Fundamentals',
    ],
  },
  {
    degree: 'Former Bachelor of Science Candidate in Chemical Engineering',
    school: 'University of Massachusetts Amherst',
    location: 'Amherst, MA',
    period: 'August 2021 – May 2022',
    bullets: [
      'College of Engineering',
      'Studied chemical engineering and process design for two semesters before transferring to Northeastern University to pursue a degree in computer science'
    ],
  },
  {
    degree: 'High School Graduate',
    school: 'Weymouth High School',
    location: 'Weymouth, MA',
    period: 'September 2017 – June 2021',
    bullets: [
      'Activities and societies: Member of National Honor Society, World Language Honor Society, and Rotary Club',
      'Graduated with a 4.0/4.6 UW/W GPA',
    ],
  },

]

type TimelineEntry = {
  heading: string
  subheading: string
  location: string
  period: string
  bullets: string[]
  periodBelow?: boolean
}

const experienceTimeline: TimelineEntry[] = experience.map((entry) => ({
  heading: entry.role,
  subheading: entry.org,
  location: entry.location,
  period: entry.period,
  bullets: entry.bullets,
}))

const educationTimeline: TimelineEntry[] = education.map((entry) => ({
  heading: entry.degree,
  subheading: entry.school,
  location: entry.location,
  period: entry.period,
  bullets: entry.bullets,
  periodBelow: entry.degree === 'High School Graduate',
}))

function Timeline({ entries }: { entries: TimelineEntry[] }) {
  return (
    <div style={{ position: 'relative' }}>
      <div style={{
        position: 'absolute',
        left: 0,
        top: 8,
        bottom: 8,
        width: '1px',
        background: 'var(--border)',
      }} />
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem', paddingLeft: '2rem' }}>
        {entries.map((entry, i) => (
          <motion.div
            key={`${entry.heading}-${i}`}
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            style={{ position: 'relative' }}
          >
            <div style={{
              position: 'absolute',
              left: '-2.5rem',
              top: 7,
              width: 8,
              height: 8,
              borderRadius: '50%',
              background: 'var(--accent)',
              border: '2px solid var(--bg)',
              boxShadow: '0 0 0 1px var(--accent)',
            }} />

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.6rem', marginBottom: '0.8rem' }}>
              <div>
                <h3 style={{ fontSize: '1.3rem', fontFamily: 'DM Serif Display, serif', fontWeight: 400, color: 'var(--accent)', margin: 0 }}>
                  {entry.subheading}
                </h3>
                <p style={{ color: '#ffffff', fontSize: '1.1rem', margin: '0.2rem 0 0' }}>
                  {entry.heading}
                </p>
                <p style={{ color: '#ffffff', fontSize: '1rem', margin: '0.2rem 0 0' }}>
                  {entry.location}
                </p>
                <p style={{ color: '#ffffff', fontSize: '1rem', margin: '0.2rem 0 0' }}>{entry.period}</p>
              </div>
            </div>

            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.35rem', margin: 0 }}>
              {entry.bullets.map((b, j) => (
                <li key={j} style={{ color: '#ffffff', fontSize: '0.95rem', lineHeight: 1.7, paddingLeft: '1rem', position: 'relative' }}>
                  <span style={{ position: 'absolute', left: 0, color: 'var(--accent)' }}>–</span>
                  {b}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default function Resume() {
  return (
    <section id="resume" style={{ padding: 'clamp(6rem, 12vw, 10rem) 2rem' }}>
      <div style={{ maxWidth: 1250, margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1.5rem', marginBottom: 'clamp(3rem, 6vw, 5rem)' }}
        >
          <div>
            <p style={{ color: '#ffffff', fontSize: '0.8rem', letterSpacing: '0.25em', textTransform: 'uppercase', marginBottom: '1rem' }}>
              03 — Resume
            </p>
            <h2 style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', lineHeight: 1.1, color: '#ffffff' }}>
              Experience &<br />Education
            </h2>
          </div>
          <a
          href="/LaurenDruryResume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download="Lauren-Drury-Resume.pdf"
            style={{
              border: '1px solid var(--border)',
              color: '#ffffff',
              padding: '0.75rem 1.75rem',
              borderRadius: '2px',
              textDecoration: 'none',
              fontSize: '0.85rem',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              transition: 'border-color 0.2s, color 0.2s',
              flexShrink: 0,
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.color = 'var(--accent)' }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = '#ffffff' }}
          >
            Download Resume ↓
          </a>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 460x), 1fr))', gap: 'clamp(3rem, 6vw, 5rem)' }}>
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              style={{ color: '#ffffff', fontSize: '1.4rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '2rem' }}
            >
              Work Experience
            </motion.p>
            <Timeline entries={experienceTimeline} />
          </div>
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              style={{ color: '#ffffff', fontSize: '1.4rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '2rem' }}
            >
              Education
            </motion.p>
            <Timeline entries={educationTimeline} />
          </div>
        </div>
      </div>
    </section>
  )
}