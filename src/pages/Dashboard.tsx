import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

export default function Dashboard(): JSX.Element {
    const history = useNavigate();
    const navigateToLogin = () => history('/');

    const checkUser = () => {
        const token = localStorage.getItem('token')
        if (!token) { navigateToLogin() }
    }

    useEffect(() => checkUser(), [])

    return <>
        <h1>ttle</h1>
        <h4>desc</h4>
    </>
}