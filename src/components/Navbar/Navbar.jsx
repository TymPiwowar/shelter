import React from 'react'
import './Navbar.css'
import { Link, useMatch, useResolvedPath } from 'react-router-dom'

export default function Navbar() {
	return (
		<nav className='nav'>
			<Link to='/home' className='site-title'>
				{' '}
				Schronisko w Bełchatowie
			</Link>

			<ul>
				<CustomLink className='link' to='/adoption'>
					Aktualności
				</CustomLink>
				<CustomLink className='link' to='/adoption'>
					Zwierzęta
				</CustomLink>
				<CustomLink className='link' to='/donate'>
					Wpłać dotację
				</CustomLink>
				<CustomLink className='link' to='/adoption'>
					Adoptuj
				</CustomLink>
				<CustomLink className='link' to='/adoption'>
					Odpowiedzialna Adopcja
				</CustomLink>

				<CustomLink className='link' to='/auth'>
					Logowanie
				</CustomLink>
			</ul>
		</nav>
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
