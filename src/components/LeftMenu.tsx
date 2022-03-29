import { Link, useLocation } from "react-router-dom";

export default function LeftMenu(): JSX.Element {
    // get the active Route path
    let isLoginPage = useLocation().pathname === '/' ? true : false
    const sidebarItem: string = `px-7 py-3 hover:bg-white`;

    // if the active Route path is Login, then disable Sidebar
    return isLoginPage ? <nav></nav> : <nav className="flex flex-col w-64 text-lg overflow-hidden bg-orange-600">
        <h6 className="p-6 text-xl"><b>DASHBOARD</b></h6>
        <hr />
        <Link to={"/dashboard"} className={sidebarItem}><b>Dashboard</b></Link>
    </nav>
}