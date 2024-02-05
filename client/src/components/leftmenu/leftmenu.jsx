import styles from './menu.module.scss'
import { Link } from 'react-router-dom'
import { FiHome } from "react-icons/fi";
import { IoSearch } from "react-icons/io5";
import { BiLibrary } from "react-icons/bi";

const Leftmenu = () => {
  return (
    <div className={styles.leftmenu}>
      <ul>
        <li><Link to="/" className={styles.link}><FiHome className={styles.icon}/> Home</Link></li>
        <li><Link to="/" className={styles.link}><IoSearch className={styles.icon}/> Search</Link></li>
        <li><Link to="/" className={styles.link}><BiLibrary className={styles.icon}/> Your Library</Link></li>
        <br />
        <li><Link to="/" className={styles.link}>Create Playlist</Link></li>
        <li><Link to="/" className={styles.link}>Liked Songs</Link></li>
      </ul>
      <span></span>
    </div>
  )
}

export default Leftmenu