import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Services.module.css';

const services = [
  {
    icon: '⚖️',
    title: 'Criminal Defense',
    tagline: 'Protecting Your Freedom',
    desc: 'Facing criminal charges is one of the most frightening experiences a person can go through. Bar. Collins provides aggressive, strategic defense at every stage — from investigation through trial. We protect your constitutional rights and fight for the best possible outcome.',
    items: ['Felony & Misdemeanor Defense', 'DWI / DUI Cases', 'Drug Offenses', 'White Collar Crime', 'Appeals & Post-Conviction'],
  },
  {
    icon: '🏛️',
    title: 'Civil Litigation',
    tagline: 'Resolving Disputes Decisively',
    desc: 'When disputes escalate, you need a tenacious advocate in your corner. We handle civil litigation with precision and strategic planning, pursuing every avenue to achieve a favorable resolution — whether through negotiation, mediation, or trial.',
    items: ['Contract Disputes', 'Personal Injury Claims', 'Business Disputes', 'Tort Claims', 'Breach of Fiduciary Duty'],
  },
  {
    icon: '📋',
    title: 'Corporate Law',
    tagline: 'Protecting Your Business',
    desc: 'Houston businesses face complex legal challenges at every stage. From founding a company to navigating mergers and disputes, we provide comprehensive corporate counsel that keeps your business protected, compliant, and positioned for growth.',
    items: ['Business Formation & Structure', 'Contract Drafting & Review', 'Regulatory Compliance', 'M&A Transactions', 'Employment Law Disputes'],
  },
  {
    icon: '🏠',
    title: 'Real Estate Law',
    tagline: 'Securing Your Property Interests',
    desc: 'Houston\'s real estate market is dynamic and complex. Whether you\'re buying, selling, developing, or in dispute, Collins Law Firm provides the experienced legal guidance to protect your real property interests at every turn.',
    items: ['Residential & Commercial Transactions', 'Title Disputes', 'Landlord-Tenant Disputes', 'Zoning & Land Use', 'Construction Defects'],
  },
  {
    icon: '👨‍👩‍👧',
    title: 'Family Law',
    tagline: 'Protecting What Matters Most',
    desc: 'Family legal matters are deeply personal. We approach divorce, custody, and family disputes with both compassion and tenacity — always prioritizing the best interests of children and families while advocating firmly for your rights.',
    items: ['Divorce & Separation', 'Child Custody & Support', 'Adoption', 'Domestic Violence Protection', 'Property Division'],
  },
  {
    icon: '📝',
    title: 'Estate Planning',
    tagline: 'Protecting Your Legacy',
    desc: 'Thoughtful estate planning ensures your assets are protected and your wishes honored. Bar. Collins provides comprehensive estate planning services to give you and your loved ones peace of mind for the future.',
    items: ['Wills & Trusts', 'Powers of Attorney', 'Probate Administration', 'Healthcare Directives', 'Asset Protection'],
  },
];

export default function Services() {
  return (
    <>
      <Head>
        <title>Services | Collins Law Firm</title>
        <meta name="description" content="Collins Law Firm offers expert legal services across criminal defense, civil litigation, corporate law, real estate, family law, and estate planning in Houston." />
      </Head>

      {/* PAGE HERO */}
      <div className="page-hero">
        <div className="page-hero-content">
          <span className="page-hero-label">Practice Areas</span>
          <h1>Comprehensive <em>Legal</em> Services</h1>
          <div className="page-hero-line" />
          <p>From criminal defense to estate planning, we deliver expert legal representation across six key practice areas — all with Bar. Collins&apos; personal involvement and attention.</p>
        </div>
      </div>

      {/* SERVICES LIST */}
      <section className={styles.servicesList}>
        {services.map(({ icon, title, tagline, desc, items }, i) => (
          <div key={title} className={`${styles.serviceRow} ${i % 2 !== 0 ? styles.serviceRowAlt : ''}`}>
            <div className={styles.serviceRowInner}>
              <div className={styles.serviceInfo}>
                <div className={styles.serviceIconWrap}>{icon}</div>
                <span className="section-label">{tagline}</span>
                <h2>{title}</h2>
                <div className="section-divider" />
                <p>{desc}</p>
                <Link href="/contact" className="btn-primary" style={{ marginTop: '1.5rem' }}>
                  Consult on This Matter
                </Link>
              </div>
              <div className={styles.serviceFeatures}>
                <h4>What We Handle</h4>
                <ul>
                  {items.map((item) => (
                    <li key={item}>
                      <span className={styles.checkmark}>✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className={styles.serviceContact}>
                  <p>Have a question about this practice area?</p>
                  <a
                    href="https://wa.me/17130000000?text=Hello%20Bar.%20Collins%2C%20I%20have%20a%20question%20about%20your%20legal%20services."
                    target="_blank" rel="noreferrer"
                    className={styles.waLink}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    Ask on WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <div className={styles.ctaInner}>
          <h2>Not Sure Which Service You <em>Need?</em></h2>
          <p>Schedule a free consultation and Bar. Collins will personally assess your situation and advise you on the best legal path forward.</p>
          <div className={styles.ctaActions}>
            <Link href="/contact" className="btn-primary">Free Consultation</Link>
            <Link href="/about" className="btn-outline">About Bar. Collins</Link>
          </div>
        </div>
      </section>
    </>
  );
}
