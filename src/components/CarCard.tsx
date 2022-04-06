import { Link } from "react-router-dom";

type CarCardPropType = {
    id: number,
    name: string,
    category: string,
    price: number,
    image: string
};

export default function CarCard(props: CarCardPropType) {
    console.log(props)
    return <div className="bg-white mb-5 p-5 max-w-xs border-2 border-backgroundGrey rounded" key={props.id}>
        <img className="pt-5 px-1 mb-10 w-72 h-48" src={props.image} alt="Car" />

        <p className="mb-2">{props.name} / {props.category}</p>
        <p className="mb-3 text-lg"><b>Rp. {props.price} / Hari</b></p>
        <p className="mb-4 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <p className="mb-3 flex text-sm"><img className="mr-2" src="/images/icons/fi_users.svg" alt="user" />4 Orang</p>
        <p className="mb-3 flex text-sm"><img className="mr-2" src="/images/icons/fi_settings.svg" alt="car_type" />Manual</p>
        <p className="mb-3 flex text-sm"><img className="mr-2" src="/images/icons/fi_calendar.svg" alt="manufactured_date" />Tahun 2020</p>

        <Link to={`/car-rent-detail/${props.id}`} className="mt-5 flex justify-center text-xs bg-green-500 text-white rounded-sm py-4"><b>Pilih Mobil</b></Link>
    </div>
}