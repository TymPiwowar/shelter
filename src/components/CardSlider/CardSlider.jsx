import React from 'react'
import './CardSlider.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'

const data = [
	{
		image: 'https://cdn.pixabay.com/photo/2015/02/21/10/39/dog-644111_1280.jpg',
		title: 'Andrzej',
		age: 12,
		sex: 'samiec',
	},
	{
		image: 'https://cdn.pixabay.com/photo/2017/11/23/18/37/great-dane-2973438_1280.jpg',
		title: 'Balerina',
		age: 13,
		sex: 'samica',
	},
	{
		image: 'https://cdn.pixabay.com/photo/2019/09/10/19/02/dog-4467064_1280.jpg',
		title: 'Reksio',
		age: 2,
		sex: 'samiec',
	},
	{
		image: 'https://cdn.pixabay.com/photo/2020/05/20/09/28/cat-5195620_1280.jpg',
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
		arrows: true,
		responsive: [
			{ breakpoint: 768, settings: { slidesToShow: 1 } },
			{ breakpoint: 1024, settings: { slidesToShow: 2 } },
		],
	}

	return (
		<>
			<h1 className='h1Text'>POZNAJ NASZYCH PODOPIECZNYCH</h1>

			<div className='sliderContainer'>
				<Slider {...settings} className='sliderInner'>
					{data.map((item, idx) => (
						<div key={idx} className='cardBox'>
							<div className='cardImageContainer'>
								<img src={item.image} alt={item.title} className='cardImage' />
							</div>
							<div className='cardTextContainer'>
								<p className='nameText'>{item.title}</p>
								<p className='detailsText'>
									płeć: {item.sex}, wiek: {item.age}
								</p>
							</div>
						</div>
					))}
				</Slider>
			</div>
		</>
	)
}
