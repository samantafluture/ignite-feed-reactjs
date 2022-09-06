import styles from './Header.module.css';

import igniteLogo from '../assets/ignite-logo.svg';

export function Header() {
	return (
		<header className={styles.header}>
			<img src={igniteLogo} alt="Ignite Logo" />
		</header>
	);
}

// --------------- notes
// {styles.header} where header is the class .header from styles
