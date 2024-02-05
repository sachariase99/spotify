import styles from './dropdown.module.scss'
import { Link } from 'react-router-dom'

const Playlist_dropdown = () => {
    return (
        <div className={styles.dropdown}>
            <ul>
                <li><Link to="/" className={styles.link}>Add to queue</Link></li>
                <li><Link to="/" className={styles.link}>Go to playlist radio</Link></li>
                <span></span>
                <li><Link to="/" className={styles.link}>Add to profile</Link></li>
                <span></span>
                <li><Link to="/" className={styles.link}>Report</Link></li>
                <li><Link to="/" className={styles.link}>Remove from Your Library</Link></li>
                <li><Link to="/" className={styles.link}>Download</Link></li>
                <span></span>
                <li><Link to="/" className={styles.link}>Create playlist</Link></li>
                <li><Link to="/" className={styles.link}>Create folder</Link></li>
                <li><Link to="/" className={styles.link}>Exclude from your taste profile</Link></li>
                <li><Link to="/" className={styles.link}>Add to other playlist</Link></li>
                <span></span>
                <li><Link to="/" className={styles.link}>Share</Link></li>
            </ul>
        </div>
    )
}

export default Playlist_dropdown
