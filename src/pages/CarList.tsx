import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import CarCard from "../components/CarCard";

export default function CarList(): JSX.Element {
    const filterBtn = `px-3 py-2 border-2 border-gray-400 text-gray-400 bg-white rounded hover:border-darkblue hover:text-darkblue hover:bg-blue-200`;

    const history = useNavigate();
    const navigateToLogin = () => history('/');

    const checkUser = () => {
        const token = localStorage.getItem('token')
        if (!token) { navigateToLogin() }
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => checkUser(), [])

    return <>
        {/* BREADCRUMB */}
        <ol className="flex items-center mb-7 space-x-1 md:space-x-3" aria-label="Breadcrumb">
            <li><Link to='/carlist'><b>Cars</b></Link></li>
            <li className="flex items-center">
                <svg className="w-6 h-6 text-gray-400" fill="black" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
                <Link to='/carlist' className="ml-1 md:ml-2">List Cars</Link>
            </li>
        </ol>

        {/* <!-- TITLE & ADD BUTTON --> */}
        <div className="flex justify-between mb-3">
            <h1 className="text-2xl"><b>List Car</b></h1>
            <Link to='/carlist/add_new_car'>
                <button className="bg-darkblue flex gap-2 px-3 py-2 text-white">
                    <img src="images/icons/fi_plus.svg" alt="Plus" /> Add New Car
                </button>
            </Link>
        </div>

        {/* <!-- FILTER BUTTON GROUP --> */}
        <div className="flex gap-4 mb-7">
            <button className="px-3 py-2 border-2 border-darkblue text-darkblue bg-blue-200 rounded"><b>All</b></button>
            <button className={filterBtn}><b>Small</b></button>
            <button className={filterBtn}><b>Medium</b></button>
            <button className={filterBtn}><b>Large</b></button>
        </div>

        <section className="flex gap-5 justify-between flex-wrap">
            <CarCard />
            <CarCard />
            <CarCard />
        </section>
    </>
}