import React from 'react'
import './Animals.css'
import animals from '../../context/AnimalsData'

import { useNavigate } from 'react-router-dom'

export default function Animals() {
	const navigate = useNavigate()

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
								<button
									className='knowMoreAboutAnimalButton'
									onClick={() => navigate(`/animals/animal/${encodeURIComponent(animal.id)}`)}>
									Dowiedz się więcej
								</button>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}
