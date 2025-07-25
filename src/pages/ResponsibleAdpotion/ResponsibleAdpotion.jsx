import React from 'react'
import './ResponsibleAdoption.css'
import step1Dog from '../../assets/img/step1Dog.png'
import step3DogWithGirl from '../../assets/img/step3DogWithGirl.jpg'
import step4Dog from '../../assets/img/dogStep4Alternative.png'
import { useNavigate } from 'react-router-dom'

export default function ResponsibleAdoption() {
	const titleWords = ['ODPOWIEDZIALNA', 'ADOPCJA']
	const navigate = useNavigate()

	return (
		<div className='sectionContainer'>
			<div className='section ResponsibleAdoptionSectionContainer'>
				{titleWords.map((word, wordIndex) => (
					<div className='word' key={wordIndex}>
						{word.split('').map((char, letterIndex) => (
							<span key={letterIndex} className='letter'>
								{char}
							</span>
						))}
					</div>
				))}

				<p className='textBeforeAdoption'>Zanim adoptujesz, zapoznaj się z poniższymi punktami</p>
			</div>
			<div className='stepsSection'>
				<div className='section stepContainer step1'>
					<div className='titleContainer'>
						<h2>Zanim dokonasz wyboru, przeanalizuj konsekwencje</h2>
					</div>
					<div className='sideTextContainer'>
						<p>
							Przemyślana decyzja jest kluczowym elementem procesu. Zwierzę to nie zabawka, tylko żywe stworzenie, które
							czuje, myśli i chce być kochane.
						</p>
					</div>
				</div>
				<div className='section stepContainer secondStep step2'>
					<div className='wholeTextContainer'>
						<div className='titleContainer'>
							<h2> Wybór schroniska lub fundacji</h2>
						</div>
						<div className='sideTextContainer'>
							<p>
								Wybierz sprawdzone schronisko bądź fundację. Nie musi to być nasze schronisko! Ważne by kolejny futrzak
								miał nowy dom!
							</p>
						</div>
					</div>
					<div className='stepImageContainer'>
						<img
							src={step1Dog}
							alt='Pies patrzący prosto przed siebie z pięknymi, szklistymi oczami'
							className='stepImage'
						/>
					</div>
				</div>
				<div className='section stepContainer step3'>
					<div className='stepImageContainer'>
						<img
							src={step3DogWithGirl}
							alt='Dziewczyna w białej bluzce przytula psa i patrzy na niego czule. Pies jest szczęśliwy z językiem na wierzchu'
							className='stepImage'
						/>
					</div>
					<div className='wholeTextContainer'>
						<div className='titleContainer'>
							<h2>Zapoznanie z psem</h2>
						</div>
						<div className='sideTextContainer'>
							<p>
								Odwiedź schronisko i zapoznaj się ze zwierzakiem. Spędź z nim trochę czasu i sprawdź jak reaguje na
								Ciebie i otoczenie.
							</p>
						</div>

						<button className='knowTheDogButton' onClick={() => navigate(`/animals`)}>
							ZOBACZ NASZE ZWIERZĘTA
						</button>
					</div>
				</div>
				<div className='section stepContainer step4'>
					<div className='titleContainer'>
						<h2>Procedura adopcyjna</h2>
						<h3>Adopcja psa to formalny proces, który może obejmować</h3>
					</div>
					<div className='contentContainer'>
						<div className='sideTextContainer'>
							<p>🦴 rozmowę z opiekunem lub wolontariuszem schroniska,</p>
							<p>🦴 ankietę przedadopcyjną, pozwalającą ocenić Twoje przygotowanie,</p>
						</div>
						<div className='stepImageContainer'>
							<img
								src={step4Dog}
								alt='Kreskówkowy pies, stworzony przez sztuczną inteligencje. Biały i uśmiechnięty.'
								className='stepImage'
							/>
						</div>
						<div className='sideTextContainer'>
							<p>🦴 wizytę przedadopcyjną w Twoim domu</p>
							<p>🦴 podpisanie umowy adopcyjnej, w której zobowiązujesz się do odpowiedzialnej opieki</p>
						</div>
					</div>
				</div>
				<div className='section stepContainer step5'>
					<div className='titleContainer'>
						<h2>Adaptacja psa w nowym domu</h2>
					</div>
					<div className='sideTextContainer'>
						<p>
							Po adopcji najważniejsze są pierwsze dni. Pies może być zdezorientowany, zestresowany lub niepewny. Warto
							stworzyć mu spokojne miejsce w domu, gdzie będzie mógł się wyciszyć, i wprowadzać nowe rytuały stopniowo,
							z uwzględnieniem jego komfortu.
						</p>
					</div>
				</div>

				<div className='section stepContainer afterSteps'>
					<div className='titleContainer'>
						<h3>Wciąż się zastanawiasz?</h3>
						<h2>Wesprzyj nas w inny sposób!</h2>
					</div>

					<div className='afterStepsContent'>
						<div className='afterStepsText'>
							<p>
								Nie możesz teraz adoptować? Każda pomoc się liczy – Twoja darowizna pomoże nam ratować kolejne zwierzaki
								💚
							</p>
						</div>
						<button className='donateButton' onClick={() => navigate(`/donate`)}>
							WPŁAĆ DOTACJĘ
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}
