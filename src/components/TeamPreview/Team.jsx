import React from 'react'
import './Team.css'
import { motion } from 'framer-motion'
import { fadeIn } from '../../utils/variants'

export default function Team() {
	return (
		<div className='teamContainer'>
			<motion.h1
				initial='hidden'
				whileInView='show'
				variants={fadeIn('up', 0)}
				viewport={{ once: true, amount: 0.3 }}
				className='titleTeam'>
				Poznaj nasz zespół
			</motion.h1>
			<motion.div
				variants={fadeIn('up', 0)}
				initial='hidden'
				whileInView='show'
				viewport={{ once: true, amount: 0.2 }}
				className='contentTeamContainer'>
				<div className='teamImageContainer'>
					<img
						className='teamImage'
						src='https://cdn.pixabay.com/photo/2019/02/09/15/14/bali-3985336_1280.jpg'
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
			</motion.div>
		</div>
	)
}
