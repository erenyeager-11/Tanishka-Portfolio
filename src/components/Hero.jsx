import React from 'react';
import { motion } from 'framer-motion';
import Avatar3D from './Avatar3D';
import HoverTooltip from './HoverTooltip';
import './Hero.css';

const Hero = ({ ready = true }) => {
  return (
    <section id="home" className="hero">
      <div className="container hero-layout">
        <div className="hero-text-block">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={ready ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="hero-kicker">Madhya Pradesh · Multi-Hyphenate</div>
            <h1 className="hero-name">
              Tanishka
              <HoverTooltip label="Tanishka" className="hero-name-kicker">
                タニシュカ
              </HoverTooltip>
            </h1>
            <p className="hero-subtext">
              Smashes on court, strategizes on the chessboard, paints when words rest, and speaks up
              when it matters. Tanu — one arena was never going to be enough.
            </p>
            <div className="hero-actions">
              <a href="#projects" className="btn-primary"><span>See Highlights</span></a>
              <a href="#contact" className="btn-secondary">Say Hi</a>
            </div>
          </motion.div>
        </div>

        {/* Only opacity and translation here: R3F measures the canvas with
            getBoundingClientRect, so scaling this wrapper would make it size
            the drawing buffer to the mid-animation scale and then snap. */}
        <motion.div
          className="hero-3d-block"
          initial={{ opacity: 0, y: 24 }}
          animate={ready ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 1.5, delay: 0.3 }}
        >
          <Avatar3D />
        </motion.div>
      </div>

      <div className="scroll-indicator">
        <div className="scroll-bar"></div>
      </div>
    </section>
  );
};

export default Hero;
