import React from 'react'
import './Results.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Results() {
	return (
		<div className='shlterResultsContainer'>
			<div className='backgroundContainer'>
				<h1>SCHRONISKO W LICZBACH</h1>
				<div className='resultsViewContainer'>
					<div className='resultBox'>
						{' '}
						<div className='iconBox'>
							<p className='icon'>🐾</p>
						</div>
						<h2>572</h2>
						<p>Zwierząt do adopcji</p>
					</div>
					<div className='resultBox'>
						{' '}
						<div className='iconBox'>
							<p className='icon'>❤️</p>
						</div>
						<h2>377</h2>
						<p>Adopcji w tym roku</p>
					</div>
					<div className='resultBox'>
						<div className='iconBox'>
							<p className='icon'>🏠</p>
						</div>
						<h2>145</h2>
						<p>Zwierząt wróciło do domów</p>
					</div>
				</div>
			</div>
		</div>
	)
}
