import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

const practiceAreas = [
  { icon: '⚖️', title: 'Criminal Defense', desc: 'Aggressive representation for individuals facing criminal charges across the Houston district.' },
  { icon: '🏛️', title: 'Civil Litigation', desc: 'Strategic advocacy in civil disputes, from breach of contract to personal injury.' },
  { icon: '📋', title: 'Corporate Law', desc: 'Comprehensive legal counsel for businesses — formation, contracts, and compliance.' },
  { icon: '🏠', title: 'Real Estate', desc: 'Expert guidance through property transactions, disputes, and development in Houston.' },
  { icon: '👨‍👩‍👧', title: 'Family Law', desc: 'Compassionate representation in divorce, custody, and all family-related matters.' },
  { icon: '📝', title: 'Estate Planning', desc: 'Protecting your legacy through wills, trusts, and comprehensive estate management.' },
];

const testimonials = [
  { initials: 'MR', name: 'Michael Rodriguez', role: 'Business Owner · Houston, TX', text: 'Bar. Collins handled my corporate dispute with incredible precision. The outcome exceeded every expectation. A truly remarkable attorney.' },
  { initials: 'SA', name: 'Sandra A.', role: 'Criminal Defense Client', text: 'When I faced criminal charges, James Scott Collins was calm, strategic, and relentless. The charges were dropped. I owe him everything.' },
  { initials: 'JT', name: 'James Thompson', role: 'Real Estate Client', text: 'The Collins Law Firm handled our real estate dispute with great care. Their knowledge of Houston law is unmatched. Highly recommended.' },
];

