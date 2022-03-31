import { Link } from "react-router-dom";

export default function CarCard() {
    return <div className="bg-white p-7 max-w-sm">
        <img className="pt-5 px-2 mb-10 w-72" src="images/car.png" alt="Car" />

        <p className="mb-2">Nama / Tipe Mobil</p>
        <p className="mb-3 text-lg"><b>Rp. 430.000 / Hari</b></p>
        <p className="mb-3 flex gap-2"><img src="images/icons/fi_key.svg" alt="key" /> Start rent - Finish rent</p>
        <p className="mb-3 flex gap-2"><img src="images/icons/fi_clock.svg" alt="clock" /> Updated at 4 Apr 2022 09.00</p>

        <div className="flex gap-3 mt-5">
            <button className="flex gap-2 border-2 border-red-500 text-red-500 rounded py-3 px-6 flex-1">
                <img src="images/icons/fi_trash.svg" alt="Del" /><b>Delete</b></button>
            <Link to='/editcar' className="flex items-center justify-center gap-2 bg-green-500 text-white rounded-sm py-3 px-6 flex-1">
                <img src="images/icons/fi_edit.svg" alt="Del" /><b>Edit</b></Link>

        </div>
    </div>
}