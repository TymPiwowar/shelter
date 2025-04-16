import React, { useEffect, useState } from 'react'
import './Introduction.css'
import { motion } from 'framer-motion'
import { fadeIn } from '../../variants'

export default function Introduction() {
	const [visibleCards, setVisibleCards] = useState([])

	const cards = [
		{
			title: 'Przemyśl decyzję',
			content:
				'Adopcja to zobowiązanie na wiele lat. Zastanów się, czy masz czas, cierpliwość i środki finansowe, by opiekować się zwierzakiem.',
		},
		{
			title: 'Warunki w domu',
			content:
				'Czy Twój dom lub mieszkanie jest przystosowane do przyjęcia pupila? Sprawdź, czy masz odpowiednią przestrzeń i bezpieczne otoczenie.',
		},
		{
			title: 'Opieka weterynaryjna',
			content:
				'Zwierzęta wymagają regularnych wizyt u weterynarza, szczepień i leczenia. Bądź gotowy na te obowiązki i koszty.',
		},
		{
			title: 'Czas i zaangażowanie',
			content:
				'Pupil potrzebuje Twojej uwagi, miłości i aktywności każdego dnia. Adopcja to nie tylko radość, ale i odpowiedzialność.',
		},
	]
	useEffect(() => {
		const timeouts = []

		for (let i = 0; i <= cards.length - 1; i++) {
			const timeout = setTimeout(() => {
				setVisibleCards(prev => [...prev, i])
			}, i * 400)
			timeouts.push(timeout)
		}

		return () => timeouts.forEach(clearTimeout)
	}, [])

	return (
		<motion.div className='introductionContainer'>
			<h1>Zanim adoptujesz</h1>
			<div className='informationContainer'>
				{cards.map((card, index) => (
					<motion.div
						variants={fadeIn('up', index * 0.4)}
						initial='hidden'
						whileInView='show'
						viewport={{ once: true, amount: 0.5 }}
						key={index}
						className='card'>
						<h2>{card.title}</h2>
						<div className='cardContent'>
							<p>{card.content}</p>
						</div>
					</motion.div>
				))}
			</div>
		</motion.div>
	)
}
