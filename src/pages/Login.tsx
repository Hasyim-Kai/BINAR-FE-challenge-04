import { useState } from "react"
import { useNavigate } from "react-router-dom"

interface bodyType {
    body: { email: string, password: string }
}

function mockFetch(url: string, { body }: bodyType) {
    const { email, password } = body
    if (email !== 'admin@admin.com' || password !== '1')
        return Promise.reject('Email atau Password salah!')

    return Promise.resolve({ accesToken: 'pura-puranya-ini-token' })
}

export default function Login(): JSX.Element {
    const [state, setState] = useState({ email: '', password: '' })
    const history = useNavigate();
    const navigateToDashboard = () => history('/dashboard');

    const handleOnChange = (event: any) => {
        setState({
            ...state,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = (event: any) => {
        event.preventDefault()
        const { email, password } = state

        mockFetch('http://api.example.com/v1/auth/login', {
            body: { email, password }
        }).then(res => {
            localStorage.setItem('token', res.accesToken)
            navigateToDashboard()
        }).catch(err => alert(err))
    }

    return <div className="flex">
        <div>aaaa</div>
        <div className={`bg-orange-500 w-ful`}>
            <form onSubmit={handleSubmit} className={`flex flex-col`}>
                <label>Email
                    <input type="email" name="email" onChange={handleOnChange} />
                </label>
                <label>Password
                    <input type="password" name="password" onChange={handleOnChange} />
                </label>
                <input type="submit" value="submit" />
            </form>
        </div>
    </div>
}