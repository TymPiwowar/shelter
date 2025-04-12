import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import { createClient } from '@supabase/supabase-js'
import './Auth.css'

const supabase = createClient(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_ANON_KEY)

const AuthPage = ({ supabaseClient }) => {
	return (
		<div className='centered-container'>
			<Auth supabaseClient={supabaseClient} appearance={{ theme: ThemeSupa }} />
		</div>
	)
}

export default AuthPage
