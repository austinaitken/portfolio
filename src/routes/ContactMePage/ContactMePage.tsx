import PageIntroduction from '@/common/components/pages/PageIntroduction/PageIntroduction'
import styles from './ContactMePage.module.css'
import { problemSolverPhraseDrawing } from '@/common/constants/animated-drawings'
import ContactMeGraphic from './components/ContactMeGraphic/ContactMeGraphic'
import { CONTACT_INFO } from '@/common/constants/contact'

const ContactMePage = () => {
    const handlePhoneCall = () => {
        window.location.href = `tel:${CONTACT_INFO.phone}`
    }

    return (
        <section id="contact" className={styles.container}>
            <PageIntroduction
                titleStart="Contact Me"
                titleEnd="Today"
                titleEndDrawing={problemSolverPhraseDrawing}
                content={<ContactMeGraphic />}
                description="Let's discuss the impact I can bring to your team and organization."
                buttonLabel="Call Me"
                buttonAction={handlePhoneCall}
            />
            <div className={styles.experienceDivider}>
                <span className={styles.dividerLine} />
                <div className={styles.experienceText}>
                    <p className={styles.experienceMain}>Contact Options</p>
                </div>
                <span className={styles.dividerLine} />
            </div>
            <div
                style={{
                    width: '80%',
                    gap: '1rem',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
                className={styles.experienceMain}
            >
                <div className={styles.buttonContainer}>
                    <a className={styles.contactButton} href={`tel:${CONTACT_INFO.phone}`}>
                        📞<span>Call</span>
                    </a>
                    <a className={styles.contactButton} href={`sms:${CONTACT_INFO.phone}`}>
                        💬<span>Message</span>
                    </a>
                    <a className={styles.contactButton} href={`mailto:${CONTACT_INFO.email}`}>
                        📧<span>Email</span>
                    </a>
                    <a
                        className={styles.contactButton}
                        href={CONTACT_INFO.linkedin}
                        target="_blank"
                        rel="noreferrer"
                    >
                        in<span>LinkedIn</span>
                    </a>
                </div>
                <div>
                    <p>{CONTACT_INFO.phoneDisplay}</p>
                    <p>{CONTACT_INFO.email}</p>
                    <p>{CONTACT_INFO.linkedin.replace('https://www.', '')}</p>
                </div>
            </div>
        </section>
    )
}

export default ContactMePage
