import React from 'react';
import { Facebook, Instagram, Linkedin, Mail, Youtube } from 'lucide-react';
import '../styles/home/footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <Logo />
        </div>
        <div className="footer-mission">
          <h2 className="mission-title">Our Mission</h2>
          <p className="mission-description">
            To provide high-quality and effective STEM education to the next generation of
            technology enthusiasts and entrepreneurs of all backgrounds around the world.
          </p>
        </div>
        <div className="footer-socials">
          <h3 className="socials-title">Socials</h3>
          <div className="social-links">
            <SocialLink href="#" icon={<Instagram className="social-icon" />} label="Instagram" />
            <SocialLink href="#" icon={<Linkedin className="social-icon" />} label="LinkedIn" />
            <SocialLink href="#" icon={<Facebook className="social-icon" />} label="Facebook" />
            <SocialLink href="#" icon={<Youtube className="social-icon" />} label="YouTube" />
            <SocialLink href="#" icon={<Mail className="social-icon" />} label="Email" />
          </div>
        </div>
      </div>
    </footer>
  );
}

function Logo(): JSX.Element {
  return (
    <div className="logo-container">
      <span className="logo">
        <span className="logo-red">N</span>
        <span className="logo-blue">T</span>
      </span>
    </div>
  );
}

interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
  label: string;
}

function SocialLink({ href, icon, label }: SocialLinkProps): JSX.Element {
  return (
    <a href={href} className="social-link" aria-label={label}>
      {icon}
    </a>
  );
}

export default Footer;
