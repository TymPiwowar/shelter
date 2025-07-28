import React from 'react'
import './BasicButton.css'

export default function BasicButton({ buttonText, onClick, className = '' }) {
	return (
		<button className={`basicButton ${className}`} onClick={onClick}>
			{buttonText}
		</button>
	)
}
