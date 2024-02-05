import styles from './buttons.module.scss'
import { HiOutlineQueueList } from "react-icons/hi2";

const Queue = () => {
  return (
    <div className={styles.button}>
      <button><HiOutlineQueueList className={styles.icon}/></button>
    </div>
  )
}

export default Queue