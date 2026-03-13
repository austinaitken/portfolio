import type { CSSProperties, SVGProps } from 'react'

import styles from './AnimatedDrawing.module.css'

export interface AnimatedDrawingPath {
    d: string
    duration: number
}

export interface AnimatedDrawingData {
    viewBox: string
    paths: AnimatedDrawingPath[]
}

interface AnimatedDrawingProps extends Omit<
    SVGProps<SVGSVGElement>,
    'children' | 'className' | 'style' | 'xmlns' | 'viewBox'
> {
    drawing: AnimatedDrawingData
    delayBetweenPaths?: number
    strokeColor?: string
    strokeWidth?: number
}

const AnimatedDrawing = ({
    drawing,
    delayBetweenPaths = 0.1,
    strokeColor = '#00b686',
    strokeWidth = 15,
    ...svgProps
}: AnimatedDrawingProps) => {
    const { paths, viewBox } = drawing

    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox={viewBox} {...svgProps}>
            {paths.map((path, index) => {
                const previousDuration = paths
                    .slice(0, index)
                    .reduce((total, previousPath) => total + previousPath.duration, 0)
                const gapDelay = index === 0 ? 0 : index * delayBetweenPaths

                const style: CSSProperties = {
                    animationDuration: `${path.duration}s`,
                    animationDelay: `${previousDuration + gapDelay}s`,
                    fill: 'none',
                    stroke: strokeColor,
                    strokeWidth,
                    strokeMiterlimit: 10,
                    strokeLinecap: 'round',
                }

                return (
                    <path
                        key={index}
                        className={styles.animatedPath}
                        d={path.d}
                        pathLength={1}
                        style={style}
                    />
                )
            })}
        </svg>
    )
}

export default AnimatedDrawing
