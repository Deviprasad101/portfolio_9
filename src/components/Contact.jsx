import React, { useEffect, useState } from 'react';
import { ArrowUpRight, Check, Copy, FileDown, Mail } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Contact() {
  const { personal, socials } = portfolioData;
  const [copied, setCopied] = useState(false);
  const [istTime, setIstTime] = useState('');

  useEffect(() => {
    const updateClock = () => {
      try {
        const formatted = new Intl.DateTimeFormat('en-IN', {
          timeZone: 'Asia/Kolkata',
          hour: '2-digit',
          minute: '2-digit',
          hour12: true,
        }).format(new Date());
        setIstTime(`${formatted} IST`);
      } catch {
        setIstTime('IST (UTC+5:30)');
      }
    };
    updateClock();
    const timer = setInterval(updateClock, 30000);
    return () => clearInterval(timer);
  }, []);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personal.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2400);
    } catch {
      window.location.href = `mailto:${personal.email}`;
    }
  };

  return (
    <footer id="contact" className="contact-section">
      <div className="contact-glow" aria-hidden="true" />

      <div className="container">
        <div className="section-eyebrow-row is-dark">
          <span className="section-eyebrow">04 / Contact</span>
          <span className="section-rule" aria-hidden="true" />
        </div>

        <div className="contact-main-grid reveal-on-scroll">
          <div className="contact-cta-col">
            <h2 className="contact-headline">
              Let&apos;s build fast, reliable software together.
            </h2>
            <p className="contact-closing-copy">
              Currently open to Full Stack Developer, Python Backend, and DevOps / Cloud /
              Site Reliability Engineering opportunities. Reach out directly for roles,
              collaborations, or engineering discussions.
            </p>

            <div className="email-action-group">
              <a href={`mailto:${personal.email}`} className="email-primary-btn">
                <Mail size={18} />
                <span>{personal.email}</span>
              </a>

              <button
                type="button"
                onClick={handleCopyEmail}
                className="email-copy-btn"
                aria-label="Copy email address to clipboard"
              >
                {copied ? <Check size={16} /> : <Copy size={16} />}
                <span>{copied ? 'Copied' : 'Copy Email'}</span>
              </button>
            </div>
          </div>

          <div className="contact-links-col">
            <div className="socials-list">
              {socials.map((item) => (
                <a
                  key={item.label}
                  href={item.url}
                  target={item.url.startsWith('http') ? '_blank' : undefined}
                  rel={item.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="social-row-link"
                >
                  <div>
                    <span className="social-label">{item.label}</span>
                    <strong className="social-handle">{item.handle}</strong>
                  </div>
                  <ArrowUpRight size={18} className="social-arrow" />
                </a>
              ))}

              <a
                href={personal.resumeUrl}
                download="Devi_Prasad_Chinthamreddy_Resume.pdf"
                className="social-row-link is-resume-row"
              >
                <div>
                  <span className="social-label">Curriculum Vitae</span>
                  <strong className="social-handle">Download Resume (PDF)</strong>
                </div>
                <FileDown size={18} className="social-arrow" />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom-bar">
          <p className="footer-copyright">
            &copy; {new Date().getFullYear()} {personal.fullName}. Crafted with clarity &amp;
            precision.
          </p>

          <div className="footer-meta-right">
            <span className="footer-loc-time">
              {personal.shortLocation} {istTime ? `· ${istTime}` : ''}
            </span>
            <a href="#top" className="back-to-top-link">
              Back to top &uarr;
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

