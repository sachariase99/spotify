import styles from './dropdown.module.scss'
import { Link } from 'react-router-dom'

const Account_dropdown = () => {
  return (
    <div className={styles.dropdown}>
      <ul>
        <li><Link to="/" className={styles.link}>Account</Link></li>
        <li><Link to="/" className={styles.link}>Profile</Link></li>
        <li><Link to="/" className={styles.link}>Private Session</Link></li>
        <li><Link to="/" className={styles.link}>Settings</Link></li>
        <span></span>
        <li><Link to="/" className={styles.link}>Update Spotify Now</Link></li>
        <li><Link to="/" className={styles.link}>Logout</Link></li>
      </ul>
    </div>
  )
}

export default Account_dropdown