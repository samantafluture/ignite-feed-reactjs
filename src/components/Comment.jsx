import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';

export function Comment() {
	return (
		<div className={styles.comment}>
			<img src='https://github.com/samantafluture.png' />

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

                        <button title='Delete comment'>
                            <Trash size={20} />
                        </button>
					</header>

					<p>Great work! 👏</p>
				</div>

				<footer>
                    <button>
                        <ThumbsUp size={24} />
                        Clap <span>20</span>
                    </button>
                </footer>
			</div>
		</div>
	);
}
