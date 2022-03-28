import { Link } from "react-router-dom";

export default function Sidebar(): JSX.Element {
    const sidebarItem: string = `w-full p-1 text-center text-white hover:bg-green-300`;

    return <nav className="flex flex-col gap-3 items-center text-lg bg-green-600">
        <Link to={"/dashboard"} className="py-3">
            <img className="mx-auto" src="images/logo1.png" alt="logo1" />
        </Link>
        <Link to={"/dashboard"} className={sidebarItem}>
            <img className="mx-auto" src="images/icons/home.svg" alt="Dashboard" />
            <span><small><b>Dashboard</b></small></span>
        </Link>
        <Link to={"/carlist"} className={sidebarItem}>
            <img className="mx-auto" src="images/icons/fi_truck.svg" alt="Cars" />
            <span><small><b>Cars</b></small></span>
        </Link>
    </nav>
}