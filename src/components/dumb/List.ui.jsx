import { Link } from 'react-router-dom'

export default function ListUi({ data }) {
    return (
        <>
            <div className="container">
                <h2 className="py-4">Movie List: </h2>
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-4">
                    {data.map(item => (
                        <Link key={item.id} className='link_list' to={`/${item.id}/movie`}>
                            <div className="col h-100">
                                <div className="card_list" >
                                    <div className="card-header img_card_container">
                                        <img className="list_img" src={`http://localhost:3000/${item.image}`} alt="" />
                                    </div>
                                    <div className="card-body">
                                        <h3>{item.title}</h3>
                                        <p>{item.abstract}</p>
                                    </div>
                                </div >
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </>
    )
}