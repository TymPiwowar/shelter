import React from 'react'
import './Footer.css'

export default function Footer() {
	return (
		<div className='footerContainer'>
			<div className='categoriesContainer'>
				<div className='categoryBox'>
					<h5>Schronisko w Bełchatowie im. Michała Probierza</h5>
				</div>
				<div className='categoryBox'>
					<ul>
						<h3>Zwierzęta</h3>
						<li>Zgłoś zaginięcie</li>
						<li>Znalezione Zwierzęta</li>
						<li>Adopcja krok po kroku</li>
						<li>Działalność charytatywna</li>
						<li>Zwierzęta do adopcji</li>
					</ul>
				</div>
				<div className='categoryBox'>
					<ul>
						<h3>Schronisko</h3>
						<li>Jak można pomóc?</li>
						<li>O schronisku</li>
						<li>Praca</li>
						<li>Kontakt</li>
					</ul>
				</div>
				<div className='categoryBox'>
					<ul>
						<h3>Kontakt</h3>
						<li>ul. Zdzieszulicka 12, 97-400 Bełchatów </li>
						<li>44 633 38 77</li>
						<li>kontakt@schroniskobelchatow.pl</li>
					</ul>
				</div>
			</div>
		</div>
	)
}
