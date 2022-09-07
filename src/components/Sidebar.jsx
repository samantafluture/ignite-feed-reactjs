import { PencilSimple } from 'phosphor-react';
import { Avatar } from './Avatar';

import styles from './Sidebar.module.css';

export function Sidebar() {
	return (
		<aside className={styles.sidebar}>
			<img
				className={styles.cover}
				src='https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
			/>

			<div className={styles.profile}>			
				<Avatar src='https://github.com/samantafluture.png' />

				<strong>Samanta Fluture</strong>
				<span>Web Developer</span>
			</div>

			<footer>
				<a href='#'>
					<PencilSimple size={20} />
					Edit your profile
				</a>
			</footer>
		</aside>
	);
}
