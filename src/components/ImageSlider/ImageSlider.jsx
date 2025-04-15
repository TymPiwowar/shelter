import React, { useEffect } from 'react'
import { useState } from 'react'
import './ImageSlider.css'

export default function ImageSlider({ slides }) {
	const [currentIndex, setCurrentIndex] = useState(0)

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
		<div className='sliderContainer'>
			<div className='arrow leftArrow' onClick={goToPrevious}>
				←
			</div>
			<div className='arrow rightArrow' onClick={goToNext}>
				→
			</div>

			<div className='imageSliderWrapper'>
				{slides.map((slide, index) => (
					<img
						key={index}
						src={slide.url}
						alt={slide.title}
						className={`slideImage ${index === currentIndex ? 'active' : ''}`}
					/>
				))}
			</div>

			<div className='dotsContainer'>
				{slides.map((_, index) => (
					<div className='dot' key={index} onClick={() => goToSlide(index)}>
						⬤
					</div>
				))}
			</div>
		</div>
	)
}
