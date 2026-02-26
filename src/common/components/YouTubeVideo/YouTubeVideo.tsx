import styles from './YouTubeVideo.module.css'

interface YouTubeVideoProps {
  videoId: string
  title?: string
  className?: string
}

const YouTubeVideo = ({
  videoId,
  title = 'YouTube video player',
  className,
}: YouTubeVideoProps) => {
  const src = `https://www.youtube.com/embed/${videoId}`

  return (
    <iframe
      className={className ? `${styles.video} ${className}` : styles.video}
      src={src}
      title={title}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  )
}

export default YouTubeVideo
