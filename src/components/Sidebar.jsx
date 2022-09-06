import styles from './Sidebar.module.css';

export function Sidebar() {
	return (
		<aside className={styles.sidebar}>
			<img
				className={styles.cover}
				src='https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=500&h=350'
			/>

			<div className={styles.profile}>
				<img className={styles.avatar} src='https://github.com/samantafluture.png' />
				<strong>Samanta Fluture</strong>
				<span>Web Developer</span>
			</div>

			<footer>
				<a href='#'>Edit your profile</a>
			</footer>
		</aside>
	);
}
