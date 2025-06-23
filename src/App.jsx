import { Routes, Route } from 'react-router-dom'
import { createClient } from '@supabase/supabase-js'
import Home from './pages/Home/Home'
import AuthPage from './pages/Auth/Auth'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Adpotion from './pages/Adpotion/Adpotion'
import Newsfeed from './pages/Newsfeed/Newsfeed'
import Donate from './pages/Donate/Donate'

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
					<Route path='/Adoption' element={<Adpotion />} />
					<Route path='/Newsfeed' element={<Newsfeed />} />
					<Route path='/Donate' element={<Donate />} />
					<Route path='/auth' element={<AuthPage supabaseClient={supabase} />} />
				</Routes>
			</div>
		</>
	)
}

export default App
