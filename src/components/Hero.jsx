import React, { useState, useRef } from 'react';
import { ArrowDownRight, FileText, MapPin } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Hero() {
  const { personal, heroStats } = portfolioData;
  const [sourceIndex, setSourceIndex] = useState(0);
  const [videoReady, setVideoReady] = useState(false);
  const [allFailed, setAllFailed] = useState(false);
  const heroRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    heroRef.current.style.setProperty('--mx', x.toFixed(3));
    heroRef.current.style.setProperty('--my', y.toFixed(3));
  };

  const handleVideoError = () => {
    if (sourceIndex < personal.heroVideoSources.length - 1) {
      setSourceIndex((prev) => prev + 1);
    } else {
      setAllFailed(true);
    }
  };

  return (
    <section
      id="top"
      ref={heroRef}
      onMouseMove={handleMouseMove}
      className="hero-section"
      aria-label="Hero introduction"
    >
      {/* Layer 1: Full-bleed video + architectural sunlit fallback */}
      <div className="hero-media-stage" aria-hidden="true">
        {/* Cinematic Modern Architectural Sunlit Environment (shown seamlessly until /hero.mp4 is placed in /public) */}
        <div className={`hero-arch-fallback ${videoReady ? 'is-hidden' : ''}`}>
          <div className="arch-sky-glow" />
          <div className="arch-sunbeam arch-sunbeam-1" />
          <div className="arch-sunbeam arch-sunbeam-2" />
          <div className="arch-sunbeam arch-sunbeam-3" />
          <div className="arch-colonnade">
            <span className="arch-pillar pillar-1" />
            <span className="arch-pillar pillar-2" />
            <span className="arch-pillar pillar-3" />
            <span className="arch-pillar pillar-4" />
          </div>
          <div className="arch-floor-shadows" />
        </div>

        {!allFailed && (
          <video
            key={personal.heroVideoSources[sourceIndex]}
            className={`hero-video ${videoReady ? 'is-ready' : ''}`}
            src={personal.heroVideoSources[sourceIndex]}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            onCanPlay={() => setVideoReady(true)}
            onLoadedData={() => setVideoReady(true)}
            onError={handleVideoError}
          />
        )}

        {/* Warm burnt-orange editorial wash fading cleanly over the video */}
        <div className="hero-orange-fade" />
        <div className="hero-vignette" />
      </div>

      {/* Layer 2: Uncluttered Editorial Name & Role Overlay */}
      <div className="container hero-content">
        <div className="hero-main-copy">
          <div className="hero-eyebrow-row reveal-up">
            <span className="status-dot" aria-hidden="true" />
            <span className="hero-eyebrow-text">{personal.availability}</span>
            <span className="hero-eyebrow-divider" aria-hidden="true">
              /
            </span>
            <span className="hero-location-chip">
              <MapPin size={13} />
              {personal.shortLocation}
            </span>
          </div>

          <h1 className="hero-title reveal-up delay-1">
            <span className="hero-firstname">{personal.firstName}</span>
            <span className="hero-lastname">{personal.lastName}</span>
          </h1>

          <div className="hero-role-grid reveal-up delay-2">
            <p className="hero-role-badge">{personal.role}</p>
            <p className="hero-tagline">{personal.tagline}</p>
          </div>

          <div className="hero-cta-row reveal-up delay-3">
            <a href="#projects" className="btn-primary-light">
              <span>Selected Projects</span>
              <ArrowDownRight size={17} />
            </a>
            <a
              href={personal.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost-light"
            >
              <FileText size={16} />
              <span>View Resume</span>
            </a>
          </div>
        </div>

        {/* Layer 3: Hero Stats Row */}
        <div className="hero-stats-bar reveal-up delay-3" role="list" aria-label="Key highlights">
          {heroStats.map((stat) => (
            <div key={stat.label} className="hero-stat-item" role="listitem">
              <span className="hero-stat-label">{stat.label}</span>
              <strong className="hero-stat-value">{stat.value}</strong>
              <span className="hero-stat-detail">{stat.detail}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

