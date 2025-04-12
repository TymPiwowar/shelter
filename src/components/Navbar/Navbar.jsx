import React from 'react'
import './Navbar.css'
import { Link, useMatch, useResolvedPath } from 'react-router-dom'

export default function Navbar() {
	return (
		<nav className='nav'>
			<Link to='/' className='site-title'>
				{' '}
				Site name
			</Link>

			<ul>
				<CustomLink to='/home'>Strona główna</CustomLink>

				<CustomLink to='/auth'>logowanie</CustomLink>
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
