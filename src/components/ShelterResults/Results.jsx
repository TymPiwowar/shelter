import React from 'react'
import './Results.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { motion } from 'framer-motion'
import { fadeIn } from '../../utils/variants'

export default function Results() {
	return (
		<div className='shlterResultsContainer'>
			<div className='backgroundContainer'>
				<motion.h1
					initial='hidden'
					whileInView='show'
					variants={fadeIn('up', 0)}
					viewport={{ once: true, amount: 0.3 }}>
					SCHRONISKO W LICZBACH
				</motion.h1>
				<motion.div
					variants={fadeIn('up', 0)}
					initial='hidden'
					whileInView='show'
					viewport={{ once: true, amount: 0.3 }}
					className='resultsViewContainer'>
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
				</motion.div>
			</div>
		</div>
	)
}
