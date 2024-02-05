import styles from './buttons.module.scss'
import { IoShuffle } from "react-icons/io5";

const Shuffle = () => {
    return (
        <div className={styles.button}>
            <button><IoShuffle className={styles.icon}/></button>
        </div>
    )
}

export default Shuffle
