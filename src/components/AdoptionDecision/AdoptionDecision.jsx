import React from 'react'
import './AdoptionDecision.css'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { fadeIn } from '../../utils/variants'

export default function AdoptionDecision() {
	const navigate = useNavigate()

	return (
		<div className='decisionContainer'>
			<div className='decisionCard'>
				<motion.h1
					initial='hidden'
					whileInView='show'
					variants={fadeIn('up', 0)}
					viewport={{ once: true, amount: 0.3 }}>
					Jeszcze się zastanawiasz?
				</motion.h1>
				<motion.p initial='hidden' whileInView='show' variants={fadeIn('up', 0)} viewport={{ once: true, amount: 0.3 }}>
					Podejmij decyzję odpowiedzialnie
				</motion.p>
			</div>

			<motion.div
				initial='hidden'
				whileInView='show'
				variants={fadeIn('left', 0.7)}
				viewport={{ once: true, amount: 0.3 }}
				className='adoptionImageSide'></motion.div>

			<motion.div
				variants={fadeIn('up', 0.6)}
				initial='hidden'
				whileInView='show'
				viewport={{ once: true, amount: 0.7 }}
				className='buttonsContainer'>
				<button className='adoptButton' onClick={() => navigate('/animals')}>
					Adoptuj
				</button>
				<button className='moreButton' onClick={() => navigate('/ResponsibleAdpotion')}>
					Dowiedz się więcej
				</button>
			</motion.div>
		</div>
	)
}
