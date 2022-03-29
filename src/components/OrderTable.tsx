const OrderTable = () => {
    const sortButton = <button><img src="./images/icons/fi_sort.svg" alt="Sort" /></button>;
    const tableItem = `px-5 py-3`;
    const tableArrowNavBtn = `bg-red-400 p-3 pt-1 border border-blue-700 rounded-sm text-2xl`;
    const tableNumberNavBtn = `bg-red-400 py-3 px-4 border border-blue-700 rounded-sm`;

    return <>
        <span className="border-l-4 border-red-500 pl-2"><b>List Order</b></span>

        <div className="relative overflow-x-auto">
            <table className="w-full text-left">
                <thead className="bg-gray-500">
                    <tr>
                        <th scope="col" className={`${tableItem} w-12`}>No</th>
                        <th scope="col" className={tableItem}>User Email {sortButton}</th>
                        <th scope="col" className={tableItem}>Car {sortButton}</th>
                        <th scope="col" className={tableItem}>Start Rent {sortButton}</th>
                        <th scope="col" className={tableItem}>Finish Rent {sortButton}</th>
                        <th scope="col" className={tableItem}>Price {sortButton}</th>
                        <th scope="col" className={tableItem}>Status {sortButton}</th>
                    </tr>
                </thead>
                <tbody className="bg-white">
                    <tr className="border-b">
                        <td className={tableItem}>1</td>
                        <td className={tableItem}>User Email</td>
                        <td className={tableItem}>Car</td>
                        <td className={tableItem}>Start Rent</td>
                        <td className={tableItem}>Finish Rent</td>
                        <td className={tableItem}>Price</td>
                        <td className={tableItem}>Status</td>
                    </tr>
                </tbody>
            </table>
        </div>

        {/* <!-- TABLE PAGINATION --> */}
        <div className="flex  gap-5 my-5">
            <div>
                <span>Limit<br /></span>
                <select className="mt-2 p-2.5 border border-gray-300">
                    <option value="1">10</option>
                    <option value="2">20</option>
                    <option value="3">30</option>
                </select>
            </div>

            <div>
                <span>Jump To Page<br /></span>
                <div className="mt-2">
                    <select className="py-2.5 pl-2 pr-14 text-left border border-gray-300">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                    </select>
                    <button className="bg-red-400 p-2.5" type="button">Go</button>
                </div>
            </div>

            <nav className="ml-auto mt-5">
                <button className={tableArrowNavBtn}><b>&laquo;</b></button>
                <button className={tableNumberNavBtn}>1</button>
                <button className={tableNumberNavBtn}>2</button>
                <button className={tableNumberNavBtn}>3</button>
                <button className={tableNumberNavBtn}>...</button>
                <button className={tableNumberNavBtn}>9</button>
                <button className={tableArrowNavBtn}><b>&raquo;</b></button>
            </nav>
        </div>
    </>
}

export default OrderTable