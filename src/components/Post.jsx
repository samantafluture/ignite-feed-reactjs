import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';

export function Post({ author, publishedAt, content }) {
	const publishedDateFormatted = new Intl.DateTimeFormat('en', {
		day: '2-digit',
		month: 'long',
		hour: '2-digit',
		minute: '2-digit',
	}).format(publishedAt);

	const publishedDateRelativeToNow = new Intl.RelativeTimeFormat('en');

	return (
		<article className={styles.post}>
			<header>
				<div className={styles.author}>
					<Avatar src={author.avatarUrl} />
					<div className={styles.authorInfo}>
						<strong>{author.name}</strong>
						<span>{author.role}</span>
					</div>
				</div>
				<time
					className={styles.time}
					title={publishedDateFormatted}
					dateTime={publishedAt.toISOString()}
				>
					{publishedDateRelativeToNow.format(-1, 'day')}
				</time>
			</header>

			<div className={styles.content}>
				{content.map(line => {
					if(line.type == 'paragraph') {
						return <p>{line.content}</p>
					} else if (line.type == 'link'){
						return <p><a href=''>{line.content}</a></p>
					}
				})}
			</div>

			<form className={styles.commentForm}>
				<strong>Leave a comment</strong>
				<textarea placeholder='Your comment'></textarea>
				<footer>
					<button type='submit'>Submit</button>
				</footer>
			</form>

			<div className={styles.commentList}>
				<Comment />
				<Comment />
				<Comment />
			</div>
		</article>
	);
}
