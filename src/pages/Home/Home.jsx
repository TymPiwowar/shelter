import './Home.css'
import ImageSlider from '../../components/ImageSlider/ImageSlider'
import Introduction from '../../components/Introduction/Introduction'
import Team from '../../components/TeamPreview/Team'
import Results from '../../components/ShelterResults/Results'
import AdoptionDecision from '../../components/AdoptionDecision/AdoptionDecision'
import Footer from '../../components/Footer/Footer'
import CardSlider from '../../components/CardSlider/CardSlider'
import dog1 from '../../assets/img/dog-7268179_1920.jpg'
import dog2 from '../../assets/img/great_dane_dog_1920.jpg'
import dog3 from '../../assets/img/iceland-dog-1977418_1920.jpg'
import dog4 from '../../assets/img/puppy-742628_1920.jpg'

const Home = () => {
	const slides = [
		{ url: dog1, title: 'dog1' },
		{ url: dog2, title: 'dog2' },
		{ url: dog3, title: 'dog3' },
		{ url: dog4, title: 'dog4' },
	]

	return (
		<div className='container'>
			<div className='imageSliderContainer'>
				<ImageSlider slides={slides} />
			</div>
			<div className='introductionContainer'>
				<Introduction />
			</div>
			<div className='animalsPreviewContainer'>
				<CardSlider />
			</div>
			<div className='teamContainer'>
				<Team />
			</div>
			<div className='resultsContainer'>
				<Results />
			</div>
			<div className='adoptionContainer'>
				<AdoptionDecision />
			</div>

			<Footer />
		</div>
	)
}

export default Home
