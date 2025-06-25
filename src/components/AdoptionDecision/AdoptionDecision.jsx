import React from 'react'
import './AdoptionDecision.css'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { fadeIn } from '../../utils/variants'

export default function AdoptionDecision() {
	const navigate = useNavigate()

	return (
		<div className='decisionContainer'>
			<motion.h1 initial='hidden' whileInView='show' variants={fadeIn('up', 0)} viewport={{ once: true, amount: 0.3 }}>
				Jesteś gotowy do adopcji?
			</motion.h1>
			<motion.div
				variants={fadeIn('up', 0)}
				initial='hidden'
				whileInView='show'
				viewport={{ once: true, amount: 0.6 }}
				className='buttonsContainer'>
				<button className='adoptButton' onClick={() => navigate('/adoption')}>
					Adoptuj
				</button>
				<button className='moreButton' onClick={() => navigate('/adoption')}>
					Dowiedz się więcej
				</button>
			</motion.div>
		</div>
	)
}
