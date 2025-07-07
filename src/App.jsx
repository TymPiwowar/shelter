import { Routes, Route } from 'react-router-dom'
import { createClient } from '@supabase/supabase-js'
import Home from './pages/Home/Home'
import AuthPage from './pages/Auth/Auth'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import ResponsibleAdpotion from './pages/ResponsibleAdpotion/ResponsibleAdpotion'
import Newsfeed from './pages/Newsfeed/Newsfeed'
import Donate from './pages/Donate/Donate'
import Animals from './pages/Animals/Animals'
import AnimalPage from './components/AnimalPage/AnimalPage'
import Footer from './components/Footer/Footer'
// Initialize Supabase client
const supabase = createClient(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_ANON_KEY)

const App = () => {
	return (
		<>
			<Navbar />
			<div className='container'>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/Home' element={<Home />} />
					<Route path='/ResponsibleAdpotion' element={<ResponsibleAdpotion />} />
					<Route path='/Newsfeed' element={<Newsfeed />} />
					<Route path='/Donate' element={<Donate />} />
					<Route path='/Animals' element={<Animals />} />
					<Route path='/Animals/animal/:id' element={<AnimalPage />} />
					<Route path='/auth' element={<AuthPage supabaseClient={supabase} />} />
				</Routes>
				<Footer />
			</div>
		</>
	)
}

export default App
