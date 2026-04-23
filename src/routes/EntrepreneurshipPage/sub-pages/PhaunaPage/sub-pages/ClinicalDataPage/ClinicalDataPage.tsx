import PageIntroduction from '@/common/components/pages/PageIntroduction/PageIntroduction'
import styles from './ClinicalDataPage.module.css'
import { problemSolverPhraseDrawing } from '@/common/constants/animated-drawings'
import phaunaLogo from '@/assets/images/phauna/Phauna_Logo.png'
import AnimatedDrawing from '@/common/components/AnimatedDrawing/AnimatedDrawing'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { stackoverflowDark } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import {
    // bitemporalTablePgsqlString,
    bitemporalTemplateTablePgsqlString,
    patientFhirResourceJsonString,
    patientIdentifierTablePgsqlString,
    patientNameTablePgsqlString,
    patientTablePgsqlString,
} from './database-code'
import snomedCtExample from '@/assets/images/phauna/snomed-ct-example.png'
import databaseArch from '@/assets/images/phauna/database-arch-dark.svg'

const ClinicalDataPage = () => {
    return (
        <div className={styles.container}>
            <PageIntroduction
                titleStart="Driven By"
                titleEnd="Clinical Data"
                titleEndDrawing={problemSolverPhraseDrawing}
                content={<img src={phaunaLogo} alt="Phauna Logo" />}
                description="Building auditable clinical data models for cross-domain interoperability."
                buttonLabel="Contact Me"
                buttonAction={() => {}}
            />
            <div>
                <div className={styles.titleContainer}>
                    <h2 className={styles.title} aria-label="Cloud Infrastructure">
                        Cloud
                        <span className={styles.visuallyHidden}> Infrastructure</span>
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
                <img
                    src={databaseArch}
                    alt="Phauna Database Architecture"
                    style={{ width: '100%', height: 'auto' }}
                />
            </div>
            <div style={{ width: '100%' }}>
                <div className={styles.titleContainer}>
                    <h2 className={styles.title} aria-label="Cross-Domain Interoperability">
                        Cross-Domain
                        <span className={styles.visuallyHidden}> Interoperability</span>
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
                <h3>HL7 FHIR</h3>
                <p className="smallDescription">
                    Fast Healthcare Interoperability Resources (FHIR) created by HL7 is the
                    gold-standard framework for EHR-based data sharing.
                </p>
                <p className="smallDescription">
                    A normalized PostgreSQL schema that can convert to the interoperable
                    denormalized HL7 FHIR format for transmission.
                </p>
                <div className={styles.codeContainer}>
                    <SyntaxHighlighter language="json" style={stackoverflowDark}>
                        {patientFhirResourceJsonString}
                    </SyntaxHighlighter>
                    <p style={{ fontSize: '3rem' }}>↔</p>
                    <div style={{ display: 'flex', flexDirection: 'row', gap: '10px' }}>
                        <div>
                            <SyntaxHighlighter language="pgsql" style={stackoverflowDark}>
                                {patientTablePgsqlString}
                            </SyntaxHighlighter>
                            <SyntaxHighlighter language="pgsql" style={stackoverflowDark}>
                                {patientIdentifierTablePgsqlString}
                            </SyntaxHighlighter>
                        </div>
                        <div>
                            <SyntaxHighlighter language="pgsql" style={stackoverflowDark}>
                                {patientNameTablePgsqlString}
                            </SyntaxHighlighter>
                            <SyntaxHighlighter language="pgsql" style={stackoverflowDark}>
                                {patientTablePgsqlString}
                            </SyntaxHighlighter>
                        </div>
                    </div>
                </div>
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '20px',
                    }}
                >
                    <h3>SNOMED CT</h3>
                    <p className="smallDescription">
                        Systematized Nomenclature of Medicine -- Clinical Terms (SNOMED CT) is a
                        comprehensive clinical terminology standard.
                    </p>
                    <img style={{ width: '50%', height: 'auto' }} src={snomedCtExample} />
                </div>
            </div>
            <div>
                <div className={styles.titleContainer}>
                    <h2 className={styles.title} aria-label="Complete Auditability">
                        Complete
                        <span className={styles.visuallyHidden}> Auditability</span>
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
                <h3>Bi-Temporal Tables</h3>
                <h3>Bi-Temporal Foreign Keys</h3>
                <h3>Bi-Temporal Procedures</h3>
                <SyntaxHighlighter language="pgsql" style={stackoverflowDark}>
                    {bitemporalTemplateTablePgsqlString}
                </SyntaxHighlighter>
            </div>
        </div>
    )
}

export default ClinicalDataPage
