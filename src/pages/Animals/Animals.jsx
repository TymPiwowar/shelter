import React, { useState } from 'react'
import './Animals.css'
import animals from '../../context/AnimalsData'

import { useNavigate } from 'react-router-dom'

export default function Animals() {
	const navigate = useNavigate()
	const itemsPerPage = 9
	const [currentPage, setCurrentPage] = useState(1)
	const totalPages = Math.ceil(animals.length / itemsPerPage)

	const paginatedAnimals = animals.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)

	const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1)

	return (
		<div className='animalsContainer'>
			<h1>Zwierzęta do adopcji</h1>
			<div className='animalsGrid'>
				{paginatedAnimals.map(animal => (
					<div key={animal.id} className='animalCard'>
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

			<div className='pagesButtonsContainer'>
				<button disabled={currentPage === 1} onClick={() => setCurrentPage(p => p - 1)} className='extremeButton'>
					‹ Poprzednia
				</button>
				{pageNumbers.map(pageNum => (
					<button
						key={pageNum}
						onClick={() => setCurrentPage(pageNum)}
						className={pageNum === currentPage ? 'active circleButton' : 'circleButton'}>
						{pageNum}
					</button>
				))}
				<button
					disabled={currentPage === totalPages}
					onClick={() => setCurrentPage(p => p + 1)}
					className='extremeButton'>
					Następna ›
				</button>
			</div>
		</div>
	)
}
