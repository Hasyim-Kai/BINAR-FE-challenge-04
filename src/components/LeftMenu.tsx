import { Link, useLocation } from "react-router-dom";

export default function LeftMenu(): JSX.Element {
    const sidebarItem: string = `px-7 py-3 hover:bg-primaryGrey`;
    
    // get the active Route path
    const currentRoute = useLocation().pathname;
    let isLoginPage = currentRoute === '/' ? true : false

    const dashboardLeftMenu: JSX.Element = <nav className="flex flex-col lg:w-64 w-0 text-lg overflow-hidden bg-white">
        <h6 className="p-6 text-xl"><b>DASHBOARD</b></h6>
        <hr />
        <Link to={"/dashboard"} className={sidebarItem}><b>Dashboard</b></Link>
    </nav>

    const carsLeftMenu: JSX.Element = <nav className="flex flex-col lg:w-64 w-0 text-lg overflow-hidden bg-white">
        <h6 className="p-6 text-xl"><b>CARS</b></h6>
        <hr />
        <Link to={"/carlist"} className={sidebarItem}><b>List Car</b></Link>
    </nav>

    // if the active Route path is Login, then disable Sidebar
    if (isLoginPage) {
        return <nav></nav>;
    } else if (currentRoute === '/dashboard') {
        return dashboardLeftMenu;
    } else {
        return carsLeftMenu;
    }
}