import PageIntroduction from '@/common/components/pages/PageIntroduction/PageIntroduction'
import styles from './ContactMePage.module.css'
import { problemSolverPhraseDrawing } from '@/common/constants/animated-drawings'
import NasdaqVerafinGraphic from '../HomePage/NasdaqVerafinGraphic/NasdaqVerafinGraphic'

const ContactMePage = () => {
    // const fullTitle = `${titleStart} ${titleEnd}`.trim()

    // const handlePhoneCopy = () => {
    //     navigator.clipboard.writeText('+1 (709) 770-3770')
    // }

    // const handleEmailCopy = () => {
    //     navigator.clipboard.writeText('austinlaitken@gmail.com')
    // }

    const handlePhoneCall = () => {
        window.location.href = 'tel:+17097703770'
    }

    const handleEmail = () => {
        window.location.href = 'mailto:austinlaitken@gmail.com'
    }

    const handlePhoneMessage = () => {
        window.location.href = 'sms:+17097703770'
    }

    return (
        <section id="contact" className={styles.container}>
            {/* <div className={styles.titleContainer}>
                <h2 className={styles.title} aria-label={fullTitle}>
                    {titleStart}
                    <span className={styles.visuallyHidden}> {titleEnd}</span>
                </h2>
                <div className={styles.titleDrawing}>
                    <AnimatedDrawing
                        drawing={titleEndDrawing}
                        aria-hidden="true"
                        focusable="false"
                        strokeColor="var(--color-text-primary)"
                    />
                </div>
            </div> */}
            <PageIntroduction
                titleStart="Contact Me"
                titleEnd="Today"
                titleEndDrawing={problemSolverPhraseDrawing}
                content={<NasdaqVerafinGraphic />}
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
                    width: '100%',
                    gap: '1rem',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    // border: '1px solid gold',
                }}
                className={styles.experienceMain}
            >
                <p>
                    +1 (709) 770-3770 &nbsp;&nbsp;&middot;&nbsp;&nbsp; austinlaitken@gmail.com
                    &nbsp;&nbsp;&middot;&nbsp;&nbsp; linkedin.com/in/austin-aitken
                </p>

                <div className={styles.buttonContainer}>
                    <button style={{ flex: 1, fontSize: '3rem' }} onClick={handlePhoneCall}>
                        📞<p>Call</p>
                        {/* <p>+1 (709) 770-3770</p> */}
                    </button>
                    <button style={{ flex: 1, fontSize: '3rem' }} onClick={handlePhoneMessage}>
                        💬<p>Message</p>
                        {/* <p>+1 (709) 770-3770</p> */}
                    </button>
                    <button style={{ flex: 1, fontSize: '3rem' }} onClick={handleEmail}>
                        📧<p>Email</p>
                        {/* <p>austinlaitken@gmail.com</p> */}
                    </button>
                    <button style={{ flex: 1, fontSize: '3rem' }}>
                        In<p>LinkedIn Message</p>
                        {/* <p>linkedin.com/in/austin-aitken</p> */}
                    </button>
                    {/* <div className={styles.addressButtonContainer}>
                    <button className="tertiaryButton" onClick={handleEmailCopy}>
                        austinlaitken@gmail.com
                    </button>
                    <button className="iconButton" onClick={handleEmail}>
                        📧
                    </button>
                </div>
                <div className={styles.addressButtonContainer}>
                    <button className="tertiaryButton" onClick={handlePhoneCopy}>
                        + 1 (709) 770-3770
                    </button>
                    <button className="iconButton" onClick={handlePhoneCall}>
                        📞
                    </button>
                    <button className="iconButton" onClick={handlePhoneMessage}>
                        💬
                    </button>
                </div>
                <div>
                    <button className="tertiaryButton">LinkedIn Message</button>
                </div> */}
                </div>
            </div>
        </section>
    )
}

export default ContactMePage
