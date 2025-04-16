export const fadeIn = (direction, delay) => {
	return {
		hidden: {
			opacity: 0,
			y: direction === 'up' ? 40 : direction === 'down' ? -40 : 0,
			x: direction === 'left' ? 40 : direction === 'right' ? -40 : 0,
		},
		show: {
			opacity: 0.8,
			y: 0,
			x: 0,
			transition: {
				type: 'tween',
				delay: delay,
				duration: 0.6,
				ease: [0.25, 0.25, 0.25, 0.25],
			},
		},
	}
}
