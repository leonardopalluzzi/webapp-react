import { Navigate } from 'react-router-dom';
import { useAuthContext } from '../../contexts/authenticationContext'

export default function AdminRoute({ children, requiredRole }) {

    const { loginEsit } = useAuthContext()
    console.log(loginEsit);


    if (!loginEsit) {
        // utente non loggato
        return <Navigate to='/login' replace />
    }

    if (requiredRole !== undefined && loginEsit.role !== requiredRole) {
        //utente loogato ma non admin
        return <Navigate to='/login' replace />
    }

    return children
}