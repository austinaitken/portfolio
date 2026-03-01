import { useGlobalContext } from '@/common/context/useGlobalContext'

import graduationCard from '@/assets/images/university/Austin_Aitken_Graduation_Trading_Card.png'
// import munLogo from '@/assets/images/university/MUN_Logo.png'
import trophyImage from '@/assets/images/university/Work_Term_Award.png'

import styles from './Qualifications.module.css'

const Qualifications = () => {
    const { qualificationsRef } = useGlobalContext()
    // const handleMunLogoClick = () => {
    //     window.open('https://www.mun.ca/engineering/', '_blank')
    // }

    return (
        <section className={styles.container} ref={qualificationsRef}>
            <h1>
                A Qualified
                <br />
                Problem Solver
            </h1>
            <h2 style={{ marginBottom: '20px' }}>Bachelor of Engineering (Computer)</h2>
            {/* <p>
                Graduated with a strong foundation in computer engineering principles and practices.
            </p> */}
            <img
                style={{
                    marginBottom: '40px',
                    maxHeight: '600px',
                    maxWidth: '100%',
                    width: 'auto',
                }}
                src={graduationCard}
                alt="Austin Aitken's Graduation Trading Card"
            />
            <h2 style={{ marginBottom: '10px' }}>Excellence Awarded</h2>
            <p style={{ marginBottom: '30px' }} className="largeDescription">
                Achieved the highest performance on all engineering work terms.
            </p>
            <img
                className={styles.trophyImage}
                src={trophyImage}
                alt="The trophy for the Director's Award for Exemplary Work Terms"
            />
            {/* <h2 style={{ marginBottom: '10px' }}>Academically Proven</h2>
            <p style={{ marginBottom: '20px' }} className="largeDescription">
                A top performer in the most advanced computer engineering courses.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                <div style={{ display: 'flex', flexDirection: 'row', gap: '10px' }}>
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            flex: 1,
                            aspectRatio: '1',
                            border: '1px solid #32ff95',
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: '30px',
                        }}
                    >
                        <p style={{ fontSize: '1.8rem', margin: '0px', padding: '0px' }}>91%</p>
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
                            border: '1px solid #32ff95',
                            borderRadius: '30px',
                        }}
                    >
                        <p style={{ fontSize: '1.8rem', margin: '0px', padding: '0px' }}>90%</p>
                        <p style={{ fontSize: '1rem', margin: '0px', padding: '0px' }}>
                            Computer
                            <br />
                            Security
                        </p>
                    </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            flex: 1,
                            border: '1px solid gold',
                        }}
                    >
                        <p style={{ fontSize: '1.6rem', margin: '0px', padding: '0px' }}>87%</p>
                        <p style={{ fontSize: '1rem', margin: '0px', padding: '0px' }}>
                            Concurrent
                            <br />
                            Programming
                        </p>
                    </div>
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            flex: 1,
                            border: '1px solid gold',
                        }}
                    >
                        <p style={{ fontSize: '1.6rem', margin: '0px', padding: '0px' }}>87%</p>
                        <p style={{ fontSize: '1rem', margin: '0px', padding: '0px' }}>
                            Computer
                            <br />
                            Architecture
                        </p>
                    </div>
                </div>
            </div> */}
            {/* <img
                className={`clickable ${styles.munLogo}`}
                src={munLogo}
                alt="Memorial University of Newfoundland Logo"
                onClick={handleMunLogoClick}
            /> */}
        </section>
    )
}

export default Qualifications
