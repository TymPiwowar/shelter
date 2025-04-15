import './Home.css'
import ImageSlider from '../../components/ImageSlider/ImageSlider'
import Introduction from '../../components/Introduction/Introduction'

const Home = () => {
	const slides = [
		{ url: 'https://cdn.pixabay.com/photo/2017/05/15/13/54/bully-dog-2314909_1280.jpg', title: 'dog1' },
		{ url: 'https://cdn.pixabay.com/photo/2019/04/26/18/23/dog-4158220_1280.jpg', title: 'dog2' },
		{ url: 'https://cdn.pixabay.com/photo/2017/05/31/18/16/hot-dog-2361133_1280.jpg', title: 'dog3' },
		{ url: 'https://cdn.pixabay.com/photo/2020/05/24/17/29/dog-5215263_1280.jpg', title: 'dog4' },
	]

	return (
		<div className='container'>
			<div className='imageSliderContainer'>
				<ImageSlider slides={slides} />
			</div>
			<div className='introductionContainer'>
				<Introduction />
			</div>
		</div>
	)
}

export default Home
