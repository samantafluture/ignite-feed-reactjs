import styles from './Post.module.css';

export function Post(props) {
	return (
		<article className={styles.post}>
			<header>
				<div className={styles.author}>
					<img
						className={styles.avatar}
						src='https://github.com/samantafluture.png'
					/>
					<div className={styles.authorInfo}>
						<strong>Samanta Fluture</strong>
						<span>Web Developer</span>
					</div>
				</div>
				<time
					className={styles.time}
					title='September 7th at 8:13'
					dateTime='2022-09-07 8:13:00'
				>
					Published 1 hour ago
				</time>
			</header>

			<div className={styles.content}>
				<p>Hi all! 👋</p>
				<p>Just finished my new website. </p>
				<p>
					Check it out:{' '}
					<a href='https://www.samantafluture.com/'>
						samantafluture.com
					</a>
				</p>
				<p>
					<a href='#'>#portfolio</a> <a href='#'>#reactjs</a>
				</p>
			</div>

			<form className={styles.commentForm}>
				<strong>Leave a comment</strong>
				<textarea placeholder='Your comment'></textarea>
				<footer>
					<button type='submit'>Submit</button>
				</footer>
			</form>
		</article>
	);
}
