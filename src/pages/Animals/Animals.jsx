import React from 'react'
import './Animals.css'
import puppy1 from '../../assets/img/puppy1.jpg'
import puppy2 from '../../assets/img/puppy2.jpg'
import puppy3 from '../../assets/img/puppy3.jpg'
import puppy4 from '../../assets/img/puppy4.jpg'
import puppy5 from '../../assets/img/puppy5.jpg'
import puppy6 from '../../assets/img/puppy6.jpg'
import puppy7 from '../../assets/img/puppy7.jpg'
import puppy8 from '../../assets/img/puppy8.jpg'
import puppy9 from '../../assets/img/dog-3003339_640.jpg'

const animals = [
	{
		name: 'Werona',
		id: '1657/24',
		breed: 'Owczarek niemiecki',
		age: '12 lat',
		weight: '26 kg',
		location: 'ul. Szeligowska, Warszawa',
		image: puppy1,
	},
	{
		name: 'Zulusia',
		id: '0338/25',
		breed: 'Europejska',
		age: '4 lata',
		weight: '3 kg',
		location: 'ul. Przemyska, Warszawa',
		image: puppy2,
	},
	{
		name: 'Luma',
		id: '0505/25',
		breed: 'Mieszaniec',
		age: '8 miesięcy',
		weight: '8 kg',
		location: 'ul. Wolumen, Warszawa',
		image: puppy3,
	},
	{
		name: 'Andrzej',
		id: '0505/25',
		breed: 'Mieszaniec',
		age: '8 miesięcy',
		weight: '8 kg',
		location: 'ul. Wolumen, Warszawa',
		image: puppy4,
	},
	{
		name: 'Stefan',
		id: '0505/25',
		breed: 'Mieszaniec',
		age: '8 miesięcy',
		weight: '8 kg',
		location: 'ul. Wolumen, Warszawa',
		image: puppy5,
	},
	{
		name: 'Krowa',
		id: '0505/25',
		breed: 'Mieszaniec',
		age: '8 miesięcy',
		weight: '8 kg',
		location: 'ul. Wolumen, Warszawa',
		image: puppy6,
	},
	{
		name: 'Prosiaczek',
		id: '0505/25',
		breed: 'Mieszaniec',
		age: '8 miesięcy',
		weight: '8 kg',
		location: 'ul. Wolumen, Warszawa',
		image: puppy7,
	},
	{
		name: 'Jarek',
		id: '0505/25',
		breed: 'Mieszaniec',
		age: '8 miesięcy',
		weight: '8 kg',
		location: 'ul. Wolumen, Warszawa',
		image: puppy8,
	},
	{
		name: 'Zbyś',
		id: '0505/25',
		breed: 'Mieszaniec',
		age: '8 miesięcy',
		weight: '8 kg',
		location: 'ul. Wolumen, Warszawa',
		image: puppy9,
	},
]

export default function Animals() {
	return (
		<div className='animalsContainer'>
			<h1>Zwierzęta do adopcji</h1>
			<div className='animalsGrid'>
				{animals.map((animal, index) => (
					<div key={index} className='animalCard'>
						<div className='animalCardInner'>
							<div className='animalCardFront'>
								<div className='animalImage' style={{ backgroundImage: `url(${animal.image})` }}></div>

								<div className='animalDescription'>
									<h2>{animal.name}</h2>
									<p>{animal.breed}</p>
									<p>{animal.age}</p>
									<p>{animal.weight}</p>
									<p>{animal.location}</p>
								</div>
							</div>
							<div className='animalCardBack'>
								<h2>{animal.name}</h2>
								<button className='knowMoreAboutAnimalButton'>Dowiedz się więcej</button>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}
