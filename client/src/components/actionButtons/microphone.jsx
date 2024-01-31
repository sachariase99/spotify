import styles from './buttons.module.scss'
import { TbMicrophone2 } from "react-icons/tb";

const Microphone = () => {
  return (
    <div className={styles.button}>
      <button><TbMicrophone2 className={styles.icon}/></button>
    </div>
  )
}

export default Microphone
