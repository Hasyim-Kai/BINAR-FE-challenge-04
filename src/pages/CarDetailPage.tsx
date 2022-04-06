import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import GreenButton from "../components/GreenButton";
import SearchMenu from "../components/SearchMenu";

export default function CarDetailPage() {
   const { id } = useParams();
   const [carDetail, setCarDetail] = useState({
      id: `none`, name: `none`,
      category: `none`, price: `000`,
      image: `none`
   })

   async function GetCarDetail(id: string = `1`) {
      try {
         const response = await fetch(`https://rent-cars-api.herokuapp.com/admin/car/${id}`);
         const data = await response.json();
         setCarDetail(data);
         // console.log(data)
      } catch (error) {
         console.log(`Error`)
      }
   }

   useEffect(() => { GetCarDetail(id); }, [])

   const flexDisplay = `flex flex-col lg:flex-row justify-between lg:items-start lg:w-9/12 mx-7 lg:mx-auto`;
   const sectionStyle = `p-6 border-2 border-backgroundGrey rounded-lg`;
   const unorderedListStyle = "ml-7 list-disc my-3 text-gray-500";

   return <>
      <div className={`bg-backgroundGrey h-40`}></div>
      {/* SEARCH SECTION */}
      <SearchMenu />
      <div className={`${flexDisplay} mt-10`}>


         <div className="flex flex-col mb-7 mr-7 w-full">
            <section className={`${sectionStyle} flex-1 mb-7`}>
               <div>
                  <h4 className="text-lg font-bold mb-4">Tentang Paket</h4>

                  <p>Include</p>
                  <ul className={unorderedListStyle}>
                     <li>Apa saja yang termasuk dalam paket misal durasi max 12 jam</li>
                     <li>Sudah termasuk bensin selama 12 jam</li>
                     <li>Sudah termasuk Tiket Wisata</li>
                     <li>Sudah termasuk pajak</li>
                  </ul>

                  <p>Exclude</p>
                  <ul className={unorderedListStyle}>
                     <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                     <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                     <li>Tidak termasuk akomodasi penginapan</li>
                  </ul>
               </div>
               <div>
                  <div className="flex justify-between mt-7">
                     <h4 className="text-lg font-bold">Refund, Reschedule, Overtime</h4>
                     <img className="w-5" src="/images/icons/arrow_up.svg" alt="arrow_up" />
                  </div>

                  <ul className={unorderedListStyle}>
                     <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                     <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                     <li>Tidak termasuk akomodasi penginapan</li>
                     <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                     <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                     <li>Tidak termasuk akomodasi penginapan</li>
                     <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                     <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                     <li>Tidak termasuk akomodasi penginapan</li>
                  </ul>
               </div>
            </section>

            <div className="ml-auto"><GreenButton text="Lanjutkan Pembayaran" /></div>
         </div>


         <aside className={`${sectionStyle} h-auto lg:w-1/2`}>
            <img className="mx-auto" src={carDetail.image} alt="Car" />
            <h4 className="font-bold mb-2 mt-12">{carDetail.name} / {carDetail.category}</h4>
            <div className="flex flex-wrap mb-12 text-gray-500">
               <p className="flex mr-4"><img className="mr-2" src="/images/icons/fi_users.svg" alt="user" />4 Orang</p>
               <p className="flex mr-4"><img className="mr-2" src="/images/icons/fi_settings.svg" alt="car_type" />Manual</p>
               <p className="flex mr-4"><img className="mr-2" src="/images/icons/fi_calendar.svg" alt="manufactured_date" />Tahun 2020</p>
            </div>
            <div className="flex justify-between">
               <p>Total</p>
               <p className="text-lg font-bold">Rp. {carDetail.price}</p>
            </div>
            <Link to={`/#`} className="mt-5 flex justify-center bg-green-500 text-white rounded-sm py-2"><b>Lanjutkan Pembayaran</b></Link>
         </aside>
      </div>

   </>
}