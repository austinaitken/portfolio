import PageIntroduction from '@/common/components/pages/PageIntroduction/PageIntroduction'
import styles from './QualificationsPage.module.css'
import GraduationCard from '@/common/components/GraduationCard/GraduationCard'
import { problemSolverPhraseDrawing } from '@/common/constants/animated-drawings'
import trophyImage from '@/assets/images/university/Work_Term_Award.png?format=webp'
import PagePreview from '@/common/components/pages/PagePreview/PagePreview'
import { useNavigate } from 'react-router'
import { usePageTitle } from '@/common/hooks/usePageTitle'

const QualificationsPage = () => {
    usePageTitle('Qualifications')

    const navigate = useNavigate()

    return (
        <div className={styles.container}>
            <PageIntroduction
                titleStart="A Qualified"
                titleEnd="Problem Solver"
                titleEndDrawing={problemSolverPhraseDrawing}
                content={<GraduationCard />}
                description="A Bachelor of Engineering graduate with academic distinction."
                buttonLabel="Contact Me"
                buttonAction={() => void navigate('/contact-me')}
            />
            <div className={styles.experienceDivider}>
                <span className={styles.dividerLine} />
                <div className={styles.experienceText}>
                    <p className={styles.experienceMain}>
                        Memorial University of N.L.&nbsp;&nbsp;&middot;&nbsp;&nbsp;Bachelor of
                        Engineering (Computer)
                    </p>
                    <p className={styles.experienceDate}>Sep 2017 &mdash; May 2022</p>
                </div>
                <span className={styles.dividerLine} />
            </div>
            <div className={styles.pagePreviewsContainer}>
                <PagePreview
                    titleStart="Excellence"
                    titleEnd="Awarded"
                    titleEndDrawing={problemSolverPhraseDrawing}
                    content={
                        <img
                            className={styles.trophyImage}
                            src={trophyImage}
                            width={2434}
                            height={3521}
                            loading="lazy"
                            decoding="async"
                            alt="The trophy for the Director's Award for Exemplary Work Terms"
                        />
                    }
                    description="Achieved the highest performance rating on all engineering work terms."
                    buttonLabel="View Award"
                    buttonAction={() => {}}
                />
                <PagePreview
                    titleStart="Academically"
                    titleEnd="Proven"
                    titleEndDrawing={problemSolverPhraseDrawing}
                    contentSide="right"
                    content={
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '0.75rem',
                                height: '100%',
                            }}
                        >
                            <div className={`${styles.gradeBox} ${styles.gradeBox91}`}>
                                <p
                                    style={{
                                        fontSize: '2rem',
                                        margin: '0px',
                                        marginBottom: '5px',
                                        padding: '0px',
                                    }}
                                >
                                    91%
                                </p>
                                <p className="smallDescription">
                                    Real-Time
                                    <br />
                                    Operating Systems
                                </p>
                            </div>
                            <div className={`${styles.gradeBox} ${styles.gradeBox90}`}>
                                <p
                                    style={{
                                        fontSize: '2rem',
                                        margin: '0px',
                                        marginBottom: '5px',
                                        padding: '0px',
                                    }}
                                >
                                    90%
                                </p>
                                <p className="smallDescription">
                                    Computer
                                    <br />
                                    Security
                                </p>
                            </div>
                        </div>
                    }
                    description="A top performer in the most relevant computer engineering courses."
                    buttonLabel="View Transcript"
                    buttonAction={() => void navigate('/resources')}
                />
            </div>
        </div>
    )
}

export default QualificationsPage
