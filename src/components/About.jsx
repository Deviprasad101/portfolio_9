import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function About() {
  const { personal, about } = portfolioData;
  const [imgIndex, setImgIndex] = useState(0);
  const [imgLoaded, setImgLoaded] = useState(false);
  const [imgExhausted, setImgExhausted] = useState(false);

  const handleImgError = () => {
    if (imgIndex < personal.portraitCandidates.length - 1) {
      setImgIndex((prev) => prev + 1);
    } else {
      setImgExhausted(true);
    }
  };

  return (
    <section id="about" className="about-section section-spacing">
      <div className="container">
        <div className="section-eyebrow-row">
          <span className="section-eyebrow">{about.eyebrow}</span>
          <span className="section-rule" aria-hidden="true" />
        </div>

        <div className="about-grid">
          {/* Portrait Column */}
          <div className="about-portrait-col reveal-on-scroll">
            <div className="portrait-frame">
              {/* Warm Editorial Architectural Portrait Fallback until /public/portrait.jpg is added */}
              <div
                className={`portrait-editorial-placeholder ${imgLoaded ? 'is-hidden' : ''}`}
                aria-hidden={imgLoaded}
              >
                <div className="portrait-sunlight-beam" />
                <div className="portrait-arch-window" />
                <div className="portrait-silhouette">
                  <div className="silhouette-head" />
                  <div className="silhouette-shoulders" />
                </div>
                <div className="portrait-monogram-stamp">{personal.monogram}</div>
                <div className="portrait-coords">{personal.coordinates}</div>
              </div>

              {!imgExhausted && (
                <img
                  key={personal.portraitCandidates[imgIndex]}
                  src={personal.portraitCandidates[imgIndex]}
                  alt={`${personal.fullName} — ${personal.role}`}
                  className={`portrait-photo ${imgLoaded ? 'is-loaded' : ''}`}
                  onLoad={() => setImgLoaded(true)}
                  onError={handleImgError}
                />
              )}
            </div>

            <div className="portrait-caption">
              <div>
                <p className="portrait-caption-name">{personal.fullName}</p>
                <p className="portrait-caption-meta">
                  {personal.role} · {personal.shortLocation}
                </p>
              </div>
              <span className="portrait-lang-tag">
                {about.languages.join(' · ')}
              </span>
            </div>
          </div>

          {/* Bio & Skills Column */}
          <div className="about-copy-col reveal-on-scroll">
            <h2 className="editorial-heading-dark">{about.headline}</h2>

            <div className="about-paragraphs">
              {about.paragraphs.map((text, idx) => (
                <p key={idx} className="about-body-text">
                  {text}
                </p>
              ))}
            </div>

            <div className="skills-matrix">
              {about.skillGroups.map((group) => (
                <div key={group.category} className="skill-group-card">
                  <h3 className="skill-group-title">{group.category}</h3>
                  <div className="skill-tag-list">
                    {group.items.map((skill) => (
                      <span key={skill} className="cream-skill-tag">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="about-footer-cta">
              <a
                href={personal.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-editorial-link"
              >
                <span>Read full curriculum vitae (PDF)</span>
                <ArrowUpRight size={17} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

