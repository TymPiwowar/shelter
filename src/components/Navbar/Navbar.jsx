import React from 'react'
import './Navbar.css'
import { Link, useMatch, useResolvedPath } from 'react-router-dom'
import logo from '../../assets/img/dog.png'
import { motion } from 'framer-motion'

export default function Navbar() {
	return (
		<motion.nav
			initial={{ opacity: 0, y: -50 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 1.5, ease: 'easeIn' }}
			className='nav'>
			<Link to='/home' className='site-title'>
				{' '}
				<img src={logo} alt='Logo schroniska – siedzący pies' />
			</Link>

			<ul>
				<CustomLink className='link' to='/newsfeed'>
					Aktualności
				</CustomLink>
				<CustomLink className='link' to='/animals'>
					Zwierzęta
				</CustomLink>

				<CustomLink className='link' to='/adoption'>
					Odpowiedzialna Adopcja
				</CustomLink>

				<CustomLink className='link' to='/donate'>
					Wpłać dotację
				</CustomLink>

				<CustomLink className='link' to='/auth'>
					Logowanie
				</CustomLink>
			</ul>
		</motion.nav>
	)
}

function CustomLink({ to, children, ...props }) {
	const resolvePath = useResolvedPath(to)
	const isActive = useMatch({ path: resolvePath.pathname, end: true })

	return (
		<li className={isActive ? 'active' : ''}>
			<Link to={to} {...props}>
				{children}
			</Link>
		</li>
	)
}
