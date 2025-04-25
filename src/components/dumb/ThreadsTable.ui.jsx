import { useNavigate } from "react-router-dom"
import { useState } from 'react'

export default function ThreadsTableUi({ data, onDelete, user }) {
    const [deleteModal, setDeleteModal] = useState({
        display: false,
        id: ''
    })

    const navigate = useNavigate()

    return (
        <>
            <div className="container">
                <div className="d-flex justify-content-between my-4 align-items-center">
                    <h1>Welcome {user}</h1>
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
                                <th scope="col">ASSOCIATED MOVIE</th>
                                <th scope="col">THREAD TITLE</th>
                                <th scope="col">USERNAME</th>
                                <th scope="col">CREATION DATE</th>
                                <th scope="col">OPERATIONS</th>
                            </tr>
                        </thead>
                        <tbody className="table_body">
                            {
                                data.map(item => (
                                    <tr key={item.id} className="table_row">
                                        <td scope="row">{item.id}</td>
                                        <td>{item.movie_title}</td>
                                        <td>{item.title}</td>
                                        <td>{item.username}</td>
                                        <td>{item.creation_date}</td>
                                        <td className="d-flex">
                                            <button onClick={() => navigate(`/${item.id}/thread`)} className="btn btn-warning mx-3">Edit (per ora e uno show)</button>
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