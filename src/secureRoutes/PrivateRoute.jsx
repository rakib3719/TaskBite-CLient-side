
import PropTypes from 'prop-types';
import { Navigate, useLocation } from 'react-router-dom';

import { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import RingLoading from '../component/loader/RingLoading';


const PrivateRoute = ({children}) => {

    const currentLocation = useLocation().pathname
    const {loader, user} = useContext(AuthContext)
    if(loader){
        return <RingLoading></RingLoading>
    }
    if(user){

        return children
    }


    return <Navigate state={currentLocation}  to='/login' ></Navigate>}

PrivateRoute.propTypes = {
    children: PropTypes.node
};

export default PrivateRoute;