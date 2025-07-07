import React from 'react'
import './ResponsibleAdoption.css'

export default function ResponsibleAdoption() {
	const titleWords = ['ODPOWIEDZIALNA', 'ADOPCJA']
	
	return (
		<>
			<div className='section ResponsibleAdoptionSectionContainer'>
				{titleWords.map((word, wordIndex) => (
					<div className='word' key={wordIndex}>
						{word.split('').map((char, letterIndex) => (
							<span key={letterIndex} className='letter'>
								{char}
							</span>
						))}
					</div>
				))}

				<p className='textBeforeAdoption'>Zanim adoptujesz, zapoznaj się z poniższymi punktami</p>
			</div>
			<div className='section step1Container'>
				<h2>1. Przemyśl decyzję</h2>
			</div>
			<div className='section step2Container'>
				<h2>2. Wybierz odpowiedniego zwierzaka</h2>
			</div>
			<div className='section step3Container'></div>
			<div className='section step4Container'></div>
		</>
	)
}
