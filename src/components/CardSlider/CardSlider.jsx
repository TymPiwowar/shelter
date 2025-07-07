import React from 'react'
import './CardSlider.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import dog1 from '../../assets/img/dog-3389729_640.jpg'
import dog2 from '../../assets/img/pet-dog-2081782_640.jpg'
import dog3 from '../../assets/img/dog-2886056_640.jpg'
import dog4 from '../../assets/img/dog-3003339_640.jpg'
import { fadeIn } from '../../utils/variants'
import { motion } from 'framer-motion'

const data = [
	{
		image: dog1,
		title: 'Andrzej',
		age: 12,
		sex: 'samiec',
	},
	{
		image: dog2,
		title: 'Balerina',
		age: 13,
		sex: 'samica',
	},
	{
		image: dog3,
		title: 'Reksio',
		age: 2,
		sex: 'samiec',
	},
	{
		image: dog4,
		title: 'Pulpet',
		age: 5,
		sex: 'samiec',
	},
]

export default function CardSlider() {
	const settings = {
		dots: false,
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		arrows: false,
		responsive: [
			{ breakpoint: 768, settings: { slidesToShow: 1 } },
			{ breakpoint: 1024, settings: { slidesToShow: 2 } },
		],
	}

	return (
		<>
			<motion.h1
				initial='hidden'
				whileInView='show'
				variants={fadeIn('up', 0)}
				viewport={{ once: true, amount: 0.3 }}
				className='h1Text'>
				POZNAJ NASZYCH PODOPIECZNYCH
			</motion.h1>

			<motion.div
				variants={fadeIn('up', 0)}
				initial='hidden'
				whileInView='show'
				viewport={{ once: true, amount: 0.4 }}
				className='sliderContainer'>
				<Slider {...settings} className='sliderInner'>
					{data.map((item, idx) => (
						<div key={idx} className='cardBox'>
							<div className='cardImageContainer'>
								<img src={item.image} alt={item.title} className='cardImage' />
								<div className='cardTextContainer'>
									<p className='nameText'>{item.title}</p>
									<p className='detailsText'>
										płeć: {item.sex}, wiek: {item.age}
									</p>
								</div>
							</div>
						</div>
					))}
				</Slider>
			</motion.div>
		</>
	)
}
