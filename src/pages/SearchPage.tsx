import SearchMenu from "../components/SearchMenu";

export default function SearchPage() {
    const flexDisplay = `flex flex-col lg:flex-row gap-5`;

    return <>
        <div className={flexDisplay}>
            <div className="mx-9 lg:mx-14 my-16 lg:my-auto">
                <h2 className="text-4xl font-bold mb-4">Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</h2>
                <p className="">Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas
                    terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmuuntuk sewa mobil selama 24 jam.</p>
            </div>
            <img className="" src="./images/search_page_car.png" alt="Car" />
        </div>

        {/* SEARCH SECTION */}
        <SearchMenu/>
    </>
}