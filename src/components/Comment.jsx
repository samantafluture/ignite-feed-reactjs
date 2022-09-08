import { ThumbsUp, Trash } from 'phosphor-react';
import { useState } from 'react';
import { Avatar } from './Avatar';
import styles from './Comment.module.css';

export function Comment({ content, OnDeleteComment }) {
	const [likeCount, setLikeCount] = useState(0);
	
	function handleDeleteComment() {
		OnDeleteComment(content);
	}

	function handleLikeComment() {
		setLikeCount(likeCount + 1);
	}

	return (
		<div className={styles.comment}>
			<Avatar hasBorder={false} src='https://github.com/diego3g.png' />

			<div className={styles.commentBox}>
				<div className={styles.commentContent}>
					<header>
						<div className={styles.authorAndTime}>
							<strong>Samanta Fluture</strong>
							<time
								className={styles.time}
								title='September 7th at 10:25'
								dateTime='2022-09-07 10:25:00'
							>
								Published 1 hour ago
							</time>
						</div>

						<button
							onClick={handleDeleteComment}
							title='Delete comment'
						>
							<Trash size={20} />
						</button>
					</header>

					<p>{content}</p>
				</div>

				<footer>
					<button onClick={handleLikeComment}>
						<ThumbsUp size={24} />
						Clap <span>{likeCount}</span>
					</button>
				</footer>
			</div>
		</div>
	);
}

// handleLikeComment can be replace by:
// () => setLikeCount(likeCount + 1)
// so the OnClick of the button gets an arrow function
// instead of the function handleLikeComment
// same thing!
// but you can execute the function inside the OnClick!
// but creating a separated function is more legible