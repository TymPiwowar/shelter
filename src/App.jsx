import React, { useState, useEffect } from 'react'
import { supabase } from './createClient'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {
	const [users, setUsers] = useState([])

	console.log(users)

	useEffect(() => {
		fetchUsers()
	}, [])

	async function fetchUsers() {
		const { data } = await supabase.from('users').select('*')
		setUsers(data)
		console.log(data)
	}

	return <div>
    <BrowserRouter>
      <Routes>
        <Route index element
      </Routes>
    
    </BrowserRouter>
  </div>
}

export default App
