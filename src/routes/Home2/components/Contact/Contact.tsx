// import { useGlobalContext } from '@/common/context/useGlobalContext'
// import AnimatedDrawing from '@/common/components/AnimatedDrawing/AnimatedDrawing'
// import { reachOutWordDrawing } from '@/common/constants/animated-drawings'

// import styles from './Contact.module.css'

// const Contact = () => {
//     const { contactRef } = useGlobalContext()
//     const handleEmailClick = () => {
//         window.location.href = 'mailto:austinlaitken@gmail.com'
//     }

//     const handleCallClick = () => {
//         window.location.href = 'tel:+17097703770'
//     }

//     return (
//         <section className={styles.container} ref={contactRef}>
//             <h1 className={styles.title}>Reach Out</h1>
//             <div className={styles.animatedWordContainer}>
//                 <AnimatedDrawing drawing={reachOutWordDrawing} />
//             </div>
//             {/* <p className="largeDescription" style={{ marginBottom: '40px' }}>
//                 Call, text, or email at anytime and let's discuss how I can contribute to your team
//                 and organization.
//             </p> */}
//             <address className={styles.buttonsContainer}>
//                 <a href="mailto:austinlaitken@gmail.com">📧 austinlaitken@gmail.com</a>
//                 <a href="tel:+17097703770">📞 1 (709) 770-3770</a>
//             </address>
//         </section>
//     )
// }

// export default Contact
