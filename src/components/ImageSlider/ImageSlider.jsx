import React, { useEffect } from 'react'
import { useState } from 'react'
import './ImageSlider.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDog } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'

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
		<div className='sliderContainerWithArrows'>
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
				<div className='mid-plane'></div>
				<div className='textContainer'>
					<h1 className='title'>Daj drugą szansę - adoptuj, pokochaj, odmień życie!</h1>
					<p className='text'>
						Schronisko w Bełchatowie, to miejsce, gdzie każdy zwierzak ma szansę na nowy, lepszy dom.
					</p>
					<button className='slide' onClick={() => navigate('/adoption')}>
						<span className='span1'>
							<FontAwesomeIcon icon={faDog} className='iconDog' />
						</span>
						<span className='span2'>Adoptuj!</span>
					</button>
				</div>
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
