import styles from './menu.module.scss'
import { Link } from 'react-router-dom'
import { FiHome } from "react-icons/fi";
import { IoSearch } from "react-icons/io5";
import { BiLibrary } from "react-icons/bi";
import { GoPlusCircle } from "react-icons/go";
import musicPlayer from '../../assets/placeholder.png'

const Leftmenu = () => {
  return (
    <div className={styles.leftmenu}>
      <ul>
        <li><Link to="/" className={styles.link}><FiHome className={styles.icon}/> Home</Link></li>
        <li><Link to="/" className={styles.link}><IoSearch className={styles.icon}/> Search</Link></li>
        <li><Link to="/" className={styles.link}><BiLibrary className={styles.icon}/> Your Library</Link></li>
        <br />
        <li><Link to="/" className={styles.link}><GoPlusCircle className={styles.icon}/> Create Playlist</Link></li>
        <li><Link to="/" className={styles.link}><GoPlusCircle className={styles.icon}/> Liked Songs</Link></li>
      </ul>
      <span></span>
      <div className={styles.playlist}>
        <p>Playlist</p>
        <p>Playlist</p>
        <p>Playlist</p>
        <p>Playlist</p>
      </div>
      <div className={styles.image}>
        <img src={musicPlayer} alt="Music" />
      </div>
    </div>
  )
}

export default Leftmenu