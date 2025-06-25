import React, { useEffect } from 'react'
import { useState } from 'react'
import './ImageSlider.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDog } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function ImageSlider({ slides }) {
	const [currentIndex, setCurrentIndex] = useState(0)

	const navigate = useNavigate()

	const goToPrevious = () => {
		const isFirstSlide = currentIndex === 0
		const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1
		setCurrentIndex(newIndex)
	}

	const goToNext = () => {
		const isLastSlide = currentIndex === slides.length - 1
		const newIndex = isLastSlide ? 0 : currentIndex + 1
		setCurrentIndex(newIndex)
	}

	const goToSlide = slideIndex => {
		setCurrentIndex(slideIndex)
	}

	useEffect(() => {
		const autoPlay = setInterval(() => {
			goToNext()
		}, 4000)

		return () => clearInterval(autoPlay)
	}, [currentIndex])

	return (
		<motion.div
			initial={{ opacity: 0, y: 50 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 1, ease: 'easeIn' }}
			className='sliderContainerWithArrows'>
			<div className='imageSliderWrapper'>
				{slides.map((slide, index) => (
					<img
						key={index}
						src={slide.url}
						alt={slide.title}
						className={`slideImage ${index === currentIndex ? 'active' : ''}`}
					/>
				))}
				<div className='mid-plane'></div>
				<motion.div
					initial={{ opacity: 0, y: 150 }}
					animate={{ opacity: 1, y: -170 }}
					transition={{ duration: 1, delay: 0.7, ease: 'easeIn' }}
					className='textContainer'>
					<h1 className='title'>Daj drugą szansę - adoptuj, pokochaj, odmień życie!</h1>
					<p className='text'>
						Schronisko w Bełchatowie, to miejsce, gdzie każdy zwierzak ma szansę na nowy, lepszy dom.
					</p>
					<button className='slide' onClick={() => navigate('/adoption')}>
						<span className='span1'>
							<FontAwesomeIcon icon={faDog} className='iconDog' />
						</span>
						<span className='span2'>Dotuj</span>
					</button>
				</motion.div>
			</div>
		</motion.div>
	)
}
