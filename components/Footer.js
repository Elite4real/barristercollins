import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div>
          <div className="footer-brand-name">Collins <span>Law Firm</span></div>
          <div className="footer-brand-sub">District of Houston · Bar ID: 656678HS</div>
          <p className="footer-brand-desc">
            Committed to justice, dedicated to every client, and rooted in the heart of Houston.
            Bar. James Scott Collins — your trusted legal partner.
          </p>
        </div>

        <div className="footer-col">
          <h4>Pages</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Practice Areas</h4>
          <ul>
            <li><a href="/services">Criminal Defense</a></li>
            <li><a href="/services">Civil Litigation</a></li>
            <li><a href="/services">Corporate Law</a></li>
            <li><a href="/services">Real Estate</a></li>
            <li><a href="/services">Family Law</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Contact</h4>
          <ul>
            <li><a href="#">District of Houston, TX</a></li>
            <li><a href="tel:+17130000000">+1 (713) 000-0000</a></li>
            <li><a href="mailto:james@collinslaw.com">james@collinslaw.com</a></li>
            <li><a href="https://wa.me/17130000000" target="_blank" rel="noreferrer">WhatsApp Us</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Collins Law Firm. All rights reserved. Attorney Advertising.</span>
        <span><a href="/contact">Privacy Policy</a></span>
      </div>
    </footer>
  );
}
