import Head from 'next/head';
import { useState } from 'react';
import styles from '../styles/Contact.module.css';

const contactInfo = [
  { icon: '📍', label: 'Office Location', value: 'District of Houston, Texas, USA' },
  { icon: '📞', label: 'Phone', value: '+1 (713) 000-0000' },
  { icon: '✉️', label: 'Email', value: 'james@collinslaw-houston.com' },
  { icon: '🕐', label: 'Office Hours', value: 'Mon–Fri: 8am–6pm | Emergencies: 24/7' },
];

const practiceAreas = [
  'Criminal Defense', 'Civil Litigation', 'Corporate Law',
  'Real Estate Law', 'Family Law', 'Estate Planning', 'Other',
];

export default function Contact() {
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', phone: '', area: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <Head>
        <title>Contact | Collins Law Firm</title>
        <meta name="description" content="Contact Collins Law Firm for a free consultation with Bar. James Scott Collins — Houston Assistant Attorney." />
      </Head>

      {/* PAGE HERO */}
      <div className="page-hero">
        <div className="page-hero-content">
          <span className="page-hero-label">Get In Touch</span>
          <h1>Let&apos;s Discuss Your <em>Legal</em> Matter</h1>
          <div className="page-hero-line" />
          <p>Your first consultation is completely free. Reach out today and Bar. Collins will personally review your case.</p>
        </div>
      </div>

      {/* CONTACT BODY */}
      <section className={styles.contactSection}>
        <div className={styles.contactInner}>

          {/* LEFT */}
          <div className={styles.contactLeft}>
            <span className="section-label">Contact Information</span>
            <h2>We&apos;re Here to <em>Help</em></h2>
            <div className="section-divider" />
            <p>Reach out through any of the channels below, or fill in the form and Bar. Collins&apos; office will respond within 24 hours.</p>

            <div className={styles.infoList}>
              {contactInfo.map(({ icon, label, value }) => (
                <div key={label} className={styles.infoItem}>
                  <div className={styles.infoIcon}>{icon}</div>
                  <div>
                    <span className={styles.infoLabel}>{label}</span>
                    <span className={styles.infoValue}>{value}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* WhatsApp CTA */}
            <div className={styles.waBlock}>
              <div className={styles.waBlockHeader}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="#25D366">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                <strong>Prefer WhatsApp?</strong>
              </div>
              <p>Chat directly with Bar. Collins&apos; office — available 24/7 for urgent legal matters.</p>
              <a
                href="https://wa.me/17130000000?text=Hello%20Bar.%20Collins%2C%20I%20need%20legal%20assistance."
                target="_blank" rel="noreferrer"
                className={styles.waBtn}
              >
                Start WhatsApp Chat →
              </a>
            </div>
          </div>

          {/* RIGHT - FORM */}
          <div className={styles.formWrap}>
            {submitted ? (
              <div className={styles.successMsg}>
                <div className={styles.successIcon}>✓</div>
                <h3>Message Received!</h3>
                <p>Thank you for reaching out. Bar. Collins&apos; office will contact you within 24 hours to schedule your free consultation.</p>
                <button onClick={() => setSubmitted(false)} className="btn-primary" style={{ marginTop: '1.5rem' }}>
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className={styles.form}>
                <h3>Request a Free Consultation</h3>
                <p>Fill in the form and our team will reach out within 24 hours.</p>

                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="firstName">First Name *</label>
                    <input id="firstName" name="firstName" type="text" placeholder="John"
                      value={form.firstName} onChange={handleChange} required />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="lastName">Last Name *</label>
                    <input id="lastName" name="lastName" type="text" placeholder="Doe"
                      value={form.lastName} onChange={handleChange} required />
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="email">Email Address *</label>
                  <input id="email" name="email" type="email" placeholder="john@email.com"
                    value={form.email} onChange={handleChange} required />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="phone">Phone Number</label>
                  <input id="phone" name="phone" type="tel" placeholder="+1 (713) 000-0000"
                    value={form.phone} onChange={handleChange} />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="area">Practice Area</label>
                  <select id="area" name="area" value={form.area} onChange={handleChange}>
                    <option value="">Select a Practice Area</option>
                    {practiceAreas.map((a) => <option key={a}>{a}</option>)}
                  </select>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="message">Describe Your Case *</label>
                  <textarea id="message" name="message" rows={5}
                    placeholder="Briefly describe your legal matter and how we can help..."
                    value={form.message} onChange={handleChange} required />
                </div>

                <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                  Submit — Request Free Consultation
                </button>

                <p className={styles.disclaimer}>
                  * All information shared is strictly confidential. Submitting this form does not create an attorney-client relationship.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className={styles.faq}>
        <div className={styles.faqInner}>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <span className="section-label" style={{ color: 'var(--gold)' }}>Common Questions</span>
            <h2 className={styles.faqTitle}>Frequently Asked <em>Questions</em></h2>
            <div className="section-divider center" />
          </div>
          <div className={styles.faqGrid}>
            {[
              { q: 'Is the first consultation really free?', a: 'Yes. Your initial consultation with Bar. Collins is completely free and without obligation. We want to understand your situation before discussing any legal fees.' },
              { q: 'How quickly can you take my case?', a: 'We understand urgency. For criminal matters or time-sensitive cases, we can often schedule consultations within 24–48 hours. Contact us immediately for urgent situations.' },
              { q: 'What areas does Collins Law Firm serve?', a: 'We primarily serve clients throughout the District of Houston and the greater Houston metropolitan area. For certain matters, we may be able to assist clients statewide.' },
              { q: 'How are your legal fees structured?', a: 'Fee structures vary by practice area. Some cases are handled on contingency, others on hourly or flat-fee arrangements. We will discuss fees transparently in your free consultation.' },
            ].map(({ q, a }) => (
              <div key={q} className={styles.faqItem}>
                <h4>{q}</h4>
                <p>{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
