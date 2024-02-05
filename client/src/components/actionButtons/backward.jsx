import { FaStepBackward } from "react-icons/fa";
import styles from './buttons.module.scss'

const Backward = () => {
  return (
    <div className={styles.button}>
      <button><FaStepBackward className={styles.icon}/></button>
    </div>
  )
}

export default Backward
