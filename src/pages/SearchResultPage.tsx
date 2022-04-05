import CarCard from "../components/CarCard";
import SearchMenu from "../components/SearchMenu";

export default function SearchResultPage() {
   const flexDisplay = `flex flex-wrap justify-around lg:w-9/12 mx-auto`;

   return <>
      <div className={`bg-backgroundGrey h-40`}></div>
      {/* SEARCH SECTION */}
      <SearchMenu />
      <div className={`${flexDisplay} mt-10`}>
         <CarCard />
         <CarCard />
         <CarCard />
         <CarCard />
         <CarCard />
      </div>


   </>
}