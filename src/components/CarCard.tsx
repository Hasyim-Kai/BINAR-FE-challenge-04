import { Link } from "react-router-dom";

export default function CarCard() {
    const id: number = 1;

    return <div className="bg-white mb-5 p-5 max-w-xs border-2 border-backgroundGrey rounded">
        <img className="pt-5 px-1 mb-10 w-72" src="/images/car.png" alt="Car" />

        <p className="mb-2">Nama / Tipe Mobil</p>
        <p className="mb-2 text-lg"><b>Rp. 430.000 / Hari</b></p>
        <p className="mb-3 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <p className="mb-3 flex"><img className="mr-2" src="/images/icons/fi_users.svg" alt="user" />aaaaa</p>
        <p className="mb-3 flex"><img className="mr-2" src="/images/icons/fi_settings.svg" alt="car_type" />aaaa</p>
        <p className="mb-3 flex"><img className="mr-2" src="/images/icons/fi_calendar.svg" alt="manufactured_date" />aaaa</p>

        <Link to={`/car-rent-detail/${id}`} className="mt-5 flex justify-center text-xs bg-green-500 text-white rounded-sm py-4"><b>Pilih Mobil</b></Link>
    </div>
}