import { Navigate } from 'react-router-dom';

export default function AdminRoute({ children, requiredRole }) {

    const currentUser = JSON.parse(localStorage.getItem('user'))
    console.log(currentUser);


    if (!currentUser) {
        // utente non loggato
        return <Navigate to='/login' replace />
    }

    if (requiredRole !== undefined && currentUser.role !== requiredRole) {
        //utente loogato ma non admin
        return <Navigate to='/login' replace />
    }

    return children
}