import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '25%'])
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])

  return (
    <section
      id="hero"
      ref={ref}
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        padding: '0 2rem',
      }}
    >
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '70vw',
        height: '70vw',
        maxWidth: 700,
        maxHeight: 700,
        background: 'radial-gradient(ellipse, rgba(200,169,110,0.07) 0%, transparent 65%)',
        pointerEvents: 'none',
      }} />

      <motion.div style={{ y, opacity, textAlign: 'center', maxWidth: 900 }}>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          style={{ color: 'var(--accent)', fontSize: '0.8rem', letterSpacing: '0.25em', textTransform: 'uppercase', marginBottom: '2rem' }}
        >
          Software Engineer
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontSize: 'clamp(3rem, 10vw, 7.5rem)',
            lineHeight: 1.0,
            letterSpacing: '-0.02em',
            marginBottom: '0.1em',
          }}
        >
          Lauren
        </motion.h1>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontSize: 'clamp(3rem, 10vw, 7.5rem)',
            lineHeight: 1.0,
            letterSpacing: '-0.02em',
            WebkitTextStroke: '1px rgba(240,237,232,0.35)',
            marginBottom: '2.5rem',
          }}
        >
          Drury
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
          style={{ color: 'var(--muted)', fontSize: 'clamp(0.95rem, 2vw, 1.1rem)', maxWidth: 500, margin: '0 auto 3rem', lineHeight: 1.8 }}
        >
          Passionate about the intersection of data and software, and building scalable systems that not only support rapid growth but also provide a strong technical foundation for the future.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
          style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}
        >
          <a href="#projects" style={{
            background: 'var(--accent)',
            color: '#080808',
            padding: '0.75rem 2rem',
            borderRadius: '2px',
            textDecoration: 'none',
            fontSize: '0.85rem',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            fontWeight: 500,
            transition: 'opacity 0.2s',
          }}
          onMouseEnter={e => (e.currentTarget.style.opacity = '0.85')}
          onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
          >
            View Work
          </a>
          <a href="#contact" style={{
            border: '1px solid var(--border)',
            color: 'var(--text)',
            padding: '0.75rem 2rem',
            borderRadius: '2px',
            textDecoration: 'none',
            fontSize: '0.85rem',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            transition: 'border-color 0.2s, color 0.2s',
          }}
          onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.color = 'var(--accent)' }}
          onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text)' }}
          >
            Get In Touch
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        style={{
          position: 'absolute',
          bottom: '2.5rem',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '8px',
        }}
      >
        <span style={{ color: 'var(--muted)', fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase' }}>Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
          style={{ width: 1, height: 40, background: 'linear-gradient(180deg, var(--accent) 0%, transparent 100%)' }}
        />
      </motion.div>
    </section>
  )
}