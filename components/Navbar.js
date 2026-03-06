import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function Navbar() {
  const { pathname } = useRouter();
  const [open, setOpen] = useState(false);

  const links = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/contact', label: 'Contact', cta: true },
  ];

  return (
    <nav className="navbar">
      <Link href="/" className="navbar-logo">
        <div className="navbar-logo-icon" />
        <div className="navbar-logo-text">
          <span className="firm-name">Collins Law Firm</span>
          <span className="firm-sub">District of Houston</span>
        </div>
      </Link>

      <ul className={`navbar-links${open ? ' open' : ''}`}>
        {links.map(({ href, label, cta }) => (
          <li key={href}>
            <Link
              href={href}
              className={`${pathname === href ? 'active' : ''} ${cta ? 'nav-cta' : ''}`}
              onClick={() => setOpen(false)}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>

      <button className="hamburger" onClick={() => setOpen(!open)} aria-label="Menu">
        <span style={{ transform: open ? 'rotate(45deg) translate(5px,5px)' : 'none' }} />
        <span style={{ opacity: open ? 0 : 1 }} />
        <span style={{ transform: open ? 'rotate(-45deg) translate(5px,-5px)' : 'none' }} />
      </button>
    </nav>
  );
}
