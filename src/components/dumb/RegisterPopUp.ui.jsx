import { Link } from 'react-router-dom'

export default function RegisterPopUpUi({ setVisible }) {
    return (
        <>

            <div className="card register_popup">
                <div className="card-body">

                    <p>Please, register an account by pressing on the following button  to leave a review</p>
                    <Link to={'/register'}>
                        <button className="btn btn-primary">Register</button>
                    </Link>
                    <button onClick={() => setVisible(false)} className='btn btn-danger mx-3'>Close</button>
                </div>
            </div>


        </>
    )
}