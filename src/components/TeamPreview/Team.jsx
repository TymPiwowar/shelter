import React from 'react'
import './Team.css'

export default function Team() {
	return (
		<div className='teamContainer'>
			<h1 className='titleTeam'>Poznaj nasz zespół</h1>
			<div className='contentTeamContainer'>
				<div className='teamImageContainer'>
					<img
						className='teamImage'
						src='https://cdn.pixabay.com/photo/2015/08/11/23/13/employees-885338_1280.jpg'
						alt='zespół schroniska'
					/>
				</div>

				<div>
					<p className='textTeam'>
						Nasz zespół to grupa zaangażowanych ludzi, których łączy wspólna pasja — miłość do zwierząt. Każdego dnia
						dbamy o to, by nasi podopieczni czuli się bezpiecznie i kochani, czekając na nowy dom. Tworzymy miejsce
						pełne empatii, cierpliwości i oddania — zarówno dla zwierząt, jak i dla ludzi, którzy chcą im pomóc.
						Wspólnie wierzymy, że każdemu zwierzakowi należy się druga szansa na szczęśliwe życie. Efektem naszej pracy
						jest liczba uratowanych zwierząt!
					</p>
				</div>
			</div>
		</div>
	)
}
