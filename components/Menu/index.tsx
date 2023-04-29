import styles from "./styles.module.scss"

const Menu = () => {
    return (
        <nav className={styles.navContainer}>
            <div className={styles.navWrapper}>
                <img src="./logo.svg" alt="" />
                <ul>
                    <li>
                        <a href="">Home</a>
                    </li>
                    <li>
                        <a href="">Sobre</a>
                    </li>
                    <li>
                        <a href="">Depoimentos</a>
                    </li>
                    <li>
                        <a href="">(13) 981536590</a>
                    </li>
                </ul>
                <button>
                    AGENDAR VIAGEM
                </button>
            </div>
        </nav>
    )
}

export default Menu