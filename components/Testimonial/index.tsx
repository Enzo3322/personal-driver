import styles from './styles.module.scss'

const Testimonial = ({ name, comment }: { name: string, comment: string }) => {
    return (
        <div className={styles.testimonialContainer}>
            <div className={styles.header}>
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_101_84)">
                        <path d="M19.9999 3.33333C10.7999 3.33333 3.33325 10.8 3.33325 20C3.33325 29.2 10.7999 36.6667 19.9999 36.6667C29.1999 36.6667 36.6666 29.2 36.6666 20C36.6666 10.8 29.1999 3.33333 19.9999 3.33333ZM19.9999 8.33333C22.7666 8.33333 24.9999 10.5667 24.9999 13.3333C24.9999 16.1 22.7666 18.3333 19.9999 18.3333C17.2333 18.3333 14.9999 16.1 14.9999 13.3333C14.9999 10.5667 17.2333 8.33333 19.9999 8.33333ZM19.9999 32C15.8333 32 12.1499 29.8667 9.99992 26.6333C10.0499 23.3167 16.6666 21.5 19.9999 21.5C23.3166 21.5 29.9499 23.3167 29.9999 26.6333C27.8499 29.8667 24.1666 32 19.9999 32Z" fill="url(#paint0_linear_101_84)" />
                    </g>
                    <defs>
                        <linearGradient id="paint0_linear_101_84" x1="37" y1="3.00002" x2="7" y2="31.5" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#FF2438" />
                            <stop offset="1" stop-color="#6F6BC7" />
                        </linearGradient>
                        <clipPath id="clip0_101_84">
                            <rect width="40" height="40" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
                <p className={styles.name}>{name}</p>
            </div>
            <p className={styles.comment}>{comment}</p>
        </div>
    )
}

export default Testimonial