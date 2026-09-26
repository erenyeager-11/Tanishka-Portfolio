import React, { useCallback, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, ArrowUpRight, SwatchBook } from 'lucide-react';
import SectionTitle from './SectionTitle';
import './Projects.css';

const AUTO_ROTATE_MS = 4000;

const projects = [
  {
    title: 'Badminton on the Rise',
    date: 'Ongoing',
    description:
      'Fast feet, faster reflexes. Competing at state level and still chasing the next trophy — every rally is a rewrite of "what\'s possible."',
    tags: ['Singles', 'Doubles', 'State-Level'],
    link: '#contact',
  },
  {
    title: 'Chess Diaries',
    date: 'Active',
    description:
      'Off the court, on the board — thinks several moves ahead in a game and in life.',
    tags: ['Strategy', 'Patience'],
    link: '#contact',
  },
  {
    title: 'The Book She Wrote',
    date: 'Published',
    description:
      'Turned her own words into pages people can hold. Proof that Tanu builds worlds, not just wins matches.',
    tags: ['Author', 'Storytelling'],
    link: '#contact',
  },
  {
    title: 'Painted Thoughts',
    date: 'Ongoing',
    description:
      'When words rest, brushes take over. Colour is her second language.',
    tags: ['Painting', 'Sketching'],
    link: '#contact',
  },
  {
    title: 'Voice That Carries',
    date: 'Active',
    description:
      'Confident on stage, clear with words — public speaking isn\'t a side note, it\'s another arena she\'s claimed.',
    tags: ['Public Speaking', 'Confidence', 'Stage Presence'],
    link: '#contact',
  },
  {
    title: 'IOS & SOF Certified',
    date: 'Certified',
    description:
      'Academic olympiads cleared, certificates collected — sharp on paper, sharper in practice.',
    tags: ['IOS', 'SOF', 'Academics'],
    link: '#contact',
  },
];

const total = projects.length;

const getCircularOffset = (index, active) => {
  let offset = index - active;
  if (offset > total / 2) offset -= total;
  if (offset < -total / 2) offset += total;
  return offset;
};

const cardVariant = (offset) => {
  const abs = Math.abs(offset);
  if (abs > 2) {
    return {
      x: `${offset > 0 ? 130 : -130}%`,
      scale: 0.55,
      opacity: 0,
      rotateY: 0,
      zIndex: 0,
    };
  }
  const map = {
    0: { x: '0%', scale: 1, opacity: 1, rotateY: 0, zIndex: 5 },
    1: { x: '58%', scale: 0.82, opacity: 0.5, rotateY: -22, zIndex: 3 },
    2: { x: '104%', scale: 0.66, opacity: 0.22, rotateY: -28, zIndex: 1 },
  };
  const base = map[abs];
  return {
    ...base,
    x: offset < 0 ? `-${base.x.replace('-', '')}` : base.x,
    rotateY: offset < 0 ? -base.rotateY : base.rotateY,
  };
};

const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const goTo = useCallback((index) => {
    setActiveIndex(((index % total) + total) % total);
  }, []);

  const next = useCallback(() => goTo(activeIndex + 1), [activeIndex, goTo]);
  const prev = useCallback(() => goTo(activeIndex - 1), [activeIndex, goTo]);

  useEffect(() => {
    if (paused) return undefined;
    const id = setInterval(() => {
      setActiveIndex((current) => (current + 1) % total);
    }, AUTO_ROTATE_MS);
    return () => clearInterval(id);
  }, [paused]);

  return (
    <section id="projects" className="projects section-padding">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <SectionTitle icon={SwatchBook} title="Senji" kicker="戦事" english="Campaigns" />
        </motion.h2>

        <motion.div
          className="coverflow"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <button
            type="button"
            className="carousel-btn carousel-btn-left"
            onClick={prev}
            aria-label="Previous project"
          >
            <ArrowLeft size={20} />
          </button>

          <div className="coverflow-stage">
            {projects.map((project, index) => {
              const offset = getCircularOffset(index, activeIndex);
              const isActive = offset === 0;
              const variant = cardVariant(offset);
              return (
                <motion.div
                  key={project.title}
                  className={`coverflow-card ${isActive ? 'is-active' : ''}`}
                  animate={variant}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  style={{ pointerEvents: Math.abs(offset) > 2 ? 'none' : 'auto' }}
                  onClick={() => !isActive && goTo(index)}
                >
                  <div className="glass-panel coverflow-inner">
                    <div className="project-cap"></div>
                    <div className="project-content">
                      <span className="project-index">
                        {String(index + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
                      </span>
                      <span className="project-date">{project.date}</span>
                      <h3 className="project-title">{project.title}</h3>
                      <p className="project-description">{project.description}</p>
                    </div>

                    <div className="project-footer">
                      <div className="project-tags">
                        {project.tags.map((tag, i) => (
                          <span className="project-tag" key={i}>{tag}</span>
                        ))}
                      </div>
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link-btn interactive"
                        tabIndex={isActive ? 0 : -1}
                        aria-label={`Open ${project.title}`}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ArrowUpRight size={20} />
                      </a>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <button
            type="button"
            className="carousel-btn carousel-btn-right"
            onClick={next}
            aria-label="Next project"
          >
            <ArrowRight size={20} />
          </button>
        </motion.div>

        <div className="carousel-dots">
          {projects.map((project, index) => (
            <button
              type="button"
              key={project.title}
              className={`carousel-dot ${index === activeIndex ? 'active' : ''}`}
              onClick={() => goTo(index)}
              aria-label={`Go to ${project.title}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
