const CarTable = () => {
    return <>
        <span className="border-start border-3 ps-2 border-darkblue"><b>List Order</b></span>
        {/* <table className="table table-light mt-3 table-borderless shadow-sm">
            <thead className="table-primary">
                <tr>
                    <th scope="col">No</th>
                    <th scope="col">User Email</th>
                    <th scope="col">Car</th>
                    <th scope="col">Start Rent</th>
                    <th scope="col">Finish Rent</th>
                    <th scope="col">Price</th>
                    <th scope="col">Status</th>
                </tr>
            </thead>
            <tbody className="table-bordered">
                <% orderData.forEach( item => { %>
            <tr>
                <th scope="row"><%= item.No %></th>
                <td><%= item.UserEmail %></td>
                <td><%= item.Car %></td>
                <td><%= item.StartRent %></td>
                <td><%= item.FinishRent %></td>
                <td><%= item.Price %></td>
                <td><%= item.Status %></td>
            </tr>
        <% }) %>
            </tbody>
        </table> */}

        {/* <!-- TABLE PAGINATION --> */}
        <div className="d-flex gap-3 align-items-center mb-5">
            <div>
                <span>Limit<br/></span>
                <select className="form-select mt-2" aria-label="Default select example">
                    <option selected>10</option>
                    <option value="2">20</option>
                    <option value="3">30</option>
                </select>
            </div>

            <div>
                <span>Jump To Page<br/></span>
                <div className="input-group mt-2">
                    <select className="form-select" aria-label="Default select example">
                        <option selected>1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                    </select>
                    <div className="input-group-append">
                        <button className="btn btn-darkblue" type="button">Go</button>
                    </div>
                </div>
            </div>


            <nav className="ms-auto" aria-label="Page navigation example">
                <ul className="pagination">
                    <li className="page-item">
                        <a className="page-link" href="#" aria-label="Previous">
                            <span aria-hidden="true">&laquo;</span>
                        </a>
                    </li>
                    <li className="page-item"><a className="page-link" href="#">1</a></li>
                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                    <li className="page-item"><a className="page-link" href="#">...</a></li>
                    <li className="page-item"><a className="page-link" href="#">9</a></li>
                    <li className="page-item">
                        <a className="page-link" href="#" aria-label="Next">
                            <span aria-hidden="true">&raquo;</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    </>
}

export default CarTable