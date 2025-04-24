import { useNavigate } from "react-router-dom"
import { useState } from 'react'

export default function MoviesTableUi({ data, onDelete, user }) {

    const [deleteModal, setDeleteModal] = useState({
        display: false,
        id: ''
    })

    const navigate = useNavigate()

    return (
        <>
            <div className="container">
                <div className="d-flex justify-content-between my-4 align-items-center dashborad_container">
                    <h1>Welcome {user}</h1>
                    <button onClick={() => navigate('/addmovie')} className="btn btn-primary">Add a Movie</button>
                </div>

                <div
                    className="table-responsive"
                >
                    <table
                        className="movie_table position-relative"
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
                        <tbody className="table_body">
                            {
                                data.map(item => (
                                    <tr key={item.id} className="table_row">
                                        <td scope="row">{item.id}</td>
                                        <td>{item.title}</td>
                                        <td>{item.director}</td>
                                        <td>{item.genre}</td>
                                        <td className="abstract">{item.abstract}</td> {/* Troncamento del testo */}
                                        <td>{item.release_year}</td>
                                        <td>
                                            <img className="dashboard_img" src={`http://localhost:3000/${item.image}`} alt={item.title} />
                                        </td>
                                        <td>{item.created_at}</td>
                                        <td>{item.updated_at}</td>
                                        <td className="d-flex">
                                            <button onClick={() => navigate(`/${item.id}/edit`)} className="btn btn-warning mx-3">Edit</button>
                                            <button onClick={() => setDeleteModal({ display: true, id: item.id })} className="btn btn-danger mx-3">Delete</button>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                        {
                            deleteModal.display ? (
                                <>
                                    <div className="delete_modal">
                                        <div className="modal_container">
                                            <p>Are you sure you want to delete this film?</p>
                                            <div className="buttons">
                                                <button className="btn btn-primary" onClick={() => { onDelete(deleteModal.id); setDeleteModal({ display: false, id: '' }) }}>Delete</button>
                                                <button className="btn btn-danger" onClick={() => { setDeleteModal({ display: false, id: '' }) }}>Close</button>
                                            </div>

                                        </div>
                                    </div>
                                </>
                            ) : (
                                <>

                                </>
                            )
                        }
                    </table>
                </div>
            </div>



        </>
    )
}