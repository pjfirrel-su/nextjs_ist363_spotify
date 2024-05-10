import styles from "./Header.module.scss";

const Header = () => {
    return (
        <header className={styles.header}>
            Spotify Logo
            <br />
            Top 10 Artists
        </header>
    )
}
export default Header;