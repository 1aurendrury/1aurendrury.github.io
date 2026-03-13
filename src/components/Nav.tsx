import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Resume', href: '#resume' },
  { label: 'Personal', href: '#personal' },
  { label: 'Contact', href: '#contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          padding: '0 2rem',
          height: '64px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          transition: 'background 0.4s, backdrop-filter 0.4s',
          background: scrolled ? 'rgba(8,8,8,0.85)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid var(--border)' : 'none',
        }}
      >
        <a href="#hero" style={{ fontFamily: 'DM Serif Display, serif', fontSize: '1.15rem', color: 'var(--accent)', textDecoration: 'none', letterSpacing: '0.02em' }}>
          LD
        </a>

        <div style={{ display: 'flex', gap: '2.5rem' }} className="hidden-mobile">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              style={{
                color: 'var(--muted)',
                textDecoration: 'none',
                fontSize: '0.85rem',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                transition: 'color 0.2s',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--text)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--muted)')}
            >
              {l.label}
            </a>
          ))}
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="show-mobile"
          style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text)', padding: '8px', display: 'none' }}
        >
          <div style={{ width: 22, height: 1.5, background: 'currentColor', marginBottom: 6, transition: 'transform 0.3s', transform: open ? 'rotate(45deg) translateY(7px)' : 'none' }} />
          <div style={{ width: 22, height: 1.5, background: 'currentColor', marginBottom: 6, opacity: open ? 0 : 1, transition: 'opacity 0.3s' }} />
          <div style={{ width: 22, height: 1.5, background: 'currentColor', transition: 'transform 0.3s', transform: open ? 'rotate(-45deg) translateY(-7px)' : 'none' }} />
        </button>
      </motion.nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            style={{
              position: 'fixed',
              top: 64,
              left: 0,
              right: 0,
              background: 'rgba(8,8,8,0.97)',
              backdropFilter: 'blur(20px)',
              zIndex: 99,
              padding: '2rem',
              borderBottom: '1px solid var(--border)',
            }}
          >
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                style={{
                  display: 'block',
                  color: 'var(--text)',
                  textDecoration: 'none',
                  padding: '1rem 0',
                  fontSize: '1.2rem',
                  fontFamily: 'DM Serif Display, serif',
                  borderBottom: '1px solid var(--border)',
                }}
              >
                {l.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 640px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: block !important; }
        }
      `}</style>
    </>
  )
}