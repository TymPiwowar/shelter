import React from 'react'
import dogImage from '../../assets/img/donationDog.jpg'
import './Donate.css'
import BasicButton from '../../components/BasicButton/BasicButton'

export default function Donate() {
	return (
		<div className='dontationContainer'>
			<div className='donationImageContainer' style={{ backgroundImage: `url(${dogImage})` }}>
				<div className='overlay'></div>
				<div className='textOnImageContainer'>
					<h1>Pomóż nam ratować zwierzęta</h1>
					<p>Twoje wsparcie ma znaczenie. Każda złotówka może zmienić życie naszych podopiecznych</p>
					<BasicButton buttonText='Wpłać teraz' className='payNowButton' />
				</div>
			</div>
			<div className='gradientBackground'>
				<div className='buttonsWithAmountContainer'>
					<BasicButton buttonText='20 zł' className='amountButton' />
					<BasicButton buttonText='50 zł' className='amountButton' />
					<BasicButton buttonText='100 zł' className='amountButton' />
					<BasicButton buttonText='Inna' className='amountButton' />
				</div>
				<p>Twoja darowizna pomaga w leczeniu, karmieniu i znalezieniu domów dla zwierząt</p>
				<div className='optionsContainer'>
					<div className='optionToDonateContainer'>
						<h1>50zł</h1>
						<p>Pełny brzuch na 3 dni</p>
					</div>
					<div className='optionToDonateContainer'>
						<h1>20zł</h1>
						<p>Jedno szczepienie</p>
					</div>
					<div className='optionToDonateContainer'>
						<h1>100zł</h1>
						<p>Opieka weterynaryjna przez tydzień</p>
					</div>
				</div>
			</div>
		</div>
	)
}
