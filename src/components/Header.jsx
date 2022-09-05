import styles from './Header.module.css';

export function Header() {
	return (
		<header className={styles.header}>
			<strong>Ignite Feed</strong>
		</header>
	);
}

// --------------- notes
// {styles.header} where header is the class .header from styles
