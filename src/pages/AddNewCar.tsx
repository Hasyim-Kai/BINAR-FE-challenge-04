import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function AddNewCar(): JSX.Element {
    const history = useNavigate();
    const navigateToLogin = () => history('/');

    const checkUser = () => {
        const token = localStorage.getItem('token')
        if (!token) { navigateToLogin() }
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => checkUser(), [])

    const redStar = <span className="text-red-500">*</span>
    const formItemDiv = `grid items-center grid-cols-5 mb-5`;
    const formItemLabel = `text-gray-700`;
    const formItemInput = `form-control col-span-4 max-w-sm px-3 py-2 border border-gray-300 rounded`;

    return <>
        {/* BREADCRUMB */}
        <ol className="flex items-center mb-7 space-x-1 md:space-x-3" aria-label="Breadcrumb">
            <li><Link to='/carlist'><b>Cars</b></Link></li>
            <li className="flex items-center">
                <svg className="w-6 h-6 text-gray-400" fill="black" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
                <Link to='/carlist' className="ml-1 md:ml-2"><b>List Cars</b></Link>
                </li>
            <li className="flex items-center">
                <svg className="w-6 h-6 text-gray-400" fill="black" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
                <Link to='/carlist/add_new_car' className="ml-1 md:ml-2">Add New Car</Link>
            </li>
        </ol>

        {/* <!-- TITLE --> */}
        <h1 className="text-2xl mb-5"><b>Add New Car</b></h1>

        {/* <!-- FORM --> */}
        <form action="" method="post">
            {/* <!-- INPUT FORM --> */}
            <div className="bg-white p-4 mb-10">
                <div className={formItemDiv}>
                    <label className={formItemLabel}>Nama{redStar}</label>
                    <input type="text" className={formItemInput} name="name" placeholder="Placeholder" />
                </div>

                <div className={formItemDiv}>
                    <label className={formItemLabel}>Harga{redStar}</label>
                    <input type="number" className={formItemInput} name="harga" placeholder="Placeholder" />
                </div>

                <div className="grid grid-cols-5 mb-5">
                    <label className="mt-2">Foto{redStar}</label>
                    <div>
                        <input className={`${formItemInput} w-96 file:bg-red-500 file:text-white file:border-0 file:mr-4 file:py-2 file:px-4 px-0 py-0`} type="file" name="car_photo" />
                        <div className="text-sm text-gray-500 mt-1">File size max. 2MB</div>
                    </div>
                </div>

                <div className={formItemDiv}>
                    <label className={formItemLabel}>Start Rent</label>
                    <div className="col-span-4">-</div>
                </div>

                <div className={formItemDiv}>
                    <label className={formItemLabel}>Finish Rent</label>
                    <div className="col-span-4">-</div>
                </div>

                <div className={formItemDiv}>
                    <label className={formItemLabel}>Created At</label>
                    <div className="col-span-4">-</div>
                </div>

                <div className={formItemDiv}>
                    <label className={formItemLabel}>Updated At</label>
                    <div className="col-span-4">-</div>
                </div>
            </div>

            {/* <!-- BUTTON FORM --> */}
            <Link className="bg-white rounded-sm px-3 py-2 border-2 border-emerald-700" to="/carlist">Cancel</Link>
            <button type="submit" className="ml-5 rounded-sm px-3 py-2 bg-red-500 text-white">Save</button>
        </form>
    </>
}