import React from 'react'
import dogImage from '../../assets/img/donationDog.jpg'
import './Donate.css'

export default function Donate() {
	return (
		<div className='dontationContainer'>
			<div className='donationImageContainer' style={{ backgroundImage: `url(${dogImage})` }}>
				<div className='textOnImageContainer'>
					<h1>Pomóż nam ratować zwierzęta</h1>
					<p>Twoje wsparcie ma znaczenie. Każda złotówka może zmienić życie naszych podopiecznych</p>
				</div>
			</div>
			<div className='gradientBackground'></div>
		</div>
	)
}
