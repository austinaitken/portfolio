import PageIntroduction from '@/common/components/pages/PageIntroduction/PageIntroduction'
import styles from './VirtualExamPage.module.css'
import { problemSolverPhraseDrawing } from '@/common/constants/animated-drawings'
import phaunaLogo from '@/assets/images/phauna/Phauna_Logo.png'
import AnimatedDrawing from '@/common/components/AnimatedDrawing/AnimatedDrawing'

const VirtualExamPage = () => {
    return (
        <div className={styles.container}>
            <PageIntroduction
                titleStart="Advanced"
                titleEnd="Virtual Exams"
                titleEndDrawing={problemSolverPhraseDrawing}
                content={<img src={phaunaLogo} alt="Phauna Logo" />}
                description="Assessing patients through video-based physical examinations."
                buttonLabel="Contact Me"
                buttonAction={() => {}}
            />
            <div>
                <div>
                    <div className={styles.titleContainer}>
                        <h2 className={styles.title} aria-label="Real-Time Analysis">
                            Real-Time
                            <span className={styles.visuallyHidden}> Analysis</span>
                        </h2>
                        <div className={styles.titleDrawing}>
                            <AnimatedDrawing
                                drawing={problemSolverPhraseDrawing}
                                aria-hidden="true"
                                focusable="false"
                                strokeColor={'var(--color-text-primary)'}
                            />
                        </div>
                    </div>
                    <p className="mediumDescription">
                        Collecting all the necessary visual and auditory data for processing.
                    </p>
                    <div>
                        <button>Camera Flutter Plugin</button>
                        <button>KVS Producer Flutter Plugin</button>
                    </div>
                </div>
                <div>
                    <div className={styles.titleContainer}>
                        <h2 className={styles.title} aria-label="Asynchronous Analysis">
                            Asynchronous
                            <span className={styles.visuallyHidden}> Analysis</span>
                        </h2>
                        <div className={styles.titleDrawing}>
                            <AnimatedDrawing
                                drawing={problemSolverPhraseDrawing}
                                aria-hidden="true"
                                focusable="false"
                                strokeColor={'var(--color-text-primary)'}
                            />
                        </div>
                    </div>
                    <p className="mediumDescription">
                        Processing the collected video data for deep clinical understanding.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default VirtualExamPage
