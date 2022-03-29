import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function AddNewCar(): JSX.Element {
    const history = useNavigate();
    const navigateToLogin = () => history('/');

    const checkUser = () => {
        const token = localStorage.getItem('token')
        if (!token) { navigateToLogin() }
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => checkUser(), [])

    return <>
        <h1>ttle</h1>
        <h4>desc</h4>
    </>
}