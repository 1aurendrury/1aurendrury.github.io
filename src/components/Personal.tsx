import { motion } from 'framer-motion'

const personalItems = [
  {
    label: 'Goose',
    id: 'cat',
    paragraphs: [
      'My cat, Goose, is a 3 year old black cat. He is my everything and I will talk about him with anyone who will listen!',
    ],
  },
  {
    label: 'Liverpool',
    id: 'liverpool',
    paragraphs: [
      'I am a diehard Liverpool fan. Come talk to me about how Florian Wirtz is the best player in the world, or about how Mohamed Salah is the best Premier League player of all time. YNWA.'
    ],
  },
  {
    label: 'Misc',
    id: 'misc',
    paragraphs: [
      'Outside of tech, I love to DJ, run, and enjoy a good nature walk. Pictured above is Pond Meadow in Braintree, MA.',
    ],
  },
] as const

export default function Personal() {
  return (
    <section
      id="personal"
      style={{
        padding: 'clamp(6rem, 12vw, 10rem) 2rem',
        borderTop: '1px solid var(--border)',
        borderBottom: '1px solid var(--border)',
        background: 'var(--surface)',
      }}
    >
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          style={{ marginBottom: 'clamp(3rem, 6vw, 5rem)', textAlign: 'left' }}
        >
          <p
            style={{
              color: 'var(--accent)',
              fontSize: '0.78rem',
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              marginBottom: '1rem',
            }}
          >
            04 — Personal
          </p>
          <h2
            style={{
              fontSize: 'clamp(2.2rem, 5vw, 3.5rem)',
              lineHeight: 1.1,
            }}
          >
            My Life
          </h2>
        </motion.div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
            gap: '2rem',
          }}
        >
          {personalItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
              }}
            >
              <div
                style={{
                  borderRadius: '4px',
                  border: '1px solid var(--border)',
                  overflow: 'hidden',
                  background: '#050505',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  aspectRatio: '4 / 4',
                }}
              >
                {item.id === 'cat' && (
                  <img
                    src="/images/goose.jpeg"
                    alt="Goose, my cat"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                )}
                {item.id === 'liverpool' && (
                  <img
                    src="/images/lfc.jpg"
                    alt="Liverpool FC title celebration"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                )}
                {item.id === 'misc' && (
                  <img
                    src="/images/water.jpeg"
                    alt="Pond Meadow"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                )}
              </div>

              <div
                style={{
                  border: '1px solid var(--border)',
                  borderRadius: '2px',
                  padding: '1.25rem 1.5rem',
                  background: 'rgba(8,8,8,0.8)',
                  minHeight: '120px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.5rem',
                }}
              >
                <h3
                  style={{
                    fontSize: '1rem',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: 'var(--muted)',
                  }}
                >
                  {item.label}
                </h3>
                {item.paragraphs.map((text, i) => (
                  <p
                    key={i}
                    style={{
                      color: 'var(--muted)',
                      fontSize: '0.9rem',
                      lineHeight: 1.8,
                      marginTop: i === 0 ? '0.25rem' : '0.75rem',
                    }}
                  >
                    {text}
                  </p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}