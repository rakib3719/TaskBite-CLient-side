
import PropTypes from 'prop-types';
import { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';

import useGetUser from '../hook/useGetUser';
import RingLoading from '../component/loader/RingLoading';

const AdminPrivateRoute =  ({children}) => {
    const currentLocation = useLocation().pathname
    const {loader, user} = useContext(AuthContext);
    const [userData, refetch, isLoading] = useGetUser()
    const navigate = useNavigate()
    if(loader || isLoading){
        return <RingLoading></RingLoading>
    }

    if(user && userData?.role === "admin"){

        return children
    }
if(!user){
    return <Navigate state={currentLocation}  to='/login' ></Navigate>
}

navigate('/forbidden')
    


};


AdminPrivateRoute.propTypes = {
    children: PropTypes.node
};

export default AdminPrivateRoute;