// import logo from '@/assets/images/ProfilePicNoBackground.png'

// import styles from './Intro.module.css'
// import { useGlobalContext } from '@/common/context/useGlobalContext'
// import AnimatedDrawing from '@/common/components/AnimatedDrawing/AnimatedDrawing'
// import { firstNameWordDrawing, lastNameWordDrawing } from '@/common/constants/animated-drawings'

// const Intro = () => {
//     const { introRef, scrollToContact } = useGlobalContext()

//     return (
//         <section className={styles.container} ref={introRef}>
//             <div className={styles.containerTop}>
//                 <div className={styles.containerTopLeft}>
//                     <h1 className={styles.title}>Hello, I'm</h1>
//                     <div className={styles.nameContainer}>
//                         <AnimatedDrawing drawing={firstNameWordDrawing} />
//                         <AnimatedDrawing drawing={lastNameWordDrawing} />
//                     </div>
//                 </div>
//                 <div className={styles.containerTopRight}>
//                     <img
//                         className={styles.profilePicture}
//                         src={logo}
//                         alt="Austin Aitken's profile picture"
//                         width={1080}
//                         height={1080}
//                         loading="eager"
//                         fetchPriority="high"
//                         decoding="async"
//                     />
//                 </div>
//             </div>
//             <div className={styles.containerBottom}>
//                 <p className={`largeDescription ${styles.description}`}>
//                     An experienced software developer with an entrepreneurial spirit.
//                 </p>
//                 <button className={styles.button} onClick={scrollToContact}>
//                     Reach Out
//                 </button>
//             </div>
//         </section>
//     )
// }

// export default Intro
