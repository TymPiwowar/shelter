import React from 'react'
import { useParams } from 'react-router-dom'
import animals from '../../context/AnimalsData'
import './AnimalPage.css'

export default function AnimalPage() {
	const { id } = useParams()
	const decodedId = decodeURIComponent(id)
	const animal = animals.find(a => a.id === decodedId)

	if (!animal) return <div>Nie znaleziono zwierzaka.</div>

	return (
		<>
			<h1 className='dogsName'>{animal.name}</h1>
			<div className='animalDetailsPage'>
				<div className='imageWithAnimal' style={{ backgroundImage: `url(${animal.image})` }}></div>
				<div className='animalInformationContainer'>
					<p>
						<strong>Rasa:</strong> {animal.breed}
					</p>
					<p>
						<strong>Wiek:</strong> {animal.age}
					</p>
					<p>
						<strong>Waga:</strong> {animal.weight}
					</p>
					<p>
						<strong>Lokalizacja:</strong> {animal.location}
					</p>
					<p>
						<strong>Przyjęty:</strong> {animal.foundWhen}
					</p>
					<p>
						<strong>Znaleziony:</strong> {animal.foundWhere}
					</p>

					<button className='adoptionButton'>Adoptuj</button>
				</div>
			</div>
			<div className='historyContainer'>
				<p>{animal.history}</p>
			</div>
		</>
	)
}
