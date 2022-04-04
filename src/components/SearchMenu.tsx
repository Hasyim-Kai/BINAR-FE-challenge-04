import { useState } from "react";
import { Link } from "react-router-dom";
import GreenButton from "./GreenButton";

export default function SearchMenu() {
    const [driverType, setDriverType] = useState<string>('');
    const [date, setDate] = useState<string>('');
    const [time, setTime] = useState<string>('');
    const [penumpang, setPenumpang] = useState<number>(0);

    const handleSetDriverType = (e: any) => setDriverType(e.target.value)
    const handleSetDate = (e: any) => setDate(e.target.value)
    const handleSetTime = (e: any) => setTime(e.target.value)
    const handleSetPenumpang = (e: any) => setPenumpang(e.target.value)

    const flexDisplay = `flex gap-3 flex-col lg:flex-row justify-around lg:items-end`;
    const inputStyle = `py-1.5 px-2 border border-gray-300 w-full rounded`;
    const labelStyle = `mb-2 text-sm`;
    const divStyle = `flex-1`;

    return <section className={`${flexDisplay} relative z-50 bg-white -mt-12 lg:w-9/12 mx-auto rounded-lg shadow-lg p-6`}>
        <div className={divStyle}>
            <p className={labelStyle}>Tipe Driver</p>
            <select className={inputStyle} name="TipeDriver" onChange={handleSetDriverType} required>
                <option value="1">1</option>
                <option value="2">2</option>
            </select>
        </div>
        <div className={divStyle}>
            <p className={labelStyle}>Tanggal</p>
            <input className={inputStyle} type="date" name="Tanggal" id="Tanggal" onChange={handleSetDate} required />
        </div>
        <div className={divStyle}>
            <p className={labelStyle}>Waktu Jemput/Ambil</p>
            <input className={inputStyle} type="time" name="WaktuJemputAmbil" onChange={handleSetTime} required />
        </div>
        <div className={divStyle}>
            <p className={labelStyle}>Jumlah Penumpang (Opsional)</p>
            <input className={inputStyle} type="number" name="JumlahPenumpang" placeholder="Jumlah Penumpang" onChange={handleSetPenumpang} required />
        </div>
        <Link to='/book'><GreenButton text='Cari Mobil' /></Link>
    </section>
}