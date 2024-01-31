import styles from './buttons.module.scss'
import { FaPauseCircle } from "react-icons/fa";

const Pause = () => {
  return (
    <div className={styles.button}>
      <button><FaPauseCircle className={styles.icon}/></button>
    </div>
  )
}

export default Pause