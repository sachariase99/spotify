import styles from './buttons.module.scss'
import { IoChevronBackOutline } from "react-icons/io5";

const BackButton = () => {
    return (
        <div className={styles.button}>
            <button>
                <IoChevronBackOutline className={styles.icon}/>
            </button>
        </div>
    )
}

export default BackButton
