import { useState } from "react"
import { useNavigate } from "react-router-dom"

interface bodyType {
    body: { email: string, password: string }
}

function mockFetch(url: string, { body }: bodyType) {
    const { email, password } = body
    if (email !== '' || password !== '')
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

        mockFetch('http://api.example.com/v1/auth/login', { body: { email, password } })
            .then(res => {
                localStorage.setItem('token', res.accesToken)
                navigateToDashboard()
            })
            .catch(err => alert(err))
    }

    const tailwindTransition = `transition-all duration-300 ease-in-out`;
    const inputStyle = "border border-gray-300 rounded block w-full p-2.5 mt-2";

    return <div className="flex flex-col lg:flex-row lg:items-center bg-white -m-10">
        <img className="h-screen" src="images/car_login.png" alt="Cars" />
        <div className={`grow p-14`}>
            <img className="w-36" src="images/logo2.png" alt="logo2" />
            <h3 className="my-12 text-3xl"><b>Welcome, Admin BCR</b></h3>

            <form onSubmit={handleSubmit} className={`flex flex-col`}>
                <div className="mb-6">
                    <label className="text-lg">Email</label>
                    <input type="email" className={inputStyle} placeholder="Contoh johndee@example.com" required onChange={handleOnChange} />
                </div>
                <div className="mb-6">
                    <label className="text-lg">Password</label>
                    <input type="password" className={inputStyle} placeholder="6+ karakter" required onChange={handleOnChange} />
                </div>
                <input className={`mt-5 p-3 text-white bg-darkblue rounded cursor-pointer hover:text-2xl ${tailwindTransition}`} type="submit" value="Sign In" />
            </form>
        </div>
    </div>
}