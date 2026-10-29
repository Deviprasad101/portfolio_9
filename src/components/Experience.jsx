import React from 'react';
import { Briefcase, GraduationCap } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Experience() {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="experience-section section-spacing">
      <div className="container">
        <div className="section-eyebrow-row">
          <span className="section-eyebrow">02 / Experience &amp; Timeline</span>
          <span className="section-rule" aria-hidden="true" />
        </div>

        <div className="experience-header reveal-on-scroll">
          <h2 className="editorial-heading-dark">
            Reverse-chronological engineering experience &amp; academic foundation.
          </h2>
          <p className="experience-subcopy">
            Production full-stack engineering across web applications, relational APIs,
            geospatial workflows, and containerized deployments.
          </p>
        </div>

        <div className="timeline-track">
          {experience.map((item, index) => {
            const isWork = item.type === 'Work Experience';
            return (
              <article
                key={item.id}
                className={`timeline-card reveal-on-scroll ${isWork ? 'is-featured-role' : ''}`}
              >
                <div className="timeline-meta-col">
                  <div className="timeline-badge-row">
                    <span className={`timeline-type-pill ${isWork ? 'pill-work' : 'pill-edu'}`}>
                      {isWork ? <Briefcase size={12} /> : <GraduationCap size={12} />}
                      {item.type}
                    </span>
                  </div>
                  <p className="timeline-dates">{item.dates}</p>
                  <p className="timeline-location">{item.location}</p>
                </div>

                <div className="timeline-node-col" aria-hidden="true">
                  <span className={`timeline-dot ${index === 0 ? 'is-active' : ''}`} />
                  {index < experience.length - 1 && <span className="timeline-connector" />}
                </div>

                <div className="timeline-body-col">
                  <div className="timeline-title-group">
                    <h3 className="timeline-role">{item.role}</h3>
                    <p className="timeline-company">{item.company}</p>
                  </div>

                  <p className="timeline-description">{item.description}</p>

                  {item.highlights && item.highlights.length > 0 && (
                    <ul className="timeline-highlights">
                      {item.highlights.map((bullet, bIdx) => (
                        <li key={bIdx}>{bullet}</li>
                      ))}
                    </ul>
                  )}

                  <div className="timeline-tags" aria-label={`Skills used at ${item.company}`}>
                    {item.tags.map((tag) => (
                      <span key={tag} className="sand-skill-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

