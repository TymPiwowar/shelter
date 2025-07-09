import React, { useState } from 'react'
import './Newsfeed.css'
import { useNavigate } from 'react-router-dom'
import newsData from '../../context/NewsData'

export default function Newsfeed() {
	const navigate = useNavigate()
	const itemsPerPage = 6
	const [currentPage, setCurrentPage] = useState(1)
	const totalPages = Math.ceil(newsData.length / itemsPerPage)

	const paginatedNews = newsData.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)

	const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1)

	return (
		<>
			<div className='NewsfeedContainer'>
				<h1>Aktualności</h1>
				<div className='newsGrid'>
					{paginatedNews.map(news => (
						<div key={news.id} className='newsCard'>
							<div className='newsImage' style={{ backgroundImage: `url(${news.image})` }}></div>
							<div className='newsTitleContainer'>
								<h2>{news.title}</h2>
							</div>
							<div className='newsDescriptionContainer'>
								<p>{news.text}</p>
							</div>
							<button
								className='knowMoreAboutNewsButton'
								onClick={() => navigate(`/newsfeed/news/${encodeURIComponent(news.id)}`)}>
								Czytaj więcej
							</button>
						</div>
					))}
				</div>

				<div className='pagesButtonsContainer'>
					<button disabled={currentPage === 1} onClick={() => setCurrentPage(p => p - 1)} className='extremeButton'>
						‹ Poprzednia
					</button>
					{pageNumbers.map(pageNum => (
						<button
							key={pageNum}
							onClick={() => setCurrentPage(pageNum)}
							className={pageNum === currentPage ? 'active circleButton' : 'circleButton'}>
							{pageNum}
						</button>
					))}
					<button
						disabled={currentPage === totalPages}
						onClick={() => setCurrentPage(p => p + 1)}
						className='extremeButton'>
						Następna ›
					</button>
				</div>
			</div>

			{/* <div className='pagesButtonsContainer'>
				<button disabled={currentPage === 1} onClick={() => setCurrentPage(p => p - 1)} className='extremeButton'>
					‹ Poprzednia
				</button>
				{pageNumbers.map(pageNum => (
					<button
						key={pageNum}
						onClick={() => setCurrentPage(pageNum)}
						className={pageNum === currentPage ? 'active circleButton' : 'circleButton'}>
						{pageNum}
					</button>
				))}
				<button
					disabled={currentPage === totalPages}
					onClick={() => setCurrentPage(p => p + 1)}
					className='extremeButton'>
					Następna ›
				</button>
			</div> */}
		</>
	)
}
