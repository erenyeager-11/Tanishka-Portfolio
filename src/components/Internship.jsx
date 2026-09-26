import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Swords } from 'lucide-react';
import SectionTitle from './SectionTitle';
import './Internship.css';

const internships = [
  {
    role: 'State-Level Badminton Player',
    org: 'Madhya Pradesh Badminton Circuit',
    location: 'Madhya Pradesh, India',
    period: 'Ongoing',
    intro: (
      <>
        Competing at <strong>state level</strong> in singles and doubles — fast feet, faster reflexes,
        and a temperament built to hold up on match point.
      </>
    ),
    highlights: [
      'Selected for state-level competition in both singles and doubles play.',
      'Built a game around sharp footwork and controlled smash power rather than raw force alone.',
      'Trains match temperament as deliberately as technique — staying composed when a rally goes long.',
      'Still chasing the next trophy: every match is treated as a rewrite of "what\'s possible."',
    ],
  },
  {
    role: 'Published Author',
    org: 'First Book, Self-Driven',
    location: 'Madhya Pradesh, India',
    period: 'Published',
    intro: (
      <>
        Turned her own words into <strong>a book people can hold</strong> — proof that Tanu builds
        worlds, not just wins matches.
      </>
    ),
    highlights: [
      'Wrote, revised, and saw a full manuscript through to publication.',
      'Draws on the same patience learned on the chessboard to structure a story.',
      'Treats storytelling as another arena — one claimed as deliberately as the badminton court.',
    ],
  },
];

const Internship = () => {
  return (
    <section id="internship" className="internship section-padding">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <SectionTitle icon={Swords} title="Shugyō" kicker="修行" english="Training" />
        </motion.h2>

        <div className="internship-grid">
          {internships.map((item, index) => (
            <motion.div
              className="internship-card glass-panel"
              key={item.role + item.org}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15 + index * 0.1 }}
            >
              <div className="internship-header">
                <div>
                  <h3 className="internship-role">{item.role}</h3>
                  <p className="internship-org">
                    {item.org}
                    {item.location ? ` · ${item.location}` : ''}{' '}
                    <span>[{item.period}]</span>
                  </p>
                </div>
                {item.link && (
                  <a
                    href={item.link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="internship-repo interactive"
                  >
                    {item.link.label} <ArrowRight size={18} />
                  </a>
                )}
              </div>

              <div className="internship-card-body">
                <p className="internship-intro">{item.intro}</p>

                <ul className="internship-highlights">
                  {item.highlights.map((highlight, i) => (
                    <li key={i}>{highlight}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Internship;
