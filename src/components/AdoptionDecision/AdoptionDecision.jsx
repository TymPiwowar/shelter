import React from 'react'
import './AdoptionDecision.css'

export default function AdoptionDecision() {
	return (
		<div className='decisionContainer'>
			<h1>Jesteś gotowy do adopcji?</h1>
			<div className='buttonsContainer'>
				<button className='adoptButton' onClick={() => navigate('/adoption')}>
					Adoptuj
				</button>
				<button className='moreButton' onClick={() => navigate('/adoption')}>
					Dowiedz się więcej
				</button>
			</div>
		</div>
	)
}
