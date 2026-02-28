import { useRef } from 'react'
// import { GlobalContext } from '@/common/context/GlobalContext'
import logo from '@/assets/images/profile_pic_1080.png'

import styles from './Intro.module.css'
import { useGlobalContext } from '@/common/context/useGlobalContext'

const Intro = () => {
    const { introRef, scrollToContact } = useGlobalContext()
    // const context = useContext(GlobalContext)
    const firstNamePathRef = useRef<SVGPathElement>(null)
    const firstNameCrossAPathRef = useRef<SVGPathElement>(null)
    const firstNameCrossTPathRef = useRef<SVGPathElement>(null)
    const firstNameDotIPathRef = useRef<SVGPathElement>(null)
    const lastNamePathRef = useRef<SVGPathElement>(null)
    const lastNameCrossAPathRef = useRef<SVGPathElement>(null)
    const lastNameCrossTPathRef = useRef<SVGPathElement>(null)
    const lastNameDotIPathRef = useRef<SVGPathElement>(null)

    // useEffect(() => {
    //     const firstNamePath = firstNamePathRef.current;
    //     const firstNameCrossAPath = firstNameCrossAPathRef.current;
    //     const firstNameCrossTPath = firstNameCrossTPathRef.current;
    //     const firstNameDotIPath = firstNameDotIPathRef.current;
    //     const lastNamePath = lastNamePathRef.current;
    //     const lastNameCrossAPath = lastNameCrossAPathRef.current;
    //     const lastNameCrossTPath = lastNameCrossTPathRef.current;
    //     const lastNameDotIPath = lastNameDotIPathRef.current;

    //     if (firstNamePath === null) return;
    //     const length = firstNamePath.getTotalLength();
    //     console.log('First Name Path length:', length);

    //     if (firstNameCrossAPath === null) return;
    //     const crossALength = firstNameCrossAPath.getTotalLength();
    //     console.log('First Name Cross A Path length:', crossALength);

    //     if (firstNameCrossTPath === null) return;
    //     const crossTLength = firstNameCrossTPath.getTotalLength();
    //     console.log('First Name Cross T Path length:', crossTLength);

    //     if (firstNameDotIPath === null) return;
    //     const dotILength = firstNameDotIPath.getTotalLength();
    //     console.log('First Name Dot I Path length:', dotILength);

    //     if (lastNamePath === null) return;
    //     const lastNameLength = lastNamePath.getTotalLength();
    //     console.log('Last Name Path length:', lastNameLength);

    //     if (lastNameCrossAPath === null) return;
    //     const lastNameCrossALength = lastNameCrossAPath.getTotalLength();
    //     console.log('Last Name Cross A Path length:', lastNameCrossALength);

    //     if (lastNameCrossTPath === null) return;
    //     const lastNameCrossTLength = lastNameCrossTPath.getTotalLength();
    //     console.log('Last Name Cross T Path length:', lastNameCrossTLength);

    //     if (lastNameDotIPath === null) return;
    //     const lastNameDotILength = lastNameDotIPath.getTotalLength();
    //     console.log('Last Name Dot I Path length:', lastNameDotILength);
    // }, []);

    return (
        <section className={styles.container} ref={introRef}>
            <div className={styles.containerTop}>
                <div className={styles.containerTopLeft}>
                    <h1 className={styles.title}>Hello, I'm</h1>
                    <div className={styles.nameContainer}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 900">
                            <path
                                ref={firstNamePathRef}
                                className={styles.firstName}
                                d="M83.8935 774.638C202.658 655.873 310.646 526.815 428.094 406.758C466.884 367.105 508.534 329.416 550.72 293.434C568.355 278.393 619.543 264.155 603.154 247.766C602.762 247.375 561.877 291.949 559.177 295.125C475.428 393.654 411.112 519.325 378.197 644.4C376.071 652.481 359.625 700.881 375.66 704.444C423.085 714.983 498.526 624.072 523.658 595.349C539.182 577.607 586.842 525.4 570.171 542.07C552.478 559.764 479.258 681.787 527.886 685.839C578.539 690.06 628.434 619.148 655.587 583.509C667.922 567.319 686.878 510.722 686.878 531.076C686.878 559.531 621.618 649.538 654.741 670.616C709.288 705.328 798.07 605.807 822.19 568.287C834.68 548.858 862.202 486.836 845.87 503.168C824.748 524.29 903.002 602.96 881.389 641.863C866.564 668.547 746.923 686.935 746.923 656.239C746.923 649.709 782.688 660.734 785.825 662.159C823.715 679.382 860.811 673.503 897.458 654.548C1018.32 592.033 1074.78 464.472 1158.78 364.473C1161.91 360.751 1196.54 323.583 1190.07 317.114C1178.22 305.263 1107.73 428.616 1102.96 437.203C1088.97 462.383 973.49 622.854 1005.71 648.628C1068.44 698.813 1169.26 571.738 1202.76 536.15C1204.34 534.463 1226.9 511.243 1223.9 508.242C1223.08 507.428 1118.54 628.375 1157.93 652.011C1227.29 693.627 1278.97 504.622 1360.06 514.162C1399.57 518.811 1372.97 660.696 1344.83 632.56C1327.14 614.863 1399.44 531.921 1426.87 531.921C1533.17 531.921 1457.41 685.134 1705.95 610.572"
                            />
                            <path
                                ref={firstNameCrossAPathRef}
                                className={styles.firstNameCrossA}
                                d="M209.903 512.47C314.544 477.59 453.134 482.17 561.714 474.414"
                            />
                            <path
                                ref={firstNameCrossTPathRef}
                                className={styles.firstNameCrossT}
                                d="M962.576 471.877C1045.48 451.151 1135.32 459.482 1219.67 446.506"
                            />
                            <path
                                ref={firstNameDotIPathRef}
                                className={styles.firstNameDotI}
                                d="M1253.5 457.5L1251.81 449.043"
                            />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 900">
                            <path
                                ref={lastNamePathRef}
                                className={styles.lastName}
                                d="M84.8137 796.918C84.2668 798.012 127.841 750.439 139.472 737.291C180.312 691.125 221.093 644.965 261.211 598.161C300.326 552.527 606.924 184.91 642.991 184.91C664.249 184.91 617.799 219.2 604.068 235.428C579.268 264.737 555.52 295.462 535.331 328.182C506.638 374.683 330.087 705.588 393.716 744.744C439.83 773.122 552.442 654.849 576.739 625.49C596.218 601.953 656.98 548.471 626.428 548.471C598.443 548.471 516.612 742.592 577.567 727.353C717.662 692.329 821.945 510.441 898.892 402.716C904.145 395.361 991.179 268.321 980.051 262.757C977.68 261.572 969.796 279.891 969.285 280.977C943.843 335.042 912.042 386.657 880.672 437.498C863.802 464.839 712.979 693.225 771.356 718.243C862.54 757.322 992.458 522.51 1028.91 468.968C1046.41 443.267 1063.01 416.989 1080.26 391.121C1089.94 376.595 1124.6 338.373 1110.07 348.057C1042.7 392.97 1007.14 520.923 973.426 589.879C970.755 595.342 913.74 727.353 918.768 727.353C931.907 727.353 998.311 487.242 1105.1 515.345C1239.49 550.71 958.082 560.587 997.442 613.067C1041.97 672.442 1309.33 615.392 1281.5 531.908C1267.4 489.615 1089.76 609.607 1177.98 658.616C1318.2 736.513 1341.51 508.301 1442.99 522.798C1483.47 528.581 1472.04 668.047 1438.02 645.366C1417.01 631.357 1518.74 541.31 1545.68 545.159C1617.42 555.407 1571.26 648.076 1749.41 641.225"
                            />
                            <path
                                ref={lastNameCrossAPathRef}
                                className={styles.lastNameCrossA}
                                d="M262.039 478.906C376.912 440.615 530.539 461.445 649.617 453.233"
                            />
                            <path
                                ref={lastNameCrossTPathRef}
                                className={styles.lastNameCrossT}
                                d="M783.778 457.374C854.955 443.139 941.038 445.813 1013.18 449.092"
                            />
                            <path
                                ref={lastNameDotIPathRef}
                                className={styles.lastNameDotI}
                                d="M649.617 497.125L653.757 490.5"
                            />
                        </svg>
                    </div>
                </div>
                <div className={styles.containerTopRight}>
                    <img
                        className={styles.profilePicture}
                        src={logo}
                        alt="Austin Aitken's profile picture"
                    />
                </div>
            </div>
            <div className={styles.containerBottom}>
                <p className={styles.description}>
                    An experienced software developer with an entrepreneurial spirit.
                </p>
                <button className={styles.button} onClick={scrollToContact}>
                    Reach Out
                </button>
            </div>
        </section>
    )
}

export default Intro
