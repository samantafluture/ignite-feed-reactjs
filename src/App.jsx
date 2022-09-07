import { Header } from './components/Header';
import { Post } from './components/Post';

import styles from './App.module.css';
import './global.css';
import { Sidebar } from './components/Sidebar';

const posts = [
	{
		id: 1,
		author: {
			avatarUrl: 'https://github.com/samantafluture.png',
			name: 'Samanta Fluture',
			role: 'Web Developer',
		},
		content: [
			{ type: 'paragraph', content: 'Hi all! 👋'},
			{ type: 'paragraph', content: 'Just finished my new website.'},
			{ type: 'paragraph', content: 'Check it out:'},
			{ type: 'link', content: 'samantafluture.com'},
		],
		publishedAt: new Date('2022-07-09 20:02:00')
	},
	{
		id: 2,
		author: {
			avatarUrl: 'https://github.com/diego3g.png',
			name: 'Diego Fernandes',
			role: 'Front-End Developer',
		},
		content: [
			{ type: 'paragraph', content: 'Hey'},
			{ type: 'paragraph', content: 'I just wanted to let you all know that I am open to freelance work.'},
			{ type: 'paragraph', content: 'Drop me a line! Thanks.'},
			{ type: 'link', content: 'hello@diego3g.com'},
		],
		publishedAt: new Date('2022-07-09 20:02:00')
	},
];

export function App() {
	return (
		<>
			<Header />
			<div className={styles.wrapper}>
				<Sidebar />
				<main>
					{posts.map(post => {
						return (
							<Post 
								author={post.author}
								content={post.content}
								publishedAt={post.publishedAt}
							/>
						)
					})}
				</main>
			</div>
		</>
	);
}
