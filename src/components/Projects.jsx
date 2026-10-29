import React, { useState } from 'react';
import { ArrowUpRight, Layers } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import ProjectCoverArt from './ProjectCoverArt';

function ProjectCard({ project }) {
  const [imgOk, setImgOk] = useState(Boolean(project.coverImage));

  return (
    <article className="project-card reveal-on-scroll">
      <div className="project-cover-wrapper">
        {project.coverImage && imgOk ? (
          <img
            src={project.coverImage}
            alt={`${project.title} preview`}
            className="project-screenshot"
            onError={() => setImgOk(false)}
          />
        ) : (
          <ProjectCoverArt variant={project.coverVariant} />
        )}
        <span className="project-index-badge">{project.index}</span>
      </div>

      <div className="project-card-body">
        <div className="project-header-row">
          <div>
            <p className="project-subtitle">{project.subtitle}</p>
            <h3 className="project-title">{project.title}</h3>
          </div>

          {(project.liveUrl || project.repoUrl) && (
            <a
              href={project.liveUrl || project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="project-icon-link"
              aria-label={`View ${project.title} on GitHub`}
            >
              <ArrowUpRight size={20} />
            </a>
          )}
        </div>

        <p className="project-description">{project.description}</p>

        <div className="project-outcome-box">
          <span className="outcome-label">
            <Layers size={13} />
            Outcome
          </span>
          <p className="outcome-text">{project.outcome}</p>
        </div>

        <div className="project-tags" aria-label={`Technologies used in ${project.title}`}>
          {project.tags.map((tag) => (
            <span key={tag} className="charcoal-skill-tag">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="projects-section section-spacing">
      <div className="container">
        <div className="section-eyebrow-row is-dark">
          <span className="section-eyebrow">03 / Selected Projects</span>
          <span className="section-rule" aria-hidden="true" />
        </div>

        <div className="projects-intro reveal-on-scroll">
          <h2 className="editorial-heading-light">
            Full-stack platforms engineered for real-world routing &amp; spatial intelligence.
          </h2>
          <p className="projects-subcopy">
            Designed from database schema to interactive browser map—built with Python,
            Flask, PostgreSQL/PostGIS, Leaflet, GeoServer, and CesiumJS.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

