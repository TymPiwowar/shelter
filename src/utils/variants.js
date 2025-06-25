export const fadeIn = (direction = 'up', delay = 0) => {
	const distance = 40
	return {
		hidden: {
			opacity: 0,
			x: direction === 'left' ? distance : direction === 'right' ? -distance : 0,
			y: direction === 'up' ? distance : direction === 'down' ? -distance : 0,
		},
		show: {
			opacity: 1,
			x: 0,
			y: 0,
			transition: { duration: 0.6, ease: 'easeOut', delay },
		},
	}
}