function HeroImage() {
  return (
    <div className={styles.heroJustice}>
      <img
        src="/attorney.png"
        alt="Bar. James Scott Collins — Houston Assistant Attorney"
        className={styles.justiceImg}
      />
      <div className={styles.justiceImgOverlay} />
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Head>
        <title>Collins Law Firm | Houston Criminal Defense &amp; Civil Attorney</title>
        <meta name="description" content="Bar. James Scott Collins — Houston Assistant Attorney with 20+ years of legal experience. Expert representation in criminal defense, civil litigation, corporate law, real estate & family law. Free consultation." />
        <meta name="keywords" content="Houston attorney, Houston lawyer, criminal defense Houston, civil litigation Houston, corporate lawyer Houston, real estate attorney Houston, family law Houston, Bar James Scott Collins, Collins Law Firm, barrister collins" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.barristercollins.com" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.barristercollins.com" />
        <meta property="og:title" content="Collins Law Firm | Houston Criminal Defense & Civil Attorney" />
        <meta property="og:description" content="Bar. James Scott Collins — Houston Assistant Attorney. Expert legal representation in criminal defense, civil litigation, corporate law, and more. Free consultation." />
        <meta property="og:image" content="https://www.barristercollins.com/og-image.jpg" />
        <meta name="twitter:title" content="Collins Law Firm | Houston Criminal Defense & Civil Attorney" />
        <meta name="twitter:description" content="Bar. James Scott Collins — Houston Assistant Attorney. Expert legal representation. Free consultation." />
      </Head>

      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroBg} />
        <div className={styles.heroCircle1} />
        <div className={styles.heroCircle2} />
        <div className={styles.heroCircle3} />

        <HeroImage />

        <div className={styles.heroContent}>
          <div className={styles.heroBadge}>
            <div className={styles.heroBadgeDot} />
            <span>Houston&apos;s Trusted Legal Counsel</span>
          </div>

          <h1>
            Justice.<br />
            <em>Delivered</em><br />
            With Precision.
          </h1>

          <div className={styles.heroLine} />

          <p>
            Bar. James Scott Collins brings decades of legal expertise to every case.
            As Houston Assistant Attorney, we fight relentlessly for your rights and your future.
          </p>

          <div className={styles.heroActions}>
            <Link href="/contact" className="btn-primary">Free Consultation</Link>
            <Link href="/services" className="btn-outline">Our Practice Areas</Link>
          </div>
        </div>

        <div className={styles.heroStats}>
          {[['20+', 'Years Experience'], ['500+', 'Cases Won'], ['98%', 'Client Satisfaction']].map(([num, label]) => (
            <div key={label} className={styles.stat}>
              <div className={styles.statNum}>{num}</div>
              <div className={styles.statLabel}>{label}</div>
            </div>
          ))}
        </div>

        <div className={styles.scrollHint}>
          <div className={styles.scrollLine} />
          <span>Scroll</span>
        </div>
      </section>

      {/* BRIEF INTRO */}
      <section className={styles.intro}>
        <div className={styles.introInner}>
          <div className={styles.introText}>
            <span className="section-label">About the Firm</span>
            <h2>
              A Legacy Built on <em>Trust</em> &amp; Results
            </h2>
            <div className="section-divider" />
            <p>
              Collins Law Firm, led by Bar. James Scott Collins, has been a pillar of legal excellence
              in the District of Houston. We bring relentless advocacy and meticulous attention to every case,
              ensuring each client receives the representation they deserve.
            </p>
            <Link href="/about" className="btn-outline-dark" style={{ marginTop: '2rem' }}>
              Meet Bar. Collins →
            </Link>
          </div>
          <div className={styles.introCard}>
            <div className={styles.introCardInner}>
              <div className={styles.introAvatar}>⚖️</div>
              <h3>Bar. James Scott Collins</h3>
              <p>Houston Assistant Attorney</p>
              <hr className={styles.introHr} />
              <div className={styles.introMeta}>
                <span>ID: 656678HS</span>
                <span>District of Houston</span>
                <span>Licensed &amp; Bar Certified</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRACTICE AREAS PREVIEW */}
      <section className={styles.practices}>
        <div className={styles.practicesHeader}>
          <span className="section-label" style={{ color: 'var(--gold)' }}>What We Do</span>
          <h2>Our <em>Practice</em> Areas</h2>
          <div className="section-divider center" />
        </div>
        <div className={styles.practicesGrid}>
          {practiceAreas.map(({ icon, title, desc }) => (
            <div key={title} className={styles.practiceCard}>
              <div className={styles.practiceIcon}>{icon}</div>
              <h3>{title}</h3>
              <p>{desc}</p>
              <Link href="/services" className={styles.practiceLink}>Learn More →</Link>
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <Link href="/services" className="btn-outline">View All Services</Link>
        </div>
      </section>

      {/* WHY US STRIP */}
      <section className={styles.whyStrip}>
        {[
          ['20+', 'Years of Practice'],
          ['500+', 'Cases Successfully Won'],
          ['98%', 'Client Satisfaction Rate'],
          ['24/7', 'Client Support Available'],
        ].map(([num, label]) => (
          <div key={label} className={styles.stripItem}>
            <div className={styles.stripNum}>{num}</div>
            <div className={styles.stripLabel}>{label}</div>
          </div>
        ))}
      </section>

      {/* TESTIMONIALS */}
      <section className={styles.testimonials}>
        <div className={styles.testimonialsHeader}>
          <span className="section-label" style={{ color: 'var(--gold)' }}>Client Stories</span>
          <h2>What Our <em>Clients</em> Say</h2>
          <div className="section-divider center" />
        </div>
        <div className={styles.testimonialsGrid}>
          {testimonials.map(({ initials, name, role, text }) => (
            <div key={name} className={styles.testimonialCard}>
              <div className={styles.stars}>★★★★★</div>
              <p>{text}</p>
              <div className={styles.testimonialAuthor}>
                <div className={styles.testimonialAvatar}>{initials}</div>
                <div>
                  <strong>{name}</strong>
                  <span>{role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA BANNER */}
      <section className={styles.ctaBanner}>
        <div className={styles.ctaContent}>
          <h2>Ready to Discuss Your <em>Legal Matter?</em></h2>
          <p>Your first consultation is free. Let&apos;s talk about how we can help you today.</p>
          <div className={styles.ctaActions}>
            <Link href="/contact" className="btn-primary">Book Free Consultation</Link>
            <a
              href="https://wa.me/17130000000?text=Hello%20Bar.%20Collins%2C%20I%20need%20legal%20assistance."
              target="_blank" rel="noreferrer"
              className="btn-outline"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style={{ flexShrink: 0 }}>
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}