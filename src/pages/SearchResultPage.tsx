import { useEffect, useState } from "react";
import CarCard from "../components/CarCard";
import SearchMenu from "../components/SearchMenu";

export default function SearchResultPage() {
   const [carList, setCarList] = useState([])

   async function GetAllCars() {
      try {
         const response = await fetch(`https://rent-cars-api.herokuapp.com/admin/car`);
         const data = await response.json();
         setCarList(data);
      } catch (error) {
         console.log(`Error`)
      }
   }

   useEffect(() => { GetAllCars(); }, [])

   const flexDisplay = `flex flex-wrap justify-around lg:w-9/12 mx-auto`;

   return <>
      <div className={`bg-backgroundGrey h-40`}></div>
      {/* SEARCH SECTION */}
      <SearchMenu />
      <div className={`${flexDisplay} mt-10`}>
         {carList.map(car => <CarCard id={car[`id`]} name={car[`name`]} category={car[`category`]} price={car[`price`]} image={car[`image`]} />)}
      </div>
   </>
}