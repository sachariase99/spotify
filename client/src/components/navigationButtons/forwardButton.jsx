import styles from './buttons.module.scss'
import { IoChevronForwardOutline } from "react-icons/io5";

const ForwardButton = () => {
    return (
        <div className={styles.button}>
            <button>
                <IoChevronForwardOutline className={styles.icon} />
            </button>
        </div>
    )
}

export default ForwardButton
