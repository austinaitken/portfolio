import PageIntroduction from '@/common/components/pages/PageIntroduction/PageIntroduction'
import styles from './QualificationsPage.module.css'
import GraduationCard from '../Home2/components/Qualifications/components/GraduationCard/GraduationCard'
import { problemSolverPhraseDrawing } from '@/common/constants/animated-drawings'
// import PageSection from '@/common/components/pages/PageSection/PageSection'
import trophyImage from '@/assets/images/university/Work_Term_Award.png'
import PagePreview from '@/common/components/pages/PagePreview/PagePreview'

const QualificationsPage = () => {
    return (
        <div className={styles.container}>
            <PageIntroduction
                titleStart="A Qualified"
                titleEnd="Problem Solver"
                titleEndDrawing={problemSolverPhraseDrawing}
                content={<GraduationCard />}
                description="A Bachelor of Engineering graduate with academic distinction."
                buttonLabel="Contact Me"
                buttonAction={() => {}}
            />
            <div className={styles.experienceDivider}>
                <span className={styles.dividerLine} />
                <div className={styles.experienceText}>
                    <p className={styles.experienceMain}>
                        Memorial University of N.L.&nbsp;&nbsp;&middot;&nbsp;&nbsp;Bachelor of
                        Engineering (Computer)
                    </p>
                    {/* <p className={styles.experienceMain}>Bachelor of Engineering (Computer)</p> */}
                    <p className={styles.experienceDate}>Sep 2017 &mdash; May 2022</p>
                </div>
                <span className={styles.dividerLine} />
            </div>
            <div className={styles.pagePreviewsContainer}>
                {/* <PagePreview
                    titleStart="Engineering"
                    titleEnd="Graduate"
                    titleEndDrawing={problemSolverPhraseDrawing}
                    content={
                        <img
                            className={styles.trophyImage}
                            src={trophyImage}
                            alt="The trophy for the Director's Award for Exemplary Work Terms"
                        />
                    }
                    description="Earned a Bachelor of Engineering - Computer Major - as a top performer."
                    buttonLabel="View Program"
                    buttonAction={() => {}}
                /> */}
                <PagePreview
                    titleStart="Excellence"
                    titleEnd="Awarded"
                    titleEndDrawing={problemSolverPhraseDrawing}
                    content={
                        <img
                            className={styles.trophyImage}
                            src={trophyImage}
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
                                // border: '1px solid #00b686',
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
                    buttonAction={() => {}}
                />
            </div>

            {/* <PageSection
                title="Academically Proven"
                content={
                    <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                        <div style={{ display: 'flex', flexDirection: 'row', gap: '10px' }}>
                            <div
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    flex: 1,
                                    aspectRatio: '1',
                                    // border: '1px solid #00b686',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    borderRadius: '30px',
                                }}
                            >
                                <p style={{ fontSize: '1.8rem', margin: '0px', padding: '0px' }}>
                                    91%
                                </p>
                                <p style={{ fontSize: '1rem', margin: '0px', padding: '0px' }}>
                                    Real-Time Operating
                                    <br />
                                    Systems
                                </p>
                            </div>
                            <div
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    flex: 1,
                                    aspectRatio: '1',
                                    // border: '1px solid #00b686',
                                    borderRadius: '30px',
                                }}
                            >
                                <p style={{ fontSize: '1.8rem', margin: '0px', padding: '0px' }}>
                                    90%
                                </p>
                                <p style={{ fontSize: '1rem', margin: '0px', padding: '0px' }}>
                                    Computer
                                    <br />
                                    Security
                                </p>
                            </div>
                        </div>
                    </div>
                }
                description=""
            /> */}
        </div>
    )
}

export default QualificationsPage
