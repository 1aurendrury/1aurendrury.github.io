import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section id="contact" style={{
      padding: 'clamp(6rem, 12vw, 10rem) 2rem clamp(4rem, 8vw, 6rem)',
      background: 'var(--surface)',
      borderTop: '1px solid var(--border)',
    }}>
      <div style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center' }}>
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <p style={{ color: 'var(--accent)', fontSize: '0.78rem', letterSpacing: '0.25em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>
            05 — Contact
          </p>
          <h2 style={{ fontSize: 'clamp(2.5rem, 7vw, 5rem)', lineHeight: 1.05, marginBottom: '1.5rem' }}>
            Let's Connect
          </h2>
          <p style={{ color: 'var(--muted)', lineHeight: 1.9, fontSize: '1rem', maxWidth: 500, margin: '0 auto 3rem' }}>
            I'm always open to new opportunities, collaborations, or just a friendly chat about tech. Please don't hesitate to reach out! A LinkedIn message is the best way to contact me.
          </p>

          <a
            href="https://linkedin.com/in/1aurendrury"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-block',
              background: 'var(--accent)',
              color: '#080808',
              padding: '0.9rem 2.5rem',
              borderRadius: '2px',
              textDecoration: 'none',
              fontSize: '0.85rem',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              fontWeight: 500,
              transition: 'opacity 0.2s',
              marginBottom: '4rem',
            }}
            onMouseEnter={e => (e.currentTarget.style.opacity = '0.85')}
            onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
          >
            Say Hello →
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          style={{
            borderTop: '1px solid var(--border)',
            paddingTop: '2.5rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1rem',
          }}
        >
          <p style={{ color: 'var(--muted)', fontSize: '0.8rem' }}>
            © {new Date().getFullYear()} Lauren Drury. All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            {[
              { label: 'GitHub', href: 'https://github.com/1aurendrury' },
              { label: 'LinkedIn', href: 'https://linkedin.com/in/1aurendrury' },
            ].map(link => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'var(--muted)', textDecoration: 'none', fontSize: '0.8rem', transition: 'color 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--muted)')}
              >
                {link.label}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}