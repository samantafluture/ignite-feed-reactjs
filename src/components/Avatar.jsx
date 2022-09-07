import styles from './Avatar.module.css'

export function Avatar({ hasBorder = true, src }) {
    // props hasBorder is true by default

	return (
		<img
			className={hasBorder ? styles.avatarWithBorder : styles.avatar}
			src={src}
		/>
	);
}
