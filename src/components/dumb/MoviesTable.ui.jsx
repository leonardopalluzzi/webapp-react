import { useNavigate } from "react-router-dom"

export default function MoviesTableUi({ data }) {

    const navigate = useNavigate()

    return (
        <>
            <div className="container">
                <h1>Movies Dashboard</h1>
                <div
                    className="table-responsive"
                >
                    <table
                        className="table table-primary"
                    >
                        <thead>
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">TITLE</th>
                                <th scope="col">DIRECTOR</th>
                                <th scope="col">GENRE</th>
                                <th scope="col">ABSTRACT</th>
                                <th scope="col">RELEASE YEAR</th>
                                <th scope="col">IMAGE</th>
                                <th scope="col">CRECREATION DATE</th>
                                <th scope="col">LAST UPDATE</th>
                                <th scope="col">OPERATIONS</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.map(item => (
                                    <tr key={item.id} className="">
                                        <td scope="row">{item.id}</td>
                                        <td>{item.title}</td>
                                        <td>{item.director}</td>
                                        <td scope="row">{item.genre}</td>
                                        <td>{item.abstract}</td>
                                        <td>{item.release_year}</td>
                                        <td scope="row">
                                            <img className="dashboard_img" src={`http://localhost:3000/${item.image}`} alt="" />
                                        </td>
                                        <td>{item.created_at}</td>
                                        <td>{item.updated_at}</td>
                                        <td className="d-flex">
                                            <button onClick={() => navigate(`/${item.id}/edit`)} className="btn btn-warning mx-3">Edit</button >
                                            <button className="btn btn-danger mx-3">Delete</button>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>



        </>
    )
}