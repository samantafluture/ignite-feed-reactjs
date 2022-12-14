import { useState } from 'react';

import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';

export function Post({ author, publishedAt, content }) {
	const [comments, setComments] = useState(['Awesome work! ❤️']);
	const [newComment, setNewComment] = useState('');

	const publishedDateFormatted = new Intl.DateTimeFormat('en', {
		day: '2-digit',
		month: 'long',
		hour: '2-digit',
		minute: '2-digit',
	}).format(publishedAt);

	const publishedDateRelativeToNow = new Intl.RelativeTimeFormat('en');

	function handleCreateNewComment() {
		event.preventDefault();
		setComments([...comments, newComment]);
		setNewComment('');
	}

	function handleNewCommentChange() {
		event.target.setCustomValidity('');
		setNewComment(event.target.value);
	}

	function handleNewInvalidComment() {
		event.target.setCustomValidity('This field is required!');
	}

	function deleteComment(commentToDelete) {
		const commentsWithoutDeletedOne = comments.filter((comment) => {
			return comment != commentToDelete;
		});
		setComments(commentsWithoutDeletedOne);
	}

	const isNewCommentInvalid = newComment.length == 0

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
				{content.map((line) => {
					if (line.type == 'paragraph') {
						return <p key={line.content}>{line.content}</p>;
					} else if (line.type == 'link') {
						return (
							<p key={line.content}>
								<a href='#'>{line.content}</a>
							</p>
						);
					}
				})}
			</div>

			<form
				onSubmit={handleCreateNewComment}
				className={styles.commentForm}
			>
				<strong>Leave a comment</strong>
				<textarea
					name='comment'
					placeholder='Your comment'
					value={newComment}
					onChange={handleNewCommentChange}
					onInvalid={handleNewInvalidComment}
					required
				></textarea>
				<footer>
					<button 
						type='submit' 
						disabled={isNewCommentInvalid}
					>
						Submit
					</button>
				</footer>
			</form>

			<div className={styles.commentList}>
				{comments.map((comment) => {
					return (
						<Comment
							key={comment}
							content={comment}
							OnDeleteComment={deleteComment}
						/>
					);
				})}
			</div>
		</article>
	);
}

// ----------- notes

// key must be unique, so what is the info from your data that makes it unique?
// key must show up in both elements <p></p>
// they must be in the first element from the return, that's why is not on <a></a>

// OnDeleteComment -> good practice
// start with 'On' -> when something happens, then...

// handleCreateNewComment -> good practice
// when the action is generated by the user
// functions starts with 'handle' name

// setComments -> you're creating a new value for this variable (immutability)
// and not changing / updating, or adding / removing something
// so, to remove one comment, you need to create a list of comments without the one you want to delete it
// filter() -> you can create a list without one item / removing one
