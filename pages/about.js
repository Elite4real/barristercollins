import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/About.module.css';

const values = [
  { icon: '⚖️', title: 'Integrity', desc: 'Every case is handled with the highest ethical standards. Honesty and transparency guide everything we do.' },
  { icon: '🎯', title: 'Precision', desc: 'We leave nothing to chance. Meticulous preparation and strategic thinking define our approach.' },
  { icon: '💪', title: 'Tenacity', desc: 'We fight relentlessly for every client. Challenges don\'t deter us — they motivate us.' },
  { icon: '🤝', title: 'Compassion', desc: 'Legal issues affect real lives. We treat every client with empathy, respect, and genuine care.' },
];

const milestones = [
  { year: '1990s', event: 'Began legal career in Houston, Texas' },
  { year: '2000s', event: 'Appointed as Houston Assistant Attorney for the District of Houston' },
  { year: '2010s', event: 'Achieved over 300 successful case outcomes in civil and criminal law' },
  { year: '2020s', event: 'Founded Collins Law Firm; expanded practice across all major legal areas' },
  { year: '2026', event: 'Celebrating 20+ years of dedicated legal service to Houston communities' },
];

export default function About() {
  return (
    <>
      <Head>
        <title>About | Collins Law Firm</title>
        <meta name="description" content="Learn about Bar. James Scott Collins — Houston Assistant Attorney with 20+ years of legal experience in the District of Houston." />
      </Head>

      {/* PAGE HERO */}
      <div className="page-hero">
        <div className="page-hero-content">
          <span className="page-hero-label">About the Firm</span>
          <h1>Meet Bar. <em>James Scott</em> Collins</h1>
          <div className="page-hero-line" />
          <p>Houston Assistant Attorney with 20+ years of distinguished service in the District of Houston — dedicated to justice, built on integrity.</p>
        </div>
      </div>

      {/* ATTORNEY PROFILE */}
      <section className={styles.profile}>
        <div className={styles.profileInner}>
          <div className={styles.profileCard}>
            <div className={styles.profileAvatar}>⚖️</div>
            <h2>Bar. James Scott Collins</h2>
            <p className={styles.profileTitle}>Houston Assistant Attorney</p>
            <div className={styles.profileDivider} />
            <div className={styles.profileDetails}>
              <div className={styles.profileDetail}>
                <span>Bar ID</span>
                <strong>656678HS</strong>
              </div>
              <div className={styles.profileDetail}>
                <span>Jurisdiction</span>
                <strong>District of Houston</strong>
              </div>
              <div className={styles.profileDetail}>
                <span>Date of Birth</span>
                <strong>May 27, 1962</strong>
              </div>
              <div className={styles.profileDetail}>
                <span>License Expires</span>
                <strong>March 9, 2028</strong>
              </div>
              <div className={styles.profileDetail}>
                <span>Status</span>
                <strong style={{ color: '#25a652' }}>● Active &amp; Licensed</strong>
              </div>
            </div>
            <Link href="/contact" className="btn-primary" style={{ width: '100%', justifyContent: 'center', marginTop: '1.5rem' }}>
              Book a Consultation
            </Link>
          </div>

          <div className={styles.profileContent}>
            <span className="section-label">Biography</span>
            <h2>A Career Defined by <em>Dedication</em></h2>
            <div className="section-divider" />
            <p>
              Bar. James Scott Collins is one of Houston&apos;s most respected legal professionals, having spent
              over two decades serving the District of Houston with unmatched dedication and expertise.
              Born in 1962, he has devoted his life to the pursuit of justice — not just as a profession,
              but as a calling.
            </p>
            <p>
              As Houston Assistant Attorney, Bar. Collins has navigated complex legal terrain across criminal
              defense, civil litigation, corporate law, real estate, family law, and estate planning. His deep
              familiarity with Houston courts, judges, and local legal culture provides every client with a
              strategic advantage that cannot be replicated.
            </p>
            <p>
              Collins Law Firm was founded on a singular principle: every client deserves the same relentless
              advocacy, regardless of the size or complexity of their case. That principle has guided
              over 500 successful case outcomes and a 98% client satisfaction rate.
            </p>

            <div className={styles.profileStats}>
              {[['20+', 'Years Practicing'], ['500+', 'Cases Won'], ['98%', 'Satisfaction'], ['6', 'Practice Areas']].map(([n, l]) => (
                <div key={l} className={styles.profileStat}>
                  <span className={styles.profileStatNum}>{n}</span>
                  <span className={styles.profileStatLabel}>{l}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className={styles.values}>
        <div className={styles.valuesHeader}>
          <span className="section-label" style={{ color: 'var(--gold)' }}>Our Foundation</span>
          <h2>The <em>Values</em> We Live By</h2>
          <div className="section-divider center" />
        </div>
        <div className={styles.valuesGrid}>
          {values.map(({ icon, title, desc }) => (
            <div key={title} className={styles.valueCard}>
              <div className={styles.valueIcon}>{icon}</div>
              <h3>{title}</h3>
              <p>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TIMELINE */}
      <section className={styles.timeline}>
        <div className={styles.timelineInner}>
          <div className={styles.timelineLeft}>
            <span className="section-label">Career Journey</span>
            <h2>A Legacy of <em>Excellence</em></h2>
            <div className="section-divider" />
            <p>
              From his early days in Houston law to becoming a trusted figure in the district,
              Bar. Collins&apos; career has been marked by milestones that reflect his unwavering
              commitment to legal excellence.
            </p>
          </div>
          <div className={styles.timelineRight}>
            {milestones.map(({ year, event }, i) => (
              <div key={year} className={styles.timelineItem}>
                <div className={styles.timelineYear}>{year}</div>
                <div className={styles.timelineLine}>
                  <div className={styles.timelineDot} />
                  {i < milestones.length - 1 && <div className={styles.timelineConnector} />}
                </div>
                <div className={styles.timelineEvent}>{event}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <div className={styles.ctaInner}>
          <h2>Ready to Work with Bar. <em>Collins?</em></h2>
          <p>Reach out today for your free, no-obligation consultation.</p>
          <div className={styles.ctaActions}>
            <Link href="/contact" className="btn-primary">Free Consultation</Link>
            <Link href="/services" className="btn-outline">Our Services</Link>
          </div>
        </div>
      </section>
    </>
  );
}
