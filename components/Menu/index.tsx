/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react"
import styles from "./styles.module.scss"
import { goWhatsApp } from "@/utils/whatsapp"
import useIsMobile from "@/hooks/useDevice"

const MenuDesktop = () => {
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
                <button onClick={goWhatsApp}>
                    AGENDAR VIAGEM
                </button>
            </div>
        </nav>
    )
}

const MenuMobile = () => {
    const [isOpen, setOpen] = useState(false)

    return (
        <nav className={styles.navContainer}>
            <div className={styles.navWrapper}>
                <img src="./logo.svg" alt="" />
                <button onClick={() => setOpen(!isOpen)} className={styles.menuController}>{isOpen ? (
                    <svg width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line x1="22.0458" y1="21.9602" x2="1.53973" y2="1.45406" stroke="#555555" stroke-width="2" />
                        <line x1="23.211" y1="1.19065" x2="2.96258" y2="21.9512" stroke="#555555" stroke-width="2" />
                    </svg>

                ) : (
                    <svg width="29" height="16" viewBox="0 0 29 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line x1="29" y1="1" x2="-8.74227e-08" y2="0.999997" stroke="#555555" stroke-width="2" />
                        <line x1="29" y1="8" x2="8" y2="8" stroke="#555555" stroke-width="2" />
                        <line x1="29" y1="15" x2="15" y2="15" stroke="#555555" stroke-width="2" />
                    </svg>

                )} </button>
                {
                    isOpen ? (
                        <div className={styles.openContainer}>
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
                            <button onClick={goWhatsApp}>
                                AGENDAR VIAGEM
                            </button>
                        </div>
                    ) : null
                }

            </div>
        </nav>
    )
}

const Menu = () => {
    const { isMobile } = useIsMobile()

    if (isMobile) return <MenuMobile />

    return <MenuDesktop />

}

export default Menu